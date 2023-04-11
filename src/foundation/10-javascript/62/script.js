let family = {
  incomes: [6969.20, 100.65, 402.46, 285.26],
  expenses: [4500.99, 2300.14, 36.60]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calcBalance(account) {
  const calculateIncomes = sum(account.incomes)
  const calculateExpenses = sum(account.expenses)

  totalBalance = calculateIncomes - calculateExpenses
  const itsOk = totalBalance >= 0

  if (itsOk) {
    accStatus = 'Você está com saldo POSITIVO, parabains!!'
  } else {
    accStatus = 'Você vai conhecer o Serasa, está com saldo NEGATIVADO'
  }

  console.log(`Seu saldo é ${totalBalance.toFixed(2)}R$, então: ${accStatus}`)
}

calcBalance(family)
