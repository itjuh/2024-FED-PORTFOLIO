export function Tap({ txt }) {
    if (Array.isArray(txt)) {
        return txt.map((v, i) => 
            i==0
            ?<li className='on' key={i}>{v}</li>
            :<li key={i}>{v}</li>
        );
    }
}
