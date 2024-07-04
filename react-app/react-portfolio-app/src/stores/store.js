import {create} from 'zustand';

const timeStore = create(set => ({
    remainTime: 20,
    timePause: false,
    decreaseRemainTime: ()=> set(state => ({remainTime: state.remainTime -1})),
    resetTime: () => set({remainTime: 20}),
    timeStopGo: () =>set(state => ({timePause : !state.timePause})),
}))

const menuStore = create(set =>({
    category: "추천메뉴",
    orderList: null, //{tit:[...option],}
    setCategory: (name)=> set({category: name}),
    setOrderList: (value)=> set({orderList: value}),
    resetMenu: ()=> set({orderList: null})
}))

const popStore = create(set=>({
    popName: null,
    popStatus: false,
    setPopName: (name) => set({popName: name}),
    resetPopName: ()=>set({popName: null}),
    popChg: ()=>set(state=>({popStatus:!state.popStatus})),
}))

const orderStore = create(set=>({
    orderStatus: false,
    setOrderStatus: ()=>set({orderStatus: true}),
}))
export {timeStore , menuStore, popStore, orderStore}