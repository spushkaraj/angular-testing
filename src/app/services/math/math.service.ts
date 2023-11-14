import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public isPrime(num: number): boolean {
    for(let i=2; i<num; i++){
      if(num % i === 0) return false;
    }

    return num !== 1 && num !== 0;
  }

  public isOdd(num: number): boolean {
    return !(num % 2 === 0);
  }

  public isEven(num: number): boolean {
    return num % 2 === 0;
  }
}
