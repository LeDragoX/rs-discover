-- INSERT INTO

INSERT INTO ALUNO(nome, cpf, responsavel) VALUES('Maria Luiza', 456789012345, 'Wantuil Soares');

-- UPDATE

UPDATE aluno SET nome='Mariano Garcia', responsavel='Marcio Soares', cpf=12345678985 WHERE matricula = 2;
UPDATE aluno SET nome='Mariano Garcia'; -- PERIGO!!! NÃO FAÇA UPDATE SEM WHERE
UPDATE aluno SET nome='Jakeliny Gracielly' WHERE matricula = 1;

-- DELETE

DELETE FROM aluno WHERE matricula = 3;
DELETE FROM aluno -- NÃO FAÇA ISSO!!!
