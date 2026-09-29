// Render slides
const deck = document.getElementById('deck');

sections.forEach((s, i) => {
    const sec = document.createElement('section');

    sec.className = `slide ${s.variant || 'soft'}${i === 0 ? ' active' : ''}`;
    sec.dataset.index = i + 1;
    sec.innerHTML = s.html;

    deck.appendChild(sec);
});

const slides = [...document.querySelectorAll('.slide')];
const total = slides.length;

// Index slide hiện tại
let idx = 0;

// Hiển thị 4-Queens
const queenStage = document.getElementById('queenStage');
const qBoard = document.getElementById('qBoard');

for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
        const d = document.createElement('div');

        d.className = `dsq ${((r + c) % 2 === 0) ? 'light' : 'dark'}`;
        qBoard.appendChild(d);
    }
}

const qpieces = [];

for (let r = 0; r < 4; r++) {
    const q = document.createElement('div');

    q.className = 'qpiece';
    q.dataset.row = r;
    q.textContent = '♛';
    q.style.opacity = '0';
    q.style.transform = `translate(0%, ${r * 100}%)`;

    qBoard.appendChild(q);
    qpieces.push(q);
}

// Index của trạng thái 4-Queens hiện tại
let currentQ = -1;

const QUEEN_MOVE_TRANSITION =
    'transform 2.15s cubic-bezier(.16,.84,.18,1)';

const QUEEN_APPEAR_TRANSITION =
    'transform 2.15s cubic-bezier(.16,.84,.18,1),' +
    'opacity .9s ease';

function getQueenStatusClass(state) {
    return (
        state?.status === 'QUAY LUI' ||
        state?.status === 'VI PHẠM'
    );
}

function setQueenPosition(q, row, col, opacity) {
    q.style.transform =
        `translate(${col * 100}%, ${row * 100}%)`;

    q.style.opacity = opacity;
}

function applyQueenState(si, instant = false) {
    const s = qStates[si];

    if (!s) {
        return;
    }

    const oldState = qStates[currentQ];
    const old = oldState?.q || [];

    const oldMap = new Map(
        old.map(([row, col]) => [row, col])
    );

    const nextMap = new Map(
        s.q.map(([row, col]) => [row, col])
    );

    const path = document.getElementById('movePath');

    path.classList.remove('play');

    qpieces.forEach((q, r) => {
        const oldCol = oldMap.get(r);
        const existedBefore = oldCol !== undefined;

        q.style.transition = 'none';

        q.classList.toggle(
            'back',
            getQueenStatusClass(oldState)
        );

        setQueenPosition(
            q,
            r,
            existedBefore ? oldCol : 0,
            existedBefore ? '1' : '0'
        );
    });

    void qBoard.offsetWidth;

    qpieces.forEach((q, r) => {
        const oldCol = oldMap.get(r);
        const newCol = nextMap.get(r);

        const existedBefore = oldCol !== undefined;
        const existsNow = newCol !== undefined;

        if (instant) {
            q.style.transition = 'none';

            q.classList.toggle(
                'back',
                getQueenStatusClass(s)
            );

            setQueenPosition(
                q,
                r,
                existsNow ? newCol : 0,
                existsNow ? '1' : '0'
            );

            return;
        }

        if (
            existedBefore &&
            existsNow &&
            oldCol !== newCol
        ) {
            q.classList.toggle(
                'back',
                getQueenStatusClass(s)
            );

            q.style.transition = QUEEN_MOVE_TRANSITION;

            setQueenPosition(
                q,
                r,
                newCol,
                '1'
            );

            return;
        }

        if (!existedBefore && existsNow) {
            q.classList.toggle(
                'back',
                getQueenStatusClass(s)
            );

            q.style.transition =
                QUEEN_APPEAR_TRANSITION;

            setQueenPosition(
                q,
                r,
                newCol,
                '1'
            );

            return;
        }

        if (existedBefore && !existsNow) {
            q.style.transition = 'none';

            q.style.opacity = '0';

            q.classList.toggle(
                'back',
                getQueenStatusClass(s)
            );

            q.style.transform =
                `translate(${oldCol * 100}%, ${r * 100}%)`;

            return;
        }

        if (
            existedBefore &&
            existsNow &&
            oldCol === newCol
        ) {
            q.style.transition = 'none';

            q.classList.toggle(
                'back',
                getQueenStatusClass(s)
            );

            setQueenPosition(
                q,
                r,
                newCol,
                '1'
            );

            return;
        }

        q.style.transition = 'none';
        q.classList.toggle(
            'back',
            getQueenStatusClass(s)
        );

        setQueenPosition(
            q,
            r,
            0,
            '0'
        );
    });

    // Cập nhật trạng thái
    document.getElementById('qStatus').textContent =
        s.status;

    document.getElementById('qBadge').textContent =
        s.badge;

    // Đặt lại màu nền các ô bị tấn công trước đó
    [...qBoard.children].forEach((el) => {
        if (!el.classList.contains('dsq')) {
            return;
        }

        el.style.boxShadow = '';
    });

    // Highlight các ô bị tấn công
    s.attack.forEach(([r, c]) => {
        const cell = qBoard.children[r * 4 + c];

        cell.style.boxShadow =
            'inset 0 0 0 2px rgba(220,38,38,.28), ' +
            'inset 0 0 30px rgba(220,38,38,.12)';
    });

    if (currentQ >= 0 && si !== currentQ) {
        let changed = null;

        for (const [r, newCol] of nextMap) {
            const oldCol = oldMap.get(r);

            if (
                oldCol !== undefined &&
                oldCol !== newCol
            ) {
                changed = [
                    r,
                    oldCol,
                    newCol
                ];

                break;
            }
        }

        if (changed) {
            const [
                r,
                oldCol,
                newCol
            ] = changed;

            const x1 = 12 + oldCol * 25;
            const y1 = 12 + r * 25;

            const x2 = 12 + newCol * 25;
            const y2 = 12 + r * 25;

            path.setAttribute(
                'd',
                `M${x1},${y1}
                 C${(x1 + x2) / 2},${y1 - 8}
                  ${(x1 + x2) / 2},${y2 + 8}
                  ${x2},${y2}`
            );

            void path.offsetWidth;

            path.classList.add('play');
        }
    }

    currentQ = si;
}

function showQueen(on) {
    queenStage.classList.toggle('on', on);
}

function animateSlide(s) {
    [
        ...s.querySelectorAll(
            '.panel,.step,.metric,.kicker,' +
            'h1,h2,h3,p,.code,.maze,.table,.timeline'
        )
    ].forEach((el, i) => {
        el.style.animation = 'none';

        el.style.animation =
            el.classList.contains('build-item')
                ? `buildIn .92s cubic-bezier(.2,.8,.2,1) ${Math.min(
                    (Number(el.dataset.build) || i * 110),
                    720
                )}ms both`
                : `rise .86s cubic-bezier(.2,.8,.2,1) ${Math.min(
                    i * 45,
                    360
                )}ms both`;
    });
}

function update() {
    slides.forEach((s, i) => {
        s.classList.toggle(
            'active',
            i === idx
        );
    });

    const q = slides[idx]?.dataset.q;

    if (q !== undefined) {
        showQueen(true);
        applyQueenState(Number(q));
    }
    else {
        showQueen(false);

        currentQ = -1;

        document
            .getElementById('movePath')
            ?.classList.remove('play');
    }

    animateSlide(slides[idx]);
}

function next() {
    if (idx < total - 1) {
        idx++;
        update();
    }
}

function prev() {
    if (idx > 0) {
        idx--;
        update();
    }
}

// Điều hướng bằng phím
window.addEventListener(
    'keydown',
    (e) => {
        const key = e.key;

        if (
            key === 'ArrowRight' ||
            key === 'PageDown' ||
            key === ' ' ||
            key === 'Spacebar'
        ) {
            e.preventDefault();
            next();
        }
        else if (
            key === 'ArrowLeft' ||
            key === 'PageUp'
        ) {
            e.preventDefault();
            prev();
        }
        else if (key === 'Home') {
            e.preventDefault();

            idx = 0;
            update();
        }
        else if (key === 'End') {
            e.preventDefault();

            idx = total - 1;
            update();
        }
        else if (key.toLowerCase() === 'f') {
            e.preventDefault();

            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen?.();
            }
            else {
                document.exitFullscreen?.();
            }
        }
    },
    {
        passive: false
    }
);

sections.forEach((s, i) => {
    if (s.q !== undefined) {
        slides[i].dataset.q = s.q;
    }
});

// 8-Queens animation
setInterval(() => {
    const hero =
        document.querySelectorAll(
            '#hero8 .sq span'
        );

    hero.forEach((q, i) => {
        q.style.transform =
            `translateY(${i % 2 ? -3 : 2}px)`;
    });

    setTimeout(() => {
        hero.forEach((q) => {
            q.style.transform =
                'translateY(0)';
        });
    }, 900);
}, 2400);

update();