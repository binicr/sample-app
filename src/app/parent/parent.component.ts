import { Component, OnInit, ViewChild ,ElementRef, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { Checkbox } from './checkbox';
import { DataService } from '../dataservice';
import { Login } from './login';
import {Subject, from, timer, of} from 'rxjs';
import { MessageService } from '../message.service';
import{ChildComponent} from './child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements  Checkbox ,OnInit ,AfterViewInit{
  @ViewChild('temp') templateref : ElementRef;
  @ViewChild(ChildComponent) child:ChildComponent;
  @Input()message :string;
  title = 'sample-app';
  loginData :Login[];
  login = new Login("username" ,"password");
username = "";
 
   private subject = new Subject<any>();
   
  constructor(private ds :DataService ,private ms :MessageService ,private ps:ChangeDetectorRef){
    const source = timer(1000,2000);
const subscribe = source.subscribe((val)=>
  {
    console.log(val)
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);
  }
  )
    const observar =    {
      next:(x:string)=>{console.log("Observer got a value->"+x);},
      error:  (err:string)=>{console.log("observer got an error-->"+err);},
      complete:   ()=>{console.log("completed..!!!!")}

    };
    const observables  = of('apple','orange','banana');
    observables.subscribe(observar);
 
  }
  // 
  bChecked:boolean;
 
ngOnInit()
{
 this.bChecked = true;

 
}

  post()
  {
   this.username = this.login.name;
    // this.login.name = this.username;
    // this.login.password = this.password;
    // this.loginData.push.apply(this.login);
//     let loginData = new
//     this.loginData.push.apply(this.username,this.password);
console.log(this.login);
    this.ds.saveData(this.login);
  }
  getMessage(msg:string)
  {
    console.log("send messgae->"+msg)
    this.ms.sendMessage(msg);
    }
    ngAfterViewInit()
    {
      this.templateref.nativeElement.value= "testingggnggg";
      this.child.title = "set from parent using view child..!!"
      // this.ps.detectChanges();
      console.log("ngafterviewInit- >"+this.templateref);
    }
    buttonText :string = "add Coffee"
    addItem()
    {

    }

  
}