import divide from '../helper/divide.js'
describe('divide', () => {
    it('comprobar que el tipo que devuelve es un número', () => {
        const result = divide(4,2);
        expect(typeof result).toBe('number')
    })

    it('comprobar que si entra una string te devuelve null', () => {
        const result = divide('hola', 7);
        expect(result).toBe(null)
    })

    it('comprobar que realiza la división de 10 y 2', () => {
        const result = divide(10,2);
        expect(result).toBe(5)
    })

    it('comprobar que realiza la división de 10 y 4', () => {
        const result = divide(10, 4);
        expect(result).toBe(2.5)
    })

    it('comprobar que la división de cualquier número y 0 te devuelve null', () => {
        const result= divide(90, 0);
        expect(result).toBe(null)
    })
})