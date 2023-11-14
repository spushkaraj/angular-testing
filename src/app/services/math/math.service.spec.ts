import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  describe('Testing the isPrime method with spyOn', () => {
    beforeEach(() => {
      spyOn(service, 'isPrime').and.callThrough();
    })
    
    it('should return false for 4 as Prime number', () => {
      expect(service.isPrime(4)).toBeFalsy();
      expect(service.isPrime).toHaveBeenCalledWith(4);
    })
  
    it('should return true for 73 as Prime number', () => {
      expect(service.isPrime(73)).toBeTruthy();
      expect(service.isPrime).toHaveBeenCalledTimes(1);
    })
  })
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return true for 7 as Odd', () => {
    expect(service.isOdd(7)).toBeTruthy();
  })

  it('should return false for 8 as Odd', () => {
    expect(service.isOdd(8)).not.toBeTruthy();
  })

  it('should return true for 8 as Even', () => {
    expect(service.isEven(8)).toBeTruthy();
  })
});
