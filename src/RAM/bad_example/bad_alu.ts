
class Alu {
  constructor(private firstOperand: number, private operation: string ,private secondOperand: number) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.operation = operation;
  }
  operate() {
    switch (this.operation) {
      case 'add':
        return this.add();
      case 'sub':
        return this.sub()
      case 'mul':
        return this.mul()
      case 'div':
        return this.div()
      default:
        throw new Error('Operation not supported');
    }
  }
  private add(): number {
    return this.firstOperand + this.secondOperand;
  }
  private sub(): number {
    return this.firstOperand - this.secondOperand;
  }
  private mul(): number {
    return this.firstOperand * this.secondOperand;
  }
  private div(): number {
    return this.firstOperand / this.secondOperand;
  }
}