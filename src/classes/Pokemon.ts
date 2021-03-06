import {Attack} from "./Attack";

export class Pokemon {
    private _name: string;
    private _speed: number;
    private _life: number;
    private _power: number;
    private _attacks: Array<Attack>;

    constructor(name: string, speed: number, power: number, attacks: Array<Attack>) {
        this._name = name;
        this._speed = speed;
        this._power = power;
        this._life = 100;
        this._attacks = attacks;
    }

    get name(): string {
        return this._name
    }

    set name(speed: string) {
        this._name = name
    }

    get speed(): number {
        return this._speed
    }

    set speed(speed: number) {
        this._speed = speed
    }

    get life(): number {
        return this._life
    }

    set life(life: number) {
        this._life = life
    }

    get attacks(): Array<Attack> {
        return this._attacks
    }

    set attacks(attacks: Array<Attack>) {
        this._attacks = attacks
    }

    getRandomAttack(): Attack {
        return this.attacks[randomInt(0, this.attacks.length - 1)];
    }

    attack(otherPokemon: Pokemon, myAttack: Attack): boolean {
        console.log(this.name + ' Attaque ' + myAttack.label);
        otherPokemon.life -= myAttack.power;

        return otherPokemon.life <= 0;
    }

    isFirstToAttack(myAttack: Attack, otherAttack: Attack, otherPokemon: Pokemon): boolean {
        if (myAttack.priority === otherAttack.priority) {
            if (this.speed === otherPokemon.speed) {
                return Math.random() > 0.5;
            } else {
                return this.speed > otherPokemon.speed;
            }
        }

        return myAttack.priority > otherAttack.priority;
    }
}

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
