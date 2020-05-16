import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

const Header = (props)=>{
    return(
        <div>
            <input onChange={ props.handleInputChange } /><button>提交</button>
        </div>
    )
}

const mapState = (state)=>{
    return{
        inputValue: state.getIn(['header','inputValue'])
    }
}

const mapDispatch = (dispatch)=>{
    return{
        handleInputChange(e){
            dispatch(actionCreators.changeInputValue(e.target.value));
        }
    }
}
export default connect(mapState,mapDispatch)(Header);