export function divideArray<T>(array: ReadonlyArray<T>, divider: number) {
  const dividedArray: T[][] = [];

  for (let i = 0; i < array.length; i += divider) {
    dividedArray.push(array.slice(i, i + divider));
  }

  return dividedArray;
}
