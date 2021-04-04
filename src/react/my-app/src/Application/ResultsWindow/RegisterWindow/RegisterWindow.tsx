import React from 'react'
import "./RegisterWindow.css"
import "../UpdateWindow/UpdateWindow.css"
import "../PadronInput/PadronInput"
import { PadronInput } from '../PadronInput/PadronInput';

interface RegisterWindowState {
    input: string
}

export class RegisterWindow extends React.Component<{}, RegisterWindowState> {

    constructor(props: any) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            input: ""
        }
    }


    handleInputChange(newInput: string): void {
        this.setState({
            input: newInput
        })
    }

    render(): JSX.Element {

        return (
            <div className="RegisterWindow">
                <ul>
                    <p className="title">Registrate</p>
                    <div
                        className="title">Padron :
                    <PadronInput input={this.state.input} handleChange={this.handleInputChange} />
                    </div>
                    <div className="title">Carrera</div>
                    <button className="updateButton"> Enviar </button>
                </ul>
            </div>
        );
    }
}
