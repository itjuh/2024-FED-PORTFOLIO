import Main from "./Main";
import TopArea from "./TopArea";

export function Layout(){
    return(
        <div className="frame-box">
            <TopArea />
            <Main />
         </div>
    );
}