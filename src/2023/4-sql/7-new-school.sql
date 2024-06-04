-- CREATE TABLE

CREATE TABLE alunos (
	matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  responsavel TEXT
)

CREATE TABLE professores (
  id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  materia TEXT
)

CREATE TABLE aulas (
  id_professor INTEGER,
  matricula INTEGER,
  FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
  FOREIGN KEY(matricula) REFERENCES alunos(matricula)
)
