import {Settings} from "./Settings";
import {StateType} from "../../redux/redux-state";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    applySettingsAC,
    changeSettingsValueAC,
    setCountAC,
    setErrorAC,
    toggleSettingsAC
} from "../../redux/counter-reducer";

type MapStatePropsType = {
    currentStartValue: number
    settingsValue: {
        startValue: number
        maxValue: number
    }
    isApplyDisabled: boolean
    error: string
}
type MapDispatchPropsType = {
    getSettingsFromInput: (startValue: number, maxValue: number) => void
    applySettingsCallback: (currentStartValue: number) => void
}

export type SettingsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        currentStartValue: state.counter.settingsValue.startValue,
        settingsValue: state.counter.settingsValue,
        isApplyDisabled: !!state.counter.error,
        error: state.counter.error
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        getSettingsFromInput: (startValue: number, maxValue: number) => {
            dispatch(changeSettingsValueAC(startValue, maxValue))
            if (startValue < 0 || maxValue < 0) {
                dispatch(setErrorAC('values can\'t be negative!'))
            } else if (startValue === maxValue) {
                dispatch(setErrorAC('values can\'t be equal!'))
            } else if (startValue > maxValue) {
                dispatch(setErrorAC('startValue can\'t be more than maxValue'))
            } else {
                dispatch(setErrorAC(''))
            }
        },
        applySettingsCallback: (currentStartValue: number) => {
            dispatch(applySettingsAC())
            dispatch(setErrorAC(''))
            dispatch(setCountAC(currentStartValue))
            dispatch(toggleSettingsAC())
        }
    }
}


export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)