import { GestorAcademico } from './GestorAcademico.js';
import { TitulacaoEnum } from './Dominio.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function iniciarSistema() {
  const rl = readline.createInterface({ input, output });

  try {

    let sistemaRodando = true;
    const gestor = new GestorAcademico();

     while (sistemaRodando) {
    console.log('=== SEJA BEM VINDO AO SISTEMA DE GESTÃO ACADÊMICA ===');

    console.log('1. Matricular Aluno');
    console.log('2. Contratar Professor');
    console.log('3. Buscar Cadastro (por CPF)');
    console.log('4. Sair do Sistema');

    const opcao = await rl.question('Escolha uma opção: ');

    switch (opcao) {

      case '1': {
        console.log('Você selecionou: Matrícula de Aluno');
        const nome = await rl.question('Nome: ');
        const cpf = await rl.question('CPF (11 dígitos): ');
        const email = await rl.question('E-mail: ');
        const idade = parseInt(await rl.question('Idade: '));
        const curso = await rl.question('Curso: ');
        gestor.cadastrarAluno(nome, cpf, email, idade, curso);
        break;
      }

      case '2': {
        console.log('Você selecionou: Contratação de Professor');
        const nome = await rl.question('Nome: ');
        const cpf = await rl.question('CPF (11 dígitos): ');
         const email = await rl.question('E-mail: ');
        const salario = parseFloat(await rl.question('Salário: '));
        const opcaoTitulacao = (await rl.question("Titulação (1 - ESPECIALISTA 2 - MESTRE, 3 - DOUTOR): ")).trim();

        let titulacoes = {
            "1": TitulacaoEnum.ESPECIALISTA,
            "2": TitulacaoEnum.MESTRE,
            "3": TitulacaoEnum.DOUTOR
        };
        const titulacao = titulacoes[opcaoTitulacao];

        if (!titulacao) {
            console.log("AVISO: Opção inválida. Por favor, escolha uma das opções válidas (1, 2 ou 3).");
        }
        gestor.cadastrarProfessor(nome, cpf, email, salario, titulacao);
        break;
      }

      case '3': {
        console.log('Você selecionou: Buscar Cadastro');
        const cpfBusca = await rl.question('Digite o CPF para busca: ');
        gestor.buscarPorCPF(cpfBusca);
        break;
      }
      
      case '4':
        console.log('Encerrando o sistema...');
        sistemaRodando = false;
        break;

      default:
        console.log('Opção inválida. Tente novamente.');
        break;
    }
  }
  } finally {
  rl.close();
  }
}

iniciarSistema();