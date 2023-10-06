import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  countervalue = signal(0);
  userarry=signal([{id:1,name:'Sachin'},{id:2,name:'Lara'}])
}
