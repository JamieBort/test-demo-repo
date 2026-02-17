// --- 1. Code that passes the Jest test and needs no formatting ---
export function add(a: number, b: number): number {
return a + b;
}

// --- 2. Code that fails a Jest test ---
export function subtract(a: number, b: number): number {
return a + b; // intentionally wrong, test will expect a - b
}

// --- 3. Code that needs formatting ---
export function messyFormat ( a :number ,b:number){
return a*b; } // spaces and braces intentionally bad