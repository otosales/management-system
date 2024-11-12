"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cargos_1 = require("./enum/cargos");
class Sistema {
    constructor(salarioBase = 1000) {
        this._colaboradores = [];
        this.salarioBase = salarioBase;
    }
    contratarColaborador(colaborador) {
        this._colaboradores.push(colaborador);
    }
    demitirColaborador(colaboradorChave) {
        this._colaboradores = this._colaboradores.filter((colaborador) => colaborador !== colaboradorChave);
    }
    calcularSalario(cargo) {
        if (cargo === cargos_1.Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }
        else if (cargo === cargos_1.Cargos.Junior) {
            return this.salarioBase * 3;
        }
        else if (cargo === cargos_1.Cargos.Pleno) {
            return this.salarioBase * 5;
        }
        else if (cargo === cargos_1.Cargos.Senior) {
            return this.salarioBase * 7;
        }
        return 0;
    }
    pagaColaborador(colaborador) {
        const salarioColaborador = this.calcularSalario(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
    gerarRelatorioJSON() {
        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.calcularSalario(colaborador.cargo),
            });
        });
        return JSON.stringify(relatorio);
    }
    ;
    get colaboradores() {
        return this._colaboradores;
    }
}
exports.default = Sistema;
