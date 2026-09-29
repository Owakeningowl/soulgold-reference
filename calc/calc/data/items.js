"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = [];
var GSC = [
    'Berry Juice',
    'Berry',
    'Berserk Gene',
    'Bitter Berry',
    'Black Belt',
    'Black Glasses',
    'Bright Powder',
    'Burnt Berry',
    'Charcoal',
    'Dragon Fang',
    'Dragon Scale',
    'Everstone',
    'Fast Ball',
    'Fire Stone',
    'Focus Band',
    'Friend Ball',
    'Gold Berry',
    'Great Ball',
    'Hard Stone',
    'Heavy Ball',
    'Ice Berry',
    'King\'s Rock',
    'Leaf Stone',
    'Leftovers',
    'Level Ball',
    'Light Ball',
    'Love Ball',
    'Lucky Punch',
    'Lure Ball',
    'Magnet',
    'Mail',
    'Master Ball',
    'Metal Coat',
    'Metal Powder',
    'Mint Berry',
    'Miracle Berry',
    'Miracle Seed',
    'Moon Ball',
    'Moon Stone',
    'Mystery Berry',
    'Mystic Water',
    'Never-Melt Ice',
    'Pink Bow',
    'Poison Barb',
    'Poke Ball',
    'Polkadot Bow',
    'PRZ Cure Berry',
    'PSN Cure Berry',
    'Quick Claw',
    'Safari Ball',
    'Scope Lens',
    'Sharp Beak',
    'Silver Powder',
    'Soft Sand',
    'Spell Tag',
    'Sport Ball',
    'Stick',
    'Sun Stone',
    'Thick Club',
    'Thunder Stone',
    'Twisted Spoon',
    'Ultra Ball',
    'Up-Grade',
    'Water Stone',
];
var GSC_ONLY = [
    'Berry',
    'Berserk Gene',
    'Bitter Berry',
    'Burnt Berry',
    'Ice Berry',
    'Mint Berry',
    'Miracle Berry',
    'Mystery Berry',
    'PRZ Cure Berry',
    'Gold Berry',
    'Pink Bow',
    'Polkadot Bow',
    'PSN Cure Berry',
    'Enigma Berry',
];
var ADV = GSC.filter(function (i) { return !GSC_ONLY.includes(i); }).concat([
    'Aguav Berry',
    'Apicot Berry',
    'Aspear Berry',
    'Belue Berry',
    'Bluk Berry',
    'Cheri Berry',
    'Chesto Berry',
    'Choice Band',
    'Claw Fossil',
    'Cornn Berry',
    'Deep Sea Scale',
    'Deep Sea Tooth',
    'Dive Ball',
    'Dome Fossil',
    'Durin Berry',
    'Enigma Berry',
    'Figy Berry',
    'Ganlon Berry',
    'Grepa Berry',
    'Helix Fossil',
    'Hondew Berry',
    'Iapapa Berry',
    'Kelpsy Berry',
    'Lansat Berry',
    'Lax Incense',
    'Leppa Berry',
    'Liechi Berry',
    'Lum Berry',
    'Luxury Ball',
    'Macho Brace',
    'Mago Berry',
    'Magost Berry',
    'Mental Herb',
    'Nanab Berry',
    'Nest Ball',
    'Net Ball',
    'Nomel Berry',
    'Old Amber',
    'Oran Berry',
    'Pamtre Berry',
    'Pecha Berry',
    'Persim Berry',
    'Petaya Berry',
    'Pinap Berry',
    'Pomeg Berry',
    'Premier Ball',
    'Qualot Berry',
    'Rabuta Berry',
    'Rawst Berry',
    'Razz Berry',
    'Repeat Ball',
    'Root Fossil',
    'Salac Berry',
    'Sea Incense',
    'Shell Bell',
    'Silk Scarf',
    'Sitrus Berry',
    'Soothe Bell',
    'Soul Dew',
    'Spelon Berry',
    'Starf Berry',
    'Tamato Berry',
    'Timer Ball',
    'Watmel Berry',
    'Wepear Berry',
    'White Herb',
    'Wiki Berry',
]);
var DPP = ADV.concat([
    'Adamant Orb',
    'Armor Fossil',
    'Babiri Berry',
    'Big Root',
    'Black Sludge',
    'Charti Berry',
    'Cherish Ball',
    'Chilan Berry',
    'Choice Scarf',
    'Choice Specs',
    'Chople Berry',
    'Coba Berry',
    'Colbur Berry',
    'Custap Berry',
    'Damp Rock',
    'Dawn Stone',
    'Destiny Knot',
    'Draco Plate',
    'Dread Plate',
    'Dubious Disc',
    'Dusk Ball',
    'Dusk Stone',
    'Earth Plate',
    'Electirizer',
    'Expert Belt',
    'Fist Plate',
    'Flame Orb',
    'Flame Plate',
    'Focus Sash',
    'Full Incense',
    'Grip Claw',
    'Griseous Orb',
    'Haban Berry',
    'Heal Ball',
    'Heat Rock',
    'Icicle Plate',
    'Icy Rock',
    'Insect Plate',
    'Iron Ball',
    'Iron Plate',
    'Jaboca Berry',
    'Kasib Berry',
    'Kebia Berry',
    'Lagging Tail',
    'Life Orb',
    'Light Clay',
    'Lustrous Orb',
    'Magmarizer',
    'Meadow Plate',
    'Metronome',
    'Micle Berry',
    'Mind Plate',
    'Muscle Band',
    'Occa Berry',
    'Odd Incense',
    'Oval Stone',
    'Park Ball',
    'Passho Berry',
    'Payapa Berry',
    'Power Anklet',
    'Power Band',
    'Power Belt',
    'Power Bracer',
    'Power Herb',
    'Power Lens',
    'Power Weight',
    'Protector',
    'Quick Ball',
    'Quick Powder',
    'Rare Bone',
    'Razor Claw',
    'Razor Fang',
    'Reaper Cloth',
    'Rindo Berry',
    'Rock Incense',
    'Rose Incense',
    'Rowap Berry',
    'Shed Shell',
    'Shiny Stone',
    'Shuca Berry',
    'Skull Fossil',
    'Sky Plate',
    'Smooth Rock',
    'Splash Plate',
    'Spooky Plate',
    'Sticky Barb',
    'Stone Plate',
    'Tanga Berry',
    'Toxic Orb',
    'Toxic Plate',
    'Wacan Berry',
    'Wave Incense',
    'Wide Lens',
    'Wise Glasses',
    'Yache Berry',
    'Zap Plate',
    'Zoom Lens',
]);
var BW = DPP.concat([
    'Absorb Bulb',
    'Air Balloon',
    'Binding Band',
    'Bug Gem',
    'Burn Drive',
    'Cell Battery',
    'Chill Drive',
    'Cover Fossil',
    'Dark Gem',
    'Douse Drive',
    'Dragon Gem',
    'Dream Ball',
    'Eject Button',
    'Electric Gem',
    'Eviolite',
    'Fighting Gem',
    'Fire Gem',
    'Float Stone',
    'Flying Gem',
    'Ghost Gem',
    'Grass Gem',
    'Ground Gem',
    'Ice Gem',
    'Normal Gem',
    'Plume Fossil',
    'Poison Gem',
    'Prism Scale',
    'Psychic Gem',
    'Red Card',
    'Ring Target',
    'Rock Gem',
    'Rocky Helmet',
    'Shock Drive',
    'Steel Gem',
    'Water Gem',
]);
var GEN_6_MEGA_STONES = {
    Absolite: 'Absol',
    Abomasite: 'Abomasnow',
    Aerodactylite: 'Aerodactyl',
    Aggronite: 'Aggron',
    Alakazite: 'Alakazam',
    Altarianite: 'Altaria',
    Ampharosite: 'Ampharos',
    Audinite: 'Audino',
    Banettite: 'Banette',
    Beedrillite: 'Beedrill',
    Blastoisinite: 'Blastoise',
    Blazikenite: 'Blaziken',
    Cameruptite: 'Camerupt',
    'Charizardite X': 'Charizard',
    'Charizardite Y': 'Charizard',
    Crucibellite: 'Crucibelle',
    Diancite: 'Diancie',
    Galladite: 'Gallade',
    Garchompite: 'Garchomp',
    Gardevoirite: 'Gardevoir',
    Gengarite: 'Gengar',
    Glalitite: 'Glalie',
    Gyaradosite: 'Gyarados',
    Heracronite: 'Heracross',
    Houndoominite: 'Houndoom',
    Kangaskhanite: 'Kangaskhan',
    Latiasite: 'Latias',
    Latiosite: 'Latios',
    Lopunnite: 'Lopunny',
    Lucarionite: 'Lucario',
    Manectite: 'Manectric',
    Mawilite: 'Mawile',
    Medichamite: 'Medicham',
    Metagrossite: 'Metagross',
    'Mewtwonite X': 'Mewtwo',
    'Mewtwonite Y': 'Mewtwo',
    Pidgeotite: 'Pidgeot',
    Pinsirite: 'Pinsir',
    Sablenite: 'Sableye',
    Salamencite: 'Salamence',
    Sceptilite: 'Sceptile',
    Scizorite: 'Scizor',
    Sharpedonite: 'Sharpedo',
    Slowbronite: 'Slowbro',
    Steelixite: 'Steelix',
    Swampertite: 'Swampert',
    Tyranitarite: 'Tyranitar',
    Venusaurite: 'Venusaur'
};
var XY = BW.concat(__spreadArray(__spreadArray([], __read(Object.keys(GEN_6_MEGA_STONES)), false), [
    'Assault Vest',
    'Blue Orb',
    'Fairy Gem',
    'Jaw Fossil',
    'Kee Berry',
    'Luminous Moss',
    'Maranga Berry',
    'Pixie Plate',
    'Red Orb',
    'Roseli Berry',
    'Sachet',
    'Safety Goggles',
    'Sail Fossil',
    'Snowball',
    'Weakness Policy',
    'Whipped Dream',
], false).sort());
var SM = XY.filter(function (i) { return i !== 'Old Amber'; }).concat([
    'Adrenaline Orb',
    'Aloraichium Z',
    'Beast Ball',
    'Bottle Cap',
    'Bug Memory',
    'Buginium Z',
    'Dark Memory',
    'Darkinium Z',
    'Decidium Z',
    'Dragon Memory',
    'Dragonium Z',
    'Eevium Z',
    'Electric Memory',
    'Electric Seed',
    'Electrium Z',
    'Fairium Z',
    'Fairy Memory',
    'Fighting Memory',
    'Fightinium Z',
    'Fire Memory',
    'Firium Z',
    'Flying Memory',
    'Flyinium Z',
    'Ghost Memory',
    'Ghostium Z',
    'Gold Bottle Cap',
    'Grass Memory',
    'Grassium Z',
    'Grassy Seed',
    'Ground Memory',
    'Groundium Z',
    'Ice Memory',
    'Ice Stone',
    'Icium Z',
    'Incinium Z',
    'Kommonium Z',
    'Lunalium Z',
    'Lycanium Z',
    'Marshadium Z',
    'Mewnium Z',
    'Mimikium Z',
    'Misty Seed',
    'Normalium Z',
    'Pikanium Z',
    'Pikashunium Z',
    'Poison Memory',
    'Poisonium Z',
    'Primarium Z',
    'Protective Pads',
    'Psychic Memory',
    'Psychic Seed',
    'Psychium Z',
    'Rock Memory',
    'Rockium Z',
    'Snorlium Z',
    'Solganium Z',
    'Steel Memory',
    'Steelium Z',
    'Tapunium Z',
    'Terrain Extender',
    'Ultranecrozium Z',
    'Water Memory',
    'Waterium Z',
]);
var SS = SM.concat([
    'Berry Sweet',
    'Blunder Policy',
    'Chipped Pot',
    'Clover Sweet',
    'Cracked Pot',
    'Eject Pack',
    'Flower Sweet',
    'Fossilized Bird',
    'Fossilized Dino',
    'Fossilized Drake',
    'Fossilized Fish',
    'Galarica Cuff',
    'Galarica Wreath',
    'Heavy-Duty Boots',
    'Leek',
    'Love Sweet',
    'Ribbon Sweet',
    'Room Service',
    'Rusted Shield',
    'Rusted Sword',
    'Star Sweet',
    'Strawberry Sweet',
    'Sweet Apple',
    'Tart Apple',
    'Throat Spray',
]);
for (var i = 0; i < 100; i++) {
    SS.push("TR".concat(i < 10 ? "0".concat(i) : i));
}
SS.push('Utility Umbrella', 'Vile Vial');
SS.push.apply(SS, __spreadArray(__spreadArray([], __read(GSC_ONLY), false), ['Old Amber'], false));
var ZA_MEGA_STONES = {
    Barbaracite: 'Barbaracle',
    Chandelurite: 'Chandelure',
    Chesnaughtite: 'Chesnaught',
    Clefablite: 'Clefable',
    Delphoxite: 'Delphox',
    Dragalgite: 'Dragalge',
    Dragoninite: 'Dragonite',
    Drampanite: 'Drampa',
    Eelektrossite: 'Eelektross',
    Emboarite: 'Emboar',
    Excadrite: 'Excadrill',
    Falinksite: 'Falinks',
    Feraligite: 'Feraligatr',
    Floettite: 'Floette-Eternal',
    Froslassite: 'Froslass',
    Greninjite: 'Greninja',
    Hawluchanite: 'Hawlucha',
    Malamarite: 'Malamar',
    Meganiumite: 'Meganium',
    Pyroarite: 'Pyroar',
    Scolipite: 'Scolipede',
    Scraftinite: 'Scrafty',
    Skarmorite: 'Skarmory',
    Starminite: 'Starmie',
    Victreebelite: 'Victreebel',
    Zygardite: 'Zygarde'
};
var ZA_DLC_MEGA_STONES = {
    'Absolite Z': 'Absol',
    Baxcalibrite: 'Baxcalibur',
    Chimechite: 'Chimecho',
    Crabominite: 'Crabominable',
    Darkranite: 'Darkrai',
    'Garchompite Z': 'Garchomp',
    Glimmoranite: 'Glimmora',
    Golisopite: 'Golisopod',
    Golurkite: 'Golurk',
    Heatranite: 'Heatran',
    'Lucarionite Z': 'Lucario',
    Magearnite: 'Magearna',
    Meowsticite: 'Meowstic',
    'Raichunite X': 'Raichu',
    'Raichunite Y': 'Raichu',
    Scovillainite: 'Scovillain',
    Staraptite: 'Staraptor',
    Tatsugirinite: 'Tatsugiri',
    Zeraorite: 'Zeraora'
};
var SV = SS.concat(__spreadArray(__spreadArray(__spreadArray([], __read(Object.keys(ZA_MEGA_STONES)), false), __read(Object.keys(ZA_DLC_MEGA_STONES)), false), [
    'Adamant Crystal',
    'Auspicious Armor',
    'Ability Shield',
    'Booster Energy',
    'Clear Amulet',
    'Cornerstone Mask',
    'Covert Cloak',
    'Fairy Feather',
    'Hearthflame Mask',
    'Loaded Dice',
    'Malicious Armor',
    'Metal Alloy',
    'Mirror Herb',
    'Punching Glove',
    'Lustrous Globe',
    'Griseous Core',
    'Strange Ball',
    'Wellspring Mask',
], false));
var BERRIES = {
    'Aguav Berry': { t: 'Dragon', p: 80 },
    'Apicot Berry': { t: 'Ground', p: 100 },
    'Aspear Berry': { t: 'Ice', p: 80 },
    'Babiri Berry': { t: 'Steel', p: 80 },
    'Belue Berry': { t: 'Electric', p: 100 },
    Berry: { t: 'Poison', p: 80 },
    'Bitter Berry': { t: 'Ground', p: 80 },
    'Bluk Berry': { t: 'Fire', p: 90 },
    'Burnt Berry': { t: 'Ice', p: 80 },
    'Charti Berry': { t: 'Rock', p: 80 },
    'Cheri Berry': { t: 'Fire', p: 80 },
    'Chesto Berry': { t: 'Water', p: 80 },
    'Chilan Berry': { t: 'Normal', p: 80 },
    'Chople Berry': { t: 'Fighting', p: 80 },
    'Coba Berry': { t: 'Flying', p: 80 },
    'Colbur Berry': { t: 'Dark', p: 80 },
    'Cornn Berry': { t: 'Bug', p: 90 },
    'Custap Berry': { t: 'Ghost', p: 100 },
    'Durin Berry': { t: 'Water', p: 100 },
    'Enigma Berry': { t: 'Bug', p: 100 },
    'Figy Berry': { t: 'Bug', p: 80 },
    'Ganlon Berry': { t: 'Ice', p: 100 },
    'Gold Berry': { t: 'Psychic', p: 80 },
    'Grepa Berry': { t: 'Flying', p: 90 },
    'Haban Berry': { t: 'Dragon', p: 80 },
    'Hondew Berry': { t: 'Ground', p: 90 },
    'Iapapa Berry': { t: 'Dark', p: 80 },
    'Ice Berry': { t: 'Grass', p: 80 },
    'Jaboca Berry': { t: 'Dragon', p: 100 },
    'Kasib Berry': { t: 'Ghost', p: 80 },
    'Kebia Berry': { t: 'Poison', p: 80 },
    'Kee Berry': { t: 'Fairy', p: 100 },
    'Kelpsy Berry': { t: 'Fighting', p: 90 },
    'Lansat Berry': { t: 'Flying', p: 100 },
    'Leppa Berry': { t: 'Fighting', p: 80 },
    'Liechi Berry': { t: 'Grass', p: 100 },
    'Lum Berry': { t: 'Flying', p: 80 },
    'Mago Berry': { t: 'Ghost', p: 80 },
    'Magost Berry': { t: 'Rock', p: 90 },
    'Maranga Berry': { t: 'Dark', p: 100 },
    'Micle Berry': { t: 'Rock', p: 100 },
    'Mint Berry': { t: 'Water', p: 80 },
    'Miracle Berry': { t: 'Flying', p: 80 },
    'Mystery Berry': { t: 'Fighting', p: 80 },
    'Nanab Berry': { t: 'Water', p: 90 },
    'Nomel Berry': { t: 'Dragon', p: 90 },
    'Occa Berry': { t: 'Fire', p: 80 },
    'Oran Berry': { t: 'Poison', p: 80 },
    'Pamtre Berry': { t: 'Steel', p: 90 },
    'Passho Berry': { t: 'Water', p: 80 },
    'Payapa Berry': { t: 'Psychic', p: 80 },
    'Pecha Berry': { t: 'Electric', p: 80 },
    'Persim Berry': { t: 'Ground', p: 80 },
    'Petaya Berry': { t: 'Poison', p: 100 },
    'Pinap Berry': { t: 'Grass', p: 90 },
    'Pomeg Berry': { t: 'Ice', p: 90 },
    'PRZ Cure Berry': { t: 'Fire', p: 80 },
    'PSN Cure Berry': { t: 'Electric', p: 80 },
    'Qualot Berry': { t: 'Poison', p: 90 },
    'Rabuta Berry': { t: 'Ghost', p: 90 },
    'Rawst Berry': { t: 'Grass', p: 80 },
    'Razz Berry': { t: 'Steel', p: 80 },
    'Rindo Berry': { t: 'Grass', p: 80 },
    'Roseli Berry': { t: 'Fairy', p: 80 },
    'Rowap Berry': { t: 'Dark', p: 100 },
    'Salac Berry': { t: 'Fighting', p: 100 },
    'Shuca Berry': { t: 'Ground', p: 80 },
    'Sitrus Berry': { t: 'Psychic', p: 80 },
    'Spelon Berry': { t: 'Dark', p: 90 },
    'Starf Berry': { t: 'Psychic', p: 100 },
    'Tamato Berry': { t: 'Psychic', p: 90 },
    'Tanga Berry': { t: 'Bug', p: 80 },
    'Wacan Berry': { t: 'Electric', p: 80 },
    'Watmel Berry': { t: 'Fire', p: 100 },
    'Wepear Berry': { t: 'Electric', p: 90 },
    'Wiki Berry': { t: 'Rock', p: 80 },
    'Yache Berry': { t: 'Ice', p: 80 }
};
exports.MEGA_STONES = Object.assign({}, GEN_6_MEGA_STONES, ZA_MEGA_STONES, ZA_DLC_MEGA_STONES);
// Zenith Gold: the game's Mega Stones
Object.assign(exports.MEGA_STONES, {"Wellspring Mask": "Ogerpon-Wellspring-Tera", "Hearthflame Mask": "Ogerpon-Hearthflame-Tera", "Cornerstone Mask": "Ogerpon-Cornerstone-Tera"});

// Zenith Gold: the game's items
SV = SV.concat(["Ability Capsule", "Ability Patch", "Ability Shield", "Abomasite", "Absolite", "Absolite Z", "Absorb Bulb", "Acro Bike", "Adamant Crystal", "Adamant Mint", "Adamant Orb", "Adrenaline Orb", "Aerodactylite", "Aggronite", "Aguav Berry", "Air Balloon", "Alakazite", "Aloraichium Z", "Altarianite", "Amaze Mulch", "Ampharosite", "Amulet Coin", "Antidote", "Apicot Berry", "Armor Fossil", "Armorite Ore", "Aspear Berry", "Assault Vest", "Audinite", "Aurora Ticket", "Auspicious Armor", "Aux Evasion", "Aux Guard", "Aux Power", "Aux Powerguard", "Awakening", "Babiri Berry", "Balm Mushroom", "Banettite", "Barbaracite", "Baxcalibrite", "Bead Mail", "Beast Ball", "Beckoning Bell", "Beedrillite", "Belue Berry", "Berry Juice", "Berry Pouch", "Berry Sweet", "Berserk Gene", "Big Bamboo Shoot", "Big Malasada", "Big Mushroom", "Big Nugget", "Big Pearl", "Big Root", "Bike", "Bike Voucher", "Binding Band", "Black Apricorn", "Black Augurite", "Black Belt", "Black Flute", "Black Glasses", "Black Mirror", "Black Sludge", "Blastoisinite", "Blazikenite", "Blue Apricorn", "Blue Flute", "Blue Orb", "Blue Scarf", "Blue Shard", "Bluk Berry", "Blunder Policy", "Bold Mint", "Bondstone", "Boost Mulch", "Booster Energy", "Bottle Cap", "Brave Mint", "Bright Powder", "Brittle Herb", "Bug Gem", "Bug Memory", "Bug Tera Shard", "Buginium Z", "Bugtite", "Burn Drive", "Burn Heal", "Calcium", "Calcium EX", "Calm Mint", "Cameruptite", "Candy Jar", "Carbos", "Carbos EX", "Card Key", "Careful Mint", "Casteliacone", "Catching Charm", "Cell Battery", "Chandelurite", "Charcoal", "Charizardite X", "Charizardite Y", "Charti Berry", "Cheri Berry", "Cherish Ball", "Chesnaughtite", "Chesto Berry", "Chilan Berry", "Chill Drive", "Chimechite", "Chipped Pot", "Choice Band", "Choice Dumpling", "Choice Scarf", "Choice Specs", "Chople Berry", "Claw Fossil", "Cleanse Tag", "Clear Amulet", "Clear Bell", "Clefablite", "Clever Feather", "Clever Mochi", "Clover Sweet", "Coba Berry", "Coin Case", "Colbur Berry", "Comet Shard", "Contest Pass", "Cornerstone Mask", "Cornn Berry", "Cover Fossil", "Covert Cloak", "Crabominite", "Cracked Pot", "Custap Berry", "DNA Splicers", "Damp Mulch", "Damp Rock", "Dark Crystal", "Dark Gem", "Dark Memory", "Dark Tera Shard", "Darkinium Z", "Darkness Scroll", "Darkranite", "Darktite", "Dawn Stone", "Decidium Z", "Deep Sea Scale", "Deep Sea Tooth", "Delphoxite", "Destiny Knot", "Devon Parts", "Devon Scope", "Diancite", "Dire Hit", "Dive Ball", "Dome Fossil", "Douse Drive", "Dowsing Machine", "Draco Plate", "Dragalgite", "Dragon Fang", "Dragon Gem", "Dragon Memory", "Dragon Scale", "Dragon Tera Shard", "Dragoninite", "Dragonium Z", "Dragotite", "Drampanite", "Dread Plate", "Dream Ball", "Dream Mail", "Dubious Disc", "Dull Herb", "Durin Berry", "Dusk Ball", "Dusk Stone", "Dynamax Band", "Dynamax Candy", "Dynite Ore", "Earth Plate", "Eelektrossite", "Eevium Z", "Eject Button", "Eject Pack", "Electirizer", "Electric Gem", "Electric Memory", "Electric Seed", "Electric Tera Shard", "Electrite", "Electrium Z", "Elixir", "Emboarite", "Energy Powder", "Energy Root", "Enigma Berry", "Eon Ticket", "Escape Rope", "Ether", "Everstone", "Eviolite", "Excadrite", "Exp. Candy L", "Exp. Candy M", "Exp. Candy S", "Exp. Candy XL", "Exp. Candy XS", "Exp. Charm", "Exp. Share", "Expert Belt", "Fab Mail", "Fairium Z", "Fairy Feather", "Fairy Gem", "Fairy Memory", "Fairy Tera Shard", "Fairytite", "Falinksite", "Fame Checker", "Fast Ball", "Feraligite", "Fighting Gem", "Fighting Memory", "Fighting Tera Shard", "Fightinium Z", "Fightite", "Figy Berry", "Fine Remedy", "Fire Gem", "Fire Memory", "Fire Stone", "Fire Tera Shard", "Firetite", "Firium Z", "Fist Plate", "Flame Orb", "Flame Plate", "Float Stone", "Floettite", "Flower Sweet", "Fluffy Tail", "Flying Gem", "Flying Memory", "Flying Tera Shard", "Flyingite", "Flyinium Z", "Focus Band", "Focus Sash", "Fossilized Bird", "Fossilized Dino", "Fossilized Drake", "Fossilized Fish", "Fresh Water", "Fresh-Start Mochi", "Friend Ball", "Froslassite", "Full Heal", "Full Incense", "Full Restore", "GS Ball", "Galarica Cuff", "Galarica Twig", "Galarica Wreath", "Galladite", "Ganlon Berry", "Garchompite", "Garchompite Z", "Gardevoirite", "Gengarite", "Genius Feather", "Genius Mochi", "Gentle Mint", "Ghost Gem", "Ghost Memory", "Ghost Tera Shard", "Ghostite", "Ghostium Z", "Gimmighoul Coin", "Glalitite", "Glimmering Charm", "Glimmoranite", "Glitter Mail", "Go-Goggles", "Gold Bottle Cap", "Gold Teeth", "Golisopite", "Golurkite", "Good Rod", "Gooey Mulch", "Goopy Herb", "Gracidea", "Grass Gem", "Grass Memory", "Grass Tera Shard", "Grassium Z", "Grasstite", "Grassy Seed", "Great Ball", "Green Apricorn", "Green Scarf", "Green Shard", "Greninjite", "Grepa Berry", "Grimy Herb", "Grip Claw", "Griseous Core", "Griseous Orb", "Ground Gem", "Ground Memory", "Ground Tera Shard", "Groundite", "Groundium Z", "Growth Mulch", "Guard Spec.", "Gyaradosite", "HM01 Cut", "HM02 Fly", "HM03 Surf", "HM04 Strength", "HM05 Flash", "HM06 Rock Smash", "HM07 Waterfall", "HM08 Dive", "HM09 Rock Climb", "HM10 Whirlpool", "HP Up", "HP Up EX", "Haban Berry", "Harbor Mail", "Hard Stone", "Hasty Mint", "Hawluchanite", "Heal Ball", "Heal Powder", "Health Feather", "Health Mochi", "Heart Scale", "Hearthflame Mask", "Heat Rock", "Heatranite", "Heavy Ball", "Heavy-Duty Boots", "Helix Fossil", "Heracronite", "Hondew Berry", "Honey", "Houndoominite", "Hyper Potion", "Iapapa Berry", "Ice Gem", "Ice Heal", "Ice Memory", "Ice Stone", "Ice Tera Shard", "Icetite", "Icicle Plate", "Icium Z", "Icy Rock", "Impish Mint", "Incinium Z", "Infinite Candy", "Infinite Repel", "Insect Plate", "Iron", "Iron Ball", "Iron EX", "Iron Plate", "Jaboca Berry", "Jade Orb", "Jaw Fossil", "Jolly Mint", "Jubilife Muffin", "Kangaskhanite", "Kasib Berry", "Kebia Berry", "Kee Berry", "Kelpsy Berry", "Key to Room 1", "Key to Room 2", "Key to Room 4", "Key to Room 6", "King's Rock", "Kommonium Z", "Lagging Tail", "Lansat Berry", "Latiasite", "Latiosite", "Lava Cookie", "Lax Incense", "Lax Mint", "Leader's Crest", "Leaf Stone", "Leek", "Leftovers", "Lemonade", "Leppa Berry", "Letter", "Level Ball", "Liechi Berry", "Life Orb", "Lift Key", "Light Ball", "Light Clay", "Linking Cord", "Loaded Dice", "Lonely Mint", "Lopunnite", "Lost Item", "Love Ball", "Love Sweet", "Lucarionite", "Lucarionite Z", "Luck Incense", "Lucky Egg", "Lucky Punch", "Lum Berry", "Luminous Moss", "Lumiose Galette", "Lunalium Z", "Lure", "Lure Ball", "Lustrous Globe", "Lustrous Orb", "Luxury Ball", "Lycanium Z", "Mach Bike", "Machine Part", "Macho Brace", "Magearnite", "Magma Emblem", "Magmarizer", "Magnet", "Mago Berry", "Magost Berry", "Malamarite", "Malicious Armor", "Manectite", "Maranga Berry", "Marshadium Z", "Master Ball", "Masterpiece Teacup", "Mawilite", "Max Elixir", "Max Ether", "Max Honey", "Max Lure", "Max Mushrooms", "Max Potion", "Max Repel", "Max Revive", "Meadow Plate", "Mech Mail", "Medichamite", "Mega Ring", "Meganiumite", "Mental Herb", "Meowscaradite", "Meowsticite", "Metagrossite", "Metal Alloy", "Metal Coat", "Metal Powder", "Meteorite", "Metronome", "Mewnium Z", "Mewtwonite X", "Mewtwonite Y", "Micle Berry", "Mild Mint", "Mimikium Z", "Mind Plate", "Miracle Seed", "Mirror Herb", "Misty Seed", "Modest Mint", "Moomoo Milk", "Moon Ball", "Moon Stone", "Muscle Band", "Muscle Feather", "Muscle Mochi", "Mystery Egg", "Mystic Ticket", "Mystic Water", "N-Lunarizer", "N-Solarizer", "Naive Mint", "Nanab Berry", "Naughty Mint", "Nest Ball", "Net Ball", "Never-Melt Ice", "Nomel Berry", "Normal Gem", "Normal Tera Shard", "Normalite", "Normalium Z", "Nugget", "Occa Berry", "Odd Incense", "Odd Keystone", "Old Amber", "Old Gateau", "Old Rod", "Old Sea Map", "Oran Berry", "Orange Mail", "Oval Charm", "Oval Stone", "PP Max", "PP Up", "Pamtre Berry", "Paralyze Heal", "Parcel", "Park Ball", "Pass", "Passho Berry", "Payapa Berry", "Pearl", "Pearl String", "Peat Block", "Pecha Berry", "Persim Berry", "Petaya Berry", "Pewter Crunchies", "Pidgeotite", "Pikanium Z", "Pikashunium Z", "Pinap Berry", "Pink Apricorn", "Pink Nectar", "Pink Scarf", "Pinsirite", "Pixie Plate", "Plume Fossil", "Poison Barb", "Poison Gem", "Poison Memory", "Poison Tera Shard", "Poisonium Z", "Poisontite", "Poké Ball", "Poké Doll", "Poké Flute", "Poké Radar", "Poké Toy", "Pokéshi Doll", "Pomeg Berry", "Portable PC", "Potion", "Powder Jar", "Power Anklet", "Power Band", "Power Belt", "Power Bracer", "Power Herb", "Power Lens", "Power Weight", "Premier Ball", "Pretty Feather", "Primarinite", "Primarium Z", "Prism Scale", "Prison Bottle", "Protective Pads", "Protector", "Protein", "Protein EX", "Psychic Gem", "Psychic Memory", "Psychic Seed", "Psychic Tera Shard", "Psychite", "Psychium Z", "Punching Glove", "Pure Incense", "Purple Nectar", "Pyroarite", "Qualot Berry", "Quick Ball", "Quick Claw", "Quick Powder", "Quiet Mint", "Rabuta Berry", "Radio", "Rage Candy Bar", "Raichunite X", "Raichunite Y", "Rainbow Pass", "Rainbow Wing", "Rare Bone", "Rare Candy", "Rash Mint", "Rawst Berry", "Razor Claw", "Razor Fang", "Razz Berry", "Reaper Cloth", "Red Apricorn", "Red Card", "Red Flute", "Red Nectar", "Red Orb", "Red Scale", "Red Scarf", "Red Shard", "Reins of Unity", "Relaxed Mint", "Relic Band", "Relic Copper", "Relic Crown", "Relic Gold", "Relic Silver", "Relic Statue", "Relic Vase", "Remedy", "Repeat Ball", "Repel", "Resist Feather", "Resist Mochi", "Retro Mail", "Reveal Glass", "Reverse Candy", "Revival Herb", "Revive", "Ribbon Sweet", "Rich Mulch", "Rindo Berry", "Ring Target", "Rock Gem", "Rock Incense", "Rock Memory", "Rock Tera Shard", "Rockium Z", "Rocktite", "Rocky Helmet", "Room Service", "Root Fossil", "Rose Incense", "Roseli Berry", "Rotom Catalog", "Rowap Berry", "Ruby", "Rusted Shield", "Rusted Sword", "S.S. Ticket", "Sablenite", "Sachet", "Sacred Ash", "Safari Ball", "Safety Goggles", "Sail Fossil", "Salac Berry", "Salamencite", "Sapphire", "Sassy Mint", "Scanner", "Sceptilite", "Scizorite", "Scolipite", "Scope Lens", "Scovillainite", "Scraftinite", "Sea Incense", "Secret Key", "Secret Potion", "Serious Mint", "Shadow Mail", "Shalour Sable", "Sharp Beak", "Sharpedonite", "Shed Shell", "Shell Bell", "Shiny Charm", "Shiny Genome", "Shiny Stone", "Shoal Salt", "Shoal Shell", "Shock Drive", "Shuca Berry", "Silk Scarf", "Silph Scope", "Silver Powder", "Silver Wing", "Sitrus Berry", "Skarmorite", "Skull Fossil", "Sky Plate", "Slowbronite", "Smoke Ball", "Smooth Rock", "Snorlium Z", "Snowball", "Soda Pop", "Soft Sand", "Soggy Herb", "Solganium Z", "Soot Sack", "Soothe Bell", "Soul Dew", "Spell Tag", "Spelon Berry", "Splash Plate", "Spooky Plate", "Sport Ball", "Squirtbottle", "Stable Mulch", "Star Piece", "Star Sweet", "Staraptite", "Stardust", "Starf Berry", "Starminite", "Steel Gem", "Steel Memory", "Steel Tera Shard", "Steelium Z", "Steelixite", "Steeltite", "Stellar Tera Shard", "Sticky Barb", "Stone Plate", "Storage Key", "Strange Ball", "Strange Souvenir", "Strawberry Sweet", "Sun Stone", "Super Lure", "Super Potion", "Super Repel", "Super Rod", "Superb Remedy", "Surprise Mulch", "Swampertite", "Swap Snack", "Sweet Apple", "Sweet Heart", "Swift Feather", "Swift Mochi", "Syrupy Apple", "TM Case", "TM Hidden Power", "TM01 Work Up", "TM02 Dragon Claw", "TM03 Psyshock", "TM04 Calm Mind", "TM05 Hex", "TM06 Toxic", "TM07 Hail", "TM08 Bulk Up", "TM09 Venoshock", "TM100 Ice Punch", "TM11 Sunny Day", "TM12 Taunt", "TM13 Ice Beam", "TM14 Blizzard", "TM15 Hyper Beam", "TM16 Light Screen", "TM17 Protect", "TM18 Rain Dance", "TM19 Roost", "TM20 Safeguard", "TM21 Frustration", "TM22 Solar Beam", "TM23 Smack Down", "TM24 Thunderbolt", "TM25 Thunder", "TM26 Earthquake", "TM27 Return", "TM28 Leech Life", "TM29 Psychic", "TM30 Shadow Ball", "TM31 Brick Break", "TM32 Double Team", "TM33 Reflect", "TM34 Sludge Wave", "TM35 Flamethrower", "TM36 Sludge Bomb", "TM37 Sandstorm", "TM38 Fire Blast", "TM39 Rock Tomb", "TM40 Aerial Ace", "TM41 Torment", "TM42 Facade", "TM43 Flame Charge", "TM44 Rest", "TM45 Attract", "TM46 Thief", "TM47 Low Sweep", "TM48 Round", "TM49 Echoed Voice", "TM50 Overheat", "TM51 Steel Wing", "TM52 Focus Blast", "TM53 Energy Ball", "TM54 False Swipe", "TM55 Scald", "TM56 Fling", "TM57 Charge Beam", "TM58 Sky Drop", "TM59 Brutal Swing", "TM60 Trailblaze", "TM61 Will-o-Wisp", "TM62 Acrobatics", "TM63 Thunder Punch", "TM64 Draining Kiss", "TM65 Shadow Claw", "TM66 Payback", "TM67 Smart Strike", "TM68 Giga Impact", "TM69 Fire Punch", "TM70 Aurora Veil", "TM71 Stone Edge", "TM72 Volt Switch", "TM73 Thunder Wave", "TM74 Gyro Ball", "TM75 Swords Dance", "TM76 Hone Claws", "TM77 Dig", "TM78 Bulldoze", "TM79 Frost Breath", "TM80 Rock Slide", "TM81 X-Scissor", "TM82 Dragon Tail", "TM83 Infestation", "TM84 Poison Jab", "TM85 Drain Punch", "TM86 Grass Knot", "TM87 Giga Drain", "TM88 Water Pulse", "TM89 U-Turn", "TM90 Substitute", "TM91 Flash Cannon", "TM92 Trick Room", "TM93 Wild Charge", "TM94 Ice Spinner", "TM95 Snarl", "TM96 Nature Power", "TM97 Dark Pulse", "TM98 Play Rough", "TM99 Dazzling Gleam", "Tamato Berry", "Tanga Berry", "Tapunium Z", "Tart Apple", "Tatsugirinite", "Tea", "Teachy TV", "Tera Orb", "Terrain Extender", "Thick Club", "Throat Spray", "Thunder Stone", "Tidal Bell", "Timer Ball", "Timid Mint", "Tiny Bamboo Shoot", "Tiny Mushroom", "Town Map", "Toxic Orb", "Toxic Plate", "Tri-Pass", "Tropic Mail", "Twice-Spiced Radish", "Twisted Spoon", "Typhlosionite", "Tyranitarite", "Ultra Ball", "Ultranecrozium Z", "Underground Key", "Unremarkable Teacup", "Upgrade", "Utility Umbrella", "Venusaurite", "Victreebelite", "Vs. Seeker", "Wacan Berry", "Water Gem", "Water Memory", "Water Scroll", "Water Stone", "Water Tera Shard", "Waterium Z", "Watertite", "Watmel Berry", "Wave Incense", "Wave Mail", "Weakness Policy", "Wellspring Mask", "Wepear Berry", "Whipped Dream", "White Apricorn", "White Flute", "White Herb", "Wide Lens", "Wiki Berry", "Wise Glasses", "Wishing Piece", "Withered Herb", "Wood Mail", "X Accuracy", "X Attack", "X Defense", "X Sp. Atk", "X Sp. Def", "X Speed", "Yache Berry", "Yellow Apricorn", "Yellow Flute", "Yellow Nectar", "Yellow Scarf", "Yellow Shard", "Z-Power Ring", "Zap Plate", "Zeraorite", "Zeromin", "Zinc", "Zinc EX", "Zoom Lens", "Zygarde Cube", "Zygardite", "{POKEBLOCK} Case"].filter(function (n) { return SV.indexOf(n) < 0; }));
exports.ITEMS = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Items = (function () {
    function Items(gen) {
        this.gen = gen;
    }
    Items.prototype.get = function (id) {
        return ITEMS_BY_ID[this.gen][id];
    };
    Items.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = ITEMS_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Items;
}());
exports.Items = Items;
var Item = (function () {
    function Item(name, gen) {
        this.kind = 'Item';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        this.megaEvolves = exports.MEGA_STONES[name];
        var berry = BERRIES[name];
        if (berry) {
            this.isBerry = true;
            this.naturalGift = {
                basePower: gen < 6 ? berry.p - 20 : berry.p,
                type: berry.t
            };
        }
    }
    return Item;
}());
var ITEMS_BY_ID = [];
var gen = 0;
try {
    for (var ITEMS_1 = __values(exports.ITEMS), ITEMS_1_1 = ITEMS_1.next(); !ITEMS_1_1.done; ITEMS_1_1 = ITEMS_1.next()) {
        var items = ITEMS_1_1.value;
        var map = {};
        try {
            for (var items_1 = (e_2 = void 0, __values(items)), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                var i = new Item(item, gen);
                map[i.id] = i;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_b = items_1["return"])) _b.call(items_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        ITEMS_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (ITEMS_1_1 && !ITEMS_1_1.done && (_a = ITEMS_1["return"])) _a.call(ITEMS_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=items.js.map