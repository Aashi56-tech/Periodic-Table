// =========================================
// INTERACTIVE PERIODIC TABLE
// =========================================


// =========================================
// ELEMENT DATA
// =========================================

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


// =========================================
// ELEMENT FACTS
// =========================================

const facts = {

    H: ["Hydrogen is the lightest element and the most abundant element in the universe.", "1s¹"],
    He: ["Helium is a noble gas used in balloons and cryogenic applications.", "1s²"],
    Li: ["Lithium is a soft alkali metal widely used in rechargeable batteries.", "[He] 2s¹"],
    Be: ["Beryllium is a lightweight metal used in aerospace materials.", "[He] 2s²"],
    B: ["Boron is a metalloid used in glass, ceramics and detergents.", "[He] 2s² 2p¹"],
    C: ["Carbon is the basis of many compounds found in living organisms.", "[He] 2s² 2p²"],
    N: ["Nitrogen makes up about 78% of Earth's atmosphere.", "[He] 2s² 2p³"],
    O: ["Oxygen is essential for respiration and makes up about 21% of Earth's atmosphere.", "[He] 2s² 2p⁴"],
    F: ["Fluorine is the most electronegative element.", "[He] 2s² 2p⁵"],
    Ne: ["Neon is a noble gas famous for its use in glowing signs.", "[He] 2s² 2p⁶"],

    Na: ["Sodium is a highly reactive alkali metal.", "[Ne] 3s¹"],
    Mg: ["Magnesium is a lightweight metal used in alloys and fireworks.", "[Ne] 3s²"],
    Al: ["Aluminium is lightweight and widely used in transportation and construction.", "[Ne] 3s² 3p¹"],
    Si: ["Silicon is important in computer chips and solar cells.", "[Ne] 3s² 3p²"],
    P: ["Phosphorus is important in DNA, ATP and fertilizers.", "[Ne] 3s² 3p³"],
    S: ["Sulfur is a yellow nonmetal used to make sulfuric acid.", "[Ne] 3s² 3p⁴"],
    Cl: ["Chlorine is a reactive halogen commonly used to disinfect water.", "[Ne] 3s² 3p⁵"],
    Ar: ["Argon is a noble gas commonly used in welding.", "[Ne] 3s² 3p⁶"],

    K: ["Potassium is a reactive alkali metal important for living cells.", "[Ar] 4s¹"],
    Ca: ["Calcium is important for bones and is also used in cement and construction.", "[Ar] 4s²"],
    Sc: ["Scandium is a transition metal used in some lightweight alloys.", "[Ar] 3d¹ 4s²"],
    Ti: ["Titanium is strong, lightweight and corrosion resistant.", "[Ar] 3d² 4s²"],
    V: ["Vanadium is used to make strong steel alloys.", "[Ar] 3d³ 4s²"],
    Cr: ["Chromium gives many materials a shiny, corrosion-resistant surface.", "[Ar] 3d⁵ 4s¹"],
    Mn: ["Manganese is important in steel production and batteries.", "[Ar] 3d⁵ 4s²"],
    Fe: ["Iron is an important metal used in construction and manufacturing.", "[Ar] 3d⁶ 4s²"],
    Co: ["Cobalt is used in alloys and rechargeable battery materials.", "[Ar] 3d⁷ 4s²"],
    Ni: ["Nickel is resistant to corrosion and is used in alloys and coins.", "[Ar] 3d⁸ 4s²"],
    Cu: ["Copper is an excellent conductor of electricity.", "[Ar] 3d¹⁰ 4s¹"],
    Zn: ["Zinc is used to protect iron from corrosion through galvanization.", "[Ar] 3d¹⁰ 4s²"],
    Ga: ["Gallium can melt in your hand because it has a low melting point.", "[Ar] 3d¹⁰ 4s² 4p¹"],
    Ge: ["Germanium is a semiconductor used in electronics and fiber optics.", "[Ar] 3d¹⁰ 4s² 4p²"],
    As: ["Arsenic is a metalloid that has been used in specialized materials.", "[Ar] 3d¹⁰ 4s² 4p³"],
    Se: ["Selenium is a nonmetal used in electronics and glassmaking.", "[Ar] 3d¹⁰ 4s² 4p⁴"],
    Br: ["Bromine is a reddish-brown liquid at room temperature.", "[Ar] 3d¹⁰ 4s² 4p⁵"],
    Kr: ["Krypton is a noble gas used in some lighting applications.", "[Ar] 3d¹⁰ 4s² 4p⁶"],

    Rb: ["Rubidium is a very reactive alkali metal.", "[Kr] 5s¹"],
    Sr: ["Strontium compounds can produce a bright red color in fireworks.", "[Kr] 5s²"],
    Y: ["Yttrium is used in some lasers, phosphors and advanced materials.", "[Kr] 4d¹ 5s²"],
    Zr: ["Zirconium is highly resistant to corrosion and is used in nuclear technology.", "[Kr] 4d² 5s²"],
    Nb: ["Niobium is used in superconducting magnets and strong alloys.", "[Kr] 4d⁴ 5s¹"],
    Mo: ["Molybdenum has a very high melting point and strengthens steel.", "[Kr] 4d⁵ 5s¹"],
    Tc: ["Technetium was the first element to be produced artificially.", "[Kr] 4d⁵ 5s²"],
    Ru: ["Ruthenium is a rare transition metal used in electronics and catalysts.", "[Kr] 4d⁷ 5s¹"],
    Rh: ["Rhodium is a valuable metal used in catalytic converters.", "[Kr] 4d⁸ 5s¹"],
    Pd: ["Palladium is used in catalytic converters and electronics.", "[Kr] 4d¹⁰"],
    Ag: ["Silver has the highest electrical conductivity of any element.", "[Kr] 4d¹⁰ 5s¹"],
    Cd: ["Cadmium is a soft metal used in some specialized batteries and coatings.", "[Kr] 4d¹⁰ 5s²"],
    In: ["Indium is used in touchscreens and transparent conducting materials.", "[Kr] 4d¹⁰ 5s² 5p¹"],
    Sn: ["Tin is used to coat other metals and in solder.", "[Kr] 4d¹⁰ 5s² 5p²"],
    Sb: ["Antimony is a metalloid used in alloys and flame-resistant materials.", "[Kr] 4d¹⁰ 5s² 5p³"],
    Te: ["Tellurium is a rare metalloid used in some solar technologies.", "[Kr] 4d¹⁰ 5s² 5p⁴"],
    I: ["Iodine is important for the production of thyroid hormones.", "[Kr] 4d¹⁰ 5s² 5p⁵"],
    Xe: ["Xenon is a noble gas used in specialized lamps and ion propulsion research.", "[Kr] 4d¹⁰ 5s² 5p⁶"],

    Cs: ["Caesium is an extremely reactive alkali metal.", "[Xe] 6s¹"],
    Ba: ["Barium compounds are used in some medical imaging procedures.", "[Xe] 6s²"],
    La: ["Lanthanum is a rare-earth element used in optical glass and batteries.", "[Xe] 5d¹ 6s²"],

    Ce: ["Cerium is the most abundant rare-earth element.", "[Xe] 4f¹ 5d¹ 6s²"],
    Pr: ["Praseodymium is used in specialized glass and strong magnets.", "[Xe] 4f³ 6s²"],
    Nd: ["Neodymium is used to make very strong permanent magnets.", "[Xe] 4f⁴ 6s²"],
    Pm: ["Promethium is a radioactive rare-earth element.", "[Xe] 4f⁵ 6s²"],
    Sm: ["Samarium is used in powerful magnets and some nuclear applications.", "[Xe] 4f⁶ 6s²"],
    Eu: ["Europium is important in red phosphors used in displays.", "[Xe] 4f⁷ 6s²"],
    Gd: ["Gadolinium is used in some medical imaging contrast agents.", "[Xe] 4f⁷ 5d¹ 6s²"],
    Tb: ["Terbium is used in green phosphors and specialized magnets.", "[Xe] 4f⁹ 6s²"],
    Dy: ["Dysprosium is used in high-performance permanent magnets.", "[Xe] 4f¹⁰ 6s²"],
    Ho: ["Holmium has one of the strongest magnetic properties of any element.", "[Xe] 4f¹¹ 6s²"],
    Er: ["Erbium is widely used in fiber-optic communication.", "[Xe] 4f¹² 6s²"],
    Tm: ["Thulium is the rarest naturally occurring lanthanide.", "[Xe] 4f¹³ 6s²"],
    Yb: ["Ytterbium is a soft rare-earth metal used in specialized materials.", "[Xe] 4f¹⁴ 6s²"],
    Lu: ["Lutetium is the heaviest lanthanide.", "[Xe] 4f¹⁴ 5d¹ 6s²"],

    Hf: ["Hafnium is resistant to corrosion and is useful in nuclear reactors.", "[Xe] 4f¹⁴ 5d² 6s²"],
    Ta: ["Tantalum is highly corrosion resistant and used in electronic components.", "[Xe] 4f¹⁴ 5d³ 6s²"],
    W: ["Tungsten has the highest melting point of all elements.", "[Xe] 4f¹⁴ 5d⁴ 6s²"],
    Re: ["Rhenium has an extremely high melting point and is used in superalloys.", "[Xe] 4f¹⁴ 5d⁵ 6s²"],
    Os: ["Osmium is one of the densest naturally occurring elements.", "[Xe] 4f¹⁴ 5d⁶ 6s²"],
    Ir: ["Iridium is extremely corrosion resistant.", "[Xe] 4f¹⁴ 5d⁷ 6s²"],
    Pt: ["Platinum is a valuable metal widely used as a catalyst.", "[Xe] 4f¹⁴ 5d⁹ 6s¹"],
    Au: ["Gold is a highly unreactive metal and has been valued for thousands of years.", "[Xe] 4f¹⁴ 5d¹⁰ 6s¹"],
    Hg: ["Mercury is a metal that is liquid at room temperature.", "[Xe] 4f¹⁴ 5d¹⁰ 6s²"],
    Tl: ["Thallium is a soft, heavy metal.", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹"],
    Pb: ["Lead is a dense metal that has been used for thousands of years.", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²"],
    Bi: ["Bismuth is a heavy metal with a relatively low toxicity compared with many heavy metals.", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³"],
    Po: ["Polonium is a radioactive element discovered by Marie Curie.", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴"],
    At: ["Astatine is one of the rarest naturally occurring elements.", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵"],
    Rn: ["Radon is a radioactive noble gas.", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶"],

    Fr: ["Francium is an extremely rare and highly radioactive alkali metal.", "[Rn] 7s¹"],
    Ra: ["Radium is a radioactive alkaline earth metal discovered by Marie Curie and Pierre Curie.", "[Rn] 7s²"],
    Ac: ["Actinium is a radioactive element and the first member of the actinide series.", "[Rn] 6d¹ 7s²"],

    Th: ["Thorium is a naturally radioactive metal that has been studied as a possible nuclear fuel.", "[Rn] 6d² 7s²"],
    Pa: ["Protactinium is a rare radioactive actinide.", "[Rn] 5f² 6d¹ 7s²"],
    U: ["Uranium is a naturally occurring radioactive element.", "[Rn] 5f³ 6d¹ 7s²"],
    Np: ["Neptunium was the first transuranium element discovered.", "[Rn] 5f⁴ 6d¹ 7s²"],
    Pu: ["Plutonium is a radioactive element important in nuclear science.", "[Rn] 5f⁶ 7s²"],
    Am: ["Americium is used in some household smoke detectors.", "[Rn] 5f⁷ 7s²"],
    Cm: ["Curium is a radioactive element named after Marie and Pierre Curie.", "[Rn] 5f⁷ 6d¹ 7s²"],
    Bk: ["Berkelium was named after Berkeley, California.", "[Rn] 5f⁹ 7s²"],
    Cf: ["Californium is a radioactive element named after California.", "[Rn] 5f¹⁰ 7s²"],
    Es: ["Einsteinium was named after Albert Einstein.", "[Rn] 5f¹¹ 7s²"],
    Fm: ["Fermium was named after physicist Enrico Fermi.", "[Rn] 5f¹² 7s²"],
    Md: ["Mendelevium was named after Dmitri Mendeleev.", "[Rn] 5f¹³ 7s²"],
    No: ["Nobelium was named after Alfred Nobel.", "[Rn] 5f¹⁴ 7s²"],
    Lr: ["Lawrencium was named after physicist Ernest Lawrence.", "[Rn] 5f¹⁴ 7s² 7p¹"],

    Rf: ["Rutherfordium is a synthetic radioactive element named after Ernest Rutherford.", "[Rn] 5f¹⁴ 6d² 7s²"],
    Db: ["Dubnium is a synthetic element named after the city of Dubna.", "[Rn] 5f¹⁴ 6d³ 7s²"],
    Sg: ["Seaborgium is named after chemist Glenn T. Seaborg.", "[Rn] 5f¹⁴ 6d⁴ 7s²"],
    Bh: ["Bohrium is named after physicist Niels Bohr.", "[Rn] 5f¹⁴ 6d⁵ 7s²"],
    Hs: ["Hassium is named after the German state of Hesse.", "[Rn] 5f¹⁴ 6d⁶ 7s²"],
    Mt: ["Meitnerium is named after physicist Lise Meitner.", "[Rn] 5f¹⁴ 6d⁷ 7s²"],
    Ds: ["Darmstadtium is named after the German city of Darmstadt.", "[Rn] 5f¹⁴ 6d⁸ 7s²"],
    Rg: ["Roentgenium is named after physicist Wilhelm Röntgen.", "[Rn] 5f¹⁴ 6d⁹ 7s²"],
    Cn: ["Copernicium is named after astronomer Nicolaus Copernicus.", "[Rn] 5f¹⁴ 6d¹⁰ 7s²"],
    Nh: ["Nihonium is named after Japan.", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹"],
    Fl: ["Flerovium is named after the Flerov Laboratory of Nuclear Reactions.", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²"],
    Mc: ["Moscovium is named after the Moscow region.", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³"],
    Lv: ["Livermorium is named after the Lawrence Livermore National Laboratory.", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴"],
    Ts: ["Tennessine is named after the U.S. state of Tennessee.", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵"],
    Og: ["Oganesson is named after physicist Yuri Oganessian.", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"]
};


// =========================================
// PAGE ELEMENTS
// =========================================

const table = document.getElementById("periodic-table");
const infoBox = document.getElementById("info-box");
const search = document.getElementById("search");
const darkMode = document.getElementById("darkMode");


// =========================================
// DISPLAY PERIODIC TABLE
// =========================================

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


        box.addEventListener("click", () => {

            const factData = facts[symbol];

            let factText =
                "Interesting information about this element will be added soon.";

            let electronConfig = "";


            if (factData) {

                factText = factData[0];

                electronConfig = factData[1];

            }


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

                <p>
                    <strong>Electron Configuration:</strong>
                    ${electronConfig}
                </p>

                <hr>

                <h3>💡 Did You Know?</h3>

                <p>${factText}</p>

            `;


            infoBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });


        table.appendChild(box);

    });

}


// =========================================
// SHOW ALL ELEMENTS
// =========================================

displayElements(elements);


// =========================================
// SEARCH
// =========================================

search.addEventListener("input", () => {

    const value =
        search.value
            .toLowerCase()
            .trim();


    if (value === "") {

        displayElements(elements);

        return;

    }


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


// =========================================
// DARK MODE
// =========================================

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        darkMode.textContent =
            "☀️ Light Mode";

    }

    else {

        darkMode.textContent =
            "🌙 Dark Mode";

    }

});


// =========================================
// QUIZ ELEMENTS
// =========================================

const quizMode =
    document.getElementById("quizMode");

const quizBox =
    document.getElementById("quiz-box");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const quizResult =
    document.getElementById("quiz-result");

const nextQuestion =
    document.getElementById("next-question");

const exitQuiz =
    document.getElementById("exit-quiz");

const scoreDisplay =
    document.getElementById("score");


let quizScore = 0;

let currentAnswer = "";


// =========================================
// OPEN QUIZ
// =========================================

quizMode.addEventListener("click", () => {

    quizBox.classList.remove("hidden");

    quizScore = 0;

    scoreDisplay.textContent =
        "Score: 0";

    quizBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createQuestion();

});


// =========================================
// CREATE QUIZ QUESTION
// =========================================

function createQuestion() {

    answers.innerHTML = "";

    quizResult.textContent = "";

    nextQuestion.style.display =
        "none";


    // Pick random element

    const randomElement =
        elements[
            Math.floor(
                Math.random() * elements.length
            )
        ];


    const number =
        randomElement[0];

    const symbol =
        randomElement[1];

    const name =
        randomElement[2];


    // Choose question type

    const questionType =
        Math.floor(Math.random() * 3);


    let questionText;

    let correctAnswer;


    // QUESTION TYPE 1

    if (questionType === 0) {

        questionText =
            `Which element has the symbol "${symbol}"?`;

        correctAnswer =
            name;

    }


    // QUESTION TYPE 2

    else if (questionType === 1) {

        questionText =
            `What is the symbol of ${name}?`;

        correctAnswer =
            symbol;

    }


    // QUESTION TYPE 3

    else {

        questionText =
            `Which element has atomic number ${number}?`;

        correctAnswer =
            name;

    }


    currentAnswer =
        correctAnswer;


    question.textContent =
        questionText;


    // =====================================
    // WRONG ANSWERS
    // =====================================

    const wrongAnswers = [];


    while (
        wrongAnswers.length < 3
    ) {

        const random =
            elements[
                Math.floor(
                    Math.random() * elements.length
                )
            ];


        const wrongAnswer =
            questionType === 1
                ? random[1]
                : random[2];


        if (
            wrongAnswer !== correctAnswer &&
            !wrongAnswers.includes(wrongAnswer)
        ) {

            wrongAnswers.push(
                wrongAnswer
            );

        }

    }


    // =====================================
    // COMBINE ANSWERS
    // =====================================

    const allAnswers = [
        correctAnswer,
        ...wrongAnswers
    ];


    // Shuffle

    allAnswers.sort(
        () => Math.random() - 0.5
    );


    // =====================================
    // DISPLAY ANSWERS
    // =====================================

    allAnswers.forEach(answer => {

        const button =
            document.createElement("button");


        button.className =
            "quiz-answer";


        button.textContent =
            answer;


        button.addEventListener(
            "click",
            () => {

                checkAnswer(answer);

            }
        );


        answers.appendChild(button);

    });

}


// =========================================
// CHECK ANSWER
// =========================================

function checkAnswer(answer) {

    const buttons =
        document.querySelectorAll(
            ".quiz-answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (
        answer === currentAnswer
    ) {

        quizScore++;


        scoreDisplay.textContent =
            `Score: ${quizScore}`;


        quizResult.textContent =
            "🎉 Correct! Great job!";

    }

    else {

        quizResult.textContent =
            `❌ Not quite! The correct answer is ${currentAnswer}.`;

    }


    nextQuestion.style.display =
        "inline-block";

}


// =========================================
// NEXT QUESTION
// =========================================

nextQuestion.addEventListener(
    "click",
    () => {

        createQuestion();

    }
);


// =========================================
// EXIT QUIZ
// =========================================

exitQuiz.addEventListener(
    "click",
    () => {

        quizBox.classList.add(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
