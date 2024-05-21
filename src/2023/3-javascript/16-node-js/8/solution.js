const getFlagValue = require("./flags")

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

// node .\src\2023\3-javascript\16-node.js\8\solution.js --name "Mayk Brito" --greeting "Tudo bem com você?"
