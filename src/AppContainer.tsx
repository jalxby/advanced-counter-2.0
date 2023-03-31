import {connect} from "react-redux";
import {App} from "./App";
import {StateType} from "./redux/redux-state";


type MapStatePropsType = {
    isToggled: boolean
}

export type AppPropsType = MapStatePropsType
const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        isToggled: state.counter.isToggled
    }
}

export const AppContainer = connect(mapStateToProps)(App)
//useSelector
//useDispatch