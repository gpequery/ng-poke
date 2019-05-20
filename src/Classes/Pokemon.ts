export class Pokemon{
    private _name:string;
    private _priorityMove: number;

    constructor(name:string, priority:number){
        this._name = name;
        this._priorityMove = priority;
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get priorityMove(): number {
        return this._priorityMove
    }

    set priorityMove(priorityMove: number) {
        this._priorityMove = priorityMove
    }
}
