import { Router } from 'express';
import UserController from './app/controllers/UserController';
import ProfessorController from './app/controllers/ProfessorController';
import TurmaController from './app/controllers/TurmaController';
import AlunoController from './app/controllers/AlunoController';
import PropositoController from './app/controllers/PropositoController';
import LocalController from './app/controllers/LocalController';
import AlocacaoController from './app/controllers/AlocacaoController';
import AgendaController from './app/controllers/AgendaController';
import SessionController from './app/controllers/SessionController';
import AlunoEmailController from './app/controllers/AlunoEmailController';

const routes = new Router();
// Autenticação
routes.post('/session', SessionController.store);

// Usuário
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// Aluno
routes.post('/aluno', AlunoController.store);
routes.get('/aluno', AlunoController.index);
routes.get('/aluno/:id', AlunoController.show);
routes.put('/aluno/:id', AlunoController.update);
routes.delete('/aluno/:id', AlunoController.delete);

// Aluno email routes
routes.get('/aluno/:email', AlunoEmailController.show);

// Professor
routes.post('/professor', ProfessorController.store);
routes.get('/professor', ProfessorController.index);
routes.get('/professor/:id', ProfessorController.show);
routes.put('/professor/:id', ProfessorController.update);
routes.delete('/professor/:id', ProfessorController.delete);

// Turma
routes.post('/turma/:id_professor', TurmaController.store);
routes.get('/turma', TurmaController.index);
routes.get('/turma/:id', TurmaController.show);
routes.put('/turma/:id', TurmaController.update);
routes.delete('/turma/:id', TurmaController.delete);

// Local
routes.post('/local', LocalController.store);
routes.get('/local', LocalController.index);
routes.get('/local/:id', LocalController.show);
routes.put('/local/:id', LocalController.update);
routes.delete('/local/:id', LocalController.delete);

// proposito
routes.post('/proposito', PropositoController.store);
routes.get('/proposito', PropositoController.index);
routes.get('/proposito/:id', PropositoController.show);
routes.put('/proposito/:id', PropositoController.update);
routes.delete('/proposito/:id', PropositoController.delete);

// alocação
routes.post('/alocacao', AlocacaoController.store);
routes.get('/alocacao', AlocacaoController.index);
routes.get('/alocacao/:id', AlocacaoController.show);
routes.put('/alocacao/:id', AlocacaoController.update);
routes.delete('/alocacao/:id', AlocacaoController.delete);

// agenda
routes.post('/agenda', AgendaController.store);
routes.get('/agenda', AgendaController.index);
routes.get('/agenda/:id', AgendaController.show);
routes.put('/agenda/:id', AgendaController.update);
routes.delete('/agenda/:id', AgendaController.delete);

export default routes;
