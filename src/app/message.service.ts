import { Injectable } from "@angular/core";
import {Observable ,Subject} from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class MessageService{
private subject  = new Subject<any>()
getMessage() :Observable<any>
{
    return this.subject.asObservable();
}

sendMessage(message:string)
{
    console.log("in service->"+message);
    this.subject.next(message);
}
clearMessage()
{
    this.subject.next();
}
}