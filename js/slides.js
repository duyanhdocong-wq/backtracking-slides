const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const boardSVG = (n = 4, queens = [], opts = {}) => {
    const size = 400, cell = size / n;
    let out = `<svg class="diagram" viewBox="0 0 ${size} ${size}"><defs><filter id="glowQ"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
    for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++) {
            let cls = (r + c) % 2 ? '#456B66' : '#eef5fa';
            let extra = '';
            if (opts.attack?.some(([rr, cc]) => rr === r && cc === c))
                extra = `<rect x="${c * cell}" y="${r * cell}" width="${cell}" height="${cell}" fill="rgba(220,38,38,.17)"/><text x="${c * cell + cell / 2}" y="${r * cell + cell * .64}" text-anchor="middle" font-size="30" fill="#DC2626" opacity=".75">×</text>`;
            if (opts.safe?.some(([rr, cc]) => rr === r && cc === c))
                extra = `<rect x="${c * cell + 5}" y="${r * cell + 5}" width="${cell - 10}" height="${cell - 10}" rx="10" fill="none" stroke="#15803D" stroke-width="4"/>`;
            out += `<rect x="${c * cell}" y="${r * cell}" width="${cell}" height="${cell}" fill="${cls}"/>${extra}`;
        }
    for (const [r, c] of queens) {
        out += `<text x="${c * cell + cell / 2}" y="${r * cell + cell * .68}" text-anchor="middle" font-size="${cell * .62}" fill="#111827" filter="url(#glowQ)">♛</text>`;
    }
    out += '</svg>';
    return out;
};

const sections = [];

function add(o) {
    sections.push(o);
}

function base(o) {
    return Object.assign({ variant: 'soft' }, o);
}

function header(k, t, n, extra = '') {
    return `<div class="big-num">${String(n).padStart(2, '0')}</div><div class="header"><div><div class="kicker">${k}</div><h2>${t}</h2></div><div class="right">${extra}</div></div>`;
}

function cards(items, cols = 3) {
    return `<div class="grid${cols}" style="margin-top:28px">${items.map((x, i) => `<div class="panel build-item" data-build="${i * 120}"><div class="kicker">${x.k || ''}</div><div class="card-title">${x.t}</div><div class="card-body">${x.b}</div></div>`).join('')}</div>`;
}

function codeBlock(name, lines, start = 1) {
    return `<div class="code"><div class="codebar"><span class="cdot r"></span><span class="cdot y"></span><span class="cdot g"></span><span class="fname">${name}</span></div><pre style="counter-reset:ln ${start - 1}">${lines.map(s => `<span class="ln">${s}</span>`).join('')}</pre></div>`;
}

// 01–02 intro
add(
    base({
        variant: 'dark',
        html: `<div class="hero-glow"></div><div class="orbit"></div><div style="position:relative;z-index:4;margin-top:12vh;max-width:790px"><div class="pill"><span class="dot"></span> CẤU TRÚC DỮ LIỆU & GIẢI THUẬT</div><div class="kicker" style="margin-top:28px">THUẬT TOÁN</div><h1>BACKTRACKING<br><span style="color:#67E8F9">(QUAY LUI)</span></h1><p style="max-width:670px;margin-top:24px;font-size:21px">Thử một cách → Đi tiếp → Thấy không ổn → Quay lại chỗ vừa rẽ.</p><div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:10px"><span class="pill" style="font-size:15px;padding:11px 17px">Nhóm: 4</span></div></div><div style="position:absolute;right:7vw;top:23vh;width:min(35vw,480px)">${treeGraphic(true)}</div>`
    })
);

// 03–09 problem
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'PHẦN 1 · BÀI TOÁN', 2)}<div style="margin-top:17vh"><div class="section-word" style="color:#E6FFFA">START<br><span style="color:#67E8F9">WITH THE PROBLEM</span></div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 1 · Bài toán', 'Backtracking là gì?', 3)}<div class="grid2" style="margin-top:30px;align-items:stretch"><div><div class="panel"><div class="kicker">VÍ DỤ XUYÊN SUỐT · N-QUEENS</div><h3>Đặt N quân hậu trên bàn cờ N×N</h3><p style="margin-top:10px">Sao cho không có hai quân hậu cùng <b>hàng, cột hoặc đường chéo</b>.</p><div class="grid2" style="margin-top:14px;gap:12px"><div class="step"><div class="kicker">INPUT</div><b>N</b></div><div class="step"><div class="kicker">OUTPUT</div><b>Một hoặc tất cả nghiệm</b></div></div></div><div class="panel" style="margin-top:14px"><div class="kicker">BACKTRACKING</div><div style="font-size:22px;line-height:1.4"><b class="accent">Backtracking</b> là kỹ thuật duyệt / tìm kiếm trên <b>không gian trạng thái</b>, xây lời giải từng bước và quay lui khi trạng thái không còn khả năng hợp lệ.</div><div class="note"><b>Kiểm tra ràng buộc → đệ quy → gỡ lựa chọn cũ.</b></div></div></div><div class="panel">${treeGraphic(false)}<div class="graph-note">Mỗi nút là một trạng thái; mỗi nhánh là một lựa chọn tiếp theo.</div></div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 1 · Bài toán', 'Trước khi viết code, cần xác định 3 thứ', 5)}<div class="grid2" style="margin-top:30px"><div><div class="panel build-item"><div class="kicker">INPUT</div><h3>Có những lựa chọn nào?</h3><p style="margin-top:10px">Đây là các giá trị có thể thử ở từng bước.</p></div><div class="panel build-item" style="margin-top:14px"><div class="kicker">CHECK</div><h3>Điều gì khiến một lựa chọn sai?</h3><p style="margin-top:10px">Đó chính là các ràng buộc dùng để cắt nhánh.</p></div><div class="panel build-item" style="margin-top:14px"><div class="kicker">OUTPUT</div><h3>Khi nào thì dừng?</h3><p style="margin-top:10px">Dừng khi có một nghiệm, hoặc tiếp tục để lấy tất cả nghiệm.</p></div></div><div class="panel build-item"><div class="kicker">4 CÂU HỎI NHỎ</div><div class="grid2" style="margin-top:12px;gap:12px">${[['01', 'Đang xây gì?'], ['02', 'Bước này có thể chọn gì?'], ['03', 'Điều kiện nào làm phải dừng?'], ['04', 'Sai rồi thì quay về đâu?']].map(x => `<div class="step"><div class="num">${x[0]}</div><h3>${x[1]}</h3></div>`).join('')}</div><div class="note">Chốt được 4 câu này thì việc viết hàm backtrack sẽ dễ hơn rất nhiều.</div></div></div><div class="visual-panel" style="margin-top:22px;grid-column:1 / -1"><div class="visual-caption">Từ trạng thái ban đầu đến lời giải</div>${setupFlowGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'Ý TƯỞNG CỐT LÕI', 7)}<div class="section-word" style="margin-top:17vh;color:#E6FFFA">CHOOSE<br><span style="color:#FDBA74">CHECK</span><br><span style="color:#4ADE80">RECURSE</span><br><span style="color:#F87171">UNDO</span></div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Phần 2 · Ý tưởng cốt lõi', 'Vòng lặp đệ quy hoạt động như thế nào?', 9)}<div class="panel" style="margin-top:35px;padding:35px">${flowGraphic()}<div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:20px"><span class="pill">THỬ</span><span class="pill">KIỂM TRA</span><span class="pill">ĐI TIẾP</span><span class="pill">QUAY LUI</span></div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 2 · Ý tưởng cốt lõi', 'Cây không gian trạng thái', 10)}<div class="grid2" style="margin-top:28px"><div><div class="panel"><h3>Mỗi nút có thể hiểu là một trạng thái đang có.</h3><p style="margin-top:10px">Mỗi cạnh là một lựa chọn. DFS sẽ đi sâu một nhánh trước, rồi mới quay sang nhánh khác.</p></div><div class="note">Vì đi sâu từng nhánh nên đệ quy khá hợp với cách này.</div></div><div class="panel"><div class="kicker">ĐỌC MỘT CÂY TRẠNG THÁI</div><div class="step" style="margin-top:14px"><div class="num">01</div><h3>Nút = trạng thái hiện tại</h3><p style="margin-top:7px">Thuật toán đã đưa ra một chuỗi lựa chọn nào đó.</p></div><div class="step" style="margin-top:12px"><div class="num">02</div><h3>Cạnh = lựa chọn tiếp theo</h3><p style="margin-top:7px">Mỗi lựa chọn mở ra một nhánh mới.</p></div><div class="step" style="margin-top:12px"><div class="num">03</div><h3>Lá = điểm dừng</h3><p style="margin-top:7px">Hoặc tìm được nghiệm, hoặc nhánh đã bị loại.</p></div></div></div>`
    })
);
add(
    base({
        variant: 'lav',
        html: `${header('Phần 2 · Ý tưởng cốt lõi', 'Pruning — sức mạnh thật sự của quay lui', 11)}<div class="grid2" style="margin-top:32px"><div class="panel"><div style="font-size:54px;color:#DC2626">✕</div><h3 style="margin-top:4px">Biết sai sớm thì đỡ phải thử tiếp.</h3><p style="margin-top:10px">Sai ở đâu thì dừng ở đó, không cần đi tiếp xuống dưới.</p><div class="note"><b>Pruning</b> là dừng một nhánh ngay khi biết nhánh đó không thể dẫn tới nghiệm hợp lệ.</div></div><div class="panel">${pruneGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 2 · Ý tưởng cốt lõi', 'Brute-force và Backtracking khác nhau ở đâu?', 12)}<table class="table large-table" style="margin-top:28px"><tr><th></th><th>Brute-force</th><th>Backtracking</th></tr><tr><td><b>Cách duyệt</b></td><td>Liệt kê cấu hình hoàn chỉnh.</td><td>Kiểm tra ngay trong lúc đang xây.</td></tr><tr><td><b>Nhánh sai</b></td><td>Nhiều khi phải làm xong rồi mới biết sai.</td><td>Biết sai sớm → cắt.</td></tr><tr><td><b>Mục tiêu</b></td><td>Đơn giản, dễ viết.</td><td>Bỏ bớt các trạng thái không cần thử.</td></tr></table><div class="panel" style="margin-top:22px"><b class="accent">Lưu ý:</b> backtracking không thay đổi bản chất “tìm kiếm”; nó kiểm tra sớm hơn và bỏ bớt những nhánh chắc chắn sai.</div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'MINH HỌA BẰNG TAY', 13)}<div class="grid2" style="margin-top:12vh;align-items:center"><div><div class="section-word" style="font-size:clamp(58px,6.7vw,108px);white-space:nowrap;color:#E6FFFA">4-QUEENS</div><div class="section-sub">Đi từng bước để thấy rõ lúc thử một ô, phát hiện xung đột và quay lại lựa chọn trước.</div></div><div class="visual-panel" style="background:rgba(12,25,43,.45);border-color:rgba(164,188,215,.18)">${boardSVG(4, [[0, 1], [1, 3], [2, 0], [3, 2]])}</div></div>`
    })
);

// 14–26: 4 Queens slides
const qStates = [
    {
        q: [],
        status: 'BÀN CỜ TRỐNG',
        badge: 'BƯỚC 0 · KHỞI TẠO',
        txt: 'Bắt đầu từ hàng 1. Chưa có lựa chọn nào được đặt.',
        attack: []
    },
    {
        q: [[0, 0]],
        status: 'HỢP LỆ',
        badge: 'BƯỚC 1 · Q₁ = (1,1)',
        txt: 'Thử cột 1. Trạng thái hiện tại vẫn hợp lệ.',
        attack: [[1, 0], [2, 0], [3, 0], [1, 1], [2, 2], [3, 3]]
    },
    {
        q: [[0, 0], [1, 2]],
        status: 'HỢP LỆ',
        badge: 'BƯỚC 2 · Q₂ = (2,3)',
        txt: 'Ở hàng 2, cột 3 vượt qua kiểm tra.',
        attack: [[2, 0], [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [3, 2]]
    },
    {
        q: [[0, 0], [1, 2], [2, 3]],
        status: 'VI PHẠM',
        badge: 'BƯỚC 3 · THỬ Q₃ = (3,4)',
        txt: 'Lựa chọn này chặn mọi vị trí còn lại.',
        attack: [[3, 0], [3, 1], [3, 2], [3, 3]]
    },
    {
        q: [[0, 0], [1, 2]],
        status: 'QUAY LUI',
        badge: 'BƯỚC 4 · UNDO Q₃',
        txt: 'Xóa lựa chọn ở hàng 3. Quay lại đúng điểm rẽ trước.',
        attack: [[2, 0], [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [3, 2]]
    },
    {
        q: [[0, 0], [1, 3]],
        status: 'THỬ TIẾP',
        badge: 'BƯỚC 5 · Q₂ = (2,4)',
        txt: 'Thử cột 4 thay cho cột 3.',
        attack: [[2, 0], [2, 1], [2, 3], [2, 4], [3, 1], [3, 3]]
    },
    {
        q: [[0, 0], [1, 3], [2, 1]],
        status: 'HỢP LỆ',
        badge: 'BƯỚC 6 · Q₃ = (3,2)',
        txt: 'Ở hàng 3 vẫn còn một ô có thể thử.',
        attack: [[3, 0], [3, 1], [3, 2], [3, 3]]
    },
    {
        q: [[0, 0], [1, 3], [2, 1], [3, 2]],
        status: 'VI PHẠM',
        badge: 'BƯỚC 7 · NGÕ CỤT',
        txt: 'Không còn cột an toàn cho hàng 4 → quay lui.',
        attack: [[3, 0], [3, 1], [3, 2], [3, 3]]
    },
    {
        q: [[0, 1]],
        status: 'THỬ NHÁNH KHÁC',
        badge: 'BƯỚC 8 · Q₁ = (1,2)',
        txt: 'Quay lui đủ sâu, sau đó thử lựa chọn mới ở hàng 1.',
        attack: [[1, 1], [2, 2], [3, 3], [1, 0], [2, 1], [3, 0]]
    },
    {
        q: [[0, 1], [1, 3]],
        status: 'HỢP LỆ',
        badge: 'BƯỚC 9 · Q₂ = (2,4)',
        txt: 'Cột 4 không xung đột với Q₁.',
        attack: [[2, 0], [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [3, 2]]
    },
    {
        q: [[0, 1], [1, 3], [2, 0]],
        status: 'HỢP LỆ',
        badge: 'BƯỚC 10 · Q₃ = (3,1)',
        txt: 'Hàng 3 chọn cột 1. Chỉ còn một bước nữa.',
        attack: [[3, 0], [3, 1], [3, 2], [3, 3]]
    },
    {
        q: [[0, 1], [1, 3], [2, 0], [3, 2]],
        status: 'NGHIỆM!',
        badge: 'BƯỚC 11 · 4 QUÂN HẬU',
        txt: 'Đã tìm được một nghiệm hoàn chỉnh.',
        attack: []
    },
    {
        q: [[0, 1], [1, 3], [2, 0], [3, 2]],
        status: 'HOÀN TẤT',
        badge: 'BƯỚC 12 · KẾT THÚC',
        txt: 'Có thể dừng ở nghiệm này, hoặc quay lại để tìm nghiệm khác.',
        attack: []
    }
];
qStates.forEach((s, i) => add({ variant: (i % 2 ? 'soft' : 'blue'), q: i, html: `${header('Phần 3 · 4-Queens', s.badge, i + 14)}<div class="queen-explain" style="max-width:60%;margin-top:42px"><div class="panel"><div class="kicker">TRẠNG THÁI</div><h3>${s.status}</h3><p style="margin-top:13px">${s.txt}</p></div><div class="timeline" style="margin-top:20px"><div class="tl"><div class="t">CHECK</div><div class="box">Cùng cột? Cùng chéo? Nếu có → <b class="red">loại</b>.</div></div><div class="tl"><div class="t">RECURSE</div><div class="box">Nếu an toàn → đặt hậu và đi xuống hàng tiếp.</div></div><div class="tl"><div class="t">UNDO</div><div class="box">Nếu ngõ cụt → gỡ hậu và quay về điểm rẽ.</div></div></div></div>` }));

// Cây và phần minh họa mở rộng
add(
    base({
        variant: 'soft',
        html: `${header('Phần 3 · Minh họa', 'Bàn cờ là dữ liệu — cây là lịch sử quyết định', 27)}<div class="grid2" style="margin-top:27px"><div class="panel">${boardSVG(4, [[0, 1], [1, 3], [2, 0], [3, 2]])}</div><div class="panel"><h3>Một nghiệm hoàn chỉnh chỉ là <span class="accent">một đường đi</span> từ gốc xuống lá.</h3><p style="margin-top:13px">Nhánh đỏ là những trường hợp sai và đã bị dừng sớm.</p><div class="note">Nhìn vào cây sẽ dễ thấy lúc thuật toán đi xuống và lúc nó quay lại.</div></div></div>`
    })
);
add(
    base({
        variant: 'lav',
        html: `${header('Phần 3 · Minh họa', 'DFS và quay lui trên chính cây 4-Queens', 28)}<div class="grid2 dfs-slide-grid" style="margin-top:30px;align-items:center"><div class="panel"><h3>Đây chính là cây đã đi qua ở ví dụ 4-Queens vừa rồi.</h3><p style="margin-top:10px">Nhánh trái: <b>Q1=1 → Q2=3 → Q3=4 (sai)</b> → quay lui → <b>Q2=4 → Q3=2</b> → hết cột an toàn ở hàng 4 → quay lui về hàng 1.</p><p style="margin-top:10px">Nhánh phải: <b>Q1=2 → Q2=4 → Q3=1 → Q4=3</b> — nghiệm.</p><div class="note">Mỗi hàng thực ra có 4 cột để thử; cột nào trùng cột hoặc đường chéo với quân hậu trước đó bị <code>isSafe()</code> loại ngay nên không tách thành nhánh riêng trên hình.</div></div><div class="panel dfs-graphic-panel">${dfsBacktrackGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Phần 3 · Minh họa', 'Ba loại trạng thái dễ nhớ', 30)}${cards([{ k: 'VALID', t: 'Đi tiếp', b: 'Mọi ràng buộc đang được thỏa mãn.' }, { k: 'INVALID', t: 'Cắt nhánh', b: 'Một ràng buộc bị phá vỡ → dừng nhánh.' }, { k: 'SOLUTION', t: 'Nghiệm', b: 'Đã hoàn thành toàn bộ cấu trúc cần xây.' }])}<div class="panel" style="margin-top:23px"><b class="accent">Có thể nhớ đơn giản: <b>đặt — kiểm tra — đi sâu — sai thì gỡ — thử lại</b>.</div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 3 · Minh họa', 'Tìm một nghiệm hay tìm hết nghiệm?', 31)}<div class="grid2" style="margin-top:30px"><div class="panel build-item"><div class="kicker">DỪNG NGAY</div><h3>Tìm được nghiệm → dừng.</h3><p style="margin-top:10px">Trường hợp này hợp với đề chỉ cần một đáp án.</p></div><div class="panel build-item"><div class="kicker">ĐI TIẾP</div><h3>Ghi nhận nghiệm → thử tiếp.</h3><p style="margin-top:10px">Dùng khi đề yêu cầu tất cả đáp án.</p></div></div><div class="panel build-item" style="margin-top:20px">${queenMiniSummary()}<div class="note">Với 4-Queens, sau khi tìm được nghiệm đầu tiên, vẫn có thể quay lại để tìm nghiệm đối xứng còn lại.</div></div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'PYTHON', 33)}<div class="grid2" style="margin-top:12vh;align-items:center"><div><div class="section-word" style="color:#E6FFFA">FROM<br><span style="color:#67E8F9">IDEA</span><br>TO CODE</div><div class="section-sub">Từ ý tưởng đến chương trình: biểu diễn trạng thái, kiểm tra điều kiện và thực hiện quay lui.</div></div><div class="visual-panel" style="background:rgba(12,25,43,.45);border-color:rgba(164,188,215,.18)">${codeFlowGraphic()}</div></div>`
    })
);

// 35–43 code
add(
    base({
        variant: 'soft',
        html: `${header('Phần 4 · Python', 'Pseudocode khung tổng quát', 34)}<div class="grid2" style="margin-top:30px">${codeBlock('pseudocode', [`<span class="kw">def</span> <span class="fn">backtrack</span>(state):`, `  <span class="kw">if</span> <span class="fn">is_solution</span>(state):`, `      <span class="fn">save</span>(state)`, `      <span class="kw">return</span>`, ``, `  <span class="kw">for</span> choice <span class="kw">in</span> choices:`, `      <span class="kw">if</span> <span class="fn">valid</span>(state, choice):`, `          apply(choice)`, `          <span class="fn">backtrack</span>(state)`, `          undo(choice)`])}<div><div class="panel"><h3>Hai dòng không được quên</h3><p style="margin-top:10px"><b class="accent">backtrack(state)</b> để đi sâu.</p><p style="margin-top:7px"><b class="red">undo(choice)</b> để trả trạng thái về trước.</p></div><div class="note">Quên <b>undo</b> là trạng thái của nhánh trước có thể làm ảnh hưởng nhánh sau.</div></div></div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Phần 4 · Python', 'N-Queens: biểu diễn trạng thái bằng bàn cờ', 35)}<div class="grid2" style="margin-top:30px"><div class="panel"><div class="kicker">REPRESENTATION</div><h3><code>board[row][col] = "Q"</code></h3><p style="margin-top:11px">Mỗi ô chứa <b>Q</b> nếu có hậu, còn lại là <b>.</b>. Mỗi hàng sẽ đặt đúng một quân hậu.</p><div class="note">Cách này nhìn trực tiếp trên bàn cờ nên dễ theo dõi khi giải bằng đệ quy.</div></div><div class="panel">${boardSVG(4, [[0, 1], [1, 3], [2, 0], [3, 2]])}</div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 4 · Python', 'Hàm is_safe() kiểm tra điều gì?', 36)}${cards([{ k: 'COL', t: 'Cùng cột', b: 'Quét các hàng phía trên; gặp hậu ở cột c thì trả False.' }, { k: 'DIAG', t: 'Hai đường chéo', b: 'Quét chéo trên-trái và trên-phải; gặp hậu thì trả False.' }, { k: 'ROW', t: 'Cùng hàng', b: 'Mỗi lần gọi backtrack(), chỉ đang xét một hàng nên không cần quét lại hàng.' }], 3)}<div class="grid2" style="margin-top:22px;align-items:center"><div class="panel" style="text-align:center;font:800 17px 'JetBrains Mono',monospace;line-height:1.7"><code>isSafe(r,c)</code><br><span style="color:#0F766E">cột</span> → <span style="color:#0F766E">chéo trên-trái</span> → <span style="color:#0F766E">chéo trên-phải</span><br><span style="color:#DC2626">gặp "Q" → False</span></div><div class="visual-panel">${safeBoardGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `${header('Phần 4 · Python', 'N-Queens — Python', 37)}<div class="nq-code-grid"><div>${codeBlock('Solution.py · solve + isSafe', [
            `<span class="kw">class</span> <span class="fn">Solution</span>:`,
            `    <span class="kw">def</span> <span class="fn">solveNQueens</span>(self, n):`,
            `        board = [[<span class="str">"."</span>] * n <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(n)]`,
            `        ans = []`,
            ``,
            `        <span class="kw">def</span> <span class="fn">isSafe</span>(r, c):`,
            `            <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(r):`,
            `                <span class="kw">if</span> board[i][c] == <span class="str">"Q"</span>:`,
            `                    <span class="kw">return</span> <span class="num">False</span>`,
            ``,
            `            i, j = r - <span class="num">1</span>, c - <span class="num">1</span>`,
            `            <span class="kw">while</span> i >= <span class="num">0</span> <span class="kw">and</span> j >= <span class="num">0</span>:`,
            `                <span class="kw">if</span> board[i][j] == <span class="str">"Q"</span>:`,
            `                    <span class="kw">return</span> <span class="num">False</span>`,
            `                i -= <span class="num">1</span>; j -= <span class="num">1</span>`,
            ``,
            `            i, j = r - <span class="num">1</span>, c + <span class="num">1</span>`,
            `            <span class="kw">while</span> i >= <span class="num">0</span> <span class="kw">and</span> j < n:`,
            `                <span class="kw">if</span> board[i][j] == <span class="str">"Q"</span>:`,
            `                    <span class="kw">return</span> <span class="num">False</span>`,
            `                i -= <span class="num">1</span>; j += <span class="num">1</span>`,
            `            <span class="kw">return</span> <span class="num">True</span>`
        ])}</div><div>${codeBlock('Solution.py · backtrack', [
            `        <span class="cm"># Thử từng cột; không đi được thì quay lui</span>`,
            `        <span class="kw">def</span> <span class="fn">backtrack</span>(r):`,
            `            <span class="kw">if</span> r == n:`,
            `                ans.append([<span class="str">""</span>.join(row) <span class="kw">for</span> row <span class="kw">in</span> board])`,
            `                <span class="kw">return</span>`,
            ``,
            `            <span class="kw">for</span> c <span class="kw">in</span> <span class="fn">range</span>(n):`,
            `                <span class="kw">if</span> <span class="fn">isSafe</span>(r, c):`,
            `                    board[r][c] = <span class="str">"Q"</span>`,
            `                    <span class="fn">backtrack</span>(r + <span class="num">1</span>)`,
            `                    board[r][c] = <span class="str">"."</span>`,
            ``,
            `        <span class="fn">backtrack</span>(<span class="num">0</span>)`,
            `        <span class="kw">return</span> ans`
        ], 23)}</div></div><div class="note nq-code-note">Mỗi hàng thử từng cột; <b>isSafe()</b> kiểm tra cột và hai đường chéo trước khi đặt hậu, sau đó <b>backtrack()</b> đi xuống rồi gỡ <code>Q</code> khi cần.</div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Phần 4 · Python', 'Chạy thử với n = 4', 40)}<div class="grid2" style="margin-top:32px">${codeBlock('kết quả chạy', [`Input: n = <span class="num">4</span>`, ``, `Output:`, `[[<span class="str">".Q.."</span>, <span class="str">"...Q"</span>, <span class="str">"Q..."</span>, <span class="str">"..Q."</span>],`, ` [<span class="str">"..Q."</span>, <span class="str">"Q..."</span>, <span class="str">"...Q"</span>, <span class="str">".Q.."</span>]]`, ``, `Số nghiệm = <span class="num">2</span>`])}<div class="panel">${boardSVG(4, [[0, 1], [1, 3], [2, 0], [3, 2]])}<div class="note">Hai nghiệm đối xứng qua trục dọc.</div></div></div>`
    })
);

// Phần trực quan
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'TRỰC QUAN HÓA', 42)}<div style="margin-top:13vh"><div class="section-word" style="color:#E6FFFA">SEE<br><span style="color:#67E8F9">THE SEARCH</span></div><div class="section-sub" style="margin-top:18px;max-width:700px">Dùng <b>hình ảnh và mô phỏng</b> để nhìn thấy quá trình Backtracking đang chạy.</div></div>`
    })
);
add(
    base({
        variant: 'lav',
        html: `${header('Phần 5 · Trực quan', 'Mê cung — nhìn thấy quá trình “thử → đi tiếp → quay lui”', 45)}<div class="grid2" style="margin-top:24px"><div class="maze">${mazeGraphic()}</div><div><div class="panel"><div class="kicker">MỤC ĐÍCH CỦA HÌNH</div><h3>Biến thuật toán từ code thành một quá trình có thể nhìn thấy.</h3><p style="margin-top:9px">Đường <b style="color:#0F766E">xanh</b> là hướng đang được thử. Khi đi vào ô không thể tiếp tục, nhánh đó trở thành <b style="color:#D84A4A">ngõ cụt</b> và thuật toán quay về điểm rẽ trước đó để thử hướng khác.</p></div><div class="grid2" style="margin-top:14px;gap:12px"><div class="step"><div class="num">1</div><h3>THỬ</h3><p style="margin-top:6px">Chọn một hướng đi.</p></div><div class="step"><div class="num">2</div><h3>KIỂM TRA</h3><p style="margin-top:6px">Còn đi được thì đi tiếp.</p></div><div class="step"><div class="num">3</div><h3>QUAY LUI</h3><p style="margin-top:6px">Ngõ cụt thì trở lại điểm rẽ.</p></div><div class="step"><div class="num">4</div><h3>THỬ HƯỚNG KHÁC</h3><p style="margin-top:6px">Tiếp tục tìm kiếm.</p></div></div><div class="note">Mục đích của phần này chỉ là <b>làm cho quá trình tìm kiếm trở nên nhìn thấy được</b>: thử một lựa chọn, đi tiếp, gặp ngõ cụt thì quay lui và thử lựa chọn khác.</div></div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 5 · Trực quan', '8-Queens — mở rộng cùng một cách nhìn', 46)}<div class="grid2" style="margin-top:20px"><div><div class="panel"><div class="kicker">N = 8</div><h3 style="font-size:28px">Cùng một ý tưởng, nhưng không gian tìm kiếm lớn hơn.</h3><p style="margin-top:11px">Hình bàn cờ cho thấy khi N tăng, số lựa chọn tăng theo; vì vậy <b>pruning</b> giúp loại các nhánh sai sớm trước khi đi quá sâu.</p></div><div class="note">Trực quan hóa giúp nối ví dụ 4-Queens ở phần trước với quy mô lớn hơn: vẫn là <b>thử → kiểm tra → đi sâu → quay lui</b>.</div></div><div class="board-shell"><div class="board" id="hero8">${board8()}</div></div></div>`
    })
);

// Phần độ phức tạp thời gian
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'ĐỘ PHỨC TẠP THỜI GIAN', 49)}<div class="grid2" style="margin-top:12vh;align-items:center"><div><div class="section-word" style="color:#E6FFFA">HOW<br><span style="color:#FBBF24">FAST?</span></div><div class="section-sub">Cây có thể rất lớn. Điều đáng nói là pruning quyết định ta phải đi qua bao nhiêu nhánh.</div></div><div class="visual-panel howfast-visual" style="background:rgba(12,25,43,.45);border-color:rgba(164,188,215,.18)">${pruningCompareGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 6 · Thời gian', 'Có pruning thì số nhánh phải thử sẽ giảm', 50)}<div class="grid2" style="margin-top:34px"><div class="panel build-item"><div class="kicker">TỐT NHẤT</div><h3>Gặp nghiệm sớm hoặc loại được nhánh ngay từ đầu.</h3><p style="margin-top:10px">Đề chỉ cần một nghiệm thì có thể dừng luôn khi tìm thấy.</p></div><div class="panel build-item"><div class="kicker">XẤU NHẤT</div><h3>Cây vẫn rất lớn nếu ràng buộc không giúp cắt được nhiều.</h3><p style="margin-top:10px">Với N-Queens, số cấu hình cần xét có thể tăng theo <b>O(N!)</b>; vì mỗi lần đặt còn phải kiểm tra các hậu trước đó nên cận thô của đoạn code này là <b>O(N·N!)</b>. Brute-force thuần túy có thể lên tới <b>O(N^N)</b>.</p></div></div><div class="note">Các con số trên dùng để hình dung mức tăng trưởng; thời gian thực tế còn phụ thuộc cách cài đặt và thứ tự thử.</div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Phần 6 · Thời gian', 'Trường hợp trung bình phụ thuộc vào cách cài đặt', 51)}<div class="grid2" style="margin-top:26px"><div class="panel build-item">${complexityChart()}<div class="graph-explain"><div class="kicker">CÁCH ĐỌC ĐỒ THỊ</div><div class="graph-line"><b>Trục ngang:</b> kích thước bài toán → N lớn thì không gian trạng thái có xu hướng lớn hơn.</div><div class="graph-line"><b>Trục dọc:</b> lượng trạng thái / thời gian cần xử lý — chỉ mang tính định tính.</div><div class="graph-line"><b>Đường cao:</b> pruning yếu, nhánh sai đi sâu → phải xử lý nhiều trạng thái hơn.</div><div class="graph-line"><b>Đường thấp:</b> pruning tốt, nhánh sai dừng sớm → xử lý ít trạng thái hơn.</div><div class="graph-note">Các đường chỉ minh họa xu hướng để dễ hình dung, không phải 3 công thức Big-O cố định; “average case” thay đổi theo dữ liệu, thứ tự thử và cách kiểm tra ràng buộc.</div></div></div><div><div class="panel build-item"><div class="kicker">TRƯỚC KHI CẮT</div><div class="metric"><div class="value">nhiều trạng thái</div><div class="label">Mỗi nhánh còn được đi khá sâu.</div></div><div class="kicker" style="margin-top:18px">SAU KHI CẮT</div><div class="metric"><div class="value">ít trạng thái hơn</div><div class="label">Những nhánh sai bị dừng sớm.</div></div></div><div class="note">Không có một công thức “average case” dùng chung cho mọi bài backtracking. Thứ tự thử và cách kiểm tra ràng buộc ảnh hưởng rất nhiều.</div></div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 6 · Thời gian', 'Nhìn nhanh 3 trường hợp', 54)}<table class="table" style="margin-top:30px"><tr><th>Tình huống</th><th>Điều xảy ra</th><th>Hệ quả</th></tr><tr><td><b>Tốt nhất</b></td><td>Gặp nghiệm / cắt nhánh sớm</td><td>Ít trạng thái</td></tr><tr><td><b>Trung bình</b></td><td>Phụ thuộc mạnh dữ liệu + thứ tự thử</td><td>Khó có công thức chung</td></tr><tr><td><b>Xấu nhất</b></td><td>Cây lớn, pruning yếu</td><td>Mũ / giai thừa</td></tr></table>`
    })
);

// Phần độ phức tạp không gian
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'ĐỘ PHỨC TẠP KHÔNG GIAN', 55)}<div class="grid2" style="margin-top:13vh;align-items:center"><div><div class="section-word" style="color:#E6FFFA">CALL<br><span style="color:#67E8F9">STACK</span></div><div class="section-sub">Không lưu cả cây. Chỉ giữ trạng thái hiện tại và các lời gọi đệ quy đang chờ quay lại.</div></div><div class="visual-panel" style="background:rgba(12,25,43,.45);border-color:rgba(164,188,215,.18)">${spacePathGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 7 · Không gian', 'Bộ nhớ Backtracking dùng ở đâu?', 56)}<div class="space-layout"><div class="space-left"><div class="call-stack-graphic">${callStack()}</div><div class="callstack-info"><div class="panel"><div class="metric"><div class="value">O(N)</div><div class="label">call stack: sâu tối đa N trong N-Queens row-by-row</div></div><div class="metric"><div class="value">O(N²)</div><div class="label">bàn cờ N×N được lưu trong trạng thái</div></div><div class="note">Thuật toán không lưu cả cây tìm kiếm. Ngoài call stack O(N), cách cài đặt N-Queens này còn giữ bàn cờ O(N²), nên bộ nhớ của trạng thái chi phối tổng thể.</div></div></div></div><div class="space-speak"><div class="kicker">NÓI DỄ HIỂU</div><h3 style="font-size:24px;line-height:1.25">Không gian là phần bộ nhớ phải giữ khi thuật toán đang chạy.</h3><p><b>Độ phức tạp không gian</b> hỏi xem tại một thời điểm chương trình phải giữ bao nhiêu dữ liệu trong RAM, chứ không phải đã đi qua bao nhiêu nhánh.</p><p>Với N-Queens, mỗi lần gọi <code>backtrack(r)</code> ta đi xuống thêm một hàng. Vì có tối đa N hàng nên call stack sâu tối đa <b>N mức</b> → <b>O(N)</b>.</p><p>Nhưng ngoài stack, chương trình còn giữ <code>board</code> kích thước <b>N×N</b>. Chỉ riêng cấu trúc này đã cần <b>O(N²)</b> ô nhớ.</p><p>Khi quay lui, lời gọi sâu hơn kết thúc và trạng thái của nhánh cũ được gỡ để dùng lại cho nhánh khác. Vì vậy <b>không cần lưu cả cây tìm kiếm</b>.</p><p>Do đó, với đúng cách cài đặt đang trình bày, <b>O(N²)</b> là phần chi phối tổng bộ nhớ; còn <b>O(N)</b> là chi phí của độ sâu đệ quy.</p></div></div>`
    })
);

// Bài toán ứng dụng + kết luận
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'BÀI TOÁN ỨNG DỤNG · LETTER COMBINATIONS', 59)}<div style="margin-top:12vh;max-width:1180px"><div class="section-word" style="color:#E6FFFA">LETTER<br><span style="color:#4ADE80">COMBINATIONS</span></div><div class="section-sub" style="max-width:1040px">LeetCode 17 · một bài toán trên LeetCode, trong đó mỗi chữ số mở ra 3–4 lựa chọn; chọn một chữ, đi sâu, rồi quay lui để thử chữ khác.</div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Phần 8 · Letter Combinations', 'Input / output với digits = "23"', 60)}<div class="grid2" style="margin-top:28px"><div class="panel">${phoneGraphic(false)}</div><div><div class="panel"><div class="kicker">INPUT</div><h3><code>digits = "23"</code></h3><p style="margin-top:10px">Số <b>2</b> cho <b>a, b, c</b>; số <b>3</b> cho <b>d, e, f</b>.</p></div><div class="panel" style="margin-top:15px"><div class="kicker">OUTPUT</div><h3>9 tổ hợp</h3><p style="margin-top:10px"><code>ad, ae, af, bd, be, bf, cd, ce, cf</code></p></div></div></div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Phần 8 · Letter Combinations', 'Từ "23" sinh ra các nhánh như thế nào?', 61)}<div class="grid2" style="margin-top:28px"><div class="panel">${letterTraceGraphic()}</div><div><div class="step"><div class="num">1</div><h3>CHỌN chữ của số 2</h3><p style="margin-top:8px">Ví dụ chọn <b>a</b>.</p></div><div class="step" style="margin-top:12px"><div class="num">2</div><h3>ĐI SÂU vào số 3</h3><p style="margin-top:8px">Thử <b>d → e → f</b> để tạo <code>ad, ae, af</code>.</p></div><div class="step" style="margin-top:12px"><div class="num">3</div><h3>QUAY LUI</h3><p style="margin-top:8px">Hết các chữ của nhánh <b>a</b> thì quay lại để thử <b>b</b>, rồi <b>c</b>.</p></div></div></div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `${header('Phần 8 · Letter Combinations', 'Letter Combinations — Python', 62)}<div class="lc-code-grid"><div>${codeBlock('Solution.py · setup', [`<span class="kw">class</span> Solution:`, `    <span class="kw">def</span> <span class="fn">letterCombinations</span>(self, digits: <span class="fn">str</span>) -&gt; <span class="fn">list</span>[<span class="fn">str</span>]:`, `        phone = {`, `            <span class="str">"2"</span>: <span class="str">"abc"</span>, <span class="str">"3"</span>: <span class="str">"def"</span>,`, `            <span class="str">"4"</span>: <span class="str">"ghi"</span>, <span class="str">"5"</span>: <span class="str">"jkl"</span>,`, `            <span class="str">"6"</span>: <span class="str">"mno"</span>, <span class="str">"7"</span>: <span class="str">"pqrs"</span>,`, `            <span class="str">"8"</span>: <span class="str">"tuv"</span>, <span class="str">"9"</span>: <span class="str">"wxyz"</span>`, `        }`, `        ans = []`], 1)}</div><div>${codeBlock('Solution.py · backtrack', [`        <span class="kw">def</span> <span class="fn">backtrack</span>(i, path):`, `            <span class="kw">if</span> i == <span class="fn">len</span>(digits):`, `                ans.append(<span class="str">""</span>.join(path))`, `                <span class="kw">return</span>`, `            <span class="kw">for</span> ch <span class="kw">in</span> phone[digits[i]]:`, `                path.append(ch)`, `                <span class="fn">backtrack</span>(i + <span class="num">1</span>, path)`, `                path.pop()`, `        <span class="kw">if</span> digits:`, `            <span class="fn">backtrack</span>(<span class="num">0</span>, [])`, `        <span class="kw">return</span> ans`], 10)}</div></div><div class="note lc-code-note">Cây lựa chọn rất trực tiếp: <b>chọn 1 chữ → đi sâu → quay lui → thử chữ tiếp theo</b>. Ô bên trái dựng dữ liệu ban đầu; ô bên phải chứa phần <b>backtrack()</b> thực hiện tìm kiếm.</div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `${header('Section divider', 'KẾT LUẬN', 63)}<div class="conclusion-layout"><div class="conclusion-flow"><span style="color:#FBBF24">THỬ</span><span class="conclusion-sep">→</span><span style="color:#67E8F9">KIỂM TRA</span><span class="conclusion-sep">→</span><span style="color:#4ADE80">ĐI SÂU</span><span class="conclusion-sep">→</span><span style="color:#F87171">QUAY LUI</span></div><div class="visual-panel conclusion-visual" style="background:rgba(12,25,43,.45);border-color:rgba(164,188,215,.18)">${conclusionGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'soft',
        html: `${header('Kết luận', 'Ưu điểm và nhược điểm', 65)}${cards([{ k: 'ƯU ĐIỂM', t: 'Đúng và có hệ thống', b: 'Dễ chia bài toán thành từng quyết định nhỏ.' }, { k: 'ƯU ĐIỂM', t: 'Cắt nhánh sớm', b: 'Nhánh sai được dừng ngay khi phát hiện vi phạm.' }, { k: 'NHƯỢC ĐIỂM', t: 'Vẫn có thể rất chậm', b: 'Với không gian trạng thái lớn, số trường hợp phải thử vẫn có thể tăng rất nhanh.' }], 3)}<div class="note">Backtracking hiệu quả hơn khi ràng buộc đủ mạnh để loại nhiều nhánh trong lúc tìm kiếm.</div>`
    })
);
add(
    base({
        variant: 'blue',
        html: `${header('Kết luận', 'Ứng dụng của Backtracking', 66)}<div class="grid2" style="margin-top:30px"><div>${cards([{ k: '01', t: 'N-Queens', b: 'Đặt quân hậu sao cho không có hai quân tấn công nhau.' }, { k: '02', t: 'Letter Combinations', b: 'Mỗi chữ số mở ra 3–4 lựa chọn chữ cái; chọn một chữ, đi sâu rồi quay lui.' }, { k: '03', t: 'Mê cung', b: 'Thử đường đi; gặp ngõ cụt thì quay về điểm rẽ gần nhất.' }, { k: '04', t: 'Hoán vị / tập con', b: 'Mỗi bước quyết định chọn hay bỏ một phần tử.' }], 2)}</div><div class="visual-panel">${applicationGraphic()}</div></div>`
    })
);
add(
    base({
        variant: 'dark',
        html: `<div class="hero-glow"></div><div style="height:100%;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;z-index:3"><div><h1 style="font-size:clamp(64px,10vw,140px);letter-spacing:-.07em">THANKS<br><span style="color:#67E8F9">FOR WATCHING</span></h1></div></div>`
    })
);