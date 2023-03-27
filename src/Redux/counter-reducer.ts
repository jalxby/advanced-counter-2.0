const INCREMENT = 'INCREMENT'
const SET_COUNT = 'SET-COUNT'
const SET_ERROR = 'SET-ERROR'
const TOGGLE_SETTINGS_WINDOW = 'TOGGLE-SETTINGS-WINDOW'
const CHANGE_SETTINGS_VALUE = 'CHANGE-SETTINGS-VALUE'
const APPLY_SETTINGS = 'APPLY-SETTINGS'

type IncrementActionType =
    IncrementACType
    | SetCountACType
    | SetErrorACType
    | ToggleSettingsACType
    | ChangeSettingsValueACType
    | ApplySettingsACType

type InitStateType = {
    startValue: number
    maxValue: number
    count: number
    error: string
    toggleSettings: boolean
    settingsValue: {
        startValue: number
        maxValue: number
    }
}

const initState = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    error: '',
    toggleSettings: false,
    settingsValue: {
        startValue: 0,
        maxValue: 5
    }
} as InitStateType

export const counterReducer = (state: InitStateType = initState, action: IncrementActionType): InitStateType => {
    switch (action.type) {
        case INCREMENT: {
            return {...state, count: state.count + 1}
        }
        case SET_COUNT: {
            return {...state, count: action.payload.value}
        }
        case SET_ERROR: {
            return {...state, error: action.payload.value}
        }
        case TOGGLE_SETTINGS_WINDOW: {
            return {...state, toggleSettings: !state.toggleSettings}
        }
        case CHANGE_SETTINGS_VALUE: {
            return {
                ...state,
                settingsValue: {
                    ...state.settingsValue,
                    startValue: action.payload.startValue,
                    maxValue: action.payload.maxValue
                },
            }
        }
        case APPLY_SETTINGS: {
            return {...state, startValue: state.settingsValue.startValue, maxValue: state.settingsValue.maxValue}
        }
        default: {
            return state
        }
    }
}

type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => {
    return {
        type: INCREMENT
    } as const
}

type SetCountACType = ReturnType<typeof setCountAC>
export const setCountAC = (value: number) => {
    return {
        type: SET_COUNT,
        payload: {
            value
        }
    } as const
}

type SetErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (value: string) => {
    return {
        type: SET_ERROR,
        payload: {
            value
        }
    } as const
}

type ToggleSettingsACType = ReturnType<typeof toggleSettingsAC>
export const toggleSettingsAC = () => {
    return {
        type: TOGGLE_SETTINGS_WINDOW,
    } as const
}

type ChangeSettingsValueACType = ReturnType<typeof changeSettingsValueAC>
export const changeSettingsValueAC = (startValue: number, maxValue: number) => {
    return {
        type: CHANGE_SETTINGS_VALUE,
        payload: {
            startValue,
            maxValue
        }
    } as const
}

type ApplySettingsACType = ReturnType<typeof applySettingsAC>
export const applySettingsAC = () => {
    return {
        type: APPLY_SETTINGS,
    } as const
}

