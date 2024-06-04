-- BETWEEN

SELECT * FROM funcionarios
WHERE id_funcionario NOT BETWEEN 4 AND 7;


SELECT * FROM funcionarios
WHERE id_funcionario BETWEEN 4 AND 7;

-- IN and NOT IN

SELECT * FROM funcionarios
WHERE id_departamento IN (1, 3, 5);

SELECT * FROM funcionarios
WHERE id_departamento NOT IN (1, 3, 5);

-- IS NULL and IS NOT NULL

SELECT * FROM funcionarios
WHERE id_departamento IS NULL;

SELECT * FROM funcionarios
WHERE id_departamento IS NOT NULL;
