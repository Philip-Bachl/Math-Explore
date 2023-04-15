import { Formular } from "./formular";
export const FORMULARS: Formular[] = [
    {id: 1, name: "y = kx + d", computation: (x: number, k: number, d: number) => x * k + d},
    {id: 2, name: "a² + b² = c²", computation: (a:number, b:number, c:number) => Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)},
    {id: 3, name: "ax² + bx + c", computation: (a:number, b:number, c:number, x:number) => a * Math.pow(x, 2) + b * x + c}
    //TODO implement rest!!!
]