import { Component, OnDestroy, Output,EventEmitter } from '@angular/core';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  visible = true;
 
  title = 'sample-app';
  message :any[]=["bini"];
  subscription:Subscription;
  constructor(private ms:MessageService)
  {
this.subscription = this.ms.getMessage().subscribe((msg)=>{
if(msg)
{

  console.log("in app comp->"+msg)
  this.message.push(msg);
  console.log("message array->"+this.message)
}
else{
  // this.message.push("");
}}
)
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
