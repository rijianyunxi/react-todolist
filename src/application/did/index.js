import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

const Did = (props)=>{
    return(
        <div className="did">
            <h1>已完成：</h1>
            {
                props.didList.map((r,i)=>{
                    return(
                    <li key={i} onClick={ ()=>{props.deleteDidList(i)} }>{ r }</li>
                    )
                })
            }
        </div>
    )
}

const mapState = (state)=>{
    return{
        didList: state.getIn(['did','didList'])
    }
}

const mapDispatch = (dispatch)=>{
    return{
        deleteDidList(i){
            dispatch(actionCreators.deleteDidList(i))
        }
    }
}
export default connect(mapState,mapDispatch)(Did);