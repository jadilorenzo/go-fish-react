import { CardModel as Card } from '../models'
/* globals describe it expect */

describe('Card Model', () => {
    it('only allows approprate values', () => {
        expect(new Card('foo', 'baz').rank()).toBe(undefined)
    })

    it('compares cards', () => {
        const card1 = new Card('D', 'A')
        const card2 = new Card('D', 'A')
        expect(card1.equals(card2)).toBeTruthy()
    })
})
