import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import { SistemaDeAutenticacao } from "./Funcionarios/SistemaDeAutenticacao.js";

const diretor = new Diretor("Marcelo", 10000, 12378945622);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ana", 20000, 43234265566);
gerente.cadastrarSenha("456789");

const estaLogado =  SistemaDeAutenticacao.login(gerente, "456789");

console.log(estaLogado);

