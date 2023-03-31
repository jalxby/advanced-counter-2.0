import React from 'react';
import s from "../../App.module.css";
import {SettingsValues} from "./SettingsValues";
import {Button} from "../Button/Button";
import {SettingsPropsType} from "./SettingsContainer";

export const Settings = (props: SettingsPropsType) => {
    const applySettingsHandler = () => props.applySettingsCallback(props.currentStartValue)
    return (
        <div className={s.stand}>
            <div className={s.desktop}>
                <SettingsValues getSettings={props.getSettingsFromInput} settingsValue={props.settingsValue}
                                error={props.error}/>
            </div>
            <div className={s.buttons}>
                <Button title={'apply'} callback={applySettingsHandler}
                        disabled={props.isApplyDisabled}/>
            </div>
        </div>
    );
};

