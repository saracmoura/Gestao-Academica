import { Aluno } from "./Aluno.js";
import { Professor } from "./Professor.js";
import { ValidadorUtil } from "./ValidadorUtil.js";

export class GestorAcademico {
  constructor() {
    this.alunos = [];
    this.professores = [];
  }

  cadastrarAluno(nome, cpf, email, idade, curso) {
    try {
      const aluno = new Aluno(nome, cpf, email, idade, curso);
      this.alunos.push(aluno);
      console.log(`[SUCESSO] ${aluno.nome} matriculado com sucesso!`);

    } catch (erro) {
      this.traduzirErroParaOCliente(erro.message);
    }
  }

  cadastrarProfessor(nome, cpf, email, salario, titulacao) {
    try {
      const professor = new Professor(nome, cpf, email, salario, titulacao);
      this.professores.push(professor);
      console.log(`[SUCESSO] ${professor.nome} contratado com sucesso!`);

    } catch (erro) {
      this.traduzirErroParaOCliente(erro.message);
    }
  }

  buscarPorCPF(cpf) { 
    const cpfLimpo = cpf

  if (!ValidadorUtil.validarCPF(cpf)) {
    this.traduzirErroParaOCliente("ERR_CPF_INVALIDO");
    return;
  }
    const aluno = this.alunos.find((aluno) => aluno.cpf === cpf);
    if (aluno) {
      console.log("--- ALUNO ENCONTRADO ---");
      console.log(`Nome: ${aluno.nome}`);
      console.log(`CPF: ${aluno.cpf}`);
      console.log(`E-mail: ${aluno.email}`);
      console.log(`Idade: ${aluno.idade}`);
      console.log(`Curso: ${aluno.curso}`);
      console.log(`Status: ${aluno.status}`);
      return;
    }

    const professor = this.professores.find((professor) => professor.cpf === cpfLimpo);
    if (professor) {
      console.log("--- PROFESSOR ENCONTRADO ---");
      console.log(`Nome: ${professor.nome}`);
      console.log(`CPF: ${professor.cpf}`);
      console.log(`E-mail: ${professor.email}`);
      console.log(`Salário: R$ ${professor.salario.toFixed(2)}`);
      console.log(`Titulação: ${professor.titulacao}`);
      return;
    }

    console.log(`AVISO: Nenhuma pessoa encontrada com o CPF: ${cpfLimpo}.`);
  }

  traduzirErroParaOCliente(codigoErro) {
    switch (codigoErro) {

      case "ERR_CLASSE_ABSTRATA":
        console.log("AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.");
        break;

      case "ERR_NOME_VAZIO":
        console.log("AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
        break;

      case "ERR_CPF_INVALIDO":
        console.log("AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
        break;

      case "ERR_EMAIL_INVALIDO":
        console.log("AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).");
        break;

      case "ERR_IDADE_MINIMA":
        console.log("AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.");
        break;

      case "ERR_SALARIO_BASE":
        console.log("AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).");
        break;

      default:
        console.log(`AVISO SISTÊMICO: Falha no processamento dos dados: ${codigoErro}.`);
    }
  }
}