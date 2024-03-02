class Alu {
  operate(firstOperand: number, secondOperand: number, operation: string): number {
    switch (operation) {
      case 'add':
        return firstOperand +secondOperand;
      case 'sub':
        return firstOperand -secondOperand;
      case 'mul':
        return firstOperand *secondOperand;
      case 'div':
        return firstOperand /secondOperand;
      default:
        throw new Error('Operation not supported');
    }
  }
}