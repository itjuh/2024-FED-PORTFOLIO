import { useLayoutEffect } from "react"

export function NotFind(){
    useLayoutEffect(()=>{
        setTimeout(()=>{
            window.history.back();
        },3000);
    },[]);
    return <>
    404 ERROR 발생으로 인하여 이전페이지로 돌아갑니다.
    </>
}