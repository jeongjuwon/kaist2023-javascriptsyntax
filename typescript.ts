// Generic

function sum(a: number, b: number): number {
  return a + b;
}

function printArray<T>(arr: T[]): T[] {
  return arr;
}

const result1 = printArray([1, 2, 3]);
result1.push(4);
// result1.push('str');

const result2 = printArray(['a', 'b', 'c']);
// result2.push(4);
result2.push('str');

const result3 = printArray([true, false, true]);
result3.push(true);
// result3.push('str');

printArray<number>([1, 2, 3]);
printArray<string>(['a', 'b', 'c']);
printArray<boolean>([true, false, true]);

function printNumberArray(arr: number[]): number[] {
  return arr;
}

function printStringArray(arr: string[]): string[] {
  return arr;
}

function printBooleanArray(arr: boolean[]): boolean[] {
  return arr;
}

function printDateArray(arr: Date[]): Date[] {
  return arr;
}
