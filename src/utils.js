function circleArea(diameter) {
    const radius = diameter / 2;
    const area = Math.PI * radius * radius;
    return area;
}

function pricePSI(pizza) {
    // @param pizza ::= [size, price]
    const ppsi = pizza[1] / circleArea(pizza[0]);
    return ppsi;
}

function comparePizzas(pizzas) {
    // @param pizzas ::= [[size, price], ...]
    pizzas.sort((p1, p2) => pricePSI(p1) > pricePSI(p2));
    return pizzas;
}

module.exports = {
    circleArea,
    pricePSI,
    comparePizzas
}