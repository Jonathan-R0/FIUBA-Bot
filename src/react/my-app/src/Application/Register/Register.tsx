import React, { useState } from 'react';
import { textChangeRangeIsUnchanged } from 'typescript';
import "./Register.css";

import { MouseEventHandler } from 'react';

interface RegisterButtonProps {
    onClick: any
}


export default class Register extends React.Component<RegisterButtonProps> {

    render(): JSX.Element {
        return (
            <div>
                <button className="registerButton" onClick={this.props.onClick}>Registrarse</button>,
            </div>
        );
    }
}



