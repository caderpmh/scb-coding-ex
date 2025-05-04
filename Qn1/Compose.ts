function compose(fns: Function[]) {
  return function (initialValue: any): Promise<any> {
    return fns.reduce((accumulator, fn) => {
      return accumulator.then(fn as (value: any) => any | Promise<any>);
    }, Promise.resolve(initialValue));
  };
}

const composed = compose([
  (x: number) => x * 2,
  (x: number) => x + 1,
  async (x: number) => x * x,
]);

composed(2).then(console.log); // Output: 25
