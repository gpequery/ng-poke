import {Attack, Pokemon} from './classes';

// function randomInt(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function getRandomAttack(attacks: Array<Attack>): Attack {
//     return attacks[randomInt(0, attacks.length)];
// }

let attacks: Array<Attack> = [
    new Attack('Poursuite', 7, 25),
    new Attack('Switch', 6, 24),
    new Attack('Coup D\'Main', 5, 23),
    new Attack('Reflet Magik', 4, 22),
    new Attack('Prévention', 3, 20),
    new Attack('Ruse', 2, 19),
    new Attack('Coup Bas', 1, 16),
    new Attack('Déplacement', 0, 13),
    new Attack('Corps Perdu', -1, 10),
    new Attack('Aucune', -2, 8),
    new Attack('Mitra-Poing', -3, 6),
    new Attack('Avalanche', -4, 4),
    new Attack('Riposte', -5, 2),
    new Attack('Cyclone', -6, 1),
    new Attack('Distorsion', -7, 0)
];

/* CHAQUE POKEMON PEUX AVOIR SES PROPRES ATTAQUES */
let gregPokemon: Pokemon = new Pokemon('Greg', 10, 5, attacks);
let juanPokemon: Pokemon = new Pokemon('Juan', 20, 5, attacks);

/* ROUND !! */
while(gregPokemon.life >=0 && juanPokemon.life >=0) {
    let gregAttack = gregPokemon.getRandomAttack();
    let juanAttack = juanPokemon.getRandomAttack();

    if (gregPokemon.isFirstToAttack(gregAttack, juanAttack, juanPokemon)) {
        if (gregPokemon.attack(juanPokemon, gregAttack)) {
            console.log(gregPokemon.name + ' Win !');
        }

        if (juanPokemon.life >=0 && juanPokemon.attack(gregPokemon, juanAttack)) {
            console.log(juanPokemon.name + ' Win !');
        }
    } else {
        if (juanPokemon.attack(gregPokemon, juanAttack)) {
            console.log(juanPokemon.name + ' Win !');
        }

        if (gregPokemon.life >=0 && gregPokemon.attack(juanPokemon, gregAttack)) {
            console.log(gregPokemon.name + ' Win !');
        }
    }

    if(gregPokemon.life >=0 && juanPokemon.life >=0) {
        console.log(gregPokemon.name + ' : ' + gregPokemon.life + ' | ' + juanPokemon.name + ' : ' + juanPokemon.life)
    }
}

