import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  describe('all', () => {
    it('should return collection of users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];

      let response:any[] = [];

      spyOn(service, 'all').and.returnValue(of(userResponse));

      service.all().subscribe(res => {
        response = res;
      })

      expect(response).toEqual(userResponse);
      expect(service.all).toHaveBeenCalled();
    })
  })
});
