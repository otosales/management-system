"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colaborador_1 = __importDefault(require("./Colaborador"));
const Sistema_1 = __importDefault(require("./Sistema"));
const cargos_1 = require("./enum/cargos");
const sistema = new Sistema_1.default();
const colaborador1 = new Colaborador_1.default("José", cargos_1.Cargos.Estagiario);
const colaborador2 = new Colaborador_1.default("Maria", cargos_1.Cargos.Junior);
const colaborador3 = new Colaborador_1.default("João", cargos_1.Cargos.Pleno);
sistema.contratarColaborador(colaborador1);
sistema.contratarColaborador(colaborador2);
sistema.contratarColaborador(colaborador3);
console.log(sistema.gerarRelatorioJSON());
console.log(colaborador1);
sistema.pagaColaborador(colaborador1);
console.log(colaborador1);
