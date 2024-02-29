class Alu {
  operate(a: number, b: number, operation: string): number {
    switch (operation) {
      case 'add':
        return a + b;
      case 'sub':
        return a - b;
      case 'mul':
        return a * b;
      case 'div':
        return a / b;
      default:
        throw new Error('Operation not supported');
    }
  }
}