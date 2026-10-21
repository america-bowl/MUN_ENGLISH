/* Personal vocabulary manager. Keeps the existing MunEnglishDB/cards records intact. */
(() => {
  'use strict';

  const DB_NAME = 'MunEnglishDB';
  const STORE_NAME = 'cards';
  const MAX_IMPORT_BYTES = 10 * 1024 * 1024;
  const MAX_PDF_BYTES = 20 * 1024 * 1024;

  const $ = (id) => document.getElementById(id);
  let db;
  let cachedCards = [];
  let selectedWordIds = new Set();
  let lastDeleted = [];
  let statusResetHandle;

  function setStatus(message, kind = 'info') {
    const element = $('managerStatus');
    if (!element) return;
    element.textContent = message;
    element.dataset.kind = kind;
    if (statusResetHandle) clearTimeout(statusResetHandle);
    if (kind !== 'error') {
      statusResetHandle = setTimeout(() => {
        if (element.dataset.kind === kind) {
          element.dataset.kind = 'info';
        }
      }, 7000);
    }
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      // Do not bump the database version or replace the object store: old saved words remain intact.
      const request = indexedDB.open(DB_NAME);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(STORE_NAME)) {
          const store = database.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('term', 'term', { unique: false });
        }
      };
      request.onsuccess = () => {
        db = request.result;
        db.onversionchange = () => db.close();
        resolve(db);
      };
      request.onerror = () => reject(request.error || new Error('IndexedDBを開けませんでした。'));
      request.onblocked = () => setStatus('別のタブがデータベースを使用しています。旧サイトのタブを閉じてから再読み込みしてください。', 'error');
    });
  }

  function transactionDone(transaction) {
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error('データの保存に失敗しました。'));
      transaction.onabort = () => reject(transaction.error || new Error('データ処理が中断されました。'));
    });
  }

  async function getAllCards() {
    if (!db) throw new Error('データベースが初期化されていません。');
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).getAll();
    const result = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error || new Error('単語の読み込みに失敗しました。'));
    });
    await transactionDone(tx);
    return result;
  }

  async function putCards(cards) {
    if (!cards.length) return;
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    for (const card of cards) store.put(card);
    await transactionDone(tx);
  }

  async function deleteCards(cards) {
    if (!cards.length) return;
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    for (const card of cards) store.delete(card.id);
    await transactionDone(tx);
  }

  function newId() {
    if (crypto && typeof crypto.randomUUID === 'function') return `word-${crypto.randomUUID()}`;
    return `word-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
  }

  function asText(value) {
    return value == null ? '' : String(value);
  }

  function normalizeRecord(raw, options = {}) {
    const term = asText(raw.term ?? raw.en).trim();
    const meaning = asText(raw.meaning ?? raw.ja).trim();
    if (!term || !meaning) return null;
    const now = new Date().toISOString();
    return {
      ...raw,
      id: options.forceNewId ? newId() : (raw.id == null || raw.id === '' ? newId() : String(raw.id)),
      term,
      meaning,
      category: asText(raw.category).trim(),
      notes: asText(raw.notes).trim(),
      sourceName: asText(raw.sourceName || (options.sourceName || '手動登録')),
      sourcePage: raw.sourcePage == null ? null : raw.sourcePage,
      createdAt: raw.createdAt || now,
      updatedAt: now
    };
  }

  function safeDate(value) {
    const time = value ? Date.parse(value) : 0;
    return Number.isFinite(time) ? time : 0;
  }

  function selectedIds() {
    return new Set(selectedWordIds);
  }

  function currentVisibleCards() {
    const query = $('managerSearch').value.trim().toLocaleLowerCase();
    const category = $('categoryFilter').value;
    const sort = $('sortOrder').value;
    const filtered = cachedCards.filter((card) => {
      if (category && asText(card.category) !== category) return false;
      if (!query) return true;
      const searchable = [card.term, card.meaning, card.category, card.notes, card.sourceName]
        .map(asText).join('\n').toLocaleLowerCase();
      return searchable.includes(query);
    });
    filtered.sort((a, b) => {
      if (sort === 'term') return asText(a.term).localeCompare(asText(b.term), 'en', { sensitivity: 'base' });
      if (sort === 'created') return safeDate(a.createdAt) - safeDate(b.createdAt);
      return safeDate(b.updatedAt || b.createdAt) - safeDate(a.updatedAt || a.createdAt);
    });
    return filtered;
  }

  function appendChip(parent, text) {
    if (!text) return;
    const chip = document.createElement('span');
    chip.className = 'word-chip';
    chip.textContent = text;
    parent.appendChild(chip);
  }

  function buildWordRow(card) {
    const row = document.createElement('article');
    row.className = 'word-row';
    row.dataset.id = asText(card.id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'word-select';
    checkbox.dataset.id = asText(card.id);
    checkbox.setAttribute('aria-label', `${asText(card.term)}を選択`);
    checkbox.checked = selectedWordIds.has(asText(card.id));
    row.appendChild(checkbox);

    const main = document.createElement('div');
    main.className = 'word-row-main';
    const term = document.createElement('div');
    term.className = 'word-row-title';
    term.textContent = asText(card.term) || '(単語なし)';
    main.appendChild(term);

    const meaning = document.createElement('div');
    meaning.className = 'word-row-meaning';
    meaning.textContent = asText(card.meaning);
    main.appendChild(meaning);

    if (asText(card.notes).trim()) {
      const notes = document.createElement('div');
      notes.className = 'word-row-notes';
      notes.textContent = `メモ: ${asText(card.notes)}`;
      main.appendChild(notes);
    }

    const meta = document.createElement('div');
    meta.className = 'word-meta';
    appendChip(meta, asText(card.category) || '未分類');
    if (card.sourceName) {
      const source = document.createElement('span');
      source.className = 'word-source';
      source.textContent = `出典: ${asText(card.sourceName)}${card.sourcePage ? ` · p.${card.sourcePage}` : ''}`;
      meta.appendChild(source);
    }
    main.appendChild(meta);
    row.appendChild(main);

    const actions = document.createElement('div');
    actions.className = 'word-row-actions';
    const edit = document.createElement('button');
    edit.type = 'button';
    edit.className = 'btn';
    edit.dataset.action = 'edit';
    edit.dataset.id = asText(card.id);
    edit.textContent = '編集';
    edit.setAttribute('aria-label', `${asText(card.term)}を編集`);
    actions.appendChild(edit);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'btn btn-danger';
    remove.dataset.action = 'delete';
    remove.dataset.id = asText(card.id);
    remove.textContent = '削除';
    remove.setAttribute('aria-label', `${asText(card.term)}を削除`);
    actions.appendChild(remove);
    row.appendChild(actions);
    return row;
  }

  function updateCategoryControls() {
    const activeFilter = $('categoryFilter').value;
    const categories = [...new Set(cachedCards.map((card) => asText(card.category).trim()).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, 'ja'));
    const filter = $('categoryFilter');
    filter.replaceChildren(new Option('すべてのカテゴリ', ''));
    for (const category of categories) filter.add(new Option(category, category));
    if (categories.includes(activeFilter)) filter.value = activeFilter;

    const datalist = $('categorySuggestions');
    datalist.replaceChildren();
    for (const category of categories) datalist.appendChild(new Option(category, category));
  }

  function render() {
    updateCategoryControls();
    const visible = currentVisibleCards();
    $('totalCount').textContent = String(cachedCards.length);
    $('visibleCount').textContent = String(visible.length);

    const list = $('wordList');
    list.replaceChildren();
    if (!visible.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = cachedCards.length
        ? '条件に一致する単語がありません。検索語やカテゴリを変更してください。'
        : 'まだ単語がありません。上のフォームから追加するか、PDF / JSONを読み込んでください。';
      list.appendChild(empty);
    } else {
      for (const card of visible) list.appendChild(buildWordRow(card));
    }

    const visibleIds = new Set(visible.map((card) => asText(card.id)));
    const selected = selectedIds();
    const selectedVisibleCount = [...selected].filter((id) => visibleIds.has(id)).length;
    $('selectedCount').textContent = `${selectedVisibleCount}件選択中`;
    $('bulkDeleteButton').disabled = selectedVisibleCount === 0;
    const allSelected = visible.length > 0 && visible.every((card) => selected.has(asText(card.id)));
    $('selectAllWords').checked = allSelected;
    $('selectAllWords').indeterminate = selectedVisibleCount > 0 && !allSelected;
  }

  async function refresh({ message, kind = 'info' } = {}) {
    cachedCards = await getAllCards();
    // Normalize only in memory; do not rewrite legacy records just by opening the app.
    render();
    if (message) setStatus(message, kind);
  }

  function resetEditor() {
    $('wordForm').reset();
    $('wordId').value = '';
    $('editorHeading').textContent = '単語を追加';
    $('saveWordButton').textContent = '＋ 単語を保存';
    $('cancelEditButton').hidden = true;
    $('wordTerm').focus();
  }

  function beginEdit(id) {
    const card = cachedCards.find((item) => asText(item.id) === asText(id));
    if (!card) {
      setStatus('編集対象が見つかりません。再読み込みしてください。', 'error');
      return;
    }
    $('wordId').value = asText(card.id);
    $('wordTerm').value = asText(card.term);
    $('wordMeaning').value = asText(card.meaning);
    $('wordCategory').value = asText(card.category);
    $('wordNotes').value = asText(card.notes);
    $('editorHeading').textContent = '単語を編集';
    $('saveWordButton').textContent = '変更を保存';
    $('cancelEditButton').hidden = false;
    $('wordTerm').focus();
    $('wordForm').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  async function submitWord(event) {
    event.preventDefault();
    const term = $('wordTerm').value.trim();
    const meaning = $('wordMeaning').value.trim();
    if (!term || !meaning) {
      setStatus('単語と意味は必須です。両方入力してください。', 'error');
      (!term ? $('wordTerm') : $('wordMeaning')).focus();
      return;
    }
    const id = $('wordId').value;
    const old = id ? cachedCards.find((card) => asText(card.id) === id) : null;
    const now = new Date().toISOString();
    const card = {
      ...(old || {}),
      id: id || newId(),
      term,
      meaning,
      category: $('wordCategory').value.trim(),
      notes: $('wordNotes').value.trim(),
      sourceName: old?.sourceName || '手動登録',
      sourcePage: old?.sourcePage ?? null,
      createdAt: old?.createdAt || now,
      updatedAt: now
    };
    try {
      await putCards([card]);
      await refresh({ message: id ? `「${term}」を更新しました。` : `「${term}」を追加しました。`, kind: 'success' });
      resetEditor();
    } catch (error) {
      console.error(error);
      setStatus(`保存できませんでした: ${error.message || error}`, 'error');
    }
  }

  async function deleteById(id) {
    const card = cachedCards.find((item) => asText(item.id) === asText(id));
    if (!card) return;
    if (!window.confirm(`「${asText(card.term)}」を削除しますか？\n削除後は「削除を取り消す」から復元できます（この画面を開いている間）。`)) return;
    await removeCards([card]);
  }

  async function removeCards(cards) {
    if (!cards.length) return;
    try {
      lastDeleted = cards.map((card) => ({ ...card }));
      for (const card of cards) selectedWordIds.delete(asText(card.id));
      await deleteCards(cards);
      $('undoDeleteButton').hidden = false;
      await refresh({ message: `${cards.length}件を削除しました。必要なら「削除を取り消す」を押してください。`, kind: 'success' });
    } catch (error) {
      console.error(error);
      setStatus(`削除に失敗しました: ${error.message || error}`, 'error');
    }
  }

  async function undoDelete() {
    if (!lastDeleted.length) return;
    try {
      // put() restores the original record IDs without disturbing unrelated records.
      await putCards(lastDeleted);
      const count = lastDeleted.length;
      lastDeleted = [];
      $('undoDeleteButton').hidden = true;
      await refresh({ message: `${count}件を復元しました。`, kind: 'success' });
    } catch (error) {
      console.error(error);
      setStatus(`復元に失敗しました: ${error.message || error}`, 'error');
    }
  }

  function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function exportJson() {
    try {
      const cards = await getAllCards();
      const payload = {
        app: 'MUN_ENGLISH',
        schemaVersion: 1,
        exportedAt: new Date().toISOString(),
        cards
      };
      downloadFile(`MUN_English_Backup_${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(payload, null, 2), 'application/json');
      setStatus(`${cards.length}件をJSONに書き出しました。`, 'success');
    } catch (error) {
      setStatus(`JSON出力に失敗しました: ${error.message || error}`, 'error');
    }
  }

  function csvCell(value) {
    const string = asText(value);
    return `"${string.replace(/"/g, '""')}"`;
  }

  async function exportCsv() {
    try {
      const cards = await getAllCards();
      const rows = [['id', 'term', 'meaning', 'category', 'notes', 'sourceName', 'sourcePage', 'createdAt', 'updatedAt']];
      for (const card of cards) rows.push([card.id, card.term, card.meaning, card.category, card.notes, card.sourceName, card.sourcePage, card.createdAt, card.updatedAt]);
      const csv = '\uFEFF' + rows.map((row) => row.map(csvCell).join(',')).join('\r\n');
      downloadFile(`MUN_English_Words_${new Date().toISOString().slice(0, 10)}.csv`, csv, 'text/csv');
      setStatus(`${cards.length}件をCSVに書き出しました。`, 'success');
    } catch (error) {
      setStatus(`CSV出力に失敗しました: ${error.message || error}`, 'error');
    }
  }

  async function importJsonFile(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (file.size > MAX_IMPORT_BYTES) {
      setStatus('JSONファイルが大きすぎます（上限10MB）。', 'error');
      return;
    }
    try {
      const parsed = JSON.parse(await file.text());
      const rows = Array.isArray(parsed) ? parsed : parsed?.cards;
      if (!Array.isArray(rows)) throw new Error('JSON内に単語の配列（cards）がありません。');
      const normalized = rows.map((item) => item && typeof item === 'object' ? normalizeRecord(item) : null).filter(Boolean);
      if (rows.length && !normalized.length) throw new Error('有効な単語が見つかりませんでした。term/en と meaning/ja が必要です。');
      if (!normalized.length) throw new Error('読み込む単語がありません。');
      await putCards(normalized);
      await refresh({ message: `${normalized.length}件を読み込みました。既存データは維持し、同じIDのみ更新しました。`, kind: 'success' });
    } catch (error) {
      console.error(error);
      setStatus(`JSONを読み込めませんでした: ${error.message || error}`, 'error');
    }
  }

  async function importPdf(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const status = $('pdfStatus');
    if (file.size > MAX_PDF_BYTES) {
      status.textContent = 'PDFが大きすぎます（上限20MB）。';
      setStatus(status.textContent, 'error');
      return;
    }
    if (!window.pdfjsLib) {
      status.textContent = 'PDFライブラリを読み込めません。インターネット接続後に再読み込みしてください。';
      setStatus(status.textContent, 'error');
      return;
    }
    status.textContent = 'PDFを読み込んでいます…';
    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
      const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      let fullText = '';
      const maxPage = Math.min(pdf.numPages, 5);
      for (let pageNo = 1; pageNo <= maxPage; pageNo++) {
        status.textContent = `PDFを解析しています… (${pageNo}/${maxPage}ページ)`;
        const page = await pdf.getPage(pageNo);
        const content = await page.getTextContent();
        fullText += `\n[Page ${pageNo}]\n${content.items.map((item) => item.str).join(' ')}\n`;
      }
      if (!fullText.trim()) throw new Error('テキストを抽出できませんでした。画像だけのPDFかもしれません。');

      status.textContent = 'AIが単語候補を作成しています…';
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: fullText })
      });
      let result;
      try { result = await response.json(); } catch { throw new Error(`API応答を解析できません（HTTP ${response.status}）。`); }
      if (!response.ok) throw new Error(result?.error || `APIエラー（HTTP ${response.status}）。`);
      if (result?.error) throw new Error(result.error);
      if (!Array.isArray(result?.cards)) throw new Error('API応答に cards 配列がありません。');

      const timestamp = new Date().toISOString();
      const extracted = result.cards.map((item) => normalizeRecord({
        term: item.term,
        meaning: item.meaning,
        notes: item.example ? `例文: ${item.example}` : '',
        category: item.category || 'PDF / AI',
        sourceName: file.name,
        sourcePage: null,
        createdAt: timestamp,
        updatedAt: timestamp
      }, { forceNewId: true })).filter(Boolean);
      if (!extracted.length) throw new Error('AIが有効な単語を返しませんでした。');
      await putCards(extracted);
      await refresh({ message: `PDFから${extracted.length}件を追加しました。`, kind: 'success' });
      status.textContent = `完了：${extracted.length}件を追加しました。`;
    } catch (error) {
      console.error(error);
      status.textContent = `失敗：${error.message || error}`;
      setStatus(status.textContent, 'error');
    }
  }

  async function deleteSelected() {
    const selected = selectedIds();
    const visibleIds = new Set(currentVisibleCards().map((card) => asText(card.id)));
    const cards = cachedCards.filter((card) => selected.has(asText(card.id)) && visibleIds.has(asText(card.id)));
    if (!cards.length) return;
    if (!window.confirm(`選択した${cards.length}件を削除しますか？\n削除後は「削除を取り消す」から復元できます（この画面を開いている間）。`)) return;
    await removeCards(cards);
  }

  function attachEvents() {
    $('wordForm').addEventListener('submit', submitWord);
    $('cancelEditButton').addEventListener('click', resetEditor);
    const clearSelectionAndRender = () => { selectedWordIds.clear(); render(); };
    $('managerSearch').addEventListener('input', clearSelectionAndRender);
    $('categoryFilter').addEventListener('change', clearSelectionAndRender);
    $('sortOrder').addEventListener('change', clearSelectionAndRender);
    $('selectAllWords').addEventListener('change', (event) => {
      const visible = currentVisibleCards();
      const wantChecked = event.target.checked;
      for (const card of visible) {
        const id = asText(card.id);
        if (wantChecked) selectedWordIds.add(id);
        else selectedWordIds.delete(id);
        const checkbox = [...document.querySelectorAll('.word-select')].find((box) => box.dataset.id === id);
        if (checkbox) checkbox.checked = wantChecked;
      }
      renderSelectionState();
    });
    $('wordList').addEventListener('change', (event) => {
      if (!event.target.matches('.word-select')) return;
      const id = asText(event.target.dataset.id);
      if (event.target.checked) selectedWordIds.add(id);
      else selectedWordIds.delete(id);
      renderSelectionState();
    });
    $('wordList').addEventListener('click', async (event) => {
      const button = event.target.closest('button[data-action]');
      if (!button) return;
      const id = button.dataset.id;
      if (button.dataset.action === 'edit') beginEdit(id);
      if (button.dataset.action === 'delete') await deleteById(id);
    });
    $('bulkDeleteButton').addEventListener('click', deleteSelected);
    $('undoDeleteButton').addEventListener('click', undoDelete);
    $('exportJsonButton').addEventListener('click', exportJson);
    $('exportCsvButton').addEventListener('click', exportCsv);
    $('jsonInput').addEventListener('change', importJsonFile);
    $('pdfInput').addEventListener('change', importPdf);
  }

  function renderSelectionState() {
    const visible = currentVisibleCards();
    const ids = new Set(visible.map((card) => asText(card.id)));
    const selected = selectedIds();
    const count = [...selected].filter((id) => ids.has(id)).length;
    $('selectedCount').textContent = `${count}件選択中`;
    $('bulkDeleteButton').disabled = count === 0;
    $('selectAllWords').checked = visible.length > 0 && count === visible.length;
    $('selectAllWords').indeterminate = count > 0 && count < visible.length;
  }

  async function initialize() {
    try {
      if (!('indexedDB' in window)) throw new Error('このブラウザではIndexedDBが使えません。');
      await openDatabase();
      attachEvents();
      await refresh({ message: '単語帳を読み込みました。追加・編集・検索ができます。' });
    } catch (error) {
      console.error(error);
      setStatus(`初期化に失敗しました: ${error.message || error}`, 'error');
      $('wordList').textContent = '保存領域を開けませんでした。ページを再読み込みしてください。';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();

  // If a new service worker takes control, reload once so assets stay in sync.
  if ('serviceWorker' in navigator) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => registration.update())
        .catch((error) => console.warn('Service Worker registration failed:', error));
    }, { once: true });
  }
})();
