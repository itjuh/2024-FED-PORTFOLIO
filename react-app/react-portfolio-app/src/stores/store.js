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
    pickedMenu: null,
    pickMenu: (menuName)=> set({pickedMenu: menuName}),
    resetMenu: ()=> set({pickMenu: null})
}))

export {timeStore , menuStore}