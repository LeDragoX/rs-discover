function convertToCelsius(temperature) {
  calc = (temperature - 32) * (5 / 9)
  console.log(`${temperature}Fº -> ${calc.toFixed(1)}Cº`)
  return calc.toFixed(1) + 'C'
}

function convertToFahrenheit(temperature) {
  calc = (temperature * (9 / 5)) + 32
  console.log(`${temperature}Cº -> ${calc.toFixed(1)}Fº`)
  return calc.toFixed(1) + 'F'
}

function transformDegree(degree) {
  const isCelsius = degree.toUpperCase().includes('C')
  const isFahrenheit = degree.toUpperCase().includes('F')
  let updatedDegree

  if (!isCelsius && !isFahrenheit) {
    throw new Error(`Grau não identificado '${degree.slice(-1)}'`)
  }

  if (isCelsius) {
    updatedDegree = convertToFahrenheit(degree.slice(0, -1))
  }
  if (isFahrenheit) {
    updatedDegree = convertToCelsius(degree.slice(0, -1))
  }

  console.log(`Final result: ${updatedDegree}`)
  return updatedDegree
}

try {
  transformDegree('40C')
  transformDegree('80F')

  convertToCelsius(77)
  convertToFahrenheit(25)

  transformDegree('80E')
} catch (e) {
  console.log(e)
  console.log(e.message)
}

