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
var e_1, _a;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    Abra: {
        types: ['Psychic'],
        bs: { hp: 25, at: 20, df: 15, sp: 90, sl: 105 },
        weightkg: 19.5,
        nfe: true
    },
    Aerodactyl: {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 105, df: 65, sp: 130, sl: 60 },
        weightkg: 59
    },
    Alakazam: {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 45, sp: 120, sl: 135 },
        weightkg: 48
    },
    Arbok: { types: ['Poison'], bs: { hp: 60, at: 85, df: 69, sp: 80, sl: 65 }, weightkg: 65 },
    Arcanine: {
        types: ['Fire'],
        bs: { hp: 90, at: 110, df: 80, sp: 95, sl: 80 },
        weightkg: 155
    },
    Articuno: {
        types: ['Ice', 'Flying'],
        bs: { hp: 90, at: 85, df: 100, sp: 85, sl: 125 },
        weightkg: 55.4
    },
    Beedrill: {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 80, df: 40, sp: 75, sl: 45 },
        weightkg: 29.5
    },
    Bellsprout: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 75, df: 35, sp: 40, sl: 70 },
        weightkg: 4,
        nfe: true
    },
    Blastoise: {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sp: 78, sl: 85 },
        weightkg: 85.5
    },
    Bulbasaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 49, df: 49, sp: 45, sl: 65 },
        weightkg: 6.9,
        nfe: true
    },
    Butterfree: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sp: 70, sl: 80 },
        weightkg: 32
    },
    Caterpie: {
        types: ['Bug'],
        bs: { hp: 45, at: 30, df: 35, sp: 45, sl: 20 },
        weightkg: 2.9,
        nfe: true
    },
    Chansey: {
        types: ['Normal'],
        bs: { hp: 250, at: 5, df: 5, sp: 50, sl: 105 },
        weightkg: 34.6
    },
    Charizard: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sp: 100, sl: 85 },
        weightkg: 90.5
    },
    Charmander: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sp: 65, sl: 50 },
        weightkg: 8.5,
        nfe: true
    },
    Charmeleon: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sp: 80, sl: 65 },
        weightkg: 19,
        nfe: true
    },
    Clefable: { types: ['Normal'], bs: { hp: 95, at: 70, df: 73, sp: 60, sl: 85 }, weightkg: 40 },
    Clefairy: {
        types: ['Normal'],
        bs: { hp: 70, at: 45, df: 48, sp: 35, sl: 60 },
        weightkg: 7.5,
        nfe: true
    },
    Cloyster: {
        types: ['Water', 'Ice'],
        bs: { hp: 50, at: 95, df: 180, sp: 70, sl: 85 },
        weightkg: 132.5
    },
    Cubone: {
        types: ['Ground'],
        bs: { hp: 50, at: 50, df: 95, sp: 35, sl: 40 },
        weightkg: 6.5,
        nfe: true
    },
    Dewgong: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 70, df: 80, sp: 70, sl: 95 },
        weightkg: 120
    },
    Diglett: {
        types: ['Ground'],
        bs: { hp: 10, at: 55, df: 25, sp: 95, sl: 45 },
        weightkg: 0.8,
        nfe: true
    },
    Ditto: { types: ['Normal'], bs: { hp: 48, at: 48, df: 48, sp: 48, sl: 48 }, weightkg: 4 },
    Dodrio: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 110, df: 70, sp: 100, sl: 60 },
        weightkg: 85.2
    },
    Doduo: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 85, df: 45, sp: 75, sl: 35 },
        weightkg: 39.2,
        nfe: true
    },
    Dragonair: {
        types: ['Dragon'],
        bs: { hp: 61, at: 84, df: 65, sp: 70, sl: 70 },
        weightkg: 16.5,
        nfe: true
    },
    Dragonite: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 91, at: 134, df: 95, sp: 80, sl: 100 },
        weightkg: 210
    },
    Dratini: {
        types: ['Dragon'],
        bs: { hp: 41, at: 64, df: 45, sp: 50, sl: 50 },
        weightkg: 3.3,
        nfe: true
    },
    Drowzee: {
        types: ['Psychic'],
        bs: { hp: 60, at: 48, df: 45, sp: 42, sl: 90 },
        weightkg: 32.4,
        nfe: true
    },
    Dugtrio: {
        types: ['Ground'],
        bs: { hp: 35, at: 80, df: 50, sp: 120, sl: 70 },
        weightkg: 33.3
    },
    Eevee: {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sp: 55, sl: 65 },
        weightkg: 6.5,
        nfe: true
    },
    Ekans: {
        types: ['Poison'],
        bs: { hp: 35, at: 60, df: 44, sp: 55, sl: 40 },
        weightkg: 6.9,
        nfe: true
    },
    Electabuzz: {
        types: ['Electric'],
        bs: { hp: 65, at: 83, df: 57, sp: 105, sl: 85 },
        weightkg: 30
    },
    Electrode: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 70, sp: 140, sl: 80 },
        weightkg: 66.6
    },
    Exeggcute: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 60, at: 40, df: 80, sp: 40, sl: 60 },
        weightkg: 2.5,
        nfe: true
    },
    Exeggutor: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 95, at: 95, df: 85, sp: 55, sl: 125 },
        weightkg: 120
    },
    'Farfetch\u2019d': {
        types: ['Normal', 'Flying'],
        bs: { hp: 52, at: 65, df: 55, sp: 60, sl: 58 },
        weightkg: 15
    },
    Fearow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 65, at: 90, df: 65, sp: 100, sl: 61 },
        weightkg: 38
    },
    Flareon: { types: ['Fire'], bs: { hp: 65, at: 130, df: 60, sp: 65, sl: 110 }, weightkg: 25 },
    Gastly: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 30, at: 35, df: 30, sp: 80, sl: 100 },
        weightkg: 0.1,
        nfe: true
    },
    Gengar: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sp: 110, sl: 130 },
        weightkg: 40.5
    },
    Geodude: {
        types: ['Rock', 'Ground'],
        bs: { hp: 40, at: 80, df: 100, sp: 20, sl: 30 },
        weightkg: 20,
        nfe: true
    },
    Gloom: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 65, df: 70, sp: 40, sl: 85 },
        weightkg: 8.6,
        nfe: true
    },
    Golbat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 75, at: 80, df: 70, sp: 90, sl: 75 },
        weightkg: 55
    },
    Goldeen: {
        types: ['Water'],
        bs: { hp: 45, at: 67, df: 60, sp: 63, sl: 50 },
        weightkg: 15,
        nfe: true
    },
    Golduck: { types: ['Water'], bs: { hp: 80, at: 82, df: 78, sp: 85, sl: 80 }, weightkg: 76.6 },
    Golem: {
        types: ['Rock', 'Ground'],
        bs: { hp: 80, at: 110, df: 130, sp: 45, sl: 55 },
        weightkg: 300
    },
    Graveler: {
        types: ['Rock', 'Ground'],
        bs: { hp: 55, at: 95, df: 115, sp: 35, sl: 45 },
        weightkg: 105,
        nfe: true
    },
    Grimer: {
        types: ['Poison'],
        bs: { hp: 80, at: 80, df: 50, sp: 25, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Growlithe: {
        types: ['Fire'],
        bs: { hp: 55, at: 70, df: 45, sp: 60, sl: 50 },
        weightkg: 19,
        nfe: true
    },
    Gyarados: {
        types: ['Water', 'Flying'],
        bs: { hp: 95, at: 125, df: 79, sp: 81, sl: 100 },
        weightkg: 235
    },
    Haunter: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 45, at: 50, df: 45, sp: 95, sl: 115 },
        weightkg: 0.1,
        nfe: true
    },
    Hitmonchan: {
        types: ['Fighting'],
        bs: { hp: 50, at: 105, df: 79, sp: 76, sl: 35 },
        weightkg: 50.2
    },
    Hitmonlee: {
        types: ['Fighting'],
        bs: { hp: 50, at: 120, df: 53, sp: 87, sl: 35 },
        weightkg: 49.8
    },
    Horsea: {
        types: ['Water'],
        bs: { hp: 30, at: 40, df: 70, sp: 60, sl: 70 },
        weightkg: 8,
        nfe: true
    },
    Hypno: {
        types: ['Psychic'],
        bs: { hp: 85, at: 73, df: 70, sp: 67, sl: 115 },
        weightkg: 75.6
    },
    Ivysaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 62, df: 63, sp: 60, sl: 80 },
        weightkg: 13,
        nfe: true
    },
    Jigglypuff: {
        types: ['Normal'],
        bs: { hp: 115, at: 45, df: 20, sp: 20, sl: 25 },
        weightkg: 5.5,
        nfe: true
    },
    Jolteon: {
        types: ['Electric'],
        bs: { hp: 65, at: 65, df: 60, sp: 130, sl: 110 },
        weightkg: 24.5
    },
    Jynx: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 65, at: 50, df: 35, sp: 95, sl: 95 },
        weightkg: 40.6
    },
    Kabuto: {
        types: ['Rock', 'Water'],
        bs: { hp: 30, at: 80, df: 90, sp: 55, sl: 45 },
        weightkg: 11.5,
        nfe: true
    },
    Kabutops: {
        types: ['Rock', 'Water'],
        bs: { hp: 60, at: 115, df: 105, sp: 80, sl: 70 },
        weightkg: 40.5
    },
    Kadabra: {
        types: ['Psychic'],
        bs: { hp: 40, at: 35, df: 30, sp: 105, sl: 120 },
        weightkg: 56.5,
        nfe: true
    },
    Kakuna: {
        types: ['Bug', 'Poison'],
        bs: { hp: 45, at: 25, df: 50, sp: 35, sl: 25 },
        weightkg: 10,
        nfe: true
    },
    Kangaskhan: {
        types: ['Normal'],
        bs: { hp: 105, at: 95, df: 80, sp: 90, sl: 40 },
        weightkg: 80
    },
    Kingler: { types: ['Water'], bs: { hp: 55, at: 130, df: 115, sp: 75, sl: 50 }, weightkg: 60 },
    Koffing: {
        types: ['Poison'],
        bs: { hp: 40, at: 65, df: 95, sp: 35, sl: 60 },
        weightkg: 1,
        nfe: true
    },
    Krabby: {
        types: ['Water'],
        bs: { hp: 30, at: 105, df: 90, sp: 50, sl: 25 },
        weightkg: 6.5,
        nfe: true
    },
    Lapras: {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sp: 60, sl: 95 },
        weightkg: 220
    },
    Lickitung: {
        types: ['Normal'],
        bs: { hp: 90, at: 55, df: 75, sp: 30, sl: 60 },
        weightkg: 65.5
    },
    Machamp: {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sp: 55, sl: 65 },
        weightkg: 130
    },
    Machoke: {
        types: ['Fighting'],
        bs: { hp: 80, at: 100, df: 70, sp: 45, sl: 50 },
        weightkg: 70.5,
        nfe: true
    },
    Machop: {
        types: ['Fighting'],
        bs: { hp: 70, at: 80, df: 50, sp: 35, sl: 35 },
        weightkg: 19.5,
        nfe: true
    },
    Magikarp: {
        types: ['Water'],
        bs: { hp: 20, at: 10, df: 55, sp: 80, sl: 20 },
        weightkg: 10,
        nfe: true
    },
    Magmar: {
        types: ['Fire'],
        bs: { hp: 65, at: 95, df: 57, sp: 93, sl: 85 },
        weightkg: 44.5
    },
    Magnemite: {
        types: ['Electric'],
        bs: { hp: 25, at: 35, df: 70, sp: 45, sl: 95 },
        weightkg: 6,
        nfe: true
    },
    Magneton: {
        types: ['Electric'],
        bs: { hp: 50, at: 60, df: 95, sp: 70, sl: 120 },
        weightkg: 60
    },
    Mankey: {
        types: ['Fighting'],
        bs: { hp: 40, at: 80, df: 35, sp: 70, sl: 35 },
        weightkg: 28,
        nfe: true
    },
    Marowak: { types: ['Ground'], bs: { hp: 60, at: 80, df: 110, sp: 45, sl: 50 }, weightkg: 45 },
    Meowth: {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sp: 90, sl: 40 },
        weightkg: 4.2,
        nfe: true
    },
    Metapod: {
        types: ['Bug'],
        bs: { hp: 50, at: 20, df: 55, sp: 30, sl: 25 },
        weightkg: 9.9,
        nfe: true
    },
    Mew: {
        types: ['Psychic'],
        bs: { hp: 100, at: 100, df: 100, sp: 100, sl: 100 },
        weightkg: 4
    },
    Mewtwo: {
        types: ['Psychic'],
        bs: { hp: 106, at: 110, df: 90, sp: 130, sl: 154 },
        weightkg: 122
    },
    Moltres: {
        types: ['Fire', 'Flying'],
        bs: { hp: 90, at: 100, df: 90, sp: 90, sl: 125 },
        weightkg: 60
    },
    'Mr. Mime': {
        types: ['Psychic'],
        bs: { hp: 40, at: 45, df: 65, sp: 90, sl: 100 },
        weightkg: 54.5
    },
    Muk: { types: ['Poison'], bs: { hp: 105, at: 105, df: 75, sp: 50, sl: 65 }, weightkg: 30 },
    Nidoking: {
        types: ['Poison', 'Ground'],
        bs: { hp: 81, at: 92, df: 77, sp: 85, sl: 75 },
        weightkg: 62
    },
    Nidoqueen: {
        types: ['Poison', 'Ground'],
        bs: { hp: 90, at: 82, df: 87, sp: 76, sl: 75 },
        weightkg: 60
    },
    'Nidoran-F': {
        types: ['Poison'],
        bs: { hp: 55, at: 47, df: 52, sp: 41, sl: 40 },
        weightkg: 7,
        nfe: true
    },
    'Nidoran-M': {
        types: ['Poison'],
        bs: { hp: 46, at: 57, df: 40, sp: 50, sl: 40 },
        weightkg: 9,
        nfe: true
    },
    Nidorina: {
        types: ['Poison'],
        bs: { hp: 70, at: 62, df: 67, sp: 56, sl: 55 },
        weightkg: 20,
        nfe: true
    },
    Nidorino: {
        types: ['Poison'],
        bs: { hp: 61, at: 72, df: 57, sp: 65, sl: 55 },
        weightkg: 19.5,
        nfe: true
    },
    Ninetales: {
        types: ['Fire'],
        bs: { hp: 73, at: 76, df: 75, sp: 100, sl: 100 },
        weightkg: 19.9
    },
    Oddish: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 50, df: 55, sp: 30, sl: 75 },
        weightkg: 5.4,
        nfe: true
    },
    Omanyte: {
        types: ['Rock', 'Water'],
        bs: { hp: 35, at: 40, df: 100, sp: 35, sl: 90 },
        weightkg: 7.5,
        nfe: true
    },
    Omastar: {
        types: ['Rock', 'Water'],
        bs: { hp: 70, at: 60, df: 125, sp: 55, sl: 115 },
        weightkg: 35
    },
    Onix: {
        types: ['Rock', 'Ground'],
        bs: { hp: 35, at: 45, df: 160, sp: 70, sl: 30 },
        weightkg: 210
    },
    Paras: {
        types: ['Bug', 'Grass'],
        bs: { hp: 35, at: 70, df: 55, sp: 25, sl: 55 },
        weightkg: 5.4,
        nfe: true
    },
    Parasect: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 95, df: 80, sp: 30, sl: 80 },
        weightkg: 29.5
    },
    Persian: { types: ['Normal'], bs: { hp: 65, at: 70, df: 60, sp: 115, sl: 65 }, weightkg: 32 },
    Pidgeot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 75, sp: 91, sl: 70 },
        weightkg: 39.5
    },
    Pidgeotto: {
        types: ['Normal', 'Flying'],
        bs: { hp: 63, at: 60, df: 55, sp: 71, sl: 50 },
        weightkg: 30,
        nfe: true
    },
    Pidgey: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 45, df: 40, sp: 56, sl: 35 },
        weightkg: 1.8,
        nfe: true
    },
    Pikachu: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        weightkg: 6,
        nfe: true
    },
    Pinsir: { types: ['Bug'], bs: { hp: 65, at: 125, df: 100, sp: 85, sl: 55 }, weightkg: 55 },
    Poliwag: {
        types: ['Water'],
        bs: { hp: 40, at: 50, df: 40, sp: 90, sl: 40 },
        weightkg: 12.4,
        nfe: true
    },
    Poliwhirl: {
        types: ['Water'],
        bs: { hp: 65, at: 65, df: 65, sp: 90, sl: 50 },
        weightkg: 20,
        nfe: true
    },
    Poliwrath: {
        types: ['Water', 'Fighting'],
        bs: { hp: 90, at: 85, df: 95, sp: 70, sl: 70 },
        weightkg: 54
    },
    Ponyta: {
        types: ['Fire'],
        bs: { hp: 50, at: 85, df: 55, sp: 90, sl: 65 },
        weightkg: 30,
        nfe: true
    },
    Porygon: {
        types: ['Normal'],
        bs: { hp: 65, at: 60, df: 70, sp: 40, sl: 75 },
        weightkg: 36.5
    },
    Primeape: {
        types: ['Fighting'],
        bs: { hp: 65, at: 105, df: 60, sp: 95, sl: 60 },
        weightkg: 32
    },
    Psyduck: {
        types: ['Water'],
        bs: { hp: 50, at: 52, df: 48, sp: 55, sl: 50 },
        weightkg: 19.6,
        nfe: true
    },
    Raichu: {
        types: ['Electric'],
        bs: { hp: 60, at: 90, df: 55, sp: 100, sl: 90 },
        weightkg: 30
    },
    Rapidash: { types: ['Fire'], bs: { hp: 65, at: 100, df: 70, sp: 105, sl: 80 }, weightkg: 95 },
    Raticate: {
        types: ['Normal'],
        bs: { hp: 55, at: 81, df: 60, sp: 97, sl: 50 },
        weightkg: 18.5
    },
    Rattata: {
        types: ['Normal'],
        bs: { hp: 30, at: 56, df: 35, sp: 72, sl: 25 },
        weightkg: 3.5,
        nfe: true
    },
    Rhydon: {
        types: ['Ground', 'Rock'],
        bs: { hp: 105, at: 130, df: 120, sp: 40, sl: 45 },
        weightkg: 120
    },
    Rhyhorn: {
        types: ['Ground', 'Rock'],
        bs: { hp: 80, at: 85, df: 95, sp: 25, sl: 30 },
        weightkg: 115,
        nfe: true
    },
    Sandshrew: {
        types: ['Ground'],
        bs: { hp: 50, at: 75, df: 85, sp: 40, sl: 30 },
        weightkg: 12,
        nfe: true
    },
    Sandslash: {
        types: ['Ground'],
        bs: { hp: 75, at: 100, df: 110, sp: 65, sl: 55 },
        weightkg: 29.5
    },
    Scyther: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 110, df: 80, sp: 105, sl: 55 },
        weightkg: 56
    },
    Seadra: { types: ['Water'], bs: { hp: 55, at: 65, df: 95, sp: 85, sl: 95 }, weightkg: 25 },
    Seaking: { types: ['Water'], bs: { hp: 80, at: 92, df: 65, sp: 68, sl: 80 }, weightkg: 39 },
    Seel: {
        types: ['Water'],
        bs: { hp: 65, at: 45, df: 55, sp: 45, sl: 70 },
        weightkg: 90,
        nfe: true
    },
    Shellder: {
        types: ['Water'],
        bs: { hp: 30, at: 65, df: 100, sp: 40, sl: 45 },
        weightkg: 4,
        nfe: true
    },
    Slowbro: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 110, sp: 30, sl: 80 },
        weightkg: 78.5
    },
    Slowpoke: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 65, df: 65, sp: 15, sl: 40 },
        weightkg: 36,
        nfe: true
    },
    Snorlax: {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sp: 30, sl: 65 },
        weightkg: 460
    },
    Spearow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 60, df: 30, sp: 70, sl: 31 },
        weightkg: 2,
        nfe: true
    },
    Squirtle: {
        types: ['Water'],
        bs: { hp: 44, at: 48, df: 65, sp: 43, sl: 50 },
        weightkg: 9,
        nfe: true
    },
    Starmie: {
        types: ['Water', 'Psychic'],
        bs: { hp: 60, at: 75, df: 85, sp: 115, sl: 100 },
        weightkg: 80
    },
    Staryu: {
        types: ['Water'],
        bs: { hp: 30, at: 45, df: 55, sp: 85, sl: 70 },
        weightkg: 34.5,
        nfe: true
    },
    Tangela: {
        types: ['Grass'],
        bs: { hp: 65, at: 55, df: 115, sp: 60, sl: 100 },
        weightkg: 35
    },
    Tauros: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 95, sp: 110, sl: 70 },
        weightkg: 88.4
    },
    Tentacool: {
        types: ['Water', 'Poison'],
        bs: { hp: 40, at: 40, df: 35, sp: 70, sl: 100 },
        weightkg: 45.5,
        nfe: true
    },
    Tentacruel: {
        types: ['Water', 'Poison'],
        bs: { hp: 80, at: 70, df: 65, sp: 100, sl: 120 },
        weightkg: 55
    },
    Vaporeon: {
        types: ['Water'],
        bs: { hp: 130, at: 65, df: 60, sp: 65, sl: 110 },
        weightkg: 29
    },
    Venomoth: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 65, df: 60, sp: 90, sl: 90 },
        weightkg: 12.5
    },
    Venonat: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 55, df: 50, sp: 45, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Venusaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sp: 80, sl: 100 },
        weightkg: 100
    },
    Victreebel: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 105, df: 65, sp: 70, sl: 100 },
        weightkg: 15.5
    },
    Vileplume: {
        types: ['Grass', 'Poison'],
        bs: { hp: 75, at: 80, df: 85, sp: 50, sl: 100 },
        weightkg: 18.6
    },
    Voltorb: {
        types: ['Electric'],
        bs: { hp: 40, at: 30, df: 50, sp: 100, sl: 55 },
        weightkg: 10.4,
        nfe: true
    },
    Vulpix: {
        types: ['Fire'],
        bs: { hp: 38, at: 41, df: 40, sp: 65, sl: 65 },
        weightkg: 9.9,
        nfe: true
    },
    Wartortle: {
        types: ['Water'],
        bs: { hp: 59, at: 63, df: 80, sp: 58, sl: 65 },
        weightkg: 22.5,
        nfe: true
    },
    Weedle: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 35, df: 30, sp: 50, sl: 20 },
        weightkg: 3.2,
        nfe: true
    },
    Weepinbell: {
        types: ['Grass', 'Poison'],
        bs: { hp: 65, at: 90, df: 50, sp: 55, sl: 85 },
        weightkg: 6.4,
        nfe: true
    },
    Weezing: {
        types: ['Poison'],
        bs: { hp: 65, at: 90, df: 120, sp: 60, sl: 85 },
        weightkg: 9.5
    },
    Wigglytuff: {
        types: ['Normal'],
        bs: { hp: 140, at: 70, df: 45, sp: 45, sl: 50 },
        weightkg: 12
    },
    Zapdos: {
        types: ['Electric', 'Flying'],
        bs: { hp: 90, at: 90, df: 85, sp: 100, sl: 125 },
        weightkg: 52.6
    },
    Zubat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 40, at: 45, df: 35, sp: 55, sl: 40 },
        weightkg: 7.5,
        nfe: true
    }
};
var GSC_PATCH = {
    Abra: { bs: { sa: 105, sd: 55 } },
    Aerodactyl: { bs: { sa: 60, sd: 75 } },
    Alakazam: { bs: { sa: 135, sd: 85 } },
    Arbok: { bs: { sa: 65, sd: 79 } },
    Arcanine: { bs: { sa: 100, sd: 80 } },
    Articuno: { bs: { sa: 95, sd: 125 }, gender: 'N' },
    Beedrill: { bs: { sa: 45, sd: 80 } },
    Bellsprout: { bs: { sa: 70, sd: 30 } },
    Blastoise: { bs: { sa: 85, sd: 105 } },
    Bulbasaur: { bs: { sa: 65, sd: 65 } },
    Butterfree: { bs: { sa: 80, sd: 80 } },
    Caterpie: { bs: { sa: 20, sd: 20 } },
    Chansey: { bs: { sa: 35, sd: 105 }, nfe: true },
    Charizard: { bs: { sa: 109, sd: 85 } },
    Charmander: { bs: { sa: 60, sd: 50 } },
    Charmeleon: { bs: { sa: 80, sd: 65 } },
    Clefable: { bs: { sa: 85, sd: 90 } },
    Clefairy: { bs: { sa: 60, sd: 65 } },
    Cloyster: { bs: { sa: 85, sd: 45 } },
    Cubone: { bs: { sa: 40, sd: 50 } },
    Dewgong: { bs: { sa: 70, sd: 95 } },
    Diglett: { bs: { sa: 35, sd: 45 } },
    Ditto: { bs: { sa: 48, sd: 48 }, gender: 'N' },
    Dodrio: { bs: { sa: 60, sd: 60 } },
    Doduo: { bs: { sa: 35, sd: 35 } },
    Dragonair: { bs: { sa: 70, sd: 70 } },
    Dragonite: { bs: { sa: 100, sd: 100 } },
    Dratini: { bs: { sa: 50, sd: 50 } },
    Drowzee: { bs: { sa: 43, sd: 90 } },
    Dugtrio: { bs: { sa: 50, sd: 70 } },
    Eevee: { bs: { sa: 45, sd: 65 } },
    Ekans: { bs: { sa: 40, sd: 54 } },
    Electabuzz: { bs: { sa: 95, sd: 85 } },
    Electrode: { bs: { sa: 80, sd: 80 }, gender: 'N' },
    Exeggcute: { bs: { sa: 60, sd: 45 } },
    Exeggutor: { bs: { sa: 125, sd: 65 } },
    'Farfetch\u2019d': { bs: { sa: 58, sd: 62 } },
    Fearow: { bs: { sa: 61, sd: 61 } },
    Flareon: { bs: { sa: 95, sd: 110 } },
    Gastly: { bs: { sa: 100, sd: 35 } },
    Gengar: { bs: { sa: 130, sd: 75 } },
    Geodude: { bs: { sa: 30, sd: 30 } },
    Gloom: { bs: { sa: 85, sd: 75 } },
    Golbat: { bs: { sa: 65, sd: 75 }, nfe: true },
    Goldeen: { bs: { sa: 35, sd: 50 } },
    Golduck: { bs: { sa: 95, sd: 80 } },
    Golem: { bs: { sa: 55, sd: 65 } },
    Graveler: { bs: { sa: 45, sd: 45 } },
    Grimer: { bs: { sa: 40, sd: 50 } },
    Growlithe: { bs: { sa: 70, sd: 50 } },
    Gyarados: { bs: { sa: 60, sd: 100 } },
    Haunter: { bs: { sa: 115, sd: 55 } },
    Hitmonchan: { bs: { sa: 35, sd: 110 } },
    Hitmonlee: { bs: { sa: 35, sd: 110 } },
    Horsea: { bs: { sa: 70, sd: 25 } },
    Hypno: { bs: { sa: 73, sd: 115 } },
    Ivysaur: { bs: { sa: 80, sd: 80 } },
    Jigglypuff: { bs: { sa: 45, sd: 25 } },
    Jolteon: { bs: { sa: 110, sd: 95 } },
    Jynx: { bs: { sa: 115, sd: 95 } },
    Kabuto: { bs: { sa: 55, sd: 45 } },
    Kabutops: { bs: { sa: 65, sd: 70 } },
    Kadabra: { bs: { sa: 120, sd: 70 } },
    Kakuna: { bs: { sa: 25, sd: 25 } },
    Kangaskhan: { bs: { sa: 40, sd: 80 } },
    Kingler: { bs: { sa: 50, sd: 50 } },
    Koffing: { bs: { sa: 60, sd: 45 } },
    Krabby: { bs: { sa: 25, sd: 25 } },
    Lapras: { bs: { sa: 85, sd: 95 } },
    Lickitung: { bs: { sa: 60, sd: 75 } },
    Machamp: { bs: { sa: 65, sd: 85 } },
    Machoke: { bs: { sa: 50, sd: 60 } },
    Machop: { bs: { sa: 35, sd: 35 } },
    Magikarp: { bs: { sa: 15, sd: 20 } },
    Magmar: { bs: { sa: 100, sd: 85 } },
    Magnemite: { types: ['Electric', 'Steel'], bs: { sa: 95, sd: 55 }, gender: 'N' },
    Magneton: { types: ['Electric', 'Steel'], bs: { sa: 120, sd: 70 }, gender: 'N' },
    Mankey: { bs: { sa: 35, sd: 45 } },
    Marowak: { bs: { sa: 50, sd: 80 } },
    Meowth: { bs: { sa: 40, sd: 40 } },
    Metapod: { bs: { sa: 25, sd: 25 } },
    Mew: { bs: { sa: 100, sd: 100 }, gender: 'N' },
    Mewtwo: { bs: { sa: 154, sd: 90 }, gender: 'N' },
    Moltres: { bs: { sa: 125, sd: 85 }, gender: 'N' },
    'Mr. Mime': { bs: { sa: 100, sd: 120 } },
    Muk: { bs: { sa: 65, sd: 100 } },
    Nidoking: { bs: { sa: 85, sd: 75 } },
    Nidoqueen: { bs: { sa: 75, sd: 85 } },
    'Nidoran-F': { bs: { sa: 40, sd: 40 } },
    'Nidoran-M': { bs: { sa: 40, sd: 40 } },
    Nidorina: { bs: { sa: 55, sd: 55 } },
    Nidorino: { bs: { sa: 55, sd: 55 } },
    Ninetales: { bs: { sa: 81, sd: 100 } },
    Oddish: { bs: { sa: 75, sd: 65 } },
    Omanyte: { bs: { sa: 90, sd: 55 } },
    Omastar: { bs: { sa: 115, sd: 70 } },
    Onix: { bs: { sa: 30, sd: 45 }, nfe: true },
    Paras: { bs: { sa: 45, sd: 55 } },
    Parasect: { bs: { sa: 60, sd: 80 } },
    Persian: { bs: { sa: 65, sd: 65 } },
    Pidgeot: { bs: { sa: 70, sd: 70 } },
    Pidgeotto: { bs: { sa: 50, sd: 50 } },
    Pidgey: { bs: { sa: 35, sd: 35 } },
    Pikachu: { bs: { sa: 50, sd: 40 } },
    Pinsir: { bs: { sa: 55, sd: 70 } },
    Poliwag: { bs: { sa: 40, sd: 40 } },
    Poliwhirl: { bs: { sa: 50, sd: 50 } },
    Poliwrath: { bs: { sa: 70, sd: 90 } },
    Ponyta: { bs: { sa: 65, sd: 65 } },
    Porygon: { bs: { sa: 85, sd: 75 }, nfe: true, gender: 'N' },
    Primeape: { bs: { sa: 60, sd: 70 } },
    Psyduck: { bs: { sa: 65, sd: 50 } },
    Raichu: { bs: { sa: 90, sd: 80 } },
    Rapidash: { bs: { sa: 80, sd: 80 } },
    Raticate: { bs: { sa: 50, sd: 70 } },
    Rattata: { bs: { sa: 25, sd: 35 } },
    Rhydon: { bs: { sa: 45, sd: 45 } },
    Rhyhorn: { bs: { sa: 30, sd: 30 } },
    Sandshrew: { bs: { sa: 20, sd: 30 } },
    Sandslash: { bs: { sa: 45, sd: 55 } },
    Scyther: { bs: { sa: 55, sd: 80 }, nfe: true },
    Seadra: { bs: { sa: 95, sd: 45 }, nfe: true },
    Seaking: { bs: { sa: 65, sd: 80 } },
    Seel: { bs: { sa: 45, sd: 70 } },
    Shellder: { bs: { sa: 45, sd: 25 } },
    Slowbro: { bs: { sa: 100, sd: 80 } },
    Slowpoke: { bs: { sa: 40, sd: 40 } },
    Snorlax: { bs: { sa: 65, sd: 110 } },
    Spearow: { bs: { sa: 31, sd: 31 } },
    Squirtle: { bs: { sa: 50, sd: 64 } },
    Starmie: { bs: { sa: 100, sd: 85 }, gender: 'N' },
    Staryu: { bs: { sa: 70, sd: 55 }, gender: 'N' },
    Tangela: { bs: { sa: 100, sd: 40 } },
    Tauros: { bs: { sa: 40, sd: 70 } },
    Tentacool: { bs: { sa: 50, sd: 100 } },
    Tentacruel: { bs: { sa: 80, sd: 120 } },
    Vaporeon: { bs: { sa: 110, sd: 95 } },
    Venomoth: { bs: { sa: 90, sd: 75 } },
    Venonat: { bs: { sa: 40, sd: 55 } },
    Venusaur: { bs: { sa: 100, sd: 100 } },
    Victreebel: { bs: { sa: 100, sd: 60 } },
    Vileplume: { bs: { sa: 100, sd: 90 } },
    Voltorb: { bs: { sa: 55, sd: 55 }, gender: 'N' },
    Vulpix: { bs: { sa: 50, sd: 65 } },
    Wartortle: { bs: { sa: 65, sd: 80 } },
    Weedle: { bs: { sa: 20, sd: 20 } },
    Weepinbell: { bs: { sa: 85, sd: 45 } },
    Weezing: { bs: { sa: 85, sd: 70 } },
    Wigglytuff: { bs: { sa: 75, sd: 50 } },
    Zapdos: { bs: { sa: 125, sd: 90 }, gender: 'N' },
    Zubat: { bs: { sa: 30, sd: 40 } },
    Aipom: { types: ['Normal'], bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 }, weightkg: 11.5 },
    Ampharos: {
        types: ['Electric'],
        bs: { hp: 90, at: 75, df: 75, sa: 115, sd: 90, sp: 55 },
        weightkg: 61.5
    },
    Ariados: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 40 },
        weightkg: 33.5
    },
    Azumarill: {
        types: ['Water'],
        bs: { hp: 100, at: 50, df: 80, sa: 60, sd: 80, sp: 50 },
        weightkg: 28.5
    },
    Bayleef: {
        types: ['Grass'],
        bs: { hp: 60, at: 62, df: 80, sa: 63, sd: 80, sp: 60 },
        weightkg: 15.8,
        nfe: true
    },
    Bellossom: {
        types: ['Grass'],
        bs: { hp: 75, at: 80, df: 85, sa: 90, sd: 100, sp: 50 },
        weightkg: 5.8
    },
    Blissey: {
        types: ['Normal'],
        bs: { hp: 255, at: 10, df: 10, sa: 75, sd: 135, sp: 55 },
        weightkg: 46.8
    },
    Celebi: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 5,
        gender: 'N'
    },
    Chikorita: {
        types: ['Grass'],
        bs: { hp: 45, at: 49, df: 65, sa: 49, sd: 65, sp: 45 },
        weightkg: 6.4,
        nfe: true
    },
    Chinchou: {
        types: ['Water', 'Electric'],
        bs: { hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67 },
        weightkg: 12,
        nfe: true
    },
    Cleffa: {
        types: ['Normal'],
        bs: { hp: 50, at: 25, df: 28, sa: 45, sd: 55, sp: 15 },
        weightkg: 3,
        nfe: true
    },
    Corsola: {
        types: ['Water', 'Rock'],
        bs: { hp: 55, at: 55, df: 85, sa: 65, sd: 85, sp: 35 },
        weightkg: 5
    },
    Crobat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 90, df: 80, sa: 70, sd: 80, sp: 130 },
        weightkg: 75
    },
    Croconaw: {
        types: ['Water'],
        bs: { hp: 65, at: 80, df: 80, sa: 59, sd: 63, sp: 58 },
        weightkg: 25,
        nfe: true
    },
    Cyndaquil: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        weightkg: 7.9,
        nfe: true
    },
    Delibird: {
        types: ['Ice', 'Flying'],
        bs: { hp: 45, at: 55, df: 45, sa: 65, sd: 45, sp: 75 },
        weightkg: 16
    },
    Donphan: {
        types: ['Ground'],
        bs: { hp: 90, at: 120, df: 120, sa: 60, sd: 60, sp: 50 },
        weightkg: 120
    },
    Dunsparce: {
        types: ['Normal'],
        bs: { hp: 100, at: 70, df: 70, sa: 65, sd: 65, sp: 45 },
        weightkg: 14
    },
    Elekid: {
        types: ['Electric'],
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        weightkg: 23.5,
        nfe: true
    },
    Entei: {
        types: ['Fire'],
        bs: { hp: 115, at: 115, df: 85, sa: 90, sd: 75, sp: 100 },
        weightkg: 198,
        gender: 'N'
    },
    Espeon: {
        types: ['Psychic'],
        bs: { hp: 65, at: 65, df: 60, sa: 130, sd: 95, sp: 110 },
        weightkg: 26.5
    },
    Feraligatr: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 100, sa: 79, sd: 83, sp: 78 },
        weightkg: 88.8
    },
    Flaaffy: {
        types: ['Electric'],
        bs: { hp: 70, at: 55, df: 55, sa: 80, sd: 60, sp: 45 },
        weightkg: 13.3,
        nfe: true
    },
    Forretress: {
        types: ['Bug', 'Steel'],
        bs: { hp: 75, at: 90, df: 140, sa: 60, sd: 60, sp: 40 },
        weightkg: 125.8
    },
    Furret: { types: ['Normal'], bs: { hp: 85, at: 76, df: 64, sa: 45, sd: 55, sp: 90 }, weightkg: 32.5 },
    Girafarig: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 70, at: 80, df: 65, sa: 90, sd: 65, sp: 85 },
        weightkg: 41.5
    },
    Gligar: {
        types: ['Ground', 'Flying'],
        bs: { hp: 65, at: 75, df: 105, sa: 35, sd: 65, sp: 85 },
        weightkg: 64.8
    },
    Granbull: {
        types: ['Normal'],
        bs: { hp: 90, at: 120, df: 75, sa: 60, sd: 60, sp: 45 },
        weightkg: 48.7
    },
    Heracross: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 125, df: 75, sa: 40, sd: 95, sp: 85 },
        weightkg: 54
    },
    Hitmontop: {
        types: ['Fighting'],
        bs: { hp: 50, at: 95, df: 95, sa: 35, sd: 110, sp: 70 },
        weightkg: 48
    },
    'Ho-Oh': {
        types: ['Fire', 'Flying'],
        bs: { hp: 106, at: 130, df: 90, sa: 110, sd: 154, sp: 90 },
        weightkg: 199,
        gender: 'N'
    },
    Hoothoot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 30, df: 30, sa: 36, sd: 56, sp: 50 },
        weightkg: 21.2,
        nfe: true
    },
    Hoppip: {
        types: ['Grass', 'Flying'],
        bs: { hp: 35, at: 35, df: 40, sa: 35, sd: 55, sp: 50 },
        weightkg: 0.5,
        nfe: true
    },
    Houndoom: {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 50, sa: 110, sd: 80, sp: 95 },
        weightkg: 35
    },
    Houndour: {
        types: ['Dark', 'Fire'],
        bs: { hp: 45, at: 60, df: 30, sa: 80, sd: 50, sp: 65 },
        weightkg: 10.8,
        nfe: true
    },
    Igglybuff: {
        types: ['Normal'],
        bs: { hp: 90, at: 30, df: 15, sa: 40, sd: 20, sp: 15 },
        weightkg: 1,
        nfe: true
    },
    Jumpluff: {
        types: ['Grass', 'Flying'],
        bs: { hp: 75, at: 55, df: 70, sa: 55, sd: 85, sp: 110 },
        weightkg: 3
    },
    Kingdra: {
        types: ['Water', 'Dragon'],
        bs: { hp: 75, at: 95, df: 95, sa: 95, sd: 95, sp: 85 },
        weightkg: 152
    },
    Lanturn: {
        types: ['Water', 'Electric'],
        bs: { hp: 125, at: 58, df: 58, sa: 76, sd: 76, sp: 67 },
        weightkg: 22.5
    },
    Larvitar: {
        types: ['Rock', 'Ground'],
        bs: { hp: 50, at: 64, df: 50, sa: 45, sd: 50, sp: 41 },
        weightkg: 72,
        nfe: true
    },
    Ledian: {
        types: ['Bug', 'Flying'],
        bs: { hp: 55, at: 35, df: 50, sa: 55, sd: 110, sp: 85 },
        weightkg: 35.6
    },
    Ledyba: {
        types: ['Bug', 'Flying'],
        bs: { hp: 40, at: 20, df: 30, sa: 40, sd: 80, sp: 55 },
        weightkg: 10.8,
        nfe: true
    },
    Lugia: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 106, at: 90, df: 130, sa: 90, sd: 154, sp: 110 },
        weightkg: 216,
        gender: 'N'
    },
    Magby: {
        types: ['Fire'],
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        weightkg: 21.4,
        nfe: true
    },
    Magcargo: {
        types: ['Fire', 'Rock'],
        bs: { hp: 50, at: 50, df: 120, sa: 80, sd: 80, sp: 30 },
        weightkg: 55
    },
    Mantine: {
        types: ['Water', 'Flying'],
        bs: { hp: 65, at: 40, df: 70, sa: 80, sd: 140, sp: 70 },
        weightkg: 220
    },
    Mareep: {
        types: ['Electric'],
        bs: { hp: 55, at: 40, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 7.8,
        nfe: true
    },
    Marill: {
        types: ['Water'],
        bs: { hp: 70, at: 20, df: 50, sa: 20, sd: 50, sp: 40 },
        weightkg: 8.5,
        nfe: true
    },
    Meganium: {
        types: ['Grass'],
        bs: { hp: 80, at: 82, df: 100, sa: 83, sd: 100, sp: 80 },
        weightkg: 100.5
    },
    Miltank: {
        types: ['Normal'],
        bs: { hp: 95, at: 80, df: 105, sa: 40, sd: 70, sp: 100 },
        weightkg: 75.5
    },
    Misdreavus: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
        weightkg: 1
    },
    Murkrow: {
        types: ['Dark', 'Flying'],
        bs: { hp: 60, at: 85, df: 42, sa: 85, sd: 42, sp: 91 },
        weightkg: 2.1
    },
    Natu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 40, at: 50, df: 45, sa: 70, sd: 45, sp: 70 },
        weightkg: 2,
        nfe: true
    },
    Noctowl: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 50, df: 50, sa: 76, sd: 96, sp: 70 },
        weightkg: 40.8
    },
    Octillery: {
        types: ['Water'],
        bs: { hp: 75, at: 105, df: 75, sa: 105, sd: 75, sp: 45 },
        weightkg: 28.5
    },
    Phanpy: {
        types: ['Ground'],
        bs: { hp: 90, at: 60, df: 60, sa: 40, sd: 40, sp: 40 },
        weightkg: 33.5,
        nfe: true
    },
    Pichu: {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        nfe: true
    },
    Piloswine: {
        types: ['Ice', 'Ground'],
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 60, sp: 50 },
        weightkg: 55.8
    },
    Pineco: {
        types: ['Bug'],
        bs: { hp: 50, at: 65, df: 90, sa: 35, sd: 35, sp: 15 },
        weightkg: 7.2,
        nfe: true
    },
    Politoed: {
        types: ['Water'],
        bs: { hp: 90, at: 75, df: 75, sa: 90, sd: 100, sp: 70 },
        weightkg: 33.9
    },
    Porygon2: {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 90, sa: 105, sd: 95, sp: 60 },
        weightkg: 32.5,
        gender: 'N'
    },
    Pupitar: {
        types: ['Rock', 'Ground'],
        bs: { hp: 70, at: 84, df: 70, sa: 65, sd: 70, sp: 51 },
        weightkg: 152,
        nfe: true
    },
    Quagsire: {
        types: ['Water', 'Ground'],
        bs: { hp: 95, at: 85, df: 85, sa: 65, sd: 65, sp: 35 },
        weightkg: 75
    },
    Quilava: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        weightkg: 19,
        nfe: true
    },
    Qwilfish: {
        types: ['Water', 'Poison'],
        bs: { hp: 65, at: 95, df: 75, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9
    },
    Raikou: {
        types: ['Electric'],
        bs: { hp: 90, at: 85, df: 75, sa: 115, sd: 100, sp: 115 },
        weightkg: 178,
        gender: 'N'
    },
    Remoraid: {
        types: ['Water'],
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        weightkg: 12,
        nfe: true
    },
    Scizor: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 65 },
        weightkg: 118
    },
    Sentret: {
        types: ['Normal'],
        bs: { hp: 35, at: 46, df: 34, sa: 35, sd: 45, sp: 20 },
        weightkg: 6,
        nfe: true
    },
    Shuckle: {
        types: ['Bug', 'Rock'],
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        weightkg: 20.5
    },
    Skarmory: {
        types: ['Steel', 'Flying'],
        bs: { hp: 65, at: 80, df: 140, sa: 40, sd: 70, sp: 70 },
        weightkg: 50.5
    },
    Skiploom: {
        types: ['Grass', 'Flying'],
        bs: { hp: 55, at: 45, df: 50, sa: 45, sd: 65, sp: 80 },
        weightkg: 1,
        nfe: true
    },
    Slowking: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 80, sa: 100, sd: 110, sp: 30 },
        weightkg: 79.5
    },
    Slugma: {
        types: ['Fire'],
        bs: { hp: 40, at: 40, df: 40, sa: 70, sd: 40, sp: 20 },
        weightkg: 35,
        nfe: true
    },
    Smeargle: { types: ['Normal'], bs: { hp: 55, at: 20, df: 35, sa: 20, sd: 45, sp: 75 }, weightkg: 58 },
    Smoochum: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 45, at: 30, df: 15, sa: 85, sd: 65, sp: 65 },
        weightkg: 6,
        nfe: true
    },
    Sneasel: {
        types: ['Dark', 'Ice'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 28
    },
    Snubbull: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 40, sd: 40, sp: 30 },
        weightkg: 7.8,
        nfe: true
    },
    Spinarak: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 60, df: 40, sa: 40, sd: 40, sp: 30 },
        weightkg: 8.5,
        nfe: true
    },
    Stantler: {
        types: ['Normal'],
        bs: { hp: 73, at: 95, df: 62, sa: 85, sd: 65, sp: 85 },
        weightkg: 71.2
    },
    Steelix: {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 85, df: 200, sa: 55, sd: 65, sp: 30 },
        weightkg: 400
    },
    Sudowoodo: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 30, sd: 65, sp: 30 },
        weightkg: 38
    },
    Suicune: {
        types: ['Water'],
        bs: { hp: 100, at: 75, df: 115, sa: 90, sd: 115, sp: 85 },
        weightkg: 187,
        gender: 'N'
    },
    Sunflora: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 55, sa: 105, sd: 85, sp: 30 },
        weightkg: 8.5
    },
    Sunkern: {
        types: ['Grass'],
        bs: { hp: 30, at: 30, df: 30, sa: 30, sd: 30, sp: 30 },
        weightkg: 1.8,
        nfe: true
    },
    Swinub: {
        types: ['Ice', 'Ground'],
        bs: { hp: 50, at: 50, df: 40, sa: 30, sd: 30, sp: 50 },
        weightkg: 6.5,
        nfe: true
    },
    Teddiursa: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 8.8,
        nfe: true
    },
    Togepi: {
        types: ['Normal'],
        bs: { hp: 35, at: 20, df: 65, sa: 40, sd: 65, sp: 20 },
        weightkg: 1.5,
        nfe: true
    },
    Togetic: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 40, df: 85, sa: 80, sd: 105, sp: 40 },
        weightkg: 3.2
    },
    Totodile: {
        types: ['Water'],
        bs: { hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43 },
        weightkg: 9.5,
        nfe: true
    },
    Typhlosion: {
        types: ['Fire'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 79.5
    },
    Tyranitar: {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 134, df: 110, sa: 95, sd: 100, sp: 61 },
        weightkg: 202
    },
    Tyrogue: {
        types: ['Fighting'],
        bs: { hp: 35, at: 35, df: 35, sa: 35, sd: 35, sp: 35 },
        weightkg: 21,
        nfe: true
    },
    Umbreon: { types: ['Dark'], bs: { hp: 95, at: 65, df: 110, sa: 60, sd: 130, sp: 65 }, weightkg: 27 },
    Unown: {
        types: ['Psychic'],
        bs: { hp: 48, at: 72, df: 48, sa: 72, sd: 48, sp: 48 },
        weightkg: 5,
        gender: 'N'
    },
    Ursaring: {
        types: ['Normal'],
        bs: { hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 55 },
        weightkg: 125.8
    },
    Wobbuffet: {
        types: ['Psychic'],
        bs: { hp: 190, at: 33, df: 58, sa: 33, sd: 58, sp: 33 },
        weightkg: 28.5
    },
    Wooper: {
        types: ['Water', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        nfe: true
    },
    Xatu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 65, at: 75, df: 70, sa: 95, sd: 70, sp: 95 },
        weightkg: 15
    },
    Yanma: {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 65, df: 45, sa: 75, sd: 45, sp: 95 },
        weightkg: 38
    }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Abra: { abilities: { 0: 'Synchronize' } },
    Aerodactyl: { abilities: { 0: 'Rock Head' } },
    Alakazam: { abilities: { 0: 'Synchronize' } },
    Arbok: { abilities: { 0: 'Intimidate' } },
    Arcanine: { abilities: { 0: 'Intimidate' } },
    Articuno: { abilities: { 0: 'Pressure' } },
    Beedrill: { abilities: { 0: 'Swarm' } },
    Bellsprout: { abilities: { 0: 'Chlorophyll' } },
    Blastoise: { abilities: { 0: 'Torrent' } },
    Bulbasaur: { abilities: { 0: 'Overgrow' } },
    Butterfree: { abilities: { 0: 'Compound Eyes' } },
    Caterpie: { abilities: { 0: 'Shield Dust' } },
    Chansey: { abilities: { 0: 'Natural Cure' } },
    Charizard: { abilities: { 0: 'Blaze' } },
    Charmander: { abilities: { 0: 'Blaze' } },
    Charmeleon: { abilities: { 0: 'Blaze' } },
    Clefable: { abilities: { 0: 'Cute Charm' } },
    Clefairy: { abilities: { 0: 'Cute Charm' } },
    Cloyster: { abilities: { 0: 'Shell Armor' } },
    Cubone: { abilities: { 0: 'Rock Head' } },
    Dewgong: { abilities: { 0: 'Thick Fat' } },
    Diglett: { abilities: { 0: 'Sand Veil' } },
    Ditto: { abilities: { 0: 'Limber' } },
    Dodrio: { abilities: { 0: 'Run Away' } },
    Doduo: { abilities: { 0: 'Run Away' } },
    Dragonair: { abilities: { 0: 'Shed Skin' } },
    Dragonite: { abilities: { 0: 'Inner Focus' } },
    Dratini: { abilities: { 0: 'Shed Skin' } },
    Drowzee: { abilities: { 0: 'Insomnia' } },
    Dugtrio: { abilities: { 0: 'Sand Veil' } },
    Eevee: { abilities: { 0: 'Run Away' } },
    Ekans: { abilities: { 0: 'Intimidate' } },
    Electabuzz: { abilities: { 0: 'Static' } },
    Electrode: { abilities: { 0: 'Soundproof' } },
    Exeggcute: { abilities: { 0: 'Chlorophyll' } },
    Exeggutor: { abilities: { 0: 'Chlorophyll' } },
    'Farfetch\u2019d': { abilities: { 0: 'Keen Eye' } },
    Fearow: { abilities: { 0: 'Keen Eye' } },
    Flareon: { abilities: { 0: 'Flash Fire' } },
    Gastly: { abilities: { 0: 'Levitate' } },
    Gengar: { abilities: { 0: 'Levitate' } },
    Geodude: { abilities: { 0: 'Rock Head' } },
    Gloom: { abilities: { 0: 'Chlorophyll' } },
    Golbat: { abilities: { 0: 'Inner Focus' } },
    Goldeen: { abilities: { 0: 'Swift Swim' } },
    Golduck: { abilities: { 0: 'Damp' } },
    Golem: { abilities: { 0: 'Rock Head' } },
    Graveler: { abilities: { 0: 'Rock Head' } },
    Grimer: { abilities: { 0: 'Stench' } },
    Growlithe: { abilities: { 0: 'Intimidate' } },
    Gyarados: { abilities: { 0: 'Intimidate' } },
    Haunter: { abilities: { 0: 'Levitate' } },
    Hitmonchan: { abilities: { 0: 'Keen Eye' } },
    Hitmonlee: { abilities: { 0: 'Limber' } },
    Horsea: { abilities: { 0: 'Swift Swim' } },
    Hypno: { abilities: { 0: 'Insomnia' } },
    Ivysaur: { abilities: { 0: 'Overgrow' } },
    Jigglypuff: { abilities: { 0: 'Cute Charm' } },
    Jolteon: { abilities: { 0: 'Volt Absorb' } },
    Jynx: { abilities: { 0: 'Oblivious' } },
    Kabuto: { abilities: { 0: 'Swift Swim' } },
    Kabutops: { abilities: { 0: 'Swift Swim' } },
    Kadabra: { abilities: { 0: 'Synchronize' } },
    Kakuna: { abilities: { 0: 'Shed Skin' } },
    Kangaskhan: { abilities: { 0: 'Early Bird' } },
    Kingler: { abilities: { 0: 'Hyper Cutter' } },
    Koffing: { abilities: { 0: 'Levitate' } },
    Krabby: { abilities: { 0: 'Hyper Cutter' } },
    Lapras: { abilities: { 0: 'Water Absorb' } },
    Lickitung: { abilities: { 0: 'Own Tempo' } },
    Machamp: { abilities: { 0: 'Guts' } },
    Machoke: { abilities: { 0: 'Guts' } },
    Machop: { abilities: { 0: 'Guts' } },
    Magikarp: { abilities: { 0: 'Swift Swim' } },
    Magmar: { abilities: { 0: 'Flame Body' } },
    Magnemite: { abilities: { 0: 'Magnet Pull' } },
    Magneton: { abilities: { 0: 'Magnet Pull' } },
    Mankey: { abilities: { 0: 'Vital Spirit' } },
    Marowak: { abilities: { 0: 'Rock Head' } },
    Meowth: { abilities: { 0: 'Pickup' } },
    Metapod: { abilities: { 0: 'Shed Skin' } },
    Mew: { abilities: { 0: 'Synchronize' } },
    Mewtwo: { abilities: { 0: 'Pressure' } },
    Moltres: { abilities: { 0: 'Pressure' } },
    'Mr. Mime': { abilities: { 0: 'Soundproof' } },
    Muk: { abilities: { 0: 'Stench' } },
    Nidoking: { abilities: { 0: 'Poison Point' } },
    Nidoqueen: { abilities: { 0: 'Poison Point' } },
    'Nidoran-F': { abilities: { 0: 'Poison Point' } },
    'Nidoran-M': { abilities: { 0: 'Poison Point' } },
    Nidorina: { abilities: { 0: 'Poison Point' } },
    Nidorino: { abilities: { 0: 'Poison Point' } },
    Ninetales: { abilities: { 0: 'Flash Fire' } },
    Oddish: { abilities: { 0: 'Chlorophyll' } },
    Omanyte: { abilities: { 0: 'Swift Swim' } },
    Omastar: { abilities: { 0: 'Swift Swim' } },
    Onix: { abilities: { 0: 'Rock Head' } },
    Paras: { abilities: { 0: 'Effect Spore' } },
    Parasect: { abilities: { 0: 'Effect Spore' } },
    Persian: { abilities: { 0: 'Limber' } },
    Pidgeot: { abilities: { 0: 'Keen Eye' } },
    Pidgeotto: { abilities: { 0: 'Keen Eye' } },
    Pidgey: { abilities: { 0: 'Keen Eye' } },
    Pikachu: { abilities: { 0: 'Static' } },
    Pinsir: { abilities: { 0: 'Hyper Cutter' } },
    Poliwag: { abilities: { 0: 'Water Absorb' } },
    Poliwhirl: { abilities: { 0: 'Water Absorb' } },
    Poliwrath: { abilities: { 0: 'Water Absorb' } },
    Ponyta: { abilities: { 0: 'Run Away' } },
    Porygon: { abilities: { 0: 'Trace' } },
    Primeape: { abilities: { 0: 'Vital Spirit' } },
    Psyduck: { abilities: { 0: 'Damp' } },
    Raichu: { abilities: { 0: 'Static' } },
    Rapidash: { abilities: { 0: 'Run Away' } },
    Raticate: { abilities: { 0: 'Run Away' } },
    Rattata: { abilities: { 0: 'Run Away' } },
    Rhydon: { abilities: { 0: 'Lightning Rod' } },
    Rhyhorn: { abilities: { 0: 'Lightning Rod' } },
    Sandshrew: { abilities: { 0: 'Sand Veil' } },
    Sandslash: { abilities: { 0: 'Sand Veil' } },
    Scyther: { abilities: { 0: 'Swarm' } },
    Seadra: { abilities: { 0: 'Poison Point' } },
    Seaking: { abilities: { 0: 'Swift Swim' } },
    Seel: { abilities: { 0: 'Thick Fat' } },
    Shellder: { abilities: { 0: 'Shell Armor' } },
    Slowbro: { abilities: { 0: 'Oblivious' } },
    Slowpoke: { abilities: { 0: 'Oblivious' } },
    Snorlax: { abilities: { 0: 'Immunity' } },
    Spearow: { abilities: { 0: 'Keen Eye' } },
    Squirtle: { abilities: { 0: 'Torrent' } },
    Starmie: { abilities: { 0: 'Illuminate' } },
    Staryu: { abilities: { 0: 'Illuminate' } },
    Tangela: { abilities: { 0: 'Chlorophyll' } },
    Tauros: { abilities: { 0: 'Intimidate' } },
    Tentacool: { abilities: { 0: 'Clear Body' } },
    Tentacruel: { abilities: { 0: 'Clear Body' } },
    Vaporeon: { abilities: { 0: 'Water Absorb' } },
    Venomoth: { abilities: { 0: 'Shield Dust' } },
    Venonat: { abilities: { 0: 'Compound Eyes' } },
    Venusaur: { abilities: { 0: 'Overgrow' } },
    Victreebel: { abilities: { 0: 'Chlorophyll' } },
    Vileplume: { abilities: { 0: 'Chlorophyll' } },
    Voltorb: { abilities: { 0: 'Soundproof' } },
    Vulpix: { abilities: { 0: 'Flash Fire' } },
    Wartortle: { abilities: { 0: 'Torrent' } },
    Weedle: { abilities: { 0: 'Shield Dust' } },
    Weepinbell: { abilities: { 0: 'Chlorophyll' } },
    Weezing: { abilities: { 0: 'Levitate' } },
    Wigglytuff: { abilities: { 0: 'Cute Charm' } },
    Zapdos: { abilities: { 0: 'Pressure' } },
    Zubat: { abilities: { 0: 'Inner Focus' } },
    Aipom: { abilities: { 0: 'Run Away' } },
    Ampharos: { abilities: { 0: 'Static' } },
    Ariados: { abilities: { 0: 'Swarm' } },
    Azumarill: { abilities: { 0: 'Thick Fat' } },
    Bayleef: { abilities: { 0: 'Overgrow' } },
    Bellossom: { abilities: { 0: 'Chlorophyll' } },
    Blissey: { abilities: { 0: 'Natural Cure' } },
    Celebi: { abilities: { 0: 'Natural Cure' } },
    Chikorita: { abilities: { 0: 'Overgrow' } },
    Chinchou: { abilities: { 0: 'Volt Absorb' } },
    Cleffa: { abilities: { 0: 'Cute Charm' } },
    Corsola: { abilities: { 0: 'Hustle' } },
    Crobat: { abilities: { 0: 'Inner Focus' } },
    Croconaw: { abilities: { 0: 'Torrent' } },
    Cyndaquil: { abilities: { 0: 'Blaze' } },
    Delibird: { abilities: { 0: 'Vital Spirit' } },
    Donphan: { abilities: { 0: 'Sturdy' } },
    Dunsparce: { abilities: { 0: 'Serene Grace' } },
    Elekid: { abilities: { 0: 'Static' } },
    Entei: { abilities: { 0: 'Pressure' } },
    Espeon: { abilities: { 0: 'Synchronize' } },
    Feraligatr: { abilities: { 0: 'Torrent' } },
    Flaaffy: { abilities: { 0: 'Static' } },
    Forretress: { abilities: { 0: 'Sturdy' } },
    Furret: { abilities: { 0: 'Run Away' } },
    Girafarig: { abilities: { 0: 'Inner Focus' } },
    Gligar: { abilities: { 0: 'Hyper Cutter' } },
    Granbull: { abilities: { 0: 'Intimidate' } },
    Heracross: { abilities: { 0: 'Swarm' } },
    Hitmontop: { abilities: { 0: 'Intimidate' } },
    'Ho-Oh': { abilities: { 0: 'Pressure' } },
    Hoothoot: { abilities: { 0: 'Insomnia' } },
    Hoppip: { abilities: { 0: 'Chlorophyll' } },
    Houndoom: { abilities: { 0: 'Early Bird' } },
    Houndour: { abilities: { 0: 'Early Bird' } },
    Igglybuff: { abilities: { 0: 'Cute Charm' } },
    Jumpluff: { abilities: { 0: 'Chlorophyll' } },
    Kingdra: { abilities: { 0: 'Swift Swim' } },
    Lanturn: { abilities: { 0: 'Volt Absorb' } },
    Larvitar: { abilities: { 0: 'Guts' } },
    Ledian: { abilities: { 0: 'Swarm' } },
    Ledyba: { abilities: { 0: 'Swarm' } },
    Lugia: { abilities: { 0: 'Pressure' } },
    Magby: { abilities: { 0: 'Flame Body' } },
    Magcargo: { abilities: { 0: 'Magma Armor' } },
    Mantine: { abilities: { 0: 'Swift Swim' } },
    Mareep: { abilities: { 0: 'Static' } },
    Marill: { abilities: { 0: 'Thick Fat' } },
    Meganium: { abilities: { 0: 'Overgrow' } },
    Miltank: { abilities: { 0: 'Thick Fat' } },
    Misdreavus: { abilities: { 0: 'Levitate' } },
    Murkrow: { abilities: { 0: 'Insomnia' } },
    Natu: { abilities: { 0: 'Synchronize' } },
    Noctowl: { abilities: { 0: 'Insomnia' } },
    Octillery: { abilities: { 0: 'Suction Cups' } },
    Phanpy: { abilities: { 0: 'Pickup' } },
    Pichu: { abilities: { 0: 'Static' } },
    Piloswine: { abilities: { 0: 'Oblivious' } },
    Pineco: { abilities: { 0: 'Sturdy' } },
    Politoed: { abilities: { 0: 'Water Absorb' } },
    Porygon2: { abilities: { 0: 'Trace' } },
    Pupitar: { abilities: { 0: 'Shed Skin' } },
    Quagsire: { abilities: { 0: 'Damp' } },
    Quilava: { abilities: { 0: 'Blaze' } },
    Qwilfish: { abilities: { 0: 'Poison Point' } },
    Raikou: { abilities: { 0: 'Pressure' } },
    Remoraid: { abilities: { 0: 'Hustle' } },
    Scizor: { abilities: { 0: 'Technician' } },
    Sentret: { abilities: { 0: 'Run Away' } },
    Shuckle: { abilities: { 0: 'Sturdy' } },
    Skarmory: { abilities: { 0: 'Keen Eye' } },
    Skiploom: { abilities: { 0: 'Chlorophyll' } },
    Slowking: { abilities: { 0: 'Oblivious' } },
    Slugma: { abilities: { 0: 'Magma Armor' } },
    Smeargle: { abilities: { 0: 'Own Tempo' } },
    Smoochum: { abilities: { 0: 'Oblivious' } },
    Sneasel: { abilities: { 0: 'Inner Focus' } },
    Snubbull: { abilities: { 0: 'Intimidate' } },
    Spinarak: { abilities: { 0: 'Swarm' } },
    Stantler: { abilities: { 0: 'Intimidate' } },
    Steelix: { abilities: { 0: 'Rock Head' } },
    Sudowoodo: { abilities: { 0: 'Sturdy' } },
    Suicune: { abilities: { 0: 'Pressure' } },
    Sunflora: { abilities: { 0: 'Chlorophyll' } },
    Sunkern: { abilities: { 0: 'Chlorophyll' } },
    Swinub: { abilities: { 0: 'Oblivious' } },
    Teddiursa: { abilities: { 0: 'Pickup' } },
    Togepi: { abilities: { 0: 'Hustle' } },
    Togetic: { abilities: { 0: 'Hustle' } },
    Totodile: { abilities: { 0: 'Torrent' } },
    Typhlosion: { abilities: { 0: 'Blaze' } },
    Tyranitar: { abilities: { 0: 'Sand Stream' } },
    Tyrogue: { abilities: { 0: 'Guts' } },
    Umbreon: { abilities: { 0: 'Synchronize' } },
    Unown: { abilities: { 0: 'Levitate' } },
    Ursaring: { abilities: { 0: 'Guts' } },
    Wobbuffet: { abilities: { 0: 'Shadow Tag' } },
    Wooper: { abilities: { 0: 'Damp' } },
    Xatu: { abilities: { 0: 'Synchronize' } },
    Yanma: { abilities: { 0: 'Speed Boost' } },
    Absol: {
        types: ['Dark'],
        bs: { hp: 65, at: 130, df: 60, sa: 75, sd: 60, sp: 75 },
        weightkg: 47,
        abilities: { 0: 'Pressure' }
    },
    Aggron: {
        types: ['Steel', 'Rock'],
        bs: { hp: 70, at: 110, df: 180, sa: 60, sd: 60, sp: 50 },
        weightkg: 360,
        abilities: { 0: 'Sturdy' }
    },
    Altaria: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 75, at: 70, df: 90, sa: 70, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Natural Cure' }
    },
    Anorith: {
        types: ['Rock', 'Bug'],
        bs: { hp: 45, at: 95, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Armaldo: {
        types: ['Rock', 'Bug'],
        bs: { hp: 75, at: 125, df: 100, sa: 70, sd: 80, sp: 45 },
        weightkg: 68.2,
        abilities: { 0: 'Battle Armor' }
    },
    Aron: {
        types: ['Steel', 'Rock'],
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        weightkg: 60,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Azurill: {
        types: ['Normal'],
        bs: { hp: 50, at: 20, df: 40, sa: 20, sd: 40, sp: 20 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Bagon: {
        types: ['Dragon'],
        bs: { hp: 45, at: 75, df: 60, sa: 40, sd: 30, sp: 50 },
        weightkg: 42.1,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Baltoy: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 40, at: 40, df: 55, sa: 40, sd: 70, sp: 55 },
        weightkg: 21.5,
        abilities: { 0: 'Levitate' },
        nfe: true,
        gender: 'N'
    },
    Banette: {
        types: ['Ghost'],
        bs: { hp: 64, at: 115, df: 65, sa: 83, sd: 63, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Insomnia' }
    },
    Barboach: {
        types: ['Water', 'Ground'],
        bs: { hp: 50, at: 48, df: 43, sa: 46, sd: 41, sp: 60 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Beautifly: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 70, df: 50, sa: 90, sd: 50, sp: 65 },
        weightkg: 28.4,
        abilities: { 0: 'Swarm' }
    },
    Beldum: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        weightkg: 95.2,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Blaziken: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Speed Boost' }
    },
    Breloom: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 60, at: 130, df: 80, sa: 60, sd: 60, sp: 70 },
        weightkg: 39.2,
        abilities: { 0: 'Effect Spore' }
    },
    Cacnea: {
        types: ['Grass'],
        bs: { hp: 50, at: 85, df: 40, sa: 85, sd: 40, sp: 35 },
        weightkg: 51.3,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Cacturne: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 115, df: 60, sa: 115, sd: 60, sp: 55 },
        weightkg: 77.4,
        abilities: { 0: 'Sand Veil' }
    },
    Camerupt: {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 105, sd: 75, sp: 40 },
        weightkg: 220,
        abilities: { 0: 'Magma Armor' }
    },
    Carvanha: {
        types: ['Water', 'Dark'],
        bs: { hp: 45, at: 90, df: 20, sa: 65, sd: 20, sp: 65 },
        weightkg: 20.8,
        nfe: true,
        abilities: { 0: 'Rough Skin' }
    },
    Cascoon: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 11.5,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Castform: {
        types: ['Normal'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        otherFormes: ['Castform-Rainy', 'Castform-Snowy', 'Castform-Sunny']
    },
    'Castform-Rainy': {
        types: ['Water'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    'Castform-Snowy': {
        types: ['Ice'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    'Castform-Sunny': {
        types: ['Fire'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    Chimecho: {
        types: ['Psychic'],
        bs: { hp: 65, at: 50, df: 70, sa: 95, sd: 80, sp: 65 },
        weightkg: 1,
        abilities: { 0: 'Levitate' }
    },
    Clamperl: {
        types: ['Water'],
        bs: { hp: 35, at: 64, df: 85, sa: 74, sd: 55, sp: 32 },
        weightkg: 52.5,
        nfe: true,
        abilities: { 0: 'Shell Armor' }
    },
    Claydol: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 60, at: 70, df: 105, sa: 70, sd: 120, sp: 75 },
        weightkg: 108,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Combusken: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 60, sp: 55 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Corphish: {
        types: ['Water'],
        bs: { hp: 43, at: 80, df: 65, sa: 50, sd: 35, sp: 35 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Cradily: {
        types: ['Rock', 'Grass'],
        bs: { hp: 86, at: 81, df: 97, sa: 81, sd: 107, sp: 43 },
        weightkg: 60.4,
        abilities: { 0: 'Suction Cups' }
    },
    Crawdaunt: {
        types: ['Water', 'Dark'],
        bs: { hp: 63, at: 120, df: 85, sa: 90, sd: 55, sp: 55 },
        weightkg: 32.8,
        abilities: { 0: 'Hyper Cutter' }
    },
    Delcatty: {
        types: ['Normal'],
        bs: { hp: 70, at: 65, df: 65, sa: 55, sd: 55, sp: 70 },
        weightkg: 32.6,
        abilities: { 0: 'Cute Charm' }
    },
    Deoxys: {
        types: ['Psychic'],
        bs: { hp: 50, at: 150, df: 50, sa: 150, sd: 50, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed']
    },
    'Deoxys-Attack': {
        types: ['Psychic'],
        bs: { hp: 50, at: 180, df: 20, sa: 180, sd: 20, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Defense': {
        types: ['Psychic'],
        bs: { hp: 50, at: 70, df: 160, sa: 70, sd: 160, sp: 90 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Speed': {
        types: ['Psychic'],
        bs: { hp: 50, at: 95, df: 90, sa: 95, sd: 90, sp: 180 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    Dusclops: {
        types: ['Ghost'],
        bs: { hp: 40, at: 70, df: 130, sa: 60, sd: 130, sp: 25 },
        weightkg: 30.6,
        abilities: { 0: 'Pressure' }
    },
    Duskull: {
        types: ['Ghost'],
        bs: { hp: 20, at: 40, df: 90, sa: 30, sd: 90, sp: 25 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Levitate' }
    },
    Dustox: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 50, df: 70, sa: 50, sd: 90, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Shield Dust' }
    },
    Electrike: {
        types: ['Electric'],
        bs: { hp: 40, at: 45, df: 40, sa: 65, sd: 40, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Static' }
    },
    Exploud: {
        types: ['Normal'],
        bs: { hp: 104, at: 91, df: 63, sa: 91, sd: 63, sp: 68 },
        weightkg: 84,
        abilities: { 0: 'Soundproof' }
    },
    Feebas: {
        types: ['Water'],
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        weightkg: 7.4,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flygon: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 80, at: 100, df: 80, sa: 80, sd: 80, sp: 100 },
        weightkg: 82,
        abilities: { 0: 'Levitate' }
    },
    Gardevoir: {
        types: ['Psychic'],
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        weightkg: 48.4,
        abilities: { 0: 'Synchronize' }
    },
    Glalie: {
        types: ['Ice'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 256.5,
        abilities: { 0: 'Inner Focus' }
    },
    Gorebyss: {
        types: ['Water'],
        bs: { hp: 55, at: 84, df: 105, sa: 114, sd: 75, sp: 52 },
        weightkg: 22.6,
        abilities: { 0: 'Swift Swim' }
    },
    Groudon: {
        types: ['Ground'],
        bs: { hp: 100, at: 150, df: 140, sa: 100, sd: 90, sp: 90 },
        weightkg: 950,
        abilities: { 0: 'Drought' },
        gender: 'N'
    },
    Grovyle: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        weightkg: 21.6,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Grumpig: {
        types: ['Psychic'],
        bs: { hp: 80, at: 45, df: 65, sa: 90, sd: 110, sp: 80 },
        weightkg: 71.5,
        abilities: { 0: 'Thick Fat' }
    },
    Gulpin: {
        types: ['Poison'],
        bs: { hp: 70, at: 43, df: 53, sa: 43, sd: 53, sp: 40 },
        weightkg: 10.3,
        nfe: true,
        abilities: { 0: 'Liquid Ooze' }
    },
    Hariyama: {
        types: ['Fighting'],
        bs: { hp: 144, at: 120, df: 60, sa: 40, sd: 60, sp: 50 },
        weightkg: 253.8,
        abilities: { 0: 'Thick Fat' }
    },
    Huntail: {
        types: ['Water'],
        bs: { hp: 55, at: 104, df: 105, sa: 94, sd: 75, sp: 52 },
        weightkg: 27,
        abilities: { 0: 'Swift Swim' }
    },
    Illumise: {
        types: ['Bug'],
        bs: { hp: 65, at: 47, df: 55, sa: 73, sd: 75, sp: 85 },
        abilities: { 0: 'Oblivious' },
        weightkg: 17.7
    },
    Jirachi: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.1,
        abilities: { 0: 'Serene Grace' },
        gender: 'N'
    },
    Kecleon: {
        types: ['Normal'],
        bs: { hp: 60, at: 90, df: 70, sa: 60, sd: 120, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Color Change' }
    },
    Kirlia: {
        types: ['Psychic'],
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Kyogre: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 90, sa: 150, sd: 140, sp: 90 },
        weightkg: 352,
        abilities: { 0: 'Drizzle' },
        gender: 'N'
    },
    Lairon: {
        types: ['Steel', 'Rock'],
        bs: { hp: 60, at: 90, df: 140, sa: 50, sd: 50, sp: 40 },
        weightkg: 120,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Latias: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 80, df: 90, sa: 110, sd: 130, sp: 110 },
        weightkg: 40,
        abilities: { 0: 'Levitate' }
    },
    Latios: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 90, df: 80, sa: 130, sd: 110, sp: 110 },
        weightkg: 60,
        abilities: { 0: 'Levitate' }
    },
    Lileep: {
        types: ['Rock', 'Grass'],
        bs: { hp: 66, at: 41, df: 77, sa: 61, sd: 87, sp: 23 },
        weightkg: 23.8,
        nfe: true,
        abilities: { 0: 'Suction Cups' }
    },
    Linoone: {
        types: ['Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' }
    },
    Lombre: {
        types: ['Water', 'Grass'],
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        weightkg: 32.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Lotad: {
        types: ['Water', 'Grass'],
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        weightkg: 2.6,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Loudred: {
        types: ['Normal'],
        bs: { hp: 84, at: 71, df: 43, sa: 71, sd: 43, sp: 48 },
        weightkg: 40.5,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Ludicolo: {
        types: ['Water', 'Grass'],
        bs: { hp: 80, at: 70, df: 70, sa: 90, sd: 100, sp: 70 },
        weightkg: 55,
        abilities: { 0: 'Swift Swim' }
    },
    Lunatone: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 85, sp: 70 },
        weightkg: 168,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Luvdisc: {
        types: ['Water'],
        bs: { hp: 43, at: 30, df: 55, sa: 40, sd: 65, sp: 97 },
        weightkg: 8.7,
        abilities: { 0: 'Swift Swim' }
    },
    Makuhita: {
        types: ['Fighting'],
        bs: { hp: 72, at: 60, df: 30, sa: 20, sd: 30, sp: 25 },
        weightkg: 86.4,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Manectric: {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 60, sa: 105, sd: 60, sp: 105 },
        weightkg: 40.2,
        abilities: { 0: 'Static' }
    },
    Marshtomp: {
        types: ['Water', 'Ground'],
        bs: { hp: 70, at: 85, df: 70, sa: 60, sd: 70, sp: 50 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Masquerain: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 60, df: 62, sa: 80, sd: 82, sp: 60 },
        weightkg: 3.6,
        abilities: { 0: 'Intimidate' }
    },
    Mawile: {
        types: ['Steel'],
        bs: { hp: 50, at: 85, df: 85, sa: 55, sd: 55, sp: 50 },
        weightkg: 11.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Medicham: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 80 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' }
    },
    Meditite: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        weightkg: 11.2,
        nfe: true,
        abilities: { 0: 'Pure Power' }
    },
    Metagross: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        weightkg: 550,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Metang: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        weightkg: 202.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Mightyena: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 70 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Milotic: {
        types: ['Water'],
        bs: { hp: 95, at: 60, df: 79, sa: 100, sd: 125, sp: 81 },
        weightkg: 162,
        abilities: { 0: 'Marvel Scale' }
    },
    Minun: {
        types: ['Electric'],
        bs: { hp: 60, at: 40, df: 50, sa: 75, sd: 85, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Minus' }
    },
    Mudkip: {
        types: ['Water'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 7.6,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Nincada: {
        types: ['Bug', 'Ground'],
        bs: { hp: 31, at: 45, df: 90, sa: 30, sd: 30, sp: 40 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Ninjask: {
        types: ['Bug', 'Flying'],
        bs: { hp: 61, at: 90, df: 45, sa: 50, sd: 50, sp: 160 },
        weightkg: 12,
        abilities: { 0: 'Speed Boost' }
    },
    Nosepass: {
        types: ['Rock'],
        bs: { hp: 30, at: 45, df: 135, sa: 45, sd: 90, sp: 30 },
        weightkg: 97,
        abilities: { 0: 'Sturdy' }
    },
    Numel: {
        types: ['Fire', 'Ground'],
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 24,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Nuzleaf: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Pelipper: {
        types: ['Water', 'Flying'],
        bs: { hp: 60, at: 50, df: 100, sa: 85, sd: 70, sp: 65 },
        weightkg: 28,
        abilities: { 0: 'Keen Eye' }
    },
    Plusle: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 40, sa: 85, sd: 75, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Plus' }
    },
    Poochyena: {
        types: ['Dark'],
        bs: { hp: 35, at: 55, df: 35, sa: 30, sd: 30, sp: 35 },
        weightkg: 13.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Ralts: {
        types: ['Psychic'],
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Rayquaza: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 150, df: 90, sa: 150, sd: 90, sp: 95 },
        weightkg: 206.5,
        abilities: { 0: 'Air Lock' },
        gender: 'N'
    },
    Regice: {
        types: ['Ice'],
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        weightkg: 175,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Regirock: {
        types: ['Rock'],
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        weightkg: 230,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Registeel: {
        types: ['Steel'],
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        weightkg: 205,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Relicanth: {
        types: ['Water', 'Rock'],
        bs: { hp: 100, at: 90, df: 130, sa: 45, sd: 65, sp: 55 },
        weightkg: 23.4,
        abilities: { 0: 'Swift Swim' }
    },
    Roselia: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 60, df: 45, sa: 100, sd: 80, sp: 65 },
        weightkg: 2,
        abilities: { 0: 'Natural Cure' }
    },
    Sableye: {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 75, df: 75, sa: 65, sd: 65, sp: 50 },
        weightkg: 11,
        abilities: { 0: 'Keen Eye' }
    },
    Salamence: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 135, df: 80, sa: 110, sd: 80, sp: 100 },
        weightkg: 102.6,
        abilities: { 0: 'Intimidate' }
    },
    Sceptile: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 65, sa: 105, sd: 85, sp: 120 },
        weightkg: 52.2,
        abilities: { 0: 'Overgrow' }
    },
    Sealeo: {
        types: ['Ice', 'Water'],
        bs: { hp: 90, at: 60, df: 70, sa: 75, sd: 70, sp: 45 },
        weightkg: 87.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Seedot: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Seviper: {
        types: ['Poison'],
        bs: { hp: 73, at: 100, df: 60, sa: 100, sd: 60, sp: 65 },
        weightkg: 52.5,
        abilities: { 0: 'Shed Skin' }
    },
    Sharpedo: {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 120, df: 40, sa: 95, sd: 40, sp: 95 },
        weightkg: 88.8,
        abilities: { 0: 'Speed Boost' }
    },
    Shedinja: {
        types: ['Bug', 'Ghost'],
        bs: { hp: 1, at: 90, df: 45, sa: 30, sd: 30, sp: 40 },
        weightkg: 1.2,
        abilities: { 0: 'Wonder Guard' },
        gender: 'N'
    },
    Shelgon: {
        types: ['Dragon'],
        bs: { hp: 65, at: 95, df: 100, sa: 60, sd: 50, sp: 50 },
        weightkg: 110.5,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Shiftry: {
        types: ['Grass', 'Dark'],
        bs: { hp: 90, at: 100, df: 60, sa: 90, sd: 60, sp: 80 },
        weightkg: 59.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Shroomish: {
        types: ['Grass'],
        bs: { hp: 60, at: 40, df: 60, sa: 40, sd: 60, sp: 35 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Shuppet: {
        types: ['Ghost'],
        bs: { hp: 44, at: 75, df: 35, sa: 63, sd: 33, sp: 45 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Insomnia' }
    },
    Silcoon: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 10,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Skitty: {
        types: ['Normal'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 35, sp: 50 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Slaking: {
        types: ['Normal'],
        bs: { hp: 150, at: 160, df: 100, sa: 95, sd: 65, sp: 100 },
        weightkg: 130.5,
        abilities: { 0: 'Truant' }
    },
    Slakoth: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 35, sd: 35, sp: 30 },
        weightkg: 24,
        abilities: { 0: 'Truant' },
        nfe: true
    },
    Snorunt: {
        types: ['Ice'],
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        weightkg: 16.8,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Solrock: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 95, df: 85, sa: 55, sd: 65, sp: 70 },
        weightkg: 154,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Spheal: {
        types: ['Ice', 'Water'],
        bs: { hp: 70, at: 40, df: 50, sa: 55, sd: 50, sp: 25 },
        weightkg: 39.5,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Spinda: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 60, sd: 60, sp: 60 },
        weightkg: 5,
        abilities: { 0: 'Own Tempo' }
    },
    Spoink: {
        types: ['Psychic'],
        bs: { hp: 60, at: 25, df: 35, sa: 70, sd: 80, sp: 60 },
        weightkg: 30.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Surskit: {
        types: ['Bug', 'Water'],
        bs: { hp: 40, at: 30, df: 32, sa: 50, sd: 52, sp: 65 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Swablu: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Swalot: {
        types: ['Poison'],
        bs: { hp: 100, at: 73, df: 83, sa: 73, sd: 83, sp: 55 },
        weightkg: 80,
        abilities: { 0: 'Liquid Ooze' }
    },
    Swampert: {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 60 },
        weightkg: 81.9,
        abilities: { 0: 'Torrent' }
    },
    Swellow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 85, df: 60, sa: 50, sd: 50, sp: 125 },
        weightkg: 19.8,
        abilities: { 0: 'Guts' }
    },
    Taillow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 85 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Torchic: {
        types: ['Fire'],
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Torkoal: {
        types: ['Fire'],
        bs: { hp: 70, at: 85, df: 140, sa: 85, sd: 70, sp: 20 },
        weightkg: 80.4,
        abilities: { 0: 'White Smoke' }
    },
    Trapinch: {
        types: ['Ground'],
        bs: { hp: 45, at: 100, df: 45, sa: 45, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Treecko: {
        types: ['Grass'],
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Tropius: {
        types: ['Grass', 'Flying'],
        bs: { hp: 99, at: 68, df: 83, sa: 72, sd: 87, sp: 51 },
        weightkg: 100,
        abilities: { 0: 'Chlorophyll' }
    },
    Vibrava: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 70 },
        weightkg: 15.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Vigoroth: {
        types: ['Normal'],
        bs: { hp: 80, at: 80, df: 80, sa: 55, sd: 55, sp: 90 },
        weightkg: 46.5,
        abilities: { 0: 'Vital Spirit' },
        nfe: true
    },
    Volbeat: {
        types: ['Bug'],
        bs: { hp: 65, at: 73, df: 55, sa: 47, sd: 75, sp: 85 },
        weightkg: 17.7,
        abilities: { 0: 'Illuminate' }
    },
    Wailmer: {
        types: ['Water'],
        bs: { hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60 },
        weightkg: 130,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Wailord: {
        types: ['Water'],
        bs: { hp: 170, at: 90, df: 45, sa: 90, sd: 45, sp: 60 },
        weightkg: 398,
        abilities: { 0: 'Water Veil' }
    },
    Walrein: {
        types: ['Ice', 'Water'],
        bs: { hp: 110, at: 80, df: 90, sa: 95, sd: 90, sp: 65 },
        weightkg: 150.6,
        abilities: { 0: 'Thick Fat' }
    },
    Whiscash: {
        types: ['Water', 'Ground'],
        bs: { hp: 110, at: 78, df: 73, sa: 76, sd: 71, sp: 60 },
        weightkg: 23.6,
        abilities: { 0: 'Oblivious' }
    },
    Whismur: {
        types: ['Normal'],
        bs: { hp: 64, at: 51, df: 23, sa: 51, sd: 23, sp: 28 },
        weightkg: 16.3,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Wingull: {
        types: ['Water', 'Flying'],
        bs: { hp: 40, at: 30, df: 30, sa: 55, sd: 30, sp: 85 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Wurmple: {
        types: ['Bug'],
        bs: { hp: 45, at: 45, df: 35, sa: 20, sd: 30, sp: 20 },
        weightkg: 3.6,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Wynaut: {
        types: ['Psychic'],
        bs: { hp: 95, at: 23, df: 48, sa: 23, sd: 48, sp: 23 },
        weightkg: 14,
        nfe: true,
        abilities: { 0: 'Shadow Tag' }
    },
    Zangoose: {
        types: ['Normal'],
        bs: { hp: 73, at: 115, df: 60, sa: 60, sd: 60, sp: 90 },
        weightkg: 40.3,
        abilities: { 0: 'Immunity' }
    },
    Zigzagoon: {
        types: ['Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Aipom: { nfe: true },
    Dusclops: { nfe: true },
    Electabuzz: { nfe: true },
    Gligar: { nfe: true },
    Lickitung: { nfe: true },
    Magmar: { nfe: true },
    Magneton: { nfe: true },
    Misdreavus: { nfe: true },
    Murkrow: { nfe: true },
    Nosepass: { nfe: true },
    Piloswine: { nfe: true },
    Pichu: { otherFormes: ['Pichu-Spiky-eared'] },
    Porygon2: { nfe: true },
    Rhydon: { nfe: true },
    Roselia: { nfe: true },
    Sneasel: { nfe: true },
    Tangela: { nfe: true },
    Togetic: { nfe: true },
    Yanma: { nfe: true },
    Abomasnow: {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 92, df: 75, sa: 92, sd: 85, sp: 60 },
        weightkg: 135.5,
        abilities: { 0: 'Snow Warning' }
    },
    Ambipom: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 115 },
        weightkg: 20.3,
        abilities: { 0: 'Technician' }
    },
    Arceus: {
        types: ['Normal'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        otherFormes: [
            'Arceus-Bug',
            'Arceus-Dark',
            'Arceus-Dragon',
            'Arceus-Electric',
            'Arceus-Fighting',
            'Arceus-Fire',
            'Arceus-Flying',
            'Arceus-Ghost',
            'Arceus-Grass',
            'Arceus-Ground',
            'Arceus-Ice',
            'Arceus-Poison',
            'Arceus-Psychic',
            'Arceus-Rock',
            'Arceus-Steel',
            'Arceus-Water',
        ]
    },
    'Arceus-Bug': {
        types: ['Bug'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dark': {
        types: ['Dark'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dragon': {
        types: ['Dragon'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Electric': {
        types: ['Electric'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Fighting': {
        types: ['Fighting'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Fire': {
        types: ['Fire'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Flying': {
        types: ['Flying'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ghost': {
        types: ['Ghost'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Grass': {
        types: ['Grass'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ground': {
        types: ['Ground'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ice': {
        types: ['Ice'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Poison': {
        types: ['Poison'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Psychic': {
        types: ['Psychic'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Rock': {
        types: ['Rock'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Steel': {
        types: ['Steel'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Water': {
        types: ['Water'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    Arghonaut: {
        types: ['Water', 'Fighting'],
        bs: { hp: 105, at: 110, df: 95, sa: 70, sd: 100, sp: 75 },
        weightkg: 151,
        abilities: { 0: 'Unaware' }
    },
    Azelf: {
        types: ['Psychic'],
        bs: { hp: 75, at: 125, df: 70, sa: 125, sd: 70, sp: 115 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Bastiodon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 52, df: 168, sa: 47, sd: 138, sp: 30 },
        weightkg: 149.5,
        abilities: { 0: 'Sturdy' }
    },
    Bibarel: {
        types: ['Normal', 'Water'],
        bs: { hp: 79, at: 85, df: 60, sa: 55, sd: 60, sp: 71 },
        weightkg: 31.5,
        abilities: { 0: 'Simple' }
    },
    Bidoof: {
        types: ['Normal'],
        bs: { hp: 59, at: 45, df: 40, sa: 35, sd: 40, sp: 31 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Simple' }
    },
    Bonsly: {
        types: ['Rock'],
        bs: { hp: 50, at: 80, df: 95, sa: 10, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Breezi: {
        types: ['Poison', 'Flying'],
        bs: { hp: 50, at: 46, df: 69, sa: 60, sd: 50, sp: 75 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Unburden' }
    },
    Bronzong: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 67, at: 89, df: 116, sa: 79, sd: 116, sp: 33 },
        weightkg: 187,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Bronzor: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23 },
        weightkg: 60.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Budew: {
        types: ['Grass', 'Poison'],
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Buizel: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 35, sa: 60, sd: 30, sp: 85 },
        weightkg: 29.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Buneary: {
        types: ['Normal'],
        bs: { hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Burmy: {
        types: ['Bug'],
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 },
        weightkg: 3.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Carnivine: {
        types: ['Grass'],
        bs: { hp: 74, at: 100, df: 72, sa: 90, sd: 72, sp: 46 },
        weightkg: 27,
        abilities: { 0: 'Levitate' }
    },
    Chatot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 76, at: 65, df: 45, sa: 92, sd: 42, sp: 91 },
        weightkg: 1.9,
        abilities: { 0: 'Keen Eye' }
    },
    Cherrim: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        otherFormes: ['Cherrim-Sunshine']
    },
    'Cherrim-Sunshine': {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        baseSpecies: 'Cherrim'
    },
    Cherubi: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 45, sa: 62, sd: 53, sp: 35 },
        weightkg: 3.3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Chimchar: {
        types: ['Fire'],
        bs: { hp: 44, at: 58, df: 44, sa: 58, sd: 44, sp: 61 },
        weightkg: 6.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Chingling: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 65, sd: 50, sp: 45 },
        weightkg: 0.6,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Colossoil: {
        types: ['Ground', 'Dark'],
        bs: { hp: 133, at: 122, df: 72, sa: 71, sd: 72, sp: 95 },
        weightkg: 683.6,
        abilities: { 0: 'Rebound' }
    },
    Combee: {
        types: ['Bug', 'Flying'],
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Honey Gather' }
    },
    Cranidos: {
        types: ['Rock'],
        bs: { hp: 67, at: 125, df: 40, sa: 30, sd: 30, sp: 58 },
        weightkg: 31.5,
        nfe: true,
        abilities: { 0: 'Mold Breaker' }
    },
    Cresselia: {
        types: ['Psychic'],
        bs: { hp: 120, at: 70, df: 120, sa: 75, sd: 130, sp: 85 },
        weightkg: 85.6,
        abilities: { 0: 'Levitate' }
    },
    Croagunk: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 48, at: 61, df: 40, sa: 61, sd: 40, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Cyclohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 108, at: 60, df: 118, sa: 112, sd: 70, sp: 80 },
        weightkg: 59,
        abilities: { 0: 'Shield Dust' }
    },
    Darkrai: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 90, sa: 135, sd: 90, sp: 125 },
        weightkg: 50.5,
        abilities: { 0: 'Bad Dreams' },
        gender: 'N'
    },
    Dialga: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 120, df: 120, sa: 150, sd: 100, sp: 90 },
        weightkg: 683,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Dorsoil: {
        types: ['Ground'],
        bs: { hp: 103, at: 72, df: 52, sa: 61, sd: 52, sp: 65 },
        weightkg: 145,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Drapion: {
        types: ['Poison', 'Dark'],
        bs: { hp: 70, at: 90, df: 110, sa: 60, sd: 75, sp: 95 },
        weightkg: 61.5,
        abilities: { 0: 'Battle Armor' }
    },
    Drifblim: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 150, at: 80, df: 44, sa: 90, sd: 54, sp: 80 },
        weightkg: 15,
        abilities: { 0: 'Aftermath' }
    },
    Drifloon: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Aftermath' }
    },
    Duohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 88, at: 40, df: 103, sa: 77, sd: 60, sp: 60 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Dusknoir: {
        types: ['Ghost'],
        bs: { hp: 45, at: 100, df: 135, sa: 65, sd: 135, sp: 45 },
        weightkg: 106.6,
        abilities: { 0: 'Pressure' }
    },
    Electivire: {
        types: ['Electric'],
        bs: { hp: 75, at: 123, df: 67, sa: 95, sd: 85, sp: 95 },
        weightkg: 138.6,
        abilities: { 0: 'Motor Drive' }
    },
    Embirch: {
        types: ['Fire', 'Grass'],
        bs: { hp: 60, at: 40, df: 55, sa: 65, sd: 40, sp: 60 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Reckless' }
    },
    Empoleon: {
        types: ['Water', 'Steel'],
        bs: { hp: 84, at: 86, df: 88, sa: 111, sd: 101, sp: 60 },
        weightkg: 84.5,
        abilities: { 0: 'Torrent' }
    },
    Fidgit: {
        types: ['Poison', 'Ground'],
        bs: { hp: 95, at: 76, df: 109, sa: 90, sd: 80, sp: 105 },
        weightkg: 53,
        abilities: { 0: 'Persistent' }
    },
    Finneon: {
        types: ['Water'],
        bs: { hp: 49, at: 49, df: 56, sa: 49, sd: 61, sp: 66 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flarelm: {
        types: ['Fire', 'Grass'],
        bs: { hp: 90, at: 50, df: 95, sa: 75, sd: 70, sp: 40 },
        weightkg: 73,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Floatzel: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 55, sa: 85, sd: 50, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Swift Swim' }
    },
    Froslass: {
        types: ['Ice', 'Ghost'],
        bs: { hp: 70, at: 80, df: 70, sa: 80, sd: 70, sp: 110 },
        weightkg: 26.6,
        abilities: { 0: 'Snow Cloak' }
    },
    Gabite: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 68, at: 90, df: 65, sa: 50, sd: 55, sp: 82 },
        weightkg: 56,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Gallade: {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 115, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Steadfast' }
    },
    Garchomp: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102 },
        weightkg: 95,
        abilities: { 0: 'Sand Veil' }
    },
    Gastrodon: {
        types: ['Water', 'Ground'],
        bs: { hp: 111, at: 83, df: 68, sa: 92, sd: 82, sp: 39 },
        weightkg: 29.9,
        abilities: { 0: 'Sticky Hold' }
    },
    Gible: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 58, at: 70, df: 45, sa: 40, sd: 45, sp: 42 },
        weightkg: 20.5,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Giratina: {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 100, df: 120, sa: 100, sd: 120, sp: 90 },
        weightkg: 750,
        gender: 'N',
        otherFormes: ['Giratina-Origin'],
        abilities: { 0: 'Pressure' }
    },
    'Giratina-Origin': {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 120, df: 100, sa: 120, sd: 100, sp: 90 },
        weightkg: 650,
        gender: 'N',
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Giratina'
    },
    Glaceon: {
        types: ['Ice'],
        bs: { hp: 65, at: 60, df: 110, sa: 130, sd: 95, sp: 65 },
        weightkg: 25.9,
        abilities: { 0: 'Snow Cloak' }
    },
    Glameow: {
        types: ['Normal'],
        bs: { hp: 49, at: 55, df: 42, sa: 42, sd: 37, sp: 85 },
        weightkg: 3.9,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Gliscor: {
        types: ['Ground', 'Flying'],
        bs: { hp: 75, at: 95, df: 125, sa: 45, sd: 75, sp: 95 },
        weightkg: 42.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Grotle: {
        types: ['Grass'],
        bs: { hp: 75, at: 89, df: 85, sa: 55, sd: 65, sp: 36 },
        weightkg: 97,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Happiny: {
        types: ['Normal'],
        bs: { hp: 100, at: 5, df: 5, sa: 15, sd: 65, sp: 30 },
        weightkg: 24.4,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Heatran: {
        types: ['Fire', 'Steel'],
        bs: { hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77 },
        weightkg: 430,
        abilities: { 0: 'Flash Fire' }
    },
    Hippopotas: {
        types: ['Ground'],
        bs: { hp: 68, at: 72, df: 78, sa: 38, sd: 42, sp: 32 },
        weightkg: 49.5,
        nfe: true,
        abilities: { 0: 'Sand Stream' }
    },
    Hippowdon: {
        types: ['Ground'],
        bs: { hp: 108, at: 112, df: 118, sa: 68, sd: 72, sp: 47 },
        weightkg: 300,
        abilities: { 0: 'Sand Stream' }
    },
    Honchkrow: {
        types: ['Dark', 'Flying'],
        bs: { hp: 100, at: 125, df: 52, sa: 105, sd: 52, sp: 71 },
        weightkg: 27.3,
        abilities: { 0: 'Insomnia' }
    },
    Infernape: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 76, at: 104, df: 71, sa: 104, sd: 71, sp: 108 },
        weightkg: 55,
        abilities: { 0: 'Blaze' }
    },
    Kitsunoh: {
        types: ['Ghost', 'Steel'],
        bs: { hp: 80, at: 103, df: 85, sa: 55, sd: 80, sp: 110 },
        weightkg: 51,
        abilities: { 0: 'Frisk' }
    },
    Kricketot: {
        types: ['Bug'],
        bs: { hp: 37, at: 25, df: 41, sa: 25, sd: 41, sp: 25 },
        weightkg: 2.2,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Kricketune: {
        types: ['Bug'],
        bs: { hp: 77, at: 85, df: 51, sa: 55, sd: 51, sp: 65 },
        weightkg: 25.5,
        abilities: { 0: 'Swarm' }
    },
    Krilowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 151, at: 84, df: 73, sa: 83, sd: 74, sp: 105 },
        weightkg: 10.6,
        abilities: { 0: 'Trace' }
    },
    Leafeon: {
        types: ['Grass'],
        bs: { hp: 65, at: 110, df: 130, sa: 60, sd: 65, sp: 95 },
        weightkg: 25.5,
        abilities: { 0: 'Leaf Guard' }
    },
    Lickilicky: {
        types: ['Normal'],
        bs: { hp: 110, at: 85, df: 95, sa: 80, sd: 95, sp: 50 },
        weightkg: 140,
        abilities: { 0: 'Own Tempo' }
    },
    Lopunny: {
        types: ['Normal'],
        bs: { hp: 65, at: 76, df: 84, sa: 54, sd: 96, sp: 105 },
        weightkg: 33.3,
        abilities: { 0: 'Cute Charm' }
    },
    Lucario: {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        weightkg: 54,
        abilities: { 0: 'Steadfast' }
    },
    Lumineon: {
        types: ['Water'],
        bs: { hp: 69, at: 69, df: 76, sa: 69, sd: 86, sp: 91 },
        weightkg: 24,
        abilities: { 0: 'Swift Swim' }
    },
    Luxio: {
        types: ['Electric'],
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        weightkg: 30.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Luxray: {
        types: ['Electric'],
        bs: { hp: 80, at: 120, df: 79, sa: 95, sd: 79, sp: 70 },
        weightkg: 42,
        abilities: { 0: 'Rivalry' }
    },
    Magmortar: {
        types: ['Fire'],
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 95, sp: 83 },
        weightkg: 68,
        abilities: { 0: 'Flame Body' }
    },
    Magnezone: {
        types: ['Electric', 'Steel'],
        bs: { hp: 70, at: 70, df: 115, sa: 130, sd: 90, sp: 60 },
        weightkg: 180,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    Mamoswine: {
        types: ['Ice', 'Ground'],
        bs: { hp: 110, at: 130, df: 80, sa: 70, sd: 60, sp: 80 },
        weightkg: 291,
        abilities: { 0: 'Oblivious' }
    },
    Manaphy: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.4,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    Mantyke: {
        types: ['Water', 'Flying'],
        bs: { hp: 45, at: 20, df: 50, sa: 60, sd: 120, sp: 50 },
        weightkg: 65,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Mesprit: {
        types: ['Psychic'],
        bs: { hp: 80, at: 105, df: 105, sa: 105, sd: 105, sp: 80 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    'Mime Jr.': {
        types: ['Psychic'],
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 90, sp: 60 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Mismagius: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 105, sd: 105, sp: 105 },
        weightkg: 4.4,
        abilities: { 0: 'Levitate' }
    },
    Monferno: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 64, at: 78, df: 52, sa: 78, sd: 52, sp: 81 },
        weightkg: 22,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Monohm: {
        types: ['Electric'],
        bs: { hp: 53, at: 40, df: 58, sa: 67, sd: 55, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Mothim: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 94, df: 50, sa: 94, sd: 50, sp: 66 },
        weightkg: 23.3,
        abilities: { 0: 'Swarm' }
    },
    Munchlax: {
        types: ['Normal'],
        bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
        weightkg: 105,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Nohface: {
        types: ['Ghost'],
        bs: { hp: 50, at: 73, df: 50, sa: 30, sd: 50, sp: 80 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Pachirisu: {
        types: ['Electric'],
        bs: { hp: 60, at: 45, df: 70, sa: 45, sd: 90, sp: 95 },
        weightkg: 3.9,
        abilities: { 0: 'Run Away' }
    },
    Palkia: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 120, df: 100, sa: 150, sd: 120, sp: 100 },
        weightkg: 336,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Phione: {
        types: ['Water'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 3.1,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    'Pichu-Spiky-eared': {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pichu'
    },
    Piplup: {
        types: ['Water'],
        bs: { hp: 53, at: 51, df: 53, sa: 61, sd: 56, sp: 40 },
        weightkg: 5.2,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Porygon-Z': {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 70, sa: 135, sd: 75, sp: 90 },
        weightkg: 34,
        gender: 'N',
        abilities: { 0: 'Adaptability' }
    },
    Prinplup: {
        types: ['Water'],
        bs: { hp: 64, at: 66, df: 68, sa: 81, sd: 76, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Privatyke: {
        types: ['Water', 'Fighting'],
        bs: { hp: 65, at: 75, df: 65, sa: 40, sd: 60, sp: 45 },
        weightkg: 35,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Probopass: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 55, df: 145, sa: 75, sd: 150, sp: 40 },
        weightkg: 340,
        abilities: { 0: 'Sturdy' }
    },
    Protowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 51, at: 44, df: 33, sa: 43, sd: 34, sp: 65 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Purugly: {
        types: ['Normal'],
        bs: { hp: 71, at: 82, df: 64, sa: 64, sd: 59, sp: 112 },
        weightkg: 43.8,
        abilities: { 0: 'Thick Fat' }
    },
    Pyroak: {
        types: ['Fire', 'Grass'],
        bs: { hp: 120, at: 70, df: 105, sa: 95, sd: 90, sp: 60 },
        weightkg: 168,
        abilities: { 0: 'Rock Head' }
    },
    Rampardos: {
        types: ['Rock'],
        bs: { hp: 97, at: 165, df: 60, sa: 65, sd: 50, sp: 58 },
        weightkg: 102.5,
        abilities: { 0: 'Mold Breaker' }
    },
    Rebble: {
        types: ['Rock'],
        bs: { hp: 45, at: 25, df: 65, sa: 75, sd: 55, sp: 80 },
        weightkg: 7,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Regigigas: {
        types: ['Normal'],
        bs: { hp: 110, at: 160, df: 110, sa: 80, sd: 110, sp: 100 },
        weightkg: 420,
        abilities: { 0: 'Slow Start' },
        gender: 'N'
    },
    Revenankh: {
        types: ['Ghost', 'Fighting'],
        bs: { hp: 90, at: 105, df: 90, sa: 65, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Shed Skin' }
    },
    Rhyperior: {
        types: ['Ground', 'Rock'],
        bs: { hp: 115, at: 140, df: 130, sa: 55, sd: 55, sp: 40 },
        weightkg: 282.8,
        abilities: { 0: 'Lightning Rod' }
    },
    Riolu: {
        types: ['Fighting'],
        bs: { hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Steadfast' }
    },
    Roserade: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 70, df: 55, sa: 125, sd: 105, sp: 90 },
        weightkg: 14.5,
        abilities: { 0: 'Natural Cure' }
    },
    Rotom: {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 50, df: 77, sa: 95, sd: 77, sp: 91 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        otherFormes: ['Rotom-Fan', 'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash']
    },
    'Rotom-Mow': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Frost': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Heat': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Fan': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Wash': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    Shaymin: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 2.1,
        abilities: { 0: 'Natural Cure' },
        gender: 'N',
        otherFormes: ['Shaymin-Sky']
    },
    'Shaymin-Sky': {
        types: ['Grass', 'Flying'],
        bs: { hp: 100, at: 103, df: 75, sa: 120, sd: 75, sp: 127 },
        weightkg: 5.2,
        abilities: { 0: 'Serene Grace' },
        gender: 'N',
        baseSpecies: 'Shaymin'
    },
    Shellos: {
        types: ['Water'],
        bs: { hp: 76, at: 48, df: 48, sa: 57, sd: 62, sp: 34 },
        weightkg: 6.3,
        nfe: true,
        abilities: { 0: 'Sticky Hold' }
    },
    Shieldon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 30, at: 42, df: 118, sa: 42, sd: 88, sp: 30 },
        weightkg: 57,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Shinx: {
        types: ['Electric'],
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Skorupi: {
        types: ['Poison', 'Bug'],
        bs: { hp: 40, at: 50, df: 90, sa: 30, sd: 55, sp: 65 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Skuntank: {
        types: ['Poison', 'Dark'],
        bs: { hp: 103, at: 93, df: 67, sa: 71, sd: 61, sp: 84 },
        weightkg: 38,
        abilities: { 0: 'Stench' }
    },
    Snover: {
        types: ['Grass', 'Ice'],
        bs: { hp: 60, at: 62, df: 50, sa: 62, sd: 60, sp: 40 },
        weightkg: 50.5,
        nfe: true,
        abilities: { 0: 'Snow Warning' }
    },
    Spiritomb: {
        types: ['Ghost', 'Dark'],
        bs: { hp: 50, at: 92, df: 108, sa: 92, sd: 108, sp: 35 },
        weightkg: 108,
        abilities: { 0: 'Pressure' }
    },
    Staraptor: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 120, df: 70, sa: 50, sd: 50, sp: 100 },
        weightkg: 24.9,
        abilities: { 0: 'Intimidate' }
    },
    Staravia: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 75, df: 50, sa: 40, sd: 40, sp: 80 },
        weightkg: 15.5,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Starly: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 60 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Stratagem: {
        types: ['Rock'],
        bs: { hp: 90, at: 60, df: 65, sa: 120, sd: 70, sp: 130 },
        weightkg: 45,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Stunky: {
        types: ['Poison', 'Dark'],
        bs: { hp: 63, at: 63, df: 47, sa: 41, sd: 41, sp: 74 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Syclant: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 116, df: 70, sa: 114, sd: 64, sp: 121 },
        weightkg: 52,
        abilities: { 0: 'Compound Eyes' }
    },
    Syclar: {
        types: ['Ice', 'Bug'],
        bs: { hp: 40, at: 76, df: 45, sa: 74, sd: 39, sp: 91 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Tactite: {
        types: ['Rock'],
        bs: { hp: 70, at: 40, df: 65, sa: 100, sd: 65, sp: 95 },
        weightkg: 16,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Tangrowth: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 125, sa: 110, sd: 50, sp: 50 },
        weightkg: 128.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Togekiss: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 50, df: 95, sa: 120, sd: 115, sp: 80 },
        weightkg: 38,
        abilities: { 0: 'Hustle' }
    },
    Torterra: {
        types: ['Grass', 'Ground'],
        bs: { hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 56 },
        weightkg: 310,
        abilities: { 0: 'Overgrow' }
    },
    Toxicroak: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 85 },
        weightkg: 44.4,
        abilities: { 0: 'Anticipation' }
    },
    Turtwig: {
        types: ['Grass'],
        bs: { hp: 55, at: 68, df: 64, sa: 45, sd: 55, sp: 31 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Uxie: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 130, sa: 75, sd: 130, sp: 95 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Vespiquen: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 80, df: 102, sa: 80, sd: 102, sp: 40 },
        weightkg: 38.5,
        abilities: { 0: 'Pressure' }
    },
    Voodoll: {
        types: ['Normal', 'Dark'],
        bs: { hp: 55, at: 40, df: 55, sa: 75, sd: 50, sp: 70 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Volt Absorb' }
    },
    Voodoom: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 90, at: 85, df: 80, sa: 105, sd: 80, sp: 110 },
        weightkg: 75.5,
        abilities: { 0: 'Volt Absorb' }
    },
    Weavile: {
        types: ['Dark', 'Ice'],
        bs: { hp: 70, at: 120, df: 65, sa: 45, sd: 85, sp: 125 },
        weightkg: 34,
        abilities: { 0: 'Pressure' }
    },
    Wormadam: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 59, df: 85, sa: 79, sd: 105, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        otherFormes: ['Wormadam-Sandy', 'Wormadam-Trash']
    },
    'Wormadam-Sandy': {
        types: ['Bug', 'Ground'],
        bs: { hp: 60, at: 79, df: 105, sa: 59, sd: 85, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Wormadam'
    },
    'Wormadam-Trash': {
        types: ['Bug', 'Steel'],
        bs: { hp: 60, at: 69, df: 95, sa: 69, sd: 95, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Wormadam'
    },
    Yanmega: {
        types: ['Bug', 'Flying'],
        bs: { hp: 86, at: 76, df: 86, sa: 116, sd: 56, sp: 95 },
        weightkg: 51.5,
        abilities: { 0: 'Speed Boost' }
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {
    'Rotom-Fan': { types: ['Electric', 'Flying'] },
    'Rotom-Frost': { types: ['Electric', 'Ice'] },
    'Rotom-Heat': { types: ['Electric', 'Fire'] },
    'Rotom-Mow': { types: ['Electric', 'Grass'] },
    'Rotom-Wash': { types: ['Electric', 'Water'] },
    Accelgor: {
        types: ['Bug'],
        bs: { hp: 80, at: 70, df: 40, sa: 100, sd: 60, sp: 145 },
        weightkg: 25.3,
        abilities: { 0: 'Hydration' }
    },
    Alomomola: {
        types: ['Water'],
        bs: { hp: 165, at: 75, df: 80, sa: 40, sd: 45, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Healer' }
    },
    Amoonguss: {
        types: ['Grass', 'Poison'],
        bs: { hp: 114, at: 85, df: 70, sa: 85, sd: 80, sp: 30 },
        weightkg: 10.5,
        abilities: { 0: 'Effect Spore' }
    },
    Archen: {
        types: ['Rock', 'Flying'],
        bs: { hp: 55, at: 112, df: 45, sa: 74, sd: 45, sp: 70 },
        weightkg: 9.5,
        abilities: { 0: 'Defeatist' },
        nfe: true
    },
    Archeops: {
        types: ['Rock', 'Flying'],
        bs: { hp: 75, at: 140, df: 65, sa: 112, sd: 65, sp: 110 },
        weightkg: 32,
        abilities: { 0: 'Defeatist' }
    },
    Argalis: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 90, df: 89, sa: 87, sd: 40, sp: 54 },
        weightkg: 341.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Audino: {
        types: ['Normal'],
        bs: { hp: 103, at: 60, df: 86, sa: 60, sd: 86, sp: 50 },
        weightkg: 31,
        abilities: { 0: 'Healer' }
    },
    Aurumoth: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 110, at: 120, df: 99, sa: 117, sd: 60, sp: 94 },
        weightkg: 193,
        abilities: { 0: 'Weak Armor' }
    },
    Axew: {
        types: ['Dragon'],
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Basculin: {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Reckless' },
        otherFormes: ['Basculin-Blue-Striped']
    },
    'Basculin-Blue-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Basculin'
    },
    Beartic: {
        types: ['Ice'],
        bs: { hp: 95, at: 110, df: 80, sa: 70, sd: 80, sp: 50 },
        weightkg: 260,
        abilities: { 0: 'Snow Cloak' }
    },
    Beheeyem: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 75, sa: 125, sd: 95, sp: 40 },
        weightkg: 34.5,
        abilities: { 0: 'Telepathy' }
    },
    Bisharp: {
        types: ['Dark', 'Steel'],
        bs: { hp: 65, at: 125, df: 100, sa: 60, sd: 70, sp: 70 },
        weightkg: 70,
        abilities: { 0: 'Defiant' }
    },
    Blitzle: {
        types: ['Electric'],
        bs: { hp: 45, at: 60, df: 32, sa: 50, sd: 32, sp: 76 },
        weightkg: 29.8,
        nfe: true,
        abilities: { 0: 'Lightning Rod' }
    },
    Boldore: {
        types: ['Rock'],
        bs: { hp: 70, at: 105, df: 105, sa: 50, sd: 40, sp: 20 },
        weightkg: 102,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Bouffalant: {
        types: ['Normal'],
        bs: { hp: 95, at: 110, df: 95, sa: 40, sd: 95, sp: 55 },
        weightkg: 94.6,
        abilities: { 0: 'Reckless' }
    },
    Brattler: {
        types: ['Dark', 'Grass'],
        bs: { hp: 80, at: 70, df: 40, sa: 20, sd: 90, sp: 30 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Harvest' }
    },
    Braviary: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 123, df: 75, sa: 57, sd: 75, sp: 80 },
        weightkg: 41,
        abilities: { 0: 'Keen Eye' }
    },
    Carracosta: {
        types: ['Water', 'Rock'],
        bs: { hp: 74, at: 108, df: 133, sa: 83, sd: 65, sp: 32 },
        weightkg: 81,
        abilities: { 0: 'Solid Rock' }
    },
    Cawdet: {
        types: ['Steel', 'Flying'],
        bs: { hp: 35, at: 72, df: 85, sa: 40, sd: 55, sp: 88 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Cawmodore: {
        types: ['Steel', 'Flying'],
        bs: { hp: 50, at: 92, df: 130, sa: 65, sd: 75, sp: 118 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Chandelure: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 55, df: 90, sa: 145, sd: 90, sp: 80 },
        weightkg: 34.3,
        abilities: { 0: 'Flash Fire' }
    },
    Cinccino: {
        types: ['Normal'],
        bs: { hp: 75, at: 95, df: 60, sa: 65, sd: 60, sp: 115 },
        weightkg: 7.5,
        abilities: { 0: 'Cute Charm' }
    },
    Cobalion: {
        types: ['Steel', 'Fighting'],
        bs: { hp: 91, at: 90, df: 129, sa: 90, sd: 72, sp: 108 },
        weightkg: 250,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Cofagrigus: {
        types: ['Ghost'],
        bs: { hp: 58, at: 50, df: 145, sa: 95, sd: 105, sp: 30 },
        weightkg: 76.5,
        abilities: { 0: 'Mummy' }
    },
    Conkeldurr: {
        types: ['Fighting'],
        bs: { hp: 105, at: 140, df: 95, sa: 55, sd: 65, sp: 45 },
        weightkg: 87,
        abilities: { 0: 'Guts' }
    },
    Cottonee: {
        types: ['Grass'],
        bs: { hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Prankster' }
    },
    Crustle: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        weightkg: 200,
        abilities: { 0: 'Sturdy' }
    },
    Cryogonal: {
        types: ['Ice'],
        bs: { hp: 70, at: 50, df: 30, sa: 95, sd: 135, sp: 105 },
        weightkg: 148,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Cubchoo: {
        types: ['Ice'],
        bs: { hp: 55, at: 70, df: 40, sa: 60, sd: 40, sp: 40 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Cupra: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 60, df: 49, sa: 67, sd: 30, sp: 44 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Darmanitan: {
        types: ['Fire'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 92.9,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Darmanitan-Zen']
    },
    'Darmanitan-Zen': {
        types: ['Fire', 'Psychic'],
        bs: { hp: 105, at: 30, df: 105, sa: 140, sd: 105, sp: 55 },
        weightkg: 92.9,
        baseSpecies: 'Darmanitan',
        abilities: { 0: 'Zen Mode' }
    },
    Darumaka: {
        types: ['Fire'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 37.5,
        nfe: true,
        abilities: { 0: 'Hustle' }
    },
    Deerling: {
        types: ['Normal', 'Grass'],
        bs: { hp: 60, at: 60, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Deino: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 52, at: 65, df: 50, sa: 45, sd: 50, sp: 38 },
        weightkg: 17.3,
        abilities: { 0: 'Hustle' },
        nfe: true
    },
    Dewott: {
        types: ['Water'],
        bs: { hp: 75, at: 75, df: 60, sa: 83, sd: 60, sp: 60 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Drilbur: {
        types: ['Ground'],
        bs: { hp: 60, at: 85, df: 40, sa: 30, sd: 45, sp: 68 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Sand Rush' }
    },
    Druddigon: {
        types: ['Dragon'],
        bs: { hp: 77, at: 120, df: 90, sa: 60, sd: 90, sp: 48 },
        weightkg: 139,
        abilities: { 0: 'Rough Skin' }
    },
    Ducklett: {
        types: ['Water', 'Flying'],
        bs: { hp: 62, at: 44, df: 50, sa: 44, sd: 50, sp: 55 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Duosion: {
        types: ['Psychic'],
        bs: { hp: 65, at: 40, df: 50, sa: 125, sd: 60, sp: 30 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Durant: {
        types: ['Bug', 'Steel'],
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 48, sp: 109 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Dwebble: {
        types: ['Bug', 'Rock'],
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Eelektrik: {
        types: ['Electric'],
        bs: { hp: 65, at: 85, df: 70, sa: 75, sd: 70, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Eelektross: {
        types: ['Electric'],
        bs: { hp: 85, at: 115, df: 80, sa: 105, sd: 80, sp: 50 },
        weightkg: 80.5,
        abilities: { 0: 'Levitate' }
    },
    Elgyem: {
        types: ['Psychic'],
        bs: { hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Telepathy' }
    },
    Emboar: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 110, at: 123, df: 65, sa: 100, sd: 65, sp: 65 },
        weightkg: 150,
        abilities: { 0: 'Blaze' }
    },
    Emolga: {
        types: ['Electric', 'Flying'],
        bs: { hp: 55, at: 75, df: 60, sa: 75, sd: 60, sp: 103 },
        weightkg: 5,
        abilities: { 0: 'Static' }
    },
    Escavalier: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 20 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Excadrill: {
        types: ['Ground', 'Steel'],
        bs: { hp: 110, at: 135, df: 60, sa: 50, sd: 65, sp: 88 },
        weightkg: 40.4,
        abilities: { 0: 'Sand Rush' }
    },
    Ferroseed: {
        types: ['Grass', 'Steel'],
        bs: { hp: 44, at: 50, df: 91, sa: 24, sd: 86, sp: 10 },
        weightkg: 18.8,
        nfe: true,
        abilities: { 0: 'Iron Barbs' }
    },
    Ferrothorn: {
        types: ['Grass', 'Steel'],
        bs: { hp: 74, at: 94, df: 131, sa: 54, sd: 116, sp: 20 },
        weightkg: 110,
        abilities: { 0: 'Iron Barbs' }
    },
    Foongus: {
        types: ['Grass', 'Poison'],
        bs: { hp: 69, at: 55, df: 45, sa: 55, sd: 55, sp: 15 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Fraxure: {
        types: ['Dragon'],
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 67 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Frillish: {
        types: ['Water', 'Ghost'],
        bs: { hp: 55, at: 40, df: 50, sa: 65, sd: 85, sp: 40 },
        weightkg: 33,
        nfe: true,
        abilities: { 0: 'Water Absorb' }
    },
    Galvantula: {
        types: ['Bug', 'Electric'],
        bs: { hp: 70, at: 77, df: 60, sa: 97, sd: 60, sp: 108 },
        weightkg: 14.3,
        abilities: { 0: 'Compound Eyes' }
    },
    Garbodor: {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 107.3,
        abilities: { 0: 'Stench' }
    },
    Genesect: {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        otherFormes: ['Genesect-Burn', 'Genesect-Chill', 'Genesect-Douse', 'Genesect-Shock']
    },
    'Genesect-Burn': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Chill': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Douse': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Shock': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    Gigalith: {
        types: ['Rock'],
        bs: { hp: 85, at: 135, df: 130, sa: 60, sd: 70, sp: 25 },
        weightkg: 260,
        abilities: { 0: 'Sturdy' }
    },
    Golett: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 35 },
        weightkg: 92,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Golurk: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 89, at: 124, df: 80, sa: 55, sd: 80, sp: 55 },
        weightkg: 330,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Gothita: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 55, sd: 65, sp: 45 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Gothitelle: {
        types: ['Psychic'],
        bs: { hp: 70, at: 55, df: 95, sa: 95, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Frisk' }
    },
    Gothorita: {
        types: ['Psychic'],
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 85, sp: 55 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Gurdurr: {
        types: ['Fighting'],
        bs: { hp: 85, at: 105, df: 85, sa: 40, sd: 50, sp: 40 },
        weightkg: 40,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Haxorus: {
        types: ['Dragon'],
        bs: { hp: 76, at: 147, df: 90, sa: 60, sd: 70, sp: 97 },
        weightkg: 105.5,
        abilities: { 0: 'Rivalry' }
    },
    Heatmor: {
        types: ['Fire'],
        bs: { hp: 85, at: 97, df: 66, sa: 105, sd: 66, sp: 65 },
        weightkg: 58,
        abilities: { 0: 'Gluttony' }
    },
    Herdier: {
        types: ['Normal'],
        bs: { hp: 65, at: 80, df: 65, sa: 35, sd: 65, sp: 60 },
        weightkg: 14.7,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Hydreigon: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98 },
        weightkg: 160,
        abilities: { 0: 'Levitate' }
    },
    Jellicent: {
        types: ['Water', 'Ghost'],
        bs: { hp: 100, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        weightkg: 135,
        abilities: { 0: 'Water Absorb' }
    },
    Joltik: {
        types: ['Bug', 'Electric'],
        bs: { hp: 50, at: 47, df: 50, sa: 57, sd: 50, sp: 65 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Karrablast: {
        types: ['Bug'],
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Keldeo: {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        otherFormes: ['Keldeo-Resolute']
    },
    'Keldeo-Resolute': {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        baseSpecies: 'Keldeo'
    },
    Klang: {
        types: ['Steel'],
        bs: { hp: 60, at: 80, df: 95, sa: 70, sd: 85, sp: 50 },
        weightkg: 51,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Klink: {
        types: ['Steel'],
        bs: { hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30 },
        weightkg: 21,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Klinklang: {
        types: ['Steel'],
        bs: { hp: 60, at: 100, df: 115, sa: 70, sd: 85, sp: 90 },
        weightkg: 81,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Krokorok: {
        types: ['Ground', 'Dark'],
        bs: { hp: 60, at: 82, df: 45, sa: 45, sd: 45, sp: 74 },
        weightkg: 33.4,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Krookodile: {
        types: ['Ground', 'Dark'],
        bs: { hp: 95, at: 117, df: 70, sa: 65, sd: 70, sp: 92 },
        weightkg: 96.3,
        abilities: { 0: 'Intimidate' }
    },
    Kyurem: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 130, df: 90, sa: 130, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Kyurem-Black', 'Kyurem-White']
    },
    'Kyurem-Black': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 170, df: 100, sa: 120, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Teravolt' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    'Kyurem-White': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 120, df: 90, sa: 170, sd: 100, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Turboblaze' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    Lampent: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 40, df: 60, sa: 95, sd: 60, sp: 55 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Landorus: {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101 },
        weightkg: 68,
        abilities: { 0: 'Sand Force' },
        otherFormes: ['Landorus-Therian']
    },
    'Landorus-Therian': {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 145, df: 90, sa: 105, sd: 80, sp: 91 },
        weightkg: 68,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Landorus'
    },
    Larvesta: {
        types: ['Bug', 'Fire'],
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        weightkg: 28.8,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Leavanny: {
        types: ['Bug', 'Grass'],
        bs: { hp: 75, at: 103, df: 80, sa: 70, sd: 70, sp: 92 },
        weightkg: 20.5,
        abilities: { 0: 'Swarm' }
    },
    Liepard: {
        types: ['Dark'],
        bs: { hp: 64, at: 88, df: 50, sa: 88, sd: 50, sp: 106 },
        weightkg: 37.5,
        abilities: { 0: 'Limber' }
    },
    Lilligant: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        weightkg: 16.3,
        abilities: { 0: 'Chlorophyll' }
    },
    Lillipup: {
        types: ['Normal'],
        bs: { hp: 45, at: 60, df: 45, sa: 25, sd: 45, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Vital Spirit' }
    },
    Litwick: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20 },
        weightkg: 3.1,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Malaconda: {
        types: ['Dark', 'Grass'],
        bs: { hp: 115, at: 100, df: 60, sa: 40, sd: 130, sp: 55 },
        weightkg: 108.8,
        abilities: { 0: 'Harvest' }
    },
    Mandibuzz: {
        types: ['Dark', 'Flying'],
        bs: { hp: 110, at: 65, df: 105, sa: 55, sd: 95, sp: 80 },
        weightkg: 39.5,
        abilities: { 0: 'Big Pecks' }
    },
    Maractus: {
        types: ['Grass'],
        bs: { hp: 75, at: 86, df: 67, sa: 106, sd: 67, sp: 60 },
        weightkg: 28,
        abilities: { 0: 'Water Absorb' }
    },
    Meloetta: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Meloetta-Pirouette'],
        gender: 'N'
    },
    'Meloetta-Pirouette': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Meloetta',
        gender: 'N'
    },
    Mienfoo: {
        types: ['Fighting'],
        bs: { hp: 45, at: 85, df: 50, sa: 55, sd: 50, sp: 65 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Mienshao: {
        types: ['Fighting'],
        bs: { hp: 65, at: 125, df: 60, sa: 95, sd: 60, sp: 105 },
        weightkg: 35.5,
        abilities: { 0: 'Inner Focus' }
    },
    Minccino: {
        types: ['Normal'],
        bs: { hp: 55, at: 50, df: 40, sa: 40, sd: 40, sp: 75 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Mollux: {
        types: ['Fire', 'Poison'],
        bs: { hp: 95, at: 45, df: 83, sa: 131, sd: 105, sp: 76 },
        weightkg: 41,
        abilities: { 0: 'Dry Skin' }
    },
    Munna: {
        types: ['Psychic'],
        bs: { hp: 76, at: 25, df: 45, sa: 67, sd: 55, sp: 24 },
        weightkg: 23.3,
        nfe: true,
        abilities: { 0: 'Forewarn' }
    },
    Musharna: {
        types: ['Psychic'],
        bs: { hp: 116, at: 55, df: 85, sa: 107, sd: 95, sp: 29 },
        weightkg: 60.5,
        abilities: { 0: 'Forewarn' }
    },
    Necturine: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 49, at: 55, df: 60, sa: 50, sd: 75, sp: 51 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Necturna: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 64, at: 120, df: 100, sa: 85, sd: 120, sp: 81 },
        weightkg: 49.6,
        abilities: { 0: 'Forewarn' }
    },
    Oshawott: {
        types: ['Water'],
        bs: { hp: 55, at: 55, df: 45, sa: 63, sd: 45, sp: 45 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Palpitoad: {
        types: ['Water', 'Ground'],
        bs: { hp: 75, at: 65, df: 55, sa: 65, sd: 55, sp: 69 },
        weightkg: 17,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Panpour: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Pansage: {
        types: ['Grass'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Pansear: {
        types: ['Fire'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Patrat: {
        types: ['Normal'],
        bs: { hp: 45, at: 55, df: 39, sa: 35, sd: 39, sp: 42 },
        weightkg: 11.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Pawniard: {
        types: ['Dark', 'Steel'],
        bs: { hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Defiant' }
    },
    Petilil: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Pidove: {
        types: ['Normal', 'Flying'],
        bs: { hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Pignite: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 90, at: 93, df: 55, sa: 70, sd: 55, sp: 55 },
        weightkg: 55.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Purrloin: {
        types: ['Dark'],
        bs: { hp: 41, at: 50, df: 37, sa: 50, sd: 37, sp: 66 },
        weightkg: 10.1,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Reshiram: {
        types: ['Dragon', 'Fire'],
        bs: { hp: 100, at: 120, df: 100, sa: 150, sd: 120, sp: 90 },
        weightkg: 330,
        abilities: { 0: 'Turboblaze' },
        gender: 'N'
    },
    Reuniclus: {
        types: ['Psychic'],
        bs: { hp: 110, at: 65, df: 75, sa: 125, sd: 85, sp: 30 },
        weightkg: 20.1,
        abilities: { 0: 'Overcoat' }
    },
    Roggenrola: {
        types: ['Rock'],
        bs: { hp: 55, at: 75, df: 85, sa: 25, sd: 25, sp: 15 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Rufflet: {
        types: ['Normal', 'Flying'],
        bs: { hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Samurott: {
        types: ['Water'],
        bs: { hp: 95, at: 100, df: 85, sa: 108, sd: 70, sp: 70 },
        weightkg: 94.6,
        abilities: { 0: 'Torrent' }
    },
    Sandile: {
        types: ['Ground', 'Dark'],
        bs: { hp: 50, at: 72, df: 35, sa: 35, sd: 35, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Sawk: {
        types: ['Fighting'],
        bs: { hp: 75, at: 125, df: 75, sa: 30, sd: 75, sp: 85 },
        weightkg: 51,
        abilities: { 0: 'Sturdy' }
    },
    Sawsbuck: {
        types: ['Normal', 'Grass'],
        bs: { hp: 80, at: 100, df: 70, sa: 60, sd: 70, sp: 95 },
        weightkg: 92.5,
        abilities: { 0: 'Chlorophyll' }
    },
    Scolipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 90, df: 89, sa: 55, sd: 69, sp: 112 },
        weightkg: 200.5,
        abilities: { 0: 'Poison Point' }
    },
    Scrafty: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 65, at: 90, df: 115, sa: 45, sd: 115, sp: 58 },
        weightkg: 30,
        abilities: { 0: 'Shed Skin' }
    },
    Scraggy: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 50, at: 75, df: 70, sa: 35, sd: 70, sp: 48 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Scratchet: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 55, at: 85, df: 80, sa: 20, sd: 70, sp: 40 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Scrappy' }
    },
    Seismitoad: {
        types: ['Water', 'Ground'],
        bs: { hp: 105, at: 85, df: 75, sa: 85, sd: 75, sp: 74 },
        weightkg: 62,
        abilities: { 0: 'Swift Swim' }
    },
    Serperior: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 95, sa: 75, sd: 95, sp: 113 },
        weightkg: 63,
        abilities: { 0: 'Overgrow' }
    },
    Servine: {
        types: ['Grass'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 83 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Sewaddle: {
        types: ['Bug', 'Grass'],
        bs: { hp: 45, at: 53, df: 70, sa: 40, sd: 60, sp: 42 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Shelmet: {
        types: ['Bug'],
        bs: { hp: 50, at: 40, df: 85, sa: 40, sd: 65, sp: 25 },
        weightkg: 7.7,
        nfe: true,
        abilities: { 0: 'Hydration' }
    },
    Sigilyph: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 72, at: 58, df: 80, sa: 103, sd: 80, sp: 97 },
        weightkg: 14,
        abilities: { 0: 'Wonder Skin' }
    },
    Simipour: {
        types: ['Water'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 29,
        abilities: { 0: 'Gluttony' }
    },
    Simisage: {
        types: ['Grass'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 30.5,
        abilities: { 0: 'Gluttony' }
    },
    Simisear: {
        types: ['Fire'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 28,
        abilities: { 0: 'Gluttony' }
    },
    Snivy: {
        types: ['Grass'],
        bs: { hp: 45, at: 45, df: 55, sa: 45, sd: 55, sp: 63 },
        weightkg: 8.1,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Solosis: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 40, sa: 105, sd: 50, sp: 20 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Stoutland: {
        types: ['Normal'],
        bs: { hp: 85, at: 100, df: 90, sa: 45, sd: 90, sp: 80 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Stunfisk: {
        types: ['Ground', 'Electric'],
        bs: { hp: 109, at: 66, df: 84, sa: 81, sd: 99, sp: 32 },
        weightkg: 11,
        abilities: { 0: 'Static' }
    },
    Swadloon: {
        types: ['Bug', 'Grass'],
        bs: { hp: 55, at: 63, df: 90, sa: 50, sd: 80, sp: 42 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Swanna: {
        types: ['Water', 'Flying'],
        bs: { hp: 75, at: 87, df: 63, sa: 87, sd: 63, sp: 98 },
        weightkg: 24.2,
        abilities: { 0: 'Keen Eye' }
    },
    Swoobat: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 67, at: 57, df: 55, sa: 77, sd: 55, sp: 114 },
        weightkg: 10.5,
        abilities: { 0: 'Unaware' }
    },
    Tepig: {
        types: ['Fire'],
        bs: { hp: 65, at: 63, df: 45, sa: 45, sd: 45, sp: 45 },
        weightkg: 9.9,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Terrakion: {
        types: ['Rock', 'Fighting'],
        bs: { hp: 91, at: 129, df: 90, sa: 72, sd: 90, sp: 108 },
        weightkg: 260,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Throh: {
        types: ['Fighting'],
        bs: { hp: 120, at: 100, df: 85, sa: 30, sd: 85, sp: 45 },
        weightkg: 55.5,
        abilities: { 0: 'Guts' }
    },
    Thundurus: {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Thundurus-Therian']
    },
    'Thundurus-Therian': {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 105, df: 70, sa: 145, sd: 80, sp: 101 },
        weightkg: 61,
        abilities: { 0: 'Volt Absorb' },
        baseSpecies: 'Thundurus'
    },
    Timburr: {
        types: ['Fighting'],
        bs: { hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Tirtouga: {
        types: ['Water', 'Rock'],
        bs: { hp: 54, at: 78, df: 103, sa: 53, sd: 45, sp: 22 },
        weightkg: 16.5,
        nfe: true,
        abilities: { 0: 'Solid Rock' }
    },
    Tomohawk: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 105, at: 60, df: 90, sa: 115, sd: 80, sp: 85 },
        weightkg: 37.2,
        abilities: { 0: 'Intimidate' }
    },
    Tornadus: {
        types: ['Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 63,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Tornadus-Therian']
    },
    'Tornadus-Therian': {
        types: ['Flying'],
        bs: { hp: 79, at: 100, df: 80, sa: 110, sd: 90, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Regenerator' },
        baseSpecies: 'Tornadus'
    },
    Tranquill: {
        types: ['Normal', 'Flying'],
        bs: { hp: 62, at: 77, df: 62, sa: 50, sd: 42, sp: 65 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Trubbish: {
        types: ['Poison'],
        bs: { hp: 50, at: 50, df: 62, sa: 40, sd: 62, sp: 65 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Tympole: {
        types: ['Water'],
        bs: { hp: 50, at: 50, df: 40, sa: 50, sd: 40, sp: 64 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Tynamo: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 45, sd: 40, sp: 60 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Unfezant: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 105, df: 80, sa: 65, sd: 55, sp: 93 },
        weightkg: 29,
        abilities: { 0: 'Big Pecks' }
    },
    Vanillish: {
        types: ['Ice'],
        bs: { hp: 51, at: 65, df: 65, sa: 80, sd: 75, sp: 59 },
        weightkg: 41,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Vanillite: {
        types: ['Ice'],
        bs: { hp: 36, at: 50, df: 50, sa: 65, sd: 60, sp: 44 },
        weightkg: 5.7,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Vanilluxe: {
        types: ['Ice'],
        bs: { hp: 71, at: 95, df: 85, sa: 110, sd: 95, sp: 79 },
        weightkg: 57.5,
        abilities: { 0: 'Ice Body' }
    },
    Venipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 30, at: 45, df: 59, sa: 30, sd: 39, sp: 57 },
        weightkg: 5.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Victini: {
        types: ['Psychic', 'Fire'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 4,
        abilities: { 0: 'Victory Star' },
        gender: 'N'
    },
    Virizion: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 91, at: 90, df: 72, sa: 90, sd: 129, sp: 108 },
        weightkg: 200,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Volcarona: {
        types: ['Bug', 'Fire'],
        bs: { hp: 85, at: 60, df: 65, sa: 135, sd: 105, sp: 100 },
        weightkg: 46,
        abilities: { 0: 'Flame Body' }
    },
    Vullaby: {
        types: ['Dark', 'Flying'],
        bs: { hp: 70, at: 55, df: 75, sa: 45, sd: 65, sp: 60 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Watchog: {
        types: ['Normal'],
        bs: { hp: 60, at: 85, df: 69, sa: 60, sd: 69, sp: 77 },
        weightkg: 27,
        abilities: { 0: 'Illuminate' }
    },
    Whimsicott: {
        types: ['Grass'],
        bs: { hp: 60, at: 67, df: 85, sa: 77, sd: 75, sp: 116 },
        weightkg: 6.6,
        abilities: { 0: 'Prankster' }
    },
    Whirlipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 55, df: 99, sa: 40, sd: 79, sp: 47 },
        weightkg: 58.5,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Woobat: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 55, at: 45, df: 43, sa: 55, sd: 43, sp: 72 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Yamask: {
        types: ['Ghost'],
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Mummy' },
        nfe: true
    },
    Zebstrika: {
        types: ['Electric'],
        bs: { hp: 75, at: 100, df: 63, sa: 80, sd: 63, sp: 116 },
        weightkg: 79.5,
        abilities: { 0: 'Lightning Rod' }
    },
    Zekrom: {
        types: ['Dragon', 'Electric'],
        bs: { hp: 100, at: 150, df: 120, sa: 120, sd: 100, sp: 90 },
        weightkg: 345,
        abilities: { 0: 'Teravolt' },
        gender: 'N'
    },
    Zoroark: {
        types: ['Dark'],
        bs: { hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105 },
        weightkg: 81.1,
        abilities: { 0: 'Illusion' }
    },
    Zorua: {
        types: ['Dark'],
        bs: { hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        nfe: true
    },
    Zweilous: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 72, at: 85, df: 70, sa: 65, sd: 70, sp: 58 },
        weightkg: 50,
        abilities: { 0: 'Hustle' },
        nfe: true
    }
};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW['Pichu'].otherFormes;
delete BW['Pichu-Spiky-eared'];
var XY_PATCH = {
    Abomasnow: { otherFormes: ['Abomasnow-Mega'] },
    Absol: { otherFormes: ['Absol-Mega'] },
    Aerodactyl: { otherFormes: ['Aerodactyl-Mega'] },
    Aggron: { otherFormes: ['Aggron-Mega'] },
    Alakazam: { bs: { sd: 95 }, otherFormes: ['Alakazam-Mega'] },
    Altaria: { otherFormes: ['Altaria-Mega'] },
    Ampharos: { bs: { df: 85 }, otherFormes: ['Ampharos-Mega'] },
    Audino: { otherFormes: ['Audino-Mega'] },
    Azumarill: { types: ['Water', 'Fairy'] },
    Azurill: { types: ['Normal', 'Fairy'] },
    Banette: { otherFormes: ['Banette-Mega'] },
    Beautifly: { bs: { sa: 100 } },
    Beedrill: { bs: { at: 90 }, otherFormes: ['Beedrill-Mega'] },
    Bellossom: { bs: { df: 95 } },
    Blastoise: { otherFormes: ['Blastoise-Mega'] },
    Blaziken: { otherFormes: ['Blaziken-Mega'] },
    Butterfree: { bs: { sa: 90 } },
    Camerupt: { otherFormes: ['Camerupt-Mega'] },
    Charizard: { otherFormes: ['Charizard-Mega-X', 'Charizard-Mega-Y'] },
    Clefable: { types: ['Fairy'], bs: { sa: 95 } },
    Clefairy: { types: ['Fairy'] },
    Cleffa: { types: ['Fairy'] },
    Cottonee: { types: ['Grass', 'Fairy'] },
    Exploud: { bs: { sd: 73 } },
    Gallade: { otherFormes: ['Gallade-Mega'] },
    Garchomp: { otherFormes: ['Garchomp-Mega'] },
    Gardevoir: { types: ['Psychic', 'Fairy'], otherFormes: ['Gardevoir-Mega'] },
    Gengar: { otherFormes: ['Gengar-Mega'] },
    Gigalith: { bs: { sd: 80 } },
    Glalie: { otherFormes: ['Glalie-Mega'] },
    Golem: { bs: { at: 120 } },
    Granbull: { types: ['Fairy'] },
    Groudon: { otherFormes: ['Groudon-Primal'] },
    Gyarados: { otherFormes: ['Gyarados-Mega'] },
    Heracross: { otherFormes: ['Heracross-Mega'] },
    Houndoom: { otherFormes: ['Houndoom-Mega'] },
    Igglybuff: { types: ['Normal', 'Fairy'] },
    Jigglypuff: { types: ['Normal', 'Fairy'] },
    Jumpluff: { bs: { sd: 95 } },
    Kangaskhan: { otherFormes: ['Kangaskhan-Mega'] },
    Kirlia: { types: ['Psychic', 'Fairy'] },
    Krookodile: { bs: { df: 80 } },
    Kyogre: { otherFormes: ['Kyogre-Primal'] },
    Latias: { otherFormes: ['Latias-Mega'] },
    Latios: { otherFormes: ['Latios-Mega'] },
    Leavanny: { bs: { sd: 80 } },
    Lopunny: { otherFormes: ['Lopunny-Mega'] },
    Lucario: { otherFormes: ['Lucario-Mega'] },
    Manectric: { otherFormes: ['Manectric-Mega'] },
    Marill: { types: ['Water', 'Fairy'] },
    Mawile: { types: ['Steel', 'Fairy'], otherFormes: ['Mawile-Mega'] },
    Medicham: { otherFormes: ['Medicham-Mega'] },
    Metagross: { otherFormes: ['Metagross-Mega'] },
    Mewtwo: { otherFormes: ['Mewtwo-Mega-X', 'Mewtwo-Mega-Y'] },
    'Mime Jr.': { types: ['Psychic', 'Fairy'] },
    'Mr. Mime': { types: ['Psychic', 'Fairy'] },
    Nidoking: { bs: { at: 102 } },
    Nidoqueen: { bs: { at: 92 } },
    Pidgeot: { bs: { sp: 101 }, otherFormes: ['Pidgeot-Mega'] },
    Pikachu: {
        bs: { df: 40, sd: 50 },
        otherFormes: [
            'Pikachu-Belle',
            'Pikachu-Cosplay',
            'Pikachu-Libre',
            'Pikachu-PhD',
            'Pikachu-Pop-Star',
            'Pikachu-Rock-Star',
        ]
    },
    Pinsir: { otherFormes: ['Pinsir-Mega'] },
    Poliwrath: { bs: { at: 95 } },
    Raichu: { bs: { sp: 110 } },
    Ralts: { types: ['Psychic', 'Fairy'] },
    Rayquaza: { otherFormes: ['Rayquaza-Mega'] },
    Roserade: { bs: { df: 65 } },
    Sableye: { otherFormes: ['Sableye-Mega'] },
    Salamence: { otherFormes: ['Salamence-Mega'] },
    Sceptile: { otherFormes: ['Sceptile-Mega'] },
    Scizor: { otherFormes: ['Scizor-Mega'] },
    Scolipede: { bs: { at: 100 } },
    Seismitoad: { bs: { at: 95 } },
    Sharpedo: { otherFormes: ['Sharpedo-Mega'] },
    Slowbro: { otherFormes: ['Slowbro-Mega'] },
    Snubbull: { types: ['Fairy'] },
    Staraptor: { bs: { sd: 60 } },
    Steelix: { otherFormes: ['Steelix-Mega'] },
    Stoutland: { bs: { at: 110 } },
    Swampert: { otherFormes: ['Swampert-Mega'] },
    Togekiss: { types: ['Fairy', 'Flying'] },
    Togepi: { types: ['Fairy'] },
    Togetic: { types: ['Fairy', 'Flying'] },
    Tyranitar: { otherFormes: ['Tyranitar-Mega'] },
    Unfezant: { bs: { at: 115 } },
    Venusaur: { otherFormes: ['Venusaur-Mega'] },
    Victreebel: { bs: { sd: 70 } },
    Vileplume: { bs: { sa: 110 } },
    Whimsicott: { types: ['Grass', 'Fairy'] },
    Wigglytuff: { types: ['Normal', 'Fairy'], bs: { sa: 85 } },
    'Aegislash-Blade': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 150, df: 50, sa: 150, sd: 50, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        otherFormes: ['Aegislash-Shield', 'Aegislash-Both']
    },
    'Aegislash-Shield': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 50, df: 150, sa: 50, sd: 150, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        baseSpecies: 'Aegislash-Blade'
    },
    'Aegislash-Both': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 150, df: 150, sa: 150, sd: 150, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        baseSpecies: 'Aegislash-Blade'
    },
    Amaura: {
        types: ['Rock', 'Ice'],
        bs: { hp: 77, at: 59, df: 50, sa: 67, sd: 63, sp: 46 },
        weightkg: 25.2,
        nfe: true,
        abilities: { 0: 'Refrigerate' }
    },
    'Arceus-Fairy': {
        types: ['Fairy'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        baseSpecies: 'Arceus',
        gender: 'N'
    },
    Aromatisse: {
        types: ['Fairy'],
        bs: { hp: 101, at: 72, df: 72, sa: 99, sd: 89, sp: 29 },
        weightkg: 15.5,
        abilities: { 0: 'Healer' }
    },
    Aurorus: {
        types: ['Rock', 'Ice'],
        bs: { hp: 123, at: 77, df: 72, sa: 99, sd: 92, sp: 58 },
        weightkg: 225,
        abilities: { 0: 'Refrigerate' }
    },
    Avalugg: {
        types: ['Ice'],
        bs: { hp: 95, at: 117, df: 184, sa: 44, sd: 46, sp: 28 },
        weightkg: 505,
        abilities: { 0: 'Own Tempo' }
    },
    Barbaracle: {
        types: ['Rock', 'Water'],
        bs: { hp: 72, at: 105, df: 115, sa: 54, sd: 86, sp: 68 },
        weightkg: 96,
        abilities: { 0: 'Tough Claws' }
    },
    Bergmite: {
        types: ['Ice'],
        bs: { hp: 55, at: 69, df: 85, sa: 32, sd: 35, sp: 28 },
        weightkg: 99.5,
        nfe: true,
        abilities: { 0: 'Own Tempo' }
    },
    Binacle: {
        types: ['Rock', 'Water'],
        bs: { hp: 42, at: 52, df: 67, sa: 39, sd: 56, sp: 50 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Tough Claws' }
    },
    Braixen: {
        types: ['Fire'],
        bs: { hp: 59, at: 59, df: 58, sa: 90, sd: 70, sp: 73 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Bunnelby: {
        types: ['Normal'],
        bs: { hp: 38, at: 36, df: 38, sa: 32, sd: 36, sp: 57 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Caimanoe: {
        types: ['Water', 'Steel'],
        bs: { hp: 73, at: 85, df: 65, sa: 80, sd: 40, sp: 87 },
        weightkg: 72.5,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Carbink: {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 50, df: 150, sa: 50, sd: 150, sp: 50 },
        weightkg: 5.7,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Chesnaught: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 107, df: 122, sa: 74, sd: 75, sp: 64 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' }
    },
    Chespin: {
        types: ['Grass'],
        bs: { hp: 56, at: 61, df: 65, sa: 48, sd: 45, sp: 38 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Clauncher: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 62, sa: 58, sd: 63, sp: 44 },
        weightkg: 8.3,
        abilities: { 0: 'Mega Launcher' },
        nfe: true
    },
    Clawitzer: {
        types: ['Water'],
        bs: { hp: 71, at: 73, df: 88, sa: 120, sd: 89, sp: 59 },
        weightkg: 35.3,
        abilities: { 0: 'Mega Launcher' }
    },
    Crucibelle: {
        types: ['Rock', 'Poison'],
        bs: { hp: 106, at: 105, df: 65, sa: 75, sd: 85, sp: 104 },
        weightkg: 23.6,
        abilities: { 0: 'Regenerator' },
        otherFormes: ['Crucibelle-Mega']
    },
    Diancie: {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50 },
        weightkg: 8.8,
        abilities: { 0: 'Clear Body' },
        otherFormes: ['Diancie-Mega'],
        gender: 'N'
    },
    Dedenne: {
        types: ['Electric', 'Fairy'],
        bs: { hp: 67, at: 58, df: 57, sa: 81, sd: 67, sp: 101 },
        weightkg: 2.2,
        abilities: { 0: 'Cheek Pouch' }
    },
    Delphox: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 75, at: 69, df: 72, sa: 114, sd: 100, sp: 104 },
        weightkg: 39,
        abilities: { 0: 'Blaze' }
    },
    Diggersby: {
        types: ['Normal', 'Ground'],
        bs: { hp: 85, at: 56, df: 77, sa: 50, sd: 77, sp: 78 },
        weightkg: 42.4,
        abilities: { 0: 'Pickup' }
    },
    Doublade: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 59, at: 110, df: 150, sa: 45, sd: 49, sp: 35 },
        weightkg: 4.5,
        abilities: { 0: 'No Guard' },
        nfe: true
    },
    Dragalge: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 65, at: 75, df: 90, sa: 97, sd: 123, sp: 44 },
        weightkg: 81.5,
        abilities: { 0: 'Poison Point' }
    },
    Espurr: {
        types: ['Psychic'],
        bs: { hp: 62, at: 48, df: 54, sa: 63, sd: 60, sp: 68 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Fennekin: {
        types: ['Fire'],
        bs: { hp: 40, at: 45, df: 40, sa: 62, sd: 60, sp: 60 },
        weightkg: 9.4,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Flabébé: {
        types: ['Fairy'],
        bs: { hp: 44, at: 38, df: 39, sa: 61, sd: 79, sp: 42 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Flower Veil' }
    },
    Fletchinder: {
        types: ['Fire', 'Flying'],
        bs: { hp: 62, at: 73, df: 55, sa: 56, sd: 52, sp: 84 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Fletchling: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 50, df: 43, sa: 40, sd: 38, sp: 62 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Floatoy: {
        types: ['Water'],
        bs: { hp: 48, at: 70, df: 40, sa: 70, sd: 30, sp: 77 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Floette: {
        types: ['Fairy'],
        bs: { hp: 54, at: 45, df: 47, sa: 75, sd: 98, sp: 52 },
        weightkg: 0.9,
        nfe: true,
        otherFormes: ['Floette-Eternal', 'Floette-Mega'],
        abilities: { 0: 'Flower Veil' }
    },
    'Floette-Eternal': {
        types: ['Fairy'],
        bs: { hp: 74, at: 65, df: 67, sa: 125, sd: 128, sp: 92 },
        weightkg: 0.9,
        abilities: { 0: 'Flower Veil' },
        baseSpecies: 'Floette'
    },
    Florges: {
        types: ['Fairy'],
        bs: { hp: 78, at: 65, df: 68, sa: 112, sd: 154, sp: 75 },
        weightkg: 10,
        abilities: { 0: 'Flower Veil' }
    },
    Froakie: {
        types: ['Water'],
        bs: { hp: 41, at: 56, df: 40, sa: 62, sd: 44, sp: 71 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Frogadier: {
        types: ['Water'],
        bs: { hp: 54, at: 63, df: 52, sa: 83, sd: 56, sp: 97 },
        weightkg: 10.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Furfrou: {
        types: ['Normal'],
        bs: { hp: 75, at: 80, df: 60, sa: 65, sd: 90, sp: 102 },
        weightkg: 28,
        abilities: { 0: 'Fur Coat' }
    },
    Gogoat: {
        types: ['Grass'],
        bs: { hp: 123, at: 100, df: 62, sa: 97, sd: 81, sp: 68 },
        weightkg: 91,
        abilities: { 0: 'Sap Sipper' }
    },
    Goodra: {
        types: ['Dragon'],
        bs: { hp: 90, at: 100, df: 70, sa: 110, sd: 150, sp: 80 },
        weightkg: 150.5,
        abilities: { 0: 'Sap Sipper' }
    },
    Goomy: {
        types: ['Dragon'],
        bs: { hp: 45, at: 50, df: 35, sa: 55, sd: 75, sp: 40 },
        weightkg: 2.8,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Gourgeist: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 65, at: 90, df: 122, sa: 58, sd: 75, sp: 84 },
        weightkg: 12.5,
        abilities: { 0: 'Pickup' },
        otherFormes: ['Gourgeist-Large', 'Gourgeist-Small', 'Gourgeist-Super']
    },
    'Gourgeist-Large': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 75, at: 95, df: 122, sa: 58, sd: 75, sp: 69 },
        weightkg: 14,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Gourgeist'
    },
    'Gourgeist-Small': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 55, at: 85, df: 122, sa: 58, sd: 75, sp: 99 },
        weightkg: 9.5,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Gourgeist'
    },
    'Gourgeist-Super': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 85, at: 100, df: 122, sa: 58, sd: 75, sp: 54 },
        weightkg: 39,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Gourgeist'
    },
    Greninja: {
        types: ['Water', 'Dark'],
        bs: { hp: 72, at: 95, df: 67, sa: 103, sd: 71, sp: 122 },
        weightkg: 40,
        abilities: { 0: 'Torrent' }
    },
    Hawlucha: {
        types: ['Fighting', 'Flying'],
        bs: { hp: 78, at: 92, df: 75, sa: 74, sd: 63, sp: 118 },
        weightkg: 21.5,
        abilities: { 0: 'Limber' }
    },
    Heliolisk: {
        types: ['Electric', 'Normal'],
        bs: { hp: 62, at: 55, df: 52, sa: 109, sd: 94, sp: 109 },
        weightkg: 21,
        abilities: { 0: 'Dry Skin' }
    },
    Helioptile: {
        types: ['Electric', 'Normal'],
        bs: { hp: 44, at: 38, df: 33, sa: 61, sd: 43, sp: 70 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Dry Skin' }
    },
    Honedge: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 45, at: 80, df: 100, sa: 35, sd: 37, sp: 28 },
        weightkg: 2,
        abilities: { 0: 'No Guard' },
        nfe: true
    },
    Hoopa: {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 80, at: 110, df: 60, sa: 150, sd: 130, sp: 70 },
        weightkg: 9,
        gender: 'N',
        abilities: { 0: 'Magician' },
        otherFormes: ['Hoopa-Unbound']
    },
    'Hoopa-Unbound': {
        types: ['Psychic', 'Dark'],
        bs: { hp: 80, at: 160, df: 60, sa: 170, sd: 130, sp: 80 },
        weightkg: 490,
        gender: 'N',
        abilities: { 0: 'Magician' },
        baseSpecies: 'Hoopa'
    },
    Inkay: {
        types: ['Dark', 'Psychic'],
        bs: { hp: 53, at: 54, df: 53, sa: 37, sd: 46, sp: 45 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Contrary' }
    },
    Kerfluffle: {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 84, at: 78, df: 86, sa: 115, sd: 88, sp: 119 },
        weightkg: 24.2,
        abilities: { 0: 'Natural Cure' }
    },
    Klefki: {
        types: ['Steel', 'Fairy'],
        bs: { hp: 57, at: 80, df: 91, sa: 80, sd: 87, sp: 75 },
        weightkg: 3,
        abilities: { 0: 'Prankster' }
    },
    Litleo: {
        types: ['Fire', 'Normal'],
        bs: { hp: 62, at: 50, df: 58, sa: 73, sd: 54, sp: 72 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Malamar: {
        types: ['Dark', 'Psychic'],
        bs: { hp: 86, at: 92, df: 88, sa: 68, sd: 75, sp: 73 },
        weightkg: 47,
        abilities: { 0: 'Contrary' }
    },
    'Abomasnow-Mega': {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 132, df: 105, sa: 132, sd: 105, sp: 30 },
        weightkg: 185,
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Abomasnow'
    },
    'Absol-Mega': {
        types: ['Dark'],
        bs: { hp: 65, at: 150, df: 60, sa: 115, sd: 60, sp: 115 },
        weightkg: 49,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Absol'
    },
    'Aerodactyl-Mega': {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 135, df: 85, sa: 70, sd: 95, sp: 150 },
        weightkg: 79,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Aerodactyl'
    },
    'Aggron-Mega': {
        types: ['Steel'],
        bs: { hp: 70, at: 140, df: 230, sa: 60, sd: 80, sp: 50 },
        weightkg: 395,
        abilities: { 0: 'Filter' },
        baseSpecies: 'Aggron'
    },
    'Alakazam-Mega': {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 65, sa: 175, sd: 95, sp: 150 },
        weightkg: 48,
        abilities: { 0: 'Trace' },
        baseSpecies: 'Alakazam'
    },
    'Altaria-Mega': {
        types: ['Dragon', 'Fairy'],
        bs: { hp: 75, at: 110, df: 110, sa: 110, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Pixilate' },
        baseSpecies: 'Altaria'
    },
    'Ampharos-Mega': {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 95, df: 105, sa: 165, sd: 110, sp: 45 },
        weightkg: 61.5,
        abilities: { 0: 'Mold Breaker' },
        baseSpecies: 'Ampharos'
    },
    'Audino-Mega': {
        types: ['Normal', 'Fairy'],
        bs: { hp: 103, at: 60, df: 126, sa: 80, sd: 126, sp: 50 },
        weightkg: 32,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Audino'
    },
    'Banette-Mega': {
        types: ['Ghost'],
        bs: { hp: 64, at: 165, df: 75, sa: 93, sd: 83, sp: 75 },
        weightkg: 13,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Banette'
    },
    'Beedrill-Mega': {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 150, df: 40, sa: 15, sd: 80, sp: 145 },
        weightkg: 40.5,
        abilities: { 0: 'Adaptability' },
        baseSpecies: 'Beedrill'
    },
    'Blastoise-Mega': {
        types: ['Water'],
        bs: { hp: 79, at: 103, df: 120, sa: 135, sd: 115, sp: 78 },
        weightkg: 101.1,
        abilities: { 0: 'Mega Launcher' },
        baseSpecies: 'Blastoise'
    },
    'Blaziken-Mega': {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 160, df: 80, sa: 130, sd: 80, sp: 100 },
        weightkg: 52,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Blaziken'
    },
    'Camerupt-Mega': {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 120, df: 100, sa: 145, sd: 105, sp: 20 },
        weightkg: 320.5,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Camerupt'
    },
    'Charizard-Mega-X': {
        types: ['Fire', 'Dragon'],
        bs: { hp: 78, at: 130, df: 111, sa: 130, sd: 85, sp: 100 },
        weightkg: 110.5,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Charizard'
    },
    'Charizard-Mega-Y': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 104, df: 78, sa: 159, sd: 115, sp: 100 },
        weightkg: 100.5,
        abilities: { 0: 'Solar Power' },
        baseSpecies: 'Charizard'
    },
    'Crucibelle-Mega': {
        types: ['Rock', 'Poison'],
        bs: { hp: 106, at: 135, df: 75, sa: 85, sd: 125, sp: 114 },
        weightkg: 22.5,
        abilities: { 0: 'Magic Guard' },
        baseSpecies: 'Crucibelle'
    },
    'Diancie-Mega': {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 160, df: 110, sa: 160, sd: 110, sp: 110 },
        weightkg: 27.8,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Diancie',
        gender: 'N'
    },
    'Gallade-Mega': {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 165, df: 95, sa: 65, sd: 115, sp: 110 },
        weightkg: 56.4,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Gallade'
    },
    'Garchomp-Mega': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 170, df: 115, sa: 120, sd: 95, sp: 92 },
        weightkg: 95,
        abilities: { 0: 'Sand Force' },
        baseSpecies: 'Garchomp'
    },
    'Gardevoir-Mega': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
        weightkg: 48.4,
        abilities: { 0: 'Pixilate' },
        baseSpecies: 'Gardevoir'
    },
    'Gengar-Mega': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 80, sa: 170, sd: 95, sp: 130 },
        weightkg: 40.5,
        abilities: { 0: 'Shadow Tag' },
        baseSpecies: 'Gengar'
    },
    'Glalie-Mega': {
        types: ['Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 120, sd: 80, sp: 100 },
        weightkg: 350.2,
        abilities: { 0: 'Refrigerate' },
        baseSpecies: 'Glalie'
    },
    'Gyarados-Mega': {
        types: ['Water', 'Dark'],
        bs: { hp: 95, at: 155, df: 109, sa: 70, sd: 130, sp: 81 },
        weightkg: 305,
        abilities: { 0: 'Mold Breaker' },
        baseSpecies: 'Gyarados'
    },
    'Heracross-Mega': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 185, df: 115, sa: 40, sd: 105, sp: 75 },
        weightkg: 62.5,
        abilities: { 0: 'Skill Link' },
        baseSpecies: 'Heracross'
    },
    'Houndoom-Mega': {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 90, sa: 140, sd: 90, sp: 115 },
        weightkg: 49.5,
        abilities: { 0: 'Solar Power' },
        baseSpecies: 'Houndoom'
    },
    'Kangaskhan-Mega': {
        types: ['Normal'],
        bs: { hp: 105, at: 125, df: 100, sa: 60, sd: 100, sp: 100 },
        weightkg: 100,
        abilities: { 0: 'Parental Bond' },
        baseSpecies: 'Kangaskhan'
    },
    'Latias-Mega': {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 100, df: 120, sa: 140, sd: 150, sp: 110 },
        weightkg: 52,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Latias'
    },
    'Latios-Mega': {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 130, df: 100, sa: 160, sd: 120, sp: 110 },
        weightkg: 70,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Latios'
    },
    'Lopunny-Mega': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 65, at: 136, df: 94, sa: 54, sd: 96, sp: 135 },
        weightkg: 28.3,
        abilities: { 0: 'Scrappy' },
        baseSpecies: 'Lopunny'
    },
    'Lucario-Mega': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
        weightkg: 57.5,
        abilities: { 0: 'Adaptability' },
        baseSpecies: 'Lucario'
    },
    'Manectric-Mega': {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 80, sa: 135, sd: 80, sp: 135 },
        weightkg: 44,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Manectric'
    },
    'Mawile-Mega': {
        types: ['Steel', 'Fairy'],
        bs: { hp: 50, at: 105, df: 125, sa: 55, sd: 95, sp: 50 },
        weightkg: 23.5,
        abilities: { 0: 'Huge Power' },
        baseSpecies: 'Mawile'
    },
    'Medicham-Mega': {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 100, df: 85, sa: 80, sd: 85, sp: 100 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' },
        baseSpecies: 'Medicham'
    },
    'Metagross-Mega': {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 145, df: 150, sa: 105, sd: 110, sp: 110 },
        weightkg: 942.9,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Metagross',
        gender: 'N'
    },
    'Mewtwo-Mega-X': {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 106, at: 190, df: 100, sa: 154, sd: 100, sp: 130 },
        weightkg: 127,
        abilities: { 0: 'Steadfast' },
        baseSpecies: 'Mewtwo',
        gender: 'N'
    },
    'Mewtwo-Mega-Y': {
        types: ['Psychic'],
        bs: { hp: 106, at: 150, df: 70, sa: 194, sd: 120, sp: 140 },
        weightkg: 33,
        abilities: { 0: 'Insomnia' },
        baseSpecies: 'Mewtwo',
        gender: 'N'
    },
    'Pidgeot-Mega': {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 80, sa: 135, sd: 80, sp: 121 },
        weightkg: 50.5,
        abilities: { 0: 'No Guard' },
        baseSpecies: 'Pidgeot'
    },
    'Pinsir-Mega': {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 155, df: 120, sa: 65, sd: 90, sp: 105 },
        weightkg: 59,
        abilities: { 0: 'Aerilate' },
        baseSpecies: 'Pinsir'
    },
    'Rayquaza-Mega': {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 180, df: 100, sa: 180, sd: 100, sp: 115 },
        weightkg: 392,
        gender: 'N',
        abilities: { 0: 'Delta Stream' },
        baseSpecies: 'Rayquaza'
    },
    'Sableye-Mega': {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 85, df: 125, sa: 85, sd: 115, sp: 20 },
        weightkg: 161,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Sableye'
    },
    'Salamence-Mega': {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 145, df: 130, sa: 120, sd: 90, sp: 120 },
        weightkg: 112.6,
        abilities: { 0: 'Aerilate' },
        baseSpecies: 'Salamence'
    },
    'Sceptile-Mega': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 75, sa: 145, sd: 85, sp: 145 },
        weightkg: 55.2,
        abilities: { 0: 'Limber' },
        baseSpecies: 'Sceptile'
    },
    'Scizor-Mega': {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 150, df: 140, sa: 65, sd: 100, sp: 75 },
        weightkg: 125,
        abilities: { 0: 'Technician' },
        baseSpecies: 'Scizor'
    },
    'Sharpedo-Mega': {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 140, df: 70, sa: 110, sd: 65, sp: 105 },
        weightkg: 130.3,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Sharpedo'
    },
    'Slowbro-Mega': {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 180, sa: 130, sd: 80, sp: 30 },
        weightkg: 120,
        abilities: { 0: 'Shell Armor' },
        baseSpecies: 'Slowbro'
    },
    'Steelix-Mega': {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 125, df: 230, sa: 55, sd: 95, sp: 30 },
        weightkg: 740,
        abilities: { 0: 'Sand Force' },
        baseSpecies: 'Steelix'
    },
    'Swampert-Mega': {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 150, df: 110, sa: 95, sd: 110, sp: 70 },
        weightkg: 102,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Swampert'
    },
    'Tyranitar-Mega': {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 164, df: 150, sa: 95, sd: 120, sp: 71 },
        weightkg: 255,
        abilities: { 0: 'Battle Armor' },
        baseSpecies: 'Tyranitar'
    },
    'Venusaur-Mega': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 100, df: 123, sa: 122, sd: 120, sp: 80 },
        weightkg: 155.5,
        abilities: { 0: 'Thick Fat' },
        baseSpecies: 'Venusaur'
    },
    Meowstic: {
        types: ['Psychic'],
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        weightkg: 8.5,
        abilities: { 0: 'Keen Eye' },
        otherFormes: ['Meowstic-F']
    },
    'Meowstic-F': {
        types: ['Psychic'],
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        weightkg: 8.5,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Meowstic'
    },
    Naviathan: {
        types: ['Water', 'Steel'],
        bs: { hp: 103, at: 110, df: 90, sa: 95, sd: 65, sp: 97 },
        weightkg: 510,
        abilities: { 0: 'Water Veil' }
    },
    Noibat: {
        types: ['Flying', 'Dragon'],
        bs: { hp: 40, at: 30, df: 35, sa: 45, sd: 40, sp: 55 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Noivern: {
        types: ['Flying', 'Dragon'],
        bs: { hp: 85, at: 70, df: 80, sa: 97, sd: 80, sp: 123 },
        weightkg: 85,
        abilities: { 0: 'Frisk' }
    },
    Pancham: {
        types: ['Fighting'],
        bs: { hp: 67, at: 82, df: 62, sa: 46, sd: 48, sp: 43 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Iron Fist' }
    },
    Pangoro: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 95, at: 124, df: 78, sa: 69, sd: 71, sp: 58 },
        weightkg: 136,
        abilities: { 0: 'Iron Fist' }
    },
    Phantump: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 43, at: 70, df: 48, sa: 50, sd: 60, sp: 38 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    'Pikachu-Cosplay': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Rock-Star': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Belle': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-PhD': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Pop-Star': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Libre': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    Plasmanta: {
        types: ['Electric', 'Poison'],
        bs: { hp: 60, at: 57, df: 119, sa: 131, sd: 98, sp: 100 },
        weightkg: 460,
        abilities: { 0: 'Storm Drain' }
    },
    Pluffle: {
        types: ['Fairy'],
        bs: { hp: 74, at: 38, df: 51, sa: 65, sd: 78, sp: 49 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    'Groudon-Primal': {
        types: ['Ground', 'Fire'],
        bs: { hp: 100, at: 180, df: 160, sa: 150, sd: 90, sp: 90 },
        weightkg: 999.7,
        abilities: { 0: 'Desolate Land' },
        baseSpecies: 'Groudon',
        gender: 'N'
    },
    'Kyogre-Primal': {
        types: ['Water'],
        bs: { hp: 100, at: 150, df: 90, sa: 180, sd: 160, sp: 90 },
        weightkg: 430,
        abilities: { 0: 'Primordial Sea' },
        baseSpecies: 'Kyogre',
        gender: 'N'
    },
    Pumpkaboo: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 49, at: 66, df: 70, sa: 44, sd: 55, sp: 51 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        otherFormes: ['Pumpkaboo-Large', 'Pumpkaboo-Small', 'Pumpkaboo-Super']
    },
    'Pumpkaboo-Large': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 54, at: 66, df: 70, sa: 44, sd: 55, sp: 46 },
        weightkg: 7.5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pumpkaboo'
    },
    'Pumpkaboo-Small': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 44, at: 66, df: 70, sa: 44, sd: 55, sp: 56 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pumpkaboo'
    },
    'Pumpkaboo-Super': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 59, at: 66, df: 70, sa: 44, sd: 55, sp: 41 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pumpkaboo'
    },
    Pyroar: {
        types: ['Fire', 'Normal'],
        bs: { hp: 86, at: 68, df: 72, sa: 109, sd: 66, sp: 106 },
        weightkg: 81.5,
        abilities: { 0: 'Rivalry' }
    },
    Quilladin: {
        types: ['Grass'],
        bs: { hp: 61, at: 78, df: 95, sa: 56, sd: 58, sp: 57 },
        weightkg: 29,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Scatterbug: {
        types: ['Bug'],
        bs: { hp: 38, at: 35, df: 40, sa: 27, sd: 25, sp: 35 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Skiddo: {
        types: ['Grass'],
        bs: { hp: 66, at: 65, df: 48, sa: 62, sd: 57, sp: 52 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Skrelp: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 60, df: 60, sa: 60, sd: 60, sp: 30 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Sliggoo: {
        types: ['Dragon'],
        bs: { hp: 68, at: 75, df: 53, sa: 83, sd: 113, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Slurpuff: {
        types: ['Fairy'],
        bs: { hp: 82, at: 80, df: 86, sa: 85, sd: 75, sp: 72 },
        weightkg: 5,
        abilities: { 0: 'Sweet Veil' }
    },
    Snugglow: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 37, df: 79, sa: 91, sd: 68, sp: 70 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Storm Drain' }
    },
    Spewpa: {
        types: ['Bug'],
        bs: { hp: 45, at: 22, df: 60, sa: 27, sd: 30, sp: 29 },
        weightkg: 8.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Spritzee: {
        types: ['Fairy'],
        bs: { hp: 78, at: 52, df: 60, sa: 63, sd: 65, sp: 23 },
        weightkg: 0.5,
        nfe: true,
        abilities: { 0: 'Healer' }
    },
    Swirlix: {
        types: ['Fairy'],
        bs: { hp: 62, at: 48, df: 66, sa: 59, sd: 57, sp: 49 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Sweet Veil' }
    },
    Sylveon: {
        types: ['Fairy'],
        bs: { hp: 95, at: 65, df: 65, sa: 110, sd: 130, sp: 60 },
        weightkg: 23.5,
        abilities: { 0: 'Cute Charm' }
    },
    Talonflame: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 81, df: 71, sa: 74, sd: 69, sp: 126 },
        weightkg: 24.5,
        abilities: { 0: 'Flame Body' }
    },
    Trevenant: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 85, at: 110, df: 76, sa: 65, sd: 82, sp: 56 },
        weightkg: 71,
        abilities: { 0: 'Natural Cure' }
    },
    Tyrantrum: {
        types: ['Rock', 'Dragon'],
        bs: { hp: 82, at: 121, df: 119, sa: 69, sd: 59, sp: 71 },
        weightkg: 270,
        abilities: { 0: 'Strong Jaw' }
    },
    Tyrunt: {
        types: ['Rock', 'Dragon'],
        bs: { hp: 58, at: 89, df: 77, sa: 45, sd: 45, sp: 48 },
        weightkg: 26,
        nfe: true,
        abilities: { 0: 'Strong Jaw' }
    },
    Vivillon: {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        otherFormes: ['Vivillon-Fancy', 'Vivillon-Pokeball']
    },
    'Vivillon-Fancy': {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        baseSpecies: 'Vivillon'
    },
    'Vivillon-Pokeball': {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        baseSpecies: 'Vivillon'
    },
    Volcanion: {
        types: ['Fire', 'Water'],
        bs: { hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70 },
        weightkg: 195,
        gender: 'N',
        abilities: { 0: 'Water Absorb' }
    },
    Volkraken: {
        types: ['Water', 'Fire'],
        bs: { hp: 100, at: 45, df: 80, sa: 135, sd: 100, sp: 95 },
        weightkg: 44.5,
        abilities: { 0: 'Analytic' }
    },
    Volkritter: {
        types: ['Water', 'Fire'],
        bs: { hp: 60, at: 30, df: 50, sa: 80, sd: 60, sp: 70 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Xerneas: {
        types: ['Fairy'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        weightkg: 215,
        abilities: { 0: 'Fairy Aura' },
        gender: 'N'
    },
    Yveltal: {
        types: ['Dark', 'Flying'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        weightkg: 203,
        abilities: { 0: 'Dark Aura' },
        gender: 'N'
    },
    Zygarde: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 100, df: 121, sa: 81, sd: 95, sp: 95 },
        weightkg: 305,
        abilities: { 0: 'Aura Break' },
        gender: 'N'
    }
};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
XY['Arceus'].otherFormes.push('Arceus-Fairy');
XY['Arceus'].otherFormes.sort();
var SM_PATCH = {
    'Alakazam-Mega': { bs: { sd: 105 } },
    Arbok: { bs: { at: 95 } },
    Ariados: { bs: { sd: 70 } },
    Beartic: { bs: { at: 130 } },
    Chimecho: { bs: { hp: 75, df: 80, sd: 90 } },
    Corsola: { bs: { hp: 65, df: 95, sd: 95 } },
    'Crucibelle-Mega': { bs: { sa: 91, sp: 108 } },
    Crustle: { bs: { at: 105 } },
    Cryogonal: { bs: { hp: 80, df: 50 } },
    Delcatty: { bs: { sp: 90 } },
    Diglett: { otherFormes: ['Diglett-Alola'] },
    Dodrio: { bs: { sp: 110 } },
    Dugtrio: { bs: { at: 100 }, otherFormes: ['Dugtrio-Alola'] },
    Eevee: { otherFormes: ['Eevee-Starter'] },
    Electrode: { bs: { sp: 150 } },
    Exeggutor: { bs: { sd: 75 }, otherFormes: ['Exeggutor-Alola'] },
    'Farfetch\u2019d': { bs: { at: 90 } },
    Gengar: { abilities: { 0: 'Cursed Body' } },
    Geodude: { otherFormes: ['Geodude-Alola'] },
    Golem: { otherFormes: ['Golem-Alola'] },
    Graveler: { otherFormes: ['Graveler-Alola'] },
    Greninja: { otherFormes: ['Greninja-Ash'] },
    Grimer: { otherFormes: ['Grimer-Alola'] },
    Illumise: { bs: { df: 75, sd: 85 } },
    Lunatone: { bs: { hp: 90 } },
    Magcargo: { bs: { hp: 60, sa: 90 } },
    Mantine: { bs: { hp: 85 } },
    Marowak: { otherFormes: ['Marowak-Alola', 'Marowak-Alola-Totem'] },
    Masquerain: { bs: { sa: 100, sp: 80 } },
    Meowth: { otherFormes: ['Meowth-Alola'] },
    Muk: { otherFormes: ['Muk-Alola'] },
    Necturna: { bs: { sp: 58 } },
    Ninetales: { otherFormes: ['Ninetales-Alola'] },
    Naviathan: { abilities: { 0: 'Guts' } },
    Noctowl: { bs: { sa: 86 } },
    Pelipper: { bs: { sa: 95 } },
    Persian: { otherFormes: ['Persian-Alola'] },
    Pikachu: {
        otherFormes: [
            'Pikachu-Alola',
            'Pikachu-Hoenn',
            'Pikachu-Kalos',
            'Pikachu-Original',
            'Pikachu-Partner',
            'Pikachu-Sinnoh',
            'Pikachu-Starter',
            'Pikachu-Unova',
        ]
    },
    Qwilfish: { bs: { df: 85 } },
    Raichu: { otherFormes: ['Raichu-Alola', 'Raichu-Mega-X', 'Raichu-Mega-Y'] },
    Raticate: { otherFormes: ['Raticate-Alola', 'Raticate-Alola-Totem'] },
    Rattata: { otherFormes: ['Rattata-Alola'] },
    Sandshrew: { otherFormes: ['Sandshrew-Alola'] },
    Sandslash: { otherFormes: ['Sandslash-Alola'] },
    Solrock: { bs: { hp: 90 } },
    Swellow: { bs: { sa: 75 } },
    Volbeat: { bs: { df: 75, sd: 85 } },
    Vulpix: { otherFormes: ['Vulpix-Alola'] },
    Woobat: { bs: { hp: 65 } },
    Zygarde: { otherFormes: ['Zygarde-10%', 'Zygarde-Complete'] },
    Araquanid: {
        types: ['Water', 'Bug'],
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        weightkg: 82,
        otherFormes: ['Araquanid-Totem']
    },
    'Araquanid-Totem': {
        types: ['Water', 'Bug'],
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        weightkg: 217.5,
        baseSpecies: 'Araquanid'
    },
    Bewear: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 120, at: 125, df: 80, sa: 55, sd: 60, sp: 60 },
        abilities: { 0: 'Fluffy' },
        weightkg: 135
    },
    Blacephalon: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 53, at: 127, df: 53, sa: 151, sd: 79, sp: 107 },
        weightkg: 13,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Bounsweet: {
        types: ['Grass'],
        bs: { hp: 42, at: 30, df: 38, sa: 30, sd: 38, sp: 32 },
        weightkg: 3.2,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Brionne: {
        types: ['Water'],
        bs: { hp: 60, at: 69, df: 69, sa: 91, sd: 81, sp: 50 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Bruxish: {
        types: ['Water', 'Psychic'],
        bs: { hp: 68, at: 105, df: 70, sa: 70, sd: 70, sp: 92 },
        weightkg: 19,
        abilities: { 0: 'Dazzling' }
    },
    Buzzwole: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 107, at: 139, df: 139, sa: 53, sd: 53, sp: 79 },
        weightkg: 333.6,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Caribolt: {
        types: ['Grass', 'Electric'],
        bs: { hp: 84, at: 106, df: 82, sa: 77, sd: 80, sp: 106 },
        weightkg: 140,
        abilities: { 0: 'Overgrow' }
    },
    Celesteela: {
        types: ['Steel', 'Flying'],
        bs: { hp: 97, at: 101, df: 103, sa: 107, sd: 101, sp: 61 },
        weightkg: 999.9,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Charjabug: {
        types: ['Bug', 'Electric'],
        bs: { hp: 57, at: 82, df: 95, sa: 55, sd: 75, sp: 36 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Battery' }
    },
    Comfey: {
        types: ['Fairy'],
        bs: { hp: 51, at: 52, df: 90, sa: 82, sd: 110, sp: 100 },
        weightkg: 0.3,
        abilities: { 0: 'Flower Veil' }
    },
    Cosmoem: {
        types: ['Psychic'],
        bs: { hp: 43, at: 29, df: 131, sa: 29, sd: 131, sp: 37 },
        weightkg: 999.9,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Sturdy' }
    },
    Coribalis: {
        types: ['Water', 'Bug'],
        bs: { hp: 76, at: 69, df: 90, sa: 65, sd: 77, sp: 43 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Cosmog: {
        types: ['Psychic'],
        bs: { hp: 43, at: 29, df: 31, sa: 29, sd: 31, sp: 37 },
        weightkg: 0.1,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Unaware' }
    },
    Crabominable: {
        types: ['Fighting', 'Ice'],
        bs: { hp: 97, at: 132, df: 77, sa: 62, sd: 67, sp: 43 },
        weightkg: 180,
        abilities: { 0: 'Hyper Cutter' }
    },
    Crabrawler: {
        types: ['Fighting'],
        bs: { hp: 47, at: 82, df: 57, sa: 42, sd: 47, sp: 63 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Cutiefly: {
        types: ['Bug', 'Fairy'],
        bs: { hp: 40, at: 45, df: 40, sa: 55, sd: 40, sp: 84 },
        weightkg: 0.2,
        nfe: true,
        abilities: { 0: 'Honey Gather' }
    },
    Dartrix: {
        types: ['Grass', 'Flying'],
        bs: { hp: 78, at: 75, df: 75, sa: 70, sd: 70, sp: 52 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Decidueye: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 78, at: 107, df: 75, sa: 100, sd: 100, sp: 70 },
        weightkg: 36.6,
        abilities: { 0: 'Overgrow' }
    },
    Dewpider: {
        types: ['Water', 'Bug'],
        bs: { hp: 38, at: 40, df: 52, sa: 40, sd: 72, sp: 27 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Water Bubble' }
    },
    Dhelmise: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 70, at: 131, df: 100, sa: 86, sd: 90, sp: 40 },
        weightkg: 210,
        gender: 'N',
        abilities: { 0: 'Steelworker' }
    },
    Drampa: {
        types: ['Normal', 'Dragon'],
        bs: { hp: 78, at: 60, df: 85, sa: 135, sd: 91, sp: 36 },
        weightkg: 185,
        abilities: { 0: 'Berserk' }
    },
    'Diglett-Alola': {
        types: ['Ground', 'Steel'],
        bs: { hp: 10, at: 55, df: 30, sa: 35, sd: 45, sp: 90 },
        weightkg: 1,
        baseSpecies: 'Diglett',
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    'Dugtrio-Alola': {
        types: ['Ground', 'Steel'],
        bs: { hp: 35, at: 100, df: 60, sa: 50, sd: 70, sp: 110 },
        weightkg: 66.6,
        baseSpecies: 'Dugtrio',
        abilities: { 0: 'Sand Veil' }
    },
    'Eevee-Starter': {
        types: ['Normal'],
        bs: { hp: 65, at: 75, df: 70, sa: 65, sd: 85, sp: 75 },
        weightkg: 6.5,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Eevee'
    },
    Electrelk: {
        types: ['Grass', 'Electric'],
        bs: { hp: 59, at: 81, df: 67, sa: 57, sd: 55, sp: 101 },
        weightkg: 41.5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Equilibra: {
        types: ['Steel', 'Ground'],
        bs: { hp: 102, at: 50, df: 96, sa: 133, sd: 118, sp: 60 },
        weightkg: 51.3,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    'Exeggutor-Alola': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 95, at: 105, df: 85, sa: 125, sd: 75, sp: 45 },
        weightkg: 415.6,
        baseSpecies: 'Exeggutor',
        abilities: { 0: 'Frisk' }
    },
    Fawnifer: {
        types: ['Grass'],
        bs: { hp: 49, at: 61, df: 42, sa: 52, sd: 40, sp: 76 },
        weightkg: 6.9,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Fomantis: {
        types: ['Grass'],
        bs: { hp: 40, at: 55, df: 35, sa: 50, sd: 35, sp: 35 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    'Geodude-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 40, at: 80, df: 100, sa: 30, sd: 30, sp: 20 },
        weightkg: 20.3,
        baseSpecies: 'Geodude',
        nfe: true,
        abilities: { 0: 'Magnet Pull' }
    },
    'Golem-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 80, at: 120, df: 130, sa: 55, sd: 65, sp: 45 },
        weightkg: 316,
        abilities: { 0: 'Magnet Pull' },
        baseSpecies: 'Golem'
    },
    Golisopod: {
        types: ['Bug', 'Water'],
        bs: { hp: 75, at: 125, df: 140, sa: 60, sd: 90, sp: 40 },
        weightkg: 108,
        abilities: { 0: 'Emergency Exit' }
    },
    'Graveler-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 55, at: 95, df: 115, sa: 45, sd: 45, sp: 35 },
        weightkg: 110,
        baseSpecies: 'Graveler',
        nfe: true,
        abilities: { 0: 'Magnet Pull' }
    },
    'Grimer-Alola': {
        types: ['Poison', 'Dark'],
        bs: { hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25 },
        weightkg: 42,
        baseSpecies: 'Grimer',
        nfe: true,
        abilities: { 0: 'Poison Touch' }
    },
    'Greninja-Ash': {
        types: ['Water', 'Dark'],
        bs: { hp: 72, at: 145, df: 67, sa: 153, sd: 71, sp: 132 },
        weightkg: 40,
        abilities: { 0: 'Battle Bond' },
        baseSpecies: 'Greninja'
    },
    Grubbin: {
        types: ['Bug'],
        bs: { hp: 47, at: 62, df: 45, sa: 55, sd: 45, sp: 46 },
        weightkg: 4.4,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Gumshoos: {
        types: ['Normal'],
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        weightkg: 14.2,
        otherFormes: ['Gumshoos-Totem'],
        abilities: { 0: 'Stakeout' }
    },
    'Gumshoos-Totem': {
        types: ['Normal'],
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        weightkg: 60,
        baseSpecies: 'Gumshoos',
        abilities: { 0: 'Adaptability' }
    },
    Guzzlord: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 223, at: 101, df: 53, sa: 97, sd: 53, sp: 43 },
        weightkg: 888,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Hakamo-o': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 55, at: 75, df: 90, sa: 65, sd: 70, sp: 65 },
        weightkg: 47,
        nfe: true,
        abilities: { 0: 'Bulletproof' }
    },
    Incineroar: {
        types: ['Fire', 'Dark'],
        bs: { hp: 95, at: 115, df: 90, sa: 80, sd: 90, sp: 60 },
        weightkg: 83,
        abilities: { 0: 'Blaze' }
    },
    'Jangmo-o': {
        types: ['Dragon'],
        bs: { hp: 45, at: 55, df: 65, sa: 45, sd: 45, sp: 45 },
        weightkg: 29.7,
        nfe: true,
        abilities: { 0: 'Bulletproof' }
    },
    Justyke: {
        types: ['Steel', 'Ground'],
        bs: { hp: 72, at: 70, df: 56, sa: 83, sd: 68, sp: 30 },
        weightkg: 36.5,
        nfe: true,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Jumbao: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 92, at: 63, df: 97, sa: 124, sd: 104, sp: 96 },
        weightkg: 200,
        abilities: { 0: 'Trace' }
    },
    Kartana: {
        types: ['Grass', 'Steel'],
        bs: { hp: 59, at: 181, df: 131, sa: 59, sd: 31, sp: 109 },
        weightkg: 0.1,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Komala: {
        types: ['Normal'],
        bs: { hp: 65, at: 115, df: 65, sa: 75, sd: 95, sp: 65 },
        weightkg: 19.9,
        abilities: { 0: 'Comatose' }
    },
    'Kommo-o': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        weightkg: 78.2,
        otherFormes: ['Kommo-o-Totem'],
        abilities: { 0: 'Bulletproof' }
    },
    'Kommo-o-Totem': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        weightkg: 207.5,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Kommo-o'
    },
    Litten: {
        types: ['Fire'],
        bs: { hp: 45, at: 65, df: 40, sa: 60, sd: 40, sp: 70 },
        weightkg: 4.3,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Lunala: {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 137, at: 113, df: 89, sa: 137, sd: 107, sp: 97 },
        weightkg: 120,
        abilities: { 0: 'Shadow Shield' },
        gender: 'N'
    },
    Lurantis: {
        types: ['Grass'],
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        weightkg: 18.5,
        otherFormes: ['Lurantis-Totem'],
        abilities: { 0: 'Leaf Guard' }
    },
    'Lurantis-Totem': {
        types: ['Grass'],
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        weightkg: 58,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Lurantis'
    },
    Lycanroc: {
        types: ['Rock'],
        bs: { hp: 75, at: 115, df: 65, sa: 55, sd: 65, sp: 112 },
        weightkg: 25,
        otherFormes: ['Lycanroc-Dusk', 'Lycanroc-Midnight'],
        abilities: { 0: 'Keen Eye' }
    },
    'Lycanroc-Dusk': {
        types: ['Rock'],
        bs: { hp: 75, at: 117, df: 65, sa: 55, sd: 65, sp: 110 },
        weightkg: 25,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Lycanroc'
    },
    'Lycanroc-Midnight': {
        types: ['Rock'],
        bs: { hp: 85, at: 115, df: 75, sa: 55, sd: 75, sp: 82 },
        weightkg: 25,
        baseSpecies: 'Lycanroc',
        abilities: { 0: 'Keen Eye' }
    },
    Magearna: {
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    Mareanie: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 53, df: 62, sa: 43, sd: 52, sp: 45 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Merciless' }
    },
    'Marowak-Alola': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        weightkg: 34,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Marowak'
    },
    'Marowak-Alola-Totem': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        weightkg: 98,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Marowak'
    },
    Marshadow: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 90, at: 125, df: 80, sa: 90, sd: 90, sp: 125 },
        weightkg: 22.2,
        gender: 'N',
        abilities: { 0: 'Technician' }
    },
    Melmetal: {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 800,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Meltan: {
        types: ['Steel'],
        bs: { hp: 46, at: 65, df: 65, sa: 55, sd: 35, sp: 34 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    'Meowth-Alola': {
        types: ['Dark'],
        bs: { hp: 40, at: 35, df: 35, sa: 50, sd: 40, sp: 90 },
        weightkg: 4.2,
        baseSpecies: 'Meowth',
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Mimikyu: {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 0.7,
        otherFormes: ['Mimikyu-Busted', 'Mimikyu-Busted-Totem', 'Mimikyu-Totem'],
        abilities: { 0: 'Disguise' }
    },
    'Mimikyu-Busted': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 0.7,
        baseSpecies: 'Mimikyu',
        abilities: { 0: 'Disguise' }
    },
    'Mimikyu-Busted-Totem': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 2.8,
        baseSpecies: 'Mimikyu',
        abilities: { 0: 'Disguise' }
    },
    'Mimikyu-Totem': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 2.8,
        baseSpecies: 'Mimikyu',
        abilities: { 0: 'Disguise' }
    },
    Minior: {
        types: ['Rock', 'Flying'],
        bs: { hp: 60, at: 100, df: 60, sa: 100, sd: 60, sp: 120 },
        weightkg: 0.3,
        otherFormes: ['Minior-Meteor'],
        gender: 'N',
        abilities: { 0: 'Shields Down' }
    },
    'Minior-Meteor': {
        types: ['Rock', 'Flying'],
        bs: { hp: 60, at: 60, df: 100, sa: 60, sd: 100, sp: 60 },
        weightkg: 40,
        gender: 'N',
        baseSpecies: 'Minior',
        abilities: { 0: 'Shields Down' }
    },
    Morelull: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 40, at: 35, df: 55, sa: 65, sd: 75, sp: 15 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Illuminate' }
    },
    Mudbray: {
        types: ['Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 45, sd: 55, sp: 45 },
        weightkg: 110,
        nfe: true,
        abilities: { 0: 'Own Tempo' }
    },
    Mudsdale: {
        types: ['Ground'],
        bs: { hp: 100, at: 125, df: 100, sa: 55, sd: 85, sp: 35 },
        weightkg: 920,
        abilities: { 0: 'Own Tempo' }
    },
    'Muk-Alola': {
        types: ['Poison', 'Dark'],
        bs: { hp: 105, at: 105, df: 75, sa: 65, sd: 100, sp: 50 },
        weightkg: 52,
        baseSpecies: 'Muk',
        abilities: { 0: 'Poison Touch' }
    },
    Mumbao: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 55, at: 30, df: 64, sa: 87, sd: 73, sp: 66 },
        weightkg: 83,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Naganadel: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 73, at: 73, df: 73, sa: 127, sd: 73, sp: 121 },
        weightkg: 150,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Necrozma: {
        types: ['Psychic'],
        bs: { hp: 97, at: 107, df: 101, sa: 127, sd: 89, sp: 79 },
        weightkg: 230,
        abilities: { 0: 'Prism Armor' },
        otherFormes: ['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra'],
        gender: 'N'
    },
    'Necrozma-Dawn-Wings': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 97, at: 113, df: 109, sa: 157, sd: 127, sp: 77 },
        weightkg: 350,
        abilities: { 0: 'Prism Armor' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    'Necrozma-Dusk-Mane': {
        types: ['Psychic', 'Steel'],
        bs: { hp: 97, at: 157, df: 127, sa: 113, sd: 109, sp: 77 },
        weightkg: 460,
        abilities: { 0: 'Prism Armor' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    'Necrozma-Ultra': {
        types: ['Psychic', 'Dragon'],
        bs: { hp: 97, at: 167, df: 97, sa: 167, sd: 97, sp: 129 },
        weightkg: 230,
        abilities: { 0: 'Neuroforce' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    Nihilego: {
        types: ['Rock', 'Poison'],
        bs: { hp: 109, at: 53, df: 47, sa: 127, sd: 131, sp: 103 },
        weightkg: 55.5,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Ninetales-Alola': {
        types: ['Ice', 'Fairy'],
        bs: { hp: 73, at: 67, df: 75, sa: 81, sd: 100, sp: 109 },
        weightkg: 19.9,
        abilities: { 0: 'Snow Cloak' },
        baseSpecies: 'Ninetales'
    },
    Oranguru: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 90, at: 60, df: 80, sa: 90, sd: 110, sp: 60 },
        weightkg: 76,
        abilities: { 0: 'Inner Focus' }
    },
    Oricorio: {
        types: ['Fire', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        otherFormes: ['Oricorio-Pa\'u', 'Oricorio-Pom-Pom', 'Oricorio-Sensu']
    },
    'Oricorio-Pa\'u': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Oricorio'
    },
    'Oricorio-Pom-Pom': {
        types: ['Electric', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Oricorio'
    },
    'Oricorio-Sensu': {
        types: ['Ghost', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Oricorio'
    },
    Pajantom: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 84, at: 133, df: 71, sa: 51, sd: 111, sp: 101 },
        weightkg: 3.1,
        abilities: { 0: 'Comatose' }
    },
    Palossand: {
        types: ['Ghost', 'Ground'],
        bs: { hp: 85, at: 75, df: 110, sa: 100, sd: 75, sp: 35 },
        weightkg: 250,
        abilities: { 0: 'Water Compaction' }
    },
    Passimian: {
        types: ['Fighting'],
        bs: { hp: 100, at: 120, df: 90, sa: 40, sd: 60, sp: 80 },
        weightkg: 82.8,
        abilities: { 0: 'Receiver' }
    },
    'Persian-Alola': {
        types: ['Dark'],
        bs: { hp: 65, at: 60, df: 60, sa: 75, sd: 65, sp: 115 },
        weightkg: 33,
        baseSpecies: 'Persian',
        abilities: { 0: 'Fur Coat' }
    },
    Pheromosa: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 71, at: 137, df: 37, sa: 137, sd: 37, sp: 151 },
        weightkg: 25,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Pikachu-Alola': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Hoenn': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Kalos': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Original': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Partner': {
        types: ['Electric'],
        bs: { hp: 45, at: 80, df: 50, sa: 75, sd: 60, sp: 120 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Sinnoh': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Starter': {
        types: ['Electric'],
        bs: { hp: 45, at: 80, df: 50, sa: 75, sd: 60, sp: 120 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Unova': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Pikipek: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 75, df: 30, sa: 30, sd: 30, sp: 65 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Poipole: {
        types: ['Poison'],
        bs: { hp: 67, at: 73, df: 67, sa: 73, sd: 67, sp: 73 },
        weightkg: 1.8,
        abilities: { 0: 'Beast Boost' },
        nfe: true,
        gender: 'N'
    },
    Popplio: {
        types: ['Water'],
        bs: { hp: 50, at: 54, df: 54, sa: 66, sd: 56, sp: 40 },
        weightkg: 7.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Primarina: {
        types: ['Water', 'Fairy'],
        bs: { hp: 80, at: 74, df: 74, sa: 126, sd: 116, sp: 60 },
        weightkg: 44,
        abilities: { 0: 'Torrent' }
    },
    Pyukumuku: {
        types: ['Water'],
        bs: { hp: 55, at: 60, df: 130, sa: 30, sd: 130, sp: 5 },
        weightkg: 1.2,
        abilities: { 0: 'Innards Out' }
    },
    'Raichu-Alola': {
        types: ['Electric', 'Psychic'],
        bs: { hp: 60, at: 85, df: 50, sa: 95, sd: 85, sp: 110 },
        weightkg: 21,
        baseSpecies: 'Raichu',
        abilities: { 0: 'Surge Surfer' }
    },
    'Raticate-Alola': {
        types: ['Dark', 'Normal'],
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        weightkg: 25.5,
        baseSpecies: 'Raticate',
        abilities: { 0: 'Gluttony' }
    },
    'Raticate-Alola-Totem': {
        types: ['Dark', 'Normal'],
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        weightkg: 105,
        abilities: { 0: 'Thick Fat' },
        baseSpecies: 'Raticate'
    },
    'Rattata-Alola': {
        types: ['Dark', 'Normal'],
        bs: { hp: 30, at: 56, df: 35, sa: 25, sd: 35, sp: 72 },
        weightkg: 3.8,
        baseSpecies: 'Rattata',
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Ribombee: {
        types: ['Bug', 'Fairy'],
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        weightkg: 0.5,
        otherFormes: ['Ribombee-Totem'],
        abilities: { 0: 'Honey Gather' }
    },
    'Ribombee-Totem': {
        types: ['Bug', 'Fairy'],
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        weightkg: 2,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Ribombee'
    },
    Rockruff: {
        types: ['Rock'],
        bs: { hp: 45, at: 65, df: 40, sa: 30, sd: 40, sp: 60 },
        weightkg: 9.2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Rowlet: {
        types: ['Grass', 'Flying'],
        bs: { hp: 68, at: 55, df: 55, sa: 50, sd: 50, sp: 42 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Salandit: {
        types: ['Poison', 'Fire'],
        bs: { hp: 48, at: 44, df: 40, sa: 71, sd: 40, sp: 77 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Corrosion' }
    },
    Salazzle: {
        types: ['Poison', 'Fire'],
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        weightkg: 22.2,
        otherFormes: ['Salazzle-Totem'],
        abilities: { 0: 'Corrosion' }
    },
    'Salazzle-Totem': {
        types: ['Poison', 'Fire'],
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        weightkg: 81,
        abilities: { 0: 'Corrosion' },
        baseSpecies: 'Salazzle'
    },
    'Sandshrew-Alola': {
        types: ['Ice', 'Steel'],
        bs: { hp: 50, at: 75, df: 90, sa: 10, sd: 35, sp: 40 },
        weightkg: 40,
        baseSpecies: 'Sandshrew',
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    'Sandslash-Alola': {
        types: ['Ice', 'Steel'],
        bs: { hp: 75, at: 100, df: 120, sa: 25, sd: 65, sp: 65 },
        weightkg: 55,
        baseSpecies: 'Sandslash',
        abilities: { 0: 'Snow Cloak' }
    },
    Sandygast: {
        types: ['Ghost', 'Ground'],
        bs: { hp: 55, at: 55, df: 80, sa: 70, sd: 45, sp: 15 },
        weightkg: 70,
        nfe: true,
        abilities: { 0: 'Water Compaction' }
    },
    Shiinotic: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 60, at: 45, df: 80, sa: 90, sd: 100, sp: 30 },
        weightkg: 11.5,
        abilities: { 0: 'Illuminate' }
    },
    Silvally: {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        gender: 'N',
        otherFormes: [
            'Silvally-Bug',
            'Silvally-Dark',
            'Silvally-Dragon',
            'Silvally-Electric',
            'Silvally-Fairy',
            'Silvally-Fighting',
            'Silvally-Fire',
            'Silvally-Flying',
            'Silvally-Ghost',
            'Silvally-Grass',
            'Silvally-Ground',
            'Silvally-Ice',
            'Silvally-Poison',
            'Silvally-Psychic',
            'Silvally-Rock',
            'Silvally-Steel',
            'Silvally-Water',
        ]
    },
    'Silvally-Bug': {
        types: ['Bug'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Dark': {
        types: ['Dark'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Dragon': {
        types: ['Dragon'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Electric': {
        types: ['Electric'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Fairy': {
        types: ['Fairy'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Fighting': {
        types: ['Fighting'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Fire': {
        types: ['Fire'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Flying': {
        types: ['Flying'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Ghost': {
        types: ['Ghost'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Grass': {
        types: ['Grass'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Ground': {
        types: ['Ground'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Ice': {
        types: ['Ice'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Poison': {
        types: ['Poison'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Psychic': {
        types: ['Psychic'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Rock': {
        types: ['Rock'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Steel': {
        types: ['Steel'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Water': {
        types: ['Water'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    Smogecko: {
        types: ['Fire'],
        bs: { hp: 48, at: 66, df: 43, sa: 58, sd: 48, sp: 56 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Smoguana: {
        types: ['Fire', 'Ground'],
        bs: { hp: 68, at: 86, df: 53, sa: 68, sd: 68, sp: 76 },
        weightkg: 22.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Smokomodo: {
        types: ['Fire', 'Ground'],
        bs: { hp: 88, at: 116, df: 67, sa: 88, sd: 78, sp: 97 },
        weightkg: 205,
        abilities: { 0: 'Blaze' }
    },
    Snaelstrom: {
        types: ['Water', 'Bug'],
        bs: { hp: 91, at: 94, df: 110, sa: 80, sd: 97, sp: 63 },
        weightkg: 120,
        abilities: { 0: 'Torrent' }
    },
    Solgaleo: {
        types: ['Psychic', 'Steel'],
        bs: { hp: 137, at: 137, df: 107, sa: 113, sd: 89, sp: 97 },
        weightkg: 230,
        abilities: { 0: 'Full Metal Body' },
        gender: 'N'
    },
    Stakataka: {
        types: ['Rock', 'Steel'],
        bs: { hp: 61, at: 131, df: 211, sa: 53, sd: 101, sp: 13 },
        weightkg: 820,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Steenee: {
        types: ['Grass'],
        bs: { hp: 52, at: 40, df: 48, sa: 40, sd: 48, sp: 62 },
        weightkg: 8.2,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Stufful: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 70, at: 75, df: 50, sa: 45, sd: 50, sp: 50 },
        weightkg: 6.8,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    Swirlpool: {
        types: ['Water'],
        bs: { hp: 61, at: 49, df: 70, sa: 50, sd: 62, sp: 28 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Tapu Bulu': {
        types: ['Grass', 'Fairy'],
        bs: { hp: 70, at: 130, df: 115, sa: 85, sd: 95, sp: 75 },
        weightkg: 45.5,
        abilities: { 0: 'Grassy Surge' },
        gender: 'N'
    },
    'Tapu Fini': {
        types: ['Water', 'Fairy'],
        bs: { hp: 70, at: 75, df: 115, sa: 95, sd: 130, sp: 85 },
        weightkg: 21.2,
        abilities: { 0: 'Misty Surge' },
        gender: 'N'
    },
    'Tapu Koko': {
        types: ['Electric', 'Fairy'],
        bs: { hp: 70, at: 115, df: 85, sa: 95, sd: 75, sp: 130 },
        weightkg: 20.5,
        abilities: { 0: 'Electric Surge' },
        gender: 'N'
    },
    'Tapu Lele': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 70, at: 85, df: 75, sa: 130, sd: 115, sp: 95 },
        weightkg: 18.6,
        abilities: { 0: 'Psychic Surge' },
        gender: 'N'
    },
    Togedemaru: {
        types: ['Electric', 'Steel'],
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        weightkg: 3.3,
        abilities: { 0: 'Iron Barbs' },
        otherFormes: ['Togedemaru-Totem']
    },
    'Togedemaru-Totem': {
        types: ['Electric', 'Steel'],
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        weightkg: 13,
        abilities: { 0: 'Sturdy' },
        baseSpecies: 'Togedemaru'
    },
    Torracat: {
        types: ['Fire'],
        bs: { hp: 65, at: 85, df: 50, sa: 80, sd: 50, sp: 90 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Toucannon: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 120, df: 75, sa: 75, sd: 75, sp: 60 },
        weightkg: 26,
        abilities: { 0: 'Keen Eye' }
    },
    Toxapex: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 63, df: 152, sa: 53, sd: 142, sp: 35 },
        weightkg: 14.5,
        abilities: { 0: 'Merciless' }
    },
    Trumbeak: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 85, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 14.8,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Tsareena: {
        types: ['Grass'],
        bs: { hp: 72, at: 120, df: 98, sa: 50, sd: 98, sp: 72 },
        weightkg: 21.4,
        abilities: { 0: 'Leaf Guard' }
    },
    Turtonator: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 60, at: 78, df: 135, sa: 91, sd: 85, sp: 36 },
        weightkg: 212,
        abilities: { 0: 'Shell Armor' }
    },
    'Type: Null': {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 59 },
        weightkg: 120.5,
        abilities: { 0: 'Battle Armor' },
        nfe: true,
        gender: 'N'
    },
    Vikavolt: {
        types: ['Bug', 'Electric'],
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Levitate' },
        otherFormes: ['Vikavolt-Totem']
    },
    'Vikavolt-Totem': {
        types: ['Bug', 'Electric'],
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        weightkg: 147.5,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Vikavolt'
    },
    'Vulpix-Alola': {
        types: ['Ice'],
        bs: { hp: 38, at: 41, df: 40, sa: 50, sd: 65, sp: 65 },
        weightkg: 9.9,
        baseSpecies: 'Vulpix',
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Wimpod: {
        types: ['Bug', 'Water'],
        bs: { hp: 25, at: 35, df: 40, sa: 20, sd: 30, sp: 80 },
        weightkg: 12,
        abilities: { 0: 'Wimp Out' },
        nfe: true
    },
    Wishiwashi: {
        types: ['Water'],
        bs: { hp: 45, at: 20, df: 20, sa: 25, sd: 25, sp: 40 },
        weightkg: 0.3,
        otherFormes: ['Wishiwashi-School'],
        abilities: { 0: 'Schooling' }
    },
    'Wishiwashi-School': {
        types: ['Water'],
        bs: { hp: 45, at: 140, df: 130, sa: 140, sd: 135, sp: 30 },
        weightkg: 78.6,
        baseSpecies: 'Wishiwashi',
        abilities: { 0: 'Schooling' }
    },
    Xurkitree: {
        types: ['Electric'],
        bs: { hp: 83, at: 89, df: 71, sa: 173, sd: 71, sp: 83 },
        weightkg: 100,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Yungoos: {
        types: ['Normal'],
        bs: { hp: 48, at: 70, df: 30, sa: 30, sd: 30, sp: 45 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Stakeout' }
    },
    Zeraora: {
        types: ['Electric'],
        bs: { hp: 88, at: 112, df: 75, sa: 102, sd: 80, sp: 143 },
        weightkg: 44.5,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    'Zygarde-10%': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Aura Break' },
        baseSpecies: 'Zygarde',
        gender: 'N'
    },
    'Zygarde-Complete': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 216, at: 100, df: 121, sa: 91, sd: 95, sp: 85 },
        weightkg: 610,
        abilities: { 0: 'Power Construct' },
        baseSpecies: 'Zygarde',
        gender: 'N'
    }
};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
delete SM['Pikachu-Cosplay'];
delete SM['Pikachu-Rock-Star'];
delete SM['Pikachu-Belle'];
delete SM['Pikachu-PhD'];
delete SM['Pikachu-Pop-Star'];
delete SM['Pikachu-Libre'];
var SS_PATCH = {
    'Aegislash-Blade': { bs: { at: 140, sa: 140 } },
    'Aegislash-Both': { bs: { at: 140, df: 140, sa: 140, sd: 140 } },
    'Aegislash-Shield': { bs: { df: 140, sd: 140 } },
    Articuno: { otherFormes: ['Articuno-Galar'] },
    Blastoise: { otherFormes: ['Blastoise-Gmax', 'Blastoise-Mega'] },
    Butterfree: { otherFormes: ['Butterfree-Gmax'] },
    Charizard: { otherFormes: ['Charizard-Gmax', 'Charizard-Mega-X', 'Charizard-Mega-Y'] },
    Corsola: { otherFormes: ['Corsola-Galar'] },
    Darmanitan: {
        otherFormes: ['Darmanitan-Galar', 'Darmanitan-Galar-Zen', 'Darmanitan-Zen']
    },
    Darumaka: { otherFormes: ['Darumaka-Galar'] },
    Eevee: { otherFormes: ['Eevee-Gmax'] },
    Equilibra: { bs: { sa: 133 } },
    'Farfetch\u2019d': { otherFormes: ['Farfetch\u2019d-Galar'] },
    Garbodor: { otherFormes: ['Garbodor-Gmax'] },
    Gengar: { otherFormes: ['Gengar-Gmax', 'Gengar-Mega'] },
    Kingler: { otherFormes: ['Kingler-Gmax'] },
    Lapras: { otherFormes: ['Lapras-Gmax'] },
    Linoone: { otherFormes: ['Linoone-Galar'] },
    Machamp: { otherFormes: ['Machamp-Gmax'] },
    Melmetal: { otherFormes: ['Melmetal-Gmax'] },
    Meowth: { otherFormes: ['Meowth-Alola', 'Meowth-Galar', 'Meowth-Gmax'] },
    Moltres: { otherFormes: ['Moltres-Galar'] },
    'Mr. Mime': { otherFormes: ['Mr. Mime-Galar'] },
    Pikachu: {
        otherFormes: [
            'Pikachu-Alola',
            'Pikachu-Gmax',
            'Pikachu-Hoenn',
            'Pikachu-Kalos',
            'Pikachu-Original',
            'Pikachu-Partner',
            'Pikachu-Sinnoh',
            'Pikachu-Unova',
            'Pikachu-World',
        ]
    },
    Ponyta: { otherFormes: ['Ponyta-Galar'] },
    Pyroak: { bs: { sa: 70, sd: 65 } },
    Rapidash: { otherFormes: ['Rapidash-Galar'] },
    Slowbro: { otherFormes: ['Slowbro-Galar', 'Slowbro-Mega'] },
    Slowking: { otherFormes: ['Slowking-Galar'] },
    Slowpoke: { otherFormes: ['Slowpoke-Galar'] },
    Snorlax: { otherFormes: ['Snorlax-Gmax'] },
    Stunfisk: { otherFormes: ['Stunfisk-Galar'] },
    Venusaur: { otherFormes: ['Venusaur-Gmax', 'Venusaur-Mega'] },
    Voodoom: { bs: { sa: 130 } },
    Weezing: { otherFormes: ['Weezing-Galar'] },
    Yamask: { otherFormes: ['Yamask-Galar'] },
    Zapdos: { otherFormes: ['Zapdos-Galar'] },
    Zigzagoon: { otherFormes: ['Zigzagoon-Galar'] },
    Alcremie: {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0.5,
        abilities: { 0: 'Sweet Veil' },
        otherFormes: ['Alcremie-Gmax']
    },
    'Alcremie-Gmax': {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Alcremie'
    },
    Appletun: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 13,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Appletun-Gmax']
    },
    'Appletun-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Appletun'
    },
    Applin: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 40, at: 40, df: 80, sa: 40, sd: 40, sp: 20 },
        weightkg: 0.5,
        abilities: { 0: 'Ripen' },
        nfe: true
    },
    Arctovish: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 90, df: 100, sa: 80, sd: 90, sp: 55 },
        weightkg: 175,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Arctozolt: {
        types: ['Electric', 'Ice'],
        bs: { hp: 90, at: 100, df: 90, sa: 90, sd: 80, sp: 55 },
        weightkg: 150,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Arrokuda: {
        types: ['Water'],
        bs: { hp: 41, at: 63, df: 40, sa: 40, sd: 30, sp: 66 },
        weightkg: 1,
        abilities: { 0: 'Swift Swim' },
        nfe: true
    },
    'Articuno-Galar': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 90, at: 85, df: 85, sa: 125, sd: 100, sp: 95 },
        weightkg: 50.9,
        abilities: { 0: 'Competitive' },
        gender: 'N',
        baseSpecies: 'Articuno'
    },
    Astrolotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 108, at: 108, df: 74, sa: 92, sd: 64, sp: 114 },
        weightkg: 50,
        abilities: { 0: 'Regenerator' }
    },
    Barraskewda: {
        types: ['Water'],
        bs: { hp: 61, at: 123, df: 60, sa: 60, sd: 50, sp: 136 },
        weightkg: 30,
        abilities: { 0: 'Swift Swim' }
    },
    'Blastoise-Gmax': {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sa: 85, sd: 105, sp: 78 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Blastoise'
    },
    Blipbug: {
        types: ['Bug'],
        bs: { hp: 25, at: 20, df: 20, sa: 25, sd: 45, sp: 45 },
        weightkg: 8,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Boltund: {
        types: ['Electric'],
        bs: { hp: 69, at: 90, df: 60, sa: 90, sd: 60, sp: 121 },
        weightkg: 34,
        abilities: { 0: 'Strong Jaw' }
    },
    'Butterfree-Gmax': {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sa: 90, sd: 80, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Compound Eyes' },
        baseSpecies: 'Butterfree'
    },
    Calyrex: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 7.7,
        abilities: { 0: 'Unnerve' },
        gender: 'N',
        otherFormes: ['Calyrex-Ice', 'Calyrex-Shadow']
    },
    'Calyrex-Ice': {
        types: ['Psychic', 'Ice'],
        bs: { hp: 100, at: 165, df: 150, sa: 85, sd: 130, sp: 50 },
        weightkg: 809.1,
        abilities: { 0: 'As One (Glastrier)' },
        gender: 'N',
        baseSpecies: 'Calyrex'
    },
    'Calyrex-Shadow': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 100, at: 85, df: 80, sa: 165, sd: 100, sp: 150 },
        weightkg: 53.6,
        abilities: { 0: 'As One (Spectrier)' },
        gender: 'N',
        baseSpecies: 'Calyrex'
    },
    Carkol: {
        types: ['Rock', 'Fire'],
        bs: { hp: 80, at: 60, df: 90, sa: 60, sd: 70, sp: 50 },
        weightkg: 78,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Centiskorch: {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Flash Fire' },
        otherFormes: ['Centiskorch-Gmax']
    },
    'Centiskorch-Gmax': {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 0,
        abilities: { 0: 'Flash Fire' },
        baseSpecies: 'Centiskorch'
    },
    'Charizard-Gmax': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Charizard'
    },
    Chewtle: {
        types: ['Water'],
        bs: { hp: 50, at: 64, df: 50, sa: 38, sd: 38, sp: 44 },
        weightkg: 8.5,
        abilities: { 0: 'Strong Jaw' },
        nfe: true
    },
    Chromera: {
        types: ['Dark', 'Normal'],
        bs: { hp: 85, at: 85, df: 115, sa: 115, sd: 100, sp: 100 },
        weightkg: 215,
        abilities: { 0: 'Color Change' },
        gender: 'N'
    },
    Cinderace: {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 33,
        abilities: { 0: 'Blaze' },
        otherFormes: ['Cinderace-Gmax']
    },
    'Cinderace-Gmax': {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Cinderace'
    },
    Clobbopus: {
        types: ['Fighting'],
        bs: { hp: 50, at: 68, df: 60, sa: 50, sd: 50, sp: 32 },
        weightkg: 4,
        abilities: { 0: 'Limber' },
        nfe: true
    },
    Coalossal: {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 310.5,
        abilities: { 0: 'Steam Engine' },
        otherFormes: ['Coalossal-Gmax']
    },
    'Coalossal-Gmax': {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Steam Engine' },
        baseSpecies: 'Coalossal'
    },
    Copperajah: {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 650,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Copperajah-Gmax']
    },
    'Copperajah-Gmax': {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Copperajah'
    },
    'Corsola-Galar': {
        types: ['Ghost'],
        bs: { hp: 60, at: 55, df: 100, sa: 65, sd: 100, sp: 30 },
        weightkg: 0.5,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Corsola'
    },
    Corviknight: {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 75,
        abilities: { 0: 'Pressure' },
        otherFormes: ['Corviknight-Gmax']
    },
    'Corviknight-Gmax': {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Corviknight'
    },
    Corvisquire: {
        types: ['Flying'],
        bs: { hp: 68, at: 67, df: 55, sa: 43, sd: 55, sp: 77 },
        weightkg: 16,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Cramorant: {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        otherFormes: ['Cramorant-Gorging', 'Cramorant-Gulping']
    },
    'Cramorant-Gorging': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Cramorant'
    },
    'Cramorant-Gulping': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Cramorant'
    },
    Cufant: {
        types: ['Steel'],
        bs: { hp: 72, at: 80, df: 49, sa: 40, sd: 49, sp: 40 },
        weightkg: 100,
        abilities: { 0: 'Sheer Force' },
        nfe: true
    },
    Cursola: {
        types: ['Ghost'],
        bs: { hp: 60, at: 95, df: 50, sa: 145, sd: 130, sp: 30 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' }
    },
    'Darmanitan-Galar': {
        types: ['Ice'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 120,
        abilities: { 0: 'Gorilla Tactics' },
        baseSpecies: 'Darmanitan'
    },
    'Darmanitan-Galar-Zen': {
        types: ['Ice', 'Fire'],
        bs: { hp: 105, at: 160, df: 55, sa: 30, sd: 55, sp: 135 },
        weightkg: 120,
        abilities: { 0: 'Zen Mode' },
        baseSpecies: 'Darmanitan'
    },
    'Darumaka-Galar': {
        types: ['Ice'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 40,
        abilities: { 0: 'Hustle' },
        nfe: true,
        baseSpecies: 'Darumaka'
    },
    Dottler: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 35, df: 80, sa: 50, sd: 90, sp: 30 },
        weightkg: 19.5,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Dracovish: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 90, df: 100, sa: 70, sd: 80, sp: 75 },
        weightkg: 215,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Dracozolt: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 100, df: 90, sa: 80, sd: 70, sp: 75 },
        weightkg: 190,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Dragapult: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 88, at: 120, df: 75, sa: 100, sd: 75, sp: 142 },
        weightkg: 50,
        abilities: { 0: 'Clear Body' }
    },
    Drakloak: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 68, at: 80, df: 50, sa: 60, sd: 50, sp: 102 },
        weightkg: 11,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Drednaw: {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 115.5,
        abilities: { 0: 'Strong Jaw' },
        otherFormes: ['Drednaw-Gmax']
    },
    'Drednaw-Gmax': {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 0,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Drednaw'
    },
    Dreepy: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 28, at: 60, df: 30, sa: 40, sd: 30, sp: 82 },
        weightkg: 2,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Drizzile: {
        types: ['Water'],
        bs: { hp: 65, at: 60, df: 55, sa: 95, sd: 55, sp: 90 },
        weightkg: 11.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Dubwool: {
        types: ['Normal'],
        bs: { hp: 72, at: 80, df: 100, sa: 60, sd: 90, sp: 88 },
        weightkg: 43,
        abilities: { 0: 'Fluffy' }
    },
    Duraludon: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 40,
        abilities: { 0: 'Light Metal' },
        otherFormes: ['Duraludon-Gmax']
    },
    'Duraludon-Gmax': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Light Metal' },
        baseSpecies: 'Duraludon'
    },
    'Eevee-Gmax': {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sa: 45, sd: 65, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Eevee'
    },
    Eiscue: {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 110, sa: 65, sd: 90, sp: 50 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        otherFormes: ['Eiscue-Noice']
    },
    'Eiscue-Noice': {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 70, sa: 65, sd: 50, sp: 130 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        baseSpecies: 'Eiscue'
    },
    Eldegoss: {
        types: ['Grass'],
        bs: { hp: 60, at: 50, df: 90, sa: 80, sd: 120, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Cotton Down' }
    },
    Eternatus: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 140, at: 85, df: 95, sa: 145, sd: 95, sp: 130 },
        weightkg: 950,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Eternatus-Eternamax']
    },
    'Eternatus-Eternamax': {
        types: ['Poison', 'Dragon'],
        bs: { hp: 255, at: 115, df: 250, sa: 125, sd: 250, sp: 130 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Eternatus'
    },
    Falinks: {
        types: ['Fighting'],
        bs: { hp: 65, at: 100, df: 100, sa: 70, sd: 60, sp: 75 },
        weightkg: 62,
        abilities: { 0: 'Battle Armor' },
        gender: 'N'
    },
    'Farfetch\u2019d-Galar': {
        types: ['Fighting'],
        bs: { hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55 },
        weightkg: 15,
        abilities: { 0: 'Steadfast' },
        nfe: true,
        baseSpecies: 'Farfetch\u2019d'
    },
    Flapple: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 1,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Flapple-Gmax']
    },
    'Flapple-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Flapple'
    },
    Frosmoth: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 65, df: 60, sa: 125, sd: 90, sp: 65 },
        weightkg: 42,
        abilities: { 0: 'Shield Dust' }
    },
    'Garbodor-Gmax': {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Stench' },
        baseSpecies: 'Garbodor'
    },
    'Gengar-Gmax': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sa: 130, sd: 75, sp: 110 },
        weightkg: 0,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Gengar'
    },
    Glastrier: {
        types: ['Ice'],
        bs: { hp: 100, at: 145, df: 130, sa: 65, sd: 110, sp: 30 },
        weightkg: 800,
        abilities: { 0: 'Chilling Neigh' },
        gender: 'N'
    },
    Gossifleur: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 60, sa: 40, sd: 60, sp: 10 },
        weightkg: 2.2,
        abilities: { 0: 'Cotton Down' },
        nfe: true
    },
    Grapploct: {
        types: ['Fighting'],
        bs: { hp: 80, at: 118, df: 90, sa: 70, sd: 80, sp: 42 },
        weightkg: 39,
        abilities: { 0: 'Limber' }
    },
    Greedent: {
        types: ['Normal'],
        bs: { hp: 120, at: 95, df: 95, sa: 55, sd: 75, sp: 20 },
        weightkg: 6,
        abilities: { 0: 'Cheek Pouch' }
    },
    Grimmsnarl: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Grimmsnarl-Gmax']
    },
    'Grimmsnarl-Gmax': {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Grimmsnarl'
    },
    Grookey: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65 },
        weightkg: 5,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Hatenna: {
        types: ['Psychic'],
        bs: { hp: 42, at: 30, df: 45, sa: 56, sd: 53, sp: 39 },
        weightkg: 3.4,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Hatterene: {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 5.1,
        abilities: { 0: 'Healer' },
        otherFormes: ['Hatterene-Gmax']
    },
    'Hatterene-Gmax': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 0,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Hatterene'
    },
    Hattrem: {
        types: ['Psychic'],
        bs: { hp: 57, at: 40, df: 65, sa: 86, sd: 73, sp: 49 },
        weightkg: 4.8,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Impidimp: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 45, at: 45, df: 30, sa: 55, sd: 40, sp: 50 },
        weightkg: 5.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Indeedee: {
        types: ['Psychic', 'Normal'],
        bs: { hp: 60, at: 65, df: 55, sa: 105, sd: 95, sp: 95 },
        weightkg: 28,
        abilities: { 0: 'Inner Focus' },
        otherFormes: ['Indeedee-F']
    },
    'Indeedee-F': {
        types: ['Psychic', 'Normal'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 105, sp: 85 },
        weightkg: 28,
        abilities: { 0: 'Own Tempo' },
        baseSpecies: 'Indeedee'
    },
    Inteleon: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 45.2,
        abilities: { 0: 'Torrent' },
        otherFormes: ['Inteleon-Gmax']
    },
    'Inteleon-Gmax': {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Inteleon'
    },
    'Kingler-Gmax': {
        types: ['Water'],
        bs: { hp: 55, at: 130, df: 115, sa: 50, sd: 50, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Hyper Cutter' },
        baseSpecies: 'Kingler'
    },
    'Kubfu': {
        types: ['Fighting'],
        bs: { hp: 60, at: 90, df: 60, sa: 53, sd: 50, sp: 72 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    'Lapras-Gmax': {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sa: 85, sd: 95, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Water Absorb' },
        baseSpecies: 'Lapras'
    },
    'Linoone-Galar': {
        types: ['Dark', 'Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Linoone'
    },
    Magearna: { otherFormes: ['Magearna-Original'] },
    'Magearna-Original': {
        baseSpecies: 'Magearna',
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    'Machamp-Gmax': {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Guts' },
        baseSpecies: 'Machamp'
    },
    'Melmetal-Gmax': {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 0,
        abilities: { 0: 'Iron Fist' },
        baseSpecies: 'Melmetal',
        gender: 'N'
    },
    'Meowth-Galar': {
        types: ['Steel'],
        bs: { hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40 },
        weightkg: 7.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Meowth'
    },
    'Meowth-Gmax': {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sa: 40, sd: 40, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Meowth'
    },
    Miasmaw: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 85, at: 135, df: 60, sa: 88, sd: 105, sp: 99 },
        weightkg: 57,
        abilities: { 0: 'Neutralizing Gas' }
    },
    Miasmite: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 40, at: 85, df: 60, sa: 52, sd: 52, sp: 44 },
        weightkg: 10.1,
        abilities: { 0: 'Neutralizing Gas' },
        nfe: true
    },
    Milcery: {
        types: ['Fairy'],
        bs: { hp: 45, at: 40, df: 40, sa: 50, sd: 61, sp: 34 },
        weightkg: 0.3,
        abilities: { 0: 'Sweet Veil' },
        nfe: true
    },
    'Moltres-Galar': {
        types: ['Dark', 'Flying'],
        bs: { hp: 90, at: 85, df: 90, sa: 100, sd: 125, sp: 90 },
        weightkg: 66,
        abilities: { 0: 'Berserk' },
        gender: 'N',
        baseSpecies: 'Moltres'
    },
    Morgrem: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 65, at: 60, df: 45, sa: 75, sd: 55, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Morpeko: {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        otherFormes: ['Morpeko-Hangry']
    },
    'Morpeko-Hangry': {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        baseSpecies: 'Morpeko'
    },
    'Mr. Mime-Galar': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 50, at: 65, df: 65, sa: 90, sd: 90, sp: 100 },
        weightkg: 56.8,
        abilities: { 0: 'Vital Spirit' },
        nfe: true,
        baseSpecies: 'Mr. Mime'
    },
    'Mr. Rime': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 80, at: 85, df: 75, sa: 110, sd: 100, sp: 70 },
        weightkg: 58.2,
        abilities: { 0: 'Tangled Feet' }
    },
    Nickit: {
        types: ['Dark'],
        bs: { hp: 40, at: 28, df: 28, sa: 47, sd: 52, sp: 50 },
        weightkg: 8.9,
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Obstagoon: {
        types: ['Dark', 'Normal'],
        bs: { hp: 93, at: 90, df: 101, sa: 60, sd: 81, sp: 95 },
        weightkg: 46,
        abilities: { 0: 'Reckless' }
    },
    Orbeetle: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 40.8,
        abilities: { 0: 'Swarm' },
        otherFormes: ['Orbeetle-Gmax']
    },
    'Orbeetle-Gmax': {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Swarm' },
        baseSpecies: 'Orbeetle'
    },
    Perrserker: {
        types: ['Steel'],
        bs: { hp: 70, at: 110, df: 100, sa: 50, sd: 60, sp: 50 },
        weightkg: 28,
        abilities: { 0: 'Battle Armor' }
    },
    'Pikachu-Gmax': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-World': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Pincurchin: {
        types: ['Electric'],
        bs: { hp: 48, at: 101, df: 95, sa: 91, sd: 85, sp: 15 },
        weightkg: 1,
        abilities: { 0: 'Lightning Rod' }
    },
    Polteageist: {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        otherFormes: ['Polteageist-Antique'],
        gender: 'N'
    },
    'Polteageist-Antique': {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        baseSpecies: 'Polteageist',
        gender: 'N'
    },
    'Ponyta-Galar': {
        types: ['Psychic'],
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 },
        weightkg: 24,
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Ponyta'
    },
    Raboot: {
        types: ['Fire'],
        bs: { hp: 65, at: 86, df: 60, sa: 55, sd: 60, sp: 94 },
        weightkg: 9,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    'Rapidash-Galar': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 65, at: 100, df: 70, sa: 80, sd: 80, sp: 105 },
        weightkg: 80,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Rapidash'
    },
    Regidrago: {
        types: ['Dragon'],
        bs: { hp: 200, at: 100, df: 50, sa: 100, sd: 50, sp: 80 },
        weightkg: 200,
        abilities: { 0: 'Dragon\'s Maw' },
        gender: 'N'
    },
    Regieleki: {
        types: ['Electric'],
        bs: { hp: 80, at: 100, df: 50, sa: 100, sd: 50, sp: 200 },
        weightkg: 145,
        abilities: { 0: 'Transistor' },
        gender: 'N'
    },
    Rillaboom: {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' },
        otherFormes: ['Rillaboom-Gmax']
    },
    'Rillaboom-Gmax': {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Rillaboom'
    },
    Rolycoly: {
        types: ['Rock'],
        bs: { hp: 30, at: 40, df: 50, sa: 40, sd: 50, sp: 30 },
        weightkg: 12,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Rookidee: {
        types: ['Flying'],
        bs: { hp: 38, at: 47, df: 35, sa: 33, sd: 35, sp: 57 },
        weightkg: 1.8,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Runerigus: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 58, at: 95, df: 145, sa: 50, sd: 105, sp: 30 },
        weightkg: 66.6,
        abilities: { 0: 'Wandering Spirit' }
    },
    Saharaja: {
        types: ['Ground'],
        bs: { hp: 70, at: 112, df: 105, sa: 65, sd: 123, sp: 78 },
        weightkg: 303.9,
        abilities: { 0: 'Water Absorb' }
    },
    Saharascal: {
        types: ['Ground'],
        bs: { hp: 50, at: 80, df: 65, sa: 45, sd: 90, sp: 70 },
        weightkg: 48,
        abilities: { 0: 'Water Absorb' },
        nfe: true
    },
    Sandaconda: {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 65.5,
        abilities: { 0: 'Sand Spit' },
        otherFormes: ['Sandaconda-Gmax']
    },
    'Sandaconda-Gmax': {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 0,
        abilities: { 0: 'Sand Spit' },
        baseSpecies: 'Sandaconda'
    },
    Scorbunny: {
        types: ['Fire'],
        bs: { hp: 50, at: 71, df: 40, sa: 40, sd: 40, sp: 69 },
        weightkg: 4.5,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Silicobra: {
        types: ['Ground'],
        bs: { hp: 52, at: 57, df: 75, sa: 35, sd: 50, sp: 46 },
        weightkg: 7.6,
        abilities: { 0: 'Sand Spit' },
        nfe: true
    },
    Sinistea: {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        otherFormes: ['Sinistea-Antique'],
        gender: 'N'
    },
    'Sinistea-Antique': {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Sinistea',
        gender: 'N'
    },
    'Sirfetch\u2019d': {
        types: ['Fighting'],
        bs: { hp: 62, at: 135, df: 95, sa: 68, sd: 82, sp: 65 },
        weightkg: 117,
        abilities: { 0: 'Steadfast' }
    },
    Sizzlipede: {
        types: ['Fire', 'Bug'],
        bs: { hp: 50, at: 65, df: 45, sa: 50, sd: 50, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    Skwovet: {
        types: ['Normal'],
        bs: { hp: 70, at: 55, df: 55, sa: 35, sd: 35, sp: 25 },
        weightkg: 2.5,
        abilities: { 0: 'Cheek Pouch' },
        nfe: true
    },
    'Slowbro-Galar': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 100, df: 95, sa: 100, sd: 70, sp: 30 },
        weightkg: 70.5,
        abilities: { 0: 'Quick Draw' },
        baseSpecies: 'Slowbro'
    },
    'Slowking-Galar': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 65, df: 80, sa: 110, sd: 110, sp: 30 },
        weightkg: 79.5,
        abilities: { 0: 'Curious Medicine' },
        baseSpecies: 'Slowking'
    },
    'Slowpoke-Galar': {
        types: ['Psychic'],
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 40, sp: 15 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Gluttony' },
        baseSpecies: 'Slowpoke'
    },
    Solotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 68, at: 48, df: 34, sa: 72, sd: 24, sp: 84 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Regenerator' }
    },
    Snom: {
        types: ['Ice', 'Bug'],
        bs: { hp: 30, at: 25, df: 35, sa: 45, sd: 30, sp: 20 },
        weightkg: 3.8,
        abilities: { 0: 'Shield Dust' },
        nfe: true
    },
    'Snorlax-Gmax': {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sa: 65, sd: 110, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Immunity' },
        baseSpecies: 'Snorlax'
    },
    Sobble: {
        types: ['Water'],
        bs: { hp: 50, at: 40, df: 40, sa: 70, sd: 40, sp: 70 },
        weightkg: 4,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Spectrier: {
        types: ['Ghost'],
        bs: { hp: 100, at: 65, df: 60, sa: 145, sd: 80, sp: 130 },
        weightkg: 44.5,
        abilities: { 0: 'Grim Neigh' },
        gender: 'N'
    },
    Stonjourner: {
        types: ['Rock'],
        bs: { hp: 100, at: 125, df: 135, sa: 20, sd: 20, sp: 70 },
        weightkg: 520,
        abilities: { 0: 'Power Spot' }
    },
    'Stunfisk-Galar': {
        types: ['Ground', 'Steel'],
        bs: { hp: 109, at: 81, df: 99, sa: 66, sd: 84, sp: 32 },
        weightkg: 20.5,
        abilities: { 0: 'Mimicry' },
        baseSpecies: 'Stunfisk'
    },
    Thievul: {
        types: ['Dark'],
        bs: { hp: 70, at: 58, df: 58, sa: 87, sd: 92, sp: 90 },
        weightkg: 19.9,
        abilities: { 0: 'Run Away' }
    },
    Thwackey: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 70, sa: 55, sd: 60, sp: 80 },
        weightkg: 14,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Toxel: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 38, df: 35, sa: 54, sd: 35, sp: 40 },
        weightkg: 11,
        abilities: { 0: 'Rattled' },
        nfe: true
    },
    Toxtricity: {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        otherFormes: ['Toxtricity-Gmax', 'Toxtricity-Low-Key', 'Toxtricity-Low-Key-Gmax']
    },
    'Toxtricity-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    'Toxtricity-Low-Key': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    'Toxtricity-Low-Key-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    Urshifu: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        otherFormes: ['Urshifu-Gmax', 'Urshifu-Rapid-Strike', 'Urshifu-Rapid-Strike-Gmax']
    },
    'Urshifu-Rapid-Strike': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    'Urshifu-Rapid-Strike-Gmax': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    'Urshifu-Gmax': {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 0,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    Venomicon: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 50, df: 113, sa: 118, sd: 90, sp: 64 },
        weightkg: 11.5,
        abilities: { 0: 'Stamina' },
        otherFormes: ['Venomicon-Epilogue'],
        gender: 'N'
    },
    'Venomicon-Epilogue': {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 102, df: 85, sa: 62, sd: 85, sp: 101 },
        weightkg: 12.4,
        abilities: { 0: 'Tinted Lens' },
        baseSpecies: 'Venomicon',
        gender: 'N'
    },
    'Venusaur-Gmax': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sa: 100, sd: 100, sp: 80 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Venusaur'
    },
    'Weezing-Galar': {
        types: ['Poison', 'Fairy'],
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        weightkg: 16,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Weezing'
    },
    Wooloo: {
        types: ['Normal'],
        bs: { hp: 42, at: 40, df: 55, sa: 40, sd: 45, sp: 48 },
        weightkg: 6,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    'Yamask-Galar': {
        types: ['Ground', 'Ghost'],
        bs: { hp: 38, at: 55, df: 85, sa: 30, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Wandering Spirit' },
        nfe: true,
        baseSpecies: 'Yamask'
    },
    Yamper: {
        types: ['Electric'],
        bs: { hp: 59, at: 45, df: 50, sa: 40, sd: 50, sp: 26 },
        weightkg: 13.5,
        abilities: { 0: 'Ball Fetch' },
        nfe: true
    },
    Zacian: {
        types: ['Fairy'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 110,
        abilities: { 0: 'Intrepid Sword' },
        gender: 'N',
        otherFormes: ['Zacian-Crowned']
    },
    'Zacian-Crowned': {
        types: ['Fairy', 'Steel'],
        bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 },
        weightkg: 355,
        abilities: { 0: 'Intrepid Sword' },
        baseSpecies: 'Zacian',
        gender: 'N'
    },
    Zamazenta: {
        types: ['Fighting'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 210,
        abilities: { 0: 'Dauntless Shield' },
        gender: 'N',
        otherFormes: ['Zamazenta-Crowned']
    },
    'Zamazenta-Crowned': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 92, at: 130, df: 145, sa: 80, sd: 145, sp: 128 },
        weightkg: 785,
        abilities: { 0: 'Dauntless Shield' },
        baseSpecies: 'Zamazenta',
        gender: 'N'
    },
    'Zapdos-Galar': {
        types: ['Fighting', 'Flying'],
        bs: { hp: 90, at: 125, df: 90, sa: 85, sd: 90, sp: 100 },
        weightkg: 58.2,
        abilities: { 0: 'Defiant' },
        gender: 'N',
        baseSpecies: 'Zapdos'
    },
    Zarude: {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        gender: 'N',
        otherFormes: ['Zarude-Dada']
    },
    'Zarude-Dada': {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Zarude',
        gender: 'N'
    },
    'Zigzagoon-Galar': {
        types: ['Dark', 'Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Zigzagoon'
    }
};
var PLA_PATCH = {
    Arcanine: { otherFormes: ['Arcanine-Hisui'] },
    Avalugg: { otherFormes: ['Avalugg-Hisui'] },
    Basculin: { otherFormes: ['Basculin-Blue-Striped', 'Basculin-White-Striped'] },
    Braviary: { otherFormes: ['Braviary-Hisui'] },
    Decidueye: { otherFormes: ['Decidueye-Hisui'] },
    Dialga: { otherFormes: ['Dialga-Origin'] },
    Electrode: { otherFormes: ['Electrode-Hisui'] },
    Goodra: { otherFormes: ['Goodra-Hisui'] },
    Growlithe: { otherFormes: ['Growlithe-Hisui'] },
    Lilligant: { otherFormes: ['Lilligant-Hisui'] },
    Palkia: { otherFormes: ['Palkia-Origin'] },
    Qwilfish: { otherFormes: ['Qwilfish-Hisui'] },
    Samurott: { otherFormes: ['Samurott-Hisui'] },
    Sliggoo: { otherFormes: ['Sliggoo-Hisui'] },
    Sneasel: { otherFormes: ['Sneasel-Hisui'] },
    Stantler: { nfe: true },
    Typhlosion: { otherFormes: ['Typhlosion-Hisui'] },
    Ursaring: { nfe: true },
    Voltorb: { otherFormes: ['Voltorb-Hisui'] },
    Zoroark: { otherFormes: ['Zoroark-Hisui'] },
    Zorua: { otherFormes: ['Zorua-Hisui'] },
    'Arcanine-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 95, at: 115, df: 80, sa: 95, sd: 80, sp: 90 },
        weightkg: 168,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Arcanine'
    },
    'Avalugg-Hisui': {
        types: ['Ice', 'Rock'],
        bs: { hp: 95, at: 127, df: 184, sa: 34, sd: 36, sp: 38 },
        weightkg: 262.4,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Avalugg'
    },
    Basculegion: {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 112, df: 65, sa: 80, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        otherFormes: ['Basculegion-F']
    },
    'Basculegion-F': {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 92, df: 65, sa: 100, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Basculegion'
    },
    'Basculin-White-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rattled' },
        baseSpecies: 'Basculin',
        nfe: true
    },
    'Braviary-Hisui': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 110, at: 83, df: 70, sa: 112, sd: 70, sp: 65 },
        weightkg: 43.4,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Braviary'
    },
    'Decidueye-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 112, df: 80, sa: 95, sd: 95, sp: 60 },
        weightkg: 37,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Decidueye'
    },
    'Dialga-Origin': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 100, df: 120, sa: 150, sd: 120, sp: 90 },
        weightkg: 850,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Dialga'
    },
    'Electrode-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 60, at: 50, df: 70, sa: 80, sd: 80, sp: 150 },
        weightkg: 71,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Electrode'
    },
    Enamorus: {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 70, sa: 135, sd: 80, sp: 106 },
        weightkg: 48,
        abilities: { 0: 'Cute Charm' },
        otherFormes: ['Enamorus-Therian']
    },
    'Enamorus-Therian': {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 110, sa: 135, sd: 100, sp: 46 },
        weightkg: 48,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Enamorus'
    },
    'Goodra-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 80, at: 100, df: 100, sa: 110, sd: 150, sp: 60 },
        weightkg: 334.1,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Goodra'
    },
    'Growlithe-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 60, at: 75, df: 45, sa: 65, sd: 50, sp: 55 },
        weightkg: 22.7,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Growlithe',
        nfe: true
    },
    Kleavor: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 135, df: 95, sa: 45, sd: 75, sp: 85 },
        weightkg: 89,
        abilities: { 0: 'Swarm' }
    },
    'Lilligant-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 70, at: 105, df: 75, sa: 50, sd: 75, sp: 105 },
        weightkg: 19.2,
        abilities: { 0: 'Chlorophyll' },
        baseSpecies: 'Lilligant'
    },
    Overqwil: {
        types: ['Dark', 'Poison'],
        bs: { hp: 85, at: 115, df: 95, sa: 65, sd: 65, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' }
    },
    'Palkia-Origin': {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 100, df: 100, sa: 150, sd: 120, sp: 120 },
        weightkg: 660,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Palkia'
    },
    'Qwilfish-Hisui': {
        types: ['Dark', 'Poison'],
        bs: { hp: 65, at: 95, df: 85, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Qwilfish',
        nfe: true
    },
    'Samurott-Hisui': {
        types: ['Water', 'Dark'],
        bs: { hp: 90, at: 108, df: 80, sa: 100, sd: 65, sp: 85 },
        weightkg: 58.2,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Samurott'
    },
    'Sliggoo-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 58, at: 75, df: 83, sa: 83, sd: 113, sp: 40 },
        weightkg: 68.5,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Sliggoo',
        nfe: true
    },
    'Sneasel-Hisui': {
        types: ['Fighting', 'Poison'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 27,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Sneasel',
        nfe: true
    },
    Sneasler: {
        types: ['Fighting', 'Poison'],
        bs: { hp: 80, at: 130, df: 60, sa: 40, sd: 80, sp: 120 },
        weightkg: 43,
        abilities: { 0: 'Pressure' }
    },
    'Typhlosion-Hisui': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 73, at: 84, df: 78, sa: 119, sd: 85, sp: 95 },
        weightkg: 69.8,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Typhlosion'
    },
    Ursaluna: {
        types: ['Ground', 'Normal'],
        bs: { hp: 130, at: 140, df: 105, sa: 45, sd: 80, sp: 50 },
        weightkg: 290,
        abilities: { 0: 'Guts' }
    },
    'Voltorb-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 40, at: 30, df: 50, sa: 55, sd: 55, sp: 100 },
        weightkg: 13,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Voltorb',
        nfe: true
    },
    Wyrdeer: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 103, at: 105, df: 72, sa: 105, sd: 75, sp: 65 },
        weightkg: 95.1,
        abilities: { 0: 'Intimidate' }
    },
    'Zoroark-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 55, at: 100, df: 60, sa: 125, sd: 60, sp: 110 },
        weightkg: 73,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zoroark'
    },
    'Zorua-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 35, at: 60, df: 40, sa: 85, sd: 40, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zorua',
        nfe: true
    }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH, PLA_PATCH);
delete SS['Pikachu-Starter'];
delete SS['Eevee-Starter'];
var SV_PATCH = {
    Bisharp: { nfe: true },
    Cresselia: { bs: { df: 110, sd: 120 } },
    Dunsparce: { nfe: true },
    Duraludon: { nfe: true },
    Girafarig: { nfe: true },
    Primeape: { nfe: true },
    Tauros: { otherFormes: ['Tauros-Paldea-Combat', 'Tauros-Paldea-Blaze', 'Tauros-Paldea-Aqua'] },
    Wooper: { otherFormes: ['Wooper-Paldea'] },
    Zacian: { bs: { at: 120 } },
    'Zacian-Crowned': { bs: { at: 150 } },
    Zamazenta: { bs: { at: 120 } },
    'Zamazenta-Crowned': { bs: { at: 120, df: 140, sd: 140 } },
    Annihilape: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 110, at: 115, df: 80, sa: 50, sd: 90, sp: 90 },
        weightkg: 56,
        abilities: { 0: 'Vital Spirit' }
    },
    Arboliva: {
        types: ['Grass', 'Normal'],
        bs: { hp: 78, at: 69, df: 90, sa: 125, sd: 109, sp: 39 },
        weightkg: 48.2,
        abilities: { 0: 'Seed Sower' }
    },
    Archaludon: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 90, at: 105, df: 130, sa: 125, sd: 65, sp: 85 },
        weightkg: 60,
        abilities: { 0: 'Stamina' }
    },
    Arctibax: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 90, at: 95, df: 66, sa: 45, sd: 65, sp: 62 },
        weightkg: 30,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Armarouge: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 85, at: 60, df: 100, sa: 125, sd: 80, sp: 75 },
        weightkg: 85,
        abilities: { 0: 'Flash Fire' }
    },
    Baxcalibur: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 115, at: 145, df: 92, sa: 75, sd: 86, sp: 87 },
        weightkg: 210,
        abilities: { 0: 'Thermal Exchange' }
    },
    Bellibolt: {
        types: ['Electric'],
        bs: { hp: 109, at: 64, df: 91, sa: 103, sd: 83, sp: 45 },
        weightkg: 113,
        abilities: { 0: 'Electromorphosis' }
    },
    Bombirdier: {
        types: ['Flying', 'Dark'],
        bs: { hp: 70, at: 103, df: 85, sa: 60, sd: 85, sp: 82 },
        weightkg: 42.9,
        abilities: { 0: 'Big Pecks' }
    },
    Brambleghast: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 55, at: 115, df: 70, sa: 80, sd: 70, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Wind Rider' }
    },
    Bramblin: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 65, df: 30, sa: 45, sd: 35, sp: 60 },
        weightkg: 0.6,
        abilities: { 0: 'Wind Rider' },
        nfe: true
    },
    'Brute Bonnet': {
        types: ['Grass', 'Dark'],
        bs: { hp: 111, at: 127, df: 99, sa: 79, sd: 99, sp: 55 },
        weightkg: 21,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Capsakid: {
        types: ['Grass'],
        bs: { hp: 50, at: 62, df: 40, sa: 62, sd: 40, sp: 50 },
        weightkg: 3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Ceruledge: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 75, at: 125, df: 80, sa: 60, sd: 100, sp: 85 },
        weightkg: 62,
        abilities: { 0: 'Flash Fire' }
    },
    Cetitan: {
        types: ['Ice'],
        bs: { hp: 170, at: 113, df: 65, sa: 45, sd: 55, sp: 73 },
        weightkg: 700,
        abilities: { 0: 'Thick Fat' }
    },
    Cetoddle: {
        types: ['Ice'],
        bs: { hp: 108, at: 68, df: 45, sa: 30, sd: 40, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Thick Fat' },
        nfe: true
    },
    Charcadet: {
        types: ['Fire'],
        bs: { hp: 40, at: 50, df: 40, sa: 50, sd: 40, sp: 35 },
        weightkg: 10.5,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    'Chi-Yu': {
        types: ['Dark', 'Fire'],
        bs: { hp: 55, at: 80, df: 80, sa: 135, sd: 120, sp: 100 },
        weightkg: 4.9,
        gender: 'N',
        abilities: { 0: 'Beads of Ruin' }
    },
    'Chien-Pao': {
        types: ['Dark', 'Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 90, sd: 65, sp: 135 },
        weightkg: 152.2,
        gender: 'N',
        abilities: { 0: 'Sword of Ruin' }
    },
    Clodsire: {
        types: ['Poison', 'Ground'],
        bs: { hp: 130, at: 75, df: 60, sa: 45, sd: 100, sp: 20 },
        weightkg: 223,
        abilities: { 0: 'Poison Point' }
    },
    Crocalor: {
        types: ['Fire'],
        bs: { hp: 81, at: 55, df: 78, sa: 90, sd: 58, sp: 49 },
        weightkg: 30.7,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Cyclizar: {
        types: ['Dragon', 'Normal'],
        bs: { hp: 70, at: 95, df: 65, sa: 85, sd: 65, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Shed Skin' }
    },
    Dachsbun: {
        types: ['Fairy'],
        bs: { hp: 57, at: 80, df: 115, sa: 50, sd: 80, sp: 95 },
        weightkg: 14.9,
        abilities: { 0: 'Well-Baked Body' }
    },
    Dipplin: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 80, at: 80, df: 110, sa: 95, sd: 80, sp: 40 },
        weightkg: 4.4,
        abilities: { 0: 'Supersweet Syrup' },
        nfe: true
    },
    Dolliv: {
        types: ['Grass', 'Normal'],
        bs: { hp: 52, at: 53, df: 60, sa: 78, sd: 78, sp: 33 },
        weightkg: 11.9,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Dondozo: {
        types: ['Water'],
        bs: { hp: 150, at: 100, df: 115, sa: 65, sd: 65, sp: 35 },
        weightkg: 220,
        abilities: { 0: 'Unaware' }
    },
    Dudunsparce: {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 39.2,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Dudunsparce-Three-Segment']
    },
    'Dudunsparce-Three-Segment': {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 47.4,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Dudunsparce'
    },
    Espathra: {
        types: ['Psychic'],
        bs: { hp: 95, at: 60, df: 60, sa: 101, sd: 60, sp: 105 },
        weightkg: 90,
        abilities: { 0: 'Opportunist' }
    },
    Farigiraf: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 120, at: 90, df: 70, sa: 110, sd: 70, sp: 60 },
        weightkg: 160,
        abilities: { 0: 'Cud Chew' }
    },
    Fezandipiti: {
        types: ['Poison', 'Fairy'],
        bs: { hp: 88, at: 91, df: 82, sa: 70, sd: 125, sp: 99 },
        weightkg: 12.2,
        gender: 'M',
        abilities: { 0: 'Toxic Chain' }
    },
    Fidough: {
        types: ['Fairy'],
        bs: { hp: 37, at: 55, df: 70, sa: 30, sd: 55, sp: 65 },
        weightkg: 10.9,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Finizen: {
        types: ['Water'],
        bs: { hp: 70, at: 45, df: 40, sa: 45, sd: 40, sp: 75 },
        weightkg: 60.2,
        abilities: { 0: 'Water Veil' },
        nfe: true
    },
    Flamigo: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 82, at: 115, df: 74, sa: 75, sd: 64, sp: 90 },
        weightkg: 37,
        abilities: { 0: 'Scrappy' }
    },
    Flittle: {
        types: ['Psychic'],
        bs: { hp: 30, at: 35, df: 30, sa: 55, sd: 40, sp: 75 },
        weightkg: 1.5,
        abilities: { 0: 'Anticipation' },
        nfe: true
    },
    Floragato: {
        types: ['Grass'],
        bs: { hp: 61, at: 80, df: 63, sa: 60, sd: 63, sp: 83 },
        weightkg: 12.2,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    'Flutter Mane': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 55, df: 55, sa: 135, sd: 135, sp: 135 },
        weightkg: 4,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Frigibax: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 65, at: 75, df: 45, sa: 35, sd: 45, sp: 55 },
        weightkg: 17,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Fuecoco: {
        types: ['Fire'],
        bs: { hp: 67, at: 45, df: 59, sa: 63, sd: 40, sp: 36 },
        weightkg: 9.8,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Garganacl: {
        types: ['Rock'],
        bs: { hp: 100, at: 100, df: 130, sa: 45, sd: 90, sp: 35 },
        weightkg: 240,
        abilities: { 0: 'Purifying Salt' }
    },
    Gholdengo: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 87, at: 60, df: 95, sa: 133, sd: 91, sp: 84 },
        weightkg: 30,
        gender: 'N',
        abilities: { 0: 'Good as Gold' }
    },
    Gimmighoul: {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 70, sa: 75, sd: 70, sp: 10 },
        weightkg: 5,
        gender: 'N',
        abilities: { 0: 'Rattled' },
        nfe: true,
        otherFormes: ['Gimmighoul-Roaming']
    },
    'Gimmighoul-Roaming': {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 25, sa: 75, sd: 45, sp: 80 },
        weightkg: 5,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Gimmighoul'
    },
    Glimmet: {
        types: ['Rock', 'Poison'],
        bs: { hp: 48, at: 35, df: 42, sa: 105, sd: 60, sp: 60 },
        weightkg: 8,
        abilities: { 0: 'Toxic Debris' },
        nfe: true
    },
    Glimmora: {
        types: ['Rock', 'Poison'],
        bs: { hp: 83, at: 55, df: 90, sa: 130, sd: 81, sp: 86 },
        weightkg: 45,
        abilities: { 0: 'Toxic Debris' }
    },
    'Gouging Fire': {
        types: ['Fire', 'Dragon'],
        bs: { hp: 105, at: 115, df: 121, sa: 65, sd: 93, sp: 91 },
        weightkg: 590,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Grafaiai: {
        types: ['Poison', 'Normal'],
        bs: { hp: 63, at: 95, df: 65, sa: 80, sd: 72, sp: 110 },
        weightkg: 27.2,
        abilities: { 0: 'Unburden' }
    },
    'Great Tusk': {
        types: ['Ground', 'Fighting'],
        bs: { hp: 115, at: 131, df: 131, sa: 53, sd: 53, sp: 87 },
        weightkg: 320,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Greavard: {
        types: ['Ghost'],
        bs: { hp: 50, at: 61, df: 60, sa: 30, sd: 55, sp: 34 },
        weightkg: 35,
        abilities: { 0: 'Pickup' },
        nfe: true
    },
    Houndstone: {
        types: ['Ghost'],
        bs: { hp: 72, at: 101, df: 100, sa: 50, sd: 97, sp: 68 },
        weightkg: 15,
        abilities: { 0: 'Sand Rush' }
    },
    Hydrapple: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 106, at: 80, df: 110, sa: 120, sd: 80, sp: 44 },
        weightkg: 93,
        abilities: { 0: 'Supersweet Syrup' }
    },
    'Iron Bundle': {
        types: ['Ice', 'Water'],
        bs: { hp: 56, at: 80, df: 114, sa: 124, sd: 60, sp: 136 },
        weightkg: 11,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Boulder': {
        types: ['Rock', 'Psychic'],
        bs: { hp: 90, at: 120, df: 80, sa: 68, sd: 108, sp: 124 },
        weightkg: 162.5,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Crown': {
        types: ['Steel', 'Psychic'],
        bs: { hp: 90, at: 72, df: 100, sa: 122, sd: 108, sp: 98 },
        weightkg: 156,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Hands': {
        types: ['Fighting', 'Electric'],
        bs: { hp: 154, at: 140, df: 108, sa: 50, sd: 68, sp: 50 },
        weightkg: 380.7,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Jugulis': {
        types: ['Dark', 'Flying'],
        bs: { hp: 94, at: 80, df: 86, sa: 122, sd: 80, sp: 108 },
        weightkg: 111,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Moth': {
        types: ['Fire', 'Poison'],
        bs: { hp: 80, at: 70, df: 60, sa: 140, sd: 110, sp: 110 },
        weightkg: 36,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Thorns': {
        types: ['Rock', 'Electric'],
        bs: { hp: 100, at: 134, df: 110, sa: 70, sd: 84, sp: 72 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Treads': {
        types: ['Ground', 'Steel'],
        bs: { hp: 90, at: 112, df: 120, sa: 72, sd: 70, sp: 106 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Valiant': {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 74, at: 130, df: 90, sa: 120, sd: 60, sp: 116 },
        weightkg: 35,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    Kilowattrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 70, at: 70, df: 60, sa: 105, sd: 60, sp: 125 },
        weightkg: 38.6,
        abilities: { 0: 'Wind Power' }
    },
    Kingambit: {
        types: ['Dark', 'Steel'],
        bs: { hp: 100, at: 135, df: 120, sa: 60, sd: 85, sp: 50 },
        weightkg: 120,
        abilities: { 0: 'Defiant' }
    },
    Klawf: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 35, sd: 55, sp: 75 },
        weightkg: 79,
        abilities: { 0: 'Anger Shell' }
    },
    Koraidon: {
        types: ['Fighting', 'Dragon'],
        bs: { hp: 100, at: 135, df: 115, sa: 85, sd: 100, sp: 135 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Orichalcum Pulse' }
    },
    Lechonk: {
        types: ['Normal'],
        bs: { hp: 54, at: 45, df: 40, sa: 35, sd: 45, sp: 35 },
        weightkg: 10.2,
        abilities: { 0: 'Aroma Veil' },
        nfe: true
    },
    Lokix: {
        types: ['Bug', 'Dark'],
        bs: { hp: 71, at: 102, df: 78, sa: 52, sd: 55, sp: 92 },
        weightkg: 17.5,
        abilities: { 0: 'Swarm' }
    },
    Mabosstiff: {
        types: ['Dark'],
        bs: { hp: 80, at: 120, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Maschiff: {
        types: ['Dark'],
        bs: { hp: 60, at: 78, df: 60, sa: 40, sd: 51, sp: 51 },
        weightkg: 16,
        abilities: { 0: 'Intimidate' },
        nfe: true
    },
    Maushold: {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.3,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        otherFormes: ['Maushold-Four']
    },
    'Maushold-Four': {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.8,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        baseSpecies: 'Maushold'
    },
    Meowscarada: {
        types: ['Grass', 'Dark'],
        bs: { hp: 76, at: 110, df: 70, sa: 81, sd: 70, sp: 123 },
        weightkg: 31.2,
        abilities: { 0: 'Overgrow' }
    },
    Miraidon: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 100, at: 85, df: 100, sa: 135, sd: 115, sp: 135 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Hadron Engine' }
    },
    Munkidori: {
        types: ['Poison', 'Psychic'],
        bs: { hp: 88, at: 75, df: 66, sa: 130, sd: 90, sp: 106 },
        weightkg: 12.2,
        gender: 'M',
        abilities: { 0: 'Toxic Chain' }
    },
    Nacli: {
        types: ['Rock'],
        bs: { hp: 55, at: 55, df: 75, sa: 35, sd: 35, sp: 25 },
        weightkg: 16,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Naclstack: {
        types: ['Rock'],
        bs: { hp: 60, at: 60, df: 100, sa: 35, sd: 65, sp: 35 },
        weightkg: 105,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Nymble: {
        types: ['Bug'],
        bs: { hp: 33, at: 46, df: 40, sa: 21, sd: 25, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Ogerpon: {
        types: ['Grass'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Defiant' },
        weightkg: 39.8,
        otherFormes: [
            'Ogerpon-Wellspring', 'Ogerpon-Hearthflame', 'Ogerpon-Cornerstone', 'Ogerpon-Teal-Tera',
            'Ogerpon-Wellspring-Tera', 'Ogerpon-Hearthflame-Tera', 'Ogerpon-Cornerstone-Tera',
        ],
        forceTeraType: 'Grass'
    },
    'Ogerpon-Wellspring': {
        types: ['Grass', 'Water'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Water Absorb' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Water'
    },
    'Ogerpon-Hearthflame': {
        types: ['Grass', 'Fire'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Mold Breaker' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Fire'
    },
    'Ogerpon-Cornerstone': {
        types: ['Grass', 'Rock'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Sturdy' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Rock'
    },
    'Ogerpon-Teal-Tera': {
        types: ['Grass'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Teal)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Grass'
    },
    'Ogerpon-Wellspring-Tera': {
        types: ['Grass', 'Water'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Wellspring)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Water'
    },
    'Ogerpon-Hearthflame-Tera': {
        types: ['Grass', 'Fire'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Hearthflame)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Fire'
    },
    'Ogerpon-Cornerstone-Tera': {
        types: ['Grass', 'Rock'],
        gender: 'F',
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Cornerstone)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon',
        forceTeraType: 'Rock'
    },
    Oinkologne: {
        types: ['Normal'],
        bs: { hp: 110, at: 100, df: 75, sa: 59, sd: 80, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Lingering Aroma' },
        otherFormes: ['Oinkologne-F']
    },
    'Oinkologne-F': {
        types: ['Normal'],
        bs: { hp: 115, at: 90, df: 70, sa: 59, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Aroma Veil' },
        baseSpecies: 'Oinkologne'
    },
    Okidogi: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 88, at: 128, df: 115, sa: 58, sd: 86, sp: 80 },
        weightkg: 92,
        gender: 'M',
        abilities: { 0: 'Toxic Chain' }
    },
    Orthworm: {
        types: ['Steel'],
        bs: { hp: 70, at: 85, df: 145, sa: 60, sd: 55, sp: 65 },
        weightkg: 310,
        abilities: { 0: 'Earth Eater' }
    },
    Palafin: {
        types: ['Water'],
        bs: { hp: 100, at: 70, df: 72, sa: 53, sd: 62, sp: 100 },
        weightkg: 60.2,
        abilities: { 0: 'Zero to Hero' },
        otherFormes: ['Palafin-Hero']
    },
    'Palafin-Hero': {
        types: ['Water'],
        bs: { hp: 100, at: 160, df: 97, sa: 106, sd: 87, sp: 100 },
        weightkg: 97.4,
        abilities: { 0: 'Zero to Hero' },
        baseSpecies: 'Palafin'
    },
    Pawmi: {
        types: ['Electric'],
        bs: { hp: 45, at: 50, df: 20, sa: 40, sd: 25, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Static' },
        nfe: true
    },
    Pawmo: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 60, at: 75, df: 40, sa: 50, sd: 40, sp: 85 },
        weightkg: 6.5,
        abilities: { 0: 'Volt Absorb' },
        nfe: true
    },
    Pawmot: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 70, at: 115, df: 70, sa: 70, sd: 60, sp: 105 },
        weightkg: 41,
        abilities: { 0: 'Volt Absorb' }
    },
    Pecharunt: {
        types: ['Poison', 'Ghost'],
        bs: { hp: 88, at: 88, df: 160, sa: 88, sd: 88, sp: 88 },
        weightkg: 0.3,
        gender: 'N',
        abilities: { 0: 'Poison Puppeteer' }
    },
    Poltchageist: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 45, df: 45, sd: 54, sp: 50 },
        weightkg: 1.1,
        abilities: { 0: 'Hospitality' },
        nfe: true,
        otherFormes: ['Poltchageist-Artisan'],
        gender: 'N'
    },
    'Poltchageist-Artisan': {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 45, df: 45, sd: 54, sp: 50 },
        weightkg: 1.1,
        abilities: { 0: 'Hospitality' },
        nfe: true,
        gender: 'N',
        baseSpecies: 'Poltchageist'
    },
    Quaquaval: {
        types: ['Water', 'Fighting'],
        bs: { hp: 85, at: 120, df: 80, sa: 85, sd: 75, sp: 85 },
        weightkg: 61.9,
        abilities: { 0: 'Torrent' }
    },
    Quaxly: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 45, sa: 50, sd: 45, sp: 50 },
        weightkg: 6.1,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Quaxwell: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 65, sd: 60, sp: 65 },
        weightkg: 21.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Rabsca: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 75, at: 50, df: 85, sa: 115, sd: 100, sp: 45 },
        weightkg: 3.5,
        abilities: { 0: 'Synchronize' }
    },
    'Raging Bolt': {
        types: ['Electric', 'Dragon'],
        bs: { hp: 125, at: 73, df: 91, sa: 137, sd: 89, sp: 75 },
        weightkg: 480,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    'Walking Wake': {
        types: ['Water', 'Dragon'],
        bs: { hp: 99, at: 83, df: 91, sa: 125, sd: 83, sp: 109 },
        weightkg: 280,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    'Iron Leaves': {
        types: ['Grass', 'Psychic'],
        bs: { hp: 90, at: 130, df: 88, sa: 70, sd: 108, sp: 104 },
        weightkg: 125,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    Rellor: {
        types: ['Bug'],
        bs: { hp: 41, at: 50, df: 60, sa: 31, sd: 58, sp: 30 },
        weightkg: 1,
        abilities: { 0: 'Compound Eyes' },
        nfe: true
    },
    Revavroom: {
        types: ['Steel', 'Poison'],
        bs: { hp: 80, at: 119, df: 90, sa: 54, sd: 67, sp: 90 },
        weightkg: 120,
        abilities: { 0: 'Overcoat' }
    },
    'Roaring Moon': {
        types: ['Dragon', 'Dark'],
        bs: { hp: 105, at: 139, df: 71, sa: 55, sd: 101, sp: 119 },
        weightkg: 380,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    'Sandy Shocks': {
        types: ['Electric', 'Ground'],
        bs: { hp: 85, at: 81, df: 97, sa: 121, sd: 85, sp: 101 },
        weightkg: 60,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Scovillain: {
        types: ['Grass', 'Fire'],
        bs: { hp: 65, at: 108, df: 65, sa: 108, sd: 65, sp: 75 },
        weightkg: 15,
        abilities: { 0: 'Chlorophyll' }
    },
    'Scream Tail': {
        types: ['Fairy', 'Psychic'],
        bs: { hp: 115, at: 65, df: 99, sa: 65, sd: 115, sp: 111 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Shroodle: {
        types: ['Poison', 'Normal'],
        bs: { hp: 40, at: 65, df: 35, sa: 40, sd: 35, sp: 75 },
        weightkg: 0.7,
        abilities: { 0: 'Unburden' },
        nfe: true
    },
    'Sinistcha': {
        types: ['Grass', 'Ghost'],
        bs: { hp: 71, at: 60, df: 106, sa: 121, sd: 80, sp: 70 },
        weightkg: 2.2,
        abilities: { 0: 'Hospitality' },
        otherFormes: ['Sinistcha-Masterpiece'],
        gender: 'N'
    },
    'Sinistcha-Masterpiece': {
        types: ['Grass', 'Ghost'],
        bs: { hp: 71, at: 60, df: 106, sa: 121, sd: 80, sp: 70 },
        weightkg: 2.2,
        abilities: { 0: 'Hospitality' },
        gender: 'N',
        baseSpecies: 'Sinistcha'
    },
    Skeledirge: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 104, at: 75, df: 100, sa: 110, sd: 75, sp: 66 },
        weightkg: 326.5,
        abilities: { 0: 'Blaze' }
    },
    'Slither Wing': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 85, at: 135, df: 79, sa: 85, sd: 105, sp: 81 },
        weightkg: 92,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Smoliv: {
        types: ['Grass', 'Normal'],
        bs: { hp: 41, at: 35, df: 45, sa: 58, sd: 51, sp: 30 },
        weightkg: 6.5,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Spidops: {
        types: ['Bug'],
        bs: { hp: 60, at: 79, df: 92, sa: 52, sd: 86, sp: 35 },
        weightkg: 16.5,
        abilities: { 0: 'Insomnia' }
    },
    Sprigatito: {
        types: ['Grass'],
        bs: { hp: 40, at: 61, df: 54, sa: 45, sd: 45, sp: 65 },
        weightkg: 4.1,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Squawkabilly: {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        otherFormes: ['Squawkabilly-Blue', 'Squawkabilly-White', 'Squawkabilly-Yellow']
    },
    'Squawkabilly-Blue': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    'Squawkabilly-White': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    'Squawkabilly-Yellow': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    Tadbulb: {
        types: ['Electric'],
        bs: { hp: 61, at: 31, df: 41, sa: 59, sd: 35, sp: 45 },
        weightkg: 0.4,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Tandemaus: {
        types: ['Normal'],
        bs: { hp: 50, at: 50, df: 45, sa: 40, sd: 45, sp: 75 },
        weightkg: 1.8,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Tarountula: {
        types: ['Bug'],
        bs: { hp: 35, at: 41, df: 45, sa: 29, sd: 40, sp: 20 },
        weightkg: 4,
        abilities: { 0: 'Insomnia' },
        nfe: true
    },
    Tatsugiri: {
        types: ['Dragon', 'Water'],
        bs: { hp: 68, at: 50, df: 60, sa: 120, sd: 95, sp: 82 },
        weightkg: 8,
        abilities: { 0: 'Commander' }
    },
    'Tauros-Paldea-Combat': {
        types: ['Fighting'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Blaze': {
        types: ['Fighting', 'Fire'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Aqua': {
        types: ['Fighting', 'Water'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Terapagos': {
        types: ['Normal'],
        bs: { hp: 90, at: 65, df: 85, sa: 65, sd: 85, sp: 60 },
        weightkg: 6.5,
        abilities: { 0: 'Tera Shift' },
        otherFormes: ['Terapagos-Stellar', 'Terapagos-Terastal']
    },
    'Terapagos-Stellar': {
        types: ['Normal'],
        bs: { hp: 160, at: 105, df: 110, sa: 130, sd: 110, sp: 85 },
        weightkg: 77,
        abilities: { 0: 'Teraform Zero' },
        baseSpecies: 'Terapagos'
    },
    'Terapagos-Terastal': {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 110, sa: 105, sd: 110, sp: 85 },
        weightkg: 16,
        abilities: { 0: 'Tera Shell' },
        baseSpecies: 'Terapagos'
    },
    'Ting-Lu': {
        types: ['Dark', 'Ground'],
        bs: { hp: 155, at: 110, df: 125, sa: 55, sd: 80, sp: 45 },
        weightkg: 699.7,
        gender: 'N',
        abilities: { 0: 'Vessel of Ruin' }
    },
    Tinkatink: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 64, sp: 58 },
        weightkg: 8.9,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Tinkaton: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 85, at: 75, df: 77, sa: 70, sd: 105, sp: 94 },
        weightkg: 112.8,
        abilities: { 0: 'Mold Breaker' }
    },
    Tinkatuff: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 65, at: 55, df: 55, sa: 45, sd: 82, sp: 78 },
        weightkg: 59.1,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Toedscool: {
        types: ['Ground', 'Grass'],
        bs: { hp: 40, at: 40, df: 35, sa: 50, sd: 100, sp: 70 },
        weightkg: 33,
        abilities: { 0: 'Mycelium Might' },
        nfe: true
    },
    Toedscruel: {
        types: ['Ground', 'Grass'],
        bs: { hp: 80, at: 70, df: 65, sa: 80, sd: 120, sp: 100 },
        weightkg: 58,
        abilities: { 0: 'Mycelium Might' }
    },
    'Ursaluna': {
        otherFormes: ['Ursaluna-Bloodmoon']
    },
    'Ursaluna-Bloodmoon': {
        types: ['Ground', 'Normal'],
        bs: { hp: 113, at: 70, df: 120, sa: 135, sd: 65, sp: 52 },
        weightkg: 333,
        abilities: { 0: 'Mind\'s Eye' },
        baseSpecies: 'Ursaluna'
    },
    Varoom: {
        types: ['Steel', 'Poison'],
        bs: { hp: 45, at: 70, df: 63, sa: 30, sd: 45, sp: 47 },
        weightkg: 35,
        abilities: { 0: 'Overcoat' },
        nfe: true
    },
    Veluza: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 102, df: 73, sa: 78, sd: 65, sp: 70 },
        weightkg: 90,
        abilities: { 0: 'Mold Breaker' }
    },
    Wattrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 40, at: 40, df: 35, sa: 55, sd: 40, sp: 70 },
        weightkg: 3.6,
        abilities: { 0: 'Wind Power' },
        nfe: true
    },
    Wiglett: {
        types: ['Water'],
        bs: { hp: 10, at: 55, df: 25, sa: 35, sd: 25, sp: 95 },
        weightkg: 1.8,
        abilities: { 0: 'Gooey' },
        nfe: true
    },
    'Wo-Chien': {
        types: ['Dark', 'Grass'],
        bs: { hp: 85, at: 85, df: 100, sa: 95, sd: 135, sp: 70 },
        weightkg: 74.2,
        gender: 'N',
        abilities: { 0: 'Tablets of Ruin' }
    },
    'Wooper-Paldea': {
        types: ['Poison', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Wooper',
        nfe: true
    },
    Wugtrio: {
        types: ['Water'],
        bs: { hp: 35, at: 100, df: 50, sa: 50, sd: 70, sp: 120 },
        weightkg: 5.4,
        abilities: { 0: 'Gooey' }
    }
};
var ZA_PATCH = {
    Absol: { otherFormes: ['Absol-Mega', 'Absol-Mega-Z'] },
    Barbaracle: { otherFormes: ['Barbaracle-Mega'] },
    Baxcalibur: { otherFormes: ['Baxcalibur-Mega'] },
    Chandelure: { otherFormes: ['Chandelure-Mega'] },
    Chesnaught: { otherFormes: ['Chesnaught-Mega'] },
    Chimecho: { otherFormes: ['Chimecho-Mega'] },
    Clefable: { otherFormes: ['Clefable-Mega'] },
    Crabominable: { otherFormes: ['Crabominable-Mega'] },
    Darkrai: { otherFormes: ['Darkrai-Mega'] },
    Delphox: { otherFormes: ['Delphox-Mega'] },
    Dragalge: { otherFormes: ['Dragalge-Mega'] },
    Dragonite: { otherFormes: ['Dragonite-Mega'] },
    Drampa: { otherFormes: ['Drampa-Mega'] },
    Eelektross: { otherFormes: ['Eelektross-Mega'] },
    Emboar: { otherFormes: ['Emboar-Mega'] },
    Excadrill: { otherFormes: ['Excadrill-Mega'] },
    Falinks: { otherFormes: ['Falinks-Mega'] },
    Feraligatr: { otherFormes: ['Feraligatr-Mega'] },
    Floette: { otherFormes: ['Floette-Eternal', 'Floette-Mega'] },
    Froslass: { otherFormes: ['Froslass-Mega'] },
    Garchomp: { otherFormes: ['Garchomp-Mega', 'Garchomp-Mega-Z'] },
    Glimmora: { otherFormes: ['Glimmora-Mega'] },
    Golisopod: { otherFormes: ['Golisopod-Mega'] },
    Golurk: { otherFormes: ['Golurk-Mega'] },
    Greninja: { otherFormes: ['Greninja-Ash', 'Greninja-Bond', 'Greninja-Mega'] },
    Hawlucha: { otherFormes: ['Hawlucha-Mega'] },
    Heatran: { otherFormes: ['Heatran-Mega'] },
    Lucario: { otherFormes: ['Lucario-Mega', 'Lucario-Mega-Z'] },
    Magearna: { otherFormes: ['Magearna-Original', 'Magearna-Mega', 'Magearna-Original-Mega'] },
    Malamar: { otherFormes: ['Malamar-Mega'] },
    Meganium: { otherFormes: ['Meganium-Mega'] },
    Meowstic: { otherFormes: ['Meowstic-Mega'] },
    Pyroar: { otherFormes: ['Pyroar-Mega'] },
    Scolipede: { otherFormes: ['Scolipede-Mega'] },
    Scovillain: { otherFormes: ['Scovillain-Mega'] },
    Scrafty: { otherFormes: ['Scrafty-Mega'] },
    Skarmory: { otherFormes: ['Skarmory-Mega'] },
    Staraptor: { otherFormes: ['Staraptor-Mega'] },
    Starmie: { otherFormes: ['Starmie-Mega'] },
    Tatsugiri: { otherFormes: ['Tatsugiri-Mega'] },
    Victreebel: { otherFormes: ['Victreebel-Mega'] },
    Zeraora: { otherFormes: ['Zeraora-Mega'] },
    Zygarde: { otherFormes: ['Zygarde-10%', 'Zygarde-Complete', 'Zygarde-Mega'] },
    'Absol-Mega-Z': {
        types: ['Dark', 'Ghost'],
        bs: { hp: 65, at: 154, df: 60, sa: 75, sd: 60, sp: 151 },
        weightkg: 49.0,
        abilities: {
            0: 'Aura Break'
        },
        baseSpecies: 'Absol'
    },
    'Barbaracle-Mega': {
        types: [
            'Rock',
            'Fighting',
        ],
        bs: {
            hp: 72,
            at: 140,
            df: 130,
            sa: 64,
            sd: 106,
            sp: 88
        },
        weightkg: 100.0,
        abilities: {
            '0': 'No Guard'
        },
        baseSpecies: 'Barbaracle'
    },
    'Baxcalibur-Mega': {
        types: ['Dragon', 'Ice'],
        bs: { 'hp': 115, 'at': 175, 'df': 117, 'sa': 105, 'sd': 101, 'sp': 87 },
        weightkg: 315.0,
        abilities: {
            '0': 'Hyper Cutter'
        },
        baseSpecies: 'Baxcalibur'
    },
    'Chandelure-Mega': {
        types: [
            'Ghost',
            'Fire',
        ],
        bs: {
            hp: 60,
            at: 75,
            df: 110,
            sa: 175,
            sd: 110,
            sp: 90
        },
        weightkg: 69.6,
        abilities: {
            '0': 'Technician'
        },
        baseSpecies: 'Chandelure'
    },
    'Chesnaught-Mega': {
        types: [
            'Grass',
            'Fighting',
        ],
        bs: {
            hp: 88,
            at: 137,
            df: 172,
            sa: 74,
            sd: 115,
            sp: 44
        },
        weightkg: 90.0,
        abilities: {
            '0': 'Bulletproof'
        },
        baseSpecies: 'Chesnaught'
    },
    'Chimecho-Mega': {
        types: ['Psychic', 'Steel'],
        bs: { 'hp': 75, 'at': 50, 'df': 110, 'sa': 135, 'sd': 120, 'sp': 65 },
        weightkg: 8.0,
        abilities: {
            '0': 'Levitate'
        },
        baseSpecies: 'Chimecho'
    },
    'Clefable-Mega': {
        types: [
            'Fairy',
            'Flying',
        ],
        bs: {
            hp: 95,
            at: 80,
            df: 93,
            sa: 135,
            sd: 110,
            sp: 70
        },
        weightkg: 42.3,
        abilities: {
            '0': 'Aerilate'
        },
        baseSpecies: 'Clefable'
    },
    'Crabominable-Mega': {
        types: ['Ice', 'Fighting'],
        bs: { 'hp': 97, 'at': 157, 'df': 122, 'sa': 62, 'sd': 107, 'sp': 33 },
        weightkg: 252.8,
        abilities: {
            '0': 'Hyper Cutter'
        },
        baseSpecies: 'Crabominable'
    },
    'Darkrai-Mega': {
        types: ['Dark'],
        bs: { 'hp': 70, 'at': 120, 'df': 130, 'sa': 165, 'sd': 130, 'sp': 85 },
        weightkg: 240.0,
        abilities: {
            '0': 'Bad Dreams'
        },
        baseSpecies: 'Darkrai'
    },
    'Delphox-Mega': {
        types: [
            'Fire',
            'Psychic',
        ],
        bs: {
            hp: 75,
            at: 69,
            df: 72,
            sa: 159,
            sd: 125,
            sp: 134
        },
        weightkg: 39.0,
        abilities: {
            '0': 'Levitate'
        },
        baseSpecies: 'Delphox'
    },
    'Dragalge-Mega': {
        types: [
            'Poison',
            'Dragon',
        ],
        bs: {
            hp: 65,
            at: 85,
            df: 105,
            sa: 132,
            sd: 163,
            sp: 44
        },
        weightkg: 100.3,
        abilities: {
            '0': 'Multiscale'
        },
        baseSpecies: 'Dragalge'
    },
    'Dragonite-Mega': {
        types: [
            'Dragon',
            'Flying',
        ],
        bs: {
            hp: 91,
            at: 124,
            df: 115,
            sa: 145,
            sd: 125,
            sp: 100
        },
        weightkg: 290.0,
        abilities: {
            '0': 'Inner Focus'
        },
        baseSpecies: 'Dragonite'
    },
    'Drampa-Mega': {
        types: [
            'Normal',
            'Dragon',
        ],
        bs: {
            hp: 78,
            at: 85,
            df: 110,
            sa: 160,
            sd: 116,
            sp: 36
        },
        weightkg: 240.5,
        abilities: {
            '0': 'Wind Rider'
        },
        baseSpecies: 'Drampa'
    },
    'Eelektross-Mega': {
        types: [
            'Electric',
        ],
        bs: {
            hp: 85,
            at: 145,
            df: 80,
            sa: 135,
            sd: 90,
            sp: 80
        },
        weightkg: 180.0,
        abilities: {
            '0': 'Levitate'
        },
        baseSpecies: 'Eelektross'
    },
    'Emboar-Mega': {
        types: [
            'Fire',
            'Fighting',
        ],
        bs: {
            hp: 110,
            at: 148,
            df: 75,
            sa: 110,
            sd: 110,
            sp: 75
        },
        weightkg: 180.3,
        abilities: {
            '0': 'Supreme Overlord'
        },
        baseSpecies: 'Emboar'
    },
    'Excadrill-Mega': {
        types: [
            'Ground',
            'Steel',
        ],
        bs: {
            hp: 110,
            at: 165,
            df: 100,
            sa: 65,
            sd: 65,
            sp: 103
        },
        weightkg: 60.0,
        abilities: {
            '0': 'Clear Body'
        },
        baseSpecies: 'Excadrill'
    },
    'Falinks-Mega': {
        types: [
            'Fighting',
        ],
        bs: {
            hp: 65,
            at: 135,
            df: 135,
            sa: 70,
            sd: 65,
            sp: 100
        },
        weightkg: 99.0,
        abilities: {
            '0': 'Sharpness'
        },
        baseSpecies: 'Falinks'
    },
    'Feraligatr-Mega': {
        types: [
            'Water',
            'Dragon',
        ],
        bs: {
            hp: 85,
            at: 160,
            df: 125,
            sa: 89,
            sd: 93,
            sp: 78
        },
        weightkg: 108.8,
        abilities: {
            '0': 'Dragon\'s Maw'
        },
        baseSpecies: 'Feraligatr'
    },
    'Floette-Mega': {
        types: [
            'Fairy',
        ],
        bs: {
            hp: 74,
            at: 85,
            df: 87,
            sa: 155,
            sd: 148,
            sp: 102
        },
        weightkg: 100.8,
        abilities: {
            '0': 'Dazzling'
        },
        baseSpecies: 'Floette'
    },
    'Froslass-Mega': {
        types: [
            'Ice',
            'Ghost',
        ],
        bs: {
            hp: 70,
            at: 80,
            df: 70,
            sa: 140,
            sd: 100,
            sp: 120
        },
        weightkg: 29.6,
        abilities: {
            '0': 'Refrigerate'
        },
        baseSpecies: 'Froslass'
    },
    'Garchomp-Mega-Z': {
        types: ['Dragon'],
        bs: { hp: 108, at: 130, df: 85, sa: 141, sd: 85, sp: 151 },
        weightkg: 99.0,
        abilities: {
            0: 'Aura Break'
        },
        baseSpecies: 'Garchomp'
    },
    'Glimmora-Mega': {
        types: ['Rock', 'Poison'],
        bs: { 'hp': 83, 'at': 90, 'df': 105, 'sa': 150, 'sd': 96, 'sp': 101 },
        weightkg: 77.0,
        abilities: {
            '0': 'Toxic Debris'
        },
        baseSpecies: 'Glimmora'
    },
    'Golisopod-Mega': {
        types: ['Bug', 'Steel'],
        bs: { 'hp': 75, 'at': 150, 'df': 175, 'sa': 70, 'sd': 120, 'sp': 40 },
        weightkg: 148.0,
        abilities: {
            '0': 'Emergency Exit'
        },
        baseSpecies: 'Golisopod'
    },
    'Golurk-Mega': {
        types: ['Ground', 'Ghost'],
        bs: { 'hp': 89, 'at': 159, 'df': 105, 'sa': 70, 'sd': 105, 'sp': 55 },
        weightkg: 330.0,
        abilities: {
            '0': 'Iron Fist'
        },
        baseSpecies: 'Golurk'
    },
    'Greninja-Mega': {
        types: [
            'Water',
            'Dark',
        ],
        bs: {
            hp: 72,
            at: 125,
            df: 77,
            sa: 133,
            sd: 81,
            sp: 142
        },
        weightkg: 40.0,
        abilities: {
            '0': 'Protean'
        },
        baseSpecies: 'Greninja'
    },
    'Hawlucha-Mega': {
        types: [
            'Fighting',
            'Flying',
        ],
        bs: {
            hp: 78,
            at: 137,
            df: 100,
            sa: 74,
            sd: 93,
            sp: 118
        },
        weightkg: 25.0,
        abilities: {
            '0': 'Reckless'
        },
        baseSpecies: 'Hawlucha'
    },
    'Heatran-Mega': {
        types: ['Fire', 'Steel'],
        bs: { 'hp': 91, 'at': 120, 'df': 106, 'sa': 175, 'sd': 141, 'sp': 67 },
        weightkg: 570.0,
        abilities: {
            '0': 'Flash Fire'
        },
        baseSpecies: 'Heatran'
    },
    'Lucario-Mega-Z': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 100, df: 70, sa: 164, sd: 70, sp: 151 },
        weightkg: 49.4,
        abilities: {
            0: 'Aura Break'
        },
        baseSpecies: 'Lucario'
    },
    'Magearna-Mega': {
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 125, df: 115, sa: 170, sd: 115, sp: 95 },
        weightkg: 248.1,
        gender: 'N',
        abilities: {
            0: 'Soul-Heart'
        },
        baseSpecies: 'Magearna'
    },
    'Magearna-Original-Mega': {
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 125, df: 115, sa: 170, sd: 115, sp: 95 },
        weightkg: 248.1,
        gender: 'N',
        abilities: {
            0: 'Soul-Heart'
        },
        baseSpecies: 'Magearna'
    },
    'Malamar-Mega': {
        types: [
            'Dark',
            'Psychic',
        ],
        bs: {
            hp: 86,
            at: 102,
            df: 88,
            sa: 98,
            sd: 120,
            sp: 88
        },
        weightkg: 69.8,
        abilities: {
            '0': 'Neuroforce'
        },
        baseSpecies: 'Malamar'
    },
    'Meganium-Mega': {
        types: [
            'Grass',
            'Fairy',
        ],
        bs: {
            hp: 80,
            at: 92,
            df: 115,
            sa: 143,
            sd: 115,
            sp: 80
        },
        weightkg: 201.0,
        abilities: {
            '0': 'Flower Veil'
        },
        baseSpecies: 'Meganium'
    },
    'Meowstic-Mega': {
        types: ['Psychic'],
        bs: { 'hp': 74, 'at': 48, 'df': 76, 'sa': 143, 'sd': 101, 'sp': 124 },
        weightkg: 10.1,
        abilities: {
            '0': 'Keen Eye'
        },
        baseSpecies: 'Meowstic'
    },
    'Pyroar-Mega': {
        types: [
            'Fire',
            'Normal',
        ],
        bs: {
            hp: 86,
            at: 88,
            df: 92,
            sa: 129,
            sd: 86,
            sp: 126
        },
        weightkg: 93.3,
        abilities: {
            '0': 'Blaze'
        },
        baseSpecies: 'Pyroar'
    },
    'Raichu-Mega-X': {
        types: ['Electric'],
        bs: { hp: 60, at: 135, df: 95, sa: 90, sd: 95, sp: 110 },
        weightkg: 38.0,
        abilities: {
            0: 'Motor Drive'
        },
        baseSpecies: 'Raichu'
    },
    'Raichu-Mega-Y': {
        types: ['Electric'],
        bs: { hp: 60, at: 100, df: 55, sa: 160, sd: 80, sp: 130 },
        weightkg: 26.0,
        abilities: {
            0: 'Volt Absorb'
        },
        baseSpecies: 'Raichu'
    },
    'Scolipede-Mega': {
        types: [
            'Bug',
            'Poison',
        ],
        bs: {
            hp: 60,
            at: 140,
            df: 149,
            sa: 75,
            sd: 99,
            sp: 62
        },
        weightkg: 230.5,
        abilities: {
            '0': 'Merciless'
        },
        baseSpecies: 'Scolipede'
    },
    'Scovillain-Mega': {
        types: ['Grass', 'Fire'],
        bs: { 'hp': 65, 'at': 138, 'df': 85, 'sa': 138, 'sd': 85, 'sp': 75 },
        weightkg: 22.0,
        abilities: {
            '0': 'Chlorophyll'
        },
        baseSpecies: 'Scovillain'
    },
    'Scrafty-Mega': {
        types: [
            'Dark',
            'Fighting',
        ],
        bs: {
            hp: 65,
            at: 130,
            df: 135,
            sa: 55,
            sd: 135,
            sp: 68
        },
        weightkg: 31.0,
        abilities: {
            '0': 'Justified'
        },
        baseSpecies: 'Scrafty'
    },
    'Skarmory-Mega': {
        types: [
            'Steel',
            'Flying',
        ],
        bs: {
            hp: 65,
            at: 140,
            df: 110,
            sa: 40,
            sd: 100,
            sp: 110
        },
        weightkg: 40.4,
        abilities: {
            '0': 'Tough Claws'
        },
        baseSpecies: 'Skarmory'
    },
    'Staraptor-Mega': {
        types: ['Fighting', 'Flying'],
        bs: { 'hp': 85, 'at': 140, 'df': 100, 'sa': 60, 'sd': 90, 'sp': 110 },
        weightkg: 50.0,
        abilities: {
            '0': 'Intimidate'
        },
        baseSpecies: 'Staraptor'
    },
    'Starmie-Mega': {
        types: [
            'Water',
            'Psychic',
        ],
        bs: {
            hp: 60,
            at: 100,
            df: 105,
            sa: 130,
            sd: 105,
            sp: 120
        },
        weightkg: 80.0,
        abilities: {
            '0': 'Pure Power'
        },
        baseSpecies: 'Starmie'
    },
    'Tatsugiri-Mega': {
        types: ['Water', 'Dragon'],
        bs: { 'hp': 68, 'at': 65, 'df': 90, 'sa': 135, 'sd': 125, 'sp': 92 },
        weightkg: 24.0,
        abilities: {
            '0': 'Commander'
        },
        baseSpecies: 'Tatsugiri'
    },
    'Victreebel-Mega': {
        types: [
            'Grass',
            'Poison',
        ],
        bs: {
            hp: 80,
            at: 125,
            df: 85,
            sa: 135,
            sd: 95,
            sp: 70
        },
        weightkg: 125.5,
        abilities: {
            '0': 'Supersweet Syrup'
        },
        baseSpecies: 'Victreebel'
    },
    'Zeraora-Mega': {
        types: ['Electric'],
        bs: { 'hp': 88, 'at': 157, 'df': 75, 'sa': 147, 'sd': 80, 'sp': 153 },
        weightkg: 44.5,
        abilities: {
            '0': 'Static'
        },
        baseSpecies: 'Zeraora'
    },
    'Zygarde-Mega': {
        types: [
            'Dragon',
            'Ground',
        ],
        bs: {
            hp: 216,
            at: 70,
            df: 91,
            sa: 216,
            sd: 85,
            sp: 100
        },
        weightkg: 33.5,
        abilities: {
            '0': 'Aura Break'
        },
        baseSpecies: 'Zygarde'
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH, ZA_PATCH);
// Zenith Gold (design/calc/build_null_calc.py): the game's stats, types, abilities and weights
(function (Z) {
    for (var name in Z) {
        var z = Z[name], s = SV[name];
        if (!s) { SV[name] = s = {}; }
        for (var k in z) s[k] = z[k];
        if (z.baseSpecies && SV[z.baseSpecies]) {
            var o = SV[z.baseSpecies].otherFormes || (SV[z.baseSpecies].otherFormes = []);
            if (o.indexOf(name) < 0) o.push(name);
        }
    }
})({"Bulbasaur": {"types": ["Grass", "Poison"], "bs": {"hp": 45, "at": 49, "df": 49, "sa": 65, "sd": 65, "sp": 45}, "weightkg": 0.7, "abilities": {"0": "Chlorophyll", "H": "Overgrow"}, "nfe": true}, "Ivysaur": {"types": ["Grass", "Poison"], "bs": {"hp": 60, "at": 62, "df": 63, "sa": 80, "sd": 80, "sp": 60}, "weightkg": 1.3, "abilities": {"0": "Chlorophyll", "H": "Overgrow"}, "nfe": true}, "Venusaur": {"types": ["Grass", "Poison"], "bs": {"hp": 80, "at": 82, "df": 83, "sa": 100, "sd": 100, "sp": 80}, "weightkg": 10.0, "abilities": {"0": "Chlorophyll", "H": "Overgrow"}}, "Venusaur-Mega": {"types": ["Grass", "Poison"], "bs": {"hp": 80, "at": 100, "df": 123, "sa": 122, "sd": 120, "sp": 80}, "weightkg": 15.6, "abilities": {"0": "Thick Fat"}, "baseSpecies": "Venusaur"}, "Venusaur-Gmax": {"types": ["Grass", "Poison"], "bs": {"hp": 80, "at": 82, "df": 83, "sa": 100, "sd": 100, "sp": 80}, "weightkg": 1.0, "abilities": {"0": "Overgrow", "H": "Chlorophyll"}}, "Charmander": {"types": ["Fire"], "bs": {"hp": 39, "at": 52, "df": 43, "sa": 60, "sd": 50, "sp": 65}, "weightkg": 0.8, "abilities": {"0": "Blaze", "H": "Solar Power"}, "nfe": true}, "Charmeleon": {"types": ["Fire"], "bs": {"hp": 58, "at": 64, "df": 58, "sa": 80, "sd": 65, "sp": 80}, "weightkg": 1.9, "abilities": {"0": "Blaze", "H": "Solar Power"}, "nfe": true}, "Charizard": {"types": ["Fire", "Flying"], "bs": {"hp": 78, "at": 84, "df": 78, "sa": 109, "sd": 85, "sp": 100}, "weightkg": 9.1, "abilities": {"0": "Blaze", "H": "Solar Power"}}, "Charizard-Mega-X": {"types": ["Fire", "Dragon"], "bs": {"hp": 78, "at": 130, "df": 111, "sa": 130, "sd": 85, "sp": 100}, "weightkg": 11.1, "abilities": {"0": "Tough Claws"}, "baseSpecies": "Charizard"}, "Charizard-Mega-Y": {"types": ["Fire", "Flying"], "bs": {"hp": 78, "at": 104, "df": 78, "sa": 159, "sd": 115, "sp": 100}, "weightkg": 10.1, "abilities": {"0": "Solar Power", "H": "Drought"}, "baseSpecies": "Charizard"}, "Charizard-Gmax": {"types": ["Fire", "Flying"], "bs": {"hp": 78, "at": 84, "df": 78, "sa": 120, "sd": 85, "sp": 100}, "weightkg": 1.0, "abilities": {"0": "Blaze", "H": "Solar Power"}}, "Squirtle": {"types": ["Water"], "bs": {"hp": 44, "at": 48, "df": 65, "sa": 50, "sd": 64, "sp": 43}, "weightkg": 0.9, "abilities": {"0": "Torrent", "H": "Rain Dish"}, "nfe": true}, "Wartortle": {"types": ["Water"], "bs": {"hp": 59, "at": 63, "df": 80, "sa": 65, "sd": 80, "sp": 58}, "weightkg": 2.2, "abilities": {"0": "Torrent", "H": "Rain Dish"}, "nfe": true}, "Blastoise": {"types": ["Water"], "bs": {"hp": 79, "at": 83, "df": 100, "sa": 85, "sd": 105, "sp": 78}, "weightkg": 8.6, "abilities": {"0": "Torrent", "H": "Rain Dish"}}, "Blastoise-Mega": {"types": ["Water"], "bs": {"hp": 79, "at": 103, "df": 120, "sa": 135, "sd": 115, "sp": 78}, "weightkg": 10.1, "abilities": {"0": "Mega Launcher"}, "baseSpecies": "Blastoise"}, "Blastoise-Gmax": {"types": ["Water"], "bs": {"hp": 79, "at": 83, "df": 100, "sa": 85, "sd": 105, "sp": 78}, "weightkg": 1.0, "abilities": {"0": "Torrent", "H": "Rain Dish"}}, "Caterpie": {"types": ["Bug"], "bs": {"hp": 45, "at": 30, "df": 35, "sa": 20, "sd": 20, "sp": 45}, "weightkg": 0.3, "abilities": {"0": "Shield Dust", "H": "Run Away"}, "nfe": true}, "Metapod": {"types": ["Bug"], "bs": {"hp": 50, "at": 20, "df": 55, "sa": 25, "sd": 25, "sp": 30}, "weightkg": 1.0, "abilities": {"0": "Shed Skin"}, "nfe": true}, "Butterfree": {"types": ["Bug", "Flying"], "bs": {"hp": 60, "at": 45, "df": 50, "sa": 90, "sd": 80, "sp": 70}, "weightkg": 3.2, "abilities": {"0": "Compound Eyes", "H": "Tinted Lens"}}, "Butterfree-Mega": {"types": ["Bug", "Psychic"], "bs": {"hp": 60, "at": 45, "df": 50, "sa": 120, "sd": 100, "sp": 120}, "weightkg": 1.0, "abilities": {"0": "Compound Eyes", "H": "Tinted Lens"}, "baseSpecies": "Butterfree"}, "Weedle": {"types": ["Bug", "Poison"], "bs": {"hp": 40, "at": 35, "df": 30, "sa": 20, "sd": 20, "sp": 50}, "weightkg": 0.3, "abilities": {"0": "Shield Dust", "H": "Run Away"}, "nfe": true}, "Kakuna": {"types": ["Bug", "Poison"], "bs": {"hp": 45, "at": 25, "df": 50, "sa": 25, "sd": 25, "sp": 35}, "weightkg": 1.0, "abilities": {"0": "Shed Skin"}, "nfe": true}, "Beedrill": {"types": ["Bug", "Poison"], "bs": {"hp": 65, "at": 90, "df": 40, "sa": 45, "sd": 80, "sp": 75}, "weightkg": 3.0, "abilities": {"0": "Swarm", "H": "Sniper"}}, "Beedrill-Mega": {"types": ["Bug", "Poison"], "bs": {"hp": 65, "at": 150, "df": 40, "sa": 15, "sd": 80, "sp": 145}, "weightkg": 4.0, "abilities": {"0": "Adaptability"}, "baseSpecies": "Beedrill"}, "Pidgey": {"types": ["Normal", "Flying"], "bs": {"hp": 40, "at": 45, "df": 40, "sa": 35, "sd": 35, "sp": 56}, "weightkg": 0.2, "abilities": {"0": "Keen Eye", "1": "Big Pecks", "H": "Tangled Feet"}, "nfe": true}, "Pidgeotto": {"types": ["Normal", "Flying"], "bs": {"hp": 63, "at": 60, "df": 55, "sa": 50, "sd": 50, "sp": 71}, "weightkg": 3.0, "abilities": {"0": "Keen Eye", "1": "Big Pecks", "H": "Tangled Feet"}, "nfe": true}, "Pidgeot": {"types": ["Normal", "Flying"], "bs": {"hp": 83, "at": 80, "df": 75, "sa": 70, "sd": 70, "sp": 101}, "weightkg": 4.0, "abilities": {"0": "Keen Eye", "1": "Big Pecks", "H": "Tangled Feet"}}, "Pidgeot-Mega": {"types": ["Normal", "Flying"], "bs": {"hp": 83, "at": 80, "df": 80, "sa": 135, "sd": 80, "sp": 121}, "weightkg": 5.0, "abilities": {"0": "No Guard"}, "baseSpecies": "Pidgeot"}, "Rattata": {"types": ["Normal"], "bs": {"hp": 30, "at": 56, "df": 35, "sa": 25, "sd": 35, "sp": 72}, "weightkg": 0.3, "abilities": {"0": "Guts", "H": "Hustle"}, "nfe": true}, "Raticate": {"types": ["Normal"], "bs": {"hp": 55, "at": 81, "df": 60, "sa": 50, "sd": 70, "sp": 97}, "weightkg": 1.9, "abilities": {"0": "Guts", "H": "Hustle"}}, "Rattata-Alola": {"types": ["Dark", "Normal"], "bs": {"hp": 30, "at": 56, "df": 35, "sa": 25, "sd": 35, "sp": 72}, "weightkg": 0.4, "abilities": {"0": "Gluttony", "1": "Hustle", "H": "Thick Fat"}, "nfe": true}, "Raticate-Alola": {"types": ["Dark", "Normal"], "bs": {"hp": 75, "at": 71, "df": 70, "sa": 40, "sd": 80, "sp": 77}, "weightkg": 2.5, "abilities": {"0": "Gluttony", "1": "Hustle", "H": "Thick Fat"}}, "Raticate-Alola-Totem": {"types": ["Dark", "Normal"], "bs": {"hp": 75, "at": 71, "df": 70, "sa": 40, "sd": 80, "sp": 77}, "weightkg": 10.5, "abilities": {"0": "Thick Fat"}}, "Ekans": {"types": ["Poison"], "bs": {"hp": 35, "at": 60, "df": 44, "sa": 40, "sd": 54, "sp": 55}, "weightkg": 0.7, "abilities": {"0": "Intimidate", "H": "Unnerve"}, "nfe": true}, "Arbok": {"types": ["Poison"], "bs": {"hp": 60, "at": 95, "df": 69, "sa": 65, "sd": 79, "sp": 80}, "weightkg": 6.5, "abilities": {"0": "Intimidate", "H": "Unnerve"}}, "Pichu": {"types": ["Electric"], "bs": {"hp": 20, "at": 40, "df": 15, "sa": 35, "sd": 35, "sp": 60}, "weightkg": 0.2, "abilities": {"0": "Volt Absorb", "H": "Lightning Rod"}, "nfe": true}, "Pichu-Spiky-eared": {"types": ["Electric"], "bs": {"hp": 20, "at": 40, "df": 15, "sa": 35, "sd": 35, "sp": 60}, "weightkg": 0.2, "abilities": {"0": "Static"}}, "Pikachu": {"types": ["Electric"], "bs": {"hp": 35, "at": 55, "df": 40, "sa": 50, "sd": 50, "sp": 90}, "weightkg": 0.6, "abilities": {"0": "Volt Absorb", "H": "Static"}, "nfe": true}, "Pikachu-Gmax": {"types": ["Electric"], "bs": {"hp": 35, "at": 55, "df": 40, "sa": 50, "sd": 50, "sp": 90}, "weightkg": 1.0, "abilities": {"0": "Static", "H": "Lightning Rod"}}, "Pikachu-Starter": {"types": ["Electric"], "bs": {"hp": 45, "at": 80, "df": 50, "sa": 75, "sd": 60, "sp": 120}, "weightkg": 0.6, "abilities": {"0": "Volt Absorb", "H": "Static"}}, "Raichu": {"types": ["Electric"], "bs": {"hp": 60, "at": 90, "df": 55, "sa": 90, "sd": 80, "sp": 110}, "weightkg": 3.0, "abilities": {"0": "Volt Absorb", "H": "Static"}}, "Raichu-Alola": {"types": ["Electric", "Psychic"], "bs": {"hp": 60, "at": 85, "df": 50, "sa": 95, "sd": 85, "sp": 110}, "weightkg": 2.1, "abilities": {"0": "Surge Surfer"}}, "Raichu-Mega-X": {"types": ["Electric"], "bs": {"hp": 60, "at": 135, "df": 95, "sa": 90, "sd": 95, "sp": 110}, "weightkg": 3.8, "abilities": {"0": "Motor Drive"}, "baseSpecies": "Raichu"}, "Raichu-Mega-Y": {"types": ["Electric"], "bs": {"hp": 60, "at": 100, "df": 55, "sa": 160, "sd": 80, "sp": 130}, "weightkg": 2.6, "abilities": {"0": "Volt Absorb"}, "baseSpecies": "Raichu"}, "Sandshrew": {"types": ["Ground"], "bs": {"hp": 50, "at": 75, "df": 85, "sa": 20, "sd": 30, "sp": 40}, "weightkg": 1.2, "abilities": {"0": "Sand Rush", "H": "Sand Veil"}, "nfe": true}, "Sandslash": {"types": ["Ground"], "bs": {"hp": 75, "at": 100, "df": 110, "sa": 45, "sd": 55, "sp": 65}, "weightkg": 3.0, "abilities": {"0": "Sand Rush", "H": "Sand Veil"}}, "Sandshrew-Alola": {"types": ["Ice", "Steel"], "bs": {"hp": 50, "at": 75, "df": 90, "sa": 10, "sd": 35, "sp": 40}, "weightkg": 4.0, "abilities": {"0": "Slush Rush", "H": "Snow Cloak"}, "nfe": true}, "Sandslash-Alola": {"types": ["Ice", "Steel"], "bs": {"hp": 75, "at": 100, "df": 120, "sa": 25, "sd": 65, "sp": 65}, "weightkg": 5.5, "abilities": {"0": "Slush Rush", "H": "Snow Cloak"}}, "Nidoran-F": {"types": ["Poison"], "bs": {"hp": 55, "at": 47, "df": 52, "sa": 40, "sd": 40, "sp": 41}, "weightkg": 0.7, "abilities": {"0": "Hustle", "H": "Poison Point"}, "nfe": true}, "Nidorina": {"types": ["Poison"], "bs": {"hp": 70, "at": 62, "df": 67, "sa": 55, "sd": 55, "sp": 56}, "weightkg": 2.0, "abilities": {"0": "Hustle", "H": "Poison Point"}, "nfe": true}, "Nidoqueen": {"types": ["Poison", "Ground"], "bs": {"hp": 90, "at": 92, "df": 87, "sa": 75, "sd": 85, "sp": 76}, "weightkg": 6.0, "abilities": {"0": "Sheer Force", "H": "Poison Point"}}, "Nidoran-M": {"types": ["Poison"], "bs": {"hp": 46, "at": 57, "df": 40, "sa": 40, "sd": 40, "sp": 50}, "weightkg": 0.9, "abilities": {"0": "Hustle", "H": "Poison Point"}, "nfe": true}, "Nidorino": {"types": ["Poison"], "bs": {"hp": 61, "at": 72, "df": 57, "sa": 55, "sd": 55, "sp": 65}, "weightkg": 1.9, "abilities": {"0": "Hustle", "H": "Poison Point"}, "nfe": true}, "Nidoking": {"types": ["Poison", "Ground"], "bs": {"hp": 81, "at": 102, "df": 77, "sa": 85, "sd": 75, "sp": 85}, "weightkg": 6.2, "abilities": {"0": "Sheer Force", "H": "Poison Point"}}, "Cleffa": {"types": ["Fairy"], "bs": {"hp": 50, "at": 25, "df": 28, "sa": 45, "sd": 55, "sp": 15}, "weightkg": 0.3, "abilities": {"0": "Friend Guard", "1": "Magic Guard", "H": "Cute Charm"}, "nfe": true}, "Clefairy": {"types": ["Fairy"], "bs": {"hp": 70, "at": 45, "df": 48, "sa": 60, "sd": 65, "sp": 35}, "weightkg": 0.8, "abilities": {"0": "Friend Guard", "1": "Magic Guard", "H": "Cute Charm"}, "nfe": true}, "Clefable": {"types": ["Fairy"], "bs": {"hp": 95, "at": 70, "df": 73, "sa": 95, "sd": 90, "sp": 60}, "weightkg": 4.0, "abilities": {"0": "Unaware", "1": "Magic Guard", "H": "Cute Charm"}}, "Clefable-Mega": {"types": ["Fairy", "Flying"], "bs": {"hp": 95, "at": 80, "df": 93, "sa": 135, "sd": 110, "sp": 70}, "weightkg": 4.2, "abilities": {"0": "Dazzling"}, "baseSpecies": "Clefable"}, "Vulpix": {"types": ["Fire"], "bs": {"hp": 38, "at": 41, "df": 40, "sa": 50, "sd": 65, "sp": 65}, "weightkg": 1.0, "abilities": {"0": "Illuminate", "H": "Drought"}, "nfe": true}, "Ninetales": {"types": ["Fire"], "bs": {"hp": 73, "at": 76, "df": 75, "sa": 81, "sd": 100, "sp": 100}, "weightkg": 2.0, "abilities": {"0": "Illuminate", "H": "Drought"}}, "Vulpix-Alola": {"types": ["Ice"], "bs": {"hp": 38, "at": 41, "df": 40, "sa": 50, "sd": 65, "sp": 65}, "weightkg": 1.0, "abilities": {"0": "Snow Cloak", "H": "Snow Warning"}, "nfe": true}, "Ninetales-Alola": {"types": ["Ice", "Fairy"], "bs": {"hp": 73, "at": 67, "df": 75, "sa": 81, "sd": 100, "sp": 109}, "weightkg": 2.0, "abilities": {"0": "Snow Cloak", "H": "Snow Warning"}}, "Igglybuff": {"types": ["Normal", "Fairy"], "bs": {"hp": 90, "at": 30, "df": 15, "sa": 40, "sd": 20, "sp": 15}, "weightkg": 0.1, "abilities": {"0": "Friend Guard", "1": "Competitive", "H": "Cute Charm"}, "nfe": true}, "Jigglypuff": {"types": ["Normal", "Fairy"], "bs": {"hp": 115, "at": 45, "df": 20, "sa": 45, "sd": 25, "sp": 20}, "weightkg": 0.6, "abilities": {"0": "Friend Guard", "1": "Competitive", "H": "Cute Charm"}, "nfe": true}, "Wigglytuff": {"types": ["Normal", "Fairy"], "bs": {"hp": 140, "at": 70, "df": 45, "sa": 85, "sd": 50, "sp": 45}, "weightkg": 1.2, "abilities": {"0": "Friend Guard", "1": "Competitive", "H": "Cute Charm"}}, "Zubat": {"types": ["Poison", "Flying"], "bs": {"hp": 40, "at": 45, "df": 35, "sa": 30, "sd": 40, "sp": 55}, "weightkg": 0.8, "abilities": {"0": "Inner Focus", "H": "Infiltrator"}, "nfe": true}, "Golbat": {"types": ["Poison", "Flying"], "bs": {"hp": 75, "at": 80, "df": 70, "sa": 65, "sd": 75, "sp": 90}, "weightkg": 5.5, "abilities": {"0": "Inner Focus", "H": "Infiltrator"}, "nfe": true}, "Crobat": {"types": ["Poison", "Flying"], "bs": {"hp": 85, "at": 90, "df": 80, "sa": 70, "sd": 80, "sp": 130}, "weightkg": 7.5, "abilities": {"0": "Inner Focus", "H": "Infiltrator"}}, "Oddish": {"types": ["Grass", "Poison"], "bs": {"hp": 45, "at": 50, "df": 55, "sa": 75, "sd": 65, "sp": 30}, "weightkg": 0.5, "abilities": {"0": "Intimidate", "H": "Run Away"}, "nfe": true}, "Gloom": {"types": ["Grass", "Poison"], "bs": {"hp": 60, "at": 65, "df": 70, "sa": 85, "sd": 75, "sp": 40}, "weightkg": 0.9, "abilities": {"0": "Intimidate", "H": "Stench"}, "nfe": true}, "Vileplume": {"types": ["Grass", "Poison"], "bs": {"hp": 75, "at": 80, "df": 85, "sa": 110, "sd": 90, "sp": 50}, "weightkg": 1.9, "abilities": {"0": "Intimidate", "H": "Effect Spore"}}, "Bellossom": {"types": ["Grass"], "bs": {"hp": 75, "at": 80, "df": 95, "sa": 90, "sd": 100, "sp": 50}, "weightkg": 0.6, "abilities": {"0": "Illuminate", "H": "Healer"}}, "Diglett": {"types": ["Ground"], "bs": {"hp": 10, "at": 55, "df": 25, "sa": 35, "sd": 45, "sp": 95}, "weightkg": 0.1, "abilities": {"0": "Sand Force", "1": "Arena Trap", "H": "Sand Veil"}, "nfe": true}, "Dugtrio": {"types": ["Ground"], "bs": {"hp": 35, "at": 100, "df": 50, "sa": 50, "sd": 70, "sp": 120}, "weightkg": 3.3, "abilities": {"0": "Sand Force", "1": "Arena Trap", "H": "Sand Veil"}}, "Diglett-Alola": {"types": ["Ground", "Steel"], "bs": {"hp": 10, "at": 55, "df": 30, "sa": 35, "sd": 45, "sp": 90}, "weightkg": 0.1, "abilities": {"0": "Sand Force", "1": "Tangling Hair", "H": "Sand Veil"}, "nfe": true}, "Dugtrio-Alola": {"types": ["Ground", "Steel"], "bs": {"hp": 35, "at": 100, "df": 60, "sa": 50, "sd": 70, "sp": 110}, "weightkg": 6.7, "abilities": {"0": "Sand Force", "1": "Tangling Hair", "H": "Sand Veil"}}, "Meowth": {"types": ["Normal"], "bs": {"hp": 40, "at": 45, "df": 35, "sa": 40, "sd": 40, "sp": 90}, "weightkg": 0.4, "abilities": {"0": "Technician", "H": "Unnerve"}, "nfe": true}, "Persian": {"types": ["Normal"], "bs": {"hp": 65, "at": 70, "df": 60, "sa": 65, "sd": 65, "sp": 115}, "weightkg": 3.2, "abilities": {"0": "Technician", "H": "Unnerve"}}, "Meowth-Alola": {"types": ["Dark"], "bs": {"hp": 40, "at": 35, "df": 35, "sa": 50, "sd": 40, "sp": 90}, "weightkg": 0.4, "abilities": {"0": "Rattled", "H": "Technician"}, "nfe": true}, "Persian-Alola": {"types": ["Dark"], "bs": {"hp": 65, "at": 60, "df": 60, "sa": 75, "sd": 65, "sp": 115}, "weightkg": 3.3, "abilities": {"0": "Fur Coat", "H": "Technician"}}, "Meowth-Galar": {"types": ["Steel"], "bs": {"hp": 50, "at": 65, "df": 55, "sa": 40, "sd": 40, "sp": 40}, "weightkg": 0.8, "abilities": {"0": "Battle Armor", "1": "Tough Claws", "H": "Unnerve"}, "nfe": true}, "Perrserker": {"types": ["Steel"], "bs": {"hp": 70, "at": 110, "df": 100, "sa": 50, "sd": 60, "sp": 50}, "weightkg": 2.8, "abilities": {"0": "Battle Armor", "1": "Tough Claws", "H": "Steely Spirit"}}, "Meowth-Gmax": {"types": ["Normal"], "bs": {"hp": 40, "at": 45, "df": 35, "sa": 40, "sd": 40, "sp": 90}, "weightkg": 1.0, "abilities": {"0": "Pickup", "1": "Technician", "H": "Unnerve"}}, "Mankey": {"types": ["Fighting"], "bs": {"hp": 40, "at": 80, "df": 35, "sa": 35, "sd": 45, "sp": 70}, "weightkg": 2.8, "abilities": {"0": "Vital Spirit", "1": "Inner Focus", "H": "Anger Point"}, "nfe": true}, "Primeape": {"types": ["Fighting"], "bs": {"hp": 65, "at": 105, "df": 60, "sa": 60, "sd": 70, "sp": 95}, "weightkg": 3.2, "abilities": {"0": "Vital Spirit", "1": "Inner Focus", "H": "Anger Point"}, "nfe": true}, "Annihilape": {"types": ["Fighting", "Ghost"], "bs": {"hp": 110, "at": 115, "df": 80, "sa": 50, "sd": 90, "sp": 90}, "weightkg": 5.6, "abilities": {"0": "Vital Spirit", "1": "Inner Focus", "H": "Defiant"}}, "Growlithe": {"types": ["Fire"], "bs": {"hp": 55, "at": 70, "df": 45, "sa": 70, "sd": 50, "sp": 60}, "weightkg": 1.9, "abilities": {"0": "Intimidate", "H": "Justified"}, "nfe": true}, "Arcanine": {"types": ["Fire"], "bs": {"hp": 90, "at": 110, "df": 80, "sa": 100, "sd": 80, "sp": 95}, "weightkg": 15.5, "abilities": {"0": "Intimidate", "H": "Justified"}}, "Growlithe-Hisui": {"types": ["Fire", "Rock"], "bs": {"hp": 60, "at": 75, "df": 45, "sa": 65, "sd": 50, "sp": 55}, "weightkg": 2.3, "abilities": {"0": "Intimidate", "H": "Justified"}, "nfe": true}, "Arcanine-Hisui": {"types": ["Fire", "Rock"], "bs": {"hp": 95, "at": 115, "df": 80, "sa": 95, "sd": 80, "sp": 90}, "weightkg": 16.8, "abilities": {"0": "Intimidate", "1": "Rock Head", "H": "Justified"}}, "Poliwag": {"types": ["Water"], "bs": {"hp": 40, "at": 50, "df": 40, "sa": 40, "sd": 40, "sp": 90}, "weightkg": 1.2, "abilities": {"0": "Swift Swim", "1": "Damp", "H": "Water Absorb"}, "nfe": true}, "Poliwhirl": {"types": ["Water"], "bs": {"hp": 65, "at": 65, "df": 65, "sa": 50, "sd": 50, "sp": 90}, "weightkg": 2.0, "abilities": {"0": "Swift Swim", "1": "Damp", "H": "Water Absorb"}, "nfe": true}, "Poliwrath": {"types": ["Water", "Fighting"], "bs": {"hp": 90, "at": 95, "df": 95, "sa": 70, "sd": 90, "sp": 70}, "weightkg": 5.4, "abilities": {"0": "Swift Swim", "H": "Water Absorb"}}, "Politoed": {"types": ["Water"], "bs": {"hp": 90, "at": 75, "df": 75, "sa": 90, "sd": 100, "sp": 70}, "weightkg": 3.4, "abilities": {"0": "Damp", "H": "Drizzle"}}, "Abra": {"types": ["Psychic"], "bs": {"hp": 25, "at": 20, "df": 15, "sa": 105, "sd": 55, "sp": 90}, "weightkg": 1.9, "abilities": {"0": "Magic Guard", "1": "Inner Focus", "H": "Synchronize"}, "nfe": true}, "Kadabra": {"types": ["Psychic"], "bs": {"hp": 40, "at": 35, "df": 30, "sa": 120, "sd": 70, "sp": 105}, "weightkg": 5.7, "abilities": {"0": "Magic Guard", "1": "Inner Focus", "H": "Synchronize"}, "nfe": true}, "Alakazam": {"types": ["Psychic"], "bs": {"hp": 55, "at": 50, "df": 45, "sa": 135, "sd": 95, "sp": 120}, "weightkg": 4.8, "abilities": {"0": "Magic Guard", "1": "Inner Focus", "H": "Synchronize"}}, "Alakazam-Mega": {"types": ["Psychic"], "bs": {"hp": 55, "at": 50, "df": 65, "sa": 175, "sd": 105, "sp": 150}, "weightkg": 4.8, "abilities": {"0": "Trace"}, "baseSpecies": "Alakazam"}, "Machop": {"types": ["Fighting"], "bs": {"hp": 70, "at": 80, "df": 50, "sa": 35, "sd": 35, "sp": 35}, "weightkg": 1.9, "abilities": {"0": "Guts", "1": "No Guard", "H": "Steadfast"}, "nfe": true}, "Machoke": {"types": ["Fighting"], "bs": {"hp": 80, "at": 100, "df": 70, "sa": 50, "sd": 60, "sp": 45}, "weightkg": 7.0, "abilities": {"0": "Guts", "1": "No Guard", "H": "Steadfast"}, "nfe": true}, "Machamp": {"types": ["Fighting"], "bs": {"hp": 90, "at": 130, "df": 80, "sa": 65, "sd": 85, "sp": 55}, "weightkg": 13.0, "abilities": {"0": "Guts", "1": "No Guard", "H": "Steadfast"}}, "Machamp-Mega": {"types": ["Fighting"], "bs": {"hp": 90, "at": 140, "df": 110, "sa": 65, "sd": 125, "sp": 75}, "weightkg": 1.0, "abilities": {"0": "Guts", "1": "No Guard", "H": "Steadfast"}, "baseSpecies": "Machamp"}, "Bellsprout": {"types": ["Grass", "Poison"], "bs": {"hp": 50, "at": 75, "df": 35, "sa": 70, "sd": 30, "sp": 40}, "weightkg": 0.4, "abilities": {"0": "Chlorophyll", "H": "Gluttony"}, "nfe": true}, "Weepinbell": {"types": ["Grass", "Poison"], "bs": {"hp": 65, "at": 90, "df": 50, "sa": 85, "sd": 45, "sp": 55}, "weightkg": 0.6, "abilities": {"0": "Chlorophyll", "H": "Gluttony"}, "nfe": true}, "Victreebel": {"types": ["Grass", "Poison"], "bs": {"hp": 80, "at": 105, "df": 65, "sa": 100, "sd": 70, "sp": 70}, "weightkg": 1.6, "abilities": {"0": "Chlorophyll", "H": "Gluttony"}}, "Victreebel-Mega": {"types": ["Grass", "Poison"], "bs": {"hp": 80, "at": 125, "df": 85, "sa": 135, "sd": 95, "sp": 70}, "weightkg": 12.6, "abilities": {"0": "Supersweet Syrup"}, "baseSpecies": "Victreebel"}, "Tentacool": {"types": ["Water", "Poison"], "bs": {"hp": 40, "at": 40, "df": 35, "sa": 50, "sd": 100, "sp": 70}, "weightkg": 4.5, "abilities": {"0": "Clear Body", "1": "Rain Dish", "H": "Liquid Ooze"}, "nfe": true}, "Tentacruel": {"types": ["Water", "Poison"], "bs": {"hp": 80, "at": 70, "df": 65, "sa": 80, "sd": 120, "sp": 100}, "weightkg": 5.5, "abilities": {"0": "Clear Body", "1": "Rain Dish", "H": "Liquid Ooze"}}, "Geodude": {"types": ["Rock", "Ground"], "bs": {"hp": 40, "at": 80, "df": 100, "sa": 30, "sd": 30, "sp": 20}, "weightkg": 2.0, "abilities": {"0": "Rock Head", "1": "Sturdy", "H": "Sand Veil"}, "nfe": true}, "Graveler": {"types": ["Rock", "Ground"], "bs": {"hp": 55, "at": 95, "df": 115, "sa": 45, "sd": 45, "sp": 35}, "weightkg": 10.5, "abilities": {"0": "Rock Head", "1": "Sturdy", "H": "Sand Veil"}, "nfe": true}, "Golem": {"types": ["Rock", "Ground"], "bs": {"hp": 80, "at": 120, "df": 130, "sa": 55, "sd": 65, "sp": 45}, "weightkg": 30.0, "abilities": {"0": "Rock Head", "1": "Sturdy", "H": "Sand Veil"}}, "Geodude-Alola": {"types": ["Rock", "Electric"], "bs": {"hp": 40, "at": 80, "df": 100, "sa": 30, "sd": 30, "sp": 20}, "weightkg": 2.0, "abilities": {"0": "Galvanize", "1": "Sturdy", "H": "Magnet Pull"}, "nfe": true}, "Graveler-Alola": {"types": ["Rock", "Electric"], "bs": {"hp": 55, "at": 95, "df": 115, "sa": 45, "sd": 45, "sp": 35}, "weightkg": 11.0, "abilities": {"0": "Galvanize", "1": "Sturdy", "H": "Magnet Pull"}, "nfe": true}, "Golem-Alola": {"types": ["Rock", "Electric"], "bs": {"hp": 80, "at": 120, "df": 130, "sa": 55, "sd": 65, "sp": 45}, "weightkg": 31.6, "abilities": {"0": "Galvanize", "1": "Sturdy", "H": "Magnet Pull"}}, "Ponyta": {"types": ["Fire"], "bs": {"hp": 50, "at": 85, "df": 55, "sa": 65, "sd": 65, "sp": 90}, "weightkg": 3.0, "abilities": {"0": "Flame Body", "H": "Flash Fire"}, "nfe": true}, "Rapidash": {"types": ["Fire"], "bs": {"hp": 65, "at": 100, "df": 70, "sa": 80, "sd": 80, "sp": 105}, "weightkg": 9.5, "abilities": {"0": "Flame Body", "H": "Flash Fire"}}, "Ponyta-Galar": {"types": ["Psychic"], "bs": {"hp": 50, "at": 85, "df": 55, "sa": 65, "sd": 65, "sp": 90}, "weightkg": 2.4, "abilities": {"0": "Pastel Veil", "H": "Anticipation"}, "nfe": true}, "Rapidash-Galar": {"types": ["Psychic", "Fairy"], "bs": {"hp": 65, "at": 100, "df": 70, "sa": 80, "sd": 80, "sp": 105}, "weightkg": 8.0, "abilities": {"0": "Pastel Veil", "H": "Anticipation"}}, "Slowpoke": {"types": ["Water", "Psychic"], "bs": {"hp": 90, "at": 65, "df": 65, "sa": 40, "sd": 40, "sp": 15}, "weightkg": 3.6, "abilities": {"0": "Oblivious", "1": "Own Tempo", "H": "Regenerator"}, "nfe": true}, "Slowbro": {"types": ["Water", "Psychic"], "bs": {"hp": 95, "at": 75, "df": 110, "sa": 100, "sd": 80, "sp": 30}, "weightkg": 7.8, "abilities": {"0": "Oblivious", "1": "Own Tempo", "H": "Regenerator"}}, "Slowking": {"types": ["Water", "Psychic"], "bs": {"hp": 95, "at": 75, "df": 80, "sa": 100, "sd": 110, "sp": 30}, "weightkg": 8.0, "abilities": {"0": "Shell Armor", "1": "Regenerator", "H": "Oblivious"}}, "Slowbro-Mega": {"types": ["Water", "Psychic"], "bs": {"hp": 95, "at": 75, "df": 180, "sa": 130, "sd": 80, "sp": 30}, "weightkg": 12.0, "abilities": {"0": "Shell Armor"}, "baseSpecies": "Slowbro"}, "Slowpoke-Galar": {"types": ["Psychic"], "bs": {"hp": 90, "at": 65, "df": 65, "sa": 40, "sd": 40, "sp": 15}, "weightkg": 3.6, "abilities": {"0": "Gluttony", "1": "Own Tempo", "H": "Regenerator"}, "nfe": true}, "Slowbro-Galar": {"types": ["Poison", "Psychic"], "bs": {"hp": 95, "at": 100, "df": 95, "sa": 100, "sd": 70, "sp": 30}, "weightkg": 7.0, "abilities": {"0": "Quick Draw", "1": "Own Tempo", "H": "Quick Draw"}}, "Slowking-Galar": {"types": ["Poison", "Psychic"], "bs": {"hp": 95, "at": 65, "df": 80, "sa": 110, "sd": 110, "sp": 30}, "weightkg": 8.0, "abilities": {"0": "Curious Medicine", "1": "Own Tempo", "H": "Regenerator"}}, "Magnemite": {"types": ["Electric", "Steel"], "bs": {"hp": 25, "at": 35, "df": 70, "sa": 95, "sd": 55, "sp": 45}, "weightkg": 0.6, "abilities": {"0": "Analytic", "1": "Sturdy", "H": "Magnet Pull"}, "nfe": true}, "Magneton": {"types": ["Electric", "Steel"], "bs": {"hp": 50, "at": 60, "df": 95, "sa": 120, "sd": 70, "sp": 70}, "weightkg": 6.0, "abilities": {"0": "Analytic", "1": "Sturdy", "H": "Magnet Pull"}, "nfe": true}, "Magnezone": {"types": ["Electric", "Steel"], "bs": {"hp": 70, "at": 70, "df": 115, "sa": 130, "sd": 90, "sp": 60}, "weightkg": 18.0, "abilities": {"0": "Analytic", "1": "Sturdy", "H": "Magnet Pull"}}, "Farfetch’d": {"types": ["Normal", "Flying"], "bs": {"hp": 52, "at": 90, "df": 55, "sa": 58, "sd": 62, "sp": 60}, "weightkg": 1.5, "abilities": {"0": "Defiant", "1": "Inner Focus", "H": "Keen Eye"}}, "Farfetch’d-Galar": {"types": ["Fighting"], "bs": {"hp": 52, "at": 95, "df": 55, "sa": 58, "sd": 62, "sp": 55}, "weightkg": 4.2, "abilities": {"0": "Inner Focus", "H": "Scrappy"}, "nfe": true}, "Sirfetch’d": {"types": ["Fighting"], "bs": {"hp": 62, "at": 135, "df": 95, "sa": 68, "sd": 82, "sp": 65}, "weightkg": 11.7, "abilities": {"0": "Steadfast", "H": "Scrappy"}}, "Seel": {"types": ["Water"], "bs": {"hp": 65, "at": 45, "df": 55, "sa": 45, "sd": 70, "sp": 45}, "weightkg": 9.0, "abilities": {"0": "Thick Fat", "H": "Ice Body"}, "nfe": true}, "Dewgong": {"types": ["Water", "Ice"], "bs": {"hp": 90, "at": 70, "df": 80, "sa": 70, "sd": 95, "sp": 70}, "weightkg": 12.0, "abilities": {"0": "Thick Fat", "H": "Ice Body"}}, "Grimer": {"types": ["Poison"], "bs": {"hp": 80, "at": 80, "df": 50, "sa": 40, "sd": 50, "sp": 25}, "weightkg": 3.0, "abilities": {"0": "Stench", "1": "Sticky Hold", "H": "Poison Touch"}, "nfe": true}, "Muk": {"types": ["Poison"], "bs": {"hp": 105, "at": 105, "df": 75, "sa": 65, "sd": 100, "sp": 50}, "weightkg": 3.0, "abilities": {"0": "Stench", "1": "Sticky Hold", "H": "Poison Touch"}}, "Grimer-Alola": {"types": ["Poison", "Dark"], "bs": {"hp": 80, "at": 80, "df": 50, "sa": 40, "sd": 50, "sp": 25}, "weightkg": 4.2, "abilities": {"0": "Poison Touch", "1": "Gluttony", "H": "Power Of Alchemy"}, "nfe": true}, "Muk-Alola": {"types": ["Poison", "Dark"], "bs": {"hp": 105, "at": 105, "df": 75, "sa": 65, "sd": 100, "sp": 50}, "weightkg": 5.2, "abilities": {"0": "Poison Touch", "1": "Gluttony", "H": "Power Of Alchemy"}}, "Shellder": {"types": ["Water"], "bs": {"hp": 30, "at": 65, "df": 100, "sa": 45, "sd": 25, "sp": 40}, "weightkg": 0.4, "abilities": {"0": "Shell Armor", "1": "Skill Link", "H": "Overcoat"}, "nfe": true}, "Cloyster": {"types": ["Water", "Ice"], "bs": {"hp": 50, "at": 95, "df": 180, "sa": 85, "sd": 45, "sp": 70}, "weightkg": 13.2, "abilities": {"0": "Shell Armor", "1": "Skill Link", "H": "Overcoat"}}, "Gastly": {"types": ["Ghost", "Poison"], "bs": {"hp": 30, "at": 35, "df": 30, "sa": 100, "sd": 35, "sp": 80}, "weightkg": 0.0, "abilities": {"0": "Levitate", "H": "Cursed Body"}, "nfe": true}, "Haunter": {"types": ["Ghost", "Poison"], "bs": {"hp": 45, "at": 50, "df": 45, "sa": 115, "sd": 55, "sp": 95}, "weightkg": 0.0, "abilities": {"0": "Levitate", "H": "Cursed Body"}, "nfe": true}, "Gengar": {"types": ["Ghost", "Poison"], "bs": {"hp": 60, "at": 65, "df": 60, "sa": 130, "sd": 75, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Levitate", "H": "Cursed Body"}}, "Gengar-Mega": {"types": ["Ghost", "Poison"], "bs": {"hp": 60, "at": 65, "df": 80, "sa": 170, "sd": 95, "sp": 130}, "weightkg": 4.0, "abilities": {"0": "Shadow Tag"}, "baseSpecies": "Gengar"}, "Gengar-Gmax": {"types": ["Ghost", "Poison"], "bs": {"hp": 60, "at": 65, "df": 60, "sa": 130, "sd": 75, "sp": 110}, "weightkg": 1.0, "abilities": {"0": "Cursed Body"}}, "Onix": {"types": ["Rock", "Ground"], "bs": {"hp": 35, "at": 45, "df": 160, "sa": 30, "sd": 45, "sp": 70}, "weightkg": 21.0, "abilities": {"0": "Weak Armor", "1": "Sturdy", "H": "Rock Head"}, "nfe": true}, "Steelix": {"types": ["Steel", "Ground"], "bs": {"hp": 75, "at": 85, "df": 200, "sa": 55, "sd": 65, "sp": 30}, "weightkg": 40.0, "abilities": {"0": "Sheer Force", "1": "Sturdy", "H": "Rock Head"}}, "Steelix-Mega": {"types": ["Steel", "Ground"], "bs": {"hp": 75, "at": 125, "df": 230, "sa": 55, "sd": 95, "sp": 30}, "weightkg": 74.0, "abilities": {"0": "Sand Force"}, "baseSpecies": "Steelix"}, "Krabby": {"types": ["Water"], "bs": {"hp": 30, "at": 105, "df": 90, "sa": 25, "sd": 25, "sp": 50}, "weightkg": 0.7, "abilities": {"0": "Shell Armor", "H": "Sheer Force"}, "nfe": true}, "Kingler": {"types": ["Water"], "bs": {"hp": 55, "at": 130, "df": 115, "sa": 50, "sd": 50, "sp": 75}, "weightkg": 6.0, "abilities": {"0": "Shell Armor", "H": "Sheer Force"}}, "Kingler-Gmax": {"types": ["Water"], "bs": {"hp": 55, "at": 130, "df": 115, "sa": 50, "sd": 50, "sp": 75}, "weightkg": 1.0, "abilities": {"0": "Hyper Cutter", "1": "Shell Armor", "H": "Sheer Force"}}, "Voltorb": {"types": ["Electric"], "bs": {"hp": 40, "at": 30, "df": 50, "sa": 55, "sd": 55, "sp": 100}, "weightkg": 1.0, "abilities": {"0": "Soundproof", "H": "Aftermath"}, "nfe": true}, "Electrode": {"types": ["Electric"], "bs": {"hp": 60, "at": 50, "df": 70, "sa": 80, "sd": 80, "sp": 150}, "weightkg": 6.7, "abilities": {"0": "Soundproof", "H": "Static"}}, "Voltorb-Hisui": {"types": ["Electric", "Grass"], "bs": {"hp": 40, "at": 30, "df": 50, "sa": 55, "sd": 55, "sp": 100}, "weightkg": 1.3, "abilities": {"0": "Soundproof", "H": "Static"}, "nfe": true}, "Electrode-Hisui": {"types": ["Electric", "Grass"], "bs": {"hp": 60, "at": 50, "df": 70, "sa": 80, "sd": 80, "sp": 150}, "weightkg": 7.1, "abilities": {"0": "Soundproof", "H": "Static"}}, "Exeggcute": {"types": ["Grass", "Psychic"], "bs": {"hp": 60, "at": 40, "df": 80, "sa": 60, "sd": 45, "sp": 40}, "weightkg": 0.2, "abilities": {"0": "Chlorophyll", "H": "Harvest"}, "nfe": true}, "Exeggutor": {"types": ["Grass", "Psychic"], "bs": {"hp": 95, "at": 95, "df": 85, "sa": 125, "sd": 75, "sp": 55}, "weightkg": 12.0, "abilities": {"0": "Chlorophyll", "H": "Harvest"}}, "Exeggutor-Alola": {"types": ["Grass", "Dragon"], "bs": {"hp": 95, "at": 105, "df": 85, "sa": 125, "sd": 75, "sp": 45}, "weightkg": 41.6, "abilities": {"0": "Chlorophyll", "H": "Harvest"}}, "Cubone": {"types": ["Ground"], "bs": {"hp": 50, "at": 50, "df": 95, "sa": 40, "sd": 50, "sp": 35}, "weightkg": 0.7, "abilities": {"0": "Battle Armor", "H": "Lightning Rod"}, "nfe": true}, "Marowak": {"types": ["Ground"], "bs": {"hp": 60, "at": 80, "df": 110, "sa": 50, "sd": 80, "sp": 45}, "weightkg": 4.5, "abilities": {"0": "Battle Armor", "H": "Lightning Rod"}}, "Marowak-Alola": {"types": ["Fire", "Ghost"], "bs": {"hp": 60, "at": 80, "df": 110, "sa": 50, "sd": 80, "sp": 45}, "weightkg": 3.4, "abilities": {"0": "Rock Head", "H": "Lightning Rod"}}, "Marowak-Alola-Totem": {"types": ["Fire", "Ghost"], "bs": {"hp": 60, "at": 80, "df": 110, "sa": 50, "sd": 80, "sp": 45}, "weightkg": 9.8, "abilities": {"0": "Rock Head"}}, "Tyrogue": {"types": ["Fighting"], "bs": {"hp": 35, "at": 35, "df": 35, "sa": 35, "sd": 35, "sp": 35}, "weightkg": 2.1, "abilities": {"0": "Guts", "1": "Steadfast", "H": "Vital Spirit"}, "nfe": true}, "Hitmonlee": {"types": ["Fighting"], "bs": {"hp": 50, "at": 120, "df": 53, "sa": 35, "sd": 110, "sp": 87}, "weightkg": 5.0, "abilities": {"0": "Unburden", "1": "Reckless", "H": "Limber"}}, "Hitmonchan": {"types": ["Fighting"], "bs": {"hp": 50, "at": 105, "df": 79, "sa": 35, "sd": 110, "sp": 76}, "weightkg": 5.0, "abilities": {"0": "Iron Fist", "1": "Inner Focus", "H": "Keen Eye"}}, "Hitmontop": {"types": ["Fighting"], "bs": {"hp": 50, "at": 95, "df": 95, "sa": 35, "sd": 110, "sp": 70}, "weightkg": 4.8, "abilities": {"0": "Intimidate", "1": "Technician", "H": "Steadfast"}}, "Lickitung": {"types": ["Normal"], "bs": {"hp": 90, "at": 55, "df": 75, "sa": 60, "sd": 75, "sp": 30}, "weightkg": 6.5, "abilities": {"0": "Own Tempo", "1": "Oblivious", "H": "Cloud Nine"}, "nfe": true}, "Lickilicky": {"types": ["Normal"], "bs": {"hp": 110, "at": 85, "df": 95, "sa": 80, "sd": 95, "sp": 50}, "weightkg": 14.0, "abilities": {"0": "Own Tempo", "1": "Oblivious", "H": "Cloud Nine"}}, "Koffing": {"types": ["Poison"], "bs": {"hp": 40, "at": 65, "df": 95, "sa": 60, "sd": 45, "sp": 35}, "weightkg": 0.1, "abilities": {"0": "Levitate", "H": "Stench"}, "nfe": true}, "Weezing": {"types": ["Poison"], "bs": {"hp": 65, "at": 90, "df": 120, "sa": 85, "sd": 70, "sp": 60}, "weightkg": 0.9, "abilities": {"0": "Levitate", "H": "Neutralizing Gas"}}, "Weezing-Galar": {"types": ["Poison", "Fairy"], "bs": {"hp": 65, "at": 90, "df": 120, "sa": 85, "sd": 70, "sp": 60}, "weightkg": 1.6, "abilities": {"0": "Levitate", "H": "Misty Surge"}}, "Rhyhorn": {"types": ["Ground", "Rock"], "bs": {"hp": 80, "at": 85, "df": 95, "sa": 30, "sd": 30, "sp": 25}, "weightkg": 11.5, "abilities": {"0": "Reckless", "1": "Rock Head", "H": "Lightning Rod"}, "nfe": true}, "Rhydon": {"types": ["Ground", "Rock"], "bs": {"hp": 105, "at": 130, "df": 120, "sa": 45, "sd": 45, "sp": 40}, "weightkg": 12.0, "abilities": {"0": "Reckless", "1": "Rock Head", "H": "Lightning Rod"}, "nfe": true}, "Rhyperior": {"types": ["Ground", "Rock"], "bs": {"hp": 115, "at": 140, "df": 130, "sa": 55, "sd": 55, "sp": 40}, "weightkg": 28.3, "abilities": {"0": "Solid Rock", "H": "Lightning Rod"}}, "Happiny": {"types": ["Normal"], "bs": {"hp": 100, "at": 5, "df": 5, "sa": 15, "sd": 65, "sp": 30}, "weightkg": 2.4, "abilities": {"0": "Natural Cure", "1": "Serene Grace", "H": "Friend Guard"}, "nfe": true}, "Chansey": {"types": ["Normal"], "bs": {"hp": 250, "at": 5, "df": 5, "sa": 35, "sd": 105, "sp": 50}, "weightkg": 3.5, "abilities": {"0": "Natural Cure", "1": "Serene Grace", "H": "Healer"}, "nfe": true}, "Blissey": {"types": ["Normal"], "bs": {"hp": 255, "at": 10, "df": 10, "sa": 75, "sd": 135, "sp": 55}, "weightkg": 4.7, "abilities": {"0": "Natural Cure", "1": "Serene Grace", "H": "Healer"}}, "Tangela": {"types": ["Grass"], "bs": {"hp": 65, "at": 55, "df": 115, "sa": 100, "sd": 40, "sp": 60}, "weightkg": 3.5, "abilities": {"0": "Chlorophyll", "H": "Regenerator"}, "nfe": true}, "Tangrowth": {"types": ["Grass"], "bs": {"hp": 100, "at": 100, "df": 125, "sa": 110, "sd": 50, "sp": 50}, "weightkg": 12.9, "abilities": {"0": "Chlorophyll", "H": "Regenerator"}}, "Kangaskhan": {"types": ["Normal"], "bs": {"hp": 105, "at": 95, "df": 80, "sa": 40, "sd": 80, "sp": 90}, "weightkg": 8.0, "abilities": {"0": "Scrappy", "1": "Inner Focus", "H": "Early Bird"}}, "Kangaskhan-Mega": {"types": ["Normal"], "bs": {"hp": 105, "at": 125, "df": 100, "sa": 60, "sd": 100, "sp": 100}, "weightkg": 10.0, "abilities": {"0": "Parental Bond"}, "baseSpecies": "Kangaskhan"}, "Horsea": {"types": ["Water"], "bs": {"hp": 30, "at": 40, "df": 70, "sa": 70, "sd": 25, "sp": 60}, "weightkg": 0.8, "abilities": {"0": "Swift Swim", "H": "Sniper"}, "nfe": true}, "Seadra": {"types": ["Water"], "bs": {"hp": 55, "at": 65, "df": 95, "sa": 95, "sd": 45, "sp": 85}, "weightkg": 2.5, "abilities": {"0": "Poison Point", "H": "Sniper"}, "nfe": true}, "Kingdra": {"types": ["Water", "Dragon"], "bs": {"hp": 75, "at": 95, "df": 95, "sa": 95, "sd": 95, "sp": 85}, "weightkg": 15.2, "abilities": {"0": "Swift Swim", "H": "Sniper"}}, "Staryu": {"types": ["Water"], "bs": {"hp": 30, "at": 45, "df": 55, "sa": 70, "sd": 55, "sp": 85}, "weightkg": 3.5, "abilities": {"0": "Illuminate", "H": "Analytic"}, "nfe": true}, "Starmie": {"types": ["Water", "Psychic"], "bs": {"hp": 60, "at": 75, "df": 85, "sa": 100, "sd": 85, "sp": 115}, "weightkg": 8.0, "abilities": {"0": "Illuminate", "H": "Analytic"}}, "Starmie-Mega": {"types": ["Water", "Psychic"], "bs": {"hp": 60, "at": 100, "df": 105, "sa": 130, "sd": 105, "sp": 120}, "weightkg": 8.0, "abilities": {"0": "Pure Power"}, "baseSpecies": "Starmie"}, "Mime Jr.": {"types": ["Psychic", "Fairy"], "bs": {"hp": 20, "at": 25, "df": 45, "sa": 70, "sd": 90, "sp": 60}, "weightkg": 1.3, "abilities": {"0": "Soundproof", "1": "Filter", "H": "Technician"}, "nfe": true}, "Mr. Mime": {"types": ["Psychic", "Fairy"], "bs": {"hp": 40, "at": 45, "df": 65, "sa": 100, "sd": 120, "sp": 90}, "weightkg": 5.5, "abilities": {"0": "Soundproof", "1": "Filter", "H": "Technician"}}, "Mr. Mime-Galar": {"types": ["Ice", "Psychic"], "bs": {"hp": 50, "at": 65, "df": 65, "sa": 90, "sd": 90, "sp": 100}, "weightkg": 5.7, "abilities": {"0": "Screen Cleaner", "1": "Inner Focus", "H": "Vital Spirit"}, "nfe": true}, "Mr. Rime": {"types": ["Ice", "Psychic"], "bs": {"hp": 80, "at": 85, "df": 75, "sa": 110, "sd": 100, "sp": 70}, "weightkg": 5.8, "abilities": {"0": "Screen Cleaner", "1": "Ice Body", "H": "Tangled Feet"}}, "Scyther": {"types": ["Bug", "Flying"], "bs": {"hp": 70, "at": 110, "df": 80, "sa": 55, "sd": 80, "sp": 105}, "weightkg": 5.6, "abilities": {"0": "Swarm", "1": "Technician", "H": "Steadfast"}, "nfe": true}, "Scizor": {"types": ["Bug", "Steel"], "bs": {"hp": 70, "at": 130, "df": 100, "sa": 55, "sd": 80, "sp": 65}, "weightkg": 11.8, "abilities": {"0": "Technician", "H": "Light Metal"}}, "Scizor-Mega": {"types": ["Bug", "Steel"], "bs": {"hp": 70, "at": 150, "df": 140, "sa": 65, "sd": 100, "sp": 75}, "weightkg": 12.5, "abilities": {"0": "Technician"}, "baseSpecies": "Scizor"}, "Kleavor": {"types": ["Bug", "Rock"], "bs": {"hp": 70, "at": 135, "df": 95, "sa": 45, "sd": 70, "sp": 85}, "weightkg": 8.9, "abilities": {"0": "Sharpness", "H": "Sheer Force"}}, "Elekid": {"types": ["Electric"], "bs": {"hp": 45, "at": 63, "df": 37, "sa": 65, "sd": 55, "sp": 95}, "weightkg": 2.4, "abilities": {"0": "Vital Spirit", "H": "Static"}, "nfe": true}, "Electabuzz": {"types": ["Electric"], "bs": {"hp": 65, "at": 83, "df": 57, "sa": 95, "sd": 85, "sp": 105}, "weightkg": 3.0, "abilities": {"0": "Vital Spirit", "H": "Static"}, "nfe": true}, "Electivire": {"types": ["Electric"], "bs": {"hp": 75, "at": 123, "df": 67, "sa": 95, "sd": 85, "sp": 95}, "weightkg": 13.9, "abilities": {"0": "Motor Drive", "H": "Vital Spirit"}}, "Magby": {"types": ["Fire"], "bs": {"hp": 45, "at": 75, "df": 37, "sa": 70, "sd": 55, "sp": 83}, "weightkg": 2.1, "abilities": {"0": "Vital Spirit", "H": "Flame Body"}, "nfe": true}, "Magmar": {"types": ["Fire"], "bs": {"hp": 65, "at": 95, "df": 57, "sa": 100, "sd": 85, "sp": 93}, "weightkg": 4.5, "abilities": {"0": "Vital Spirit", "H": "Flame Body"}, "nfe": true}, "Magmortar": {"types": ["Fire"], "bs": {"hp": 75, "at": 95, "df": 67, "sa": 125, "sd": 95, "sp": 83}, "weightkg": 6.8, "abilities": {"0": "Vital Spirit", "H": "Flame Body"}}, "Pinsir": {"types": ["Bug"], "bs": {"hp": 65, "at": 125, "df": 100, "sa": 55, "sd": 70, "sp": 85}, "weightkg": 5.5, "abilities": {"0": "Moxie", "1": "Mold Breaker", "H": "Hyper Cutter"}}, "Pinsir-Mega": {"types": ["Bug", "Flying"], "bs": {"hp": 65, "at": 155, "df": 120, "sa": 65, "sd": 90, "sp": 105}, "weightkg": 5.9, "abilities": {"0": "Aerilate"}, "baseSpecies": "Pinsir"}, "Tauros": {"types": ["Normal"], "bs": {"hp": 75, "at": 100, "df": 95, "sa": 40, "sd": 70, "sp": 110}, "weightkg": 8.8, "abilities": {"0": "Intimidate", "1": "Sheer Force", "H": "Anger Point"}}, "Tauros-Paldea-Combat": {"types": ["Fighting"], "bs": {"hp": 75, "at": 110, "df": 105, "sa": 30, "sd": 70, "sp": 100}, "weightkg": 11.5, "abilities": {"0": "Intimidate", "H": "Cud Chew"}}, "Tauros-Paldea-Blaze": {"types": ["Fighting", "Fire"], "bs": {"hp": 75, "at": 110, "df": 105, "sa": 30, "sd": 70, "sp": 100}, "weightkg": 8.5, "abilities": {"0": "Intimidate", "H": "Cud Chew"}}, "Tauros-Paldea-Aqua": {"types": ["Fighting", "Water"], "bs": {"hp": 75, "at": 110, "df": 105, "sa": 30, "sd": 70, "sp": 100}, "weightkg": 11.0, "abilities": {"0": "Intimidate", "H": "Cud Chew"}}, "Magikarp": {"types": ["Water"], "bs": {"hp": 20, "at": 10, "df": 55, "sa": 15, "sd": 20, "sp": 80}, "weightkg": 1.0, "abilities": {"0": "Swift Swim", "H": "Rattled"}, "nfe": true}, "Gyarados": {"types": ["Water", "Flying"], "bs": {"hp": 95, "at": 125, "df": 79, "sa": 60, "sd": 100, "sp": 81}, "weightkg": 23.5, "abilities": {"0": "Intimidate", "H": "Moxie"}}, "Gyarados-Mega": {"types": ["Water", "Dark"], "bs": {"hp": 95, "at": 155, "df": 109, "sa": 70, "sd": 130, "sp": 81}, "weightkg": 30.5, "abilities": {"0": "Mold Breaker"}, "baseSpecies": "Gyarados"}, "Lapras": {"types": ["Water", "Ice"], "bs": {"hp": 130, "at": 85, "df": 80, "sa": 85, "sd": 95, "sp": 60}, "weightkg": 22.0, "abilities": {"0": "Shell Armor", "H": "Water Absorb"}}, "Lapras-Mega": {"types": ["Water", "Ice"], "bs": {"hp": 130, "at": 85, "df": 105, "sa": 130, "sd": 120, "sp": 60}, "weightkg": 1.0, "abilities": {"0": "Arctic Aura", "1": "Arctic Aura", "H": "Arctic Aura"}, "baseSpecies": "Lapras"}, "Ditto": {"types": ["Normal"], "bs": {"hp": 48, "at": 48, "df": 48, "sa": 48, "sd": 48, "sp": 48}, "weightkg": 0.4, "abilities": {"0": "Imposter", "H": "Limber"}}, "Eevee": {"types": ["Normal"], "bs": {"hp": 55, "at": 55, "df": 50, "sa": 45, "sd": 65, "sp": 55}, "weightkg": 0.7, "abilities": {"0": "Run Away", "1": "Adaptability", "H": "Anticipation"}, "nfe": true}, "Eevee-Gmax": {"types": ["Normal"], "bs": {"hp": 55, "at": 55, "df": 50, "sa": 45, "sd": 65, "sp": 55}, "weightkg": 1.0, "abilities": {"0": "Run Away", "1": "Adaptability", "H": "Anticipation"}}, "Eevee-Starter": {"types": ["Normal"], "bs": {"hp": 65, "at": 75, "df": 70, "sa": 65, "sd": 85, "sp": 75}, "weightkg": 0.7, "abilities": {"0": "Run Away", "1": "Adaptability", "H": "Anticipation"}}, "Vaporeon": {"types": ["Water"], "bs": {"hp": 130, "at": 65, "df": 60, "sa": 110, "sd": 95, "sp": 65}, "weightkg": 2.9, "abilities": {"0": "Hydration", "H": "Water Absorb"}}, "Jolteon": {"types": ["Electric"], "bs": {"hp": 65, "at": 65, "df": 60, "sa": 110, "sd": 95, "sp": 130}, "weightkg": 2.5, "abilities": {"0": "Quick Feet", "H": "Volt Absorb"}}, "Flareon": {"types": ["Fire"], "bs": {"hp": 65, "at": 130, "df": 60, "sa": 95, "sd": 110, "sp": 65}, "weightkg": 2.5, "abilities": {"0": "Guts", "H": "Flash Fire"}}, "Espeon": {"types": ["Psychic"], "bs": {"hp": 65, "at": 65, "df": 60, "sa": 130, "sd": 95, "sp": 110}, "weightkg": 2.6, "abilities": {"0": "Inner Focus", "H": "Magic Bounce"}}, "Umbreon": {"types": ["Dark"], "bs": {"hp": 95, "at": 65, "df": 110, "sa": 60, "sd": 130, "sp": 65}, "weightkg": 2.7, "abilities": {"0": "Inner Focus", "H": "Fur Coat"}}, "Leafeon": {"types": ["Grass"], "bs": {"hp": 65, "at": 110, "df": 130, "sa": 60, "sd": 65, "sp": 95}, "weightkg": 2.5, "abilities": {"0": "Leaf Guard", "H": "Chlorophyll"}}, "Glaceon": {"types": ["Ice"], "bs": {"hp": 65, "at": 60, "df": 110, "sa": 130, "sd": 95, "sp": 65}, "weightkg": 2.6, "abilities": {"0": "Ice Body", "H": "Snow Cloak"}}, "Sylveon": {"types": ["Fairy"], "bs": {"hp": 95, "at": 65, "df": 65, "sa": 110, "sd": 130, "sp": 60}, "weightkg": 2.4, "abilities": {"0": "Pixilate", "H": "Cute Charm"}}, "Porygon": {"types": ["Normal"], "bs": {"hp": 65, "at": 60, "df": 70, "sa": 85, "sd": 75, "sp": 40}, "weightkg": 3.6, "abilities": {"0": "Trace", "1": "Download", "H": "Analytic"}, "nfe": true}, "Porygon2": {"types": ["Normal"], "bs": {"hp": 85, "at": 80, "df": 90, "sa": 105, "sd": 95, "sp": 60}, "weightkg": 3.2, "abilities": {"0": "Trace", "1": "Download", "H": "Analytic"}, "nfe": true}, "Porygon-Z": {"types": ["Normal"], "bs": {"hp": 85, "at": 80, "df": 70, "sa": 135, "sd": 75, "sp": 90}, "weightkg": 3.4, "abilities": {"0": "Adaptability", "1": "Download", "H": "Analytic"}}, "Omanyte": {"types": ["Rock", "Water"], "bs": {"hp": 35, "at": 40, "df": 100, "sa": 90, "sd": 55, "sp": 35}, "weightkg": 0.8, "abilities": {"0": "Shell Armor", "H": "Weak Armor"}, "nfe": true}, "Omastar": {"types": ["Rock", "Water"], "bs": {"hp": 70, "at": 60, "df": 125, "sa": 115, "sd": 70, "sp": 55}, "weightkg": 3.5, "abilities": {"0": "Shell Armor", "H": "Weak Armor"}}, "Kabuto": {"types": ["Rock", "Water"], "bs": {"hp": 30, "at": 80, "df": 90, "sa": 55, "sd": 45, "sp": 55}, "weightkg": 1.1, "abilities": {"0": "Shell Armor", "H": "Weak Armor"}, "nfe": true}, "Kabutops": {"types": ["Rock", "Water"], "bs": {"hp": 60, "at": 115, "df": 105, "sa": 65, "sd": 70, "sp": 80}, "weightkg": 4.0, "abilities": {"0": "Shell Armor", "H": "Weak Armor"}}, "Aerodactyl": {"types": ["Rock", "Flying"], "bs": {"hp": 80, "at": 105, "df": 65, "sa": 60, "sd": 75, "sp": 130}, "weightkg": 5.9, "abilities": {"0": "Unnerve", "H": "Rock Head"}}, "Aerodactyl-Mega": {"types": ["Rock", "Flying"], "bs": {"hp": 80, "at": 135, "df": 85, "sa": 70, "sd": 95, "sp": 150}, "weightkg": 7.9, "abilities": {"0": "Tough Claws"}, "baseSpecies": "Aerodactyl"}, "Munchlax": {"types": ["Normal"], "bs": {"hp": 135, "at": 85, "df": 40, "sa": 40, "sd": 85, "sp": 5}, "weightkg": 10.5, "abilities": {"0": "Gluttony", "1": "Thick Fat", "H": "Immunity"}, "nfe": true}, "Snorlax": {"types": ["Normal"], "bs": {"hp": 160, "at": 110, "df": 65, "sa": 65, "sd": 110, "sp": 30}, "weightkg": 46.0, "abilities": {"0": "Gluttony", "1": "Thick Fat", "H": "Immunity"}}, "Snorlax-Mega": {"types": ["Normal", "Grass"], "bs": {"hp": 160, "at": 130, "df": 95, "sa": 95, "sd": 130, "sp": 30}, "weightkg": 1.0, "abilities": {"0": "Thick Fat", "1": "Thick Fat", "H": "Thick Fat"}, "baseSpecies": "Snorlax"}, "Articuno": {"types": ["Ice", "Flying"], "bs": {"hp": 90, "at": 85, "df": 100, "sa": 95, "sd": 125, "sp": 85}, "weightkg": 5.5, "abilities": {"0": "Pressure", "H": "Snow Cloak"}}, "Articuno-Galar": {"types": ["Psychic", "Flying"], "bs": {"hp": 90, "at": 85, "df": 85, "sa": 125, "sd": 100, "sp": 95}, "weightkg": 5.1, "abilities": {"0": "Serene Grace", "1": "Competitive"}}, "Zapdos": {"types": ["Electric", "Flying"], "bs": {"hp": 90, "at": 90, "df": 85, "sa": 125, "sd": 90, "sp": 100}, "weightkg": 5.3, "abilities": {"0": "Pressure", "H": "Static"}}, "Zapdos-Galar": {"types": ["Fighting", "Flying"], "bs": {"hp": 90, "at": 125, "df": 90, "sa": 85, "sd": 90, "sp": 100}, "weightkg": 5.8, "abilities": {"0": "Limber", "1": "Defiant"}}, "Moltres": {"types": ["Fire", "Flying"], "bs": {"hp": 90, "at": 100, "df": 90, "sa": 125, "sd": 85, "sp": 90}, "weightkg": 6.0, "abilities": {"0": "Pressure", "H": "Flame Body"}}, "Moltres-Galar": {"types": ["Dark", "Flying"], "bs": {"hp": 90, "at": 85, "df": 90, "sa": 100, "sd": 125, "sp": 90}, "weightkg": 6.6, "abilities": {"0": "Unnerve", "H": "Berserk"}}, "Dratini": {"types": ["Dragon"], "bs": {"hp": 41, "at": 64, "df": 45, "sa": 50, "sd": 50, "sp": 50}, "weightkg": 0.3, "abilities": {"0": "Shed Skin", "H": "Marvel Scale"}, "nfe": true}, "Dragonair": {"types": ["Dragon"], "bs": {"hp": 61, "at": 84, "df": 65, "sa": 70, "sd": 70, "sp": 70}, "weightkg": 1.6, "abilities": {"0": "Shed Skin", "H": "Marvel Scale"}, "nfe": true}, "Dragonite": {"types": ["Dragon", "Flying"], "bs": {"hp": 91, "at": 134, "df": 95, "sa": 100, "sd": 100, "sp": 80}, "weightkg": 21.0, "abilities": {"0": "Multiscale", "1": "Inner Focus", "H": "Inner Focus"}}, "Dragonite-Mega": {"types": ["Dragon", "Flying"], "bs": {"hp": 91, "at": 124, "df": 115, "sa": 145, "sd": 125, "sp": 100}, "weightkg": 29.0, "abilities": {"0": "No Guard"}, "baseSpecies": "Dragonite"}, "Mewtwo": {"types": ["Psychic"], "bs": {"hp": 106, "at": 110, "df": 90, "sa": 154, "sd": 90, "sp": 130}, "weightkg": 12.2, "abilities": {"0": "Pressure", "H": "Unnerve"}}, "Mewtwo-Mega-X": {"types": ["Psychic", "Fighting"], "bs": {"hp": 106, "at": 190, "df": 100, "sa": 154, "sd": 100, "sp": 130}, "weightkg": 12.7, "abilities": {"0": "Steadfast"}, "baseSpecies": "Mewtwo"}, "Mewtwo-Mega-Y": {"types": ["Psychic"], "bs": {"hp": 106, "at": 150, "df": 70, "sa": 194, "sd": 120, "sp": 140}, "weightkg": 3.3, "abilities": {"0": "Insomnia"}, "baseSpecies": "Mewtwo"}, "Mew": {"types": ["Psychic"], "bs": {"hp": 100, "at": 100, "df": 100, "sa": 100, "sd": 100, "sp": 100}, "weightkg": 0.4, "abilities": {"0": "Limber", "H": "Synchronize"}}, "Chikorita": {"types": ["Grass"], "bs": {"hp": 45, "at": 49, "df": 65, "sa": 49, "sd": 65, "sp": 45}, "weightkg": 0.6, "abilities": {"0": "Leaf Guard", "H": "Overgrow"}, "nfe": true}, "Bayleef": {"types": ["Grass"], "bs": {"hp": 60, "at": 62, "df": 80, "sa": 63, "sd": 80, "sp": 60}, "weightkg": 1.6, "abilities": {"0": "Leaf Guard", "H": "Overgrow"}, "nfe": true}, "Meganium": {"types": ["Grass"], "bs": {"hp": 80, "at": 82, "df": 100, "sa": 83, "sd": 100, "sp": 80}, "weightkg": 10.1, "abilities": {"0": "Leaf Guard", "H": "Overgrow"}}, "Meganium-Mega": {"types": ["Grass", "Fairy"], "bs": {"hp": 80, "at": 92, "df": 115, "sa": 143, "sd": 115, "sp": 80}, "weightkg": 20.1, "abilities": {"0": "Flower Veil", "H": "Triage"}, "baseSpecies": "Meganium"}, "Cyndaquil": {"types": ["Fire"], "bs": {"hp": 39, "at": 52, "df": 43, "sa": 60, "sd": 50, "sp": 65}, "weightkg": 0.8, "abilities": {"0": "Blaze", "H": "Flash Fire"}, "nfe": true}, "Quilava": {"types": ["Fire"], "bs": {"hp": 58, "at": 64, "df": 58, "sa": 80, "sd": 65, "sp": 80}, "weightkg": 1.9, "abilities": {"0": "Blaze", "H": "Flash Fire"}, "nfe": true}, "Typhlosion": {"types": ["Fire"], "bs": {"hp": 78, "at": 84, "df": 78, "sa": 109, "sd": 85, "sp": 100}, "weightkg": 8.0, "abilities": {"0": "Blaze", "H": "Flash Fire"}}, "Typhlosion-Mega": {"types": ["Fire", "Ground"], "bs": {"hp": 78, "at": 94, "df": 98, "sa": 149, "sd": 95, "sp": 120}, "weightkg": 8.9, "abilities": {"0": "Drought", "1": "Drought", "H": "Drought"}, "baseSpecies": "Typhlosion"}, "Typhlosion-Hisui": {"types": ["Fire", "Ghost"], "bs": {"hp": 73, "at": 84, "df": 78, "sa": 119, "sd": 85, "sp": 95}, "weightkg": 7.0, "abilities": {"0": "Blaze", "H": "Flash Fire"}}, "Totodile": {"types": ["Water"], "bs": {"hp": 50, "at": 65, "df": 64, "sa": 44, "sd": 48, "sp": 43}, "weightkg": 0.9, "abilities": {"0": "Sheer Force", "H": "Torrent"}, "nfe": true}, "Croconaw": {"types": ["Water"], "bs": {"hp": 65, "at": 80, "df": 80, "sa": 59, "sd": 63, "sp": 58}, "weightkg": 2.5, "abilities": {"0": "Sheer Force", "H": "Torrent"}, "nfe": true}, "Feraligatr": {"types": ["Water"], "bs": {"hp": 85, "at": 105, "df": 100, "sa": 79, "sd": 83, "sp": 78}, "weightkg": 8.9, "abilities": {"0": "Sheer Force", "H": "Torrent"}}, "Feraligatr-Mega": {"types": ["Water", "Dragon"], "bs": {"hp": 85, "at": 160, "df": 125, "sa": 89, "sd": 93, "sp": 78}, "weightkg": 10.9, "abilities": {"0": "Dragon's Maw", "H": "Sheer Force"}, "baseSpecies": "Feraligatr"}, "Hoothoot": {"types": ["Normal", "Flying"], "bs": {"hp": 60, "at": 30, "df": 30, "sa": 36, "sd": 56, "sp": 50}, "weightkg": 2.1, "abilities": {"0": "Insomnia", "1": "Tinted Lens", "H": "Keen Eye"}, "nfe": true}, "Noctowl": {"types": ["Normal", "Flying"], "bs": {"hp": 100, "at": 50, "df": 50, "sa": 86, "sd": 96, "sp": 70}, "weightkg": 4.1, "abilities": {"0": "Insomnia", "1": "Tinted Lens", "H": "Keen Eye"}}, "Spinarak": {"types": ["Bug", "Poison"], "bs": {"hp": 40, "at": 60, "df": 40, "sa": 40, "sd": 40, "sp": 30}, "weightkg": 0.8, "abilities": {"0": "Swarm", "1": "Insomnia", "H": "Sniper"}, "nfe": true}, "Ariados": {"types": ["Bug", "Poison"], "bs": {"hp": 70, "at": 90, "df": 70, "sa": 60, "sd": 70, "sp": 40}, "weightkg": 3.4, "abilities": {"0": "Swarm", "1": "Insomnia", "H": "Sniper"}}, "Chinchou": {"types": ["Water", "Electric"], "bs": {"hp": 75, "at": 38, "df": 38, "sa": 56, "sd": 56, "sp": 67}, "weightkg": 1.2, "abilities": {"0": "Volt Absorb", "1": "Illuminate", "H": "Water Absorb"}, "nfe": true}, "Lanturn": {"types": ["Water", "Electric"], "bs": {"hp": 125, "at": 58, "df": 58, "sa": 76, "sd": 76, "sp": 67}, "weightkg": 2.2, "abilities": {"0": "Volt Absorb", "1": "Illuminate", "H": "Water Absorb"}}, "Togepi": {"types": ["Fairy"], "bs": {"hp": 35, "at": 20, "df": 65, "sa": 40, "sd": 65, "sp": 20}, "weightkg": 0.1, "abilities": {"0": "Hustle", "1": "Serene Grace", "H": "Super Luck"}, "nfe": true}, "Togetic": {"types": ["Fairy", "Flying"], "bs": {"hp": 55, "at": 40, "df": 85, "sa": 80, "sd": 105, "sp": 40}, "weightkg": 0.3, "abilities": {"0": "Hustle", "1": "Serene Grace", "H": "Super Luck"}, "nfe": true}, "Togekiss": {"types": ["Fairy", "Flying"], "bs": {"hp": 85, "at": 50, "df": 95, "sa": 120, "sd": 115, "sp": 80}, "weightkg": 3.8, "abilities": {"0": "Serene Grace", "1": "Super Luck", "H": "Super Luck"}}, "Natu": {"types": ["Psychic", "Flying"], "bs": {"hp": 40, "at": 50, "df": 45, "sa": 70, "sd": 45, "sp": 70}, "weightkg": 0.2, "abilities": {"0": "Magic Bounce", "H": "Synchronize"}, "nfe": true}, "Xatu": {"types": ["Psychic", "Flying"], "bs": {"hp": 65, "at": 75, "df": 70, "sa": 95, "sd": 70, "sp": 95}, "weightkg": 1.5, "abilities": {"0": "Magic Bounce", "H": "Synchronize"}}, "Mareep": {"types": ["Electric"], "bs": {"hp": 55, "at": 40, "df": 40, "sa": 65, "sd": 45, "sp": 35}, "weightkg": 0.8, "abilities": {"0": "Illuminate", "H": "Static"}, "nfe": true}, "Flaaffy": {"types": ["Electric"], "bs": {"hp": 70, "at": 55, "df": 55, "sa": 80, "sd": 60, "sp": 45}, "weightkg": 1.3, "abilities": {"0": "Illuminate", "H": "Static"}, "nfe": true}, "Ampharos": {"types": ["Electric"], "bs": {"hp": 90, "at": 75, "df": 85, "sa": 115, "sd": 90, "sp": 55}, "weightkg": 6.2, "abilities": {"0": "Illuminate", "H": "Static"}}, "Ampharos-Mega": {"types": ["Electric", "Dragon"], "bs": {"hp": 90, "at": 95, "df": 105, "sa": 165, "sd": 110, "sp": 45}, "weightkg": 6.2, "abilities": {"0": "Mold Breaker"}, "baseSpecies": "Ampharos"}, "Azurill": {"types": ["Normal", "Fairy"], "bs": {"hp": 50, "at": 20, "df": 40, "sa": 20, "sd": 40, "sp": 20}, "weightkg": 0.2, "abilities": {"0": "Huge Power", "H": "Sap Sipper"}, "nfe": true}, "Marill": {"types": ["Water", "Fairy"], "bs": {"hp": 70, "at": 20, "df": 50, "sa": 20, "sd": 50, "sp": 40}, "weightkg": 0.8, "abilities": {"0": "Huge Power", "H": "Sap Sipper"}, "nfe": true}, "Azumarill": {"types": ["Water", "Fairy"], "bs": {"hp": 100, "at": 50, "df": 80, "sa": 60, "sd": 80, "sp": 50}, "weightkg": 2.9, "abilities": {"0": "Huge Power", "H": "Sap Sipper"}}, "Bonsly": {"types": ["Rock"], "bs": {"hp": 50, "at": 80, "df": 95, "sa": 10, "sd": 45, "sp": 10}, "weightkg": 1.5, "abilities": {"0": "Sturdy", "1": "Rock Head", "H": "Rattled"}, "nfe": true}, "Sudowoodo": {"types": ["Rock"], "bs": {"hp": 70, "at": 100, "df": 115, "sa": 30, "sd": 65, "sp": 30}, "weightkg": 3.8, "abilities": {"0": "Sturdy", "1": "Rock Head", "H": "Rattled"}}, "Hoppip": {"types": ["Grass", "Flying"], "bs": {"hp": 35, "at": 35, "df": 40, "sa": 35, "sd": 55, "sp": 50}, "weightkg": 0.1, "abilities": {"0": "Chlorophyll", "1": "Leaf Guard", "H": "Infiltrator"}, "nfe": true}, "Skiploom": {"types": ["Grass", "Flying"], "bs": {"hp": 55, "at": 45, "df": 50, "sa": 45, "sd": 65, "sp": 80}, "weightkg": 0.1, "abilities": {"0": "Chlorophyll", "1": "Leaf Guard", "H": "Infiltrator"}, "nfe": true}, "Jumpluff": {"types": ["Grass", "Flying"], "bs": {"hp": 75, "at": 55, "df": 70, "sa": 55, "sd": 95, "sp": 110}, "weightkg": 0.3, "abilities": {"0": "Chlorophyll", "1": "Leaf Guard", "H": "Infiltrator"}}, "Aipom": {"types": ["Normal"], "bs": {"hp": 55, "at": 70, "df": 55, "sa": 40, "sd": 55, "sp": 85}, "weightkg": 1.1, "abilities": {"0": "Technician", "1": "Skill Link", "H": "Run Away"}, "nfe": true}, "Ambipom": {"types": ["Normal"], "bs": {"hp": 75, "at": 100, "df": 66, "sa": 60, "sd": 66, "sp": 115}, "weightkg": 2.0, "abilities": {"0": "Technician", "1": "Skill Link", "H": "Skill Link"}}, "Yanma": {"types": ["Bug", "Flying"], "bs": {"hp": 65, "at": 65, "df": 45, "sa": 75, "sd": 45, "sp": 95}, "weightkg": 3.8, "abilities": {"0": "Speed Boost", "1": "Compound Eyes", "H": "Frisk"}, "nfe": true}, "Yanmega": {"types": ["Bug", "Flying"], "bs": {"hp": 86, "at": 76, "df": 86, "sa": 116, "sd": 56, "sp": 95}, "weightkg": 5.2, "abilities": {"0": "Speed Boost", "1": "Tinted Lens", "H": "Frisk"}}, "Wooper": {"types": ["Water", "Ground"], "bs": {"hp": 55, "at": 45, "df": 45, "sa": 25, "sd": 25, "sp": 15}, "weightkg": 0.8, "abilities": {"0": "Unaware", "H": "Water Absorb"}, "nfe": true}, "Quagsire": {"types": ["Water", "Ground"], "bs": {"hp": 95, "at": 85, "df": 85, "sa": 65, "sd": 65, "sp": 35}, "weightkg": 7.5, "abilities": {"0": "Unaware", "H": "Water Absorb"}}, "Wooper-Paldea": {"types": ["Poison", "Ground"], "bs": {"hp": 55, "at": 45, "df": 45, "sa": 25, "sd": 25, "sp": 15}, "weightkg": 1.1, "abilities": {"0": "Unaware", "H": "Water Absorb"}, "nfe": true}, "Clodsire": {"types": ["Poison", "Ground"], "bs": {"hp": 130, "at": 75, "df": 60, "sa": 45, "sd": 100, "sp": 20}, "weightkg": 22.3, "abilities": {"0": "Unaware", "H": "Water Absorb"}}, "Murkrow": {"types": ["Dark", "Flying"], "bs": {"hp": 60, "at": 85, "df": 42, "sa": 85, "sd": 42, "sp": 91}, "weightkg": 0.2, "abilities": {"0": "Prankster", "H": "Super Luck"}, "nfe": true}, "Honchkrow": {"types": ["Dark", "Flying"], "bs": {"hp": 100, "at": 125, "df": 52, "sa": 105, "sd": 52, "sp": 71}, "weightkg": 2.7, "abilities": {"0": "Moxie", "H": "Super Luck"}}, "Misdreavus": {"types": ["Ghost"], "bs": {"hp": 60, "at": 60, "df": 60, "sa": 85, "sd": 85, "sp": 85}, "weightkg": 0.1, "abilities": {"0": "Levitate"}, "nfe": true}, "Mismagius": {"types": ["Ghost"], "bs": {"hp": 60, "at": 60, "df": 60, "sa": 105, "sd": 105, "sp": 105}, "weightkg": 0.4, "abilities": {"0": "Levitate"}}, "Unown": {"types": ["Psychic"], "bs": {"hp": 48, "at": 72, "df": 48, "sa": 72, "sd": 48, "sp": 48}, "weightkg": 0.5, "abilities": {"0": "Levitate"}}, "Wynaut": {"types": ["Psychic"], "bs": {"hp": 95, "at": 23, "df": 48, "sa": 23, "sd": 48, "sp": 23}, "weightkg": 1.4, "abilities": {"0": "Shadow Tag", "H": "Telepathy"}, "nfe": true}, "Wobbuffet": {"types": ["Psychic"], "bs": {"hp": 190, "at": 33, "df": 58, "sa": 33, "sd": 58, "sp": 33}, "weightkg": 2.9, "abilities": {"0": "Shadow Tag", "H": "Telepathy"}}, "Girafarig": {"types": ["Normal", "Psychic"], "bs": {"hp": 70, "at": 80, "df": 65, "sa": 90, "sd": 65, "sp": 85}, "weightkg": 4.2, "abilities": {"0": "Inner Focus", "1": "Early Bird", "H": "Sap Sipper"}, "nfe": true}, "Farigiraf": {"types": ["Normal", "Psychic"], "bs": {"hp": 120, "at": 90, "df": 70, "sa": 110, "sd": 70, "sp": 60}, "weightkg": 16.0, "abilities": {"0": "Cud Chew", "1": "Armor Tail", "H": "Sap Sipper"}}, "Pineco": {"types": ["Bug"], "bs": {"hp": 50, "at": 65, "df": 90, "sa": 35, "sd": 35, "sp": 15}, "weightkg": 0.7, "abilities": {"0": "Sturdy", "H": "Overcoat"}, "nfe": true}, "Forretress": {"types": ["Bug", "Steel"], "bs": {"hp": 75, "at": 90, "df": 140, "sa": 60, "sd": 60, "sp": 40}, "weightkg": 12.6, "abilities": {"0": "Sturdy", "H": "Overcoat"}}, "Dunsparce": {"types": ["Normal"], "bs": {"hp": 100, "at": 70, "df": 70, "sa": 65, "sd": 65, "sp": 45}, "weightkg": 1.4, "abilities": {"0": "Serene Grace", "H": "Rattled"}, "nfe": true}, "Dudunsparce": {"types": ["Normal"], "bs": {"hp": 125, "at": 100, "df": 80, "sa": 85, "sd": 75, "sp": 55}, "weightkg": 3.9, "abilities": {"0": "Serene Grace", "H": "Rattled"}}, "Dudunsparce-Three-Segment": {"types": ["Normal"], "bs": {"hp": 125, "at": 100, "df": 80, "sa": 85, "sd": 75, "sp": 55}, "weightkg": 4.7, "abilities": {"0": "Serene Grace", "H": "Rattled"}}, "Gligar": {"types": ["Ground", "Flying"], "bs": {"hp": 65, "at": 75, "df": 105, "sa": 35, "sd": 65, "sp": 85}, "weightkg": 6.5, "abilities": {"0": "Immunity", "H": "Hyper Cutter"}, "nfe": true}, "Gliscor": {"types": ["Ground", "Flying"], "bs": {"hp": 75, "at": 95, "df": 125, "sa": 45, "sd": 75, "sp": 95}, "weightkg": 4.2, "abilities": {"0": "Poison Heal", "H": "Hyper Cutter"}}, "Snubbull": {"types": ["Fairy"], "bs": {"hp": 60, "at": 80, "df": 50, "sa": 40, "sd": 40, "sp": 30}, "weightkg": 0.8, "abilities": {"0": "Intimidate", "H": "Rattled"}, "nfe": true}, "Granbull": {"types": ["Fairy"], "bs": {"hp": 90, "at": 120, "df": 75, "sa": 60, "sd": 60, "sp": 45}, "weightkg": 4.9, "abilities": {"0": "Intimidate", "H": "Quick Feet"}}, "Qwilfish": {"types": ["Water", "Poison"], "bs": {"hp": 65, "at": 95, "df": 85, "sa": 55, "sd": 55, "sp": 85}, "weightkg": 0.4, "abilities": {"0": "Intimidate", "H": "Swift Swim"}}, "Qwilfish-Hisui": {"types": ["Dark", "Poison"], "bs": {"hp": 65, "at": 95, "df": 85, "sa": 55, "sd": 55, "sp": 85}, "weightkg": 0.4, "abilities": {"0": "Intimidate", "1": "Swift Swim", "H": "Poison Point"}, "nfe": true}, "Overqwil": {"types": ["Dark", "Poison"], "bs": {"hp": 85, "at": 115, "df": 95, "sa": 65, "sd": 65, "sp": 85}, "weightkg": 6.0, "abilities": {"0": "Intimidate", "1": "Swift Swim", "H": "Poison Point"}}, "Shuckle": {"types": ["Bug", "Rock"], "bs": {"hp": 20, "at": 10, "df": 230, "sa": 10, "sd": 230, "sp": 5}, "weightkg": 2.0, "abilities": {"0": "Contrary", "1": "Gluttony", "H": "Sturdy"}}, "Heracross": {"types": ["Bug", "Fighting"], "bs": {"hp": 80, "at": 125, "df": 75, "sa": 40, "sd": 95, "sp": 85}, "weightkg": 5.4, "abilities": {"0": "Moxie", "1": "Guts", "H": "Swarm"}}, "Heracross-Mega": {"types": ["Bug", "Fighting"], "bs": {"hp": 80, "at": 185, "df": 115, "sa": 40, "sd": 105, "sp": 75}, "weightkg": 6.2, "abilities": {"0": "Skill Link"}, "baseSpecies": "Heracross"}, "Sneasel": {"types": ["Dark", "Ice"], "bs": {"hp": 55, "at": 95, "df": 55, "sa": 35, "sd": 75, "sp": 115}, "weightkg": 2.8, "abilities": {"0": "Inner Focus", "H": "Inner Focus"}, "nfe": true}, "Weavile": {"types": ["Dark", "Ice"], "bs": {"hp": 70, "at": 120, "df": 65, "sa": 45, "sd": 85, "sp": 125}, "weightkg": 3.4, "abilities": {"0": "Pressure", "H": "Pressure"}}, "Sneasel-Hisui": {"types": ["Fighting", "Poison"], "bs": {"hp": 55, "at": 95, "df": 55, "sa": 35, "sd": 75, "sp": 115}, "weightkg": 2.7, "abilities": {"0": "Unburden", "1": "Inner Focus", "H": "Poison Touch"}, "nfe": true}, "Sneasler": {"types": ["Fighting", "Poison"], "bs": {"hp": 80, "at": 130, "df": 60, "sa": 40, "sd": 80, "sp": 120}, "weightkg": 4.3, "abilities": {"0": "Unburden", "H": "Poison Touch"}}, "Teddiursa": {"types": ["Normal"], "bs": {"hp": 60, "at": 80, "df": 50, "sa": 50, "sd": 50, "sp": 40}, "weightkg": 0.9, "abilities": {"0": "Guts", "1": "Quick Feet", "H": "Unnerve"}, "nfe": true}, "Ursaring": {"types": ["Normal"], "bs": {"hp": 90, "at": 130, "df": 75, "sa": 75, "sd": 75, "sp": 55}, "weightkg": 12.6, "abilities": {"0": "Guts", "1": "Quick Feet", "H": "Unnerve"}, "nfe": true}, "Ursaluna": {"types": ["Ground", "Normal"], "bs": {"hp": 130, "at": 140, "df": 105, "sa": 45, "sd": 80, "sp": 50}, "weightkg": 29.0, "abilities": {"0": "Guts", "1": "Bulletproof", "H": "Unnerve"}}, "Ursaluna-Bloodmoon": {"types": ["Ground", "Normal"], "bs": {"hp": 113, "at": 70, "df": 120, "sa": 135, "sd": 65, "sp": 52}, "weightkg": 33.3, "abilities": {"0": "Mind's Eye"}}, "Slugma": {"types": ["Fire"], "bs": {"hp": 40, "at": 40, "df": 40, "sa": 70, "sd": 40, "sp": 20}, "weightkg": 3.5, "abilities": {"0": "Magma Armor", "H": "Weak Armor"}, "nfe": true}, "Magcargo": {"types": ["Fire", "Rock"], "bs": {"hp": 60, "at": 50, "df": 120, "sa": 90, "sd": 80, "sp": 30}, "weightkg": 5.5, "abilities": {"0": "Magma Armor", "H": "Weak Armor"}}, "Swinub": {"types": ["Ice", "Ground"], "bs": {"hp": 50, "at": 50, "df": 40, "sa": 30, "sd": 30, "sp": 50}, "weightkg": 0.7, "abilities": {"0": "Oblivious", "1": "Thick Fat", "H": "Snow Cloak"}, "nfe": true}, "Piloswine": {"types": ["Ice", "Ground"], "bs": {"hp": 100, "at": 100, "df": 80, "sa": 60, "sd": 60, "sp": 50}, "weightkg": 5.6, "abilities": {"0": "Oblivious", "1": "Thick Fat", "H": "Snow Cloak"}, "nfe": true}, "Mamoswine": {"types": ["Ice", "Ground"], "bs": {"hp": 110, "at": 130, "df": 80, "sa": 70, "sd": 60, "sp": 80}, "weightkg": 29.1, "abilities": {"0": "Oblivious", "1": "Thick Fat", "H": "Snow Cloak"}}, "Corsola": {"types": ["Water", "Rock"], "bs": {"hp": 65, "at": 55, "df": 95, "sa": 65, "sd": 95, "sp": 35}, "weightkg": 0.5, "abilities": {"0": "Regenerator", "H": "Hustle"}}, "Corsola-Galar": {"types": ["Ghost"], "bs": {"hp": 60, "at": 55, "df": 100, "sa": 65, "sd": 100, "sp": 30}, "weightkg": 0.1, "abilities": {"0": "Cursed Body", "H": "Weak Armor"}, "nfe": true}, "Cursola": {"types": ["Ghost"], "bs": {"hp": 60, "at": 95, "df": 50, "sa": 145, "sd": 130, "sp": 30}, "weightkg": 0.0, "abilities": {"0": "Perish Body", "H": "Weak Armor"}}, "Remoraid": {"types": ["Water"], "bs": {"hp": 35, "at": 65, "df": 35, "sa": 65, "sd": 35, "sp": 65}, "weightkg": 1.2, "abilities": {"0": "Hustle", "1": "Sniper", "H": "Moody"}, "nfe": true}, "Octillery": {"types": ["Water"], "bs": {"hp": 75, "at": 105, "df": 75, "sa": 105, "sd": 75, "sp": 45}, "weightkg": 2.9, "abilities": {"0": "Suction Cups", "1": "Sniper", "H": "Moody"}}, "Delibird": {"types": ["Ice", "Flying"], "bs": {"hp": 45, "at": 55, "df": 45, "sa": 65, "sd": 45, "sp": 75}, "weightkg": 1.6, "abilities": {"0": "Vital Spirit", "1": "Hustle", "H": "Insomnia"}}, "Mantyke": {"types": ["Water", "Flying"], "bs": {"hp": 45, "at": 20, "df": 50, "sa": 60, "sd": 120, "sp": 50}, "weightkg": 6.5, "abilities": {"0": "Swift Swim", "H": "Water Absorb"}, "nfe": true}, "Mantine": {"types": ["Water", "Flying"], "bs": {"hp": 85, "at": 40, "df": 70, "sa": 80, "sd": 140, "sp": 70}, "weightkg": 22.0, "abilities": {"0": "Swift Swim", "H": "Water Absorb"}}, "Skarmory": {"types": ["Steel", "Flying"], "bs": {"hp": 65, "at": 80, "df": 140, "sa": 40, "sd": 70, "sp": 70}, "weightkg": 5.0, "abilities": {"0": "Keen Eye", "1": "Sturdy", "H": "Weak Armor"}}, "Skarmory-Mega": {"types": ["Steel", "Flying"], "bs": {"hp": 65, "at": 140, "df": 110, "sa": 40, "sd": 100, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Tough Claws"}, "baseSpecies": "Skarmory"}, "Houndour": {"types": ["Dark", "Fire"], "bs": {"hp": 45, "at": 60, "df": 30, "sa": 80, "sd": 50, "sp": 65}, "weightkg": 1.1, "abilities": {"0": "Unnerve", "H": "Flash Fire"}, "nfe": true}, "Houndoom": {"types": ["Dark", "Fire"], "bs": {"hp": 75, "at": 90, "df": 50, "sa": 110, "sd": 80, "sp": 95}, "weightkg": 3.5, "abilities": {"0": "Unnerve", "H": "Flash Fire"}}, "Houndoom-Mega": {"types": ["Dark", "Fire"], "bs": {"hp": 75, "at": 90, "df": 90, "sa": 140, "sd": 90, "sp": 115}, "weightkg": 5.0, "abilities": {"0": "Solar Power"}, "baseSpecies": "Houndoom"}, "Phanpy": {"types": ["Ground"], "bs": {"hp": 90, "at": 60, "df": 60, "sa": 40, "sd": 40, "sp": 40}, "weightkg": 3.4, "abilities": {"0": "Sturdy", "H": "Sand Veil"}, "nfe": true}, "Donphan": {"types": ["Ground"], "bs": {"hp": 90, "at": 120, "df": 120, "sa": 60, "sd": 60, "sp": 50}, "weightkg": 12.0, "abilities": {"0": "Sturdy", "H": "Sand Veil"}}, "Stantler": {"types": ["Normal"], "bs": {"hp": 73, "at": 95, "df": 62, "sa": 85, "sd": 65, "sp": 85}, "weightkg": 7.1, "abilities": {"0": "Intimidate", "H": "Sap Sipper"}, "nfe": true}, "Wyrdeer": {"types": ["Normal", "Psychic"], "bs": {"hp": 103, "at": 105, "df": 72, "sa": 105, "sd": 75, "sp": 65}, "weightkg": 9.5, "abilities": {"0": "Intimidate", "H": "Sap Sipper"}}, "Miltank": {"types": ["Normal"], "bs": {"hp": 95, "at": 80, "df": 105, "sa": 40, "sd": 70, "sp": 100}, "weightkg": 7.5, "abilities": {"0": "Thick Fat", "1": "Scrappy", "H": "Sap Sipper"}}, "Raikou": {"types": ["Electric"], "bs": {"hp": 90, "at": 85, "df": 75, "sa": 115, "sd": 100, "sp": 115}, "weightkg": 17.8, "abilities": {"0": "Pressure", "H": "Inner Focus"}}, "Entei": {"types": ["Fire"], "bs": {"hp": 115, "at": 115, "df": 85, "sa": 90, "sd": 75, "sp": 100}, "weightkg": 19.8, "abilities": {"0": "Pressure", "H": "Inner Focus"}}, "Suicune": {"types": ["Water"], "bs": {"hp": 100, "at": 75, "df": 115, "sa": 90, "sd": 115, "sp": 85}, "weightkg": 18.7, "abilities": {"0": "Pressure", "H": "Inner Focus"}}, "Larvitar": {"types": ["Rock", "Ground"], "bs": {"hp": 50, "at": 64, "df": 50, "sa": 45, "sd": 50, "sp": 41}, "weightkg": 7.2, "abilities": {"0": "Guts", "H": "Sand Veil"}, "nfe": true}, "Pupitar": {"types": ["Rock", "Ground"], "bs": {"hp": 70, "at": 84, "df": 70, "sa": 65, "sd": 70, "sp": 51}, "weightkg": 15.2, "abilities": {"0": "Shed Skin"}, "nfe": true}, "Tyranitar": {"types": ["Rock", "Dark"], "bs": {"hp": 100, "at": 134, "df": 110, "sa": 95, "sd": 100, "sp": 61}, "weightkg": 20.2, "abilities": {"0": "Intimidate", "H": "Sand Stream"}}, "Tyranitar-Mega": {"types": ["Rock", "Dark"], "bs": {"hp": 100, "at": 164, "df": 150, "sa": 95, "sd": 120, "sp": 71}, "weightkg": 25.5, "abilities": {"0": "Battle Armor", "H": "Sand Stream"}, "baseSpecies": "Tyranitar"}, "Lugia": {"types": ["Psychic", "Flying"], "bs": {"hp": 106, "at": 90, "df": 130, "sa": 90, "sd": 154, "sp": 110}, "weightkg": 21.6, "abilities": {"0": "Pressure", "H": "Multiscale"}}, "Ho-Oh": {"types": ["Fire", "Flying"], "bs": {"hp": 106, "at": 130, "df": 90, "sa": 110, "sd": 154, "sp": 90}, "weightkg": 19.9, "abilities": {"0": "Pressure", "H": "Regenerator"}}, "Celebi": {"types": ["Psychic", "Grass"], "bs": {"hp": 100, "at": 100, "df": 100, "sa": 100, "sd": 100, "sp": 100}, "weightkg": 0.5, "abilities": {"0": "Natural Cure"}}, "Treecko": {"types": ["Grass"], "bs": {"hp": 40, "at": 45, "df": 35, "sa": 65, "sd": 55, "sp": 70}, "weightkg": 0.5, "abilities": {"0": "Overgrow", "H": "Unburden"}, "nfe": true}, "Grovyle": {"types": ["Grass"], "bs": {"hp": 50, "at": 65, "df": 45, "sa": 85, "sd": 65, "sp": 95}, "weightkg": 2.2, "abilities": {"0": "Overgrow", "H": "Unburden"}, "nfe": true}, "Sceptile": {"types": ["Grass"], "bs": {"hp": 70, "at": 85, "df": 65, "sa": 105, "sd": 85, "sp": 120}, "weightkg": 5.2, "abilities": {"0": "Overgrow", "H": "Unburden"}}, "Sceptile-Mega": {"types": ["Grass", "Dragon"], "bs": {"hp": 70, "at": 110, "df": 75, "sa": 145, "sd": 85, "sp": 145}, "weightkg": 5.5, "abilities": {"0": "Limber", "H": "Lightning Rod"}, "baseSpecies": "Sceptile"}, "Torchic": {"types": ["Fire"], "bs": {"hp": 45, "at": 60, "df": 40, "sa": 70, "sd": 50, "sp": 45}, "weightkg": 0.2, "abilities": {"0": "Speed Boost", "H": "Blaze"}, "nfe": true}, "Combusken": {"types": ["Fire", "Fighting"], "bs": {"hp": 60, "at": 85, "df": 60, "sa": 85, "sd": 60, "sp": 55}, "weightkg": 1.9, "abilities": {"0": "Speed Boost", "H": "Blaze"}, "nfe": true}, "Blaziken": {"types": ["Fire", "Fighting"], "bs": {"hp": 80, "at": 120, "df": 70, "sa": 110, "sd": 70, "sp": 80}, "weightkg": 5.2, "abilities": {"0": "Speed Boost", "H": "Blaze"}}, "Blaziken-Mega": {"types": ["Fire", "Fighting"], "bs": {"hp": 80, "at": 160, "df": 80, "sa": 130, "sd": 80, "sp": 100}, "weightkg": 5.2, "abilities": {"0": "Inner Focus", "H": "Speed Boost"}, "baseSpecies": "Blaziken"}, "Mudkip": {"types": ["Water"], "bs": {"hp": 50, "at": 70, "df": 50, "sa": 50, "sd": 50, "sp": 40}, "weightkg": 0.8, "abilities": {"0": "Torrent", "H": "Damp"}, "nfe": true}, "Marshtomp": {"types": ["Water", "Ground"], "bs": {"hp": 70, "at": 85, "df": 70, "sa": 60, "sd": 70, "sp": 50}, "weightkg": 2.8, "abilities": {"0": "Torrent", "H": "Damp"}, "nfe": true}, "Swampert": {"types": ["Water", "Ground"], "bs": {"hp": 100, "at": 110, "df": 90, "sa": 85, "sd": 90, "sp": 60}, "weightkg": 8.2, "abilities": {"0": "Torrent", "H": "Damp"}}, "Swampert-Mega": {"types": ["Water", "Ground"], "bs": {"hp": 100, "at": 150, "df": 110, "sa": 95, "sd": 110, "sp": 70}, "weightkg": 10.2, "abilities": {"0": "Swift Swim"}, "baseSpecies": "Swampert"}, "Zigzagoon": {"types": ["Normal"], "bs": {"hp": 38, "at": 30, "df": 41, "sa": 30, "sd": 41, "sp": 60}, "weightkg": 1.8, "abilities": {"0": "Gluttony", "H": "Quick Feet"}, "nfe": true}, "Linoone": {"types": ["Normal"], "bs": {"hp": 78, "at": 70, "df": 61, "sa": 50, "sd": 61, "sp": 100}, "weightkg": 3.2, "abilities": {"0": "Gluttony", "H": "Quick Feet"}}, "Zigzagoon-Galar": {"types": ["Dark", "Normal"], "bs": {"hp": 38, "at": 30, "df": 41, "sa": 30, "sd": 41, "sp": 60}, "weightkg": 1.8, "abilities": {"0": "Gluttony", "H": "Quick Feet"}, "nfe": true}, "Linoone-Galar": {"types": ["Dark", "Normal"], "bs": {"hp": 78, "at": 70, "df": 61, "sa": 50, "sd": 61, "sp": 100}, "weightkg": 3.2, "abilities": {"0": "Gluttony", "H": "Quick Feet"}, "nfe": true}, "Obstagoon": {"types": ["Dark", "Normal"], "bs": {"hp": 93, "at": 90, "df": 101, "sa": 60, "sd": 81, "sp": 95}, "weightkg": 4.6, "abilities": {"0": "Guts", "H": "Reckless"}}, "Lotad": {"types": ["Water", "Grass"], "bs": {"hp": 40, "at": 30, "df": 30, "sa": 40, "sd": 50, "sp": 30}, "weightkg": 0.3, "abilities": {"0": "Swift Swim", "H": "Own Tempo"}, "nfe": true}, "Lombre": {"types": ["Water", "Grass"], "bs": {"hp": 60, "at": 50, "df": 50, "sa": 60, "sd": 70, "sp": 50}, "weightkg": 3.2, "abilities": {"0": "Swift Swim", "H": "Own Tempo"}, "nfe": true}, "Ludicolo": {"types": ["Water", "Grass"], "bs": {"hp": 80, "at": 70, "df": 70, "sa": 90, "sd": 100, "sp": 70}, "weightkg": 5.5, "abilities": {"0": "Swift Swim", "H": "Own Tempo"}}, "Seedot": {"types": ["Grass"], "bs": {"hp": 40, "at": 40, "df": 50, "sa": 30, "sd": 30, "sp": 30}, "weightkg": 0.4, "abilities": {"0": "Chlorophyll", "H": "Chlorophyll"}, "nfe": true}, "Nuzleaf": {"types": ["Grass", "Dark"], "bs": {"hp": 70, "at": 70, "df": 40, "sa": 60, "sd": 40, "sp": 60}, "weightkg": 2.8, "abilities": {"0": "Chlorophyll", "H": "Chlorophyll"}, "nfe": true}, "Shiftry": {"types": ["Grass", "Dark"], "bs": {"hp": 90, "at": 100, "df": 60, "sa": 90, "sd": 60, "sp": 80}, "weightkg": 6.0, "abilities": {"0": "Wind Rider", "H": "Chlorophyll"}}, "Wingull": {"types": ["Water", "Flying"], "bs": {"hp": 40, "at": 30, "df": 30, "sa": 55, "sd": 30, "sp": 85}, "weightkg": 0.9, "abilities": {"0": "Rain Dish", "H": "Hydration"}, "nfe": true}, "Pelipper": {"types": ["Water", "Flying"], "bs": {"hp": 60, "at": 50, "df": 100, "sa": 95, "sd": 70, "sp": 65}, "weightkg": 2.8, "abilities": {"0": "Rain Dish", "H": "Drizzle"}}, "Ralts": {"types": ["Psychic", "Fairy"], "bs": {"hp": 28, "at": 25, "df": 25, "sa": 45, "sd": 35, "sp": 40}, "weightkg": 0.7, "abilities": {"0": "Trace", "H": "Telepathy"}, "nfe": true}, "Kirlia": {"types": ["Psychic", "Fairy"], "bs": {"hp": 38, "at": 35, "df": 35, "sa": 65, "sd": 55, "sp": 50}, "weightkg": 2.0, "abilities": {"0": "Trace", "H": "Telepathy"}, "nfe": true}, "Gardevoir": {"types": ["Psychic", "Fairy"], "bs": {"hp": 68, "at": 65, "df": 65, "sa": 125, "sd": 115, "sp": 80}, "weightkg": 4.8, "abilities": {"0": "Trace", "H": "Telepathy"}}, "Gardevoir-Mega": {"types": ["Psychic", "Fairy"], "bs": {"hp": 68, "at": 85, "df": 65, "sa": 165, "sd": 135, "sp": 100}, "weightkg": 4.8, "abilities": {"0": "Pixilate"}, "baseSpecies": "Gardevoir"}, "Gallade": {"types": ["Psychic", "Fighting"], "bs": {"hp": 68, "at": 125, "df": 65, "sa": 65, "sd": 115, "sp": 80}, "weightkg": 5.2, "abilities": {"0": "Sharpness", "H": "Inner Focus"}}, "Gallade-Mega": {"types": ["Psychic", "Fighting"], "bs": {"hp": 68, "at": 165, "df": 95, "sa": 65, "sd": 115, "sp": 110}, "weightkg": 5.6, "abilities": {"0": "Inner Focus"}, "baseSpecies": "Gallade"}, "Gardevoir-Mega-Z": {"types": ["Psychic", "Dark"], "bs": {"hp": 68, "at": 85, "df": 85, "sa": 145, "sd": 115, "sp": 120}, "weightkg": 3.3, "abilities": {"0": "Last Stand", "1": "Last Stand", "H": "Last Stand"}, "baseSpecies": "Gardevoir"}, "Surskit": {"types": ["Bug", "Water"], "bs": {"hp": 40, "at": 30, "df": 32, "sa": 50, "sd": 52, "sp": 65}, "weightkg": 0.2, "abilities": {"0": "Swift Swim", "H": "Rain Dish"}, "nfe": true}, "Masquerain": {"types": ["Bug", "Flying"], "bs": {"hp": 70, "at": 60, "df": 62, "sa": 100, "sd": 82, "sp": 80}, "weightkg": 0.4, "abilities": {"0": "Intimidate", "H": "Unnerve"}}, "Shroomish": {"types": ["Grass"], "bs": {"hp": 60, "at": 40, "df": 60, "sa": 40, "sd": 60, "sp": 35}, "weightkg": 0.5, "abilities": {"0": "Quick Feet", "1": "Poison Heal", "H": "Effect Spore"}, "nfe": true}, "Breloom": {"types": ["Grass", "Fighting"], "bs": {"hp": 60, "at": 130, "df": 80, "sa": 60, "sd": 60, "sp": 70}, "weightkg": 3.9, "abilities": {"0": "Technician", "1": "Poison Heal", "H": "Effect Spore"}}, "Nincada": {"types": ["Bug", "Ground"], "bs": {"hp": 31, "at": 45, "df": 90, "sa": 30, "sd": 30, "sp": 40}, "weightkg": 0.6, "abilities": {"0": "Compound Eyes", "H": "Run Away"}, "nfe": true}, "Ninjask": {"types": ["Bug", "Flying"], "bs": {"hp": 61, "at": 90, "df": 45, "sa": 50, "sd": 50, "sp": 160}, "weightkg": 1.2, "abilities": {"0": "Speed Boost", "H": "Infiltrator"}}, "Shedinja": {"types": ["Bug", "Ghost"], "bs": {"hp": 1, "at": 90, "df": 45, "sa": 30, "sd": 30, "sp": 40}, "weightkg": 0.1, "abilities": {"0": "Levitate", "H": "Wonder Guard"}}, "Makuhita": {"types": ["Fighting"], "bs": {"hp": 72, "at": 60, "df": 30, "sa": 20, "sd": 30, "sp": 25}, "weightkg": 8.6, "abilities": {"0": "Thick Fat", "1": "Guts", "H": "Sheer Force"}, "nfe": true}, "Hariyama": {"types": ["Fighting"], "bs": {"hp": 144, "at": 120, "df": 60, "sa": 40, "sd": 60, "sp": 50}, "weightkg": 25.4, "abilities": {"0": "Thick Fat", "1": "Guts", "H": "Sheer Force"}}, "Nosepass": {"types": ["Rock"], "bs": {"hp": 30, "at": 45, "df": 135, "sa": 45, "sd": 90, "sp": 30}, "weightkg": 9.7, "abilities": {"0": "Sand Force", "1": "Sturdy", "H": "Magnet Pull"}, "nfe": true}, "Probopass": {"types": ["Rock", "Steel"], "bs": {"hp": 60, "at": 55, "df": 145, "sa": 75, "sd": 150, "sp": 40}, "weightkg": 34.0, "abilities": {"0": "Sand Force", "1": "Sturdy", "H": "Magnet Pull"}}, "Skitty": {"types": ["Normal"], "bs": {"hp": 50, "at": 45, "df": 45, "sa": 35, "sd": 35, "sp": 50}, "weightkg": 1.1, "abilities": {"0": "Normalize", "H": "Wonder Skin"}, "nfe": true}, "Delcatty": {"types": ["Normal"], "bs": {"hp": 70, "at": 65, "df": 65, "sa": 55, "sd": 55, "sp": 90}, "weightkg": 3.3, "abilities": {"0": "Normalize", "H": "Wonder Skin"}}, "Sableye": {"types": ["Dark", "Ghost"], "bs": {"hp": 50, "at": 75, "df": 75, "sa": 65, "sd": 65, "sp": 50}, "weightkg": 1.1, "abilities": {"0": "Prankster", "H": "Stall"}}, "Sableye-Mega": {"types": ["Dark", "Ghost"], "bs": {"hp": 50, "at": 85, "df": 125, "sa": 85, "sd": 115, "sp": 20}, "weightkg": 16.1, "abilities": {"0": "Magic Bounce"}, "baseSpecies": "Sableye"}, "Mawile": {"types": ["Steel", "Fairy"], "bs": {"hp": 50, "at": 85, "df": 85, "sa": 55, "sd": 55, "sp": 50}, "weightkg": 1.1, "abilities": {"0": "Intimidate", "1": "Hyper Cutter", "H": "Sheer Force"}}, "Mawile-Mega": {"types": ["Steel", "Fairy"], "bs": {"hp": 50, "at": 105, "df": 125, "sa": 55, "sd": 95, "sp": 50}, "weightkg": 2.4, "abilities": {"0": "Huge Power"}, "baseSpecies": "Mawile"}, "Aron": {"types": ["Steel", "Rock"], "bs": {"hp": 50, "at": 70, "df": 100, "sa": 40, "sd": 40, "sp": 30}, "weightkg": 6.0, "abilities": {"0": "Heavy Metal", "1": "Rock Head", "H": "Sturdy"}, "nfe": true}, "Lairon": {"types": ["Steel", "Rock"], "bs": {"hp": 60, "at": 90, "df": 140, "sa": 50, "sd": 50, "sp": 40}, "weightkg": 12.0, "abilities": {"0": "Heavy Metal", "1": "Rock Head", "H": "Sturdy"}, "nfe": true}, "Aggron": {"types": ["Steel", "Rock"], "bs": {"hp": 70, "at": 110, "df": 180, "sa": 60, "sd": 60, "sp": 50}, "weightkg": 36.0, "abilities": {"0": "Heavy Metal", "1": "Rock Head", "H": "Sturdy"}}, "Aggron-Mega": {"types": ["Steel"], "bs": {"hp": 70, "at": 140, "df": 230, "sa": 60, "sd": 80, "sp": 50}, "weightkg": 39.5, "abilities": {"0": "Filter"}, "baseSpecies": "Aggron"}, "Meditite": {"types": ["Fighting", "Psychic"], "bs": {"hp": 30, "at": 40, "df": 55, "sa": 40, "sd": 55, "sp": 60}, "weightkg": 1.1, "abilities": {"0": "Pure Power", "H": "Telepathy"}, "nfe": true}, "Medicham": {"types": ["Fighting", "Psychic"], "bs": {"hp": 60, "at": 60, "df": 75, "sa": 60, "sd": 75, "sp": 80}, "weightkg": 3.1, "abilities": {"0": "Pure Power", "H": "Telepathy"}}, "Medicham-Mega": {"types": ["Fighting", "Psychic"], "bs": {"hp": 60, "at": 100, "df": 85, "sa": 80, "sd": 85, "sp": 100}, "weightkg": 3.1, "abilities": {"0": "Pure Power"}, "baseSpecies": "Medicham"}, "Electrike": {"types": ["Electric"], "bs": {"hp": 40, "at": 45, "df": 40, "sa": 65, "sd": 40, "sp": 65}, "weightkg": 1.5, "abilities": {"0": "Intimidate", "H": "Lightning Rod"}, "nfe": true}, "Manectric": {"types": ["Electric"], "bs": {"hp": 70, "at": 75, "df": 60, "sa": 105, "sd": 60, "sp": 105}, "weightkg": 4.0, "abilities": {"0": "Intimidate", "H": "Lightning Rod"}}, "Manectric-Mega": {"types": ["Electric"], "bs": {"hp": 70, "at": 75, "df": 80, "sa": 135, "sd": 80, "sp": 135}, "weightkg": 4.4, "abilities": {"0": "Intimidate"}, "baseSpecies": "Manectric"}, "Budew": {"types": ["Grass", "Poison"], "bs": {"hp": 40, "at": 30, "df": 35, "sa": 50, "sd": 70, "sp": 55}, "weightkg": 0.1, "abilities": {"0": "Natural Cure", "1": "Leaf Guard", "H": "Poison Point"}, "nfe": true}, "Roselia": {"types": ["Grass", "Poison"], "bs": {"hp": 50, "at": 60, "df": 45, "sa": 100, "sd": 80, "sp": 65}, "weightkg": 0.2, "abilities": {"0": "Natural Cure", "1": "Leaf Guard", "H": "Poison Point"}, "nfe": true}, "Roserade": {"types": ["Grass", "Poison"], "bs": {"hp": 60, "at": 70, "df": 65, "sa": 125, "sd": 105, "sp": 90}, "weightkg": 1.4, "abilities": {"0": "Technician", "H": "Poison Point"}}, "Gulpin": {"types": ["Poison"], "bs": {"hp": 70, "at": 43, "df": 53, "sa": 43, "sd": 53, "sp": 40}, "weightkg": 1.0, "abilities": {"0": "Gluttony", "1": "Thick Fat", "H": "Liquid Ooze"}, "nfe": true}, "Swalot": {"types": ["Poison"], "bs": {"hp": 100, "at": 73, "df": 83, "sa": 73, "sd": 83, "sp": 55}, "weightkg": 8.0, "abilities": {"0": "Gluttony", "1": "Thick Fat", "H": "Liquid Ooze"}}, "Carvanha": {"types": ["Water", "Dark"], "bs": {"hp": 45, "at": 90, "df": 20, "sa": 65, "sd": 20, "sp": 65}, "weightkg": 2.1, "abilities": {"0": "Speed Boost", "H": "Rough Skin"}, "nfe": true}, "Sharpedo": {"types": ["Water", "Dark"], "bs": {"hp": 70, "at": 120, "df": 40, "sa": 95, "sd": 40, "sp": 95}, "weightkg": 8.9, "abilities": {"0": "Speed Boost", "H": "Rough Skin"}}, "Sharpedo-Mega": {"types": ["Water", "Dark"], "bs": {"hp": 70, "at": 140, "df": 70, "sa": 110, "sd": 65, "sp": 105}, "weightkg": 13.0, "abilities": {"0": "Strong Jaw"}, "baseSpecies": "Sharpedo"}, "Wailmer": {"types": ["Water"], "bs": {"hp": 130, "at": 70, "df": 35, "sa": 70, "sd": 35, "sp": 60}, "weightkg": 13.0, "abilities": {"0": "Water Veil", "1": "Oblivious", "H": "Pressure"}, "nfe": true}, "Wailord": {"types": ["Water"], "bs": {"hp": 170, "at": 90, "df": 45, "sa": 90, "sd": 45, "sp": 60}, "weightkg": 39.8, "abilities": {"0": "Water Veil", "1": "Oblivious", "H": "Pressure"}}, "Numel": {"types": ["Fire", "Ground"], "bs": {"hp": 60, "at": 60, "df": 40, "sa": 65, "sd": 45, "sp": 35}, "weightkg": 2.4, "abilities": {"0": "Oblivious", "1": "Simple", "H": "Own Tempo"}, "nfe": true}, "Camerupt": {"types": ["Fire", "Ground"], "bs": {"hp": 70, "at": 100, "df": 70, "sa": 105, "sd": 75, "sp": 40}, "weightkg": 22.0, "abilities": {"0": "Magma Armor", "1": "Own Tempo", "H": "Anger Point"}}, "Camerupt-Mega": {"types": ["Fire", "Ground"], "bs": {"hp": 70, "at": 120, "df": 100, "sa": 145, "sd": 105, "sp": 20}, "weightkg": 32.0, "abilities": {"0": "Sheer Force"}, "baseSpecies": "Camerupt"}, "Torkoal": {"types": ["Fire"], "bs": {"hp": 70, "at": 85, "df": 140, "sa": 85, "sd": 70, "sp": 20}, "weightkg": 8.0, "abilities": {"0": "Shell Armor", "H": "Drought"}}, "Spinda": {"types": ["Normal"], "bs": {"hp": 60, "at": 60, "df": 60, "sa": 60, "sd": 60, "sp": 60}, "weightkg": 0.5, "abilities": {"0": "Contrary", "H": "Tangled Feet"}}, "Trapinch": {"types": ["Ground"], "bs": {"hp": 45, "at": 100, "df": 45, "sa": 45, "sd": 45, "sp": 10}, "weightkg": 1.5, "abilities": {"0": "Hyper Cutter", "1": "Arena Trap", "H": "Sheer Force"}, "nfe": true}, "Vibrava": {"types": ["Ground", "Dragon"], "bs": {"hp": 50, "at": 70, "df": 50, "sa": 50, "sd": 50, "sp": 70}, "weightkg": 1.5, "abilities": {"0": "Levitate", "H": "Levitate"}, "nfe": true}, "Flygon": {"types": ["Ground", "Dragon"], "bs": {"hp": 80, "at": 100, "df": 80, "sa": 80, "sd": 80, "sp": 100}, "weightkg": 8.2, "abilities": {"0": "Levitate", "H": "Levitate"}}, "Cacnea": {"types": ["Grass"], "bs": {"hp": 50, "at": 85, "df": 40, "sa": 85, "sd": 40, "sp": 35}, "weightkg": 5.1, "abilities": {"0": "Sand Veil", "H": "Water Absorb"}, "nfe": true}, "Cacturne": {"types": ["Grass", "Dark"], "bs": {"hp": 70, "at": 115, "df": 60, "sa": 115, "sd": 60, "sp": 55}, "weightkg": 7.7, "abilities": {"0": "Sand Veil", "H": "Water Absorb"}}, "Swablu": {"types": ["Normal", "Flying"], "bs": {"hp": 45, "at": 40, "df": 60, "sa": 40, "sd": 75, "sp": 50}, "weightkg": 0.1, "abilities": {"0": "Natural Cure", "H": "Cloud Nine"}, "nfe": true}, "Altaria": {"types": ["Dragon", "Flying"], "bs": {"hp": 75, "at": 70, "df": 90, "sa": 70, "sd": 105, "sp": 80}, "weightkg": 2.1, "abilities": {"0": "Natural Cure", "H": "Cloud Nine"}}, "Altaria-Mega": {"types": ["Dragon", "Fairy"], "bs": {"hp": 75, "at": 110, "df": 110, "sa": 110, "sd": 105, "sp": 80}, "weightkg": 2.1, "abilities": {"0": "Pixilate"}, "baseSpecies": "Altaria"}, "Lunatone": {"types": ["Rock", "Psychic"], "bs": {"hp": 90, "at": 55, "df": 65, "sa": 95, "sd": 85, "sp": 70}, "weightkg": 16.8, "abilities": {"0": "Levitate"}}, "Solrock": {"types": ["Rock", "Psychic"], "bs": {"hp": 90, "at": 95, "df": 85, "sa": 55, "sd": 65, "sp": 70}, "weightkg": 15.4, "abilities": {"0": "Levitate"}}, "Barboach": {"types": ["Water", "Ground"], "bs": {"hp": 50, "at": 48, "df": 43, "sa": 46, "sd": 41, "sp": 60}, "weightkg": 0.2, "abilities": {"0": "Oblivious", "1": "Hydration", "H": "Hydration"}, "nfe": true}, "Whiscash": {"types": ["Water", "Ground"], "bs": {"hp": 110, "at": 78, "df": 73, "sa": 76, "sd": 71, "sp": 60}, "weightkg": 2.4, "abilities": {"0": "Oblivious", "1": "Hydration", "H": "Hydration"}}, "Corphish": {"types": ["Water"], "bs": {"hp": 43, "at": 80, "df": 65, "sa": 50, "sd": 35, "sp": 35}, "weightkg": 1.1, "abilities": {"0": "Adaptability", "1": "Shell Armor", "H": "Hyper Cutter"}, "nfe": true}, "Crawdaunt": {"types": ["Water", "Dark"], "bs": {"hp": 63, "at": 120, "df": 85, "sa": 90, "sd": 55, "sp": 55}, "weightkg": 3.3, "abilities": {"0": "Adaptability", "1": "Shell Armor", "H": "Hyper Cutter"}}, "Baltoy": {"types": ["Ground", "Psychic"], "bs": {"hp": 40, "at": 40, "df": 55, "sa": 40, "sd": 70, "sp": 55}, "weightkg": 2.1, "abilities": {"0": "Levitate"}, "nfe": true}, "Claydol": {"types": ["Ground", "Psychic"], "bs": {"hp": 60, "at": 70, "df": 105, "sa": 70, "sd": 120, "sp": 75}, "weightkg": 10.8, "abilities": {"0": "Levitate"}}, "Lileep": {"types": ["Rock", "Grass"], "bs": {"hp": 66, "at": 41, "df": 77, "sa": 61, "sd": 87, "sp": 23}, "weightkg": 2.4, "abilities": {"0": "Battle Armor", "H": "Storm Drain"}, "nfe": true}, "Cradily": {"types": ["Rock", "Grass"], "bs": {"hp": 86, "at": 81, "df": 97, "sa": 81, "sd": 107, "sp": 43}, "weightkg": 6.0, "abilities": {"0": "Battle Armor", "H": "Storm Drain"}}, "Anorith": {"types": ["Rock", "Bug"], "bs": {"hp": 45, "at": 95, "df": 50, "sa": 40, "sd": 50, "sp": 75}, "weightkg": 1.2, "abilities": {"0": "Battle Armor", "H": "Swift Swim"}, "nfe": true}, "Armaldo": {"types": ["Rock", "Bug"], "bs": {"hp": 75, "at": 125, "df": 100, "sa": 70, "sd": 80, "sp": 45}, "weightkg": 6.8, "abilities": {"0": "Battle Armor", "H": "Swift Swim"}}, "Feebas": {"types": ["Water"], "bs": {"hp": 20, "at": 15, "df": 20, "sa": 10, "sd": 55, "sp": 80}, "weightkg": 0.7, "abilities": {"0": "Swift Swim", "1": "Oblivious", "H": "Adaptability"}, "nfe": true}, "Milotic": {"types": ["Water"], "bs": {"hp": 95, "at": 60, "df": 79, "sa": 100, "sd": 125, "sp": 81}, "weightkg": 16.2, "abilities": {"0": "Marvel Scale", "H": "Cute Charm"}}, "Castform": {"types": ["Normal"], "bs": {"hp": 70, "at": 70, "df": 70, "sa": 70, "sd": 70, "sp": 70}, "weightkg": 0.1, "abilities": {"0": "Forecast"}}, "Castform-Sunny": {"types": ["Fire"], "bs": {"hp": 70, "at": 70, "df": 70, "sa": 70, "sd": 70, "sp": 70}, "weightkg": 0.1, "abilities": {"0": "Forecast"}}, "Castform-Rainy": {"types": ["Water"], "bs": {"hp": 70, "at": 70, "df": 70, "sa": 70, "sd": 70, "sp": 70}, "weightkg": 0.1, "abilities": {"0": "Forecast"}}, "Castform-Snowy": {"types": ["Ice"], "bs": {"hp": 70, "at": 70, "df": 70, "sa": 70, "sd": 70, "sp": 70}, "weightkg": 0.1, "abilities": {"0": "Forecast"}}, "Kecleon": {"types": ["Normal"], "bs": {"hp": 60, "at": 90, "df": 70, "sa": 60, "sd": 120, "sp": 40}, "weightkg": 2.2, "abilities": {"0": "Libero", "H": "Color Change"}}, "Shuppet": {"types": ["Ghost"], "bs": {"hp": 44, "at": 75, "df": 35, "sa": 63, "sd": 33, "sp": 45}, "weightkg": 0.2, "abilities": {"0": "Insomnia", "H": "Cursed Body"}, "nfe": true}, "Banette": {"types": ["Ghost"], "bs": {"hp": 64, "at": 115, "df": 65, "sa": 83, "sd": 63, "sp": 65}, "weightkg": 1.2, "abilities": {"0": "Insomnia", "H": "Cursed Body"}}, "Banette-Mega": {"types": ["Ghost"], "bs": {"hp": 64, "at": 165, "df": 75, "sa": 93, "sd": 83, "sp": 75}, "weightkg": 1.3, "abilities": {"0": "Prankster"}, "baseSpecies": "Banette"}, "Duskull": {"types": ["Ghost"], "bs": {"hp": 20, "at": 40, "df": 90, "sa": 30, "sd": 90, "sp": 25}, "weightkg": 1.5, "abilities": {"0": "Levitate", "H": "Frisk"}, "nfe": true}, "Dusclops": {"types": ["Ghost"], "bs": {"hp": 40, "at": 70, "df": 130, "sa": 60, "sd": 130, "sp": 25}, "weightkg": 3.1, "abilities": {"0": "Pressure", "H": "Frisk"}, "nfe": true}, "Dusknoir": {"types": ["Ghost"], "bs": {"hp": 45, "at": 100, "df": 135, "sa": 65, "sd": 135, "sp": 45}, "weightkg": 10.7, "abilities": {"0": "Pressure", "H": "Frisk"}}, "Tropius": {"types": ["Grass", "Flying"], "bs": {"hp": 99, "at": 68, "df": 83, "sa": 72, "sd": 87, "sp": 51}, "weightkg": 10.0, "abilities": {"0": "Harvest", "1": "Solar Power", "H": "Chlorophyll"}}, "Chingling": {"types": ["Psychic"], "bs": {"hp": 45, "at": 30, "df": 50, "sa": 65, "sd": 50, "sp": 45}, "weightkg": 0.1, "abilities": {"0": "Levitate"}, "nfe": true}, "Chimecho": {"types": ["Psychic"], "bs": {"hp": 75, "at": 50, "df": 80, "sa": 95, "sd": 90, "sp": 65}, "weightkg": 0.1, "abilities": {"0": "Levitate"}}, "Chimecho-Mega": {"types": ["Psychic", "Steel"], "bs": {"hp": 75, "at": 50, "df": 110, "sa": 135, "sd": 120, "sp": 65}, "weightkg": 0.8, "abilities": {"0": "Levitate"}, "baseSpecies": "Chimecho"}, "Absol": {"types": ["Dark"], "bs": {"hp": 65, "at": 130, "df": 60, "sa": 75, "sd": 60, "sp": 75}, "weightkg": 4.7, "abilities": {"0": "Pressure", "1": "Super Luck", "H": "Justified"}}, "Absol-Mega": {"types": ["Dark"], "bs": {"hp": 65, "at": 150, "df": 60, "sa": 115, "sd": 60, "sp": 115}, "weightkg": 4.9, "abilities": {"0": "Magic Bounce"}, "baseSpecies": "Absol"}, "Absol-Mega-Z": {"types": ["Dark", "Ghost"], "bs": {"hp": 65, "at": 154, "df": 60, "sa": 75, "sd": 60, "sp": 151}, "weightkg": 4.9, "abilities": {"0": "Aura Break"}, "baseSpecies": "Absol"}, "Snorunt": {"types": ["Ice"], "bs": {"hp": 50, "at": 50, "df": 50, "sa": 50, "sd": 50, "sp": 50}, "weightkg": 1.7, "abilities": {"0": "Inner Focus", "1": "Ice Body", "H": "Moody"}, "nfe": true}, "Glalie": {"types": ["Ice"], "bs": {"hp": 80, "at": 80, "df": 80, "sa": 80, "sd": 80, "sp": 80}, "weightkg": 25.6, "abilities": {"0": "Inner Focus", "1": "Ice Body", "H": "Moody"}}, "Glalie-Mega": {"types": ["Ice"], "bs": {"hp": 80, "at": 120, "df": 80, "sa": 120, "sd": 80, "sp": 100}, "weightkg": 35.0, "abilities": {"0": "Refrigerate"}, "baseSpecies": "Glalie"}, "Froslass": {"types": ["Ice", "Ghost"], "bs": {"hp": 70, "at": 80, "df": 70, "sa": 80, "sd": 70, "sp": 110}, "weightkg": 2.7, "abilities": {"0": "Cursed Body", "H": "Snow Cloak"}}, "Froslass-Mega": {"types": ["Ice", "Ghost"], "bs": {"hp": 70, "at": 80, "df": 70, "sa": 140, "sd": 100, "sp": 120}, "weightkg": 3.0, "abilities": {"0": "Refrigerate"}, "baseSpecies": "Froslass"}, "Spheal": {"types": ["Ice", "Water"], "bs": {"hp": 70, "at": 40, "df": 50, "sa": 55, "sd": 50, "sp": 25}, "weightkg": 4.0, "abilities": {"0": "Thick Fat", "H": "Oblivious"}, "nfe": true}, "Sealeo": {"types": ["Ice", "Water"], "bs": {"hp": 90, "at": 60, "df": 70, "sa": 75, "sd": 70, "sp": 45}, "weightkg": 8.8, "abilities": {"0": "Thick Fat", "H": "Oblivious"}, "nfe": true}, "Walrein": {"types": ["Ice", "Water"], "bs": {"hp": 110, "at": 80, "df": 90, "sa": 95, "sd": 90, "sp": 65}, "weightkg": 15.1, "abilities": {"0": "Thick Fat", "H": "Oblivious"}}, "Clamperl": {"types": ["Water"], "bs": {"hp": 35, "at": 64, "df": 85, "sa": 74, "sd": 55, "sp": 32}, "weightkg": 5.2, "abilities": {"0": "Shell Armor", "H": "Rattled"}, "nfe": true}, "Huntail": {"types": ["Water"], "bs": {"hp": 55, "at": 104, "df": 105, "sa": 94, "sd": 75, "sp": 52}, "weightkg": 2.7, "abilities": {"0": "Swift Swim", "H": "Water Veil"}}, "Gorebyss": {"types": ["Water"], "bs": {"hp": 55, "at": 84, "df": 105, "sa": 114, "sd": 75, "sp": 52}, "weightkg": 2.3, "abilities": {"0": "Swift Swim", "H": "Hydration"}}, "Relicanth": {"types": ["Water", "Rock"], "bs": {"hp": 100, "at": 90, "df": 130, "sa": 45, "sd": 65, "sp": 55}, "weightkg": 2.3, "abilities": {"0": "Battle Armor", "H": "Sturdy"}}, "Luvdisc": {"types": ["Water"], "bs": {"hp": 43, "at": 30, "df": 55, "sa": 40, "sd": 65, "sp": 97}, "weightkg": 0.9, "abilities": {"0": "Swift Swim", "H": "Hydration"}}, "Bagon": {"types": ["Dragon"], "bs": {"hp": 45, "at": 75, "df": 60, "sa": 40, "sd": 30, "sp": 50}, "weightkg": 4.2, "abilities": {"0": "Rock Head", "H": "Sheer Force"}, "nfe": true}, "Shelgon": {"types": ["Dragon"], "bs": {"hp": 65, "at": 95, "df": 100, "sa": 60, "sd": 50, "sp": 50}, "weightkg": 11.1, "abilities": {"0": "Rock Head", "H": "Overcoat"}, "nfe": true}, "Salamence": {"types": ["Dragon", "Flying"], "bs": {"hp": 95, "at": 135, "df": 80, "sa": 110, "sd": 80, "sp": 100}, "weightkg": 10.3, "abilities": {"0": "Intimidate", "H": "Moxie"}}, "Salamence-Mega": {"types": ["Dragon", "Flying"], "bs": {"hp": 95, "at": 145, "df": 130, "sa": 120, "sd": 90, "sp": 120}, "weightkg": 11.3, "abilities": {"0": "Aerilate"}, "baseSpecies": "Salamence"}, "Beldum": {"types": ["Steel", "Psychic"], "bs": {"hp": 40, "at": 55, "df": 80, "sa": 35, "sd": 60, "sp": 30}, "weightkg": 9.5, "abilities": {"0": "Clear Body", "H": "Light Metal"}, "nfe": true}, "Metang": {"types": ["Steel", "Psychic"], "bs": {"hp": 60, "at": 75, "df": 100, "sa": 55, "sd": 80, "sp": 50}, "weightkg": 20.2, "abilities": {"0": "Clear Body", "H": "Light Metal"}, "nfe": true}, "Metagross": {"types": ["Steel", "Psychic"], "bs": {"hp": 80, "at": 135, "df": 130, "sa": 95, "sd": 90, "sp": 70}, "weightkg": 55.0, "abilities": {"0": "Clear Body", "H": "Light Metal"}}, "Metagross-Mega": {"types": ["Steel", "Psychic"], "bs": {"hp": 80, "at": 145, "df": 150, "sa": 105, "sd": 110, "sp": 110}, "weightkg": 94.3, "abilities": {"0": "Tough Claws"}, "baseSpecies": "Metagross"}, "Regirock": {"types": ["Rock"], "bs": {"hp": 80, "at": 100, "df": 200, "sa": 50, "sd": 100, "sp": 50}, "weightkg": 23.0, "abilities": {"0": "Clear Body", "H": "Sturdy"}}, "Regice": {"types": ["Ice"], "bs": {"hp": 80, "at": 50, "df": 100, "sa": 100, "sd": 200, "sp": 50}, "weightkg": 17.5, "abilities": {"0": "Clear Body", "H": "Ice Body"}}, "Registeel": {"types": ["Steel"], "bs": {"hp": 80, "at": 75, "df": 150, "sa": 75, "sd": 150, "sp": 50}, "weightkg": 20.5, "abilities": {"0": "Clear Body", "H": "Light Metal"}}, "Latias": {"types": ["Dragon", "Psychic"], "bs": {"hp": 80, "at": 80, "df": 90, "sa": 110, "sd": 130, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Levitate"}}, "Latias-Mega": {"types": ["Dragon", "Psychic"], "bs": {"hp": 80, "at": 100, "df": 120, "sa": 140, "sd": 150, "sp": 110}, "weightkg": 5.2, "abilities": {"0": "Levitate"}, "baseSpecies": "Latias"}, "Latios": {"types": ["Dragon", "Psychic"], "bs": {"hp": 80, "at": 90, "df": 80, "sa": 130, "sd": 110, "sp": 110}, "weightkg": 6.0, "abilities": {"0": "Levitate"}}, "Latios-Mega": {"types": ["Dragon", "Psychic"], "bs": {"hp": 80, "at": 130, "df": 100, "sa": 160, "sd": 120, "sp": 110}, "weightkg": 7.0, "abilities": {"0": "Levitate"}, "baseSpecies": "Latios"}, "Kyogre": {"types": ["Water"], "bs": {"hp": 100, "at": 100, "df": 90, "sa": 150, "sd": 140, "sp": 90}, "weightkg": 35.2, "abilities": {"0": "Drizzle"}}, "Kyogre-Primal": {"types": ["Water"], "bs": {"hp": 100, "at": 150, "df": 90, "sa": 180, "sd": 160, "sp": 90}, "weightkg": 43.0, "abilities": {"0": "Primordial Sea"}}, "Groudon": {"types": ["Ground"], "bs": {"hp": 100, "at": 150, "df": 140, "sa": 100, "sd": 90, "sp": 90}, "weightkg": 95.0, "abilities": {"0": "Drought"}}, "Groudon-Primal": {"types": ["Ground", "Fire"], "bs": {"hp": 100, "at": 180, "df": 160, "sa": 150, "sd": 90, "sp": 90}, "weightkg": 100.0, "abilities": {"0": "Desolate Land"}}, "Rayquaza": {"types": ["Dragon", "Flying"], "bs": {"hp": 105, "at": 150, "df": 90, "sa": 150, "sd": 90, "sp": 95}, "weightkg": 20.6, "abilities": {"0": "Air Lock"}}, "Rayquaza-Mega": {"types": ["Dragon", "Flying"], "bs": {"hp": 105, "at": 180, "df": 100, "sa": 180, "sd": 100, "sp": 115}, "weightkg": 39.2, "abilities": {"0": "Delta Stream"}, "baseSpecies": "Rayquaza"}, "Jirachi": {"types": ["Steel", "Psychic"], "bs": {"hp": 100, "at": 100, "df": 100, "sa": 100, "sd": 100, "sp": 100}, "weightkg": 0.1, "abilities": {"0": "Serene Grace"}}, "Deoxys": {"types": ["Psychic"], "bs": {"hp": 50, "at": 150, "df": 50, "sa": 150, "sd": 50, "sp": 150}, "weightkg": 6.1, "abilities": {"0": "Inner Focus"}}, "Deoxys-Attack": {"types": ["Psychic"], "bs": {"hp": 50, "at": 180, "df": 20, "sa": 180, "sd": 20, "sp": 150}, "weightkg": 6.1, "abilities": {"0": "Unnerve"}}, "Deoxys-Defense": {"types": ["Psychic"], "bs": {"hp": 50, "at": 70, "df": 160, "sa": 70, "sd": 160, "sp": 90}, "weightkg": 6.1, "abilities": {"0": "Filter"}}, "Deoxys-Speed": {"types": ["Psychic"], "bs": {"hp": 50, "at": 95, "df": 90, "sa": 95, "sd": 90, "sp": 180}, "weightkg": 6.1, "abilities": {"0": "Mold Breaker"}}, "Turtwig": {"types": ["Grass"], "bs": {"hp": 55, "at": 68, "df": 64, "sa": 45, "sd": 55, "sp": 31}, "weightkg": 1.0, "abilities": {"0": "Shell Armor", "H": "Overgrow"}, "nfe": true}, "Grotle": {"types": ["Grass"], "bs": {"hp": 75, "at": 89, "df": 85, "sa": 55, "sd": 65, "sp": 36}, "weightkg": 9.7, "abilities": {"0": "Shell Armor", "H": "Overgrow"}, "nfe": true}, "Torterra": {"types": ["Grass", "Ground"], "bs": {"hp": 95, "at": 109, "df": 105, "sa": 75, "sd": 85, "sp": 56}, "weightkg": 31.0, "abilities": {"0": "Shell Armor", "H": "Overgrow"}}, "Chimchar": {"types": ["Fire"], "bs": {"hp": 44, "at": 58, "df": 44, "sa": 58, "sd": 44, "sp": 61}, "weightkg": 0.6, "abilities": {"0": "Iron Fist", "H": "Blaze"}, "nfe": true}, "Monferno": {"types": ["Fire", "Fighting"], "bs": {"hp": 64, "at": 78, "df": 52, "sa": 78, "sd": 52, "sp": 81}, "weightkg": 2.2, "abilities": {"0": "Iron Fist", "H": "Blaze"}, "nfe": true}, "Infernape": {"types": ["Fire", "Fighting"], "bs": {"hp": 76, "at": 104, "df": 71, "sa": 104, "sd": 71, "sp": 108}, "weightkg": 5.5, "abilities": {"0": "Iron Fist", "H": "Blaze"}}, "Piplup": {"types": ["Water"], "bs": {"hp": 53, "at": 51, "df": 53, "sa": 61, "sd": 56, "sp": 40}, "weightkg": 0.5, "abilities": {"0": "Torrent", "H": "Competitive"}, "nfe": true}, "Prinplup": {"types": ["Water"], "bs": {"hp": 64, "at": 66, "df": 68, "sa": 81, "sd": 76, "sp": 50}, "weightkg": 2.3, "abilities": {"0": "Torrent", "H": "Competitive"}, "nfe": true}, "Empoleon": {"types": ["Water", "Steel"], "bs": {"hp": 84, "at": 86, "df": 88, "sa": 111, "sd": 101, "sp": 60}, "weightkg": 8.4, "abilities": {"0": "Torrent", "H": "Competitive"}}, "Starly": {"types": ["Normal", "Flying"], "bs": {"hp": 40, "at": 55, "df": 30, "sa": 30, "sd": 30, "sp": 60}, "weightkg": 0.2, "abilities": {"0": "Keen Eye", "H": "Keen Eye"}, "nfe": true}, "Staravia": {"types": ["Normal", "Flying"], "bs": {"hp": 55, "at": 75, "df": 50, "sa": 40, "sd": 40, "sp": 80}, "weightkg": 1.6, "abilities": {"0": "Keen Eye", "H": "Intimidate"}, "nfe": true}, "Staraptor": {"types": ["Normal", "Flying"], "bs": {"hp": 85, "at": 120, "df": 70, "sa": 50, "sd": 60, "sp": 100}, "weightkg": 2.5, "abilities": {"0": "Reckless", "H": "Intimidate"}}, "Staraptor-Mega": {"types": ["Fighting", "Flying"], "bs": {"hp": 85, "at": 140, "df": 100, "sa": 60, "sd": 90, "sp": 110}, "weightkg": 5.0, "abilities": {"0": "Gale Wings"}, "baseSpecies": "Staraptor"}, "Bidoof": {"types": ["Normal"], "bs": {"hp": 59, "at": 45, "df": 40, "sa": 35, "sd": 40, "sp": 31}, "weightkg": 2.0, "abilities": {"0": "Simple", "H": "Moody"}, "nfe": true}, "Bibarel": {"types": ["Normal", "Water"], "bs": {"hp": 79, "at": 85, "df": 60, "sa": 55, "sd": 60, "sp": 71}, "weightkg": 3.1, "abilities": {"0": "Simple", "H": "Moody"}}, "Shinx": {"types": ["Electric"], "bs": {"hp": 45, "at": 65, "df": 34, "sa": 40, "sd": 34, "sp": 45}, "weightkg": 0.9, "abilities": {"0": "Intimidate", "H": "Guts"}, "nfe": true}, "Luxio": {"types": ["Electric"], "bs": {"hp": 60, "at": 85, "df": 49, "sa": 60, "sd": 49, "sp": 60}, "weightkg": 3.0, "abilities": {"0": "Intimidate", "H": "Guts"}, "nfe": true}, "Luxray": {"types": ["Electric"], "bs": {"hp": 80, "at": 120, "df": 79, "sa": 95, "sd": 79, "sp": 70}, "weightkg": 4.2, "abilities": {"0": "Intimidate", "H": "Guts"}}, "Cranidos": {"types": ["Rock"], "bs": {"hp": 67, "at": 125, "df": 40, "sa": 30, "sd": 30, "sp": 58}, "weightkg": 3.1, "abilities": {"0": "Sheer Force", "H": "Mold Breaker"}, "nfe": true}, "Rampardos": {"types": ["Rock"], "bs": {"hp": 97, "at": 165, "df": 60, "sa": 65, "sd": 50, "sp": 58}, "weightkg": 10.2, "abilities": {"0": "Sheer Force", "H": "Mold Breaker"}}, "Shieldon": {"types": ["Rock", "Steel"], "bs": {"hp": 30, "at": 42, "df": 118, "sa": 42, "sd": 88, "sp": 30}, "weightkg": 5.7, "abilities": {"0": "Sturdy", "H": "Soundproof"}, "nfe": true}, "Bastiodon": {"types": ["Rock", "Steel"], "bs": {"hp": 60, "at": 52, "df": 168, "sa": 47, "sd": 138, "sp": 30}, "weightkg": 14.9, "abilities": {"0": "Sturdy", "H": "Soundproof"}}, "Combee": {"types": ["Bug", "Flying"], "bs": {"hp": 30, "at": 30, "df": 42, "sa": 30, "sd": 42, "sp": 70}, "weightkg": 0.6, "abilities": {"0": "Honey Gather", "H": "Hustle"}, "nfe": true}, "Vespiquen": {"types": ["Bug", "Flying"], "bs": {"hp": 70, "at": 80, "df": 102, "sa": 80, "sd": 102, "sp": 40}, "weightkg": 3.9, "abilities": {"0": "Pressure", "H": "Unnerve"}}, "Pachirisu": {"types": ["Electric"], "bs": {"hp": 60, "at": 45, "df": 70, "sa": 45, "sd": 90, "sp": 95}, "weightkg": 0.4, "abilities": {"0": "Volt Absorb", "H": "Volt Absorb"}}, "Buizel": {"types": ["Water"], "bs": {"hp": 55, "at": 65, "df": 35, "sa": 60, "sd": 30, "sp": 85}, "weightkg": 3.0, "abilities": {"0": "Swift Swim", "H": "Water Veil"}, "nfe": true}, "Floatzel": {"types": ["Water"], "bs": {"hp": 85, "at": 105, "df": 55, "sa": 85, "sd": 50, "sp": 115}, "weightkg": 3.4, "abilities": {"0": "Swift Swim", "H": "Water Veil"}}, "Shellos": {"types": ["Water"], "bs": {"hp": 76, "at": 48, "df": 48, "sa": 57, "sd": 62, "sp": 34}, "weightkg": 0.6, "abilities": {"0": "Rain Dish", "1": "Sand Force", "H": "Storm Drain"}, "nfe": true}, "Gastrodon": {"types": ["Water", "Ground"], "bs": {"hp": 111, "at": 83, "df": 68, "sa": 92, "sd": 82, "sp": 39}, "weightkg": 3.0, "abilities": {"0": "Rain Dish", "1": "Sand Force", "H": "Storm Drain"}}, "Drifloon": {"types": ["Ghost", "Flying"], "bs": {"hp": 90, "at": 50, "df": 34, "sa": 60, "sd": 44, "sp": 70}, "weightkg": 0.1, "abilities": {"0": "Unburden", "H": "Flare Boost"}, "nfe": true}, "Drifblim": {"types": ["Ghost", "Flying"], "bs": {"hp": 150, "at": 80, "df": 44, "sa": 90, "sd": 54, "sp": 80}, "weightkg": 1.5, "abilities": {"0": "Unburden", "H": "Flare Boost"}}, "Buneary": {"types": ["Normal"], "bs": {"hp": 55, "at": 66, "df": 44, "sa": 44, "sd": 56, "sp": 85}, "weightkg": 0.6, "abilities": {"0": "Run Away", "1": "Limber", "H": "Klutz"}, "nfe": true}, "Lopunny": {"types": ["Normal"], "bs": {"hp": 65, "at": 76, "df": 84, "sa": 54, "sd": 96, "sp": 105}, "weightkg": 3.3, "abilities": {"0": "Limber", "H": "Klutz"}}, "Lopunny-Mega": {"types": ["Normal", "Fighting"], "bs": {"hp": 65, "at": 136, "df": 94, "sa": 54, "sd": 96, "sp": 135}, "weightkg": 2.8, "abilities": {"0": "Scrappy"}, "baseSpecies": "Lopunny"}, "Glameow": {"types": ["Normal"], "bs": {"hp": 49, "at": 55, "df": 42, "sa": 42, "sd": 37, "sp": 85}, "weightkg": 0.4, "abilities": {"0": "Limber", "1": "Keen Eye", "H": "Own Tempo"}, "nfe": true}, "Purugly": {"types": ["Normal"], "bs": {"hp": 71, "at": 82, "df": 64, "sa": 64, "sd": 59, "sp": 112}, "weightkg": 4.4, "abilities": {"0": "Defiant", "H": "Own Tempo"}}, "Stunky": {"types": ["Poison", "Dark"], "bs": {"hp": 63, "at": 63, "df": 47, "sa": 41, "sd": 41, "sp": 74}, "weightkg": 1.9, "abilities": {"0": "Stench", "1": "Aftermath", "H": "Keen Eye"}, "nfe": true}, "Skuntank": {"types": ["Poison", "Dark"], "bs": {"hp": 103, "at": 93, "df": 67, "sa": 71, "sd": 61, "sp": 84}, "weightkg": 3.8, "abilities": {"0": "Keen Eye", "1": "Aftermath", "H": "Stench"}}, "Bronzor": {"types": ["Steel", "Psychic"], "bs": {"hp": 57, "at": 24, "df": 86, "sa": 24, "sd": 86, "sp": 23}, "weightkg": 6.0, "abilities": {"0": "Levitate", "1": "Heatproof", "H": "Heavy Metal"}, "nfe": true}, "Bronzong": {"types": ["Steel", "Psychic"], "bs": {"hp": 67, "at": 89, "df": 116, "sa": 79, "sd": 116, "sp": 33}, "weightkg": 18.7, "abilities": {"0": "Levitate", "1": "Heatproof", "H": "Heavy Metal"}}, "Spiritomb": {"types": ["Ghost", "Dark"], "bs": {"hp": 50, "at": 92, "df": 108, "sa": 92, "sd": 108, "sp": 35}, "weightkg": 10.8, "abilities": {"0": "Pressure", "H": "Infiltrator"}}, "Gible": {"types": ["Dragon", "Ground"], "bs": {"hp": 58, "at": 70, "df": 45, "sa": 40, "sd": 45, "sp": 42}, "weightkg": 2.0, "abilities": {"0": "Rough Skin", "H": "Sand Veil"}, "nfe": true}, "Gabite": {"types": ["Dragon", "Ground"], "bs": {"hp": 68, "at": 90, "df": 65, "sa": 50, "sd": 55, "sp": 82}, "weightkg": 5.6, "abilities": {"0": "Rough Skin", "H": "Sand Veil"}, "nfe": true}, "Garchomp": {"types": ["Dragon", "Ground"], "bs": {"hp": 108, "at": 130, "df": 95, "sa": 80, "sd": 85, "sp": 102}, "weightkg": 9.5, "abilities": {"0": "Rough Skin", "H": "Sand Veil"}}, "Garchomp-Mega": {"types": ["Dragon", "Ground"], "bs": {"hp": 108, "at": 170, "df": 115, "sa": 120, "sd": 95, "sp": 92}, "weightkg": 9.5, "abilities": {"0": "Sand Force"}, "baseSpecies": "Garchomp"}, "Garchomp-Mega-Z": {"types": ["Dragon"], "bs": {"hp": 108, "at": 130, "df": 85, "sa": 141, "sd": 85, "sp": 151}, "weightkg": 9.9, "abilities": {"0": "Aura Break"}, "baseSpecies": "Garchomp"}, "Riolu": {"types": ["Fighting"], "bs": {"hp": 40, "at": 70, "df": 40, "sa": 35, "sd": 40, "sp": 60}, "weightkg": 2.0, "abilities": {"0": "Steadfast", "1": "Inner Focus", "H": "Prankster"}, "nfe": true}, "Lucario": {"types": ["Fighting", "Steel"], "bs": {"hp": 70, "at": 110, "df": 70, "sa": 115, "sd": 70, "sp": 90}, "weightkg": 5.4, "abilities": {"0": "Steadfast", "1": "Inner Focus", "H": "Justified"}}, "Lucario-Mega": {"types": ["Fighting", "Steel"], "bs": {"hp": 70, "at": 145, "df": 88, "sa": 140, "sd": 70, "sp": 112}, "weightkg": 5.8, "abilities": {"0": "Adaptability"}, "baseSpecies": "Lucario"}, "Lucario-Mega-Z": {"types": ["Fighting", "Steel"], "bs": {"hp": 70, "at": 100, "df": 70, "sa": 164, "sd": 70, "sp": 151}, "weightkg": 4.9, "abilities": {"0": "Aura Break"}, "baseSpecies": "Lucario"}, "Hippopotas": {"types": ["Ground"], "bs": {"hp": 68, "at": 72, "df": 78, "sa": 38, "sd": 42, "sp": 32}, "weightkg": 5.0, "abilities": {"0": "Sand Force", "H": "Sand Stream"}, "nfe": true}, "Hippowdon": {"types": ["Ground"], "bs": {"hp": 108, "at": 112, "df": 118, "sa": 68, "sd": 72, "sp": 47}, "weightkg": 30.0, "abilities": {"0": "Sand Force", "H": "Sand Stream"}}, "Skorupi": {"types": ["Poison", "Bug"], "bs": {"hp": 40, "at": 50, "df": 90, "sa": 30, "sd": 55, "sp": 65}, "weightkg": 1.2, "abilities": {"0": "Battle Armor", "H": "Sniper"}, "nfe": true}, "Drapion": {"types": ["Poison", "Dark"], "bs": {"hp": 70, "at": 90, "df": 110, "sa": 60, "sd": 75, "sp": 95}, "weightkg": 6.2, "abilities": {"0": "Battle Armor", "H": "Sniper"}}, "Croagunk": {"types": ["Poison", "Fighting"], "bs": {"hp": 48, "at": 61, "df": 40, "sa": 61, "sd": 40, "sp": 50}, "weightkg": 2.3, "abilities": {"0": "Rain Dish", "H": "Dry Skin"}, "nfe": true}, "Toxicroak": {"types": ["Poison", "Fighting"], "bs": {"hp": 83, "at": 106, "df": 65, "sa": 86, "sd": 65, "sp": 85}, "weightkg": 4.4, "abilities": {"0": "Rain Dish", "H": "Dry Skin"}}, "Finneon": {"types": ["Water"], "bs": {"hp": 49, "at": 49, "df": 56, "sa": 49, "sd": 61, "sp": 66}, "weightkg": 0.7, "abilities": {"0": "Swift Swim", "H": "Storm Drain"}, "nfe": true}, "Lumineon": {"types": ["Water"], "bs": {"hp": 69, "at": 69, "df": 76, "sa": 69, "sd": 86, "sp": 91}, "weightkg": 2.4, "abilities": {"0": "Swift Swim", "H": "Storm Drain"}}, "Snover": {"types": ["Grass", "Ice"], "bs": {"hp": 60, "at": 62, "df": 50, "sa": 62, "sd": 60, "sp": 40}, "weightkg": 5.0, "abilities": {"0": "Soundproof", "H": "Snow Warning"}, "nfe": true}, "Abomasnow": {"types": ["Grass", "Ice"], "bs": {"hp": 90, "at": 92, "df": 75, "sa": 92, "sd": 85, "sp": 60}, "weightkg": 13.6, "abilities": {"0": "Soundproof", "H": "Snow Warning"}}, "Abomasnow-Mega": {"types": ["Grass", "Ice"], "bs": {"hp": 90, "at": 132, "df": 105, "sa": 132, "sd": 105, "sp": 30}, "weightkg": 18.5, "abilities": {"0": "Bulletproof", "H": "Snow Warning"}, "baseSpecies": "Abomasnow"}, "Rotom": {"types": ["Electric", "Ghost"], "bs": {"hp": 50, "at": 50, "df": 77, "sa": 95, "sd": 77, "sp": 91}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Rotom-Heat": {"types": ["Electric", "Fire"], "bs": {"hp": 50, "at": 65, "df": 107, "sa": 105, "sd": 107, "sp": 86}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Rotom-Wash": {"types": ["Electric", "Water"], "bs": {"hp": 50, "at": 65, "df": 107, "sa": 105, "sd": 107, "sp": 86}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Rotom-Frost": {"types": ["Electric", "Ice"], "bs": {"hp": 50, "at": 65, "df": 107, "sa": 105, "sd": 107, "sp": 86}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Rotom-Fan": {"types": ["Electric", "Flying"], "bs": {"hp": 50, "at": 65, "df": 107, "sa": 105, "sd": 107, "sp": 86}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Rotom-Mow": {"types": ["Electric", "Grass"], "bs": {"hp": 50, "at": 65, "df": 107, "sa": 105, "sd": 107, "sp": 86}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Uxie": {"types": ["Psychic"], "bs": {"hp": 75, "at": 75, "df": 130, "sa": 75, "sd": 130, "sp": 95}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Mesprit": {"types": ["Psychic"], "bs": {"hp": 80, "at": 105, "df": 105, "sa": 105, "sd": 105, "sp": 80}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Azelf": {"types": ["Psychic"], "bs": {"hp": 75, "at": 125, "df": 70, "sa": 125, "sd": 70, "sp": 115}, "weightkg": 0.0, "abilities": {"0": "Levitate"}}, "Dialga": {"types": ["Steel", "Dragon"], "bs": {"hp": 100, "at": 120, "df": 120, "sa": 150, "sd": 100, "sp": 90}, "weightkg": 68.3, "abilities": {"0": "Pressure", "H": "Telepathy"}}, "Dialga-Origin": {"types": ["Steel", "Dragon"], "bs": {"hp": 100, "at": 100, "df": 120, "sa": 150, "sd": 120, "sp": 90}, "weightkg": 85.0, "abilities": {"0": "Pressure", "H": "Telepathy"}}, "Palkia": {"types": ["Water", "Dragon"], "bs": {"hp": 90, "at": 120, "df": 100, "sa": 150, "sd": 120, "sp": 100}, "weightkg": 33.6, "abilities": {"0": "Pressure", "H": "Telepathy"}}, "Palkia-Origin": {"types": ["Water", "Dragon"], "bs": {"hp": 90, "at": 100, "df": 100, "sa": 150, "sd": 120, "sp": 120}, "weightkg": 66.0, "abilities": {"0": "Pressure", "H": "Telepathy"}}, "Heatran": {"types": ["Fire", "Steel"], "bs": {"hp": 91, "at": 90, "df": 106, "sa": 130, "sd": 106, "sp": 77}, "weightkg": 43.0, "abilities": {"0": "Flame Body", "H": "Flash Fire"}}, "Heatran-Mega": {"types": ["Fire", "Steel"], "bs": {"hp": 91, "at": 120, "df": 106, "sa": 175, "sd": 141, "sp": 67}, "weightkg": 57.0, "abilities": {"0": "Heatproof"}, "baseSpecies": "Heatran"}, "Regigigas": {"types": ["Normal"], "bs": {"hp": 110, "at": 160, "df": 110, "sa": 80, "sd": 110, "sp": 100}, "weightkg": 42.0, "abilities": {"0": "Slow Start"}}, "Giratina": {"types": ["Ghost", "Dragon"], "bs": {"hp": 150, "at": 100, "df": 120, "sa": 100, "sd": 120, "sp": 90}, "weightkg": 75.0, "abilities": {"0": "Pressure", "H": "Telepathy"}}, "Giratina-Origin": {"types": ["Ghost", "Dragon"], "bs": {"hp": 150, "at": 120, "df": 100, "sa": 120, "sd": 100, "sp": 90}, "weightkg": 65.0, "abilities": {"0": "Levitate"}}, "Cresselia": {"types": ["Psychic"], "bs": {"hp": 120, "at": 70, "df": 110, "sa": 75, "sd": 120, "sp": 85}, "weightkg": 8.6, "abilities": {"0": "Levitate"}}, "Phione": {"types": ["Water"], "bs": {"hp": 80, "at": 80, "df": 80, "sa": 80, "sd": 80, "sp": 80}, "weightkg": 0.3, "abilities": {"0": "Hydration"}, "nfe": true}, "Manaphy": {"types": ["Water"], "bs": {"hp": 100, "at": 100, "df": 100, "sa": 100, "sd": 100, "sp": 100}, "weightkg": 0.1, "abilities": {"0": "Hydration"}}, "Darkrai": {"types": ["Dark"], "bs": {"hp": 70, "at": 90, "df": 90, "sa": 135, "sd": 90, "sp": 125}, "weightkg": 5.0, "abilities": {"0": "Bad Dreams"}}, "Darkrai-Mega": {"types": ["Dark"], "bs": {"hp": 70, "at": 120, "df": 130, "sa": 165, "sd": 130, "sp": 85}, "weightkg": 24.0, "abilities": {"0": "Bad Dreams"}, "baseSpecies": "Darkrai"}, "Shaymin": {"types": ["Grass"], "bs": {"hp": 100, "at": 100, "df": 100, "sa": 100, "sd": 100, "sp": 100}, "weightkg": 0.2, "abilities": {"0": "Natural Cure"}}, "Shaymin-Sky": {"types": ["Grass", "Flying"], "bs": {"hp": 100, "at": 103, "df": 75, "sa": 120, "sd": 75, "sp": 127}, "weightkg": 0.5, "abilities": {"0": "Serene Grace"}}, "Arceus": {"types": ["Normal"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Fighting": {"types": ["Fighting"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Flying": {"types": ["Flying"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Poison": {"types": ["Poison"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Ground": {"types": ["Ground"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Rock": {"types": ["Rock"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Bug": {"types": ["Bug"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Ghost": {"types": ["Ghost"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Steel": {"types": ["Steel"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Fire": {"types": ["Fire"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Water": {"types": ["Water"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Grass": {"types": ["Grass"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Electric": {"types": ["Electric"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Psychic": {"types": ["Psychic"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Ice": {"types": ["Ice"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Dragon": {"types": ["Dragon"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Dark": {"types": ["Dark"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Arceus-Fairy": {"types": ["Fairy"], "bs": {"hp": 120, "at": 120, "df": 120, "sa": 120, "sd": 120, "sp": 120}, "weightkg": 32.0, "abilities": {"0": "Multitype"}}, "Victini": {"types": ["Psychic", "Fire"], "bs": {"hp": 100, "at": 100, "df": 100, "sa": 100, "sd": 100, "sp": 100}, "weightkg": 0.4, "abilities": {"0": "Victory Star"}}, "Snivy": {"types": ["Grass"], "bs": {"hp": 45, "at": 45, "df": 55, "sa": 45, "sd": 55, "sp": 63}, "weightkg": 0.8, "abilities": {"0": "Overgrow", "H": "Contrary"}, "nfe": true}, "Servine": {"types": ["Grass"], "bs": {"hp": 60, "at": 60, "df": 75, "sa": 60, "sd": 75, "sp": 83}, "weightkg": 1.6, "abilities": {"0": "Overgrow", "H": "Contrary"}, "nfe": true}, "Serperior": {"types": ["Grass"], "bs": {"hp": 75, "at": 75, "df": 95, "sa": 75, "sd": 95, "sp": 113}, "weightkg": 6.3, "abilities": {"0": "Overgrow", "H": "Contrary"}}, "Tepig": {"types": ["Fire"], "bs": {"hp": 65, "at": 63, "df": 45, "sa": 45, "sd": 45, "sp": 45}, "weightkg": 1.0, "abilities": {"0": "Blaze", "H": "Thick Fat"}, "nfe": true}, "Pignite": {"types": ["Fire", "Fighting"], "bs": {"hp": 90, "at": 93, "df": 55, "sa": 70, "sd": 55, "sp": 55}, "weightkg": 5.5, "abilities": {"0": "Blaze", "H": "Thick Fat"}, "nfe": true}, "Emboar": {"types": ["Fire", "Fighting"], "bs": {"hp": 110, "at": 123, "df": 65, "sa": 100, "sd": 65, "sp": 65}, "weightkg": 15.0, "abilities": {"0": "Blaze", "H": "Reckless"}}, "Emboar-Mega": {"types": ["Fire", "Fighting"], "bs": {"hp": 110, "at": 148, "df": 75, "sa": 110, "sd": 110, "sp": 75}, "weightkg": 18.0, "abilities": {"0": "Supreme Overlord"}, "baseSpecies": "Emboar"}, "Oshawott": {"types": ["Water"], "bs": {"hp": 55, "at": 55, "df": 45, "sa": 63, "sd": 45, "sp": 45}, "weightkg": 0.6, "abilities": {"0": "Shell Armor", "H": "Torrent"}, "nfe": true}, "Dewott": {"types": ["Water"], "bs": {"hp": 75, "at": 75, "df": 60, "sa": 83, "sd": 60, "sp": 60}, "weightkg": 2.5, "abilities": {"0": "Shell Armor", "H": "Torrent"}, "nfe": true}, "Samurott": {"types": ["Water"], "bs": {"hp": 95, "at": 100, "df": 85, "sa": 108, "sd": 70, "sp": 70}, "weightkg": 9.5, "abilities": {"0": "Shell Armor", "H": "Torrent"}}, "Samurott-Hisui": {"types": ["Water", "Dark"], "bs": {"hp": 90, "at": 108, "df": 80, "sa": 100, "sd": 65, "sp": 85}, "weightkg": 5.8, "abilities": {"0": "Sharpness", "H": "Torrent"}}, "Lillipup": {"types": ["Normal"], "bs": {"hp": 45, "at": 60, "df": 45, "sa": 25, "sd": 45, "sp": 55}, "weightkg": 0.4, "abilities": {"0": "Vital Spirit", "H": "Run Away"}, "nfe": true}, "Herdier": {"types": ["Normal"], "bs": {"hp": 65, "at": 80, "df": 65, "sa": 35, "sd": 65, "sp": 60}, "weightkg": 1.5, "abilities": {"0": "Intimidate", "H": "Sand Rush"}, "nfe": true}, "Stoutland": {"types": ["Normal"], "bs": {"hp": 85, "at": 110, "df": 90, "sa": 45, "sd": 90, "sp": 80}, "weightkg": 6.1, "abilities": {"0": "Intimidate", "H": "Sand Rush"}}, "Purrloin": {"types": ["Dark"], "bs": {"hp": 41, "at": 50, "df": 37, "sa": 50, "sd": 37, "sp": 66}, "weightkg": 1.0, "abilities": {"0": "Prankster", "H": "Unburden"}, "nfe": true}, "Liepard": {"types": ["Dark"], "bs": {"hp": 64, "at": 88, "df": 50, "sa": 88, "sd": 50, "sp": 106}, "weightkg": 3.8, "abilities": {"0": "Prankster", "H": "Unburden"}}, "Blitzle": {"types": ["Electric"], "bs": {"hp": 45, "at": 60, "df": 32, "sa": 50, "sd": 32, "sp": 76}, "weightkg": 3.0, "abilities": {"0": "Motor Drive", "H": "Sap Sipper"}, "nfe": true}, "Zebstrika": {"types": ["Electric"], "bs": {"hp": 75, "at": 100, "df": 63, "sa": 80, "sd": 63, "sp": 116}, "weightkg": 8.0, "abilities": {"0": "Motor Drive", "H": "Sap Sipper"}}, "Roggenrola": {"types": ["Rock"], "bs": {"hp": 55, "at": 75, "df": 85, "sa": 25, "sd": 25, "sp": 15}, "weightkg": 1.8, "abilities": {"0": "Intimidate", "H": "Sturdy"}, "nfe": true}, "Boldore": {"types": ["Rock"], "bs": {"hp": 70, "at": 105, "df": 105, "sa": 50, "sd": 40, "sp": 20}, "weightkg": 10.2, "abilities": {"0": "Intimidate", "H": "Sturdy"}, "nfe": true}, "Gigalith": {"types": ["Rock"], "bs": {"hp": 85, "at": 135, "df": 130, "sa": 60, "sd": 80, "sp": 25}, "weightkg": 26.0, "abilities": {"0": "Intimidate", "H": "Sturdy"}}, "Drilbur": {"types": ["Ground"], "bs": {"hp": 60, "at": 85, "df": 40, "sa": 30, "sd": 45, "sp": 68}, "weightkg": 0.8, "abilities": {"0": "Mold Breaker", "1": "Sand Rush", "H": "Sand Force"}, "nfe": true}, "Excadrill": {"types": ["Ground", "Steel"], "bs": {"hp": 110, "at": 135, "df": 60, "sa": 50, "sd": 65, "sp": 88}, "weightkg": 4.0, "abilities": {"0": "Mold Breaker", "1": "Sand Rush", "H": "Sand Force"}}, "Excadrill-Mega": {"types": ["Ground", "Steel"], "bs": {"hp": 110, "at": 165, "df": 100, "sa": 65, "sd": 65, "sp": 103}, "weightkg": 6.0, "abilities": {"0": "Clear Body"}, "baseSpecies": "Excadrill"}, "Audino": {"types": ["Normal"], "bs": {"hp": 103, "at": 60, "df": 86, "sa": 60, "sd": 86, "sp": 50}, "weightkg": 3.1, "abilities": {"0": "Regenerator", "H": "Klutz"}}, "Audino-Mega": {"types": ["Normal", "Fairy"], "bs": {"hp": 103, "at": 60, "df": 126, "sa": 80, "sd": 126, "sp": 50}, "weightkg": 3.2, "abilities": {"0": "Healer"}, "baseSpecies": "Audino"}, "Timburr": {"types": ["Fighting"], "bs": {"hp": 75, "at": 80, "df": 55, "sa": 25, "sd": 35, "sp": 35}, "weightkg": 1.2, "abilities": {"0": "Guts", "H": "Iron Fist"}, "nfe": true}, "Gurdurr": {"types": ["Fighting"], "bs": {"hp": 85, "at": 105, "df": 85, "sa": 40, "sd": 50, "sp": 40}, "weightkg": 4.0, "abilities": {"0": "Guts", "H": "Iron Fist"}, "nfe": true}, "Conkeldurr": {"types": ["Fighting"], "bs": {"hp": 105, "at": 140, "df": 95, "sa": 55, "sd": 65, "sp": 45}, "weightkg": 8.7, "abilities": {"0": "Guts", "H": "Iron Fist"}}, "Tympole": {"types": ["Water"], "bs": {"hp": 50, "at": 50, "df": 40, "sa": 50, "sd": 40, "sp": 64}, "weightkg": 0.5, "abilities": {"0": "Swift Swim", "H": "Water Absorb"}, "nfe": true}, "Palpitoad": {"types": ["Water", "Ground"], "bs": {"hp": 75, "at": 65, "df": 55, "sa": 65, "sd": 55, "sp": 69}, "weightkg": 1.7, "abilities": {"0": "Swift Swim", "H": "Water Absorb"}, "nfe": true}, "Seismitoad": {"types": ["Water", "Ground"], "bs": {"hp": 105, "at": 95, "df": 75, "sa": 85, "sd": 75, "sp": 74}, "weightkg": 6.2, "abilities": {"0": "Swift Swim", "H": "Water Absorb"}}, "Sewaddle": {"types": ["Bug", "Grass"], "bs": {"hp": 45, "at": 53, "df": 70, "sa": 40, "sd": 60, "sp": 42}, "weightkg": 0.2, "abilities": {"0": "Leaf Guard", "1": "Chlorophyll", "H": "Overcoat"}, "nfe": true}, "Swadloon": {"types": ["Bug", "Grass"], "bs": {"hp": 55, "at": 63, "df": 90, "sa": 50, "sd": 80, "sp": 42}, "weightkg": 0.7, "abilities": {"0": "Leaf Guard", "1": "Chlorophyll", "H": "Overcoat"}, "nfe": true}, "Leavanny": {"types": ["Bug", "Grass"], "bs": {"hp": 75, "at": 103, "df": 80, "sa": 70, "sd": 80, "sp": 92}, "weightkg": 2.0, "abilities": {"0": "Leaf Guard", "1": "Sharpness", "H": "Overcoat"}}, "Venipede": {"types": ["Bug", "Poison"], "bs": {"hp": 30, "at": 45, "df": 59, "sa": 30, "sd": 39, "sp": 57}, "weightkg": 0.5, "abilities": {"0": "Poison Point", "1": "Speed Boost", "H": "Swarm"}, "nfe": true}, "Whirlipede": {"types": ["Bug", "Poison"], "bs": {"hp": 40, "at": 55, "df": 99, "sa": 40, "sd": 79, "sp": 47}, "weightkg": 5.8, "abilities": {"0": "Poison Point", "1": "Speed Boost", "H": "Swarm"}, "nfe": true}, "Scolipede": {"types": ["Bug", "Poison"], "bs": {"hp": 60, "at": 100, "df": 89, "sa": 55, "sd": 69, "sp": 112}, "weightkg": 20.1, "abilities": {"0": "Poison Point", "1": "Speed Boost", "H": "Swarm"}}, "Scolipede-Mega": {"types": ["Bug", "Poison"], "bs": {"hp": 60, "at": 140, "df": 149, "sa": 75, "sd": 99, "sp": 62}, "weightkg": 23.1, "abilities": {"0": "Steelworker"}, "baseSpecies": "Scolipede"}, "Cottonee": {"types": ["Grass", "Fairy"], "bs": {"hp": 40, "at": 27, "df": 60, "sa": 37, "sd": 50, "sp": 66}, "weightkg": 0.1, "abilities": {"0": "Prankster", "H": "Chlorophyll"}, "nfe": true}, "Whimsicott": {"types": ["Grass", "Fairy"], "bs": {"hp": 60, "at": 67, "df": 85, "sa": 77, "sd": 75, "sp": 116}, "weightkg": 0.7, "abilities": {"0": "Prankster", "H": "Chlorophyll"}}, "Petilil": {"types": ["Grass"], "bs": {"hp": 45, "at": 35, "df": 50, "sa": 70, "sd": 50, "sp": 30}, "weightkg": 0.7, "abilities": {"0": "Chlorophyll", "1": "Own Tempo", "H": "Leaf Guard"}, "nfe": true}, "Lilligant": {"types": ["Grass"], "bs": {"hp": 70, "at": 60, "df": 75, "sa": 110, "sd": 75, "sp": 90}, "weightkg": 1.6, "abilities": {"0": "Chlorophyll", "H": "Leaf Guard"}}, "Lilligant-Hisui": {"types": ["Grass", "Fighting"], "bs": {"hp": 70, "at": 105, "df": 75, "sa": 50, "sd": 75, "sp": 105}, "weightkg": 1.9, "abilities": {"0": "Chlorophyll", "1": "Own Tempo", "H": "Hustle"}}, "Basculin": {"types": ["Water"], "bs": {"hp": 70, "at": 92, "df": 65, "sa": 80, "sd": 55, "sp": 98}, "weightkg": 1.8, "abilities": {"0": "Reckless", "1": "Adaptability", "H": "Mold Breaker"}}, "Basculin-Blue-Striped": {"types": ["Water"], "bs": {"hp": 70, "at": 92, "df": 65, "sa": 80, "sd": 55, "sp": 98}, "weightkg": 1.8, "abilities": {"0": "Rock Head", "1": "Adaptability", "H": "Mold Breaker"}}, "Basculin-White-Striped": {"types": ["Water"], "bs": {"hp": 70, "at": 92, "df": 65, "sa": 80, "sd": 55, "sp": 98}, "weightkg": 1.8, "abilities": {"0": "Rattled", "1": "Adaptability", "H": "Mold Breaker"}, "nfe": true}, "Basculegion": {"types": ["Water", "Ghost"], "bs": {"hp": 120, "at": 112, "df": 65, "sa": 80, "sd": 75, "sp": 78}, "weightkg": 11.0, "abilities": {"0": "Swift Swim", "1": "Adaptability", "H": "Mold Breaker"}}, "Basculegion-F": {"types": ["Water", "Ghost"], "bs": {"hp": 120, "at": 92, "df": 65, "sa": 100, "sd": 75, "sp": 78}, "weightkg": 11.0, "abilities": {"0": "Swift Swim", "1": "Adaptability", "H": "Mold Breaker"}}, "Sandile": {"types": ["Ground", "Dark"], "bs": {"hp": 50, "at": 72, "df": 35, "sa": 35, "sd": 35, "sp": 65}, "weightkg": 1.5, "abilities": {"0": "Intimidate", "H": "Anger Point"}, "nfe": true}, "Krokorok": {"types": ["Ground", "Dark"], "bs": {"hp": 60, "at": 82, "df": 45, "sa": 45, "sd": 45, "sp": 74}, "weightkg": 3.3, "abilities": {"0": "Intimidate", "H": "Anger Point"}, "nfe": true}, "Krookodile": {"types": ["Ground", "Dark"], "bs": {"hp": 95, "at": 117, "df": 80, "sa": 65, "sd": 70, "sp": 92}, "weightkg": 9.6, "abilities": {"0": "Intimidate", "H": "Anger Point"}}, "Darumaka": {"types": ["Fire"], "bs": {"hp": 70, "at": 90, "df": 45, "sa": 15, "sd": 45, "sp": 50}, "weightkg": 3.8, "abilities": {"0": "Sheer Force", "H": "Inner Focus"}, "nfe": true}, "Darmanitan": {"types": ["Fire"], "bs": {"hp": 105, "at": 140, "df": 55, "sa": 30, "sd": 55, "sp": 95}, "weightkg": 9.3, "abilities": {"0": "Sheer Force", "H": "Zen Mode"}}, "Darmanitan-Zen": {"types": ["Fire", "Psychic"], "bs": {"hp": 105, "at": 30, "df": 105, "sa": 140, "sd": 105, "sp": 55}, "weightkg": 9.3, "abilities": {"0": "Sheer Force", "H": "Zen Mode"}}, "Darumaka-Galar": {"types": ["Ice"], "bs": {"hp": 70, "at": 90, "df": 45, "sa": 15, "sd": 45, "sp": 50}, "weightkg": 4.0, "abilities": {"0": "Inner Focus", "H": "Gorilla Tactics"}, "nfe": true}, "Darmanitan-Galar": {"types": ["Ice"], "bs": {"hp": 105, "at": 140, "df": 55, "sa": 30, "sd": 55, "sp": 95}, "weightkg": 12.0, "abilities": {"0": "Zen Mode", "H": "Gorilla Tactics"}}, "Darmanitan-Galar-Zen": {"types": ["Ice", "Fire"], "bs": {"hp": 105, "at": 160, "df": 55, "sa": 30, "sd": 55, "sp": 135}, "weightkg": 12.0, "abilities": {"0": "Zen Mode", "H": "Inner Focus"}}, "Maractus": {"types": ["Grass"], "bs": {"hp": 75, "at": 86, "df": 67, "sa": 106, "sd": 67, "sp": 60}, "weightkg": 2.8, "abilities": {"0": "Leaf Guard", "1": "Chlorophyll", "H": "Storm Drain"}}, "Dwebble": {"types": ["Bug", "Rock"], "bs": {"hp": 50, "at": 65, "df": 85, "sa": 35, "sd": 35, "sp": 55}, "weightkg": 1.4, "abilities": {"0": "Shell Armor", "1": "Sturdy", "H": "Weak Armor"}, "nfe": true}, "Crustle": {"types": ["Bug", "Rock"], "bs": {"hp": 70, "at": 105, "df": 125, "sa": 65, "sd": 75, "sp": 45}, "weightkg": 20.0, "abilities": {"0": "Shell Armor", "1": "Sturdy", "H": "Weak Armor"}}, "Scraggy": {"types": ["Dark", "Fighting"], "bs": {"hp": 50, "at": 75, "df": 70, "sa": 35, "sd": 70, "sp": 48}, "weightkg": 1.2, "abilities": {"0": "Intimidate", "H": "Moxie"}, "nfe": true}, "Scrafty": {"types": ["Dark", "Fighting"], "bs": {"hp": 65, "at": 90, "df": 115, "sa": 45, "sd": 115, "sp": 58}, "weightkg": 3.0, "abilities": {"0": "Intimidate", "H": "Shed Skin"}}, "Scrafty-Mega": {"types": ["Dark", "Fighting"], "bs": {"hp": 65, "at": 130, "df": 135, "sa": 55, "sd": 135, "sp": 68}, "weightkg": 3.1, "abilities": {"0": "Justified"}, "baseSpecies": "Scrafty"}, "Sigilyph": {"types": ["Psychic", "Flying"], "bs": {"hp": 72, "at": 58, "df": 80, "sa": 103, "sd": 80, "sp": 97}, "weightkg": 1.4, "abilities": {"0": "Magic Guard", "H": "Tinted Lens"}}, "Yamask": {"types": ["Ghost"], "bs": {"hp": 38, "at": 30, "df": 85, "sa": 55, "sd": 65, "sp": 30}, "weightkg": 0.1, "abilities": {"0": "Mummy"}, "nfe": true}, "Cofagrigus": {"types": ["Ghost"], "bs": {"hp": 58, "at": 50, "df": 145, "sa": 95, "sd": 105, "sp": 30}, "weightkg": 7.7, "abilities": {"0": "Mummy"}}, "Yamask-Galar": {"types": ["Ground", "Ghost"], "bs": {"hp": 38, "at": 55, "df": 85, "sa": 30, "sd": 65, "sp": 30}, "weightkg": 0.1, "abilities": {"0": "Wandering Spirit"}, "nfe": true}, "Runerigus": {"types": ["Ground", "Ghost"], "bs": {"hp": 58, "at": 95, "df": 145, "sa": 50, "sd": 105, "sp": 30}, "weightkg": 6.7, "abilities": {"0": "Wandering Spirit"}}, "Tirtouga": {"types": ["Water", "Rock"], "bs": {"hp": 54, "at": 78, "df": 103, "sa": 53, "sd": 45, "sp": 22}, "weightkg": 1.6, "abilities": {"0": "Solid Rock", "1": "Sturdy", "H": "Swift Swim"}, "nfe": true}, "Carracosta": {"types": ["Water", "Rock"], "bs": {"hp": 74, "at": 108, "df": 133, "sa": 83, "sd": 65, "sp": 32}, "weightkg": 8.1, "abilities": {"0": "Solid Rock", "1": "Sturdy", "H": "Swift Swim"}}, "Archen": {"types": ["Rock", "Flying"], "bs": {"hp": 55, "at": 112, "df": 45, "sa": 74, "sd": 45, "sp": 70}, "weightkg": 0.9, "abilities": {"0": "Defeatist"}, "nfe": true}, "Archeops": {"types": ["Rock", "Flying"], "bs": {"hp": 75, "at": 140, "df": 65, "sa": 112, "sd": 65, "sp": 110}, "weightkg": 3.2, "abilities": {"0": "Defeatist"}}, "Zorua": {"types": ["Dark"], "bs": {"hp": 40, "at": 65, "df": 40, "sa": 80, "sd": 40, "sp": 65}, "weightkg": 1.2, "abilities": {"0": "Illusion"}, "nfe": true}, "Zoroark": {"types": ["Dark"], "bs": {"hp": 60, "at": 105, "df": 60, "sa": 120, "sd": 60, "sp": 105}, "weightkg": 8.1, "abilities": {"0": "Illusion"}}, "Zorua-Hisui": {"types": ["Normal", "Ghost"], "bs": {"hp": 35, "at": 60, "df": 40, "sa": 85, "sd": 40, "sp": 70}, "weightkg": 1.2, "abilities": {"0": "Illusion"}, "nfe": true}, "Zoroark-Hisui": {"types": ["Normal", "Ghost"], "bs": {"hp": 55, "at": 100, "df": 60, "sa": 125, "sd": 60, "sp": 110}, "weightkg": 7.3, "abilities": {"0": "Illusion"}}, "Minccino": {"types": ["Normal"], "bs": {"hp": 55, "at": 50, "df": 40, "sa": 40, "sd": 40, "sp": 75}, "weightkg": 0.6, "abilities": {"0": "Skill Link", "1": "Technician", "H": "Cute Charm"}, "nfe": true}, "Cinccino": {"types": ["Normal"], "bs": {"hp": 75, "at": 95, "df": 60, "sa": 65, "sd": 60, "sp": 115}, "weightkg": 0.8, "abilities": {"0": "Skill Link", "1": "Technician", "H": "Cute Charm"}}, "Solosis": {"types": ["Psychic"], "bs": {"hp": 45, "at": 30, "df": 40, "sa": 105, "sd": 50, "sp": 20}, "weightkg": 0.1, "abilities": {"0": "Magic Guard", "1": "Regenerator", "H": "Magic Guard"}, "nfe": true}, "Duosion": {"types": ["Psychic"], "bs": {"hp": 65, "at": 40, "df": 50, "sa": 125, "sd": 60, "sp": 30}, "weightkg": 0.8, "abilities": {"0": "Magic Guard", "1": "Regenerator", "H": "Magic Guard"}, "nfe": true}, "Reuniclus": {"types": ["Psychic"], "bs": {"hp": 110, "at": 65, "df": 75, "sa": 125, "sd": 85, "sp": 30}, "weightkg": 2.0, "abilities": {"0": "Magic Guard", "1": "Regenerator", "H": "Overcoat"}}, "Ducklett": {"types": ["Water", "Flying"], "bs": {"hp": 62, "at": 44, "df": 50, "sa": 44, "sd": 50, "sp": 55}, "weightkg": 0.6, "abilities": {"0": "No Guard", "H": "Hydration"}, "nfe": true}, "Swanna": {"types": ["Water", "Flying"], "bs": {"hp": 75, "at": 87, "df": 63, "sa": 87, "sd": 63, "sp": 98}, "weightkg": 2.4, "abilities": {"0": "No Guard", "H": "Hydration"}}, "Emolga": {"types": ["Electric", "Flying"], "bs": {"hp": 55, "at": 75, "df": 60, "sa": 75, "sd": 60, "sp": 103}, "weightkg": 0.5, "abilities": {"0": "Motor Drive", "H": "Static"}}, "Karrablast": {"types": ["Bug"], "bs": {"hp": 50, "at": 75, "df": 45, "sa": 40, "sd": 45, "sp": 60}, "weightkg": 0.6, "abilities": {"0": "Swarm", "1": "Shed Skin", "H": "No Guard"}, "nfe": true}, "Escavalier": {"types": ["Bug", "Steel"], "bs": {"hp": 70, "at": 135, "df": 105, "sa": 60, "sd": 105, "sp": 20}, "weightkg": 3.3, "abilities": {"0": "Shell Armor", "H": "Swarm"}}, "Foongus": {"types": ["Grass", "Poison"], "bs": {"hp": 69, "at": 55, "df": 45, "sa": 55, "sd": 55, "sp": 15}, "weightkg": 0.1, "abilities": {"0": "Effect Spore", "H": "Regenerator"}, "nfe": true}, "Amoonguss": {"types": ["Grass", "Poison"], "bs": {"hp": 114, "at": 85, "df": 70, "sa": 85, "sd": 80, "sp": 30}, "weightkg": 1.1, "abilities": {"0": "Effect Spore", "H": "Regenerator"}}, "Frillish": {"types": ["Water", "Ghost"], "bs": {"hp": 55, "at": 40, "df": 50, "sa": 65, "sd": 85, "sp": 40}, "weightkg": 3.3, "abilities": {"0": "Damp", "1": "Cursed Body", "H": "Water Absorb"}, "nfe": true}, "Jellicent": {"types": ["Water", "Ghost"], "bs": {"hp": 100, "at": 60, "df": 70, "sa": 85, "sd": 105, "sp": 60}, "weightkg": 13.5, "abilities": {"0": "Damp", "1": "Cursed Body", "H": "Water Absorb"}}, "Joltik": {"types": ["Bug", "Electric"], "bs": {"hp": 50, "at": 47, "df": 50, "sa": 57, "sd": 50, "sp": 65}, "weightkg": 0.1, "abilities": {"0": "Compound Eyes", "1": "Unnerve", "H": "Swarm"}, "nfe": true}, "Galvantula": {"types": ["Bug", "Electric"], "bs": {"hp": 70, "at": 77, "df": 60, "sa": 97, "sd": 60, "sp": 108}, "weightkg": 1.4, "abilities": {"0": "Compound Eyes", "1": "Unnerve", "H": "Swarm"}}, "Ferroseed": {"types": ["Grass", "Steel"], "bs": {"hp": 44, "at": 50, "df": 91, "sa": 24, "sd": 86, "sp": 10}, "weightkg": 1.9, "abilities": {"0": "Iron Barbs"}, "nfe": true}, "Ferrothorn": {"types": ["Grass", "Steel"], "bs": {"hp": 74, "at": 94, "df": 131, "sa": 54, "sd": 116, "sp": 20}, "weightkg": 11.0, "abilities": {"0": "Iron Barbs", "H": "Anticipation"}}, "Tynamo": {"types": ["Electric"], "bs": {"hp": 35, "at": 55, "df": 40, "sa": 45, "sd": 40, "sp": 60}, "weightkg": 0.0, "abilities": {"0": "Levitate"}, "nfe": true}, "Eelektrik": {"types": ["Electric"], "bs": {"hp": 65, "at": 85, "df": 70, "sa": 75, "sd": 70, "sp": 40}, "weightkg": 2.2, "abilities": {"0": "Levitate"}, "nfe": true}, "Eelektross": {"types": ["Electric"], "bs": {"hp": 85, "at": 115, "df": 80, "sa": 105, "sd": 80, "sp": 50}, "weightkg": 8.1, "abilities": {"0": "Levitate"}}, "Eelektross-Mega": {"types": ["Electric"], "bs": {"hp": 85, "at": 145, "df": 80, "sa": 135, "sd": 90, "sp": 80}, "weightkg": 18.0, "abilities": {"0": "Levitate"}, "baseSpecies": "Eelektross"}, "Litwick": {"types": ["Ghost", "Fire"], "bs": {"hp": 50, "at": 30, "df": 55, "sa": 65, "sd": 55, "sp": 20}, "weightkg": 0.3, "abilities": {"0": "Infiltrator", "1": "Shadow Tag", "H": "Flash Fire"}, "nfe": true}, "Lampent": {"types": ["Ghost", "Fire"], "bs": {"hp": 60, "at": 40, "df": 60, "sa": 95, "sd": 60, "sp": 55}, "weightkg": 1.3, "abilities": {"0": "Infiltrator", "1": "Shadow Tag", "H": "Flash Fire"}, "nfe": true}, "Chandelure": {"types": ["Ghost", "Fire"], "bs": {"hp": 60, "at": 55, "df": 90, "sa": 145, "sd": 90, "sp": 80}, "weightkg": 3.4, "abilities": {"0": "Infiltrator", "1": "Shadow Tag", "H": "Flash Fire"}}, "Chandelure-Mega": {"types": ["Ghost", "Fire"], "bs": {"hp": 60, "at": 75, "df": 110, "sa": 175, "sd": 110, "sp": 90}, "weightkg": 7.0, "abilities": {"0": "Technician"}, "baseSpecies": "Chandelure"}, "Axew": {"types": ["Dragon"], "bs": {"hp": 46, "at": 87, "df": 60, "sa": 30, "sd": 40, "sp": 57}, "weightkg": 1.8, "abilities": {"0": "Unnerve", "1": "Mold Breaker", "H": "Rivalry"}, "nfe": true}, "Fraxure": {"types": ["Dragon"], "bs": {"hp": 66, "at": 117, "df": 70, "sa": 40, "sd": 50, "sp": 67}, "weightkg": 3.6, "abilities": {"0": "Unnerve", "1": "Mold Breaker", "H": "Rivalry"}, "nfe": true}, "Haxorus": {"types": ["Dragon"], "bs": {"hp": 76, "at": 147, "df": 90, "sa": 60, "sd": 70, "sp": 97}, "weightkg": 10.6, "abilities": {"0": "Unnerve", "1": "Mold Breaker", "H": "Rivalry"}}, "Cubchoo": {"types": ["Ice"], "bs": {"hp": 55, "at": 70, "df": 40, "sa": 60, "sd": 40, "sp": 40}, "weightkg": 0.8, "abilities": {"0": "Rattled", "1": "Slush Rush", "H": "Snow Cloak"}, "nfe": true}, "Beartic": {"types": ["Ice"], "bs": {"hp": 95, "at": 130, "df": 80, "sa": 70, "sd": 80, "sp": 50}, "weightkg": 26.0, "abilities": {"0": "Swift Swim", "1": "Slush Rush", "H": "Snow Cloak"}}, "Shelmet": {"types": ["Bug"], "bs": {"hp": 50, "at": 40, "df": 85, "sa": 40, "sd": 65, "sp": 25}, "weightkg": 0.8, "abilities": {"0": "Hydration", "1": "Shell Armor", "H": "Overcoat"}, "nfe": true}, "Accelgor": {"types": ["Bug"], "bs": {"hp": 80, "at": 70, "df": 40, "sa": 100, "sd": 60, "sp": 145}, "weightkg": 2.5, "abilities": {"0": "Unburden", "H": "Hydration"}}, "Stunfisk": {"types": ["Ground", "Electric"], "bs": {"hp": 109, "at": 66, "df": 84, "sa": 81, "sd": 99, "sp": 32}, "weightkg": 1.1, "abilities": {"0": "Sand Veil", "1": "Limber", "H": "Static"}}, "Stunfisk-Galar": {"types": ["Ground", "Steel"], "bs": {"hp": 109, "at": 81, "df": 99, "sa": 66, "sd": 84, "sp": 32}, "weightkg": 2.0, "abilities": {"0": "Mimicry"}}, "Mienfoo": {"types": ["Fighting"], "bs": {"hp": 45, "at": 85, "df": 50, "sa": 55, "sd": 50, "sp": 65}, "weightkg": 2.0, "abilities": {"0": "Reckless", "1": "Regenerator", "H": "Inner Focus"}, "nfe": true}, "Mienshao": {"types": ["Fighting"], "bs": {"hp": 65, "at": 125, "df": 60, "sa": 95, "sd": 60, "sp": 105}, "weightkg": 3.5, "abilities": {"0": "Reckless", "1": "Inner Focus", "H": "Regenerator"}}, "Druddigon": {"types": ["Dragon"], "bs": {"hp": 77, "at": 120, "df": 90, "sa": 60, "sd": 90, "sp": 48}, "weightkg": 13.9, "abilities": {"0": "Rough Skin", "1": "Sheer Force", "H": "Mold Breaker"}}, "Golett": {"types": ["Ground", "Ghost"], "bs": {"hp": 59, "at": 74, "df": 50, "sa": 35, "sd": 50, "sp": 35}, "weightkg": 9.2, "abilities": {"0": "Iron Fist", "1": "No Guard", "H": "Klutz"}, "nfe": true}, "Golurk": {"types": ["Ground", "Ghost"], "bs": {"hp": 89, "at": 124, "df": 80, "sa": 55, "sd": 80, "sp": 55}, "weightkg": 33.0, "abilities": {"0": "Iron Fist", "1": "No Guard", "H": "Klutz"}}, "Golurk-Mega": {"types": ["Ground", "Ghost"], "bs": {"hp": 89, "at": 159, "df": 105, "sa": 70, "sd": 105, "sp": 55}, "weightkg": 33.0, "abilities": {"0": "Solid Rock"}, "baseSpecies": "Golurk"}, "Pawniard": {"types": ["Dark", "Steel"], "bs": {"hp": 45, "at": 85, "df": 70, "sa": 40, "sd": 40, "sp": 60}, "weightkg": 1.0, "abilities": {"0": "Inner Focus", "H": "Defiant"}, "nfe": true}, "Bisharp": {"types": ["Dark", "Steel"], "bs": {"hp": 65, "at": 125, "df": 100, "sa": 60, "sd": 70, "sp": 70}, "weightkg": 7.0, "abilities": {"0": "Inner Focus", "H": "Defiant"}, "nfe": true}, "Kingambit": {"types": ["Dark", "Steel"], "bs": {"hp": 100, "at": 135, "df": 120, "sa": 60, "sd": 85, "sp": 50}, "weightkg": 12.0, "abilities": {"0": "Supreme Overlord", "H": "Defiant"}}, "Rufflet": {"types": ["Normal", "Flying"], "bs": {"hp": 70, "at": 83, "df": 50, "sa": 37, "sd": 50, "sp": 60}, "weightkg": 1.1, "abilities": {"0": "Hustle", "1": "Sheer Force", "H": "Keen Eye"}, "nfe": true}, "Braviary": {"types": ["Normal", "Flying"], "bs": {"hp": 100, "at": 123, "df": 75, "sa": 57, "sd": 75, "sp": 80}, "weightkg": 4.1, "abilities": {"0": "Defiant", "1": "Sheer Force", "H": "Keen Eye"}}, "Braviary-Hisui": {"types": ["Psychic", "Flying"], "bs": {"hp": 110, "at": 83, "df": 70, "sa": 112, "sd": 70, "sp": 65}, "weightkg": 4.3, "abilities": {"0": "Keen Eye", "1": "Sheer Force", "H": "Tinted Lens"}}, "Vullaby": {"types": ["Dark", "Flying"], "bs": {"hp": 70, "at": 55, "df": 75, "sa": 45, "sd": 65, "sp": 60}, "weightkg": 0.9, "abilities": {"0": "Big Pecks", "1": "Overcoat", "H": "Weak Armor"}, "nfe": true}, "Mandibuzz": {"types": ["Dark", "Flying"], "bs": {"hp": 110, "at": 65, "df": 105, "sa": 55, "sd": 95, "sp": 80}, "weightkg": 4.0, "abilities": {"0": "Big Pecks", "1": "Overcoat", "H": "Weak Armor"}}, "Heatmor": {"types": ["Fire"], "bs": {"hp": 85, "at": 97, "df": 66, "sa": 105, "sd": 66, "sp": 65}, "weightkg": 5.8, "abilities": {"0": "Gluttony", "1": "White Smoke", "H": "Flash Fire"}}, "Durant": {"types": ["Bug", "Steel"], "bs": {"hp": 58, "at": 109, "df": 112, "sa": 48, "sd": 48, "sp": 109}, "weightkg": 3.3, "abilities": {"0": "Swarm", "1": "Hustle", "H": "Truant"}}, "Deino": {"types": ["Dark", "Dragon"], "bs": {"hp": 52, "at": 65, "df": 50, "sa": 45, "sd": 50, "sp": 38}, "weightkg": 1.7, "abilities": {"0": "Hustle"}, "nfe": true}, "Zweilous": {"types": ["Dark", "Dragon"], "bs": {"hp": 72, "at": 85, "df": 70, "sa": 65, "sd": 70, "sp": 58}, "weightkg": 5.0, "abilities": {"0": "Hustle"}, "nfe": true}, "Hydreigon": {"types": ["Dark", "Dragon"], "bs": {"hp": 92, "at": 105, "df": 90, "sa": 125, "sd": 90, "sp": 98}, "weightkg": 16.0, "abilities": {"0": "Levitate"}}, "Larvesta": {"types": ["Bug", "Fire"], "bs": {"hp": 55, "at": 85, "df": 55, "sa": 50, "sd": 55, "sp": 60}, "weightkg": 2.9, "abilities": {"0": "Flame Body", "1": "Swarm", "H": "Swarm"}, "nfe": true}, "Volcarona": {"types": ["Bug", "Fire"], "bs": {"hp": 85, "at": 60, "df": 65, "sa": 135, "sd": 105, "sp": 100}, "weightkg": 4.6, "abilities": {"0": "Flame Body", "1": "Swarm", "H": "Swarm"}}, "Cobalion": {"types": ["Steel", "Fighting"], "bs": {"hp": 91, "at": 90, "df": 129, "sa": 90, "sd": 72, "sp": 108}, "weightkg": 25.0, "abilities": {"0": "Inner Focus", "1": "Justified"}}, "Terrakion": {"types": ["Rock", "Fighting"], "bs": {"hp": 91, "at": 129, "df": 90, "sa": 72, "sd": 90, "sp": 108}, "weightkg": 26.0, "abilities": {"0": "Inner Focus", "1": "Justified"}}, "Virizion": {"types": ["Grass", "Fighting"], "bs": {"hp": 91, "at": 90, "df": 72, "sa": 90, "sd": 129, "sp": 108}, "weightkg": 20.0, "abilities": {"0": "Inner Focus", "1": "Justified"}}, "Tornadus": {"types": ["Flying"], "bs": {"hp": 79, "at": 115, "df": 70, "sa": 125, "sd": 80, "sp": 111}, "weightkg": 6.3, "abilities": {"0": "Prankster", "H": "Defiant"}}, "Tornadus-Therian": {"types": ["Flying"], "bs": {"hp": 79, "at": 100, "df": 80, "sa": 110, "sd": 90, "sp": 121}, "weightkg": 6.3, "abilities": {"0": "Regenerator"}}, "Thundurus": {"types": ["Electric", "Flying"], "bs": {"hp": 79, "at": 115, "df": 70, "sa": 125, "sd": 80, "sp": 111}, "weightkg": 6.1, "abilities": {"0": "Prankster", "H": "Defiant"}}, "Thundurus-Therian": {"types": ["Electric", "Flying"], "bs": {"hp": 79, "at": 105, "df": 70, "sa": 145, "sd": 80, "sp": 101}, "weightkg": 6.1, "abilities": {"0": "Unnerve", "H": "Volt Absorb"}}, "Reshiram": {"types": ["Dragon", "Fire"], "bs": {"hp": 100, "at": 120, "df": 100, "sa": 150, "sd": 120, "sp": 90}, "weightkg": 33.0, "abilities": {"0": "Turboblaze"}}, "Zekrom": {"types": ["Dragon", "Electric"], "bs": {"hp": 100, "at": 150, "df": 120, "sa": 120, "sd": 100, "sp": 90}, "weightkg": 34.5, "abilities": {"0": "Teravolt"}}, "Landorus": {"types": ["Ground", "Flying"], "bs": {"hp": 89, "at": 125, "df": 90, "sa": 115, "sd": 80, "sp": 101}, "weightkg": 6.8, "abilities": {"0": "Sheer Force", "H": "Sand Force"}}, "Landorus-Therian": {"types": ["Ground", "Flying"], "bs": {"hp": 89, "at": 145, "df": 90, "sa": 105, "sd": 80, "sp": 91}, "weightkg": 6.8, "abilities": {"0": "Intimidate"}}, "Kyurem": {"types": ["Dragon", "Ice"], "bs": {"hp": 125, "at": 130, "df": 90, "sa": 130, "sd": 90, "sp": 95}, "weightkg": 32.5, "abilities": {"0": "Pressure"}}, "Kyurem-White": {"types": ["Dragon", "Ice"], "bs": {"hp": 125, "at": 120, "df": 90, "sa": 170, "sd": 100, "sp": 95}, "weightkg": 32.5, "abilities": {"0": "Turboblaze"}}, "Kyurem-Black": {"types": ["Dragon", "Ice"], "bs": {"hp": 125, "at": 170, "df": 100, "sa": 120, "sd": 90, "sp": 95}, "weightkg": 32.5, "abilities": {"0": "Teravolt"}}, "Keldeo": {"types": ["Water", "Fighting"], "bs": {"hp": 91, "at": 72, "df": 90, "sa": 129, "sd": 90, "sp": 108}, "weightkg": 4.8, "abilities": {"0": "Justified"}}, "Keldeo-Resolute": {"types": ["Water", "Fighting"], "bs": {"hp": 91, "at": 72, "df": 90, "sa": 129, "sd": 90, "sp": 108}, "weightkg": 4.8, "abilities": {"0": "Justified"}}, "Meloetta": {"types": ["Normal", "Psychic"], "bs": {"hp": 100, "at": 77, "df": 77, "sa": 128, "sd": 128, "sp": 90}, "weightkg": 0.7, "abilities": {"0": "Serene Grace"}}, "Meloetta-Pirouette": {"types": ["Normal", "Fighting"], "bs": {"hp": 100, "at": 128, "df": 90, "sa": 77, "sd": 77, "sp": 128}, "weightkg": 0.7, "abilities": {"0": "Serene Grace"}}, "Genesect": {"types": ["Bug", "Steel"], "bs": {"hp": 71, "at": 120, "df": 95, "sa": 120, "sd": 95, "sp": 99}, "weightkg": 8.2, "abilities": {"0": "Analytic", "H": "Download"}}, "Genesect-Douse": {"types": ["Bug", "Steel"], "bs": {"hp": 71, "at": 120, "df": 95, "sa": 120, "sd": 95, "sp": 99}, "weightkg": 8.2, "abilities": {"0": "Analytic", "H": "Download"}}, "Genesect-Shock": {"types": ["Bug", "Steel"], "bs": {"hp": 71, "at": 120, "df": 95, "sa": 120, "sd": 95, "sp": 99}, "weightkg": 8.2, "abilities": {"0": "Analytic", "H": "Download"}}, "Genesect-Burn": {"types": ["Bug", "Steel"], "bs": {"hp": 71, "at": 120, "df": 95, "sa": 120, "sd": 95, "sp": 99}, "weightkg": 8.2, "abilities": {"0": "Analytic", "H": "Download"}}, "Genesect-Chill": {"types": ["Bug", "Steel"], "bs": {"hp": 71, "at": 120, "df": 95, "sa": 120, "sd": 95, "sp": 99}, "weightkg": 8.2, "abilities": {"0": "Analytic", "H": "Download"}}, "Chespin": {"types": ["Grass"], "bs": {"hp": 56, "at": 61, "df": 65, "sa": 48, "sd": 45, "sp": 38}, "weightkg": 0.9, "abilities": {"0": "Battle Armor", "H": "Bulletproof"}, "nfe": true}, "Quilladin": {"types": ["Grass"], "bs": {"hp": 61, "at": 78, "df": 95, "sa": 56, "sd": 58, "sp": 57}, "weightkg": 2.9, "abilities": {"0": "Battle Armor", "H": "Bulletproof"}, "nfe": true}, "Chesnaught": {"types": ["Grass", "Fighting"], "bs": {"hp": 88, "at": 107, "df": 122, "sa": 74, "sd": 75, "sp": 64}, "weightkg": 9.0, "abilities": {"0": "Battle Armor", "1": "Overgrow", "H": "Bulletproof"}}, "Chesnaught-Mega": {"types": ["Grass", "Fighting"], "bs": {"hp": 88, "at": 137, "df": 172, "sa": 74, "sd": 115, "sp": 44}, "weightkg": 9.0, "abilities": {"0": "Bulletproof", "H": "Quick Draw"}, "baseSpecies": "Chesnaught"}, "Fennekin": {"types": ["Fire"], "bs": {"hp": 40, "at": 45, "df": 40, "sa": 62, "sd": 60, "sp": 60}, "weightkg": 0.9, "abilities": {"0": "Magic Guard", "H": "Blaze"}, "nfe": true}, "Braixen": {"types": ["Fire"], "bs": {"hp": 59, "at": 59, "df": 58, "sa": 90, "sd": 70, "sp": 73}, "weightkg": 1.4, "abilities": {"0": "Magic Guard", "H": "Blaze"}, "nfe": true}, "Delphox": {"types": ["Fire", "Psychic"], "bs": {"hp": 75, "at": 69, "df": 72, "sa": 114, "sd": 100, "sp": 104}, "weightkg": 3.9, "abilities": {"0": "Magic Guard", "H": "Blaze"}}, "Delphox-Mega": {"types": ["Fire", "Psychic"], "bs": {"hp": 75, "at": 69, "df": 72, "sa": 159, "sd": 125, "sp": 134}, "weightkg": 3.9, "abilities": {"0": "Levitate", "H": "Dazzling"}, "baseSpecies": "Delphox"}, "Froakie": {"types": ["Water"], "bs": {"hp": 41, "at": 56, "df": 40, "sa": 62, "sd": 44, "sp": 71}, "weightkg": 0.7, "abilities": {"0": "Protean", "1": "Torrent", "H": "Libero"}, "nfe": true}, "Frogadier": {"types": ["Water"], "bs": {"hp": 54, "at": 63, "df": 52, "sa": 83, "sd": 56, "sp": 97}, "weightkg": 1.1, "abilities": {"0": "Protean", "1": "Torrent", "H": "Libero"}, "nfe": true}, "Greninja": {"types": ["Water", "Dark"], "bs": {"hp": 72, "at": 95, "df": 67, "sa": 103, "sd": 71, "sp": 122}, "weightkg": 4.0, "abilities": {"0": "Protean", "1": "Torrent", "H": "Libero"}}, "Greninja-Ash": {"types": ["Water", "Dark"], "bs": {"hp": 72, "at": 145, "df": 67, "sa": 153, "sd": 71, "sp": 132}, "weightkg": 4.0, "abilities": {"0": "Battle Bond"}}, "Greninja-Mega": {"types": ["Water", "Dark"], "bs": {"hp": 72, "at": 125, "df": 77, "sa": 133, "sd": 81, "sp": 142}, "weightkg": 4.0, "abilities": {"0": "Protean", "H": "Sniper"}, "baseSpecies": "Greninja"}, "Bunnelby": {"types": ["Normal"], "bs": {"hp": 38, "at": 36, "df": 38, "sa": 32, "sd": 36, "sp": 57}, "weightkg": 0.5, "abilities": {"0": "Huge Power", "H": "Cheek Pouch"}, "nfe": true}, "Diggersby": {"types": ["Normal", "Ground"], "bs": {"hp": 85, "at": 56, "df": 77, "sa": 50, "sd": 77, "sp": 78}, "weightkg": 4.2, "abilities": {"0": "Huge Power", "H": "Cheek Pouch"}}, "Fletchling": {"types": ["Normal", "Flying"], "bs": {"hp": 45, "at": 50, "df": 43, "sa": 40, "sd": 38, "sp": 62}, "weightkg": 0.2, "abilities": {"0": "Big Pecks", "1": "Gale Wings", "H": "Flame Body"}, "nfe": true}, "Fletchinder": {"types": ["Fire", "Flying"], "bs": {"hp": 62, "at": 73, "df": 55, "sa": 56, "sd": 52, "sp": 84}, "weightkg": 1.6, "abilities": {"0": "Flame Body", "1": "Gale Wings", "H": "Flame Body"}, "nfe": true}, "Talonflame": {"types": ["Fire", "Flying"], "bs": {"hp": 78, "at": 81, "df": 71, "sa": 74, "sd": 69, "sp": 126}, "weightkg": 2.5, "abilities": {"0": "Flame Body", "1": "Gale Wings", "H": "Flame Body"}}, "Litleo": {"types": ["Fire", "Normal"], "bs": {"hp": 62, "at": 50, "df": 58, "sa": 73, "sd": 54, "sp": 72}, "weightkg": 1.4, "abilities": {"0": "Moxie", "1": "Unnerve", "H": "Rivalry"}, "nfe": true}, "Pyroar": {"types": ["Fire", "Normal"], "bs": {"hp": 86, "at": 68, "df": 72, "sa": 109, "sd": 66, "sp": 106}, "weightkg": 8.2, "abilities": {"0": "Moxie", "1": "Unnerve", "H": "Rivalry"}}, "Pyroar-Mega": {"types": ["Fire", "Normal"], "bs": {"hp": 86, "at": 88, "df": 92, "sa": 129, "sd": 86, "sp": 126}, "weightkg": 9.3, "abilities": {"0": "Blaze"}, "baseSpecies": "Pyroar"}, "Flabébé": {"types": ["Fairy"], "bs": {"hp": 44, "at": 38, "df": 39, "sa": 61, "sd": 79, "sp": 42}, "weightkg": 0.0, "abilities": {"0": "Flower Veil", "1": "Symbiosis", "H": "Symbiosis"}, "nfe": true}, "Floette": {"types": ["Fairy"], "bs": {"hp": 54, "at": 45, "df": 47, "sa": 75, "sd": 98, "sp": 52}, "weightkg": 0.1, "abilities": {"0": "Flower Veil", "1": "Symbiosis", "H": "Symbiosis"}, "nfe": true}, "Floette-Eternal": {"types": ["Fairy"], "bs": {"hp": 74, "at": 65, "df": 67, "sa": 125, "sd": 128, "sp": 92}, "weightkg": 0.1, "abilities": {"0": "Flower Veil", "1": "Symbiosis", "H": "Symbiosis"}}, "Florges": {"types": ["Fairy"], "bs": {"hp": 78, "at": 65, "df": 68, "sa": 112, "sd": 154, "sp": 75}, "weightkg": 1.0, "abilities": {"0": "Flower Veil", "1": "Symbiosis", "H": "Symbiosis"}}, "Floette-Mega": {"types": ["Fairy"], "bs": {"hp": 74, "at": 85, "df": 87, "sa": 155, "sd": 148, "sp": 102}, "weightkg": 1.0, "abilities": {"0": "Aura Break", "H": "Fairy Aura"}, "baseSpecies": "Floette"}, "Skiddo": {"types": ["Grass"], "bs": {"hp": 66, "at": 65, "df": 48, "sa": 62, "sd": 57, "sp": 52}, "weightkg": 3.1, "abilities": {"0": "Leaf Guard", "1": "Grass Pelt", "H": "Sap Sipper"}, "nfe": true}, "Gogoat": {"types": ["Grass"], "bs": {"hp": 123, "at": 100, "df": 62, "sa": 97, "sd": 81, "sp": 68}, "weightkg": 9.1, "abilities": {"0": "Leaf Guard", "1": "Grass Pelt", "H": "Sap Sipper"}}, "Espurr": {"types": ["Psychic"], "bs": {"hp": 62, "at": 48, "df": 54, "sa": 63, "sd": 60, "sp": 68}, "weightkg": 0.3, "abilities": {"0": "Own Tempo", "1": "Infiltrator", "H": "Keen Eye"}, "nfe": true}, "Meowstic": {"types": ["Psychic"], "bs": {"hp": 74, "at": 48, "df": 76, "sa": 83, "sd": 81, "sp": 104}, "weightkg": 0.8, "abilities": {"0": "Prankster", "1": "Infiltrator", "H": "Keen Eye"}}, "Meowstic-F": {"types": ["Psychic"], "bs": {"hp": 74, "at": 48, "df": 76, "sa": 83, "sd": 81, "sp": 104}, "weightkg": 0.8, "abilities": {"0": "Competitive", "1": "Infiltrator", "H": "Keen Eye"}}, "Meowstic-Mega": {"types": ["Psychic"], "bs": {"hp": 74, "at": 48, "df": 76, "sa": 143, "sd": 101, "sp": 124}, "weightkg": 1.0, "abilities": {"0": "Synchronize"}, "baseSpecies": "Meowstic-F"}, "Meowstic-F-Mega": {"types": ["Psychic"], "bs": {"hp": 74, "at": 48, "df": 76, "sa": 143, "sd": 101, "sp": 124}, "weightkg": 1.0, "abilities": {"0": "Trace", "1": "Trace", "H": "Trace"}, "baseSpecies": "Meowstic-F"}, "Honedge": {"types": ["Steel", "Ghost"], "bs": {"hp": 45, "at": 80, "df": 100, "sa": 35, "sd": 37, "sp": 28}, "weightkg": 0.2, "abilities": {"0": "No Guard"}, "nfe": true}, "Doublade": {"types": ["Steel", "Ghost"], "bs": {"hp": 59, "at": 110, "df": 150, "sa": 45, "sd": 49, "sp": 35}, "weightkg": 0.5, "abilities": {"0": "No Guard"}, "nfe": true}, "Aegislash-Shield": {"types": ["Steel", "Ghost"], "bs": {"hp": 60, "at": 50, "df": 140, "sa": 50, "sd": 140, "sp": 60}, "weightkg": 5.3, "abilities": {"0": "Stance Change"}}, "Aegislash-Blade": {"types": ["Steel", "Ghost"], "bs": {"hp": 60, "at": 140, "df": 50, "sa": 140, "sd": 50, "sp": 60}, "weightkg": 5.3, "abilities": {"0": "Stance Change"}}, "Inkay": {"types": ["Dark", "Psychic"], "bs": {"hp": 53, "at": 54, "df": 53, "sa": 37, "sd": 46, "sp": 45}, "weightkg": 0.3, "abilities": {"0": "Contrary", "H": "Infiltrator"}, "nfe": true}, "Malamar": {"types": ["Dark", "Psychic"], "bs": {"hp": 86, "at": 92, "df": 88, "sa": 68, "sd": 75, "sp": 73}, "weightkg": 4.7, "abilities": {"0": "Contrary", "H": "Infiltrator"}}, "Malamar-Mega": {"types": ["Dark", "Psychic"], "bs": {"hp": 86, "at": 102, "df": 88, "sa": 98, "sd": 120, "sp": 88}, "weightkg": 7.0, "abilities": {"0": "Neuroforce"}, "baseSpecies": "Malamar"}, "Binacle": {"types": ["Rock", "Water"], "bs": {"hp": 42, "at": 52, "df": 67, "sa": 39, "sd": 56, "sp": 50}, "weightkg": 3.1, "abilities": {"0": "Tough Claws", "H": "Sniper"}, "nfe": true}, "Barbaracle": {"types": ["Rock", "Water"], "bs": {"hp": 72, "at": 105, "df": 115, "sa": 54, "sd": 86, "sp": 68}, "weightkg": 9.6, "abilities": {"0": "Tough Claws", "H": "Sniper"}}, "Barbaracle-Mega": {"types": ["Rock", "Fighting"], "bs": {"hp": 72, "at": 140, "df": 130, "sa": 64, "sd": 106, "sp": 88}, "weightkg": 10.0, "abilities": {"0": "Skill Link"}, "baseSpecies": "Barbaracle"}, "Skrelp": {"types": ["Poison", "Water"], "bs": {"hp": 50, "at": 60, "df": 60, "sa": 60, "sd": 60, "sp": 30}, "weightkg": 0.7, "abilities": {"0": "Adaptability", "H": "Poison Point"}, "nfe": true}, "Dragalge": {"types": ["Poison", "Dragon"], "bs": {"hp": 65, "at": 75, "df": 90, "sa": 97, "sd": 123, "sp": 44}, "weightkg": 8.2, "abilities": {"0": "Adaptability", "H": "Poison Point"}}, "Dragalge-Mega": {"types": ["Poison", "Dragon"], "bs": {"hp": 65, "at": 85, "df": 105, "sa": 132, "sd": 163, "sp": 44}, "weightkg": 10.0, "abilities": {"0": "Multiscale"}, "baseSpecies": "Dragalge"}, "Clauncher": {"types": ["Water"], "bs": {"hp": 50, "at": 53, "df": 62, "sa": 58, "sd": 63, "sp": 44}, "weightkg": 0.8, "abilities": {"0": "Mega Launcher"}, "nfe": true}, "Clawitzer": {"types": ["Water"], "bs": {"hp": 71, "at": 73, "df": 88, "sa": 120, "sd": 89, "sp": 59}, "weightkg": 3.5, "abilities": {"0": "Mega Launcher"}}, "Helioptile": {"types": ["Electric", "Normal"], "bs": {"hp": 44, "at": 38, "df": 33, "sa": 61, "sd": 43, "sp": 70}, "weightkg": 0.6, "abilities": {"0": "Sand Veil", "1": "Solar Power", "H": "Dry Skin"}, "nfe": true}, "Heliolisk": {"types": ["Electric", "Normal"], "bs": {"hp": 62, "at": 55, "df": 52, "sa": 109, "sd": 94, "sp": 109}, "weightkg": 2.1, "abilities": {"0": "Sand Veil", "1": "Solar Power", "H": "Dry Skin"}}, "Tyrunt": {"types": ["Rock", "Dragon"], "bs": {"hp": 58, "at": 89, "df": 77, "sa": 45, "sd": 45, "sp": 48}, "weightkg": 2.6, "abilities": {"0": "Strong Jaw", "1": "Sturdy", "H": "Sturdy"}, "nfe": true}, "Tyrantrum": {"types": ["Rock", "Dragon"], "bs": {"hp": 82, "at": 121, "df": 119, "sa": 69, "sd": 59, "sp": 71}, "weightkg": 27.0, "abilities": {"0": "Strong Jaw", "1": "Rock Head", "H": "Rock Head"}}, "Amaura": {"types": ["Rock", "Ice"], "bs": {"hp": 77, "at": 59, "df": 50, "sa": 67, "sd": 63, "sp": 46}, "weightkg": 2.5, "abilities": {"0": "Refrigerate", "H": "Snow Warning"}, "nfe": true}, "Aurorus": {"types": ["Rock", "Ice"], "bs": {"hp": 123, "at": 77, "df": 72, "sa": 99, "sd": 92, "sp": 58}, "weightkg": 22.5, "abilities": {"0": "Refrigerate", "H": "Snow Warning"}}, "Hawlucha": {"types": ["Fighting", "Flying"], "bs": {"hp": 78, "at": 92, "df": 75, "sa": 74, "sd": 63, "sp": 118}, "weightkg": 2.1, "abilities": {"0": "Unburden", "H": "Mold Breaker"}}, "Hawlucha-Mega": {"types": ["Fighting", "Flying"], "bs": {"hp": 78, "at": 137, "df": 100, "sa": 74, "sd": 93, "sp": 118}, "weightkg": 2.5, "abilities": {"0": "Reckless"}, "baseSpecies": "Hawlucha"}, "Carbink": {"types": ["Rock", "Fairy"], "bs": {"hp": 50, "at": 50, "df": 150, "sa": 50, "sd": 150, "sp": 50}, "weightkg": 0.6, "abilities": {"0": "Sturdy", "H": "Clear Body"}}, "Goomy": {"types": ["Dragon"], "bs": {"hp": 45, "at": 50, "df": 35, "sa": 55, "sd": 75, "sp": 40}, "weightkg": 0.3, "abilities": {"0": "Gooey", "1": "Poison Heal", "H": "Sap Sipper"}, "nfe": true}, "Sliggoo": {"types": ["Dragon"], "bs": {"hp": 68, "at": 75, "df": 53, "sa": 83, "sd": 113, "sp": 60}, "weightkg": 1.8, "abilities": {"0": "Gooey", "1": "Poison Heal", "H": "Sap Sipper"}, "nfe": true}, "Goodra": {"types": ["Dragon"], "bs": {"hp": 90, "at": 100, "df": 70, "sa": 110, "sd": 150, "sp": 80}, "weightkg": 15.1, "abilities": {"0": "Gooey", "1": "Poison Heal", "H": "Sap Sipper"}}, "Sliggoo-Hisui": {"types": ["Dragon", "Steel"], "bs": {"hp": 58, "at": 75, "df": 83, "sa": 83, "sd": 113, "sp": 40}, "weightkg": 6.8, "abilities": {"0": "Sap Sipper", "1": "Shell Armor", "H": "Gooey"}, "nfe": true}, "Goodra-Hisui": {"types": ["Dragon", "Steel"], "bs": {"hp": 80, "at": 100, "df": 100, "sa": 110, "sd": 150, "sp": 60}, "weightkg": 33.4, "abilities": {"0": "Gooey", "1": "Shell Armor", "H": "Sap Sipper"}}, "Klefki": {"types": ["Steel", "Fairy"], "bs": {"hp": 57, "at": 80, "df": 91, "sa": 80, "sd": 87, "sp": 75}, "weightkg": 0.3, "abilities": {"0": "Prankster", "H": "Magic Guard"}}, "Phantump": {"types": ["Ghost", "Grass"], "bs": {"hp": 43, "at": 70, "df": 48, "sa": 50, "sd": 60, "sp": 38}, "weightkg": 0.7, "abilities": {"0": "Natural Cure", "H": "Frisk"}, "nfe": true}, "Trevenant": {"types": ["Ghost", "Grass"], "bs": {"hp": 85, "at": 110, "df": 76, "sa": 65, "sd": 82, "sp": 56}, "weightkg": 7.1, "abilities": {"0": "Natural Cure", "H": "Harvest"}}, "Pumpkaboo": {"types": ["Ghost", "Grass"], "bs": {"hp": 49, "at": 66, "df": 70, "sa": 44, "sd": 55, "sp": 51}, "weightkg": 0.5, "abilities": {"0": "Pickup", "1": "Frisk", "H": "Insomnia"}, "nfe": true}, "Pumpkaboo-Small": {"types": ["Ghost", "Grass"], "bs": {"hp": 44, "at": 66, "df": 70, "sa": 44, "sd": 55, "sp": 56}, "weightkg": 0.3, "abilities": {"0": "Insomnia", "H": "Insomnia"}, "nfe": true}, "Pumpkaboo-Large": {"types": ["Ghost", "Grass"], "bs": {"hp": 54, "at": 66, "df": 70, "sa": 44, "sd": 55, "sp": 46}, "weightkg": 0.8, "abilities": {"0": "Insomnia", "H": "Insomnia"}, "nfe": true}, "Pumpkaboo-Super": {"types": ["Ghost", "Grass"], "bs": {"hp": 59, "at": 66, "df": 70, "sa": 44, "sd": 55, "sp": 41}, "weightkg": 1.5, "abilities": {"0": "Insomnia", "H": "Insomnia"}, "nfe": true}, "Gourgeist": {"types": ["Ghost", "Grass"], "bs": {"hp": 65, "at": 90, "df": 122, "sa": 58, "sd": 75, "sp": 84}, "weightkg": 1.2, "abilities": {"0": "Pickup", "1": "Frisk", "H": "Insomnia"}}, "Gourgeist-Small": {"types": ["Ghost", "Grass"], "bs": {"hp": 55, "at": 85, "df": 122, "sa": 58, "sd": 75, "sp": 99}, "weightkg": 0.9, "abilities": {"0": "Insomnia", "H": "Insomnia"}}, "Gourgeist-Large": {"types": ["Ghost", "Grass"], "bs": {"hp": 75, "at": 95, "df": 122, "sa": 58, "sd": 75, "sp": 69}, "weightkg": 1.4, "abilities": {"0": "Insomnia", "H": "Insomnia"}}, "Gourgeist-Super": {"types": ["Ghost", "Grass"], "bs": {"hp": 85, "at": 100, "df": 122, "sa": 58, "sd": 75, "sp": 54}, "weightkg": 3.9, "abilities": {"0": "Insomnia", "H": "Insomnia"}}, "Bergmite": {"types": ["Ice"], "bs": {"hp": 55, "at": 69, "df": 85, "sa": 32, "sd": 35, "sp": 28}, "weightkg": 9.9, "abilities": {"0": "Own Tempo", "1": "Sturdy", "H": "Ice Body"}, "nfe": true}, "Avalugg": {"types": ["Ice"], "bs": {"hp": 95, "at": 117, "df": 184, "sa": 44, "sd": 46, "sp": 28}, "weightkg": 50.5, "abilities": {"0": "Own Tempo", "1": "Sturdy", "H": "Ice Body"}}, "Avalugg-Hisui": {"types": ["Ice", "Rock"], "bs": {"hp": 95, "at": 127, "df": 184, "sa": 34, "sd": 36, "sp": 38}, "weightkg": 26.2, "abilities": {"0": "Own Tempo", "1": "Sturdy", "H": "Ice Body"}}, "Noibat": {"types": ["Flying", "Dragon"], "bs": {"hp": 40, "at": 30, "df": 35, "sa": 45, "sd": 40, "sp": 55}, "weightkg": 0.8, "abilities": {"0": "Infiltrator", "H": "Telepathy"}, "nfe": true}, "Noivern": {"types": ["Flying", "Dragon"], "bs": {"hp": 85, "at": 70, "df": 80, "sa": 97, "sd": 80, "sp": 123}, "weightkg": 8.5, "abilities": {"0": "Infiltrator", "1": "Telepathy", "H": "Telepathy"}}, "Xerneas": {"types": ["Fairy"], "bs": {"hp": 126, "at": 131, "df": 95, "sa": 131, "sd": 98, "sp": 99}, "weightkg": 21.5, "abilities": {"0": "Fairy Aura"}}, "Yveltal": {"types": ["Dark", "Flying"], "bs": {"hp": 126, "at": 131, "df": 95, "sa": 131, "sd": 98, "sp": 99}, "weightkg": 20.3, "abilities": {"0": "Dark Aura"}}, "Zygarde": {"types": ["Dragon", "Ground"], "bs": {"hp": 108, "at": 100, "df": 121, "sa": 81, "sd": 95, "sp": 95}, "weightkg": 30.5, "abilities": {"0": "Aura Break"}}, "Zygarde-10%": {"types": ["Dragon", "Ground"], "bs": {"hp": 54, "at": 100, "df": 71, "sa": 61, "sd": 85, "sp": 115}, "weightkg": 3.4, "abilities": {"0": "Aura Break"}}, "Zygarde-Complete": {"types": ["Dragon", "Ground"], "bs": {"hp": 216, "at": 100, "df": 121, "sa": 91, "sd": 95, "sp": 85}, "weightkg": 61.0, "abilities": {"0": "Power Construct"}}, "Zygarde-Mega": {"types": ["Dragon", "Ground"], "bs": {"hp": 216, "at": 70, "df": 91, "sa": 216, "sd": 85, "sp": 100}, "weightkg": 61.0, "abilities": {"0": "Aura Break"}, "baseSpecies": "Zygarde"}, "Diancie": {"types": ["Rock", "Fairy"], "bs": {"hp": 50, "at": 100, "df": 150, "sa": 100, "sd": 150, "sp": 50}, "weightkg": 0.9, "abilities": {"0": "Clear Body"}}, "Diancie-Mega": {"types": ["Rock", "Fairy"], "bs": {"hp": 50, "at": 160, "df": 110, "sa": 160, "sd": 110, "sp": 110}, "weightkg": 2.8, "abilities": {"0": "Magic Bounce"}, "baseSpecies": "Diancie"}, "Hoopa": {"types": ["Psychic", "Ghost"], "bs": {"hp": 80, "at": 110, "df": 60, "sa": 150, "sd": 130, "sp": 70}, "weightkg": 0.9, "abilities": {"0": "Magic Guard"}}, "Hoopa-Unbound": {"types": ["Psychic", "Dark"], "bs": {"hp": 80, "at": 160, "df": 60, "sa": 170, "sd": 130, "sp": 80}, "weightkg": 4.9, "abilities": {"0": "Magic Guard"}}, "Volcanion": {"types": ["Fire", "Water"], "bs": {"hp": 80, "at": 110, "df": 120, "sa": 130, "sd": 90, "sp": 70}, "weightkg": 19.5, "abilities": {"0": "Hydration", "H": "Water Absorb"}}, "Rowlet": {"types": ["Grass", "Flying"], "bs": {"hp": 68, "at": 55, "df": 55, "sa": 50, "sd": 50, "sp": 42}, "weightkg": 0.1, "abilities": {"0": "Overgrow", "H": "Long Reach"}, "nfe": true}, "Dartrix": {"types": ["Grass", "Flying"], "bs": {"hp": 78, "at": 75, "df": 75, "sa": 70, "sd": 70, "sp": 52}, "weightkg": 1.6, "abilities": {"0": "Overgrow", "H": "Long Reach"}, "nfe": true}, "Decidueye": {"types": ["Grass", "Ghost"], "bs": {"hp": 78, "at": 107, "df": 75, "sa": 100, "sd": 100, "sp": 70}, "weightkg": 3.7, "abilities": {"0": "Long Reach", "H": "Overgrow"}}, "Decidueye-Hisui": {"types": ["Grass", "Fighting"], "bs": {"hp": 88, "at": 112, "df": 80, "sa": 95, "sd": 95, "sp": 60}, "weightkg": 3.7, "abilities": {"0": "Long Reach", "H": "Overgrow"}}, "Litten": {"types": ["Fire"], "bs": {"hp": 45, "at": 65, "df": 40, "sa": 60, "sd": 40, "sp": 70}, "weightkg": 0.4, "abilities": {"0": "Intimidate", "H": "Blaze"}, "nfe": true}, "Torracat": {"types": ["Fire"], "bs": {"hp": 65, "at": 85, "df": 50, "sa": 80, "sd": 50, "sp": 90}, "weightkg": 2.5, "abilities": {"0": "Intimidate", "H": "Blaze"}, "nfe": true}, "Incineroar": {"types": ["Fire", "Dark"], "bs": {"hp": 95, "at": 115, "df": 90, "sa": 80, "sd": 90, "sp": 60}, "weightkg": 8.3, "abilities": {"0": "Intimidate", "H": "Blaze"}}, "Popplio": {"types": ["Water"], "bs": {"hp": 50, "at": 54, "df": 54, "sa": 66, "sd": 56, "sp": 40}, "weightkg": 0.8, "abilities": {"0": "Torrent", "H": "Liquid Voice"}, "nfe": true}, "Brionne": {"types": ["Water"], "bs": {"hp": 60, "at": 69, "df": 69, "sa": 91, "sd": 81, "sp": 50}, "weightkg": 1.8, "abilities": {"0": "Torrent", "H": "Liquid Voice"}, "nfe": true}, "Primarina": {"types": ["Water", "Fairy"], "bs": {"hp": 80, "at": 74, "df": 74, "sa": 126, "sd": 116, "sp": 60}, "weightkg": 4.4, "abilities": {"0": "Torrent", "H": "Liquid Voice"}}, "Primarina-Mega": {"types": ["Water", "Fairy"], "bs": {"hp": 80, "at": 74, "df": 134, "sa": 124, "sd": 128, "sp": 90}, "weightkg": 5.2, "abilities": {"0": "Valkyrie", "1": "Valkyrie", "H": "Valkyrie"}, "baseSpecies": "Primarina"}, "Grubbin": {"types": ["Bug"], "bs": {"hp": 47, "at": 62, "df": 45, "sa": 55, "sd": 45, "sp": 46}, "weightkg": 0.4, "abilities": {"0": "Swarm"}, "nfe": true}, "Charjabug": {"types": ["Bug", "Electric"], "bs": {"hp": 57, "at": 82, "df": 95, "sa": 55, "sd": 75, "sp": 36}, "weightkg": 1.1, "abilities": {"0": "Battery"}, "nfe": true}, "Vikavolt": {"types": ["Bug", "Electric"], "bs": {"hp": 77, "at": 70, "df": 90, "sa": 145, "sd": 75, "sp": 43}, "weightkg": 4.5, "abilities": {"0": "Levitate"}}, "Vikavolt-Totem": {"types": ["Bug", "Electric"], "bs": {"hp": 77, "at": 70, "df": 90, "sa": 145, "sd": 75, "sp": 43}, "weightkg": 14.8, "abilities": {"0": "Levitate"}}, "Crabrawler": {"types": ["Fighting"], "bs": {"hp": 47, "at": 82, "df": 57, "sa": 42, "sd": 47, "sp": 63}, "weightkg": 0.7, "abilities": {"0": "Hyper Cutter", "1": "Iron Fist", "H": "Anger Point"}, "nfe": true}, "Crabominable": {"types": ["Fighting", "Ice"], "bs": {"hp": 97, "at": 132, "df": 77, "sa": 62, "sd": 67, "sp": 43}, "weightkg": 18.0, "abilities": {"0": "Hyper Cutter", "1": "Iron Fist", "H": "Anger Point"}}, "Crabominable-Mega": {"types": ["Fighting", "Ice"], "bs": {"hp": 97, "at": 157, "df": 122, "sa": 62, "sd": 107, "sp": 33}, "weightkg": 25.3, "abilities": {"0": "Sheer Force"}, "baseSpecies": "Crabominable"}, "Oricorio": {"types": ["Fire", "Flying"], "bs": {"hp": 75, "at": 70, "df": 70, "sa": 98, "sd": 70, "sp": 93}, "weightkg": 0.3, "abilities": {"0": "Dancer"}}, "Oricorio-Pom-Pom": {"types": ["Electric", "Flying"], "bs": {"hp": 75, "at": 70, "df": 70, "sa": 98, "sd": 70, "sp": 93}, "weightkg": 0.3, "abilities": {"0": "Dancer"}}, "Oricorio-Pa'u": {"types": ["Psychic", "Flying"], "bs": {"hp": 75, "at": 70, "df": 70, "sa": 98, "sd": 70, "sp": 93}, "weightkg": 0.3, "abilities": {"0": "Dancer"}}, "Oricorio-Sensu": {"types": ["Ghost", "Flying"], "bs": {"hp": 75, "at": 70, "df": 70, "sa": 98, "sd": 70, "sp": 93}, "weightkg": 0.3, "abilities": {"0": "Dancer"}}, "Cutiefly": {"types": ["Bug", "Fairy"], "bs": {"hp": 40, "at": 45, "df": 40, "sa": 55, "sd": 40, "sp": 84}, "weightkg": 0.0, "abilities": {"0": "Sweet Veil", "1": "Shield Dust", "H": "Sweet Veil"}, "nfe": true}, "Ribombee": {"types": ["Bug", "Fairy"], "bs": {"hp": 60, "at": 55, "df": 60, "sa": 95, "sd": 70, "sp": 124}, "weightkg": 0.1, "abilities": {"0": "Sweet Veil", "1": "Shield Dust", "H": "Sweet Veil"}}, "Ribombee-Totem": {"types": ["Bug", "Fairy"], "bs": {"hp": 60, "at": 55, "df": 60, "sa": 95, "sd": 70, "sp": 124}, "weightkg": 0.2, "abilities": {"0": "Sweet Veil"}}, "Rockruff": {"types": ["Rock"], "bs": {"hp": 45, "at": 65, "df": 40, "sa": 30, "sd": 40, "sp": 60}, "weightkg": 0.9, "abilities": {"0": "Keen Eye", "1": "Vital Spirit", "H": "Steadfast"}, "nfe": true}, "Lycanroc": {"types": ["Rock"], "bs": {"hp": 75, "at": 115, "df": 65, "sa": 55, "sd": 65, "sp": 112}, "weightkg": 2.5, "abilities": {"0": "Keen Eye", "1": "Sand Rush", "H": "Steadfast"}}, "Lycanroc-Midnight": {"types": ["Rock"], "bs": {"hp": 85, "at": 115, "df": 75, "sa": 55, "sd": 75, "sp": 82}, "weightkg": 2.5, "abilities": {"0": "No Guard", "H": "No Guard"}}, "Lycanroc-Dusk": {"types": ["Rock"], "bs": {"hp": 75, "at": 117, "df": 65, "sa": 55, "sd": 65, "sp": 110}, "weightkg": 2.5, "abilities": {"0": "Tough Claws"}}, "Mareanie": {"types": ["Poison", "Water"], "bs": {"hp": 50, "at": 53, "df": 62, "sa": 43, "sd": 52, "sp": 45}, "weightkg": 0.8, "abilities": {"0": "Merciless", "1": "Limber", "H": "Regenerator"}, "nfe": true}, "Toxapex": {"types": ["Poison", "Water"], "bs": {"hp": 50, "at": 63, "df": 152, "sa": 53, "sd": 142, "sp": 35}, "weightkg": 1.4, "abilities": {"0": "Merciless", "1": "Limber", "H": "Regenerator"}}, "Mudbray": {"types": ["Ground"], "bs": {"hp": 70, "at": 100, "df": 70, "sa": 45, "sd": 55, "sp": 45}, "weightkg": 11.0, "abilities": {"0": "Own Tempo", "1": "Inner Focus", "H": "Stamina"}, "nfe": true}, "Mudsdale": {"types": ["Ground"], "bs": {"hp": 100, "at": 125, "df": 100, "sa": 55, "sd": 85, "sp": 35}, "weightkg": 92.0, "abilities": {"0": "Own Tempo", "1": "Inner Focus", "H": "Stamina"}}, "Dewpider": {"types": ["Water", "Bug"], "bs": {"hp": 38, "at": 40, "df": 52, "sa": 40, "sd": 72, "sp": 27}, "weightkg": 0.4, "abilities": {"0": "Water Bubble", "H": "Water Absorb"}, "nfe": true}, "Araquanid": {"types": ["Water", "Bug"], "bs": {"hp": 68, "at": 70, "df": 92, "sa": 50, "sd": 132, "sp": 42}, "weightkg": 8.2, "abilities": {"0": "Water Bubble", "H": "Water Absorb"}}, "Araquanid-Totem": {"types": ["Water", "Bug"], "bs": {"hp": 68, "at": 70, "df": 92, "sa": 50, "sd": 132, "sp": 42}, "weightkg": 21.8, "abilities": {"0": "Water Bubble"}}, "Morelull": {"types": ["Grass", "Fairy"], "bs": {"hp": 40, "at": 35, "df": 55, "sa": 65, "sd": 75, "sp": 15}, "weightkg": 0.1, "abilities": {"0": "Illuminate", "H": "Rain Dish"}, "nfe": true}, "Shiinotic": {"types": ["Grass", "Fairy"], "bs": {"hp": 60, "at": 45, "df": 80, "sa": 90, "sd": 100, "sp": 30}, "weightkg": 1.1, "abilities": {"0": "Illuminate", "H": "Rain Dish"}}, "Salandit": {"types": ["Poison", "Fire"], "bs": {"hp": 48, "at": 44, "df": 40, "sa": 71, "sd": 40, "sp": 77}, "weightkg": 0.5, "abilities": {"0": "Corrosion", "H": "Oblivious"}, "nfe": true}, "Salazzle": {"types": ["Poison", "Fire"], "bs": {"hp": 68, "at": 64, "df": 60, "sa": 111, "sd": 60, "sp": 117}, "weightkg": 2.2, "abilities": {"0": "Corrosion", "H": "Oblivious"}}, "Salazzle-Totem": {"types": ["Poison", "Fire"], "bs": {"hp": 68, "at": 64, "df": 60, "sa": 111, "sd": 60, "sp": 117}, "weightkg": 8.1, "abilities": {"0": "Corrosion"}}, "Stufful": {"types": ["Normal", "Fighting"], "bs": {"hp": 70, "at": 75, "df": 50, "sa": 45, "sd": 50, "sp": 50}, "weightkg": 0.7, "abilities": {"0": "Fluffy", "H": "Cute Charm"}, "nfe": true}, "Bewear": {"types": ["Normal", "Fighting"], "bs": {"hp": 120, "at": 125, "df": 80, "sa": 55, "sd": 60, "sp": 60}, "weightkg": 13.5, "abilities": {"0": "Fluffy", "H": "Unnerve"}}, "Wimpod": {"types": ["Bug", "Water"], "bs": {"hp": 25, "at": 35, "df": 40, "sa": 20, "sd": 30, "sp": 80}, "weightkg": 1.2, "abilities": {"0": "Wimp Out"}, "nfe": true}, "Golisopod": {"types": ["Bug", "Water"], "bs": {"hp": 75, "at": 125, "df": 140, "sa": 60, "sd": 90, "sp": 40}, "weightkg": 10.8, "abilities": {"0": "Emergency Exit"}}, "Golisopod-Mega": {"types": ["Bug", "Steel"], "bs": {"hp": 75, "at": 150, "df": 175, "sa": 70, "sd": 120, "sp": 40}, "weightkg": 14.8, "abilities": {"0": "Water Bubble"}, "baseSpecies": "Golisopod"}, "Sandygast": {"types": ["Ghost", "Ground"], "bs": {"hp": 55, "at": 55, "df": 80, "sa": 70, "sd": 45, "sp": 15}, "weightkg": 7.0, "abilities": {"0": "Water Compaction", "H": "Sand Veil"}, "nfe": true}, "Palossand": {"types": ["Ghost", "Ground"], "bs": {"hp": 85, "at": 75, "df": 110, "sa": 100, "sd": 75, "sp": 35}, "weightkg": 25.0, "abilities": {"0": "Water Compaction", "H": "Sand Veil"}}, "Pyukumuku": {"types": ["Water"], "bs": {"hp": 55, "at": 60, "df": 130, "sa": 30, "sd": 130, "sp": 5}, "weightkg": 0.1, "abilities": {"0": "Unaware", "H": "Innards Out"}}, "Minior-Meteor": {"types": ["Rock", "Flying"], "bs": {"hp": 60, "at": 60, "df": 100, "sa": 60, "sd": 100, "sp": 60}, "weightkg": 4.0, "abilities": {"0": "Shields Down"}}, "Minior": {"types": ["Rock", "Flying"], "bs": {"hp": 60, "at": 100, "df": 60, "sa": 100, "sd": 60, "sp": 120}, "weightkg": 0.0, "abilities": {"0": "Shields Down"}}, "Turtonator": {"types": ["Fire", "Dragon"], "bs": {"hp": 60, "at": 78, "df": 135, "sa": 91, "sd": 85, "sp": 36}, "weightkg": 21.2, "abilities": {"0": "Shell Armor"}}, "Togedemaru": {"types": ["Electric", "Steel"], "bs": {"hp": 65, "at": 98, "df": 63, "sa": 40, "sd": 73, "sp": 96}, "weightkg": 0.3, "abilities": {"0": "Iron Barbs", "H": "Sturdy"}}, "Togedemaru-Totem": {"types": ["Electric", "Steel"], "bs": {"hp": 65, "at": 98, "df": 63, "sa": 40, "sd": 73, "sp": 96}, "weightkg": 1.3, "abilities": {"0": "Sturdy"}}, "Mimikyu": {"types": ["Ghost", "Fairy"], "bs": {"hp": 55, "at": 90, "df": 80, "sa": 50, "sd": 105, "sp": 96}, "weightkg": 0.1, "abilities": {"0": "Disguise"}}, "Mimikyu-Busted": {"types": ["Ghost", "Fairy"], "bs": {"hp": 55, "at": 90, "df": 80, "sa": 50, "sd": 105, "sp": 96}, "weightkg": 0.1, "abilities": {"0": "Disguise"}}, "Mimikyu-Totem": {"types": ["Ghost", "Fairy"], "bs": {"hp": 55, "at": 90, "df": 80, "sa": 50, "sd": 105, "sp": 96}, "weightkg": 0.3, "abilities": {"0": "Disguise"}}, "Mimikyu-Busted-Totem": {"types": ["Ghost", "Fairy"], "bs": {"hp": 55, "at": 90, "df": 80, "sa": 50, "sd": 105, "sp": 96}, "weightkg": 0.3, "abilities": {"0": "Disguise"}}, "Bruxish": {"types": ["Water", "Psychic"], "bs": {"hp": 68, "at": 105, "df": 70, "sa": 70, "sd": 70, "sp": 92}, "weightkg": 1.9, "abilities": {"0": "Dazzling", "1": "Strong Jaw", "H": "Wonder Skin"}}, "Drampa": {"types": ["Normal", "Dragon"], "bs": {"hp": 78, "at": 60, "df": 85, "sa": 135, "sd": 91, "sp": 36}, "weightkg": 18.5, "abilities": {"0": "Berserk", "H": "Sap Sipper"}}, "Drampa-Mega": {"types": ["Normal", "Dragon"], "bs": {"hp": 78, "at": 85, "df": 110, "sa": 160, "sd": 116, "sp": 36}, "weightkg": 24.1, "abilities": {"0": "Wind Rider"}, "baseSpecies": "Drampa"}, "Dhelmise": {"types": ["Ghost", "Grass"], "bs": {"hp": 70, "at": 131, "df": 100, "sa": 86, "sd": 90, "sp": 40}, "weightkg": 21.0, "abilities": {"0": "Steelworker"}}, "Jangmo-o": {"types": ["Dragon"], "bs": {"hp": 45, "at": 55, "df": 65, "sa": 45, "sd": 45, "sp": 45}, "weightkg": 3.0, "abilities": {"0": "Bulletproof", "1": "Soundproof", "H": "Overcoat"}, "nfe": true}, "Hakamo-o": {"types": ["Dragon", "Fighting"], "bs": {"hp": 55, "at": 75, "df": 90, "sa": 65, "sd": 70, "sp": 65}, "weightkg": 4.7, "abilities": {"0": "Bulletproof", "1": "Soundproof", "H": "Overcoat"}, "nfe": true}, "Kommo-o": {"types": ["Dragon", "Fighting"], "bs": {"hp": 75, "at": 110, "df": 125, "sa": 100, "sd": 105, "sp": 85}, "weightkg": 7.8, "abilities": {"0": "Bulletproof", "1": "Soundproof", "H": "Overcoat"}}, "Kommo-o-Totem": {"types": ["Dragon", "Fighting"], "bs": {"hp": 75, "at": 110, "df": 125, "sa": 100, "sd": 105, "sp": 85}, "weightkg": 20.8, "abilities": {"0": "Overcoat"}}, "Tapu Koko": {"types": ["Electric", "Fairy"], "bs": {"hp": 70, "at": 115, "df": 85, "sa": 95, "sd": 75, "sp": 130}, "weightkg": 2.0, "abilities": {"0": "Telepathy", "H": "Electric Surge"}}, "Tapu Lele": {"types": ["Psychic", "Fairy"], "bs": {"hp": 70, "at": 85, "df": 75, "sa": 130, "sd": 115, "sp": 95}, "weightkg": 1.9, "abilities": {"0": "Telepathy", "H": "Psychic Surge"}}, "Tapu Bulu": {"types": ["Grass", "Fairy"], "bs": {"hp": 70, "at": 130, "df": 115, "sa": 85, "sd": 95, "sp": 75}, "weightkg": 4.5, "abilities": {"0": "Telepathy", "H": "Grassy Surge"}}, "Tapu Fini": {"types": ["Water", "Fairy"], "bs": {"hp": 70, "at": 75, "df": 115, "sa": 95, "sd": 130, "sp": 85}, "weightkg": 2.1, "abilities": {"0": "Telepathy", "H": "Misty Surge"}}, "Cosmog": {"types": ["Psychic"], "bs": {"hp": 43, "at": 29, "df": 31, "sa": 29, "sd": 31, "sp": 37}, "weightkg": 0.0, "abilities": {"0": "Unaware"}, "nfe": true}, "Cosmoem": {"types": ["Psychic"], "bs": {"hp": 43, "at": 29, "df": 131, "sa": 29, "sd": 131, "sp": 37}, "weightkg": 100.0, "abilities": {"0": "Sturdy"}, "nfe": true}, "Solgaleo": {"types": ["Psychic", "Steel"], "bs": {"hp": 137, "at": 137, "df": 107, "sa": 113, "sd": 89, "sp": 97}, "weightkg": 23.0, "abilities": {"0": "Full Metal Body"}}, "Lunala": {"types": ["Psychic", "Ghost"], "bs": {"hp": 137, "at": 113, "df": 89, "sa": 137, "sd": 107, "sp": 97}, "weightkg": 12.0, "abilities": {"0": "Shadow Shield"}}, "Buzzwole": {"types": ["Bug", "Fighting"], "bs": {"hp": 107, "at": 139, "df": 139, "sa": 53, "sd": 53, "sp": 79}, "weightkg": 33.4, "abilities": {"0": "Iron Fist", "H": "Beast Boost"}}, "Pheromosa": {"types": ["Bug", "Fighting"], "bs": {"hp": 71, "at": 137, "df": 37, "sa": 137, "sd": 37, "sp": 151}, "weightkg": 2.5, "abilities": {"0": "Wonder Skin", "H": "Beast Boost"}}, "Celesteela": {"types": ["Steel", "Flying"], "bs": {"hp": 97, "at": 101, "df": 103, "sa": 107, "sd": 101, "sp": 61}, "weightkg": 100.0, "abilities": {"0": "Heavy Metal", "H": "Beast Boost"}}, "Kartana": {"types": ["Grass", "Steel"], "bs": {"hp": 59, "at": 181, "df": 131, "sa": 59, "sd": 31, "sp": 109}, "weightkg": 0.0, "abilities": {"0": "Anticipation", "H": "Beast Boost"}}, "Necrozma": {"types": ["Psychic"], "bs": {"hp": 97, "at": 107, "df": 101, "sa": 127, "sd": 89, "sp": 79}, "weightkg": 23.0, "abilities": {"0": "Prism Armor"}}, "Necrozma-Dusk-Mane": {"types": ["Psychic", "Steel"], "bs": {"hp": 97, "at": 157, "df": 127, "sa": 113, "sd": 109, "sp": 77}, "weightkg": 46.0, "abilities": {"0": "Prism Armor"}}, "Necrozma-Dawn-Wings": {"types": ["Psychic", "Ghost"], "bs": {"hp": 97, "at": 113, "df": 109, "sa": 157, "sd": 127, "sp": 77}, "weightkg": 35.0, "abilities": {"0": "Prism Armor"}}, "Necrozma-Ultra": {"types": ["Psychic", "Dragon"], "bs": {"hp": 97, "at": 167, "df": 97, "sa": 167, "sd": 97, "sp": 129}, "weightkg": 23.0, "abilities": {"0": "Neuroforce"}}, "Magearna": {"types": ["Steel", "Fairy"], "bs": {"hp": 80, "at": 95, "df": 115, "sa": 130, "sd": 115, "sp": 65}, "weightkg": 8.1, "abilities": {"0": "Clear Body", "H": "Soul-Heart"}}, "Magearna-Original": {"types": ["Steel", "Fairy"], "bs": {"hp": 80, "at": 95, "df": 115, "sa": 130, "sd": 115, "sp": 65}, "weightkg": 8.1, "abilities": {"0": "Clear Body", "H": "Soul-Heart"}}, "Magearna-Mega": {"types": ["Steel", "Fairy"], "bs": {"hp": 80, "at": 125, "df": 115, "sa": 170, "sd": 115, "sp": 95}, "weightkg": 24.8, "abilities": {"0": "Simple", "H": "Filter"}, "baseSpecies": "Magearna-Original"}, "Magearna-Original-Mega": {"types": ["Steel", "Fairy"], "bs": {"hp": 80, "at": 125, "df": 115, "sa": 170, "sd": 115, "sp": 95}, "weightkg": 24.8, "abilities": {"0": "Simple", "H": "Filter"}, "baseSpecies": "Magearna-Original"}, "Marshadow": {"types": ["Fighting", "Ghost"], "bs": {"hp": 90, "at": 125, "df": 80, "sa": 90, "sd": 90, "sp": 125}, "weightkg": 2.2, "abilities": {"0": "Technician"}}, "Poipole": {"types": ["Poison"], "bs": {"hp": 67, "at": 73, "df": 67, "sa": 73, "sd": 67, "sp": 73}, "weightkg": 0.2, "abilities": {"0": "Beast Boost"}, "nfe": true}, "Naganadel": {"types": ["Poison", "Dragon"], "bs": {"hp": 73, "at": 73, "df": 73, "sa": 127, "sd": 73, "sp": 121}, "weightkg": 15.0, "abilities": {"0": "Merciless", "H": "Beast Boost"}}, "Stakataka": {"types": ["Rock", "Steel"], "bs": {"hp": 61, "at": 131, "df": 211, "sa": 53, "sd": 101, "sp": 13}, "weightkg": 82.0, "abilities": {"0": "Symbiosis", "H": "Beast Boost"}}, "Zeraora": {"types": ["Electric"], "bs": {"hp": 88, "at": 112, "df": 75, "sa": 102, "sd": 80, "sp": 143}, "weightkg": 4.5, "abilities": {"0": "Inner Focus", "H": "Volt Absorb"}}, "Zeraora-Mega": {"types": ["Electric"], "bs": {"hp": 88, "at": 157, "df": 75, "sa": 147, "sd": 80, "sp": 153}, "weightkg": 4.5, "abilities": {"0": "Static"}, "baseSpecies": "Zeraora"}, "Meltan": {"types": ["Steel"], "bs": {"hp": 46, "at": 65, "df": 65, "sa": 55, "sd": 35, "sp": 34}, "weightkg": 0.8, "abilities": {"0": "Iron Fist"}, "nfe": true}, "Melmetal": {"types": ["Steel"], "bs": {"hp": 135, "at": 143, "df": 143, "sa": 80, "sd": 65, "sp": 34}, "weightkg": 80.0, "abilities": {"0": "Iron Fist"}}, "Melmetal-Gmax": {"types": ["Steel"], "bs": {"hp": 135, "at": 143, "df": 143, "sa": 80, "sd": 65, "sp": 34}, "weightkg": 1.0, "abilities": {"0": "Iron Fist"}}, "Grookey": {"types": ["Grass"], "bs": {"hp": 50, "at": 65, "df": 50, "sa": 40, "sd": 40, "sp": 65}, "weightkg": 0.5, "abilities": {"0": "Overgrow", "H": "Grassy Surge"}, "nfe": true}, "Thwackey": {"types": ["Grass"], "bs": {"hp": 70, "at": 85, "df": 70, "sa": 55, "sd": 60, "sp": 80}, "weightkg": 1.4, "abilities": {"0": "Overgrow", "H": "Grassy Surge"}, "nfe": true}, "Rillaboom": {"types": ["Grass"], "bs": {"hp": 100, "at": 125, "df": 90, "sa": 60, "sd": 70, "sp": 85}, "weightkg": 9.0, "abilities": {"0": "Overgrow", "H": "Grassy Surge"}}, "Rillaboom-Mega": {"types": ["Grass"], "bs": {"hp": 100, "at": 135, "df": 130, "sa": 60, "sd": 120, "sp": 85}, "weightkg": 1.0, "abilities": {"0": "Grassy Surge", "1": "Grassy Surge", "H": "Grassy Surge"}, "baseSpecies": "Rillaboom"}, "Scorbunny": {"types": ["Fire"], "bs": {"hp": 50, "at": 71, "df": 40, "sa": 40, "sd": 40, "sp": 69}, "weightkg": 0.5, "abilities": {"0": "Protean", "H": "Libero"}, "nfe": true}, "Raboot": {"types": ["Fire"], "bs": {"hp": 65, "at": 86, "df": 60, "sa": 55, "sd": 60, "sp": 94}, "weightkg": 0.9, "abilities": {"0": "Protean", "H": "Libero"}, "nfe": true}, "Cinderace": {"types": ["Fire"], "bs": {"hp": 80, "at": 116, "df": 75, "sa": 65, "sd": 75, "sp": 119}, "weightkg": 3.3, "abilities": {"0": "Protean", "H": "Libero"}}, "Cinderace-Mega": {"types": ["Fire"], "bs": {"hp": 80, "at": 136, "df": 100, "sa": 65, "sd": 100, "sp": 149}, "weightkg": 1.0, "abilities": {"0": "Libero", "1": "Libero", "H": "Libero"}, "baseSpecies": "Cinderace"}, "Sobble": {"types": ["Water"], "bs": {"hp": 50, "at": 40, "df": 40, "sa": 70, "sd": 40, "sp": 70}, "weightkg": 0.4, "abilities": {"0": "Torrent", "H": "Sniper"}, "nfe": true}, "Drizzile": {"types": ["Water"], "bs": {"hp": 65, "at": 60, "df": 55, "sa": 95, "sd": 55, "sp": 90}, "weightkg": 1.1, "abilities": {"0": "Torrent", "H": "Sniper"}, "nfe": true}, "Inteleon": {"types": ["Water"], "bs": {"hp": 70, "at": 85, "df": 65, "sa": 125, "sd": 65, "sp": 120}, "weightkg": 4.5, "abilities": {"0": "Torrent", "H": "Sniper"}}, "Inteleon-Mega": {"types": ["Water"], "bs": {"hp": 70, "at": 85, "df": 70, "sa": 150, "sd": 105, "sp": 150}, "weightkg": 1.0, "abilities": {"0": "Sniper", "1": "Sniper", "H": "Sniper"}, "baseSpecies": "Inteleon"}, "Rookidee": {"types": ["Flying"], "bs": {"hp": 38, "at": 47, "df": 35, "sa": 33, "sd": 35, "sp": 57}, "weightkg": 0.2, "abilities": {"0": "Keen Eye", "1": "Unnerve", "H": "Big Pecks"}, "nfe": true}, "Corvisquire": {"types": ["Flying"], "bs": {"hp": 68, "at": 67, "df": 55, "sa": 43, "sd": 55, "sp": 77}, "weightkg": 1.6, "abilities": {"0": "Keen Eye", "1": "Unnerve", "H": "Big Pecks"}, "nfe": true}, "Corviknight": {"types": ["Flying", "Steel"], "bs": {"hp": 98, "at": 87, "df": 105, "sa": 53, "sd": 85, "sp": 67}, "weightkg": 7.5, "abilities": {"0": "Mirror Armor", "1": "Unnerve", "H": "Pressure"}}, "Corviknight-Mega": {"types": ["Flying", "Steel"], "bs": {"hp": 98, "at": 130, "df": 130, "sa": 53, "sd": 85, "sp": 89}, "weightkg": 1.0, "abilities": {"0": "Pressure", "1": "Unnerve", "H": "Mirror Armor"}, "baseSpecies": "Corviknight"}, "Blipbug": {"types": ["Bug"], "bs": {"hp": 25, "at": 20, "df": 20, "sa": 25, "sd": 45, "sp": 45}, "weightkg": 0.8, "abilities": {"0": "Swarm", "1": "Telepathy", "H": "Compound Eyes"}, "nfe": true}, "Dottler": {"types": ["Bug", "Psychic"], "bs": {"hp": 50, "at": 35, "df": 80, "sa": 50, "sd": 90, "sp": 30}, "weightkg": 1.9, "abilities": {"0": "Swarm", "1": "Telepathy", "H": "Compound Eyes"}, "nfe": true}, "Orbeetle": {"types": ["Bug", "Psychic"], "bs": {"hp": 60, "at": 45, "df": 110, "sa": 80, "sd": 120, "sp": 90}, "weightkg": 4.1, "abilities": {"0": "Swarm", "1": "Telepathy", "H": "Frisk"}}, "Orbeetle-Gmax": {"types": ["Bug", "Psychic"], "bs": {"hp": 60, "at": 45, "df": 110, "sa": 80, "sd": 120, "sp": 90}, "weightkg": 1.0, "abilities": {"0": "Swarm", "1": "Frisk", "H": "Telepathy"}}, "Gossifleur": {"types": ["Grass"], "bs": {"hp": 40, "at": 40, "df": 60, "sa": 40, "sd": 60, "sp": 10}, "weightkg": 0.2, "abilities": {"0": "Cotton Down", "H": "Effect Spore"}, "nfe": true}, "Eldegoss": {"types": ["Grass"], "bs": {"hp": 60, "at": 50, "df": 90, "sa": 80, "sd": 120, "sp": 60}, "weightkg": 0.2, "abilities": {"0": "Cotton Down", "H": "Effect Spore"}}, "Wooloo": {"types": ["Normal"], "bs": {"hp": 42, "at": 40, "df": 55, "sa": 40, "sd": 45, "sp": 48}, "weightkg": 0.6, "abilities": {"0": "Fluffy", "H": "Bulletproof"}, "nfe": true}, "Dubwool": {"types": ["Normal"], "bs": {"hp": 72, "at": 80, "df": 100, "sa": 60, "sd": 90, "sp": 88}, "weightkg": 4.3, "abilities": {"0": "Fluffy", "H": "Bulletproof"}}, "Chewtle": {"types": ["Water"], "bs": {"hp": 50, "at": 64, "df": 50, "sa": 38, "sd": 38, "sp": 44}, "weightkg": 0.8, "abilities": {"0": "Swift Swim", "1": "Strong Jaw", "H": "Shell Armor"}, "nfe": true}, "Drednaw": {"types": ["Water", "Rock"], "bs": {"hp": 90, "at": 115, "df": 90, "sa": 48, "sd": 68, "sp": 74}, "weightkg": 11.6, "abilities": {"0": "Swift Swim", "1": "Strong Jaw", "H": "Shell Armor"}}, "Drednaw-Gmax": {"types": ["Water", "Rock"], "bs": {"hp": 90, "at": 115, "df": 90, "sa": 48, "sd": 68, "sp": 74}, "weightkg": 1.0, "abilities": {"0": "Strong Jaw", "1": "Shell Armor", "H": "Swift Swim"}}, "Yamper": {"types": ["Electric"], "bs": {"hp": 59, "at": 45, "df": 50, "sa": 40, "sd": 50, "sp": 26}, "weightkg": 1.4, "abilities": {"0": "Ball Fetch", "H": "Rattled"}, "nfe": true}, "Boltund": {"types": ["Electric"], "bs": {"hp": 69, "at": 90, "df": 60, "sa": 90, "sd": 60, "sp": 121}, "weightkg": 3.4, "abilities": {"0": "Strong Jaw", "H": "Competitive"}}, "Rolycoly": {"types": ["Rock"], "bs": {"hp": 30, "at": 40, "df": 50, "sa": 40, "sd": 50, "sp": 30}, "weightkg": 1.2, "abilities": {"0": "Magma Armor", "H": "Steam Engine"}, "nfe": true}, "Carkol": {"types": ["Rock", "Fire"], "bs": {"hp": 80, "at": 60, "df": 90, "sa": 60, "sd": 70, "sp": 50}, "weightkg": 7.8, "abilities": {"0": "Magma Armor", "H": "Steam Engine"}, "nfe": true}, "Coalossal": {"types": ["Rock", "Fire"], "bs": {"hp": 110, "at": 80, "df": 120, "sa": 80, "sd": 90, "sp": 30}, "weightkg": 31.1, "abilities": {"0": "Magma Armor", "H": "Steam Engine"}}, "Coalossal-Gmax": {"types": ["Rock", "Fire"], "bs": {"hp": 110, "at": 80, "df": 120, "sa": 80, "sd": 90, "sp": 30}, "weightkg": 1.0, "abilities": {"0": "Steam Engine", "1": "Flame Body", "H": "Flash Fire"}}, "Applin": {"types": ["Grass", "Dragon"], "bs": {"hp": 40, "at": 40, "df": 80, "sa": 40, "sd": 40, "sp": 20}, "weightkg": 0.1, "abilities": {"0": "Ripen", "1": "Gluttony", "H": "Bulletproof"}, "nfe": true}, "Flapple": {"types": ["Grass", "Dragon"], "bs": {"hp": 70, "at": 110, "df": 80, "sa": 95, "sd": 60, "sp": 70}, "weightkg": 0.1, "abilities": {"0": "Ripen", "1": "Gluttony", "H": "Hustle"}}, "Flapple-Gmax": {"types": ["Grass", "Dragon"], "bs": {"hp": 70, "at": 110, "df": 80, "sa": 95, "sd": 60, "sp": 70}, "weightkg": 1.0, "abilities": {"0": "Ripen", "1": "Gluttony", "H": "Hustle"}}, "Appletun": {"types": ["Grass", "Dragon"], "bs": {"hp": 110, "at": 85, "df": 80, "sa": 100, "sd": 80, "sp": 30}, "weightkg": 1.3, "abilities": {"0": "Ripen", "1": "Thick Fat", "H": "Gluttony"}}, "Appletun-Gmax": {"types": ["Grass", "Dragon"], "bs": {"hp": 110, "at": 85, "df": 80, "sa": 100, "sd": 80, "sp": 30}, "weightkg": 1.0, "abilities": {"0": "Ripen", "1": "Gluttony", "H": "Thick Fat"}}, "Dipplin": {"types": ["Grass", "Dragon"], "bs": {"hp": 80, "at": 80, "df": 110, "sa": 95, "sd": 80, "sp": 40}, "weightkg": 0.4, "abilities": {"0": "Supersweet Syrup", "H": "Gluttony"}, "nfe": true}, "Hydrapple": {"types": ["Grass", "Dragon"], "bs": {"hp": 106, "at": 80, "df": 110, "sa": 120, "sd": 80, "sp": 44}, "weightkg": 9.3, "abilities": {"0": "Supersweet Syrup", "H": "Regenerator"}}, "Silicobra": {"types": ["Ground"], "bs": {"hp": 52, "at": 57, "df": 75, "sa": 35, "sd": 50, "sp": 46}, "weightkg": 0.8, "abilities": {"0": "Sand Veil", "1": "Shed Skin", "H": "Sand Spit"}, "nfe": true}, "Sandaconda": {"types": ["Ground"], "bs": {"hp": 72, "at": 107, "df": 125, "sa": 65, "sd": 70, "sp": 71}, "weightkg": 6.5, "abilities": {"0": "Sand Veil", "1": "Shed Skin", "H": "Sand Spit"}}, "Sandaconda-Mega": {"types": ["Ground"], "bs": {"hp": 72, "at": 128, "df": 125, "sa": 65, "sd": 70, "sp": 150}, "weightkg": 1.0, "abilities": {"0": "Sand Spit", "1": "Shed Skin", "H": "Sand Veil"}, "baseSpecies": "Sandaconda"}, "Arrokuda": {"types": ["Water"], "bs": {"hp": 41, "at": 63, "df": 40, "sa": 40, "sd": 30, "sp": 66}, "weightkg": 0.1, "abilities": {"0": "Swift Swim", "H": "Propeller Tail"}, "nfe": true}, "Barraskewda": {"types": ["Water"], "bs": {"hp": 61, "at": 123, "df": 60, "sa": 60, "sd": 50, "sp": 136}, "weightkg": 3.0, "abilities": {"0": "Swift Swim", "H": "Propeller Tail"}}, "Toxel": {"types": ["Electric", "Poison"], "bs": {"hp": 40, "at": 38, "df": 35, "sa": 54, "sd": 35, "sp": 40}, "weightkg": 1.1, "abilities": {"0": "Rattled", "H": "Klutz"}, "nfe": true}, "Toxtricity": {"types": ["Electric", "Poison"], "bs": {"hp": 75, "at": 98, "df": 70, "sa": 114, "sd": 70, "sp": 75}, "weightkg": 4.0, "abilities": {"0": "Punk Rock", "H": "Plus"}}, "Toxtricity-Mega": {"types": ["Electric", "Poison"], "bs": {"hp": 75, "at": 118, "df": 90, "sa": 134, "sd": 90, "sp": 95}, "weightkg": 1.0, "abilities": {"0": "Punk Rock", "1": "Plus", "H": "Technician"}, "baseSpecies": "Toxtricity-Low-Key"}, "Toxtricity-Low-Key": {"types": ["Electric", "Poison"], "bs": {"hp": 75, "at": 98, "df": 70, "sa": 114, "sd": 70, "sp": 75}, "weightkg": 4.0, "abilities": {"0": "Punk Rock", "H": "Minus"}}, "Toxtricity-Low-Key-Mega": {"types": ["Electric", "Poison"], "bs": {"hp": 75, "at": 118, "df": 90, "sa": 134, "sd": 90, "sp": 95}, "weightkg": 1.0, "abilities": {"0": "Punk Rock", "1": "Minus", "H": "Technician"}, "baseSpecies": "Toxtricity-Low-Key"}, "Sizzlipede": {"types": ["Fire", "Bug"], "bs": {"hp": 50, "at": 65, "df": 45, "sa": 50, "sd": 50, "sp": 45}, "weightkg": 0.1, "abilities": {"0": "Flame Body", "1": "White Smoke", "H": "Flash Fire"}, "nfe": true}, "Centiskorch": {"types": ["Fire", "Bug"], "bs": {"hp": 100, "at": 115, "df": 65, "sa": 90, "sd": 90, "sp": 65}, "weightkg": 12.0, "abilities": {"0": "Flame Body", "1": "White Smoke", "H": "Flash Fire"}}, "Centiskorch-Mega": {"types": ["Fire", "Bug"], "bs": {"hp": 100, "at": 145, "df": 100, "sa": 90, "sd": 90, "sp": 100}, "weightkg": 1.0, "abilities": {"0": "Flash Fire", "1": "White Smoke", "H": "Flame Body"}, "baseSpecies": "Centiskorch"}, "Sinistea": {"types": ["Ghost"], "bs": {"hp": 40, "at": 45, "df": 45, "sa": 74, "sd": 54, "sp": 50}, "weightkg": 0.0, "abilities": {"0": "Weak Armor", "H": "Cursed Body"}, "nfe": true}, "Sinistea-Antique": {"types": ["Ghost"], "bs": {"hp": 40, "at": 45, "df": 45, "sa": 74, "sd": 54, "sp": 50}, "weightkg": 0.0, "abilities": {"0": "Weak Armor", "H": "Cursed Body"}, "nfe": true}, "Polteageist": {"types": ["Ghost"], "bs": {"hp": 60, "at": 65, "df": 65, "sa": 134, "sd": 114, "sp": 70}, "weightkg": 0.0, "abilities": {"0": "Weak Armor", "H": "Cursed Body"}}, "Polteageist-Antique": {"types": ["Ghost"], "bs": {"hp": 60, "at": 65, "df": 65, "sa": 134, "sd": 114, "sp": 70}, "weightkg": 0.0, "abilities": {"0": "Weak Armor", "H": "Cursed Body"}}, "Hatenna": {"types": ["Psychic"], "bs": {"hp": 42, "at": 30, "df": 45, "sa": 56, "sd": 53, "sp": 39}, "weightkg": 0.3, "abilities": {"0": "Healer", "1": "Anticipation", "H": "Magic Bounce"}, "nfe": true}, "Hattrem": {"types": ["Psychic"], "bs": {"hp": 57, "at": 40, "df": 65, "sa": 86, "sd": 73, "sp": 49}, "weightkg": 0.5, "abilities": {"0": "Healer", "1": "Anticipation", "H": "Magic Bounce"}, "nfe": true}, "Hatterene": {"types": ["Psychic", "Fairy"], "bs": {"hp": 57, "at": 90, "df": 95, "sa": 136, "sd": 103, "sp": 29}, "weightkg": 0.5, "abilities": {"0": "Healer", "1": "Anticipation", "H": "Magic Bounce"}}, "Hatterene-Gmax": {"types": ["Psychic", "Fairy"], "bs": {"hp": 57, "at": 90, "df": 95, "sa": 136, "sd": 103, "sp": 29}, "weightkg": 1.0, "abilities": {"0": "Healer", "1": "Anticipation", "H": "Magic Bounce"}}, "Impidimp": {"types": ["Dark", "Fairy"], "bs": {"hp": 45, "at": 45, "df": 30, "sa": 55, "sd": 40, "sp": 50}, "weightkg": 0.6, "abilities": {"0": "Prankster"}, "nfe": true}, "Morgrem": {"types": ["Dark", "Fairy"], "bs": {"hp": 65, "at": 60, "df": 45, "sa": 75, "sd": 55, "sp": 70}, "weightkg": 1.2, "abilities": {"0": "Prankster"}, "nfe": true}, "Grimmsnarl": {"types": ["Dark", "Fairy"], "bs": {"hp": 95, "at": 120, "df": 65, "sa": 95, "sd": 75, "sp": 60}, "weightkg": 6.1, "abilities": {"0": "Prankster"}}, "Grimmsnarl-Gmax": {"types": ["Dark", "Fairy"], "bs": {"hp": 95, "at": 120, "df": 65, "sa": 95, "sd": 75, "sp": 60}, "weightkg": 1.0, "abilities": {"0": "Prankster", "1": "Frisk", "H": "Pickpocket"}}, "Milcery": {"types": ["Fairy"], "bs": {"hp": 45, "at": 40, "df": 40, "sa": 50, "sd": 61, "sp": 34}, "weightkg": 0.0, "abilities": {"0": "Sweet Veil", "H": "Aroma Veil"}, "nfe": true}, "Alcremie": {"types": ["Fairy"], "bs": {"hp": 65, "at": 60, "df": 75, "sa": 110, "sd": 121, "sp": 64}, "weightkg": 0.1, "abilities": {"0": "Sweet Veil", "H": "Aroma Veil"}}, "Alcremie-Gmax": {"types": ["Fairy"], "bs": {"hp": 65, "at": 60, "df": 75, "sa": 110, "sd": 121, "sp": 64}, "weightkg": 0.1, "abilities": {"0": "Sweet Veil", "H": "Aroma Veil"}}, "Falinks": {"types": ["Fighting"], "bs": {"hp": 65, "at": 100, "df": 100, "sa": 70, "sd": 60, "sp": 75}, "weightkg": 6.2, "abilities": {"0": "Battle Armor", "H": "Defiant"}}, "Falinks-Mega": {"types": ["Fighting"], "bs": {"hp": 65, "at": 135, "df": 135, "sa": 70, "sd": 65, "sp": 100}, "weightkg": 9.9, "abilities": {"0": "Sharpness"}, "baseSpecies": "Falinks"}, "Snom": {"types": ["Ice", "Bug"], "bs": {"hp": 30, "at": 25, "df": 35, "sa": 45, "sd": 30, "sp": 20}, "weightkg": 0.4, "abilities": {"0": "Ice Scales", "H": "Shield Dust"}, "nfe": true}, "Frosmoth": {"types": ["Ice", "Bug"], "bs": {"hp": 70, "at": 65, "df": 60, "sa": 125, "sd": 90, "sp": 65}, "weightkg": 4.2, "abilities": {"0": "Ice Scales", "H": "Shield Dust"}}, "Stonjourner": {"types": ["Rock"], "bs": {"hp": 100, "at": 125, "df": 135, "sa": 20, "sd": 20, "sp": 70}, "weightkg": 52.0, "abilities": {"0": "Power Spot"}}, "Eiscue": {"types": ["Ice"], "bs": {"hp": 75, "at": 80, "df": 110, "sa": 65, "sd": 90, "sp": 50}, "weightkg": 8.9, "abilities": {"0": "Ice Face"}}, "Eiscue-Noice": {"types": ["Ice"], "bs": {"hp": 75, "at": 80, "df": 70, "sa": 65, "sd": 50, "sp": 130}, "weightkg": 8.9, "abilities": {"0": "Ice Face"}}, "Indeedee": {"types": ["Psychic", "Normal"], "bs": {"hp": 60, "at": 65, "df": 55, "sa": 105, "sd": 95, "sp": 95}, "weightkg": 2.8, "abilities": {"0": "Inner Focus", "H": "Psychic Surge"}}, "Indeedee-F": {"types": ["Psychic", "Normal"], "bs": {"hp": 70, "at": 55, "df": 65, "sa": 95, "sd": 105, "sp": 85}, "weightkg": 2.8, "abilities": {"0": "Own Tempo", "H": "Psychic Surge"}}, "Morpeko": {"types": ["Electric", "Dark"], "bs": {"hp": 58, "at": 95, "df": 58, "sa": 70, "sd": 58, "sp": 97}, "weightkg": 0.3, "abilities": {"0": "Hunger Switch"}}, "Morpeko-Hangry": {"types": ["Electric", "Dark"], "bs": {"hp": 58, "at": 95, "df": 58, "sa": 70, "sd": 58, "sp": 97}, "weightkg": 0.3, "abilities": {"0": "Hunger Switch"}}, "Cufant": {"types": ["Steel"], "bs": {"hp": 72, "at": 80, "df": 49, "sa": 40, "sd": 49, "sp": 40}, "weightkg": 10.0, "abilities": {"0": "Sheer Force", "H": "Heavy Metal"}, "nfe": true}, "Copperajah": {"types": ["Steel"], "bs": {"hp": 122, "at": 130, "df": 69, "sa": 80, "sd": 69, "sp": 30}, "weightkg": 65.0, "abilities": {"0": "Sheer Force", "H": "Heavy Metal"}}, "Copperajah-Gmax": {"types": ["Steel"], "bs": {"hp": 122, "at": 130, "df": 69, "sa": 80, "sd": 69, "sp": 30}, "weightkg": 1.0, "abilities": {"0": "Sheer Force", "H": "Heavy Metal"}}, "Dracozolt": {"types": ["Electric", "Dragon"], "bs": {"hp": 90, "at": 100, "df": 90, "sa": 80, "sd": 70, "sp": 75}, "weightkg": 19.0, "abilities": {"0": "Sand Rush", "H": "Hustle"}}, "Arctozolt": {"types": ["Electric", "Ice"], "bs": {"hp": 90, "at": 100, "df": 90, "sa": 90, "sd": 80, "sp": 55}, "weightkg": 15.0, "abilities": {"0": "Slush Rush", "H": "Volt Absorb"}}, "Dracovish": {"types": ["Water", "Dragon"], "bs": {"hp": 90, "at": 90, "df": 100, "sa": 70, "sd": 80, "sp": 75}, "weightkg": 21.5, "abilities": {"0": "Sand Rush", "H": "Strong Jaw"}}, "Arctovish": {"types": ["Water", "Ice"], "bs": {"hp": 90, "at": 90, "df": 100, "sa": 80, "sd": 90, "sp": 55}, "weightkg": 17.5, "abilities": {"0": "Slush Rush", "H": "Water Absorb"}}, "Duraludon": {"types": ["Steel", "Dragon"], "bs": {"hp": 70, "at": 95, "df": 115, "sa": 120, "sd": 50, "sp": 85}, "weightkg": 4.0, "abilities": {"0": "Light Metal", "1": "Heavy Metal", "H": "Stalwart"}, "nfe": true}, "Duraludon-Gmax": {"types": ["Steel", "Dragon"], "bs": {"hp": 70, "at": 95, "df": 115, "sa": 120, "sd": 50, "sp": 85}, "weightkg": 1.0, "abilities": {"0": "Light Metal", "1": "Heavy Metal", "H": "Stalwart"}}, "Archaludon": {"types": ["Steel", "Dragon"], "bs": {"hp": 90, "at": 105, "df": 130, "sa": 125, "sd": 65, "sp": 85}, "weightkg": 6.0, "abilities": {"0": "Sturdy", "H": "Stamina"}}, "Dreepy": {"types": ["Dragon", "Ghost"], "bs": {"hp": 28, "at": 60, "df": 30, "sa": 40, "sd": 30, "sp": 82}, "weightkg": 0.2, "abilities": {"0": "Clear Body", "1": "Infiltrator", "H": "Cursed Body"}, "nfe": true}, "Drakloak": {"types": ["Dragon", "Ghost"], "bs": {"hp": 68, "at": 80, "df": 50, "sa": 60, "sd": 50, "sp": 102}, "weightkg": 1.1, "abilities": {"0": "Clear Body", "1": "Infiltrator", "H": "Cursed Body"}, "nfe": true}, "Dragapult": {"types": ["Dragon", "Ghost"], "bs": {"hp": 88, "at": 120, "df": 75, "sa": 100, "sd": 75, "sp": 142}, "weightkg": 5.0, "abilities": {"0": "Clear Body", "1": "Infiltrator", "H": "Cursed Body"}}, "Zacian": {"types": ["Fairy"], "bs": {"hp": 92, "at": 120, "df": 115, "sa": 80, "sd": 115, "sp": 138}, "weightkg": 11.0, "abilities": {"0": "Intrepid Sword"}}, "Zacian-Crowned": {"types": ["Fairy", "Steel"], "bs": {"hp": 92, "at": 150, "df": 115, "sa": 80, "sd": 115, "sp": 148}, "weightkg": 35.5, "abilities": {"0": "Intrepid Sword"}}, "Zamazenta": {"types": ["Fighting"], "bs": {"hp": 92, "at": 120, "df": 115, "sa": 80, "sd": 115, "sp": 138}, "weightkg": 21.0, "abilities": {"0": "Dauntless Shield"}}, "Zamazenta-Crowned": {"types": ["Fighting", "Steel"], "bs": {"hp": 92, "at": 120, "df": 140, "sa": 80, "sd": 140, "sp": 128}, "weightkg": 78.5, "abilities": {"0": "Dauntless Shield"}}, "Eternatus": {"types": ["Poison", "Dragon"], "bs": {"hp": 140, "at": 85, "df": 95, "sa": 145, "sd": 95, "sp": 130}, "weightkg": 95.0, "abilities": {"0": "Pressure"}}, "Eternatus-Eternamax": {"types": ["Poison", "Dragon"], "bs": {"hp": 255, "at": 115, "df": 250, "sa": 125, "sd": 250, "sp": 130}, "weightkg": 1.0, "abilities": {"0": "Pressure"}}, "Kubfu": {"types": ["Fighting"], "bs": {"hp": 60, "at": 90, "df": 60, "sa": 53, "sd": 50, "sp": 72}, "weightkg": 1.2, "abilities": {"0": "Inner Focus"}, "nfe": true}, "Urshifu": {"types": ["Fighting", "Dark"], "bs": {"hp": 100, "at": 130, "df": 100, "sa": 63, "sd": 60, "sp": 97}, "weightkg": 10.5, "abilities": {"0": "Unseen Fist"}}, "Urshifu-Rapid-Strike": {"types": ["Fighting", "Water"], "bs": {"hp": 100, "at": 130, "df": 100, "sa": 63, "sd": 60, "sp": 97}, "weightkg": 10.5, "abilities": {"0": "Unseen Fist"}}, "Urshifu-Rapid-Strike-Gmax": {"types": ["Fighting", "Water"], "bs": {"hp": 100, "at": 130, "df": 100, "sa": 63, "sd": 60, "sp": 97}, "weightkg": 1.0, "abilities": {"0": "Unseen Fist"}}, "Zarude": {"types": ["Dark", "Grass"], "bs": {"hp": 105, "at": 120, "df": 105, "sa": 70, "sd": 95, "sp": 105}, "weightkg": 7.0, "abilities": {"0": "Leaf Guard"}}, "Zarude-Dada": {"types": ["Dark", "Grass"], "bs": {"hp": 105, "at": 120, "df": 105, "sa": 70, "sd": 95, "sp": 105}, "weightkg": 7.0, "abilities": {"0": "Leaf Guard"}}, "Regieleki": {"types": ["Electric"], "bs": {"hp": 80, "at": 100, "df": 50, "sa": 100, "sd": 50, "sp": 200}, "weightkg": 14.5, "abilities": {"0": "Transistor"}}, "Regidrago": {"types": ["Dragon"], "bs": {"hp": 200, "at": 100, "df": 50, "sa": 100, "sd": 50, "sp": 80}, "weightkg": 20.0, "abilities": {"0": "Dragon's Maw"}}, "Glastrier": {"types": ["Ice"], "bs": {"hp": 100, "at": 145, "df": 130, "sa": 65, "sd": 110, "sp": 30}, "weightkg": 80.0, "abilities": {"0": "Own Tempo", "H": "Chilling Neigh"}}, "Spectrier": {"types": ["Ghost"], "bs": {"hp": 100, "at": 65, "df": 60, "sa": 145, "sd": 80, "sp": 130}, "weightkg": 4.5, "abilities": {"0": "Inner Focus", "H": "Grim Neigh"}}, "Calyrex": {"types": ["Psychic", "Grass"], "bs": {"hp": 100, "at": 80, "df": 80, "sa": 80, "sd": 80, "sp": 80}, "weightkg": 0.8, "abilities": {"0": "Unnerve"}}, "Calyrex-Ice": {"types": ["Psychic", "Ice"], "bs": {"hp": 100, "at": 165, "df": 150, "sa": 85, "sd": 130, "sp": 50}, "weightkg": 80.9, "abilities": {"0": "As One"}}, "Calyrex-Shadow": {"types": ["Psychic", "Ghost"], "bs": {"hp": 100, "at": 85, "df": 80, "sa": 165, "sd": 100, "sp": 150}, "weightkg": 5.4, "abilities": {"0": "As One"}}, "Enamorus": {"types": ["Fairy", "Flying"], "bs": {"hp": 74, "at": 115, "df": 70, "sa": 135, "sd": 80, "sp": 106}, "weightkg": 4.8, "abilities": {"0": "Cute Charm", "H": "Contrary"}}, "Enamorus-Therian": {"types": ["Fairy", "Flying"], "bs": {"hp": 74, "at": 115, "df": 110, "sa": 135, "sd": 100, "sp": 46}, "weightkg": 4.8, "abilities": {"0": "Overcoat"}}, "Sprigatito": {"types": ["Grass"], "bs": {"hp": 40, "at": 61, "df": 54, "sa": 45, "sd": 45, "sp": 65}, "weightkg": 0.4, "abilities": {"0": "Protean", "H": "Overgrow"}, "nfe": true}, "Floragato": {"types": ["Grass"], "bs": {"hp": 61, "at": 80, "df": 63, "sa": 60, "sd": 63, "sp": 83}, "weightkg": 1.2, "abilities": {"0": "Protean", "H": "Overgrow"}, "nfe": true}, "Meowscarada": {"types": ["Grass", "Dark"], "bs": {"hp": 76, "at": 110, "df": 70, "sa": 81, "sd": 70, "sp": 123}, "weightkg": 3.1, "abilities": {"0": "Protean", "H": "Libero"}}, "Meowscarada-Mega": {"types": ["Grass", "Dark"], "bs": {"hp": 76, "at": 140, "df": 90, "sa": 91, "sd": 90, "sp": 140}, "weightkg": 3.7, "abilities": {"0": "Protean", "1": "Protean", "H": "Protean"}, "baseSpecies": "Meowscarada"}, "Fuecoco": {"types": ["Fire"], "bs": {"hp": 67, "at": 45, "df": 59, "sa": 63, "sd": 40, "sp": 36}, "weightkg": 1.0, "abilities": {"0": "Unaware", "H": "Blaze"}, "nfe": true}, "Crocalor": {"types": ["Fire"], "bs": {"hp": 81, "at": 55, "df": 78, "sa": 90, "sd": 58, "sp": 49}, "weightkg": 3.1, "abilities": {"0": "Unaware", "H": "Blaze"}, "nfe": true}, "Skeledirge": {"types": ["Fire", "Ghost"], "bs": {"hp": 104, "at": 75, "df": 100, "sa": 110, "sd": 75, "sp": 66}, "weightkg": 32.6, "abilities": {"0": "Unaware", "H": "Blaze"}}, "Quaxly": {"types": ["Water"], "bs": {"hp": 55, "at": 65, "df": 45, "sa": 50, "sd": 45, "sp": 50}, "weightkg": 0.6, "abilities": {"0": "Torrent", "H": "Moxie"}, "nfe": true}, "Quaxwell": {"types": ["Water"], "bs": {"hp": 70, "at": 85, "df": 65, "sa": 65, "sd": 60, "sp": 65}, "weightkg": 2.1, "abilities": {"0": "Torrent", "H": "Moxie"}, "nfe": true}, "Quaquaval": {"types": ["Water", "Fighting"], "bs": {"hp": 85, "at": 120, "df": 80, "sa": 85, "sd": 75, "sp": 85}, "weightkg": 6.2, "abilities": {"0": "Torrent", "H": "Moxie"}}, "Nymble": {"types": ["Bug"], "bs": {"hp": 33, "at": 46, "df": 40, "sa": 21, "sd": 25, "sp": 45}, "weightkg": 0.1, "abilities": {"0": "Swarm", "H": "Tinted Lens"}, "nfe": true}, "Lokix": {"types": ["Bug", "Dark"], "bs": {"hp": 71, "at": 102, "df": 78, "sa": 52, "sd": 55, "sp": 92}, "weightkg": 1.8, "abilities": {"0": "Swarm", "H": "Tinted Lens"}}, "Pawmi": {"types": ["Electric"], "bs": {"hp": 45, "at": 50, "df": 20, "sa": 40, "sd": 25, "sp": 60}, "weightkg": 0.2, "abilities": {"0": "Iron Fist", "H": "Static"}, "nfe": true}, "Pawmo": {"types": ["Electric", "Fighting"], "bs": {"hp": 60, "at": 75, "df": 40, "sa": 50, "sd": 40, "sp": 85}, "weightkg": 0.7, "abilities": {"0": "Iron Fist", "H": "Volt Absorb"}, "nfe": true}, "Pawmot": {"types": ["Electric", "Fighting"], "bs": {"hp": 70, "at": 115, "df": 70, "sa": 70, "sd": 60, "sp": 105}, "weightkg": 4.1, "abilities": {"0": "Iron Fist", "H": "Volt Absorb"}}, "Tandemaus": {"types": ["Normal"], "bs": {"hp": 50, "at": 50, "df": 45, "sa": 40, "sd": 45, "sp": 75}, "weightkg": 0.2, "abilities": {"0": "Technician", "H": "Friend Guard"}, "nfe": true}, "Maushold": {"types": ["Normal"], "bs": {"hp": 74, "at": 75, "df": 70, "sa": 65, "sd": 75, "sp": 111}, "weightkg": 0.2, "abilities": {"0": "Technician", "H": "Friend Guard"}}, "Maushold-Four": {"types": ["Normal"], "bs": {"hp": 74, "at": 75, "df": 70, "sa": 65, "sd": 75, "sp": 111}, "weightkg": 0.3, "abilities": {"0": "Technician", "H": "Friend Guard"}}, "Fidough": {"types": ["Fairy"], "bs": {"hp": 37, "at": 55, "df": 70, "sa": 30, "sd": 55, "sp": 65}, "weightkg": 1.1, "abilities": {"0": "Thick Fat", "H": "Own Tempo"}, "nfe": true}, "Dachsbun": {"types": ["Fairy"], "bs": {"hp": 57, "at": 80, "df": 115, "sa": 50, "sd": 80, "sp": 95}, "weightkg": 1.5, "abilities": {"0": "Thick Fat", "H": "Well-Baked Body"}}, "Smoliv": {"types": ["Grass", "Normal"], "bs": {"hp": 41, "at": 35, "df": 45, "sa": 58, "sd": 51, "sp": 30}, "weightkg": 0.7, "abilities": {"0": "Triage", "H": "Harvest"}, "nfe": true}, "Dolliv": {"types": ["Grass", "Normal"], "bs": {"hp": 52, "at": 53, "df": 60, "sa": 78, "sd": 78, "sp": 33}, "weightkg": 1.2, "abilities": {"0": "Triage", "H": "Harvest"}, "nfe": true}, "Arboliva": {"types": ["Grass", "Normal"], "bs": {"hp": 78, "at": 69, "df": 90, "sa": 125, "sd": 109, "sp": 39}, "weightkg": 4.8, "abilities": {"0": "Triage", "H": "Harvest"}}, "Nacli": {"types": ["Rock"], "bs": {"hp": 55, "at": 55, "df": 75, "sa": 35, "sd": 35, "sp": 25}, "weightkg": 1.6, "abilities": {"0": "Purifying Salt", "H": "Clear Body"}, "nfe": true}, "Naclstack": {"types": ["Rock"], "bs": {"hp": 60, "at": 60, "df": 100, "sa": 35, "sd": 65, "sp": 35}, "weightkg": 10.5, "abilities": {"0": "Purifying Salt", "H": "Clear Body"}, "nfe": true}, "Garganacl": {"types": ["Rock"], "bs": {"hp": 100, "at": 100, "df": 130, "sa": 45, "sd": 90, "sp": 35}, "weightkg": 24.0, "abilities": {"0": "Purifying Salt", "H": "Clear Body"}}, "Charcadet": {"types": ["Fire"], "bs": {"hp": 40, "at": 50, "df": 40, "sa": 50, "sd": 40, "sp": 35}, "weightkg": 1.1, "abilities": {"0": "Flame Body", "H": "Flash Fire"}, "nfe": true}, "Armarouge": {"types": ["Fire", "Psychic"], "bs": {"hp": 85, "at": 60, "df": 100, "sa": 125, "sd": 80, "sp": 75}, "weightkg": 8.5, "abilities": {"0": "Flame Body", "H": "Flash Fire"}}, "Ceruledge": {"types": ["Fire", "Ghost"], "bs": {"hp": 75, "at": 125, "df": 80, "sa": 60, "sd": 100, "sp": 85}, "weightkg": 6.2, "abilities": {"0": "Flame Body", "H": "Weak Armor"}}, "Tadbulb": {"types": ["Electric"], "bs": {"hp": 61, "at": 31, "df": 41, "sa": 59, "sd": 35, "sp": 45}, "weightkg": 0.0, "abilities": {"0": "Own Tempo", "1": "Damp", "H": "Static"}, "nfe": true}, "Bellibolt": {"types": ["Electric"], "bs": {"hp": 109, "at": 64, "df": 91, "sa": 103, "sd": 83, "sp": 45}, "weightkg": 11.3, "abilities": {"0": "Electromorphosis", "H": "Static"}}, "Wattrel": {"types": ["Electric", "Flying"], "bs": {"hp": 40, "at": 40, "df": 35, "sa": 55, "sd": 40, "sp": 70}, "weightkg": 0.4, "abilities": {"0": "Wind Power", "H": "Competitive"}, "nfe": true}, "Kilowattrel": {"types": ["Electric", "Flying"], "bs": {"hp": 70, "at": 70, "df": 60, "sa": 105, "sd": 60, "sp": 125}, "weightkg": 3.9, "abilities": {"0": "Wind Power", "H": "Competitive"}}, "Maschiff": {"types": ["Dark"], "bs": {"hp": 60, "at": 78, "df": 60, "sa": 40, "sd": 51, "sp": 51}, "weightkg": 1.6, "abilities": {"0": "Intimidate", "H": "Stakeout"}, "nfe": true}, "Mabosstiff": {"types": ["Dark"], "bs": {"hp": 80, "at": 120, "df": 90, "sa": 60, "sd": 70, "sp": 85}, "weightkg": 6.1, "abilities": {"0": "Intimidate", "H": "Stakeout"}}, "Shroodle": {"types": ["Poison", "Normal"], "bs": {"hp": 40, "at": 65, "df": 35, "sa": 40, "sd": 35, "sp": 75}, "weightkg": 0.1, "abilities": {"0": "Unburden", "1": "Prankster", "H": "Prankster"}, "nfe": true}, "Grafaiai": {"types": ["Poison", "Normal"], "bs": {"hp": 63, "at": 95, "df": 65, "sa": 80, "sd": 72, "sp": 110}, "weightkg": 2.7, "abilities": {"0": "Unburden", "1": "Prankster", "H": "Poison Touch"}}, "Bramblin": {"types": ["Grass", "Ghost"], "bs": {"hp": 40, "at": 65, "df": 30, "sa": 45, "sd": 35, "sp": 60}, "weightkg": 0.1, "abilities": {"0": "Wind Rider", "H": "Infiltrator"}, "nfe": true}, "Brambleghast": {"types": ["Grass", "Ghost"], "bs": {"hp": 55, "at": 115, "df": 70, "sa": 80, "sd": 70, "sp": 90}, "weightkg": 0.6, "abilities": {"0": "Wind Rider", "H": "Infiltrator"}}, "Toedscool": {"types": ["Ground", "Grass"], "bs": {"hp": 40, "at": 40, "df": 35, "sa": 50, "sd": 100, "sp": 70}, "weightkg": 3.3, "abilities": {"0": "Mycelium Might"}, "nfe": true}, "Toedscruel": {"types": ["Ground", "Grass"], "bs": {"hp": 80, "at": 70, "df": 65, "sa": 80, "sd": 120, "sp": 100}, "weightkg": 5.8, "abilities": {"0": "Mycelium Might"}}, "Klawf": {"types": ["Rock"], "bs": {"hp": 70, "at": 100, "df": 115, "sa": 35, "sd": 55, "sp": 75}, "weightkg": 7.9, "abilities": {"0": "Shell Armor", "H": "Anger Shell"}}, "Capsakid": {"types": ["Grass"], "bs": {"hp": 50, "at": 62, "df": 40, "sa": 62, "sd": 40, "sp": 50}, "weightkg": 0.3, "abilities": {"0": "Chlorophyll", "H": "Klutz"}, "nfe": true}, "Scovillain": {"types": ["Grass", "Fire"], "bs": {"hp": 65, "at": 108, "df": 65, "sa": 108, "sd": 65, "sp": 75}, "weightkg": 1.5, "abilities": {"0": "Chlorophyll", "H": "Moody"}}, "Scovillain-Mega": {"types": ["Grass", "Fire"], "bs": {"hp": 65, "at": 138, "df": 85, "sa": 138, "sd": 85, "sp": 75}, "weightkg": 2.2, "abilities": {"0": "Chlorophyll", "H": "Contrary"}, "baseSpecies": "Scovillain"}, "Flittle": {"types": ["Psychic"], "bs": {"hp": 30, "at": 35, "df": 30, "sa": 55, "sd": 30, "sp": 75}, "weightkg": 0.1, "abilities": {"0": "Speed Boost", "H": "Speed Boost"}, "nfe": true}, "Espathra": {"types": ["Psychic"], "bs": {"hp": 95, "at": 60, "df": 60, "sa": 101, "sd": 60, "sp": 105}, "weightkg": 9.0, "abilities": {"0": "Speed Boost", "H": "Opportunist"}}, "Tinkatink": {"types": ["Fairy", "Steel"], "bs": {"hp": 50, "at": 45, "df": 45, "sa": 35, "sd": 64, "sp": 58}, "weightkg": 0.9, "abilities": {"0": "Mold Breaker", "1": "Own Tempo", "H": "Own Tempo"}, "nfe": true}, "Tinkatuff": {"types": ["Fairy", "Steel"], "bs": {"hp": 65, "at": 55, "df": 55, "sa": 45, "sd": 82, "sp": 78}, "weightkg": 5.9, "abilities": {"0": "Mold Breaker", "1": "Own Tempo", "H": "Own Tempo"}, "nfe": true}, "Tinkaton": {"types": ["Fairy", "Steel"], "bs": {"hp": 85, "at": 75, "df": 77, "sa": 70, "sd": 105, "sp": 94}, "weightkg": 11.3, "abilities": {"0": "Mold Breaker", "1": "Own Tempo", "H": "Own Tempo"}}, "Bombirdier": {"types": ["Flying", "Dark"], "bs": {"hp": 70, "at": 103, "df": 85, "sa": 60, "sd": 85, "sp": 82}, "weightkg": 4.3, "abilities": {"0": "Rocky Payload", "H": "Big Pecks"}}, "Finizen": {"types": ["Water"], "bs": {"hp": 70, "at": 45, "df": 40, "sa": 45, "sd": 40, "sp": 75}, "weightkg": 6.0, "abilities": {"0": "Water Veil"}, "nfe": true}, "Palafin": {"types": ["Water"], "bs": {"hp": 100, "at": 70, "df": 72, "sa": 53, "sd": 62, "sp": 100}, "weightkg": 6.0, "abilities": {"0": "Zero to Hero"}}, "Palafin-Hero": {"types": ["Water"], "bs": {"hp": 100, "at": 160, "df": 97, "sa": 106, "sd": 87, "sp": 100}, "weightkg": 9.7, "abilities": {"0": "Zero to Hero"}}, "Varoom": {"types": ["Steel", "Poison"], "bs": {"hp": 45, "at": 70, "df": 63, "sa": 30, "sd": 45, "sp": 47}, "weightkg": 3.5, "abilities": {"0": "Overcoat", "H": "Slow Start"}, "nfe": true}, "Revavroom": {"types": ["Steel", "Poison"], "bs": {"hp": 80, "at": 119, "df": 90, "sa": 54, "sd": 67, "sp": 90}, "weightkg": 12.0, "abilities": {"0": "Filter", "H": "Filter"}}, "Cyclizar": {"types": ["Dragon", "Normal"], "bs": {"hp": 70, "at": 95, "df": 65, "sa": 85, "sd": 65, "sp": 121}, "weightkg": 6.3, "abilities": {"0": "Shed Skin", "H": "Regenerator"}}, "Orthworm": {"types": ["Steel"], "bs": {"hp": 70, "at": 85, "df": 145, "sa": 60, "sd": 55, "sp": 65}, "weightkg": 31.0, "abilities": {"0": "Earth Eater", "H": "Sand Veil"}}, "Glimmet": {"types": ["Rock", "Poison"], "bs": {"hp": 48, "at": 35, "df": 42, "sa": 105, "sd": 60, "sp": 60}, "weightkg": 0.8, "abilities": {"0": "Corrosion", "H": "Toxic Debris"}, "nfe": true}, "Glimmora": {"types": ["Rock", "Poison"], "bs": {"hp": 83, "at": 55, "df": 90, "sa": 130, "sd": 81, "sp": 86}, "weightkg": 4.5, "abilities": {"0": "Corrosion", "H": "Toxic Debris"}}, "Glimmora-Mega": {"types": ["Rock", "Poison"], "bs": {"hp": 83, "at": 90, "df": 105, "sa": 150, "sd": 96, "sp": 101}, "weightkg": 4.5, "abilities": {"0": "Merciless", "H": "Toxic Debris"}, "baseSpecies": "Glimmora"}, "Greavard": {"types": ["Ghost"], "bs": {"hp": 50, "at": 61, "df": 60, "sa": 30, "sd": 55, "sp": 34}, "weightkg": 3.5, "abilities": {"0": "Fluffy", "H": "Sand Rush"}, "nfe": true}, "Houndstone": {"types": ["Ghost"], "bs": {"hp": 72, "at": 101, "df": 100, "sa": 50, "sd": 97, "sp": 68}, "weightkg": 1.5, "abilities": {"0": "Fluffy", "H": "Sand Rush"}}, "Flamigo": {"types": ["Flying", "Fighting"], "bs": {"hp": 82, "at": 115, "df": 74, "sa": 75, "sd": 64, "sp": 90}, "weightkg": 3.7, "abilities": {"0": "Scrappy", "H": "Costar"}}, "Cetoddle": {"types": ["Ice"], "bs": {"hp": 108, "at": 68, "df": 45, "sa": 30, "sd": 40, "sp": 43}, "weightkg": 4.5, "abilities": {"0": "Thick Fat", "1": "Sheer Force", "H": "Snow Cloak"}, "nfe": true}, "Cetitan": {"types": ["Ice"], "bs": {"hp": 170, "at": 113, "df": 65, "sa": 45, "sd": 55, "sp": 73}, "weightkg": 70.0, "abilities": {"0": "Thick Fat", "1": "Sheer Force", "H": "Slush Rush"}}, "Veluza": {"types": ["Water", "Psychic"], "bs": {"hp": 90, "at": 102, "df": 73, "sa": 78, "sd": 65, "sp": 70}, "weightkg": 9.0, "abilities": {"0": "Sharpness", "H": "Sharpness"}}, "Dondozo": {"types": ["Water"], "bs": {"hp": 150, "at": 100, "df": 115, "sa": 65, "sd": 65, "sp": 35}, "weightkg": 22.0, "abilities": {"0": "Unaware", "H": "Oblivious"}}, "Tatsugiri": {"types": ["Dragon", "Water"], "bs": {"hp": 68, "at": 50, "df": 60, "sa": 120, "sd": 95, "sp": 82}, "weightkg": 0.8, "abilities": {"0": "Swift Swim", "H": "Commander"}}, "Tatsugiri-Mega": {"types": ["Dragon", "Water"], "bs": {"hp": 68, "at": 65, "df": 90, "sa": 135, "sd": 125, "sp": 92}, "weightkg": 2.4, "abilities": {"0": "Speed Boost"}, "baseSpecies": "Tatsugiri"}, "Tatsugiri-Droopy-Mega": {"types": ["Dragon", "Water"], "bs": {"hp": 68, "at": 65, "df": 90, "sa": 135, "sd": 125, "sp": 92}, "weightkg": 2.4, "abilities": {"0": "Speed Boost"}, "baseSpecies": "Tatsugiri"}, "Tatsugiri-Stretchy-Mega": {"types": ["Dragon", "Water"], "bs": {"hp": 68, "at": 65, "df": 90, "sa": 135, "sd": 125, "sp": 92}, "weightkg": 2.4, "abilities": {"0": "Speed Boost"}, "baseSpecies": "Tatsugiri"}, "Great Tusk": {"types": ["Ground", "Fighting"], "bs": {"hp": 115, "at": 131, "df": 131, "sa": 53, "sd": 53, "sp": 87}, "weightkg": 32.0, "abilities": {"0": "Protosynthesis"}}, "Scream Tail": {"types": ["Fairy", "Psychic"], "bs": {"hp": 115, "at": 65, "df": 99, "sa": 65, "sd": 115, "sp": 111}, "weightkg": 0.8, "abilities": {"0": "Protosynthesis"}}, "Brute Bonnet": {"types": ["Grass", "Dark"], "bs": {"hp": 111, "at": 127, "df": 99, "sa": 79, "sd": 99, "sp": 55}, "weightkg": 2.1, "abilities": {"0": "Protosynthesis"}}, "Flutter Mane": {"types": ["Ghost", "Fairy"], "bs": {"hp": 55, "at": 55, "df": 55, "sa": 135, "sd": 135, "sp": 135}, "weightkg": 0.4, "abilities": {"0": "Protosynthesis"}}, "Slither Wing": {"types": ["Bug", "Fighting"], "bs": {"hp": 85, "at": 135, "df": 79, "sa": 85, "sd": 105, "sp": 81}, "weightkg": 9.2, "abilities": {"0": "Protosynthesis"}}, "Sandy Shocks": {"types": ["Electric", "Ground"], "bs": {"hp": 85, "at": 81, "df": 97, "sa": 121, "sd": 85, "sp": 101}, "weightkg": 6.0, "abilities": {"0": "Protosynthesis"}}, "Iron Treads": {"types": ["Ground", "Steel"], "bs": {"hp": 90, "at": 112, "df": 120, "sa": 72, "sd": 70, "sp": 106}, "weightkg": 24.0, "abilities": {"0": "Quark Drive"}}, "Iron Bundle": {"types": ["Ice", "Water"], "bs": {"hp": 56, "at": 80, "df": 114, "sa": 124, "sd": 60, "sp": 136}, "weightkg": 1.1, "abilities": {"0": "Quark Drive"}}, "Iron Hands": {"types": ["Fighting", "Electric"], "bs": {"hp": 154, "at": 140, "df": 108, "sa": 50, "sd": 68, "sp": 50}, "weightkg": 38.1, "abilities": {"0": "Quark Drive"}}, "Iron Jugulis": {"types": ["Dark", "Flying"], "bs": {"hp": 94, "at": 80, "df": 86, "sa": 122, "sd": 80, "sp": 108}, "weightkg": 11.1, "abilities": {"0": "Quark Drive"}}, "Iron Moth": {"types": ["Fire", "Poison"], "bs": {"hp": 80, "at": 70, "df": 60, "sa": 140, "sd": 110, "sp": 110}, "weightkg": 3.6, "abilities": {"0": "Quark Drive"}}, "Iron Thorns": {"types": ["Rock", "Electric"], "bs": {"hp": 100, "at": 134, "df": 110, "sa": 70, "sd": 84, "sp": 72}, "weightkg": 30.3, "abilities": {"0": "Quark Drive"}}, "Frigibax": {"types": ["Dragon", "Ice"], "bs": {"hp": 65, "at": 75, "df": 45, "sa": 35, "sd": 45, "sp": 55}, "weightkg": 1.7, "abilities": {"0": "Thermal Exchange", "H": "Ice Body"}, "nfe": true}, "Arctibax": {"types": ["Dragon", "Ice"], "bs": {"hp": 90, "at": 95, "df": 66, "sa": 45, "sd": 65, "sp": 62}, "weightkg": 3.0, "abilities": {"0": "Thermal Exchange", "H": "Ice Body"}, "nfe": true}, "Baxcalibur": {"types": ["Dragon", "Ice"], "bs": {"hp": 115, "at": 145, "df": 92, "sa": 75, "sd": 86, "sp": 87}, "weightkg": 21.0, "abilities": {"0": "Thermal Exchange", "H": "Ice Body"}}, "Baxcalibur-Mega": {"types": ["Dragon", "Ice"], "bs": {"hp": 115, "at": 175, "df": 117, "sa": 105, "sd": 101, "sp": 87}, "weightkg": 31.5, "abilities": {"0": "Hyper Cutter", "H": "Filter"}, "baseSpecies": "Baxcalibur"}, "Gimmighoul": {"types": ["Ghost"], "bs": {"hp": 45, "at": 30, "df": 70, "sa": 75, "sd": 70, "sp": 10}, "weightkg": 0.5, "abilities": {"0": "Rattled"}, "nfe": true}, "Gimmighoul-Roaming": {"types": ["Ghost"], "bs": {"hp": 45, "at": 30, "df": 25, "sa": 75, "sd": 45, "sp": 80}, "weightkg": 0.0, "abilities": {"0": "Run Away"}}, "Gholdengo": {"types": ["Steel", "Ghost"], "bs": {"hp": 87, "at": 60, "df": 95, "sa": 133, "sd": 91, "sp": 84}, "weightkg": 3.0, "abilities": {"0": "Good as Gold"}}, "Wo-Chien": {"types": ["Dark", "Grass"], "bs": {"hp": 85, "at": 85, "df": 100, "sa": 95, "sd": 135, "sp": 70}, "weightkg": 7.4, "abilities": {"0": "Tablets of Ruin"}}, "Chien-Pao": {"types": ["Dark", "Ice"], "bs": {"hp": 80, "at": 120, "df": 80, "sa": 90, "sd": 65, "sp": 135}, "weightkg": 15.2, "abilities": {"0": "Sword of Ruin"}}, "Ting-Lu": {"types": ["Dark", "Ground"], "bs": {"hp": 155, "at": 110, "df": 125, "sa": 55, "sd": 80, "sp": 45}, "weightkg": 70.0, "abilities": {"0": "Vessel of Ruin"}}, "Chi-Yu": {"types": ["Dark", "Fire"], "bs": {"hp": 55, "at": 80, "df": 80, "sa": 135, "sd": 120, "sp": 100}, "weightkg": 0.5, "abilities": {"0": "Beads of Ruin"}}, "Roaring Moon": {"types": ["Dragon", "Dark"], "bs": {"hp": 105, "at": 139, "df": 71, "sa": 55, "sd": 101, "sp": 119}, "weightkg": 38.0, "abilities": {"0": "Protosynthesis"}}, "Iron Valiant": {"types": ["Fairy", "Fighting"], "bs": {"hp": 74, "at": 130, "df": 90, "sa": 120, "sd": 60, "sp": 116}, "weightkg": 3.5, "abilities": {"0": "Quark Drive"}}, "Koraidon": {"types": ["Fighting", "Dragon"], "bs": {"hp": 100, "at": 135, "df": 115, "sa": 85, "sd": 100, "sp": 135}, "weightkg": 30.3, "abilities": {"0": "Orichalcum Pulse", "1": "Pressure"}}, "Miraidon": {"types": ["Electric", "Dragon"], "bs": {"hp": 100, "at": 85, "df": 100, "sa": 135, "sd": 115, "sp": 135}, "weightkg": 24.0, "abilities": {"0": "Hadron Engine", "1": "Pressure"}}, "Walking Wake": {"types": ["Water", "Dragon"], "bs": {"hp": 99, "at": 83, "df": 91, "sa": 125, "sd": 83, "sp": 109}, "weightkg": 28.0, "abilities": {"0": "Protosynthesis"}}, "Iron Leaves": {"types": ["Grass", "Psychic"], "bs": {"hp": 90, "at": 130, "df": 88, "sa": 70, "sd": 108, "sp": 104}, "weightkg": 12.5, "abilities": {"0": "Quark Drive"}}, "Poltchageist": {"types": ["Grass", "Ghost"], "bs": {"hp": 40, "at": 45, "df": 45, "sa": 74, "sd": 54, "sp": 50}, "weightkg": 0.1, "abilities": {"0": "Hospitality", "H": "Heatproof"}, "nfe": true}, "Poltchageist-Artisan": {"types": ["Grass", "Ghost"], "bs": {"hp": 40, "at": 45, "df": 45, "sa": 74, "sd": 54, "sp": 50}, "weightkg": 0.1, "abilities": {"0": "Hospitality", "H": "Heatproof"}, "nfe": true}, "Sinistcha": {"types": ["Grass", "Ghost"], "bs": {"hp": 71, "at": 60, "df": 106, "sa": 121, "sd": 80, "sp": 70}, "weightkg": 0.2, "abilities": {"0": "Hospitality", "H": "Heatproof"}}, "Sinistcha-Masterpiece": {"types": ["Grass", "Ghost"], "bs": {"hp": 71, "at": 60, "df": 106, "sa": 121, "sd": 80, "sp": 70}, "weightkg": 0.2, "abilities": {"0": "Hospitality", "H": "Heatproof"}}, "Okidogi": {"types": ["Poison", "Fighting"], "bs": {"hp": 88, "at": 128, "df": 115, "sa": 58, "sd": 86, "sp": 80}, "weightkg": 9.2, "abilities": {"0": "Toxic Chain", "H": "Guard Dog"}}, "Munkidori": {"types": ["Poison", "Psychic"], "bs": {"hp": 88, "at": 75, "df": 66, "sa": 130, "sd": 90, "sp": 106}, "weightkg": 1.2, "abilities": {"0": "Toxic Chain", "H": "Frisk"}}, "Fezandipiti": {"types": ["Poison", "Fairy"], "bs": {"hp": 88, "at": 91, "df": 82, "sa": 70, "sd": 125, "sp": 99}, "weightkg": 3.0, "abilities": {"0": "Toxic Chain", "H": "Technician"}}, "Ogerpon": {"types": ["Grass"], "bs": {"hp": 80, "at": 120, "df": 84, "sa": 60, "sd": 96, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Inner Focus"}}, "Ogerpon-Wellspring": {"types": ["Grass", "Water"], "bs": {"hp": 80, "at": 120, "df": 84, "sa": 60, "sd": 96, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Water Veil"}}, "Ogerpon-Hearthflame": {"types": ["Grass", "Fire"], "bs": {"hp": 80, "at": 120, "df": 84, "sa": 60, "sd": 96, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Mold Breaker"}}, "Ogerpon-Cornerstone": {"types": ["Grass", "Rock"], "bs": {"hp": 80, "at": 120, "df": 84, "sa": 60, "sd": 96, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Sturdy"}}, "Ogerpon-Teal-Tera": {"types": ["Grass"], "bs": {"hp": 80, "at": 145, "df": 84, "sa": 60, "sd": 96, "sp": 135}, "weightkg": 4.0, "abilities": {"0": "Embody Aspect"}, "baseSpecies": "Ogerpon-Cornerstone-Tera"}, "Ogerpon-Wellspring-Tera": {"types": ["Grass", "Water"], "bs": {"hp": 80, "at": 145, "df": 84, "sa": 60, "sd": 121, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Embody Aspect"}, "baseSpecies": "Ogerpon-Cornerstone-Tera"}, "Ogerpon-Hearthflame-Tera": {"types": ["Grass", "Fire"], "bs": {"hp": 80, "at": 145, "df": 89, "sa": 60, "sd": 106, "sp": 120}, "weightkg": 4.0, "abilities": {"0": "Embody Aspect"}, "baseSpecies": "Ogerpon-Cornerstone-Tera"}, "Ogerpon-Cornerstone-Tera": {"types": ["Grass", "Rock"], "bs": {"hp": 80, "at": 145, "df": 109, "sa": 60, "sd": 96, "sp": 110}, "weightkg": 4.0, "abilities": {"0": "Embody Aspect"}, "baseSpecies": "Ogerpon-Cornerstone-Tera"}, "Gouging Fire": {"types": ["Fire", "Dragon"], "bs": {"hp": 105, "at": 115, "df": 121, "sa": 65, "sd": 93, "sp": 91}, "weightkg": 59.0, "abilities": {"0": "Protosynthesis"}}, "Raging Bolt": {"types": ["Electric", "Dragon"], "bs": {"hp": 125, "at": 73, "df": 91, "sa": 137, "sd": 89, "sp": 75}, "weightkg": 48.0, "abilities": {"0": "Protosynthesis"}}, "Iron Boulder": {"types": ["Rock", "Psychic"], "bs": {"hp": 90, "at": 120, "df": 80, "sa": 68, "sd": 108, "sp": 124}, "weightkg": 16.2, "abilities": {"0": "Quark Drive"}}, "Iron Crown": {"types": ["Steel", "Psychic"], "bs": {"hp": 90, "at": 72, "df": 100, "sa": 122, "sd": 108, "sp": 98}, "weightkg": 15.6, "abilities": {"0": "Quark Drive"}}, "Terapagos": {"types": ["Normal"], "bs": {"hp": 90, "at": 65, "df": 85, "sa": 65, "sd": 85, "sp": 60}, "weightkg": 0.7, "abilities": {"0": "Tera Shift"}}, "Terapagos-Terastal": {"types": ["Normal"], "bs": {"hp": 95, "at": 95, "df": 110, "sa": 105, "sd": 110, "sp": 85}, "weightkg": 1.6, "abilities": {"0": "Tera Shell"}}, "Terapagos-Stellar": {"types": ["Normal"], "bs": {"hp": 160, "at": 105, "df": 110, "sa": 130, "sd": 110, "sp": 85}, "weightkg": 7.7, "abilities": {"0": "Teraform Zero"}}, "Pecharunt": {"types": ["Poison", "Ghost"], "bs": {"hp": 88, "at": 88, "df": 160, "sa": 88, "sd": 88, "sp": 88}, "weightkg": 0.0, "abilities": {"0": "Poison Puppeteer"}}});

exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
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
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith('-Gmax'); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(['bs', 'otherFormes']);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[m.id] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map