import { BotModel as Bot } from '../models'
/* globals describe it expect */

describe('Bot Model', () => {
    it('generates name', () => {
        const p = new Bot()
        expect(p.name).toBe('Billy Bob')
    })
})
