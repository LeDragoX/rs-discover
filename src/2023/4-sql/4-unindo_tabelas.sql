-- JOIN

SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento;

-- JOIN with WHERE

SELECT * FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
WHERE departamentos.id_dept = 2;

-- JOIN specifying fields

SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept;

-- ALIAS

SELECT func.nome as "Nome", func.cpf as "CPF", dpt.descricao as "Departamento"
FROM funcionarios as func
JOIN departamentos as dpt
ON func.id_departamento = dpt.id_dept;

-- LEFT OUTER JOIN

SELECT * FROM departamentos
LEFT OUTER JOIN funcionarios
ON funcionarios.id_departamento = departamentos.id_dept;
