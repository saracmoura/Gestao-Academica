import { PessoaBase } from "./PessoaBase.js";

export class Professor extends PessoaBase {
  #salario;

  constructor(nome, cpf, email, salario, titulacao) {
    super(nome, cpf, email);
    this.salario = salario;
    this.titulacao = titulacao;
  }

  get salario() {
    return this.#salario;
  }

  set salario(valor) {
    if (isNaN(valor) || valor < 1500 || typeof valor !== "number") {
      throw new Error("ERR_SALARIO_BASE");
    }
    this.#salario = valor;
  }
}