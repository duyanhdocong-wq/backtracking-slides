// Hình ảnh
function treeGraphic(dark = false) {
    return `<svg class="diagram" viewBox="0 0 560 350"><path d="M280 45 C210 100 150 115 85 180 M280 45 C350 100 410 115 475 180 M85 180 C50 225 45 265 30 305 M85 180 C120 225 135 265 150 305 M475 180 C440 225 425 265 410 305 M475 180 C510 225 515 265 530 305" class="edge"/><circle cx="280" cy="45" r="24" class="node"/><circle cx="85" cy="180" r="20" class="node good"/><circle cx="475" cy="180" r="20" class="node"/><circle cx="30" cy="305" r="18" class="node bad"/><circle cx="150" cy="305" r="18" class="node good"/><circle cx="410" cy="305" r="18" class="node bad"/><circle cx="530" cy="305" r="18" class="node good"/><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><text x="280" y="50" font-size="14" fill="#334155">1</text><text x="85" y="185" font-size="13" fill="#334155">2</text><text x="30" y="310" font-size="12" fill="#D84A4A">3</text><text x="150" y="310" font-size="12" fill="#15803D">4</text><text x="475" y="185" font-size="13" fill="#334155">5</text><text x="410" y="310" font-size="12" fill="#D84A4A">6</text><text x="530" y="310" font-size="12" fill="#15803D">7</text></g></svg>`;
}

function flowGraphic() {
    return `<svg class="flow-svg" viewBox="0 0 960 340"><defs><marker id="arrFlow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#0F766E"/></marker></defs><path d="M170 170 C230 62 350 60 420 165 C470 244 560 245 650 170 C730 98 840 98 885 165" fill="none" stroke="#8aa0b4" stroke-width="4" marker-end="url(#arrFlow)"/><circle cx="145" cy="170" r="67" fill="#edfafd" stroke="#0F766E" stroke-width="3"/><circle cx="485" cy="170" r="67" fill="#FFF0E5" stroke="#F97316" stroke-width="3"/><circle cx="825" cy="170" r="67" fill="#fff2f2" stroke="#DC2626" stroke-width="3"/><text x="145" y="160" text-anchor="middle" font-size="19" font-weight="900" fill="#0e7490">CHOOSE</text><text x="145" y="187" text-anchor="middle" font-size="13" font-weight="800" fill="#43637f">chọn một khả năng</text><text x="485" y="160" text-anchor="middle" font-size="19" font-weight="900" fill="#C2410C">CHECK</text><text x="485" y="187" text-anchor="middle" font-size="13" font-weight="800" fill="#5d6680">kiểm tra ràng buộc</text><text x="825" y="160" text-anchor="middle" font-size="18" font-weight="900" fill="#B91C1C">UNDO</text><text x="825" y="187" text-anchor="middle" font-size="13" font-weight="800" fill="#71545a">hoàn tác lựa chọn</text><text x="485" y="55" text-anchor="middle" font-size="14" font-weight="900" fill="#0e7490">HỢP LỆ → ĐI SÂU</text><text x="827" y="292" text-anchor="middle" font-size="14" font-weight="900" fill="#B91C1C">KHÔNG HỢP LỆ → QUAY VỀ</text></svg>`;
}
function stateTreeLarge() {
    return `<svg class="state-svg" viewBox="0 0 700 470"><path d="M350 40 L175 150 M350 40 L525 150 M175 150 L95 285 M175 150 L255 285 M525 150 L445 285 M525 150 L605 285 M255 285 L215 405 M255 285 L295 405 M605 285 L565 405 M605 285 L645 405" class="edge"/><circle cx="350" cy="40" r="23" class="node"/><circle cx="175" cy="150" r="20" class="node"/><circle cx="525" cy="150" r="20" class="node"/><circle cx="95" cy="285" r="18" class="node bad"/><circle cx="255" cy="285" r="18" class="node good"/><circle cx="445" cy="285" r="18" class="node bad"/><circle cx="605" cy="285" r="18" class="node good"/><circle cx="215" cy="405" r="18" class="node good"/><circle cx="295" cy="405" r="18" class="node good"/><circle cx="565" cy="405" r="18" class="node good"/><circle cx="645" cy="405" r="18" class="node bad"/><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><text x="350" y="46" font-size="14" fill="#334155">1</text><text x="175" y="155" font-size="13" fill="#334155">2</text><text x="95" y="291" font-size="12" fill="#D84A4A">3</text><text x="255" y="291" font-size="12" fill="#15803D">4</text><text x="215" y="411" font-size="11" fill="#15803D">5</text><text x="295" y="411" font-size="11" fill="#15803D">6</text><text x="525" y="155" font-size="13" fill="#334155">7</text><text x="445" y="291" font-size="12" fill="#D84A4A">8</text><text x="605" y="291" font-size="12" fill="#15803D">9</text><text x="565" y="411" font-size="11" fill="#15803D">10</text><text x="645" y="411" font-size="11" fill="#D84A4A">11</text></g></svg>`;
}

function pruneGraphic() {
    return `<svg class="diagram" viewBox="0 0 640 360"><path d="M320 42 L180 135 M320 42 L460 135 M180 135 L110 280 M180 135 L250 280 M460 135 L390 280 M460 135 L530 280" class="edge"/><circle cx="320" cy="42" r="23" class="node"/><circle cx="180" cy="135" r="20" class="node"/><circle cx="460" cy="135" r="20" class="node"/><circle cx="110" cy="280" r="20" class="node bad"/><circle cx="250" cy="280" r="20" class="node good"/><circle cx="390" cy="280" r="20" class="node good"/><circle cx="530" cy="280" r="20" class="node bad"/><path d="M180 135 L110 280" stroke="#DC2626" stroke-width="9" stroke-linecap="round" opacity=".23"/><path d="M460 135 L530 280" stroke="#DC2626" stroke-width="9" stroke-linecap="round" opacity=".23"/><text x="110" y="286" text-anchor="middle" font-size="17" font-weight="900" fill="#DC2626">×</text><text x="530" y="286" text-anchor="middle" font-size="17" font-weight="900" fill="#DC2626">×</text><text x="320" y="330" text-anchor="middle" font-size="14" font-weight="900" fill="#DC2626">DỪNG NHÁNH NGAY TẠI ĐÂY</text></svg>`;
}

function queenMiniSummary() {
    return `<svg class="diagram" viewBox="0 0 980 310"><g font-family="Inter,system-ui" font-weight="900"><text x="20" y="46" font-size="16" fill="#64746F">TRÌNH TỰ</text>${[0, 1, 2, 3, 4, 5].map((x, i) => `<circle cx="${90 + i * 154}" cy="135" r="36" fill="${i === 4 ? '#EEF8F0' : '#F7F5ED'}" stroke="${i < 4 ? '#0F766E' : i === 4 ? '#15803D' : '#DC2626'}" stroke-width="3"/><text x="${90 + i * 154}" y="141" text-anchor="middle" font-size="18" fill="#334155">${i + 1}</text>${i < 5 ? `<path d="M${128 + i * 154} 135 H${204 + i * 154}" stroke="#91a3b6" stroke-width="3"/>` : ''}`).join('')}<text x="90" y="205" text-anchor="middle" font-size="13" fill="#566B66">choose</text><text x="244" y="205" text-anchor="middle" font-size="13" fill="#566B66">check</text><text x="398" y="205" text-anchor="middle" font-size="13" fill="#DC2626">ngõ cụt</text><text x="552" y="205" text-anchor="middle" font-size="13" fill="#DC2626">undo</text><text x="706" y="205" text-anchor="middle" font-size="13" fill="#15803D">solution</text><text x="860" y="205" text-anchor="middle" font-size="13" fill="#64746F">continue?</text></g></svg>`;
}

function mazeGraphic() {
    return `<svg viewBox="0 0 760 460"><defs><marker id="mazeArr" markerWidth="11" markerHeight="11" refX="10" refY="3.5" orient="auto"><path d="M0,0 L0,7 L11,3.5 z" fill="#0F766E"/></marker><marker id="backArr" markerWidth="11" markerHeight="11" refX="10" refY="3.5" orient="auto"><path d="M0,0 L0,7 L11,3.5 z" fill="#DC2626"/></marker></defs><rect x="25" y="35" width="710" height="390" rx="24" fill="#FFF7EA" stroke="#d8e0dc" stroke-width="2"/><g stroke="#294760" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M170 35 V285"/><path d="M170 140 H420"/><path d="M420 140 V360"/><path d="M420 300 H560"/><path d="M560 70 V300"/><path d="M560 70 H700"/></g><path d="M70 75 H120 V330 H260 V390 H480 V330 H600 V90 H685" fill="none" stroke="#14B8A6" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="14 10" marker-end="url(#mazeArr)"/><path d="M260 330 V180 H390" fill="none" stroke="#DC2626" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 8"/><path d="M390 180 C340 215 300 260 260 330" fill="none" stroke="#DC2626" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8" marker-end="url(#backArr)"/><circle cx="70" cy="75" r="12" fill="#15803D"/><circle cx="685" cy="90" r="12" fill="#F97316"/><circle cx="390" cy="180" r="10" fill="#DC2626"/><text x="70" y="51" font-size="13" font-weight="900" fill="#15803D">BẮT ĐẦU</text><text x="640" y="65" font-size="13" font-weight="900" fill="#C2410C">ĐÍCH</text><text x="390" y="158" text-anchor="middle" font-size="12" font-weight="900" fill="#DC2626">NGÕ CỤT</text><text x="228" y="225" font-size="12" font-weight="900" fill="#0F766E">ĐI THỬ</text><text x="292" y="300" font-size="12" font-weight="900" fill="#DC2626">QUAY LẠI</text></svg>`;
}

function board8() {
    const q = [[0, 0], [1, 4], [2, 7], [3, 5], [4, 2], [5, 6], [6, 1], [7, 3]];
    let s = '';
    for (let r = 0; r < 8; r++)
        for (let c = 0; c < 8; c++) {
            s += `<div class="sq ${(r + c) % 2 ? 'dark' : 'light'}"></div>`;
        }
    q.forEach(([r, c]) => {
        s = s.replace(`<div class="sq ${(r + c) % 2 ? 'dark' : 'light'}"></div>`, `<div class="sq ${(r + c) % 2 ? 'dark' : 'light'}"><span style="font:clamp(26px,3.2vw,46px) Georgia;color:#111827;text-shadow:0 4px 0 rgba(255,255,255,.18),0 7px 15px rgba(0,0,0,.34),0 0 20px rgba(20,184,166,.30)">♛</span></div>`);
    });
    return s;
}

function complexityChart() {
    return `<svg class="diagram" viewBox="0 0 900 350"><line x1="65" y1="285" x2="850" y2="285" stroke="#9FB0A9" stroke-width="2"/><line x1="65" y1="285" x2="65" y2="38" stroke="#9FB0A9" stroke-width="2"/><path d="M65 268 C220 255 370 220 520 170 C665 120 760 75 850 45" fill="none" stroke="#14B8A6" stroke-width="5"/><path d="M65 275 C260 270 420 257 560 232 C680 211 770 187 850 150" fill="none" stroke="#F97316" stroke-width="5"/><path d="M65 280 C300 278 520 274 680 267 C770 262 830 252 850 240" fill="none" stroke="#15803D" stroke-width="5"/><text x="760" y="48" font-size="15" font-weight="900" fill="#0F766E">NẶNG HƠN</text><text x="760" y="145" font-size="15" font-weight="900" fill="#C2410C">Ở GIỮA</text><text x="760" y="236" font-size="15" font-weight="900" fill="#15803D">NHẸ HƠN</text><text x="455" y="325" text-anchor="middle" font-size="15" font-weight="800" fill="#6b7c90">Kích thước bài toán →</text><text x="18" y="52" font-size="14" font-weight="800" fill="#6b7c90">số trạng thái / thời gian</text></svg>`;
}

function callStack() {
    return `<div class="panel"><div style="display:grid;gap:9px">${[4, 3, 2, 1, 0].map((r, i) => `<div style="margin-left:${i * 14}px;padding:13px 15px;border-radius:14px;background:${r === 4 ? '#EEF8F0' : '#F6F3EA'};border:1px solid #dbe5ef;font:800 13px 'JetBrains Mono',monospace;color:#334b64">backtrack(row=${r}) <span style="float:right;color:${r === 4 ? '#15803D' : '#6B7C78'}">${r === 4 ? 'return' : 'waiting'}</span></div>`).join('')}</div></div>`;
}

function phoneGraphic() {
    const keys = [["1", ""], ["2", "abc"], ["3", "def"], ["4", "ghi"], ["5", "jkl"], ["6", "mno"], ["7", "pqrs"], ["8", "tuv"], ["9", "wxyz"], ["*", ""], ["0", ""], ["#", ""]];
    let out = '<svg class="phone-svg" viewBox="0 0 520 620" role="img" aria-label="Bàn phím điện thoại 3 x 4 cho digits 23">';
    out += '<rect x="36" y="24" width="448" height="570" rx="34" fill="#FFFDF8" stroke="#C9D7E2" stroke-width="3"/>';
    out += '<text x="260" y="68" text-anchor="middle" font-size="18" font-weight="900" fill="#52666B">ĐIỆN THOẠI · DIGITS = "23"</text>';
    keys.forEach((k, i) => {
        const col = i % 3, row = Math.floor(i / 3), x = 62 + col * 140, y = 105 + row * 112, focus = (k[0] === "2" || k[0] === "3");
        out += '<rect x="' + x + '" y="' + y + '" width="116" height="84" rx="22" fill="' + (focus ? '#ECF9F6' : '#FFFFFF') + '" stroke="' + (focus ? '#0F766E' : '#D8E2E8') + '" stroke-width="' + (focus ? 4 : 2.5) + '"/>';
        out += '<text x="' + (x + 58) + '" y="' + (y + 39) + '" text-anchor="middle" font-size="25" font-weight="950" fill="#17333A">' + k[0] + '</text>';
        if (k[1])
            out += '<text x="' + (x + 58) + '" y="' + (y + 66) + '" text-anchor="middle" font-size="17" font-weight="900" fill="' + (focus ? '#0F766E' : '#52666B') + '">' + k[1] + '</text>';
    });
    out += '</svg>';
    return out;
}

function letterTraceGraphic() {
    const groups = [
        { letter: 'a', x: 245, leaves: [['ad', 155], ['ae', 245], ['af', 335]] },
        { letter: 'b', x: 490, leaves: [['bd', 400], ['be', 490], ['bf', 580]] },
        { letter: 'c', x: 735, leaves: [['cd', 645], ['ce', 735], ['cf', 825]] }
    ];
    let out = '<svg class="state-svg" viewBox="0 0 980 560" role="img" aria-label="Cây lựa chọn từ digits 23">';
    out += '<path d="M490 88 L245 190 M490 88 L490 190 M490 88 L735 190 M245 190 L155 365 M245 190 L245 365 M245 190 L335 365 M490 190 L400 365 M490 190 L490 365 M490 190 L580 365 M735 190 L645 365 M735 190 L735 365 M735 190 L825 365" class="edge"/>';
    out += '<rect x="416" y="32" width="148" height="62" rx="20" fill="#F3FAF8" stroke="#0F766E" stroke-width="3"/><text x="490" y="71" text-anchor="middle" font-size="23" font-weight="950" fill="#17333A">23</text>';
    groups.forEach(g => {
        out += '<circle cx="' + g.x + '" cy="190" r="34" class="node good"/><text x="' + g.x + '" y="198" text-anchor="middle" font-size="21" font-weight="950" fill="#17333A">' + g.letter + '</text>';
        g.leaves.forEach(([t, x]) => {
            out += '<circle cx="' + x + '" cy="365" r="31" class="node"/><text x="' + x + '" y="372" text-anchor="middle" font-size="17" font-weight="950" fill="#334155">' + t + '</text>';
        });
    });
    out += '<rect x="208" y="438" width="564" height="56" rx="18" fill="#F3F8F7" stroke="#D8E2E8" stroke-width="2"/><text x="490" y="473" text-anchor="middle" font-size="16" font-weight="900" fill="#52666B">Cây lựa chọn tạo ra 9 tổ hợp từ digits = "23"</text></svg>';
    return out;
}

function dfsBacktrackGraphic() {
    return `<svg class="state-svg" viewBox="0 0 1080 820" aria-label="Cây tìm kiếm thật của 4-Queens">
    <defs>
    <marker id="dfsBackArr" markerWidth="42" markerHeight="42" refX="37" refY="21" orient="auto" markerUnits="userSpaceOnUse">
    <path d="M2 2 L38 21 L2 40 Q9 21 2 2 Z" fill="#DC2626"/>
    </marker>
    </defs>
    <!-- Cây tìm kiếm thật của ví dụ 4-Queens -->
    <g class="edge" fill="none" stroke="#9FB0A9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M540 82 L285 190 M540 82 L795 190"/>
    <path d="M285 190 L170 315 M285 190 L400 315"/>
    <path d="M170 315 L170 470"/>
    <path d="M400 315 L400 470 M400 470 L400 575"/>
    <path d="M795 190 L795 315 M795 315 L795 470 M795 470 L795 575"/>
    </g>
    <!-- Nodes -->
    <g>
    <circle cx="540" cy="82" r="44" class="node"/>
    <circle cx="285" cy="190" r="42" class="node"/>
    <circle cx="170" cy="315" r="40" class="node"/>
    <circle cx="170" cy="470" r="40" class="node bad"/>
    <circle cx="400" cy="315" r="40" class="node"/>
    <circle cx="400" cy="470" r="40" class="node"/>
    <circle cx="400" cy="575" r="40" class="node bad"/>
    <circle cx="795" cy="190" r="42" class="node"/>
    <circle cx="795" cy="315" r="40" class="node"/>
    <circle cx="795" cy="470" r="40" class="node"/>
    <circle cx="795" cy="575" r="44" class="node good"/>
    </g>
    <!-- Chữ nằm gọn trong vòng tròn -->
    <g font-family="Inter,system-ui,sans-serif" font-weight="950" text-anchor="middle" dominant-baseline="middle">
    <text x="540" y="82" font-size="22" fill="#334155">Bắt đầu</text>
    <text x="285" y="190" font-size="24" fill="#334155">Q1=1</text>
    <text x="170" y="315" font-size="22" fill="#334155">Q2=3</text>
    <text x="170" y="470" font-size="20" fill="#D84A4A">Q3=4 ×</text>
    <text x="400" y="315" font-size="22" fill="#334155">Q2=4</text>
    <text x="400" y="470" font-size="22" fill="#334155">Q3=2</text>
    <text x="400" y="575" font-size="20" fill="#D84A4A">Hàng 4 ×</text>
    <text x="795" y="190" font-size="24" fill="#334155">Q1=2</text>
    <text x="795" y="315" font-size="22" fill="#334155">Q2=4</text>
    <text x="795" y="470" font-size="22" fill="#334155">Q3=1</text>
    <text x="795" y="575" font-size="22" fill="#15803D">Q4=3 ✓</text>
    </g>
    <!-- Quay lui từ Q3=4: cung cong ôm ngoài nhánh trái -->
    <path d="M138 444
    C78 412 76 330 110 276
    C142 224 194 198 235 193"
    fill="none" stroke="#DC2626" stroke-width="7.5" stroke-dasharray="14 10"
    stroke-linecap="round" stroke-linejoin="round" marker-end="url(#dfsBackArr)"/>
    <text x="38" y="455" text-anchor="start" font-size="20" font-weight="950" fill="#DC2626">quay lui</text>
    <!-- Quay lui từ Hàng 4: cung chữ C gọn, bám sát nhánh giữa và trỏ vào Bắt đầu -->
    <path d="M440 575
    C470 603 494 615 506 596
    C520 573 512 530 512 462
    C512 370 512 287 512 240
    C512 198 523 160 520 138
    C520 134 520 130 520 124"
    fill="none" stroke="#DC2626" stroke-width="9" stroke-dasharray="18 12"
    stroke-linecap="round" stroke-linejoin="round" marker-end="url(#dfsBackArr)"/>
    <!-- Nhãn đặt bên phải cung, tránh xa đường mũi tên và các node -->
    <g font-family="Inter,system-ui,sans-serif" font-weight="950" text-anchor="start" fill="#DC2626">
    <text x="555" y="402" font-size="21">quay lui</text>
    <text x="555" y="430" font-size="21">về hàng 1</text>
    </g>
    <!-- Chú thích tách hẳn khỏi cây -->
    <text x="540" y="758" text-anchor="middle" font-size="23" font-weight="950" fill="#0F766E">Cây tìm kiếm của ví dụ 4-Queens</text>
    <text x="540" y="795" text-anchor="middle" font-size="17" font-weight="850" fill="#607570">Mỗi hàng có 4 cột để thử; isSafe() loại ngay các vị trí trùng cột hoặc đường chéo nên chúng không tách thành nhánh riêng.</text>
    </svg>`;
}

function choiceTreeWide() {
    return `<svg viewBox="0 0 980 190"><path d="M490 28 L250 92 M490 28 L730 92 M250 92 L120 155 M250 92 L365 155 M730 92 L615 155 M730 92 L860 155" class="edge"/><circle cx="490" cy="28" r="23" class="node"/><circle cx="250" cy="92" r="20" class="node good"/><circle cx="730" cy="92" r="20" class="node"/><circle cx="120" cy="155" r="18" class="node bad"/><circle cx="365" cy="155" r="18" class="node good"/><circle cx="615" cy="155" r="18" class="node good"/><circle cx="860" cy="155" r="18" class="node bad"/><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><text x="490" y="34" font-size="12" fill="#334155">1</text><text x="250" y="97" font-size="11" fill="#334155">2</text><text x="120" y="161" font-size="10" fill="#D84A4A">3</text><text x="365" y="161" font-size="10" fill="#334155">4</text><text x="730" y="97" font-size="11" fill="#334155">5</text><text x="615" y="161" font-size="10" fill="#334155">6</text><text x="860" y="161" font-size="10" fill="#D84A4A">7</text></g><text x="490" y="184" text-anchor="middle" font-size="12" font-weight="900" fill="#0F766E">mỗi lựa chọn mở ra một nhánh mới</text></svg>`;
}

function setupFlowGraphic() {
    return `<svg viewBox="0 0 980 190"><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><rect x="55" y="55" width="220" height="82" rx="20" fill="#ECF9F6" stroke="#0F766E" stroke-width="2"/><text x="165" y="88" font-size="13" fill="#147D92">INPUT</text><text x="165" y="114" font-size="18" fill="#17333A">Lựa chọn</text><path d="M295 96 H415" stroke="#8BA7A0" stroke-width="4"/><path d="M395 86 L415 96 L395 106" fill="none" stroke="#0F766E" stroke-width="4"/><rect x="425" y="55" width="220" height="82" rx="20" fill="#FFF1E7" stroke="#F47C5C" stroke-width="2"/><text x="535" y="88" font-size="13" fill="#C2410C">CHECK</text><text x="535" y="114" font-size="18" fill="#17333A">Ràng buộc</text><path d="M665 96 H785" stroke="#8BA7A0" stroke-width="4"/><path d="M765 86 L785 96 L765 106" fill="none" stroke="#0F766E" stroke-width="4"/><rect x="795" y="55" width="130" height="82" rx="20" fill="#EEF8F0" stroke="#17804A" stroke-width="2"/><text x="860" y="88" font-size="13" fill="#17804A">OUTPUT</text><text x="860" y="114" font-size="17" fill="#17333A">Nghiệm</text></g></svg>`;
}

function backtrackMiniGraphic() {
    return `<svg viewBox="0 0 520 190"><path d="M70 45 H190 M190 45 L270 110 M190 45 L270 40 M270 110 H390" fill="none" stroke="#9FB0A9" stroke-width="4"/><circle cx="70" cy="45" r="20" class="node good"/><circle cx="190" cy="45" r="20" class="node"/><circle cx="270" cy="110" r="20" class="node bad"/><circle cx="270" cy="40" r="20" class="node good"/><circle cx="390" cy="110" r="20" class="node good"/><path d="M270 110 C225 165 195 165 145 88" fill="none" stroke="#F87171" stroke-width="5" stroke-dasharray="9 8"/><text x="70" y="86" text-anchor="middle" font-size="11" font-weight="900" fill="#17804A">tiếp tục</text><text x="270" y="151" text-anchor="middle" font-size="11" font-weight="900" fill="#DC2626">ngõ cụt</text><text x="155" y="182" text-anchor="middle" font-size="11" font-weight="900" fill="#DC2626">quay về điểm rẽ</text></svg>`;
}

function safeBoardGraphic() {
    return `<svg viewBox="0 0 360 260"><g transform="translate(70,18)">${[0, 1, 2, 3].flatMap(r => [0, 1, 2, 3].map(c => `<rect x="${c * 55}" y="${r * 55}" width="55" height="55" fill="${(r + c) % 2 ? '#285563' : '#F4E7CF'}"/>`)).join('')}<text x="82" y="99" text-anchor="middle" font-size="42" font-family="Georgia" fill="#111827">♛</text>${[[0, 1], [2, 1], [3, 1], [0, 0], [0, 2], [2, 0], [2, 2], [3, 3]].map(([r, c]) => `<rect x="${c * 55 + 5}" y="${r * 55 + 5}" width="45" height="45" rx="9" fill="rgba(220,38,38,.15)"/><text x="${c * 55 + 27.5}" y="${r * 55 + 35}" text-anchor="middle" font-size="24" font-weight="900" fill="#D84A4A">×</text>`).join('')}<rect x="5" y="170" width="45" height="45" rx="9" fill="none" stroke="#17804A" stroke-width="4"/></g><text x="180" y="248" text-anchor="middle" font-size="12" font-weight="900" fill="#0F766E">is_safe(): cùng cột + hai đường chéo</text></svg>`;
}

function codeFlowGraphic() {
    return `<svg viewBox="0 0 980 220"><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><rect x="25" y="65" width="200" height="88" rx="20" fill="#ECF9F6" stroke="#0F766E" stroke-width="2"/><text x="125" y="100" font-size="13" fill="#147D92">isSafe()</text><text x="125" y="128" font-size="16" fill="#17333A">kiểm tra</text><rect x="255" y="65" width="200" height="88" rx="20" fill="#EEF8F0" stroke="#17804A" stroke-width="2"/><text x="355" y="100" font-size="13" fill="#17804A">đặt Q</text><text x="355" y="128" font-size="16" fill="#17333A">thử vị trí</text><rect x="485" y="65" width="200" height="88" rx="20" fill="#FFF1E7" stroke="#F47C5C" stroke-width="2"/><text x="585" y="100" font-size="13" fill="#C2410C">backtrack(row+1)</text><text x="585" y="128" font-size="16" fill="#17333A">đi sâu</text><rect x="715" y="65" width="200" height="88" rx="20" fill="#FFF4D6" stroke="#C48A16" stroke-width="2"/><text x="815" y="100" font-size="13" fill="#9A6A0A">đặt lại "."</text><text x="815" y="128" font-size="16" fill="#17333A">quay lui</text></g><path d="M225 109 H255 M455 109 H485 M685 109 H715" stroke="#8BA7A0" stroke-width="4"/><path d="M235 99 L255 109 L235 119 M465 99 L485 109 L465 119 M695 99 L715 109 L695 119" fill="none" stroke="#0F766E" stroke-width="4"/></svg>`;
}

function pruningCompareGraphic() {
    return `<svg viewBox="0 0 980 240"><text x="250" y="25" text-anchor="middle" font-size="13" font-weight="900" fill="#607570">TRƯỚC KHI CẮT</text><text x="730" y="25" text-anchor="middle" font-size="13" font-weight="900" fill="#0F766E">SAU KHI CẮT</text><path d="M250 50 L120 125 M250 50 L250 125 M250 50 L380 125 M120 125 L70 210 M120 125 L155 210 M250 125 L250 210 M380 125 L345 210 M380 125 L420 210" class="ghost-line"/><path d="M730 50 L610 125 M730 50 L850 125 M610 125 L575 210 M610 125 L645 210 M850 125 L815 210 M850 125 L885 210" class="ghost-line"/><circle cx="250" cy="50" r="20" class="ghost-node"/><circle cx="730" cy="50" r="20" class="ghost-node"/><circle cx="120" cy="125" r="16" class="ghost-node"/><circle cx="250" cy="125" r="16" class="ghost-node"/><circle cx="380" cy="125" r="16" class="ghost-node"/><circle cx="610" cy="125" r="16" class="ghost-node good"/><circle cx="850" cy="125" r="16" class="ghost-node"/><circle cx="70" cy="210" r="14" class="ghost-node bad"/><circle cx="155" cy="210" r="14" class="ghost-node bad"/><circle cx="250" cy="210" r="14" class="ghost-node bad"/><circle cx="345" cy="210" r="14" class="ghost-node good"/><circle cx="420" cy="210" r="14" class="ghost-node bad"/><circle cx="575" cy="210" r="14" class="ghost-node bad"/><circle cx="645" cy="210" r="14" class="ghost-node good"/><circle cx="815" cy="210" r="14" class="ghost-node good"/><circle cx="885" cy="210" r="14" class="ghost-node bad"/><text x="250" y="236" text-anchor="middle" font-size="12" font-weight="900" fill="#D84A4A">nhiều trạng thái còn phải duyệt</text><text x="730" y="236" text-anchor="middle" font-size="12" font-weight="900" fill="#17804A">nhánh sai dừng sớm</text></svg>`;
}

function spacePathGraphic() {
    return `<svg viewBox="0 0 980 220"><path d="M120 55 L300 55 L470 55 L640 55 L820 55" fill="none" stroke="#9FB0A9" stroke-width="4"/><circle cx="120" cy="55" r="28" class="node"/><circle cx="300" cy="55" r="28" class="node good"/><circle cx="470" cy="55" r="28" class="node good"/><circle cx="640" cy="55" r="28" class="node"/><circle cx="820" cy="55" r="28" class="node good"/><text x="120" y="59" text-anchor="middle" font-size="11" font-weight="900" fill="#334155">state</text><text x="300" y="59" text-anchor="middle" font-size="11" font-weight="900" fill="#334155">choice</text><text x="470" y="59" text-anchor="middle" font-size="11" font-weight="900" fill="#334155">check</text><text x="640" y="59" text-anchor="middle" font-size="11" font-weight="900" fill="#334155">recurse</text><text x="820" y="59" text-anchor="middle" font-size="11" font-weight="900" fill="#334155">undo</text><path d="M300 95 V165 H640 V95" fill="none" stroke="#F87171" stroke-width="4" stroke-dasharray="10 8"/><text x="470" y="193" text-anchor="middle" font-size="12" font-weight="900" fill="#DC2626">chỉ giữ đường đi hiện tại, không giữ cả cây</text></svg>`;
}

function backtrackingSimulationGraphic() {
    return `<svg class="bt-simulation-svg" viewBox="0 0 900 560" role="img" aria-label="Mô phỏng cây tìm kiếm của thuật toán Backtracking">
    <defs>
        <marker id="btArrow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#0F766E"/></marker>
        <marker id="btBackArrow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#D84A4A"/></marker>
    </defs>
    <g font-family="Inter,system-ui,sans-serif" font-weight="900" text-anchor="middle">
        <text x="450" y="28" font-size="14" fill="#607570">MỖI NÚT = MỘT TRẠNG THÁI · MỖI CẠNH = MỘT LỰA CHỌN</text>

        <g class="bt-tree-edges" fill="none" stroke="#9FB0A9" stroke-width="4" stroke-linecap="round">
            <path d="M450 105 L250 200"/>
            <path d="M450 105 L650 200"/>
            <path d="M250 200 L150 315"/>
            <path d="M250 200 L350 315"/>
            <path d="M650 200 L560 315"/>
            <path d="M650 200 L750 315"/>
        </g>

        <path d="M450 105 L250 200 L150 315" fill="none" stroke="#0F766E" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="bt-trace"/>
        <path d="M150 315 C92 280 88 205 160 168 C205 145 240 139 285 142" fill="none" stroke="#D84A4A" stroke-width="7" stroke-dasharray="13 9" stroke-linecap="round" class="bt-back" marker-end="url(#btBackArrow)"/>
        <path d="M250 200 L350 315" fill="none" stroke="#17804A" stroke-width="7" stroke-linecap="round" class="bt-next" marker-end="url(#btArrow)"/>

        <circle cx="450" cy="105" r="34" class="node"/>
        <circle cx="250" cy="200" r="31" class="node good"/>
        <circle cx="650" cy="200" r="31" class="node"/>
        <circle cx="150" cy="315" r="31" class="node bad"/>
        <circle cx="350" cy="315" r="31" class="node good"/>
        <circle cx="560" cy="315" r="31" class="node good"/>
        <circle cx="750" cy="315" r="31" class="node bad"/>

        <circle cx="150" cy="315" r="42" fill="none" stroke="#D84A4A" stroke-width="4" opacity="0" class="bt-pulse"/>
        <circle cx="350" cy="315" r="42" fill="none" stroke="#17804A" stroke-width="4" opacity="0" class="bt-pulse bt-pulse-delay"/>

        <text x="450" y="111" font-size="16" fill="#334155">STATE</text>
        <text x="250" y="206" font-size="14" fill="#334155">A</text>
        <text x="650" y="206" font-size="14" fill="#334155">B</text>
        <text x="150" y="321" font-size="15" fill="#D84A4A">NGÕ CỤT</text>
        <text x="350" y="321" font-size="13" fill="#15803D">ĐI TIẾP</text>
        <text x="560" y="321" font-size="13" fill="#15803D">ĐI TIẾP</text>
        <text x="750" y="321" font-size="15" fill="#D84A4A">SAI</text>

        <rect x="74" y="392" width="752" height="118" rx="22" fill="#F7F3EA" stroke="#D7DDD8" stroke-width="2"/>
        <text x="450" y="420" font-size="15" fill="#607570">MỘT VÒNG THỰC THI</text>
        <g font-size="15">
            <rect x="98" y="440" width="112" height="44" rx="13" fill="#ECF9F6" stroke="#0F766E" stroke-width="2"/>
            <text x="154" y="468" fill="#0F766E">1 · CHỌN</text>
            <path d="M215 462 H236" stroke="#8BA7A0" stroke-width="3" marker-end="url(#btArrow)"/>
            <rect x="244" y="440" width="118" height="44" rx="13" fill="#FFF1E7" stroke="#F47C5C" stroke-width="2"/>
            <text x="303" y="468" fill="#C2410C">2 · CHECK</text>
            <path d="M367 462 H388" stroke="#8BA7A0" stroke-width="3" marker-end="url(#btArrow)"/>
            <rect x="396" y="440" width="118" height="44" rx="13" fill="#EEF8F0" stroke="#17804A" stroke-width="2"/>
            <text x="455" y="468" fill="#17804A">3 · ĐI SÂU</text>
            <path d="M519 462 H540" stroke="#8BA7A0" stroke-width="3" marker-end="url(#btArrow)"/>
            <rect x="548" y="440" width="112" height="44" rx="13" fill="#FFF1F0" stroke="#D84A4A" stroke-width="2"/>
            <text x="604" y="468" fill="#B91C1C">4 · SAI?</text>
            <path d="M665 462 H686" stroke="#8BA7A0" stroke-width="3" marker-end="url(#btArrow)"/>
            <rect x="694" y="440" width="110" height="44" rx="13" fill="#FFF4D6" stroke="#C48A16" stroke-width="2"/>
            <text x="749" y="468" fill="#9A6A0A">5 · UNDO</text>
        </g>
        <text x="450" y="540" font-size="14" fill="#52666B">Quay về trạng thái trước rồi thử lựa chọn kế tiếp — đó chính là “quay lui”.</text>
    </g>
    </svg>`;
}

function genericCallStackGraphic() {
    return `<svg class="state-svg generic-stack-svg" viewBox="0 0 560 430" role="img" aria-label="Call stack của Backtracking">
        <defs>
            <marker id="stackBackArrow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#D84A4A"/></marker>
        </defs>
        <g font-family="Inter,system-ui,sans-serif" font-weight="900">
            <text x="280" y="28" text-anchor="middle" font-size="14" fill="#607570">STACK CHỈ CHỨA NHÁNH ĐANG ĐI</text>
            ${[0,1,2,3,4].map((d) => `<rect x="${90 + d*13}" y="${58 + d*62}" width="${380 - d*26}" height="46" rx="14" fill="${d===4?'#EEF8F0':'#F7F3EA'}" stroke="${d===4?'#17804A':'#B8C9C1'}" stroke-width="2"/><text x="280" y="${87 + d*62}" text-anchor="middle" font-size="15" fill="#334155">backtrack(depth = ${d+1})</text>`).join('')}
            <path d="M466 340 C505 321 505 248 463 219" fill="none" stroke="#D84A4A" stroke-width="6" stroke-dasharray="11 8" stroke-linecap="round" marker-end="url(#stackBackArrow)"/>
            <text x="480" y="362" font-size="13" fill="#D84A4A">return → pop</text>
            <text x="280" y="410" text-anchor="middle" font-size="13" fill="#0F766E">Không cần giữ các nhánh đã rời đi.</text>
        </g>
    </svg>`;
}

function spaceBacktrackingGraphic() {
    return `<svg class="space-general-svg" viewBox="0 0 700 400" role="img" aria-label="Các vùng bộ nhớ mà Backtracking sử dụng">
        <defs>
            <marker id="spaceArr1" markerWidth="14" markerHeight="14" refX="11" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L11,4 z" fill="#76AAA2"/></marker>
            <marker id="spaceBackArr1" markerWidth="14" markerHeight="14" refX="11" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L11,4 z" fill="#F28B7B"/></marker>
        </defs>
        <g font-family="Inter,system-ui,sans-serif" font-weight="900">
            <text x="350" y="28" text-anchor="middle" font-size="15" fill="#BFE0D8">BỘ NHỚ THEO NHÁNH ĐANG XÉT</text>

            <rect x="24" y="60" width="190" height="128" rx="22" fill="#0F3F47" stroke="#5CD0DE" stroke-width="3"/>
            <text x="119" y="96" text-anchor="middle" font-size="14" fill="#67E8F9">CALL STACK</text>
            <text x="119" y="137" text-anchor="middle" font-size="28" fill="#F7F5ED">O(d)</text>
            <text x="119" y="166" text-anchor="middle" font-size="12.5" fill="#C9E7E0">d = độ sâu đệ quy</text>

            <rect x="255" y="60" width="190" height="128" rx="22" fill="#123F39" stroke="#55D98A" stroke-width="3"/>
            <text x="350" y="96" text-anchor="middle" font-size="14" fill="#4ADE80">STATE / PATH</text>
            <text x="350" y="137" text-anchor="middle" font-size="28" fill="#F7F5ED">O(s)</text>
            <text x="350" y="166" text-anchor="middle" font-size="12.5" fill="#C9E7E0">s = kích thước trạng thái</text>

            <rect x="486" y="60" width="190" height="128" rx="22" fill="#4A3126" stroke="#F47C5C" stroke-width="3"/>
            <text x="581" y="96" text-anchor="middle" font-size="14" fill="#FDBA74">AUXILIARY</text>
            <text x="581" y="137" text-anchor="middle" font-size="28" fill="#F7F5ED">O(a)</text>
            <text x="581" y="166" text-anchor="middle" font-size="12.5" fill="#E7D5CA">a = bộ nhớ phụ trợ</text>

            <path d="M119 220 C185 266 274 278 350 278 C426 278 515 266 581 220" fill="none" stroke="#6E8F88" stroke-width="4.5" stroke-linecap="round" marker-end="url(#spaceArr1)"/>
            <rect x="125" y="240" width="450" height="54" rx="17" fill="rgba(255,255,255,.07)" stroke="rgba(164,188,215,.24)" stroke-width="2"/>
            <text x="350" y="273" text-anchor="middle" font-size="13.5" fill="#DDF3EE">Tổng bộ nhớ phụ thuộc cách cài đặt</text>

            <path d="M581 318 C535 348 458 353 387 342 C318 331 252 320 190 344" fill="none" stroke="#F28B7B" stroke-width="4" stroke-dasharray="10 9" stroke-linecap="round" marker-end="url(#spaceBackArr1)"/>
            <text x="350" y="382" text-anchor="middle" font-size="13" fill="#F6B4A7">QUAY LUI → GỠ TRẠNG THÁI → DÙNG LẠI BỘ NHỚ</text>
        </g>
    </svg>`;
}

function spaceProcessGraphic() {
    return `<svg class="space-process-svg" viewBox="0 0 760 500" role="img" aria-label="Quá trình bộ nhớ thay đổi khi Backtracking đi sâu và quay lui">
        <defs>
            <marker id="procArr" markerWidth="14" markerHeight="14" refX="11" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L12,4 z" fill="#0F766E"/></marker>
            <marker id="procBack" markerWidth="14" markerHeight="14" refX="11" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L12,4 z" fill="#D84A4A"/></marker>
        </defs>
        <g font-family="Inter,system-ui,sans-serif" font-weight="900">
            <text x="380" y="30" text-anchor="middle" font-size="16" fill="#52666B">STACK THAY ĐỔI THEO ĐỘ SÂU CỦA NHÁNH HIỆN TẠI</text>

            <rect x="55" y="70" width="650" height="82" rx="22" fill="#ECF9F6" stroke="#0F766E" stroke-width="3"/>
            <text x="90" y="103" font-size="13" fill="#0F766E">BƯỚC 1</text>
            <text x="90" y="130" font-size="18" fill="#17333A">backtrack(0) → 1 tầng</text>

            <rect x="105" y="176" width="600" height="82" rx="22" fill="#EEF8F0" stroke="#17804A" stroke-width="3"/>
            <text x="138" y="209" font-size="13" fill="#17804A">BƯỚC 2</text>
            <text x="138" y="236" font-size="18" fill="#17333A">backtrack(1) → 2 tầng</text>

            <rect x="155" y="282" width="550" height="82" rx="22" fill="#FFF1F0" stroke="#D84A4A" stroke-width="3"/>
            <text x="188" y="315" font-size="13" fill="#D84A4A">BƯỚC 3 · NGÕ CỤT</text>
            <text x="188" y="342" font-size="18" fill="#17333A">backtrack(2) kết thúc → pop tầng sâu</text>

            <path d="M380 158 V170" stroke="#7AA89F" stroke-width="4" marker-end="url(#procArr)"/>
            <path d="M405 264 V276" stroke="#7AA89F" stroke-width="4" marker-end="url(#procArr)"/>
            <path d="M705 323 C735 325 735 210 705 210" fill="none" stroke="#D84A4A" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round" marker-end="url(#procBack)"/>
            <text x="692" y="385" text-anchor="middle" font-size="13" fill="#D84A4A">RETURN / POP</text>

            <rect x="55" y="402" width="650" height="62" rx="18" fill="#F6F3EA" stroke="#D7DDD8" stroke-width="2"/>
            <text x="380" y="427" text-anchor="middle" font-size="13" fill="#607570">Sau khi pop, bộ nhớ của tầng sâu được giải phóng</text>
            <text x="380" y="449" text-anchor="middle" font-size="13" fill="#17804A">→ có thể dùng lại cho lựa chọn kế tiếp</text>
        </g>
    </svg>`;
}

function applicationGraphic() {
    return `<svg viewBox="0 0 720 500"><defs><marker id="appArr" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L12,4 z" fill="#0F766E"/></marker></defs><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><circle cx="360" cy="70" r="56" fill="#ECF9F6" stroke="#0F766E" stroke-width="3"/><text x="360" y="65" font-size="14" fill="#17333A">BACK</text><text x="360" y="83" font-size="14" fill="#17333A">TRACKING</text><rect x="75" y="210" width="150" height="82" rx="20" fill="#FFF1E7" stroke="#F47C5C" stroke-width="2"/><text x="150" y="242" font-size="15" fill="#C2410C">N-QUEENS</text><text x="150" y="268" font-size="14" fill="#5B6875">cột + hai đường chéo</text><rect x="285" y="210" width="150" height="82" rx="20" fill="#EEF8F0" stroke="#17804A" stroke-width="2"/><text x="360" y="242" font-size="15" fill="#17804A">LETTER</text><text x="360" y="263" font-size="14" fill="#17804A">COMBINATIONS</text><text x="360" y="282" font-size="14" fill="#5B6875">chọn chữ → đệ quy → quay lui</text><rect x="495" y="210" width="150" height="82" rx="20" fill="#F8F3E8" stroke="#0F766E" stroke-width="2"/><text x="570" y="242" font-size="15" fill="#0F766E">MÊ CUNG</text><text x="570" y="268" font-size="14" fill="#5B6875">đi thử → ngõ cụt → quay lại</text><rect x="255" y="350" width="210" height="72" rx="20" fill="#F6F3EA" stroke="#B8C9C1" stroke-width="2"/><text x="360" y="379" font-size="14" fill="#17333A">HOÁN VỊ / TẬP CON</text><text x="360" y="401" font-size="14" fill="#5B6875">chọn / bỏ từng phần tử</text><path d="M322 120 L150 200" fill="none" stroke="#8BA7A0" stroke-width="4" marker-end="url(#appArr)"/><path d="M360 128 V200" fill="none" stroke="#8BA7A0" stroke-width="4" marker-end="url(#appArr)"/><path d="M398 120 L570 200" fill="none" stroke="#8BA7A0" stroke-width="4" marker-end="url(#appArr)"/></g></svg>`;
}

function conclusionGraphic() {
    return `<svg viewBox="0 0 980 270"><defs><marker id="concArr" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L12,4 z" fill="#6E8F88"/></marker><marker id="concBackArr" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,8 L12,4 z" fill="#22B8CF"/></marker></defs><g font-family="Inter,system-ui" font-weight="900" text-anchor="middle"><line x1="197" y1="95" x2="323" y2="95" stroke="#6E8F88" stroke-width="4" stroke-linecap="round" marker-end="url(#concArr)"/><line x1="427" y1="95" x2="553" y2="95" stroke="#6E8F88" stroke-width="4" stroke-linecap="round" marker-end="url(#concArr)"/><line x1="657" y1="95" x2="783" y2="95" stroke="#6E8F88" stroke-width="4" stroke-linecap="round" marker-end="url(#concArr)"/><circle cx="145" cy="95" r="52" fill="#F8F3E8" stroke="#67D3E1" stroke-width="4"/><text x="145" y="101" font-size="17" font-weight="950" fill="#102A2A">STATE</text><circle cx="375" cy="95" r="52" fill="#E8F7EC" stroke="#55D98A" stroke-width="4"/><text x="375" y="101" font-size="17" font-weight="950" fill="#102A2A">CHOICE</text><circle cx="605" cy="95" r="52" fill="#F8F3E8" stroke="#67D3E1" stroke-width="4"/><text x="605" y="101" font-size="17" font-weight="950" fill="#102A2A">CHECK</text><circle cx="835" cy="95" r="52" fill="#FFF0EE" stroke="#F28B7B" stroke-width="4"/><text x="835" y="101" font-size="17" font-weight="950" fill="#7F1D1D">UNDO</text><path d="M835 153 C835 205 744 230 605 230 C466 230 392 205 375 153" fill="none" stroke="#22B8CF" stroke-width="4.5" stroke-dasharray="9 7" stroke-linecap="round" marker-end="url(#concBackArr)"/><text x="605" y="253" font-size="13" font-weight="900" fill="#9CC4C6">QUAY LUI VỀ BƯỚC TRƯỚC</text></g></svg>`;
}