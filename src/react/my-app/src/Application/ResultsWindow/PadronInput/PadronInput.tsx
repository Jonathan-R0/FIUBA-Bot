import React, { ChangeEvent } from 'react'
import "../RegisterWindow/RegisterWindow.css"

interface PadronInputProps {
    input: string
    handleChange: Function
}

export class PadronInput extends React.Component<PadronInputProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <input className="PadronInput" placeholder="padron..." value={this.props.input} onChange={(e) => { this.props.handleChange(e.target.value) }}></input>
        );
    }
}