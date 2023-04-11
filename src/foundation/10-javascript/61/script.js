let scoreA = 100
let scoreB = 85
let scoreC = 75
let scoreD = 65
let scoreF = 55

function calcSchoolScore(score) {
  let grading

  if (score >= 90 && score <= 100) {
    grading = 'A'
  } else if (score > 80 && score < 90) {
    grading = 'B'
  } else if (score > 70 && score < 80) {
    grading = 'C'
  } else if (score > 60 && score < 70) {
    grading = 'D'
  } else if (score >= 0 && score < 60) {
    grading = 'F'
  } else {
    grading = 'Nota inválida'
  }

  console.log(grading + ' - ' + score)
  return grading
}

calcSchoolScore(scoreA)
calcSchoolScore(scoreB)
calcSchoolScore(scoreC)
calcSchoolScore(scoreD)
calcSchoolScore(scoreF)
calcSchoolScore(101)
calcSchoolScore(-1)
