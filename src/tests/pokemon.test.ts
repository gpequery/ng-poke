import {Attack, Pokemon} from "../classes";

describe('matching cities to foods', () => {
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
    let pokemon1 = new Pokemon('poke1', 20, 5, attacks);
    let pokemon2 = new Pokemon('poke2', 5, 6, attacks);

    test('isFirstToAttack YES !', () => {
        expect(pokemon1.isFirstToAttack(attacks[0], attacks[1], pokemon2)).toBe(true);
    });

    test('isFirstToAttackss NO !', () => {
        expect(pokemon1.isFirstToAttack(attacks[6], attacks[2], pokemon2)).toBe(false);
    });

    test('isFirstToAttackss NO !', () => {
        expect(pokemon1.isFirstToAttack(attacks[8], attacks[2], pokemon2)).toBe(false);
    });

    test('isFirstToAttackss YES !', () => {
        expect(pokemon1.isFirstToAttack(attacks[8], attacks[10], pokemon2)).toBe(true);
    });

    test('isFirstToAttackss YES !', () => {
        expect(pokemon1.isFirstToAttack(attacks[8], attacks[12], pokemon2)).toBe(true);
    });

    test('isFirstToAttackss with the same priority !', () => {
        expect(pokemon2.isFirstToAttack(attacks[10], attacks[10], pokemon1)).toBe(false);
    });

    test('isFirstToAttack YES !', () => {
        expect(pokemon2.isFirstToAttack(attacks[0], attacks[1], pokemon1)).toBe(true);
    });

    test('isFirstToAttackss NO !', () => {
        expect(pokemon2.isFirstToAttack(attacks[6], attacks[2], pokemon1)).toBe(false);
    });

    test('isFirstToAttackss NO !', () => {
        expect(pokemon2.isFirstToAttack(attacks[8], attacks[2], pokemon1)).toBe(false);
    });

    test('isFirstToAttackss YES !', () => {
        expect(pokemon2.isFirstToAttack(attacks[8], attacks[10], pokemon1)).toBe(true);
    });

    test('isFirstToAttackss YES !', () => {
        expect(pokemon2.isFirstToAttack(attacks[8], attacks[12], pokemon1)).toBe(true);
    });


    test('Pokemon 2 Attack !', () => {
        let attack = pokemon2.getRandomAttack();

        let isEnd = pokemon2.attack(pokemon1, attack);

        expect(pokemon2.life).toBe(100);
        expect(pokemon1.life).toBe(100 - attack.power);
        expect(isEnd).toBe(false);
    });
});

