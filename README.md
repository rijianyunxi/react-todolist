# 用react写个todolist

## 前言 

学了这么久的react 对于redux还是迷迷糊糊的，于是就写下todolist来熟练redux

## 记录

* 创建reducer,定义初始数据，导出

```
const defaultState = {
    inputValue:'',
    list:[]
}
export default (state=defaultState,action)=>{
    return state;
}
```
* 创建store,引入reducer

```
import { createStore } from 'redux'import { createStore } from 'redux'
import reducer from './reducer'
export default createStore(reducer);
```
