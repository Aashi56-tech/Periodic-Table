// ============================================================
// INTERACTIVE PERIODIC TABLE - COMPLETE JAVASCRIPT
// ============================================================


// ============================================================
// ELEMENT DATA
// ============================================================

const elements = [

    [1,"H","Hydrogen",1.008,"nonmetal",1,1],
    [2,"He","Helium",4.003,"noble",1,18],

    [3,"Li","Lithium",6.94,"alkali",2,1],
    [4,"Be","Beryllium",9.012,"alkaline",2,2],
    [5,"B","Boron",10.81,"metalloid",2,13],
    [6,"C","Carbon",12.011,"nonmetal",2,14],
    [7,"N","Nitrogen",14.007,"nonmetal",2,15],
    [8,"O","Oxygen",15.999,"nonmetal",2,16],
    [9,"F","Fluorine",18.998,"halogen",2,17],
    [10,"Ne","Neon",20.180,"noble",2,18],

    [11,"Na","Sodium",22.990,"alkali",3,1],
    [12,"Mg","Magnesium",24.305,"alkaline",3,2],
    [13,"Al","Aluminium",26.982,"post-transition",3,13],
    [14,"Si","Silicon",28.085,"metalloid",3,14],
    [15,"P","Phosphorus",30.974,"nonmetal",3,15],
    [16,"S","Sulfur",32.06,"nonmetal",3,16],
    [17,"Cl","Chlorine",35.45,"halogen",3,17],
    [18,"Ar","Argon",39.948,"noble",3,18],

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
    [32,"Ge","Germanium",72.63,"metalloid",4,14],
    [33,"As","Arsenic",74.922,"metalloid",4,15],
    [34,"Se","Selenium",78.971,"nonmetal",4,16],
    [35,"Br","Bromine",79.904,"halogen",4,17],
    [36,"Kr","Krypton",83.798,"noble",4,18],

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


// ============================================================
// FACTS FOR ELEMENTS
// ============================================================

const facts = {

H:"Hydrogen is the lightest element and the most abundant element in the universe.",
He:"Helium is a very light noble gas and is commonly used in balloons.",

Li:"Lithium is a soft, reactive metal commonly used in rechargeable batteries.",
Be:"Beryllium is a lightweight metal used in aerospace materials.",
B:"Boron is a metalloid used in glass, ceramics and detergents.",
C:"Carbon is the basis of life and forms millions of different compounds.",
N:"Nitrogen makes up about 78% of Earth's atmosphere.",
O:"Oxygen is essential for respiration and makes up about 21% of Earth's atmosphere.",
F:"Fluorine is the most electronegative element.",
Ne:"Neon is a noble gas famous for its use in bright advertising signs.",

Na:"Sodium is a highly reactive alkali metal and reacts strongly with water.",
Mg:"Magnesium is a lightweight metal important in many biological processes.",
Al:"Aluminium is a lightweight metal widely used in aircraft, cans and construction.",
Si:"Silicon is a semiconductor widely used in computer chips.",
P:"Phosphorus is important in DNA, bones and energy transfer in living organisms.",
S:"Sulfur is a yellow nonmetal used in fertilizers and sulfuric acid production.",
Cl:"Chlorine is a reactive halogen commonly used to disinfect water.",
Ar:"Argon is a noble gas used in lighting and welding.",

K:"Potassium is an important element for nerve and muscle function.",
Ca:"Calcium is important for strong bones and teeth.",
Sc:"Scandium is a relatively rare metal used in specialized alloys.",
Ti:"Titanium is strong, lightweight and resistant to corrosion.",
V:"Vanadium is used to strengthen steel and other alloys.",
Cr:"Chromium is responsible for the shiny appearance of chrome-plated surfaces.",
Mn:"Manganese is important in steel production.",
Fe:"Iron is one of the most widely used metals and is essential for hemoglobin.",
Co:"Cobalt is used in batteries and high-strength alloys.",
Ni:"Nickel is corrosion-resistant and is used in stainless steel.",
Cu:"Copper is an excellent conductor of electricity.",
Zn:"Zinc is used to protect iron from corrosion by galvanization.",
Ga:"Gallium can melt in your hand because of its low melting point.",
Ge:"Germanium is a semiconductor used in some electronic and optical devices.",
As:"Arsenic is a metalloid that is toxic in many chemical forms.",
Se:"Selenium is a trace element needed by the human body in small amounts.",
Br:"Bromine is a reddish-brown liquid at room temperature.",
Kr:"Krypton is a noble gas used in some specialized lamps.",

Rb:"Rubidium is a soft, highly reactive alkali metal.",
Sr:"Strontium compounds can produce a bright red color in fireworks.",
Y:"Yttrium is used in some lasers, LEDs and advanced materials.",
Zr:"Zirconium is highly resistant to corrosion.",
Nb:"Niobium is used in strong alloys and superconducting materials.",
Mo:"Molybdenum is important in high-strength steels.",
Tc:"Technetium was the first element to be produced artificially.",
Ru:"Ruthenium is a hard metal used in electronics and catalysts.",
Rh:"Rhodium is a rare metal often used in catalytic converters.",
Pd:"Palladium is a valuable metal used in catalysts and electronics.",
Ag:"Silver has the highest electrical conductivity of any element.",
Cd:"Cadmium is a soft metal historically used in batteries and coatings.",
In:"Indium is a soft metal used in touchscreens and semiconductors.",
Sn:"Tin is used to coat other metals and in solder.",
Sb:"Antimony is a metalloid used in alloys and flame-retardant materials.",
Te:"Tellurium is a metalloid used in solar cells and alloys.",
I:"Iodine is important for the production of thyroid hormones.",
Xe:"Xenon is a noble gas used in specialized lamps.",

Cs:"Caesium is an extremely reactive alkali metal.",
Ba:"Barium compounds are used in medical imaging and other applications.",
La:"Lanthanum is a soft rare-earth metal used in optical glass and batteries.",

Ce:"Cerium is the most abundant rare-earth element.",
Pr:"Praseodymium is used in special glass and powerful magnets.",
Nd:"Neodymium is used to make very strong permanent magnets.",
Pm:"Promethium is a radioactive rare-earth element.",
Sm:"Samarium is used in powerful magnets and some nuclear applications.",
Eu:"Europium is used in phosphors that produce red and blue colors.",
Gd:"Gadolinium is used in some medical imaging contrast agents.",
Tb:"Terbium is used in phosphors and specialized electronic materials.",
Dy:"Dysprosium is important in high-performance permanent magnets.",
Ho:"Holmium has useful magnetic properties.",
Er:"Erbium is used in optical-fiber communication systems.",
Tm:"Thulium is one of the rarest naturally occurring lanthanides.",
Yb:"Ytterbium is a soft rare-earth metal used in specialized materials.",
Lu:"Lutetium is the densest and hardest lanthanide.",

Hf:"Hafnium is resistant to corrosion and has a high melting point.",
Ta:"Tantalum is highly corrosion-resistant and used in electronic components.",
W:"Tungsten has the highest melting point of all metals.",
Re:"Rhenium is one of the rarest elements in Earth's crust.",
Os:"Osmium is an extremely dense metal.",
Ir:"Iridium is highly resistant to corrosion.",
Pt:"Platinum is a valuable metal widely used as a catalyst.",
Au:"Gold is highly unreactive and has been valued for thousands of years.",
Hg:"Mercury is a metal that is liquid at room temperature.",
Tl:"Thallium is a soft metal and many of its compounds are toxic.",
Pb:"Lead is a dense metal that has been used for thousands of years.",
Bi:"Bismuth is a heavy metal with relatively low toxicity compared with many other heavy metals.",
Po:"Polonium is a radioactive element discovered by Marie Curie.",
At:"Astatine is an extremely rare radioactive halogen.",
Rn:"Radon is a radioactive noble gas.",

Fr:"Francium is an extremely rare and highly radioactive alkali metal.",
Ra:"Radium is a radioactive alkaline-earth metal.",
Ac:"Actinium is a radioactive element that gives its name to the actinide series.",

Th:"Thorium is a naturally occurring radioactive element.",
Pa:"Protactinium is a rare radioactive actinide.",
U:"Uranium is a naturally occurring radioactive element.",
Np:"Neptunium is a radioactive actinide.",
Pu:"Plutonium is a radioactive element used in nuclear technology.",
Am:"Americium is a radioactive element used in some smoke detectors.",
Cm:"Curium is a radioactive actinide named after Marie and Pierre Curie.",
Bk:"Berkelium is a synthetic radioactive element.",
Cf:"Californium is a radioactive element used in specialized neutron sources.",
Es:"Einsteinium is a synthetic radioactive element named after Albert Einstein.",
Fm:"Fermium is a synthetic radioactive element named after Enrico Fermi.",
Md:"Mendelevium is a synthetic element named after Dmitri Mendeleev.",
No:"Nobelium is a synthetic radioactive element named after Alfred Nobel.",
Lr:"Lawrencium is a synthetic actinide named after Ernest Lawrence.",

Rf:"Rutherfordium is a synthetic radioactive element named after Ernest Rutherford.",
Db:"Dubnium is a synthetic element named after the city of Dubna.",
Sg:"Seaborgium is a synthetic element named after Glenn Seaborg.",
Bh:"Bohrium is a synthetic element named after Niels Bohr.",
Hs:"Hassium is a synthetic element named after the German state of Hesse.",
Mt:"Meitnerium is a synthetic element named after Lise Meitner.",
Ds:"Darmstadtium is a synthetic element named after Darmstadt, Germany.",
Rg:"Roentgenium is a synthetic element named after Wilhelm Röntgen.",
Cn:"Copernicium is a synthetic element named after Nicolaus Copernicus.",
Nh:"Nihonium is a synthetic element named after Japan.",
Fl:"Flerovium is a synthetic element named after the Flerov Laboratory.",
Mc:"Moscovium is a synthetic element named after the Moscow region.",
Lv:"Livermorium is a synthetic element named after the Lawrence Livermore National Laboratory.",
Ts:"Tennessine is a synthetic element named after Tennessee.",
Og:"Oganesson is a synthetic element named after physicist Yuri Oganessian."

};


// ============================================================
// ELECTRON CONFIGURATIONS
// ============================================================

const electronConfigurations = {

H:"1s¹",
He:"1s²",

Li:"1s² 2s¹",
Be:"1s² 2s²",
B:"1s² 2s² 2p¹",
C:"1s² 2s² 2p²",
N:"1s² 2s² 2p³",
O:"1s² 2s² 2p⁴",
F:"1s² 2s² 2p⁵",
Ne:"1s² 2s² 2p⁶",

Na:"[Ne] 3s¹",
Mg:"[Ne] 3s²",
Al:"[Ne] 3s² 3p¹",
Si:"[Ne] 3s² 3p²",
P:"[Ne] 3s² 3p³",
S:"[Ne] 3s² 3p⁴",
Cl:"[Ne] 3s² 3p⁵",
Ar:"[Ne] 3s² 3p⁶",

K:"[Ar] 4s¹",
Ca:"[Ar] 4s²",
Sc:"[Ar] 3d¹ 4s²",
Ti:"[Ar] 3d² 4s²",
V:"[Ar] 3d³ 4s²",
Cr:"[Ar] 3d⁵ 4s¹",
Mn:"[Ar] 3d⁵ 4s²",
Fe:"[Ar] 3d⁶ 4s²",
Co:"[Ar] 3d⁷ 4s²",
Ni:"[Ar] 3d⁸ 4s²",
Cu:"[Ar] 3d¹⁰ 4s¹",
Zn:"[Ar] 3d¹⁰ 4s²",
Ga:"[Ar] 3d¹⁰ 4s² 4p¹",
Ge:"[Ar] 3d¹⁰ 4s² 4p²",
As:"[Ar] 3d¹⁰ 4s² 4p³",
Se:"[Ar] 3d¹⁰ 4s² 4p⁴",
Br:"[Ar] 3d¹⁰ 4s² 4p⁵",
Kr:"[Ar] 3d¹⁰ 4s² 4p⁶",

Rb:"[Kr] 5s¹",
Sr:"[Kr] 5s²",
Y:"[Kr] 4d¹ 5s²",
Zr:"[Kr] 4d² 5s²",
Nb:"[Kr] 4d⁴ 5s¹",
Mo:"[Kr] 4d⁵ 5s¹",
Tc:"[Kr] 4d⁵ 5s²",
Ru:"[Kr] 4d⁷ 5s¹",
Rh:"[Kr] 4d⁸ 5s¹",
Pd:"[Kr] 4d¹⁰",
Ag:"[Kr] 4d¹⁰ 5s¹",
Cd:"[Kr] 4d¹⁰ 5s²",
In:"[Kr] 4d¹⁰ 5s² 5p¹",
Sn:"[Kr] 4d¹⁰ 5s² 5p²",
Sb:"[Kr] 4d¹⁰ 5s² 5p³",
Te:"[Kr] 4d¹⁰ 5s² 5p⁴",
I:"[Kr] 4d¹⁰ 5s² 5p⁵",
Xe:"[Kr] 4d¹⁰ 5s² 5p⁶",

Cs:"[Xe] 6s¹",
Ba:"[Xe] 6s²",
La:"[Xe] 5d¹ 6s²",
Ce:"[Xe] 4f¹ 5d¹ 6s²",
Pr:"[Xe] 4f³ 6s²",
Nd:"[Xe] 4f⁴ 6s²",
Pm:"[Xe] 4f⁵ 6s²",
Sm:"[Xe] 4f⁶ 6s²",
Eu:"[Xe] 4f⁷ 6s²",
Gd:"[Xe] 4f⁷ 5d¹ 6s²",
Tb:"[Xe] 4f⁹ 6s²",
Dy:"[Xe] 4f¹⁰ 6s²",
Ho:"[Xe] 4f¹¹ 6s²",
Er:"[Xe] 4f¹² 6s²",
Tm:"[Xe] 4f¹³ 6s²",
Yb:"[Xe] 4f¹⁴ 6s²",
Lu:"[Xe] 4f¹⁴ 5d¹ 6s²",

Hf:"[Xe] 4f¹⁴ 5d² 6s²",
Ta:"[Xe] 4f¹⁴ 5d³ 6s²",
W:"[Xe] 4f¹⁴ 5d⁴ 6s²",
Re:"[Xe] 4f¹⁴ 5d⁵ 6s²",
Os:"[Xe] 4f¹⁴ 5d⁶ 6s²",
Ir:"[Xe] 4f¹⁴ 5d⁷ 6s²",
Pt:"[Xe] 4f¹⁴ 5d⁹ 6s¹",
Au:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
Hg:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",
Tl:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
Pb:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
Bi:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
Po:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
At:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
Rn:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",

Fr:"[Rn] 7s¹",
Ra:"[Rn] 7s²",
Ac:"[Rn] 6d¹ 7s²",
Th:"[Rn] 6d² 7s²",
Pa:"[Rn] 5f² 6d¹ 7s²",
U:"[Rn] 5f³ 6d¹ 7s²",
Np:"[Rn] 5f⁴ 6d¹ 7s²",
Pu:"[Rn] 5f⁶ 7s²",
Am:"[Rn] 5f⁷ 7s²",
Cm:"[Rn] 5f⁷ 6d¹ 7s²",
Bk:"[Rn] 5f⁹ 7s²",
Cf:"[Rn] 5f¹⁰ 7s²",
Es:"[Rn] 5f¹¹ 7s²",
Fm:"[Rn] 5f¹² 7s²",
Md:"[Rn] 5f¹³ 7s²",
No:"[Rn] 5f¹⁴ 7s²",
Lr:"[Rn] 5f¹⁴ 7s² 7p¹",

Rf:"[Rn] 5f¹⁴ 6d² 7s²",
Db:"[Rn] 5f¹⁴ 6d³ 7s²",
Sg:"[Rn] 5f¹⁴ 6d⁴ 7s²",
Bh:"[Rn] 5f¹⁴ 6d⁵ 7s²",
Hs:"[Rn] 5f¹⁴ 6d⁶ 7s²",
Mt:"[Rn] 5f¹⁴ 6d⁷ 7s²",
Ds:"[Rn] 5f¹⁴ 6d⁸ 7s²",
Rg:"[Rn] 5f¹⁴ 6d⁹ 7s²",
Cn:"[Rn] 5f¹⁴ 6d¹⁰ 7s²",
Nh:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
Fl:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
Mc:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
Lv:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
Ts:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
Og:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"

};


// ============================================================
// HTML ELEMENTS
// ============================================================

const table = document.getElementById("periodic-table");
const infoBox = document.getElementById("info-box");
const search = document.getElementById("search");
const darkMode = document.getElementById("darkMode");


// ============================================================
// DISPLAY ELEMENTS
// ============================================================

function displayElements(list) {

    table.innerHTML = "";

    list.forEach(element => {

        const [
            number,
            symbol,
            name,
            mass,
            category,
            period,
            group
        ] = element;

        const box = document.createElement("div");

        box.className = `element ${category}`;

        box.style.gridRow = period;
        box.style.gridColumn = group;

        box.innerHTML = `
            <span class="number">${number}</span>
            <span class="symbol">${symbol}</span>
            <span class="name">${name}</span>
        `;


        // ====================================================
        // ELEMENT CLICK
        // ====================================================

        box.addEventListener("click", () => {

            const fact =
                facts[symbol] ||
                "Information about this element is being added.";

            const configuration =
                electronConfigurations[symbol] ||
                "Configuration not available yet.";


            infoBox.innerHTML = `

                <h2>${name} (${symbol})</h2>

                <p>
                    <strong>Atomic Number:</strong>
                    ${number}
                </p>

                <p>
                    <strong>Atomic Mass:</strong>
                    ${mass}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${category}
                </p>

                <p>
                    <strong>Period:</strong>
                    ${period}
                </p>

                <p>
                    <strong>Group:</strong>
                    ${group}
                </p>

                <hr>

function createElectronDiagram(atomicNumber, symbol) {
    const shells = getShellDistribution(atomicNumber);
    const atom = document.createElement("div");
    atom.className = "atom";

    // Nucleus
    const nucleus = document.createElement("div");
    nucleus.className = "nucleus";
    nucleus.textContent = symbol;
    atom.appendChild(nucleus);

    // Different colors for each shell
    const shellColors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dfe6e9", "#a29bfe"];

    shells.forEach((electronCount, shellIndex) => {
        const shell = document.createElement("div");
        shell.className = `shell shell-${shellIndex + 1}`;
        shell.style.borderColor = shellColors[shellIndex] || "#888";

        for (let i = 0; i < electronCount; i++) {
            const electron = document.createElement("span");
            electron.className = "electron";
            electron.style.background = shellColors[shellIndex] || "#333";

            // Better angle calculation
            const angle = (360 / electronCount) * i - 90; // start from top
            const radius = 48; // slightly less than 50 so they sit nicely on the ring

            const x = 50 + radius * Math.cos(angle * Math.PI / 180);
            const y = 50 + radius * Math.sin(angle * Math.PI / 180);

            electron.style.left = `${x}%`;
            electron.style.top = `${y}%`;

            shell.appendChild(electron);
        }

        atom.appendChild(shell);
    });

    return atom;
}

                <p>
                    <strong>Orbital configuration:</strong>
                    ${configuration}
                </p>

                <hr>

                <h3>💡 Did You Know?</h3>

                <p>
                    ${fact}
                </p>

            `;


            infoBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });


        table.appendChild(box);

    });

}


// ============================================================
// SHOW ALL ELEMENTS
// ============================================================

displayElements(elements);


// ============================================================
// SEARCH
// ============================================================

if (search) {

    search.addEventListener("input", () => {

        const value =
            search.value
                .toLowerCase()
                .trim();


        const filtered =
            elements.filter(element => {

                const number =
                    String(element[0]);

                const symbol =
                    element[1].toLowerCase();

                const name =
                    element[2].toLowerCase();


                return (
                    name.includes(value) ||
                    symbol.includes(value) ||
                    number === value
                );

            });


        displayElements(filtered);

    });

}


// ============================================================
// DARK MODE
// ============================================================

if (darkMode) {

    darkMode.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            darkMode.textContent =
                "☀️ Light Mode";

        } else {

            darkMode.textContent =
                "🌙 Dark Mode";

        }

    });

}
