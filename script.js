const elements = [
    // Period 1
    [1,"H","Hydrogen",1.008,"nonmetal",1,1],
    [2,"He","Helium",4.003,"noble",1,18],

    // Period 2
    [3,"Li","Lithium",6.94,"alkali",2,1],
    [4,"Be","Beryllium",9.012,"alkaline",2,2],
    [5,"B","Boron",10.81,"metalloid",2,13],
    [6,"C","Carbon",12.011,"nonmetal",2,14],
    [7,"N","Nitrogen",14.007,"nonmetal",2,15],
    [8,"O","Oxygen",15.999,"nonmetal",2,16],
    [9,"F","Fluorine",18.998,"halogen",2,17],
    [10,"Ne","Neon",20.180,"noble",2,18],

    // Period 3
    [11,"Na","Sodium",22.990,"alkali",3,1],
    [12,"Mg","Magnesium",24.305,"alkaline",3,2],
    [13,"Al","Aluminium",26.982,"post-transition",3,13],
    [14,"Si","Silicon",28.085,"metalloid",3,14],
    [15,"P","Phosphorus",30.974,"nonmetal",3,15],
    [16,"S","Sulfur",32.06,"nonmetal",3,16],
    [17,"Cl","Chlorine",35.45,"halogen",3,17],
    [18,"Ar","Argon",39.948,"noble",3,18],

    // Period 4
    [19,"K","Potassium",39.098,"alkali",4,1],
    [20,"Ca","Calcium",40.078,"alkaline",4,2],
    [21,"Sc","Scandium",44.956,"transition",4,3],
    [22,"Ti","Titanium",47.867,"transition",4,4],
    [23,"V","Vanadium",50.942,"transition",4,5],
    [24,"Cr","Chromium",51.996,"transition",4,6],
    [25,"Mn","Manganese",54.938,"transition",4,7],
    [26,"Fe","Iron",55.845,"transition",4,8],
    [27,"Co","Cobalt",58.933,"transition",4,9],
    [28,"Ni","Nickel",58.693,"transition",4,10],
    [29,"Cu","Copper",63.546,"transition",4,11],
    [30,"Zn","Zinc",65.38,"transition",4,12],
    [31,"Ga","Gallium",69.723,"post-transition",4,13],
    [32,"Ge","Germanium",72.630,"metalloid",4,14],
    [33,"As","Arsenic",74.922,"metalloid",4,15],
    [34,"Se","Selenium",78.971,"nonmetal",4,16],
    [35,"Br","Bromine",79.904,"halogen",4,17],
    [36,"Kr","Krypton",83.798,"noble",4,18],

    // Period 5
    [37,"Rb","Rubidium",85.468,"alkali",5,1],
    [38,"Sr","Strontium",87.62,"alkaline",5,2],
    [39,"Y","Yttrium",88.906,"transition",5,3],
    [40,"Zr","Zirconium",91.224,"transition",5,4],
    [41,"Nb","Niobium",92.906,"transition",5,5],
    [42,"Mo","Molybdenum",95.95,"transition",5,6],
    [43,"Tc","Technetium",98,"transition",5,7],
    [44,"Ru","Ruthenium",101.07,"transition",5,8],
    [45,"Rh","Rhodium",102.91,"transition",5,9],
    [46,"Pd","Palladium",106.42,"transition",5,10],
    [47,"Ag","Silver",107.87,"transition",5,11],
    [48,"Cd","Cadmium",112.41,"transition",5,12],
    [49,"In","Indium",114.82,"post-transition",5,13],
    [50,"Sn","Tin",118.71,"post-transition",5,14],
    [51,"Sb","Antimony",121.76,"metalloid",5,15],
    [52,"Te","Tellurium",127.60,"metalloid",5,16],
    [53,"I","Iodine",126.90,"halogen",5,17],
    [54,"Xe","Xenon",131.29,"noble",5,18],

    // Period 6
    [55,"Cs","Caesium",132.91,"alkali",6,1],
    [56,"Ba","Barium",137.33,"alkaline",6,2],
    [57,"La","Lanthanum",138.91,"lanthanide",6,3],
    [72,"Hf","Hafnium",178.49,"transition",6,4],
    [73,"Ta","Tantalum",180.95,"transition",6,5],
    [74,"W","Tungsten",183.84,"transition",6,6],
    [75,"Re","Rhenium",186.21,"transition",6,7],
    [76,"Os","Osmium",190.23,"transition",6,8],
    [77,"Ir","Iridium",192.22,"transition",6,9],
    [78,"Pt","Platinum",195.08,"transition",6,10],
    [79,"Au","Gold",196.97,"transition",6,11],
    [80,"Hg","Mercury",200.59,"transition",6,12],
    [81,"Tl","Thallium",204.38,"post-transition",6,13],
    [82,"Pb","Lead",207.2,"post-transition",6,14],
    [83,"Bi","Bismuth",208.98,"post-transition",6,15],
    [84,"Po","Polonium",209,"post-transition",6,16],
    [85,"At","Astatine",210,"halogen",6,17],
    [86,"Rn","Radon",222,"noble",6,18],

    // Period 7
    [87,"Fr","Francium",223,"alkali",7,1],
    [88,"Ra","Radium",226,"alkaline",7,2],
    [89,"Ac","Actinium",227,"actinide",7,3],
    [104,"Rf","Rutherfordium",267,"transition",7,4],
    [105,"Db","Dubnium",268,"transition",7,5],
    [106,"Sg","Seaborgium",269,"transition",7,6],
    [107,"Bh","Bohrium",270,"transition",7,7],
    [108,"Hs","Hassium",277,"transition",7,8],
    [109,"Mt","Meitnerium",278,"transition",7,9],
    [110,"Ds","Darmstadtium",281,"transition",7,10],
    [111,"Rg","Roentgenium",282,"transition",7,11],
    [112,"Cn","Copernicium",285,"transition",7,12],
    [113,"Nh","Nihonium",286,"post-transition",7,13],
    [114,"Fl","Flerovium",289,"post-transition",7,14],
    [115,"Mc","Moscovium",290,"post-transition",7,15],
    [116,"Lv","Livermorium",293,"post-transition",7,16],
    [117,"Ts","Tennessine",294,"halogen",7,17],
    [118,"Og","Oganesson",294,"noble",7,18],

    // Lanthanides
    [58,"Ce","Cerium",140.12,"lanthanide",8,4],
    [59,"Pr","Praseodymium",140.91,"lanthanide",8,5],
    [60,"Nd","Neodymium",144.24,"lanthanide",8,6],
    [61,"Pm","Promethium",145,"lanthanide",8,7],
    [62,"Sm","Samarium",150.36,"lanthanide",8,8],
    [63,"Eu","Europium",151.96,"lanthanide",8,9],
    [64,"Gd","Gadolinium",157.25,"lanthanide",8,10],
    [65,"Tb","Terbium",158.93,"lanthanide",8,11],
    [66,"Dy","Dysprosium",162.50,"lanthanide",8,12],
    [67,"Ho","Holmium",164.93,"lanthanide",8,13],
    [68,"Er","Erbium",167.26,"lanthanide",8,14],
    [69,"Tm","Thulium",168.93,"lanthanide",8,15],
    [70,"Yb","Ytterbium",173.05,"lanthanide",8,16],
    [71,"Lu","Lutetium",174.97,"lanthanide",8,17],

    // Actinides
    [90,"Th","Thorium",232.04,"actinide",9,4],
    [91,"Pa","Protactinium",231.04,"actinide",9,5],
    [92,"U","Uranium",238.03,"actinide",9,6],
    [93,"Np","Neptunium",237,"actinide",9,7],
    [94,"Pu","Plutonium",244,"actinide",9,8],
    [95,"Am","Americium",243,"actinide",9,9],
    [96,"Cm","Curium",247,"actinide",9,10],
    [97,"Bk","Berkelium",247,"actinide",9,11],
    [98,"Cf","Californium",251,"actinide",9,12],
    [99,"Es","Einsteinium",252,"actinide",9,13],
    [100,"Fm","Fermium",257,"actinide",9,14],
    [101,"Md","Mendelevium",258,"actinide",9,15],
    [102,"No","Nobelium",259,"actinide",9,16],
    [103,"Lr","Lawrencium",266,"actinide",9,17]
];

const table = document.getElementById("periodic-table");
const infoBox = document.getElementById("info-box");
const search = document.getElementById("search");
const darkMode = document.getElementById("darkMode");

function displayElements(list) {
    table.innerHTML = "";

    list.forEach(element => {
        const [number, symbol, name, mass, category, period, group] = element;

        const box = document.createElement("div");

        box.className = `element ${category}`;
        box.style.gridRow = period;
        box.style.gridColumn = group;

        box.innerHTML = `
            <span class="number">${number}</span>
            <span class="symbol">${symbol}</span>
            <span class="name">${name}</span>
        `;

        box.addEventListener("click", () => {

    const elementFact = facts[symbol];

    const factText = elementFact
        ? elementFact.fact
        : "Interesting information about this element will be added soon.";

    const electronText = elementFact
        ? elementFact.electron
        : "Coming soon";

    infoBox.innerHTML = `
        <h2>${name} (${symbol})</h2>

        <p><strong>Atomic Number:</strong> ${number}</p>

        <p><strong>Atomic Mass:</strong> ${mass}</p>

        <p><strong>Category:</strong> ${category}</p>

        <p><strong>Period:</strong> ${period}</p>

        <p><strong>Group:</strong> ${group}</p>

        <p><strong>Electron Configuration:</strong>
        ${electronText}</p>

        <hr>

        <p><strong>💡 Did you know?</strong></p>

        <p>${factText}</p>
    `;
});
}
const facts = {
    H: {
        fact: "Hydrogen is the lightest element and the most abundant element in the universe.",
        electron: "1s¹"
    },

    He: {
        fact: "Helium is a noble gas and is commonly used in balloons.",
        electron: "1s²"
    },

    C: {
        fact: "Carbon is the basis of many compounds found in living organisms.",
        electron: "1s² 2s² 2p²"
    },

    O: {
        fact: "Oxygen is essential for respiration and makes up about 21% of Earth's atmosphere.",
        electron: "1s² 2s² 2p⁴"
    },

    Na: {
        fact: "Sodium is a highly reactive metal that reacts strongly with water.",
        electron: "[Ne] 3s¹"
    },

    Cl: {
        fact: "Chlorine is a reactive halogen commonly used to disinfect water.",
        electron: "[Ne] 3s² 3p⁵"
    },

    Fe: {
        fact: "Iron is an important metal used extensively in construction and manufacturing.",
        electron: "[Ar] 3d⁶ 4s²"
    },

    Cu: {
        fact: "Copper is an excellent conductor of electricity and is widely used in electrical wiring.",
        electron: "[Ar] 3d¹⁰ 4s¹"
    },

    Ag: {
        fact: "Silver has the highest electrical conductivity of any element.",
        electron: "[Kr] 4d¹⁰ 5s¹"
    },

    Au: {
        fact: "Gold is a highly unreactive metal and has been valued for thousands of years.",
        electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹"
    },

    Hg: {
        fact: "Mercury is a metal that is liquid at room temperature.",
        electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s²"
    },

    U: {
        fact: "Uranium is a naturally occurring radioactive element.",
        electron: "[Rn] 5f³ 6d¹ 7s²"
    }
};
displayElements(elements);


// SEARCH
search.addEventListener("input", function () {
    const value = search.value.toLowerCase().trim();

    const filtered = elements.filter(element => {
        const symbol = element[1].toLowerCase();
        const name = element[2].toLowerCase();
        const number = element[0].toString();

        return (
            name.includes(value) ||
            symbol.includes(value) ||
            number === value
        );
    });

    displayElements(filtered);
});


// DARK MODE
darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.textContent = "☀️ Light Mode";
    } else {
        darkMode.textContent = "🌙 Dark Mode";
    }
});
