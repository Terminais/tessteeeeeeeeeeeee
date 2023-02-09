import React, {useEffect} from 'react';
import {rollTwenties} from '../actions';
import { connect } from 'react-redux';


const ActionRoller = (props) => {

    const handleRoll20 = (amount) => {
        props.rollTwenties(amount)
    }

    useEffect(()=>{
    },[props.actionDice])
    
    return(
        <div>
            <h2 className='rolls'>{props.actionDice}</h2>
            <div>
                <h1 onClick={()=>handleRoll20(2)}>2 Dice</h1>
            </div>
        </div>
    )
}

const mapStateToProps= (state) => {
    return {
        actionDice:state.actionDice
    }
}

export default connect(mapStateToProps,{rollTwenties})(ActionRoller)

