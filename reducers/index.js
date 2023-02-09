import { ROLL_DAMAGE, ROLL_TWENTIES } from "../actions"
const initialState ={
    damageDice:['Roll'],
    actionDice:['Roll']
}

const roll = (amount) => {
    const rolls=[]
    for (let i = 0; i < amount; i++){
        rolls.push(Math.floor(Math.random() * 20).toString() + ' ')

    }
    return rolls;
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ROLL_DAMAGE:
            return state
        case ROLL_TWENTIES:
            return {
                ...state,
                actionDice: roll(action.payload)
            }
        default:
            return state
    }
}

export default reducer