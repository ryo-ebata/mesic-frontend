import React,{createContext, useReducer} from 'react'
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// initialStateの初期化
const initialState ={
    searchData: [],
    selected: {}
}

// reducerによるデータ管理
const reducer = (state, action)=> {

    switch(action.type) {
        case 'SET_DATA':
            return {...state, searchData: action.payload.searchData}
        case 'SET_SELECTED':
            return {...state,selected: action.payload.selected}
        default:
            return state
    }
}

// globalStateを各コンポーネントで使用できるようにする。
export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
})

//コンポーネントとして登録し、Providerでラップしデータを渡す。
//childernを受けているので、<Store.Provider>で全体を包むことで親要素を全て取得することができる。
export const StoreProvider = ({children}: Props) => {
    const [globalState,setGlobalState] = useReducer(reducer,initialState)

    return (
        <Store.Provider value={{globalState,setGlobalState}}>{children}</Store.Provider>
    )
}

export default StoreProvider
