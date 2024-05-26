import {create} from 'zustand';

const timeStore = create(set => ({
    remainTime: 50,
    timeEndStatus: false,
    timePause: false,
    decreaseRemainTime: ()=> set(state => ({remainTime: state.remainTime -1})),
    resetTime: () => set({remainTime: 50}),
    timeEnd: () =>set({timeEndStatus: true, remainTime: 20}),
    timeStopGo: () =>set(state => ({timePause : !state.timePause})),
}))

const menuStore = create(set =>({
    category: "추천메뉴",
    pickedMenu: null, //[tit, link]형태
    pickCategory: (name)=> set({category: name}),
    pickMenu: (menuName)=> set({pickedMenu: menuName}),
    resetMenu: ()=> set({pickedMenu: null})
}))

export {timeStore , menuStore}