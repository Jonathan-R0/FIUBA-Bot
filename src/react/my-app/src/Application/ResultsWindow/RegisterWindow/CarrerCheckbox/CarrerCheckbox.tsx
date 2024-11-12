import React from 'react'
import { MouseEventHandler } from 'react';
import "./CarrerCheckbox.css"

interface CarrerCheckboxProps {
    carrer: string,

    handleClick: Function
}

export default class CarrerCheckbox extends React.Component<CarrerCheckboxProps, {}> {

    studying: boolean = false

    changeStudyingState() {
        this.studying = !this.studying;
    }
    render(): JSX.Element {
        return (
            <li className="CarrerCheckboxContainer">
                <text>{this.props.carrer}</text>
                <label className="Container">
                    <input
                        type="checkbox"
                        checked={this.studying}
                        onChange={() => { this.props.handleClick(this.props.carrer, this) }}>
                    </input>
                    <span className="checkmark"></span>
                </label>
            </li>
        );
    }
}