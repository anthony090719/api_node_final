describe("[APP] esta es la prueba general", () => {
    test("esto deberia retornar",() => {
        const a = 4;
        const b = 4;
        const total = a+b;
        expect(total).toEquals(8);
    });
});