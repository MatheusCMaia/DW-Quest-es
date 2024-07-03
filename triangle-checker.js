function triangleChecker(a, b, c){
  if (a + b > c && a + c > b && b + c > a){
    if (a === b && b === c){
      return "equilatero"
    } else if (a === b || b === c || a === c){
      return "isosceles"
    } else {
      return "escaleno"
    }
  } else{
    return "none"
  }
}
