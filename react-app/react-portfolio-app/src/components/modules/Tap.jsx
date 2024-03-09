export function Tap({ part, chgPart }) {
    // chgPart(탭변경) , part(선택 탭)
    let txt = ["추천메뉴", "메인상품", "포트폴리오"];

    function chgTap(e){
        let allTap = e.target.parentNode.parentNode.querySelectorAll('li');
        let selectedTap = e.target.parentNode;
        allTap.forEach(v=>v.classList.remove('on'));
        selectedTap.classList.add('on');
        chgPart(e.target.innerText);
    }

    if (Array.isArray(txt)) {
        return txt.map((v, i) => (
            <li key={i} className={part == v ? "on" : ""}>
                <button onClick={(e)=>{chgTap(e)}}>{v}</button>
            </li>
        ));
    }
}
