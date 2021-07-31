import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import User from '../app/models/User';
import Aluno from '../app/models/Aluno';
import Professor from '../app/models/Professor';
import Proposito from '../app/models/Proposito';
import Local from '../app/models/Local';
import Turma from '../app/models/Turma';
import Alocacao from '../app/models/Alocacao';
import Agenda from '../app/models/Agenda';

const connection = new Sequelize(dbConfig);

User.init(connection);
Aluno.init(connection);
Professor.init(connection);
Proposito.init(connection);
Local.init(connection);
Turma.init(connection);
Alocacao.init(connection);
Agenda.init(connection);

User.associate(connection.models);
Aluno.associate(connection.models);
Professor.associate(connection.models);
Turma.associate(connection.models);
Alocacao.associate(connection.models);
Agenda.associate(connection.models);
// Proposito.associate(connection.models);
// Local.associate(connection);

module.exports = connection;
