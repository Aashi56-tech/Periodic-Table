const elements = [
    // Period 1
    {n:1,s:"H",name:"Hydrogen",mass:1.008,c:"nonmetal",p:1,g:1},
    {n:2,s:"He",name:"Helium",mass:4.003,c:"noble",p:1,g:18},

    // Period 2
    {n:3,s:"Li",name:"Lithium",mass:6.94,c:"alkali",p:2,g:1},
    {n:4,s:"Be",name:"Beryllium",mass:9.012,c:"alkaline",p:2,g:2},
    {n:5,s:"B",name:"Boron",mass:10.81,c:"metalloid",p:2,g:13},
    {n:6,s:"C",name:"Carbon",mass:12.011,c:"nonmetal",p:2,g:14},
    {n:7,s:"N",name:"Nitrogen",mass:14.007,c:"nonmetal",p:2,g:15},
    {n:8,s:"O",name:"Oxygen",mass:15.999,c:"nonmetal",p:2,g:16},
    {n:9,s:"F",name:"Fluorine",mass:18.998,c:"halogen",p:2,g:17},
    {n:10,s:"Ne",name:"Neon",mass:20.180,c:"noble",p:2,g:18},

    // Period 3
    {n:11,s:"Na",name:"Sodium",mass:22.990,c:"alkali",p:3,g:1},
    {n:12,s:"Mg",name:"Magnesium",mass:24.305,c:"alkaline",p:3,g:2},
    {n:13,s:"Al",name:"Aluminium",mass:26.982,c:"post-transition",p:3,g:13},
    {n:14,s:"Si",name:"Silicon",mass:28.085,c:"metalloid",p:3,g:14},
    {n:15,s:"P",name:"Phosphorus",mass:30.974,c:"nonmetal",p:3,g:15},
    {n:16,s:"S",name:"Sulfur",mass:32.06,c:"nonmetal",p:3,g:16},
    {n:17,s:"Cl",name:"Chlorine",mass:35.45,c:"halogen",p:3,g:17},
    {n:18,s:"Ar",name:"Argon",mass:39.948,c:"noble",p:3,g:18},

    // Period 4
    {n:19,s:"K",name:"Potassium",mass:39.098,c:"alkali",p:4,g:1},
    {n:20,s:"Ca",name:"Calcium",mass:40.078,c:"alkaline",p:4,g:2},
    {n:21,s:"Sc",name:"Scandium",mass:44.956,c:"transition",p:4,g:3},
    {n:22,s:"Ti",name:"Titanium",mass:47.867,c:"transition",p:4,g:4},
    {n:23,s:"V",name:"Vanadium",mass:50.942,c:"transition",p:4,g:5},
    {n:24,s:"Cr",name:"Chromium",mass:51.996,c:"transition",p:4,g:6},
    {n:25,s:"Mn",name:"Manganese",mass:54.938,c:"transition",p:4,g:7},
    {n:26,s:"Fe",name:"Iron",mass:55.845,c:"transition",p:4,g:8},
    {n:27,s:"Co",name:"Cobalt",mass:58.933,c:"transition",p:4,g:9},
    {n:28,s:"Ni",name:"Nickel",mass:58.693,c:"transition",p:4,g:10},
    {n:29,s:"Cu",name:"Copper",mass:63.546,c:"transition",p:4,g:11},
    {n:30,s:"Zn",name:"Zinc",mass:65.38,c:"transition",p:4,g:12},
    {n:31,s:"Ga",name:"Gallium",mass:69.723,c:"post-transition",p:4,g:13},
    {n:32,s:"Ge",name:"Germanium",mass:72.630,c:"metalloid",p:4,g:14},
    {n:33,s:"As",name:"Arsenic",mass:74.922,c:"metalloid",p:4,g:15},
    {n:34,s:"Se",name:"Selenium",mass:78.971,c:"nonmetal",p:4,g:16},
    {n:35,s:"Br",name:"Bromine",mass:79.904,c:"halogen",p:4,g:17},
    {n:36,s:"Kr",name:"Krypton",mass:83.798,c:"noble",p:4,g:18},

    // Period 5
    {n:37,s:"Rb",name:"Rubidium",mass:85.468,c:"alkali",p:5,g:1},
    {n:38,s:"Sr",name:"Strontium",mass:87.62,c:"alkaline",p:5,g:2},
    {n:39,s:"Y",name:"Yttrium",mass:88.906,c:"transition",p:5,g:3},
    {n:40,s:"Zr",name:"Zirconium",mass:91.224,c:"transition",p:5,g:4},
    {n:41,s:"Nb",name:"Niobium",mass:92.906,c:"transition",p:5,g:5},
    {n:42,s:"Mo",name:"Molybdenum",mass:95.95,c:"transition",p:5,g:6},
    {n:43,s:"Tc",name:"Technetium",mass:98,c:"transition",p:5,g:7},
    {n:44,s:"Ru",name:"Ruthenium",mass:101.07,c:"transition",p:5,g:8},
    {n:45,s:"Rh",name:"Rhodium",mass:102.91,c:"transition",p:5,g:9},
    {n:46,s:"Pd",name:"Palladium",mass:106.42,c:"transition",p:5,g:10},
    {n:47,s:"Ag",name:"Silver",mass:107.87,c:"transition",p:5,g:11},
    {n:48,s:"Cd",name:"Cadmium",mass:112.41,c:"transition",p:5,g:12},
    {n:49,s:"In",name:"Indium",mass:114.82,c:"post-transition",p:5,g:13},
    {n:50,s:"Sn",name:"Tin",mass:118.71,c:"post-transition",p:5,g:14},
    {n:51,s:"Sb",name:"Antimony",mass:121.76,c:"metalloid",p:5,g:15},
    {n:52,s:"Te",name:"Tellurium",mass:127.60,c:"metalloid",p:5,g:16},
    {n:53,s:"I",name:"Iodine",mass:126.90,c:"halogen",p:5,g:17},
    {n:54,s:"Xe",name:"Xenon",mass:131.29,c:"noble",p:5,g:18},

    // Period 6
    {n:55,s:"Cs",name:"Caesium",mass:132.91,c:"alkali",p:6,g:1},
    {n:56,s:"Ba",name:"Barium",mass:137.33,c:"alkaline",p:6,g:2},
    {n:57,s:"La",name:"Lanthanum",mass:138.91,c:"lanthanide",p:6,g:3},
    {n:72,s:"Hf",name:"Hafnium",mass:178.49,c:"transition",p:6,g:4},
    {n:73,s:"Ta",name:"Tantalum",mass:180.95,c:"transition",p:6,g:5},
    {n:74,s:"W",name:"Tungsten",mass:183.84,c:"transition",p:6,g:6},
    {n:75,s:"Re",name:"Rhenium",mass:186.21,c:"transition",p:6,g:7},
    {n:76,s:"Os",name:"Osmium",mass:190.23,c:"transition",p:6,g:8},
    {n:77,s:"Ir",name:"Iridium",mass:192.22,c:"transition",p:6,g:9},
    {n:78,s:"Pt",name:"Platinum",mass:195.08,c:"transition",p:6,g:10},
    {n:79,s:"Au",name:"Gold",mass:196.97,c:"transition",p:6,g:11},
    {n:80,s:"Hg",name:"Mercury",mass:200.59,c:"transition",p:6,g:12},
    {n:81,s:"Tl",name:"Thallium",mass:204.38,c:"post-transition",p:6,g:13},
    {n:82,s:"Pb",name:"Lead",mass:207.2,c:"post-transition",p:6,g:14},
    {n:83,s:"Bi",name:"Bismuth",mass:208.98,c:"post-transition",p:6,g:15},
    {n:84,s:"Po",name:"Polonium",mass:209,c:"post-transition",p:6,g:16},
    {n:85,s:"At",name:"Astatine",mass:210,c:"halogen",p:6,g:17},
    {n:86,s:"Rn",name:"Radon",mass:222,c:"noble",p:6,g:18},

    // Period 7
    {n:87,s:"Fr",name:"Francium",mass:223,c:"alkali",p:7,g:1},
    {n:88,s:"Ra",name:"Radium",mass:226,c:"alkaline",p:7,g:2},
    {n:89,s:"Ac",name:"Actinium",mass:227,c:"actinide",p:7,g:3},
    {n:104,s:"Rf",name:"Rutherfordium",mass:267,c:"transition",p:7,g:4},
    {n:105,s:"Db",name:"Dubnium",mass:268,c:"transition",p:7,g:5},
    {n:106,s:"Sg",name:"Seaborgium",mass:269,c:"transition",p:7,g:6},
    {n:107,s:"Bh",name:"Bohrium",mass:270,c:"transition",p:7,g:7},
    {n:108,s:"Hs",name:"Hassium",mass:277,c:"transition",p:7,g:8},
    {n:109,s:"Mt",name:"Meitnerium",mass:278,c:"transition",p:7,g:9},
    {n:110,s:"Ds",name:"Darmstadtium",mass:281,c:"transition",p:7,g:10},
    {n:111,s:"Rg",name:"Roentgenium",mass:282,c:"transition",p:7,g:11},
    {n:112,s:"Cn",name:"Copernicium",mass:285,c:"transition",p:7,g:12},
    {n:113,s:"Nh",name:"Nihonium",mass:286,c:"post-transition",p:7,g:13},
    {n:114,s:"Fl",name:"Flerovium",mass:289,c:"post-transition",p:7,g:14},
    {n:115,s:"Mc",name:"Moscovium",mass:290,c:"post-transition",p:7,g:15},
    {n:116,s:"Lv",name:"Livermorium",mass:293,c:"post-transition",p:7,g:16},
    {n:117,s:"Ts",name:"Tennessine",mass:294,c:"halogen",p:7,g:17},
    {n:118,s:"Og",name:"Oganesson",mass:294,c:"noble",p:7,g:18}
];

const table = document.getElementById("periodic-table");
const infoBox = document.getElementById("info-box");
const search = document.getElementById("search");

function displayElements(list) {

    table.innerHTML = "";

    list.forEach(element => {

        const box = document.createElement("div");

        box.className = `element ${element.c}`;

        box.style.gridRow = element.p;
        box.style.gridColumn = element.g;

        box.innerHTML = `
            <span class="number">${element.n}</span>
            <span class="symbol">${element.s}</span>
            <span class="name">${element.name}</span>
        `;

        box.addEventListener("click", () => {

            infoBox.innerHTML = `
                <h2>${element.name} (${element.s})</h2>

                <p><strong>Atomic Number:</strong> ${element.n}</p>

                <p><strong>Atomic Mass:</strong> ${element.mass}</p>

                <p><strong>Category:</strong> ${element.c}</p>

                <p><strong>Period:</strong> ${element.p}</p>

                <p><strong>Group:</strong> ${element.g}</p>
            `;

        });

        table.appendChild(box);
    });
}

displayElements(elements);


/* Search */

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = elements.filter(element =>
        element.name.toLowerCase().includes(value) ||
        element.s.toLowerCase().includes(value) ||
        element.n.toString() === value
    );

    displayElements(filtered);
});


/* Dark Mode */

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.textContent = "☀️ Light Mode";
    } else {
        darkMode.textContent = "🌙 Dark Mode";
    }

});
