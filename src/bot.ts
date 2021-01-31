import { Command } from './command';

export class Bot {

    private commandList: Command[];

    constructor() {
        this.commandList = [];
        this.initializeCommands();
    }

    private initializeCommands() {
        this.commandList.push(new Command("Brinda información de los comandos disponibles.", "ayuda"));
        this.commandList.push(new Command("Desconecta al bot como si te piden que actives la cámara", "tomatela"));
        this.commandList.push(new Command("Brinda una lista de materias que se pueden cursar, en función de los códigos de materias aprobados dados", "disponibles"));
        this.commandList.push(new Command("Muestra que materias uno necesita tener aprobado para cursar una en particular", "restantes"));
        this.commandList.push(new Command("Responde con la cantidad de créditos (robados) conseguidos", "creds"));
        this.commandList.push(new Command("Guarda en el sistema las materias aprobadas", "aprobe"));
        this.commandList.push(new Command("Quita materias aprobadas del sistema", "recurse"));
        this.commandList.push(new Command("Muestra la lista de materias aprobadas", "siu"));
    }

    public addCommand(command: Command): void {
        this.commandList.push(command);
    }

    public getHelp(): string {
        var help: string = "";

        for (var i = 0; i < this.commandList.length; i++) {
            help += this.commandList[i].getDescription();
        }

        return help;
    }

}