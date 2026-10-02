import { ValidadorUtil } from "./ValidadorUtil.js";
export class PessoaBase {
  #nome;
  #cpf;
  #email;

    constructor(nome, cpf, email) {
        if (new.target === PessoaBase) {
        throw new Error("ERR_CLASSE_ABSTRATA");
    }
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
  }

    get nome() {
        return this.#nome;
  }

    set nome(tamanhoNome) {
        if (!tamanhoNome || typeof tamanhoNome !== "string" || tamanhoNome === "") {
        throw new Error("ERR_NOME_VAZIO");
    }
        this.#nome = tamanhoNome
  }

    get cpf() {
        return this.#cpf;
  }

    set cpf(tamanhoCpf) {
        if (!ValidadorUtil.validarCPF(tamanhoCpf)) {
        throw new Error("ERR_CPF_INVALIDO");
    }
        this.#cpf = tamanhoCpf
  }

    get email() {
        return this.#email;
  }

    set email(tamanhoEmail) {
        if (!ValidadorUtil.validarEmail(tamanhoEmail)) {
        throw new Error("ERR_EMAIL_INVALIDO");
    }
        this.#email = tamanhoEmail
  }
}