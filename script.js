// ===================== BANCO DE PLACAS =====================
const PLACAS = {
  "JGZ2665":  { largura: 2.45, comprimento: 7.75, transp: "" },
  "OVQ0944":  { largura: 2.45, comprimento: 6.50, transp: "" },
  "JIY9907":  { largura: 2.42, comprimento: 8.36, transp: "" },
  "JJT5270":  { largura: 2.40, comprimento: 8.30, transp: "" },
  "JIY9937":  { largura: 2.40, comprimento: 8.20, transp: "" },
  "JIG5667":  { largura: 2.45, comprimento: 4.78, transp: "" },
  "JIY9897":  { largura: 2.45, comprimento: 8.30, transp: "" },
  "JGZ2885":  { largura: 2.50, comprimento: 8.26, transp: "" },
  "JJZ6529":  { largura: 2.45, comprimento: 8.00, transp: "" },
  "JGR8201":  { largura: 2.44, comprimento: 8.20, transp: "" },
  "JGR7921":  { largura: 2.40, comprimento: 8.20, transp: "" },
  "JJU0298":  { largura: 2.40, comprimento: 8.20, transp: "" },
  "JGJ7622":  { largura: 2.45, comprimento: 8.20, transp: "" },
  "JGJ7122":  { largura: 2.45, comprimento: 7.75, transp: "" },
  "JGJ7182":  { largura: 2.45, comprimento: 8.30, transp: "" },
  "JJZ9109":  { largura: 2.50, comprimento: 8.25, transp: "" },
  "ONR8596":  { largura: 2.50, comprimento: 8.30, transp: "" },
  "JIK3457":  { largura: 2.50, comprimento: 7.75, transp: "" },
  "JDX3100":  { largura: 2.47, comprimento: 8.00, transp: "" },
  "OOC5464":  { largura: 2.45, comprimento: 8.30, transp: "" },
  "KEH8022":  { largura: 2.50, comprimento: 7.80, transp: "LEMOS" },
  "CZP6235":  { largura: 2.40, comprimento: 7.40, transp: "" },
  "LBN6108":  { largura: 2.40, comprimento: 4.70, transp: "" },
  "JGJ7492":  { largura: 2.50, comprimento: 8.00, transp: "" },
  "OMX0488":  { largura: 2.40, comprimento: 8.00, transp: "MBM" },
  "PBP9108":  { largura: 2.45, comprimento: 8.22, transp: "" },
  "JKH9E65":  { largura: 2.46, comprimento: 8.30, transp: "CAPITAL SOLUÇÕES" },
  "ONY7824":  { largura: 2.45, comprimento: 7.80, transp: "MBM" },
  "NWJ8428A": { largura: 2.46, comprimento: 8.40, transp: "CAPITAL SOLUÇÕES" },
  "NWJ8428B": { largura: 2.44, comprimento: 7.90, transp: "CAPITAL AREIA E BRITA" },
  "MWB3838":  { largura: 2.50, comprimento: 8.40, transp: "MBM" },
  "OMQ8A98":  { largura: 2.50, comprimento: 8.40, transp: "MBM" },
  "NGA4I79A": { largura: 2.30, comprimento: 4.70, transp: "CAPITAL SOLUÇÕES" },
  "HPI6376":  { largura: 2.33, comprimento: 4.53, transp: "CAPITAL SOLUÇÕES" },
  "NGH7C84A": { largura: 2.30, comprimento: 4.60, transp: "CAPITAL SOLUÇÕES" },
  "NGH7C84B": { largura: 2.35, comprimento: 4.70, transp: "VIZA AREIA" },
  "BXD1A70":  { largura: 2.30, comprimento: 8.60, transp: "VIZA AREIA" },
  "FSZ1B20":  { largura: 2.50, comprimento: 8.00, transp: "R e M MINERAÇÃO" },
  "PBO8098":  { largura: 2.50, comprimento: 8.30, transp: "R e M MINERAÇÃO" },
  "OVO1J70":  { largura: 2.40, comprimento: 4.85, transp: "VIZA AREIA" },
  "HPI6375":  { largura: 2.50, comprimento: 4.60, transp: "VIZA AREIA" },
  "NGA4I79B": { largura: 2.45, comprimento: 4.65, transp: "VIZA AREIA" },
  "SGX7A73":  { largura: 2.50, comprimento: 9.00, transp: "CAPITAL" },
  "SGR8C04":  { largura: 2.50, comprimento: 8.50, transp: "R e M MINERAÇÃO" },
  "JJZ7339":  { largura: 2.47, comprimento: 8.00, transp: "R e M MINERAÇÃO" },
  "OVO0397":  { largura: 2.47, comprimento: 8.56, transp: "R e M MINERAÇÃO" },
  "JHE1D91":  { largura: 2.50, comprimento: 8.40, transp: "R e M MINERAÇÃO" },
  "OZW8C17":  { largura: 2.50, comprimento: 8.30, transp: "R e M MINERAÇÃO" },
  "PAE9838":  { largura: 2.50, comprimento: 8.30, transp: "R e M MINERAÇÃO" },
  "JJK2014":  { largura: 2.20, comprimento: 4.80, transp: "R e M MINERAÇÃO" },
  "JHL7088":  { largura: 2.50, comprimento: 8.40, transp: "JERUSALÉM" },
};

// ===================== INIT =====================
window.onload = function() {
  const today = new Date();
  const yy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const dd = String(today.getDate()).padStart(2,'0');
  document.getElementById('data-entrega').value = `${yy}-${mm}-${dd}`;

  addFuroRow(); addFuroRow(); addFuroRow();

  document.querySelectorAll('input[name="loja"], input[name="areia"], input[name="fornecedor"]').forEach(el => el.addEventListener('change', () => {
    if(el.name==='fornecedor') toggleFornOutro();
    gerarMensagem();
  }));
  document.getElementById('data-entrega').addEventListener('change', gerarMensagem);
  document.getElementById('forn-outro-val').addEventListener('input', gerarMensagem);

  // Close dropdown on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.placa-search-wrap')) {
      document.getElementById('placa-dropdown').classList.remove('show');
    }
  });
};

// ===================== FORNECEDOR OTHER =====================
function toggleFornOutro() {
  const val = document.querySelector('input[name="fornecedor"]:checked')?.value;
  const wrap = document.getElementById('forn-other-wrap');
  wrap.classList.toggle('show', val === 'outro');
}

// ===================== PLACA SEARCH (autocomplete a partir de 3 chars) =====================
let placaActiveIdx = -1;

function searchPlaca(raw) {
  const key = raw.toUpperCase().replace(/[^A-Z0-9]/g,'');
  const dropdown = document.getElementById('placa-dropdown');
  const res = document.getElementById('placa-result');
  const notFound = document.getElementById('placa-notfound');

  res.classList.remove('show');
  notFound.classList.remove('show');
  placaActiveIdx = -1;

  if (key.length < 3) {
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
    return;
  }

  // Find all matches starting with key
  const matches = Object.entries(PLACAS).filter(([k]) =>
    k.replace(/[^A-Z0-9]/g,'').startsWith(key)
  );

  if (matches.length === 0) {
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
    notFound.classList.add('show');
    return;
  }

  dropdown.innerHTML = matches.map(([k, v], i) => `
    <div class="placa-option" data-idx="${i}" onclick="selectPlaca('${k}')">
      <span class="pl-plate">${k}</span>
      <span class="pl-transp">${v.transp || ''}</span>
    </div>
  `).join('');
  dropdown.classList.add('show');

  // If exact match, select it immediately
  if (matches.length === 1 && matches[0][0].replace(/[^A-Z0-9]/g,'') === key) {
    selectPlaca(matches[0][0]);
  }
}

function selectPlaca(plateKey) {
  const data = PLACAS[plateKey];
  if (!data) return;

  document.getElementById('placa-input').value = plateKey;
  document.getElementById('placa-dropdown').classList.remove('show');

  document.getElementById('placa-nome').textContent = plateKey;
  const transpWrap = document.getElementById('placa-transp-wrap');
  if (data.transp) {
    document.getElementById('placa-transp').textContent = data.transp;
    transpWrap.style.display = '';
  } else {
    transpWrap.style.display = 'none';
  }
  document.getElementById('placa-result').classList.add('show');
  document.getElementById('placa-notfound').classList.remove('show');

  // Store values in hidden fields
  document.getElementById('largura').value = data.largura;
  document.getElementById('comprimento').value = data.comprimento;
  calcular();
}

function placaKeyDown(e) {
  const dropdown = document.getElementById('placa-dropdown');
  const options = dropdown.querySelectorAll('.placa-option');
  if (!dropdown.classList.contains('show') || options.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    placaActiveIdx = Math.min(placaActiveIdx + 1, options.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    placaActiveIdx = Math.max(placaActiveIdx - 1, 0);
  } else if (e.key === 'Enter' && placaActiveIdx >= 0) {
    e.preventDefault();
    options[placaActiveIdx].click();
    return;
  } else { return; }

  options.forEach((o, i) => o.classList.toggle('active', i === placaActiveIdx));
  options[placaActiveIdx]?.scrollIntoView({ block: 'nearest' });
}

// ===================== FUROS (laterais = centro automaticamente) =====================
const MIN_FURO_ROWS = 3;
let furoRows = 0;
function addFuroRow() {
  furoRows++;
  const cont = document.getElementById('furos-container');
  const row = document.createElement('div');
  row.className = 'furos-grid';
  row.id = `furo-row-${furoRows}`;
  const rid = furoRows;
  const showRemove = furoRows > MIN_FURO_ROWS;
  row.innerHTML = `
    <input class="furo-input" type="number" step="0.01" placeholder="0.00" id="furo-lat-esq-${rid}" data-furo oninput="syncLateral(${rid})">
    <input class="furo-input" type="number" step="0.01" placeholder="0.00" id="furo-centro-${rid}" data-furo oninput="calcular()">
    <div style="display:flex;align-items:center;gap:4px;">
      <input class="furo-input" type="number" step="0.01" placeholder="0.00" id="furo-lat-dir-${rid}" data-furo readonly style="opacity:0.7;cursor:not-allowed;flex:1;" tabindex="-1">
      ${showRemove ? `<button class="btn-remove-furo" onclick="removeFuroRow(${rid})" title="Remover linha">✕</button>` : '<span style="width:28px;display:inline-block;"></span>'}
    </div>
  `;
  cont.appendChild(row);
  updateRemoveButtons();
}

function removeFuroRow(rid) {
  const row = document.getElementById(`furo-row-${rid}`);
  if (row) row.remove();
  updateRemoveButtons();
  calcular();
}

function updateRemoveButtons() {
  const rows = document.querySelectorAll('#furos-container .furos-grid');
  rows.forEach((row, idx) => {
    const btn = row.querySelector('.btn-remove-furo');
    if (btn) btn.style.display = idx < MIN_FURO_ROWS ? 'none' : '';
  });
}

function syncLateral(rid) {
  const esq = document.getElementById(`furo-lat-esq-${rid}`);
  const dir = document.getElementById(`furo-lat-dir-${rid}`);
  dir.value = esq.value;
  calcular();
}

function getFuros() {
  return [...document.querySelectorAll('[data-furo]')]
    .map(i => parseFloat(i.value))
    .filter(v => !isNaN(v) && v > 0);
}

// ===================== CALCULAR =====================
function calcular() {
  const largura = parseFloat(document.getElementById('largura').value) || 0;
  const comprimento = parseFloat(document.getElementById('comprimento').value) || 0;
  const pistao = 0; // pistão removido da UI

  const furos = getFuros();
  const media = furos.length > 0 ? furos.reduce((a,b)=>a+b,0) / furos.length : 0;

  document.getElementById('media-prof').textContent = furos.length > 0 ? media.toFixed(4) : '—';

  let totalM3Rom = 0;
  if (largura && comprimento && media) {
    totalM3Rom = largura * comprimento * (media - pistao);
  }

  const totalTon = totalM3Rom * 1.5;

  document.getElementById('res-m3').textContent = totalM3Rom > 0 ? totalM3Rom.toFixed(3) : '—';
  document.getElementById('res-ton').textContent = totalM3Rom > 0 ? totalTon.toFixed(3) : '—';
  document.getElementById('res-m3-notas').textContent = '—';
  document.getElementById('res-complemento').textContent = '—';

  gerarMensagem(totalM3Rom, totalTon);
}

// ===================== MENSAGEM =====================
function gerarMensagem(m3Rom, toneladas) {
  if (m3Rom === undefined) {
    const largura = parseFloat(document.getElementById('largura').value) || 0;
    const comprimento = parseFloat(document.getElementById('comprimento').value) || 0;
    const furos = getFuros();
    const media = furos.length > 0 ? furos.reduce((a,b)=>a+b,0) / furos.length : 0;
    m3Rom = (largura && comprimento && media) ? largura * comprimento * media : 0;
    toneladas = m3Rom * 1.5;
  }

  const loja = document.querySelector('input[name="loja"]:checked')?.value || '';
  const areia = document.querySelector('input[name="areia"]:checked')?.value || '';
  let fornecedor = document.querySelector('input[name="fornecedor"]:checked')?.value || '';
  if (fornecedor === 'outro') fornecedor = document.getElementById('forn-outro-val').value || '(fornecedor)';

  const dataVal = document.getElementById('data-entrega').value;
  let dataFmt = '';
  if (dataVal) {
    const [y,m,d] = dataVal.split('-');
    dataFmt = `${d}/${m}/${y}`;
  }

  const notaNum = (document.getElementById('nota-numero')?.value || '').trim() || '(nº da nota)';
  const m3Str = m3Rom > 0 ? m3Rom.toFixed(3).replace('.',',') : '—';
  const tonStr = toneladas > 0 ? toneladas.toFixed(3).replace('.',',') : '—';

  const msg = `Nota: ${notaNum} + complemento\nQuantidade Ton: ${tonStr} Ton\nQuantidade M³: ${m3Str}  M³\nTipo da Areia: ${areia}\nFornecedor: ${fornecedor}\nData entrega: ${dataFmt}\nLoja: ${loja}`;

  document.getElementById('mensagem-box').textContent = msg;
}

// ===================== COPY =====================
function copyMsg() {
  const txt = document.getElementById('mensagem-box').textContent;
  navigator.clipboard.writeText(txt).then(() => {
    const badge = document.getElementById('copied-badge');
    badge.classList.add('show');
    setTimeout(() => badge.classList.remove('show'), 2000);
  });
}
