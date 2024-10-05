const helloWorld = require('./app');

test('debería retornar "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});