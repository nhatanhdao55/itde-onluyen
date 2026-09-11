(function () {
  'use strict';

  const TOPICS = ['cpp', 'dsa', 'db', 'aws', 'net'];
  const QB = window.QB || {};
  const NOTES = window.NOTES || {};
  const EXAM_DATE = new Date('2026-10-10T07:30:00+07:00');
  const KEYS = 'ABCDEFGH';
  const app = document.getElementById('app');

  // ---------- Lưu trữ ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('itde:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('itde:' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } },
    del(k) { try { localStorage.removeItem('itde:' + k); } catch (e) { /* bỏ qua */ } }
  };
  let stats = store.get('stats', {});        // id -> {c, w, last}
  let history = store.get('history', []);    // kết quả thi thử
  let session = null;
  let timerId = null;

  function record(q, correct) {
    const s = stats[q.id] || { c: 0, w: 0 };
    if (correct) s.c++; else s.w++;
    s.last = correct ? 1 : 0;
    stats[q.id] = s;
    store.set('stats', stats);
  }

  // ---------- Dữ liệu ----------
  const byId = {};
  TOPICS.forEach(t => {
    const T = QB[t];
    if (!T) return;
    T.questions.forEach(q => { q.topic = t; byId[q.id] = q; });
  });
  const topicQs = t => (QB[t] ? QB[t].questions : []);
  const chapterName = q => (QB[q.topic].chapters[q.ch] || q.ch);

  // ---------- Tiện ích ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function fmt(s) {
    let h = esc(s || '');
    h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
    h = h.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    return h.replace(/\n/g, '<br>');
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function mmss(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }
  function html(strings) { app.innerHTML = strings; window.scrollTo(0, 0); }
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }

  // ---------- Phiên làm bài ----------
  function makeSession(mode, title, qs, extra) {
    session = Object.assign({
      mode, title, idx: 0, submitted: false, startedAt: Date.now(), duration: 0,
      items: qs.map(q => ({
        id: q.id,
        order: q.fixed ? q.opts.map((_, i) => i) : shuffle(q.opts.map((_, i) => i)),
        chosen: null, flagged: false
      }))
    }, extra || {});
    store.set('session', session);
    go('#/quiz');
  }
  function loadSession() {
    const s = store.get('session', null);
    if (!s || !Array.isArray(s.items)) return null;
    s.items = s.items.filter(it => byId[it.id]);
    return s.items.length ? s : null;
  }
  function saveSession() { if (session) store.set('session', session); }

  // ---------- Router ----------
  function route() {
    clearInterval(timerId);
    const h = location.hash.replace(/^#\/?/, '');
    const [page, arg] = h.split('/');
    document.querySelectorAll('[data-nav]').forEach(a => {
      const p = page || 'home';
      a.classList.toggle('active', a.dataset.nav === p || (p === 'quiz' && a.dataset.nav === (session && session.mode === 'exam' ? 'exam' : 'practice')));
    });
    switch (page) {
      case 'practice': return viewPractice(arg);
      case 'exam': return viewExam();
      case 'wrong': return viewWrong();
      case 'notes': return viewNotes(arg);
      case 'quiz': return viewQuiz();
      case 'result': return viewResult();
      default: return viewHome();
    }
  }

  // ---------- Trang chủ ----------
  function topicProgress(t) {
    const qs = topicQs(t);
    let done = 0, ok = 0;
    qs.forEach(q => { const s = stats[q.id]; if (s) { done++; if (s.last === 1) ok++; } });
    return { total: qs.length, done, ok };
  }

  function topicCard(t, href) {
    const T = QB[t];
    if (!T) return '';
    const p = topicProgress(t);
    return `<a class="card topic" href="${href}">
      <div class="ic">${T.icon}</div>
      <div class="name">${esc(T.name)}</div>
      <div class="muted small">${esc(T.desc)}</div>
      <div class="bar ok" title="Đã làm đúng ${p.ok}/${p.total}"><span style="width:${pct(p.ok, p.total)}%"></span></div>
      <div class="small muted">${p.total} câu · đã làm ${p.done} · đúng ${p.ok} (${pct(p.ok, p.total)}%)</div>
    </a>`;
  }

  function viewHome() {
    const ms = EXAM_DATE - Date.now();
    const days = Math.ceil(ms / 86400000);
    const total = Object.keys(byId).length;
    const done = Object.keys(stats).filter(id => byId[id]).length;
    const ok = Object.keys(stats).filter(id => byId[id] && stats[id].last === 1).length;
    const saved = loadSession();
    html(`
      <h1>Ôn luyện Vòng 1 – Kiến thức nền tảng</h1>
      <div class="hero">
        <div class="card">
          <h3 style="margin-top:0">📋 Thể lệ Vòng 1</h3>
          <dl class="kv">
            <dt>Thời gian</dt><dd><b>10/10/2026</b> (kết quả công bố 13/10/2026)</dd>
            <dt>Hình thức</dt><dd>Thi <b>trắc nghiệm</b>, trực tiếp tại phòng thực hành máy tính – HVNH</dd>
            <dt>Thí sinh</dt><dd>Mỗi đội cử <b>03 thành viên</b> dự thi</dd>
            <dt>Nội dung</dt><dd>Lập trình · CTDL &amp; Giải thuật · Cơ sở dữ liệu · AWS Cloud · Mạng máy tính</dd>
            <dt>Kick-off</dt><dd>09h00 – 11h00, 26/09/2026, Tầng 7 Grand Terra, 36 Cát Linh</dd>
          </dl>
        </div>
        <div class="card">
          <div class="muted small">Đếm ngược tới ngày thi</div>
          <div class="countdown">${ms > 0 ? days + ' ngày' : 'Đã diễn ra'}</div>
          <div class="muted small" style="margin:6px 0 12px">Ngân hàng: <b>${total}</b> câu · Đã làm <b>${done}</b> · Đúng <b>${ok}</b></div>
          <div class="bar ok"><span style="width:${pct(ok, total)}%"></span></div>
          <div class="row" style="margin-top:14px">
            <a class="btn primary" href="#/exam">⏱ Thi thử</a>
            <a class="btn" href="#/practice">📚 Luyện tập</a>
            ${saved && !saved.submitted ? `<a class="btn" href="#/quiz">▶ Làm tiếp bài dở</a>` : ''}
          </div>
        </div>
      </div>
      <h2>Chủ đề ôn tập</h2>
      <div class="grid">${TOPICS.map(t => topicCard(t, '#/practice/' + t)).join('')}</div>
      <h2>Gợi ý lộ trình</h2>
      <div class="card small">
        <ol style="margin:0;padding-left:20px">
          <li>Đọc phần <a href="#/notes">Tóm tắt</a> của từng chủ đề (đặc biệt là <b>CSDL</b> và <b>AWS</b> vì không có trong bài giảng).</li>
          <li>Luyện theo chương, đọc kỹ giải thích ở mỗi câu sai.</li>
          <li>Mỗi 2–3 ngày làm một đề <a href="#/exam">thi thử</a> tổng hợp để quen áp lực thời gian.</li>
          <li>Trước ngày thi: vào <a href="#/wrong">Câu sai</a> để làm lại các câu còn yếu.</li>
        </ol>
        <p class="muted" style="margin-bottom:0">Phím tắt khi làm bài: <kbd>1</kbd>–<kbd>4</kbd> hoặc <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án, <kbd>Enter</kbd>/<kbd>→</kbd> câu tiếp, <kbd>←</kbd> câu trước, <kbd>F</kbd> cắm cờ.</p>
      </div>
    `);
  }

  // ---------- Luyện tập ----------
  function viewPractice(t) {
    if (!t || !QB[t]) {
      html(`<h1>Luyện tập theo chủ đề</h1>
        <p class="muted">Chọn chủ đề, sau đó chọn chương. Ở chế độ luyện tập, đáp án và giải thích hiện ngay sau khi chọn.</p>
        <div class="grid">${TOPICS.map(x => topicCard(x, '#/practice/' + x)).join('')}</div>
        <div class="row" style="margin-top:16px"><button class="btn" id="mixAll">🎲 Trộn 30 câu ngẫu nhiên từ mọi chủ đề</button></div>`);
      document.getElementById('mixAll').onclick = () => {
        const pool = shuffle(Object.values(byId)).slice(0, 30);
        makeSession('practice', 'Luyện tập tổng hợp', pool);
      };
      return;
    }
    const T = QB[t];
    const chs = Object.keys(T.chapters);
    const sel = new Set(chs);
    const countBy = ch => T.questions.filter(q => q.ch === ch).length;
    html(`
      <p><a href="#/practice">← Chọn chủ đề khác</a></p>
      <h1>${T.icon} ${esc(T.name)}</h1>
      <div class="card">
        <div class="row"><b>Chương / mảng kiến thức</b><span class="spacer"></span>
          <button class="chip" id="selAll">Chọn tất cả</button><button class="chip" id="selNone">Bỏ chọn</button></div>
        <div class="chips" id="chips" style="margin-top:10px">
          ${chs.map(ch => `<button class="chip on" data-ch="${ch}">${esc(T.chapters[ch])} <span class="muted">(${countBy(ch)})</span></button>`).join('')}
        </div>
        <div class="row" style="margin-top:16px;align-items:flex-end">
          <label class="field">Số câu
            <select id="cnt"><option value="10">10</option><option value="20" selected>20</option><option value="40">40</option><option value="0">Tất cả</option></select></label>
          <label class="field">Lọc
            <select id="flt"><option value="all">Tất cả câu</option><option value="new">Chưa làm</option><option value="wrong">Đang sai</option></select></label>
          <label class="field">Thứ tự
            <select id="ord"><option value="rand">Ngẫu nhiên</option><option value="seq">Theo chương</option></select></label>
          <span class="spacer"></span>
          <button class="btn primary" id="start">Bắt đầu luyện ▶</button>
        </div>
        <p class="muted small" id="info" style="margin-bottom:0"></p>
      </div>
      <p class="muted small">Xem lại lý thuyết: <a href="#/notes/${t}">Tóm tắt ${esc(T.name)}</a></p>
    `);
    const chipsEl = document.getElementById('chips');
    const pool = () => {
      const f = document.getElementById('flt').value;
      return T.questions.filter(q => sel.has(q.ch) &&
        (f === 'all' || (f === 'new' && !stats[q.id]) || (f === 'wrong' && stats[q.id] && stats[q.id].last === 0)));
    };
    const refresh = () => {
      chipsEl.querySelectorAll('.chip').forEach(b => b.classList.toggle('on', sel.has(b.dataset.ch)));
      document.getElementById('info').textContent = 'Có ' + pool().length + ' câu phù hợp.';
    };
    chipsEl.onclick = e => {
      const b = e.target.closest('.chip'); if (!b) return;
      const ch = b.dataset.ch; sel.has(ch) ? sel.delete(ch) : sel.add(ch); refresh();
    };
    document.getElementById('selAll').onclick = () => { chs.forEach(c => sel.add(c)); refresh(); };
    document.getElementById('selNone').onclick = () => { sel.clear(); refresh(); };
    document.getElementById('flt').onchange = refresh;
    document.getElementById('start').onclick = () => {
      let qs = pool();
      if (!qs.length) { alert('Không có câu nào phù hợp bộ lọc.'); return; }
      if (document.getElementById('ord').value === 'rand') qs = shuffle(qs);
      const n = +document.getElementById('cnt').value;
      if (n) qs = qs.slice(0, n);
      makeSession('practice', T.name, qs);
    };
    refresh();
  }

  // ---------- Thi thử ----------
  function viewExam() {
    const cfg = store.get('examCfg', { per: { cpp: 10, dsa: 10, db: 10, aws: 10, net: 10 }, minutes: 60 });
    html(`
      <h1>⏱ Thi thử tổng hợp</h1>
      <p class="muted">Thể lệ chưa công bố số câu và thời lượng cụ thể. Cấu hình mặc định: <b>50 câu / 60 phút</b>, chia đều 5 nhóm kiến thức – bạn có thể chỉnh lại khi BTC hướng dẫn ở buổi Kick-off.</p>
      <div class="card">
        <div class="row" style="align-items:flex-end">
          ${TOPICS.map(t => `<label class="field">${QB[t].icon} ${esc(QB[t].short)}
              <input type="number" min="0" max="${topicQs(t).length}" value="${Math.min(cfg.per[t] ?? 10, topicQs(t).length)}" data-t="${t}"></label>`).join('')}
          <label class="field">Thời gian (phút)<input type="number" id="mins" min="1" max="300" value="${cfg.minutes}"></label>
        </div>
        <div class="row" style="margin-top:16px">
          <span class="muted" id="sum"></span><span class="spacer"></span>
          <button class="btn primary" id="go">Bắt đầu thi ▶</button>
        </div>
      </div>
      <h2>Lịch sử thi thử</h2>
      ${history.length ? `<div class="card table-wrap"><table class="tbl">
        <tr><th>Thời điểm</th><th>Điểm</th><th>Đúng</th>${TOPICS.map(t => `<th>${esc(QB[t].short)}</th>`).join('')}<th>Thời gian</th></tr>
        ${history.slice().reverse().slice(0, 15).map(h => `<tr>
          <td>${new Date(h.at).toLocaleString('vi-VN')}</td>
          <td><b>${(h.correct / h.total * 10).toFixed(1)}</b></td>
          <td>${h.correct}/${h.total}</td>
          ${TOPICS.map(t => `<td>${h.per && h.per[t] ? h.per[t][0] + '/' + h.per[t][1] : '–'}</td>`).join('')}
          <td>${mmss(h.used)}</td></tr>`).join('')}
      </table></div>` : '<p class="muted">Chưa có bài thi nào.</p>'}
    `);
    const inputs = [...app.querySelectorAll('input[data-t]')];
    const sum = () => { document.getElementById('sum').textContent = 'Tổng: ' + inputs.reduce((a, i) => a + (+i.value || 0), 0) + ' câu'; };
    inputs.forEach(i => i.oninput = sum); sum();
    document.getElementById('go').onclick = () => {
      const per = {}; let qs = [];
      inputs.forEach(i => {
        const t = i.dataset.t; const n = Math.max(0, Math.min(+i.value || 0, topicQs(t).length));
        per[t] = n; qs = qs.concat(shuffle(topicQs(t)).slice(0, n));
      });
      const minutes = Math.max(1, +document.getElementById('mins').value || 60);
      if (!qs.length) { alert('Hãy chọn số câu > 0.'); return; }
      store.set('examCfg', { per, minutes });
      makeSession('exam', 'Thi thử tổng hợp', shuffle(qs), { duration: minutes * 60 });
    };
  }

  // ---------- Làm bài ----------
  function remaining() { return session.duration - (Date.now() - session.startedAt) / 1000; }

  function viewQuiz() {
    if (!session) session = loadSession();
    if (!session) { go('#/'); return; }
    const s = session;
    const it = s.items[s.idx];
    const q = byId[it.id];
    const exam = s.mode === 'exam';
    const reveal = s.submitted || (!exam && it.chosen !== null);
    const answered = s.items.filter(x => x.chosen !== null).length;

    const opts = it.order.map((oi, k) => {
      let cls = '';
      if (reveal) { if (oi === q.a) cls = 'ok'; else if (oi === it.chosen) cls = 'bad'; }
      else if (oi === it.chosen) cls = 'sel';
      return `<button class="opt ${cls}" data-oi="${oi}" ${reveal ? 'disabled' : ''}><span class="key">${KEYS[k]}</span><span>${fmt(q.opts[oi])}</span></button>`;
    }).join('');

    let explain = '';
    if (reveal) {
      const ok = it.chosen === q.a;
      const okKey = KEYS[it.order.indexOf(q.a)];
      explain = `<div class="explain ${it.chosen === null ? '' : ok ? 'ok' : 'bad'}">
        <b>${it.chosen === null ? '⚪ Chưa trả lời' : ok ? '✅ Chính xác!' : '❌ Chưa đúng'}</b> – Đáp án: <b>${okKey}</b>
        ${q.exp ? `<div style="margin-top:6px">${fmt(q.exp)}</div>` : ''}</div>`;
    }

    const palette = s.items.map((x, i) => {
      let c = '';
      if (s.submitted || (!exam && x.chosen !== null)) c = x.chosen === byId[x.id].a ? 'ok' : (x.chosen === null ? '' : 'bad');
      else if (x.chosen !== null) c = 'done';
      if (i === s.idx) c += ' cur';
      if (x.flagged) c += ' flag';
      return `<button class="${c}" data-go="${i}">${i + 1}</button>`;
    }).join('');

    const last = s.idx === s.items.length - 1;
    html(`
      <div class="quiz-head">
        <span class="pill">${esc(s.title)}</span>
        <span class="pill gray">${QB[q.topic].icon} ${esc(QB[q.topic].short)} · ${esc(chapterName(q))}</span>
        <span class="spacer"></span>
        ${exam && !s.submitted ? `<span class="timer" id="timer">${mmss(remaining())}</span>` : ''}
        ${s.submitted ? '<span class="pill gray">Chế độ xem lại</span>' : ''}
      </div>
      <div class="card">
        <div class="muted small">Câu ${s.idx + 1} / ${s.items.length} · đã trả lời ${answered}</div>
        <div class="qtext">${fmt(q.q)}</div>
        ${q.code ? `<pre><code>${esc(q.code)}</code></pre>` : ''}
        <div class="opts" id="opts">${opts}</div>
        ${explain}
        <div class="quiz-foot">
          <button class="btn" id="prev" ${s.idx === 0 ? 'disabled' : ''}>← Trước</button>
          ${exam && !s.submitted ? `<button class="btn ghost" id="flag">${it.flagged ? '✖ Bỏ cờ' : '🚩 Cắm cờ'}</button>` : ''}
          <span class="spacer"></span>
          ${!last ? `<button class="btn primary" id="next">Câu tiếp →</button>` : ''}
          ${!s.submitted ? `<button class="btn ${last ? 'primary' : ''}" id="submit">${exam ? 'Nộp bài' : 'Kết thúc'}</button>`
                         : `<a class="btn ${last ? 'primary' : ''}" href="#/result">Xem kết quả</a>`}
        </div>
      </div>
      <div class="card" style="margin-top:14px">
        <div class="row"><b class="small">Bảng câu hỏi</b><span class="spacer"></span>
          <button class="btn ghost small" id="quit">Thoát bài</button></div>
        <div class="palette" id="pal">${palette}</div>
      </div>
    `);

    document.getElementById('opts').onclick = e => {
      const b = e.target.closest('.opt'); if (!b || b.disabled) return;
      choose(+b.dataset.oi);
    };
    document.getElementById('pal').onclick = e => {
      const b = e.target.closest('[data-go]'); if (!b) return;
      s.idx = +b.dataset.go; saveSession(); viewQuiz();
    };
    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    on('prev', () => move(-1));
    on('next', () => move(1));
    on('flag', () => { it.flagged = !it.flagged; saveSession(); viewQuiz(); });
    on('submit', finish);
    on('quit', () => {
      if (!s.submitted && !confirm('Thoát bài đang làm? Bài sẽ được lưu, bạn có thể làm tiếp từ trang chủ.')) return;
      go('#/');
    });

    if (exam && !s.submitted) {
      const tick = () => {
        const r = remaining();
        const el = document.getElementById('timer');
        if (el) { el.textContent = mmss(r); el.classList.toggle('low', r < 300); }
        if (r <= 0) { clearInterval(timerId); alert('Hết giờ! Bài làm được nộp tự động.'); submit(); }
      };
      clearInterval(timerId); timerId = setInterval(tick, 1000); tick();
    }
  }

  function choose(oi) {
    const s = session, it = s.items[s.idx], q = byId[it.id];
    if (s.submitted) return;
    if (s.mode !== 'exam') {
      if (it.chosen !== null) return;
      it.chosen = oi;
      record(q, oi === q.a);
    } else {
      it.chosen = oi;
    }
    saveSession(); viewQuiz();
  }

  function move(d) {
    const s = session; const n = s.idx + d;
    if (n < 0 || n >= s.items.length) return;
    s.idx = n; saveSession(); viewQuiz();
  }

  function finish() {
    const s = session;
    const left = s.items.filter(x => x.chosen === null).length;
    if (s.mode === 'exam') {
      const msg = left ? `Còn ${left} câu chưa trả lời. Vẫn nộp bài?` : 'Nộp bài?';
      if (!confirm(msg)) return;
    } else if (left && !confirm(`Còn ${left} câu chưa làm. Kết thúc phiên luyện tập?`)) return;
    submit();
  }

  function submit() {
    const s = session;
    clearInterval(timerId);
    if (s.submitted) return;
    s.submitted = true;
    s.finishedAt = Date.now();
    if (s.mode === 'exam') {
      s.items.forEach(it => record(byId[it.id], it.chosen === byId[it.id].a));
      const per = {};
      s.items.forEach(it => {
        const q = byId[it.id];
        per[q.topic] = per[q.topic] || [0, 0];
        per[q.topic][1]++; if (it.chosen === q.a) per[q.topic][0]++;
      });
      const correct = s.items.filter(it => it.chosen === byId[it.id].a).length;
      history.push({ at: s.finishedAt, total: s.items.length, correct, per, used: Math.min(s.duration, (s.finishedAt - s.startedAt) / 1000) });
      store.set('history', history);
    }
    saveSession();
    go('#/result');
  }

  // ---------- Kết quả ----------
  function viewResult() {
    if (!session) session = loadSession();
    if (!session || !session.submitted) { go('#/'); return; }
    const s = session;
    const items = s.items.map(it => ({ it, q: byId[it.id] }));
    const correct = items.filter(x => x.it.chosen === x.q.a).length;
    const skipped = items.filter(x => x.it.chosen === null).length;
    const multiTopic = new Set(items.map(x => x.q.topic)).size > 1;
    const groups = {};
    items.forEach(({ it, q }) => {
      const key = multiTopic ? QB[q.topic].icon + ' ' + QB[q.topic].name : chapterName(q);
      groups[key] = groups[key] || [0, 0];
      groups[key][1]++; if (it.chosen === q.a) groups[key][0]++;
    });
    const wrongInSession = items.filter(x => x.it.chosen !== x.q.a).map(x => x.q);
    const used = ((s.finishedAt || Date.now()) - s.startedAt) / 1000;
    const score = (correct / items.length * 10).toFixed(1);
    html(`
      <h1>Kết quả: ${esc(s.title)}</h1>
      <div class="hero">
        <div class="card">
          <div class="muted small">Điểm (thang 10)</div>
          <div class="score-big" style="color:${score >= 8 ? 'var(--ok)' : score >= 5 ? 'var(--primary)' : 'var(--bad)'}">${score}</div>
          <p>Đúng <b>${correct}/${items.length}</b> câu (${pct(correct, items.length)}%) · Bỏ trống ${skipped} · Thời gian ${mmss(used)}</p>
          <div class="row">
            <button class="btn primary" id="review">🔍 Xem lại bài</button>
            ${wrongInSession.length ? `<button class="btn" id="redo">↻ Làm lại ${wrongInSession.length} câu sai</button>` : ''}
            <a class="btn ghost" href="#/">Trang chủ</a>
          </div>
        </div>
        <div class="card table-wrap">
          <table class="tbl"><tr><th>${multiTopic ? 'Chủ đề' : 'Chương'}</th><th>Đúng</th><th>%</th></tr>
            ${Object.entries(groups).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${v[0]}/${v[1]}</td>
              <td><div class="bar ${v[0] / v[1] >= .7 ? 'ok' : ''}" style="min-width:70px"><span style="width:${pct(v[0], v[1])}%"></span></div></td></tr>`).join('')}
          </table>
        </div>
      </div>
    `);
    document.getElementById('review').onclick = () => { s.idx = 0; saveSession(); go('#/quiz'); };
    const r = document.getElementById('redo');
    if (r) r.onclick = () => makeSession('practice', 'Làm lại câu sai', shuffle(wrongInSession));
  }

  // ---------- Câu sai ----------
  function viewWrong() {
    const wrong = Object.keys(stats).filter(id => byId[id] && stats[id].last === 0).map(id => byId[id]);
    const by = t => wrong.filter(q => q.topic === t);
    html(`
      <h1>❌ Ôn lại câu sai</h1>
      <p class="muted">Câu được tính là "đang sai" nếu lần làm gần nhất bạn trả lời sai. Làm đúng lại thì câu sẽ tự rời khỏi danh sách.</p>
      ${wrong.length ? `
        <div class="grid">${TOPICS.map(t => `<div class="card topic">
            <div class="ic">${QB[t].icon}</div><div class="name">${esc(QB[t].name)}</div>
            <div class="muted small">${by(t).length} câu đang sai</div>
            <button class="btn" data-t="${t}" ${by(t).length ? '' : 'disabled'}>Luyện lại</button></div>`).join('')}</div>
        <div class="row" style="margin-top:16px"><button class="btn primary" id="all">Luyện tất cả ${wrong.length} câu sai</button></div>`
        : '<div class="card empty">🎉 Chưa có câu sai nào. Hãy làm thêm bài luyện tập hoặc thi thử!</div>'}
      <h2>Quản lý tiến độ</h2>
      <div class="card row">
        <span class="muted small">Tiến độ được lưu trong trình duyệt này (localStorage).</span><span class="spacer"></span>
        <button class="btn danger" id="reset">Xóa toàn bộ tiến độ</button>
      </div>
    `);
    app.querySelectorAll('button[data-t]').forEach(b => b.onclick = () =>
      makeSession('practice', 'Câu sai – ' + QB[b.dataset.t].short, shuffle(by(b.dataset.t))));
    const all = document.getElementById('all');
    if (all) all.onclick = () => makeSession('practice', 'Ôn tất cả câu sai', shuffle(wrong));
    document.getElementById('reset').onclick = () => {
      if (!confirm('Xóa toàn bộ thống kê, lịch sử thi và bài đang làm?')) return;
      stats = {}; history = []; session = null;
      store.del('stats'); store.del('history'); store.del('session');
      viewWrong();
    };
  }

  // ---------- Tóm tắt ----------
  function viewNotes(t) {
    if (!t || !NOTES[t]) t = 'cpp';
    html(`
      <h1>📝 Tóm tắt kiến thức</h1>
      <div class="chips">${TOPICS.map(x => `<a class="chip ${x === t ? 'on' : ''}" href="#/notes/${x}">${QB[x].icon} ${esc(QB[x].short)}</a>`).join('')}</div>
      <div class="card notes" style="margin-top:14px">${NOTES[t] || '<p class="muted">Đang cập nhật.</p>'}</div>
      <div class="row" style="margin-top:14px"><a class="btn primary" href="#/practice/${t}">Luyện câu hỏi ${esc(QB[t].short)} ▶</a></div>
    `);
  }

  // ---------- Phím tắt ----------
  document.addEventListener('keydown', e => {
    if (!location.hash.startsWith('#/quiz') || !session || e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
    const it = session.items[session.idx];
    const k = e.key.toUpperCase();
    let n = -1;
    if (/^[1-8]$/.test(k)) n = +k - 1;
    else if (KEYS.includes(k) && k.length === 1) n = KEYS.indexOf(k);
    if (n >= 0 && n < it.order.length) { choose(it.order[n]); e.preventDefault(); return; }
    if (e.key === 'ArrowRight' || e.key === 'Enter') { move(1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { move(-1); e.preventDefault(); }
    else if (k === 'F' && session.mode === 'exam' && !session.submitted) { it.flagged = !it.flagged; saveSession(); viewQuiz(); }
  });

  // ---------- Giao diện sáng/tối ----------
  const root = document.documentElement;
  const savedTheme = store.get('theme', null);
  if (savedTheme) root.dataset.theme = savedTheme;
  document.getElementById('themeBtn').onclick = () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    store.set('theme', root.dataset.theme);
  };

  session = loadSession();
  window.addEventListener('hashchange', route);
  route();
})();
