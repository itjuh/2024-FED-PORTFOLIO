export function Tap({ txt }) {
    if (Array.isArray(txt)) {
        return txt.map((v, i) => 
            i==0
            ?<li className='on' key={i}><a href="#">{v}</a></li>
            :<li key={i}><a href='#'>{v}</a></li>
        );
    }
}
