import {create} from 'zustand';

const timeStore = create(set => ({
    remainTime: 1000,
    timeEndStatus: false,
    timePause: false,
    decreaseRemainTime: ()=> set(state => ({remainTime: state.remainTime -1})),
    resetTime: () => set({remainTime: 50}),
    timeEnd: () =>set({timeEndStatus: true, remainTime: 20}),
    timeStopGo: () =>set(state => ({timePause : !state.timePause})),
}))

const menuStore = create(set =>({
    category: "추천메뉴",
    orderList: null, //{tit:[...option],}형태
    setCategory: (name)=> set({category: name}),
    pickMenu: (menuName)=> set({orderList: menuName}),
    resetMenu: ()=> set({orderList: null})
}))

const popStore = create(set=>({
    popName: null,
    popStatus: false,
    setPopName: (name) => set({popName: name}),
    resetPopName: ()=>set({popName: null}),
    popChg: ()=>set(state=>({popStatus:!state.popStatus})),
}))
export {timeStore , menuStore, popStore}