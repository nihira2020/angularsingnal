import { Component,effect } from '@angular/core';
import { MasterService } from 'src/app/shared/master.service';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent {
  constructor(public service: MasterService) {
     effect(()=>{
       if(service.countervalue()<0){
          alert('Reached negative value')
       }
       console.log(service.countervalue())
     })
  }
}
