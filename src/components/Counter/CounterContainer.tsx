import {Counter} from "./Counter";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-state";
import {Dispatch} from "redux";
import {incrementAC, setCountAC, toggleSettingsAC} from "../../redux/counter-reducer";


type MapStatePropsType = {
    startValue: number
    maxValue: number
    count: number
    error: string
    isToggled: boolean
    settingsValue: {
        startValue: number
        maxValue: number
    }
    isDisabledInc: boolean
    isDisabledReset: boolean
    isIncDisabled: boolean
    isResDisabled: boolean
    counterForm: number | string
}
type MapDispatchPropsType = {
    increment: () => void
    setCount: (startValue: number) => void
    toggleSettings: () => void
}
export type CounterPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    const isDisabledInc = state.counter.count === state.counter.maxValue
    const isDisabledReset = state.counter.count === state.counter.startValue
    const error = state.counter.error
    const count = state.counter.count

    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        isToggled: state.counter.isToggled,
        settingsValue: state.counter.settingsValue,
        count: count,
        error: error,
        isDisabledInc: isDisabledInc,
        isDisabledReset: isDisabledReset,
        isIncDisabled: error ? true : isDisabledInc,
        isResDisabled: error ? true : isDisabledReset,
        counterForm: error ? error : count
    }

}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        increment: () => {
            dispatch(incrementAC())
        },
        setCount: (startValue: number) => {
            dispatch(setCountAC(startValue))
        },
        toggleSettings: () => {
            dispatch(toggleSettingsAC())
        }
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)