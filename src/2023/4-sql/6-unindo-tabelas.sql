-- OFFSET

SELECT * FROM funcionarios
LIMIT 4 OFFSET 4;

-- COUNT

SELECT COUNT(nome) FROM funcionarios;
SELECT COUNT(id_departamento) FROM funcionarios;

-- GROUP BY

SELECT id_departamento, COUNT(id_departamento) 
FROM funcionarios
GROUP BY id_departamento;

-- JOIN + GROUP BY + COUNT

SELECT departamentos.descricao, COUNT(funcionarios.id_departamento)
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept;

-- HAVING

SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
HAVING COUNT(funcionarios.id_departamento) IN (2, 4);
