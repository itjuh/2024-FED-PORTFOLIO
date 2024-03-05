import { MdFace3 } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { LiaKeyboard } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import '../data/itemData.json';

export function Items() {
    let dataPath = 'https://github.com/itjuh/2024-FED-PORTFOLIO/blob/main/react-app/react-portfolio-app/src/components/data/itemData.json';
    async function dataLoad(dataPath){
        let waitFetch = await fetch(dataPath);
        let waitLoad = await waitFetch.json();
        console.log(waitLoad);
    }
    dataLoad(dataPath);
    
    let txt = ["안주현소개", "온고롱케이크", "레오폴드키보드", "더진한베이스"];
    return txt.map((v, i) => <li key={i}>{v}</li>);
}
