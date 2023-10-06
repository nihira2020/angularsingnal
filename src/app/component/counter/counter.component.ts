import { Component,computed,signal } from '@angular/core';
import { MasterService } from 'src/app/shared/master.service';
import {toObservable,toSignal} from '@angular/core/rxjs-interop'
import { of } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(public service:MasterService){

  }
     Title=signal('Signal Overview')
     Title$=toObservable(this.Title);
     
     Subtitle$=of('Signal Functions')
     Subtitle=toSignal(this.Subtitle$)

     count=signal(10)

     adduser(){
      this.service.userarry.mutate(previous=>previous.push({id:3,name:'Ponting'}))
     }

     usercount=computed(()=>this.service.userarry().length *3);
     
}
