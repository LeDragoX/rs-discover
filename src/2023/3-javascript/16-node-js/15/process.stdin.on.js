const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
  process.stdout.write(questions[index] + "\n\n\n")
}

ask()

process.stdin.on("data", data => {
  process.stdout.write(data.toString().trim() + '\n')
  process.exit()
})
