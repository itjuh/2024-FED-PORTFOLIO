export function Tap({ txt, part }) {
    // txt - 전체 탭배열 part - 현재 탭
    if (Array.isArray(txt)) {
        return txt.map((v, i) => (
            <li key={i} className={part == v ? "on" : ""}>
                <a href="#">{v}</a>
            </li>
        ));
    }
}
