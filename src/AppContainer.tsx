import {connect} from "react-redux";
import {App} from "./App";
import {StateType} from "./Redux/redux-state";
import {
    applySettingsAC,
    changeSettingsValueAC,
    CounterType,
    incrementAC,
    setCountAC,
    setErrorAC,
    toggleSettingsAC
} from "./Redux/counter-reducer";
import {Dispatch} from "redux";

type MapStatePropsType = CounterType
type MapDispatchPropsType = {
    increment: () => void
    setCount: (startValue: number) => void
    changeSettingsValue: (startValue: number, maxValue: number) => void
    setError: (error: string) => void
    applySettings: () => void
    toggleSettings: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        count: state.counter.count,
        error: state.counter.error,
        isToggled: state.counter.isToggled,
        settingsValue: state.counter.settingsValue
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
        changeSettingsValue: (startValue: number, maxValue: number) => {
            dispatch(changeSettingsValueAC(startValue, maxValue))
        },
        setError: (error: string) => {
            dispatch(setErrorAC(error))
        },
        applySettings: () => {
            dispatch(applySettingsAC())
        },
        toggleSettings: () => {
            dispatch(toggleSettingsAC())
        }
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)