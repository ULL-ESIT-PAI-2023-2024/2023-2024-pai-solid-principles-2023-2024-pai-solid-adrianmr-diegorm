

interface Operation {
  operate(): number;
}

class Add implements Operation {
  constructor(private firstOperand: number, private secondOperand: number) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }
  operate() {
    return this.firstOperand + this.secondOperand;
  }
}

class Sub implements Operation {
  constructor(private firstOperand: number, private secondOperand: number) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }
  operate() {
    return this.firstOperand - this.secondOperand;
  }
}

class Mul implements Operation {
  constructor(private firstOperand: number, private secondOperand: number) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }
  operate() {
    return this.firstOperand * this.secondOperand;
  }
}

class Div implements Operation {
  constructor(private firstOperand: number, private secondOperand: number) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }
  operate() {
    return this.firstOperand / this.secondOperand;
  }
}

