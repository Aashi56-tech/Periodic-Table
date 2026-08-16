# Periodic-Table
const elements = [
    {number: 1, symbol: "H", name: "Hydrogen", category: "nonmetal", row: 1, col: 1},
    {number: 2, symbol: "He", name: "Helium", category: "noble", row: 1, col: 18},

    {number: 3, symbol: "Li", name: "Lithium", category: "alkali", row: 2, col: 1},
    {number: 4, symbol: "Be", name: "Beryllium", category: "alkaline", row: 2, col: 2},
    {number: 5, symbol: "B", name: "Boron", category: "metalloid", row: 2, col: 13},
    {number: 6, symbol: "C", name: "Carbon", category: "nonmetal", row: 2, col: 14},
    {number: 7, symbol: "N", name: "Nitrogen", category: "nonmetal", row: 2, col: 15},
    {number: 8, symbol: "O", name: "Oxygen", category: "nonmetal", row: 2, col: 16},
    {number: 9, symbol: "F", name: "Fluorine", category: "halogen", row: 2, col: 17},
    {number: 10, symbol: "Ne", name: "Neon", category: "noble", row: 2, col: 18},

    {number: 11, symbol: "Na", name: "Sodium", category: "alkali", row: 3, col: 1},
    {number: 12, symbol: "Mg", name: "Magnesium", category: "alkaline", row: 3, col: 2},
    {number: 13, symbol: "Al", name: "Aluminium", category: "post-transition", row: 3, col: 13},
    {number: 14, symbol: "Si", name: "Silicon", category: "metalloid", row: 3, col: 14},
    {number: 15, symbol: "P", name: "Phosphorus", category: "nonmetal", row: 3, col: 15},
    {number: 16, symbol: "S", name: "Sulfur", category: "nonmetal", row: 3, col: 16},
    {number: 17, symbol: "Cl", name: "Chlorine", category: "halogen", row: 3, col: 17},
    {number: 18, symbol: "Ar", name: "Argon", category: "noble", row: 3, col: 18},

    {number: 19, symbol: "K", name: "Potassium", category: "alkali", row: 4, col: 1},
    {number: 20, symbol: "Ca", name: "Calcium", category: "alkaline", row: 4, col: 2},
    {number: 21, symbol: "Sc", name: "Scandium", category: "transition", row: 4, col: 3},
    {number: 22, symbol: "Ti", name: "Titanium", category: "transition", row: 4, col: 4},
    {number: 23, symbol: "V", name: "Vanadium", category: "transition", row: 4, col: 5},
    {number: 24, symbol: "Cr", name: "Chromium", category: "transition", row: 4, col: 6},
    {number: 25, symbol: "Mn", name: "Manganese", category: "transition", row: 4, col: 7},
    {number: 26, symbol: "Fe", name: "Iron", category: "transition", row: 4, col: 8},
    {number: 27, symbol: "Co", name: "Cobalt", category: "transition", row: 4, col: 9},
    {number: 28, symbol: "Ni", name: "Nickel", category: "transition", row: 4, col: 10},
    {number: 29, symbol: "Cu", name: "Copper", category: "transition", row: 4, col: 11},
    {number: 30, symbol: "Zn", name: "Zinc", category: "transition", row: 4, col: 12},
    {number: 31, symbol: "Ga", name: "Gallium", category: "post-transition", row: 4, col: 13},
    {number: 32, symbol: "Ge", name: "Germanium", category: "metalloid", row: 4, col: 14},
    {number: 33, symbol: "As", name: "Arsenic", category: "metalloid", row: 4, col: 15},
    {number: 34, symbol: "Se", name: "Selenium", category: "nonmetal", row: 4, col: 16},
    {number: 35, symbol: "Br", name: "Bromine", category: "halogen", row: 4, col: 17},
    {number: 36, symbol: "Kr", name: "Krypton", category: "noble", row: 4, col: 18}
];

const table = document.getElementById("periodic-table");

elements.forEach(element => {

    const box = document.createElement("div");

    box.className = `element ${element.category}`;

    box.style.gridRow = element.row;
    box.style.gridColumn = element.col;

    box.innerHTML = `
        <span class="number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${element.name}</span>
    `;

    box.addEventListener("click", () => {
        document.getElementById("info-box").innerHTML = `
            <h2>${element.name} (${element.symbol})</h2>
            <p><strong>Atomic Number:</strong> ${element.number}</p>
            <p><strong>Category:</strong> ${element.category}</p>
            <p><strong>Period:</strong> ${element.row}</p>
            <p><strong>Group:</strong> ${element.col}</p>
        `;
    });

    table.appendChild(box);
});
