type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

function validateRequiredKeys<T>(obj: T): Pick<T, RequiredKeys<T>> {
  return obj as Pick<T, RequiredKeys<T>>;
}

type Person = {
  id: number;
  name?: string;
  age: number;
};

type Keys = RequiredKeys<Person>; // "id" | "age"

const obj: Person = { id: 1, age: 30 };

// Will pass validation
validateRequiredKeys(obj);
