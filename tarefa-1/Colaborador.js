"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Colaborador {
    constructor(nome, cargo) {
        this.nome = nome;
        this._cargo = cargo;
        this._saldo = 0;
    }
    get cargo() {
        return this._cargo;
    }
    set cargo(cargo) {
        this._cargo = cargo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(salario) {
        this._saldo += salario;
    }
}
exports.default = Colaborador;
