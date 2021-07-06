const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hellow', 'Typescript'];

// Tuple array from different data types

const contact: [string, number] = ['Issa', 1234567];

// Any

let variable: any = 42;
// ...
variable = 'new string';

// ===

function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Tesla');

// Never

function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {

    }
}

// Type

type Login = string; // alias
const login: Login = 'Hello';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type someType = string | null | undefined;

