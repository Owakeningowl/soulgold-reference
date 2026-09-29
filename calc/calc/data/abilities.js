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
var GSC = [];
var ADV = [
    'Air Lock',
    'Arena Trap',
    'Battle Armor',
    'Blaze',
    'Chlorophyll',
    'Clear Body',
    'Cloud Nine',
    'Color Change',
    'Compound Eyes',
    'Cute Charm',
    'Drizzle',
    'Damp',
    'Drought',
    'Early Bird',
    'Effect Spore',
    'Flame Body',
    'Flash Fire',
    'Forecast',
    'Guts',
    'Huge Power',
    'Hustle',
    'Hyper Cutter',
    'Illuminate',
    'Immunity',
    'Inner Focus',
    'Insomnia',
    'Intimidate',
    'Keen Eye',
    'Levitate',
    'Lightning Rod',
    'Limber',
    'Liquid Ooze',
    'Magma Armor',
    'Magnet Pull',
    'Marvel Scale',
    'Minus',
    'Natural Cure',
    'Oblivious',
    'Overgrow',
    'Own Tempo',
    'Pickup',
    'Plus',
    'Poison Point',
    'Pressure',
    'Pure Power',
    'Rain Dish',
    'Rock Head',
    'Rough Skin',
    'Run Away',
    'Sand Stream',
    'Sand Veil',
    'Serene Grace',
    'Shadow Tag',
    'Shed Skin',
    'Shell Armor',
    'Shield Dust',
    'Soundproof',
    'Speed Boost',
    'Static',
    'Stench',
    'Sticky Hold',
    'Sturdy',
    'Suction Cups',
    'Swarm',
    'Swift Swim',
    'Synchronize',
    'Thick Fat',
    'Torrent',
    'Trace',
    'Truant',
    'Vital Spirit',
    'Volt Absorb',
    'Water Absorb',
    'Water Veil',
    'White Smoke',
    'Wonder Guard',
];
var DPP = ADV.concat([
    'Adaptability',
    'Aftermath',
    'Anger Point',
    'Anticipation',
    'Bad Dreams',
    'Download',
    'Dry Skin',
    'Filter',
    'Flower Gift',
    'Forewarn',
    'Frisk',
    'Gluttony',
    'Heatproof',
    'Honey Gather',
    'Hydration',
    'Ice Body',
    'Iron Fist',
    'Klutz',
    'Leaf Guard',
    'Magic Guard',
    'Mold Breaker',
    'Motor Drive',
    'Mountaineer',
    'Multitype',
    'No Guard',
    'Normalize',
    'Persistent',
    'Poison Heal',
    'Quick Feet',
    'Rebound',
    'Reckless',
    'Rivalry',
    'Scrappy',
    'Simple',
    'Skill Link',
    'Slow Start',
    'Sniper',
    'Snow Cloak',
    'Snow Warning',
    'Solar Power',
    'Solid Rock',
    'Stall',
    'Steadfast',
    'Storm Drain',
    'Super Luck',
    'Tangled Feet',
    'Technician',
    'Tinted Lens',
    'Unaware',
    'Unburden',
]);
var BW = DPP.concat([
    'Analytic',
    'Big Pecks',
    'Contrary',
    'Cursed Body',
    'Defeatist',
    'Defiant',
    'Flare Boost',
    'Friend Guard',
    'Harvest',
    'Healer',
    'Heavy Metal',
    'Illusion',
    'Imposter',
    'Infiltrator',
    'Iron Barbs',
    'Light Metal',
    'Justified',
    'Magic Bounce',
    'Moody',
    'Moxie',
    'Multiscale',
    'Mummy',
    'Overcoat',
    'Pickpocket',
    'Poison Touch',
    'Prankster',
    'Rattled',
    'Regenerator',
    'Sand Force',
    'Sand Rush',
    'Sap Sipper',
    'Sheer Force',
    'Telepathy',
    'Teravolt',
    'Toxic Boost',
    'Turboblaze',
    'Unnerve',
    'Victory Star',
    'Weak Armor',
    'Wonder Skin',
    'Zen Mode',
]);
var XY = BW.concat([
    'Aerilate',
    'Aura Break',
    'Aroma Veil',
    'Bulletproof',
    'Cheek Pouch',
    'Competitive',
    'Dark Aura',
    'Delta Stream',
    'Desolate Land',
    'Fairy Aura',
    'Flower Veil',
    'Fur Coat',
    'Gale Wings',
    'Gooey',
    'Grass Pelt',
    'Magician',
    'Mega Launcher',
    'Parental Bond',
    'Pixilate',
    'Primordial Sea',
    'Protean',
    'Refrigerate',
    'Stance Change',
    'Strong Jaw',
    'Sweet Veil',
    'Symbiosis',
    'Tough Claws',
]);
var SM = XY.concat([
    'Battery',
    'Battle Bond',
    'Beast Boost',
    'Berserk',
    'Comatose',
    'Corrosion',
    'Dancer',
    'Dazzling',
    'Disguise',
    'Electric Surge',
    'Emergency Exit',
    'Fluffy',
    'Full Metal Body',
    'Galvanize',
    'Grassy Surge',
    'Innards Out',
    'Liquid Voice',
    'Long Reach',
    'Merciless',
    'Misty Surge',
    'Neuroforce',
    'Power Construct',
    'Power of Alchemy',
    'Prism Armor',
    'Psychic Surge',
    'Queenly Majesty',
    'RKS System',
    'Receiver',
    'Schooling',
    'Shadow Shield',
    'Shields Down',
    'Slush Rush',
    'Stamina',
    'Stakeout',
    'Steelworker',
    'Soul-Heart',
    'Surge Surfer',
    'Tangling Hair',
    'Triage',
    'Water Bubble',
    'Water Compaction',
    'Wimp Out',
]);
var SS = SM.concat([
    'As One (Glastrier)',
    'As One (Spectrier)',
    'Ball Fetch',
    'Chilling Neigh',
    'Cotton Down',
    'Curious Medicine',
    'Dauntless Shield',
    'Dragon\'s Maw',
    'Gorilla Tactics',
    'Grim Neigh',
    'Gulp Missile',
    'Hunger Switch',
    'Ice Face',
    'Ice Scales',
    'Intrepid Sword',
    'Libero',
    'Mimicry',
    'Mirror Armor',
    'Neutralizing Gas',
    'Pastel Veil',
    'Perish Body',
    'Power Spot',
    'Propeller Tail',
    'Punk Rock',
    'Quick Draw',
    'Ripen',
    'Sand Spit',
    'Screen Cleaner',
    'Stalwart',
    'Steam Engine',
    'Steely Spirit',
    'Transistor',
    'Unseen Fist',
    'Wandering Spirit',
]);
var SV = SS.concat([
    'Anger Shell',
    'Armor Tail',
    'Beads of Ruin',
    'Commander',
    'Costar',
    'Cud Chew',
    'Earth Eater',
    'Electromorphosis',
    'Embody Aspect (Cornerstone)',
    'Embody Aspect (Heartflame)',
    'Embody Aspect (Teal)',
    'Embody Aspect (Wellspring)',
    'Good as Gold',
    'Guard Dog',
    'Hadron Engine',
    'Hospitality',
    'Lingering Aroma',
    'Mind\'s Eye',
    'Mycelium Might',
    'Opportunist',
    'Orichalcum Pulse',
    'Poison Puppeteer',
    'Protosynthesis',
    'Purifying Salt',
    'Quark Drive',
    'Rocky Payload',
    'Seed Sower',
    'Sharpness',
    'Supersweet Syrup',
    'Supreme Overlord',
    'Sword of Ruin',
    'Tablets of Ruin',
    'Tera Shell',
    'Tera Shift',
    'Teraform Zero',
    'Thermal Exchange',
    'Toxic Chain',
    'Toxic Debris',
    'Vessel of Ruin',
    'Well-Baked Body',
    'Wind Power',
    'Wind Rider',
    'Zero to Hero',
]);
// Zenith Gold: the game's abilities (innates included)
SV = SV.concat(["Abyssal Veil", "Acidic", "Adaptability", "Adrenaline", "Aegis", "Aerilate", "Aftermath", "Air Lock", "Allseeing Idol", "Analytic", "Anger Point", "Anger Shell", "Anticipation", "Aquate", "Arctic Aura", "Arena Trap", "Armor Tail", "Aroma Veil", "As One", "Ash Assets", "Aura Break", "Aura Guard", "Aura Shield", "Backdraft", "Bad Dreams", "Ball Fetch", "Battery", "Battle Armor", "Battle Bond", "Battle Fervor", "Beads of Ruin", "Beast Boost", "Berserk", "Big Pecks", "Blaze", "Blazing Sun", "Blitz", "Blizzard Heart", "Bloodlust", "Brand of Torment", "Breaking", "Brimstone", "Bull Rush", "Bulletproof", "Burrower", "Channel Earth", "Cheek Pouch", "Chilling Neigh", "Chlorophyll", "Clear Body", "Cloud Nine", "Coalwalker", "Color Change", "Colossal", "Comatose", "Commander", "Competitive", "Compound Eyes", "Consume", "Contrary", "Controlled Burn", "Corrosion", "Cosmic Form", "Costar", "Cotton Down", "Crossfire", "Cud Chew", "Curious Medicine", "Cursed Body", "Cute Charm", "Damp", "Dancer", "Dark Aura", "Dauntless Shield", "Dazzling", "Debilitate", "Defeatist", "Defiant", "Delta Stream", "Desolate Land", "Desperado", "Disguise", "Disquiet", "Diver", "Download", "Draconate", "Draconic Sense", "Dragon Soul", "Dragon's Maw", "Dragonize", "Dreadate", "Drizzle", "Drought", "Dry Skin", "Dual Strike", "Dust Devil", "Early Bird", "Earth Eater", "Earth Soul", "Earthbound", "Earthen Rush", "Echo Chamber", "Echoing", "Eelevate", "Effect Spore", "Electric Surge", "Electromagnetism", "Electromorphosis", "Elemental Fist", "Elementalist", "Embody Aspect", "Emergency Exit", "Enigma", "Fae Heart", "Fae Soul", "Faintrattle", "Fairy Aura", "Fighter Soul", "Fightilate", "Fill Void", "Filter", "Fire Mane", "First Strike", "Flame Body", "Flame Soul", "Flameburst", "Flamilate", "Flare", "Flare Boost", "Flash Fire", "Flier", "Florate", "Flower Gift", "Flower Veil", "Fluffy", "Force Return", "Forecast", "Forewarn", "Friend Guard", "Frisk", "Frost Force", "Frost Nova", "Frost Snap", "Frost Soul", "Full Metal Body", "Fur Coat", "Gale Wings", "Galvanize", "Gang Up", "Generalist", "Glacial", "Glass Cannon", "Gluttony", "Good as Gold", "Gooey", "Gorilla Tactics", "Grass Pelt", "Grassy Surge", "Gravity Well", "Grim Neigh", "Guard Dog", "Guard Stance", "Guardian", "Gulp Missile", "Guts", "Hadron Engine", "Harvest", "Haunted", "Haunting", "Healer", "Heat Rush", "Heatproof", "Heatstorm", "Heavy Metal", "Hive Force", "Hive Soul", "Honey Gather", "Horse Council", "Hospitality", "Hot Tag", "Huge Power", "Hunger Switch", "Hunter", "Hustle", "Hydration", "Hyper Cutter", "Ice Body", "Ice Face", "Ice Scales", "Illuminate", "Illusion", "Immovable", "Immunity", "Imposter", "Indomitable", "Infernal", "Infiltrator", "Inky", "Innards Out", "Inner Focus", "Insomnia", "Intimidate", "Intrepid Sword", "Inversion", "Iron Barbs", "Iron Fist", "Jade Bloom", "Justified", "Keen Eye", "Klutz", "Last Stand", "Lava Surfer", "Leaf Guard", "Levitate", "Libero", "Lifesteal", "Lifetree Soul", "Light Metal", "Lightning Rod", "Like a Dragon", "Limber", "Lingering Aroma", "Liquid Ooze", "Liquid Voice", "Long Reach", "Lunar Cycle", "Magic Bounce", "Magic Guard", "Magician", "Magma Armor", "Magnet Pull", "Magnify Field", "Maim and Mend", "Malice Aura", "Maneuverability", "Martyr", "Marvel Scale", "Mega Launcher", "Mega Sol", "Mending", "Mental Surge", "Merciless", "Mimicry", "Mind Float", "Mind Force", "Mind Soul", "Mind's Eye", "Minus", "Mirage", "Mirror Armor", "Misty Surge", "Mold Breaker", "Momentum", "Monsoon", "Moody", "Motor Drive", "Moxie", "Mudslide", "Multiscale", "Multitype", "Mummy", "Mycelium Might", "Mystic Force", "Natural Cure", "Neuroforce", "Neutralizing Gas", "Night Soul", "Nightfall", "Nightstalker", "Nine Lives", "No Guard", "Normalize", "Null Space", "Oblivious", "Ogre Force", "Omega", "Opportunist", "Orichalcum Pulse", "Overclock", "Overcoat", "Overgrow", "Overload", "Own Tempo", "Pack Leader", "Parental Bond", "Parrying", "Pastel Veil", "Pendulum", "Perish Body", "Permafrost", "Phalanx", "Phantom Soul", "Phantom Step", "Pickpocket", "Pickup", "Pixilate", "Plaguetouch", "Plain Soul", "Plantation", "Plasma Surge", "Plus", "Poison Heal", "Poison Point", "Poison Puppeteer", "Poison Touch", "Polarity Shift", "Power Construct", "Power Of Alchemy", "Power Shift", "Power Spot", "Prankster", "Prepared", "Pressure", "Primordial Sea", "Prism Armor", "Propeller Tail", "Protean", "Protosynthesis", "Psychate", "Psychic Surge", "Punk Rock", "Pure Power", "Purifying Salt", "Quark Drive", "Queenly Majesty", "Quick Draw", "Quick Feet", "Quick Forge", "RKS System", "Rain Dish", "Rally", "Rattled", "Reactive", "Ready Stance", "Reborn", "Receiver", "Reckless", "Reef Warden", "Refrigerate", "Regenerator", "Rejuvenation", "Resolute Guard", "Resonance", "Restoring", "Ripen", "Ritualist", "Rivalry", "Rock Head", "Rock and Stone", "Rockate", "Rockstorm", "Rocky Payload", "Rolling Stones", "Rooted", "Rough Skin", "Run Away", "Sand Force", "Sand Rush", "Sand Spit", "Sand Stream", "Sand Veil", "Sandshield", "Sap Sipper", "Schooling", "Scrappy", "Screen Cleaner", "Sea Soul", "Seabound", "Seed Sower", "Seer", "Serene Grace", "Shadow Shield", "Shadow Tag", "Shardplate", "Sharpness", "Shed Skin", "Sheer Force", "Shell Armor", "Shield Dust", "Shields Down", "Shockwiring", "Showtime", "Siegebreaker", "Simple", "Skill Link", "Skip Step", "Slow Start", "Slush Rush", "Smouldering", "Sniper", "Snow Cloak", "Snow Warning", "Solar Armor", "Solar Panel", "Solar Power", "Solid Rock", "Solidify", "Soothing", "Soul-Heart", "Soundproof", "Spacetime Rift", "Spectral", "Spectral Drain", "Spectral Force", "Spectrate", "Speed Boost", "Spicy Spray", "Splinter", "Sprite shift", "Stakeout", "Stall", "Stalwart", "Stamina", "Stance Change", "Static", "Static Burst", "Steadfast", "Steam Engine", "Steel Feet", "Steel Soul", "Steelate", "Steelworker", "Steely Spirit", "Stench", "Sticky Hold", "Stone Face", "Stone Sentinel", "Stone Soul", "Storm Drain", "Stormrider", "Strong Jaw", "Sturdy", "Stygian", "Suction Cups", "Sunhardened", "Super Luck", "Supersweet Syrup", "Supreme Overlord", "Surge Surfer", "Swarm", "Swarm Instinct", "Swarmate", "Sweet Veil", "Swift Swim", "Sword of Ruin", "Symbiosis", "Synchronize", "Tablets of Ruin", "Tangled Feet", "Tangling", "Tangling Hair", "Technician", "Telepathy", "Tempo", "Tera Shell", "Tera Shift", "Teraform Zero", "Teravolt", "Terrate", "Tether", "Thermal Exchange", "Thick Fat", "Think Ahead", "Thunder Soul", "Tidal Deity", "Tidal Reflex", "Time Spiral", "Tinted Lens", "Tireless", "Titan Grip", "Torrent", "Tough Claws", "Toxic Boost", "Toxic Chain", "Toxic Core", "Toxic Debris", "Toxic Reflex", "Trace", "Transistor", "Transmute", "Triage", "Truant", "True Grit", "Trueshot Aura", "Turboblaze", "Twin Stars", "Unaware", "Unburden", "Uncanny", "Underdog", "Unleashed", "Unnerve", "Unseen Fist", "Unstoppable", "Valkyrie", "Venom Soul", "Venomate", "Verdant Gale", "Verdant Soul", "Vessel of Ruin", "Victory Star", "Vital Spirit", "Voidtouch", "Volcano Howl", "Volt Absorb", "Wandering Spirit", "Warrior Spirit", "Water Absorb", "Water Bubble", "Water Compaction", "Water Veil", "Weak Armor", "Well-Baked Body", "White Smoke", "Wimp Out", "Wind Chime", "Wind Force", "Wind Power", "Wind Rider", "Wind Soul", "Windburst", "Windcaller", "Wishmaker", "Wonder Guard", "Wonder Skin", "Zen Mode", "Zero to Hero"].filter(function (n) { return SV.indexOf(n) < 0; }));
exports.ABILITIES = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Abilities = (function () {
    function Abilities(gen) {
        this.gen = gen;
    }
    Abilities.prototype.get = function (id) {
        return ABILITIES_BY_ID[this.gen][id];
    };
    Abilities.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = ABILITIES_BY_ID[this.gen];
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
    return Abilities;
}());
exports.Abilities = Abilities;
var Ability = (function () {
    function Ability(name) {
        this.kind = 'Ability';
        this.id = (0, util_1.toID)(name);
        this.name = name;
    }
    return Ability;
}());
var ABILITIES_BY_ID = [];
try {
    for (var ABILITIES_1 = __values(exports.ABILITIES), ABILITIES_1_1 = ABILITIES_1.next(); !ABILITIES_1_1.done; ABILITIES_1_1 = ABILITIES_1.next()) {
        var abilities = ABILITIES_1_1.value;
        var map = {};
        try {
            for (var abilities_1 = (e_2 = void 0, __values(abilities)), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
                var ability = abilities_1_1.value;
                var a = new Ability(ability);
                map[a.id] = a;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (abilities_1_1 && !abilities_1_1.done && (_b = abilities_1["return"])) _b.call(abilities_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        ABILITIES_BY_ID.push(map);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (ABILITIES_1_1 && !ABILITIES_1_1.done && (_a = ABILITIES_1["return"])) _a.call(ABILITIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=abilities.js.map