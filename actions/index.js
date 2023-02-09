export const ROLL_DAMAGE = 'ROLL_DAMAGE'
export const ROLL_TWENTIES = 'ROLL_TWENTIES'

export const rollDamage = (amount) => {
    return {
        type: ROLL_DAMAGE,
        payload: amount
    }
}

export const rollTwenties = (amount) => {
    return {
        type: ROLL_TWENTIES,
        payload: amount
    }
}