export const ACTIVATE = 'ACTIVATE'
export const UNACTIVATE = 'UNACTIVATE'

export const activate = () => {
    return {
        type: ACTIVATE,
    }
}

export const unActivate = () => {
    return {
        type: UNACTIVATE,
    }
}
