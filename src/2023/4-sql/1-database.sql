-- SELECT

SELECT * FROM aluno;
SELECT * FROM professor;
SELECT * FROM aulas;

-- SELECT SPECIFYING FIELDS

SELECT nome, responsavel FROM aluno;
SELECT materia, cpf, nome FROM professor;

-- SELECT WITH WHERE

SELECT * FROM aluno WHERE matricula = 1;
SELECT * FROM aluno WHERE nome like 'J%';
SELECT matricula, cpf FROM aluno WHERE nome like '%G%';

-- EQUAL

SELECT * FROM aluno WHERE cpf = 45678945645;
SELECT * FROM aluno WHERE matricula = 3;

-- LIKE

SELECT * FROM aluno WHERE nome like 'Jakeliny Gracielly';
SELECT * FROM aluno WHERE responsavel like 'Josefina Gracielly';
SELECT * FROM aluno WHERE responsavel like 'Josefina%';
SELECT * FROM aluno WHERE responsavel like '%G%';
SELECT * FROM aluno WHERE responsavel like '%a';

-- GREATER THAN >

SELECT * FROM aluno WHERE matricula > 1;

-- LESS THAN <

SELECT * FROM aluno WHERE matricula < 10;

-- GREATER OR EQUAL >=

SELECT * FROM aluno WHERE matricula >= 2;

-- LESS OR EQUAL <=

SELECT * FROM aluno WHERE matricula <= 2;

-- NOT EQUAL TO <>

SELECT * FROM aluno WHERE matricula <> 2;

-- DIFFERENT FROM !=

SELECT * FROM aluno WHERE matricula != 2;

-- ADDITION +

SELECT * FROM aluno WHERE matricula = 2 + 1;

-- SUBTRACTION -

SELECT * FROM aluno WHERE matricula = 4-3;

-- MULTIPLICATION *

SELECT * FROM aluno WHERE matricula = 3*1;

-- DIVISION /

SELECT * FROM aluno WHERE matricula = 4/2;

-- MODULE %

SELECT * FROM aluno WHERE matricula = 5%3;

-- AND

SELECT * FROM aluno WHERE nome like 'J%' AND matricula < 2;

-- OR

SELECT * FROM aluno WHERE matricula > 1 OR nome like 'J%';
