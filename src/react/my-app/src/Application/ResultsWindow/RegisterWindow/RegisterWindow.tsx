import React from 'react'
import "./RegisterWindow.css"
import "../UpdateWindow/UpdateWindow.css"
import "../PadronInput/PadronInput"
import { PadronInput } from '../PadronInput/PadronInput';
import CarrerCheckbox from "./CarrerCheckbox/CarrerCheckbox"
import ApiHandler from '../../API/ApiHandler';

interface RegisterWindowState {
    input: string,
    carrers: string[]
}

interface RegisterWindowProps {
    handleUpdateClick: any
}

export class RegisterWindow extends React.Component<RegisterWindowProps, RegisterWindowState> {

    constructor(props: any) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            input: "",
            carrers: []
        }
    }


    handleClick(carrer: string, checkbox: CarrerCheckbox): void {
        let studying: string[] = this.state.carrers;

        if (!studying.includes(carrer)) {
            studying.push(carrer);

        } else {
            studying.splice(studying.indexOf(carrer), 1);
        }
        checkbox.changeStudyingState();
        this.setState({
            carrers: studying,
        })

    }

    handleInputChange(newInput: string): void {
        if (!isNaN(Number(newInput))) {
            this.setState({
                input: newInput
            })
        }

    }

    handleUpdateClick() {
        const studentData: object = {
            padron: this.state.input,
            studying: this.state.carrers
        }
        console.log("estoy antes");
        if (new ApiHandler().registerData(studentData)) {
            console.log("estoy adentro");
        };
        console.log("estoy despues");
        this.props.handleUpdateClick();
    }

    render(): JSX.Element {

        let carrersCodes: string[] = ["Sistemas", "Agrimensura", "Alimentos", "Civil", "Electrica",
            "Electronica", "Industrial", "Informatica", "Mecanica", "Naval", "Petroleo", "Quimica"];

        const CarrerCheckboxes: JSX.Element[] = carrersCodes.map((s: string) => {
            return (
                <CarrerCheckbox key={s}
                    carrer={s}
                    handleClick={this.handleClick} />
            );
        })

        let carrerCheckboxesList1: any[] = [];
        let carrerCheckboxesList2: any[] = [];
        let carrerCheckboxesList3: any[] = [];
        let listToAdd: number = 1;

        while (!(CarrerCheckboxes.length === 0)) {

            switch (listToAdd) {
                case 1:
                    carrerCheckboxesList1.push(CarrerCheckboxes.shift());
                    listToAdd += 1;
                    break;
                case 2:
                    carrerCheckboxesList2.push(CarrerCheckboxes.shift());
                    listToAdd += 1;
                    break;
                case 3:
                    carrerCheckboxesList3.push(CarrerCheckboxes.shift());
                    listToAdd = 1;
                    break;
            }
        }

        return (
            <div className="RegisterWindow">
                <ul>
                    <p className="title">Registrate</p>
                    <div
                        className="title">Padron :
                    <PadronInput input={this.state.input} handleChange={this.handleInputChange} />
                    </div>
                    <div className="title">Carreras
                    <div>
                            <ul className="subjectCheckboxList">{carrerCheckboxesList1}</ul>
                        </div>
                        <div>
                            <ul className="subjectCheckboxList">{carrerCheckboxesList2}</ul>
                        </div>
                        <div>
                            <ul className="subjectCheckboxList">{carrerCheckboxesList3}</ul>
                        </div>
                    </div>
                    <button className="updateButton" onClick={() => { this.handleUpdateClick() }}>ENVIAR</button>
                </ul>
            </div>
        );
    }
}
