import { Component } from '@angular/core';
import { MasterService } from 'src/app/shared/master.service';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  constructor(private service:MasterService){

  }

  Increment(){
    this.service.countervalue.update(previous=>previous+1);
  }

  Decrement(){
    this.service.countervalue.update(previous=>previous-1);
  }

  Reset(){
    this.service.countervalue.set(0);
  }

}
