import isapple from "../helper/isapple.js";
describe('isapple', () => {
    it('comprobar que la función devuelva un resultado de tipo booelan', () => {
        const result = isapple('manzana');
        expect(typeof result).toBe('boolean')
    })

    it('comprobar que si entra la string manzana devuelve true', () => {
        const result = isapple('manzana');
        expect(result).toBe(true)
    })

    it('comprobar que si entra una string que no sea manzana devuelve false', () => {
        const result = isapple('mango');
        expect(result).toBe(false)
    })
})