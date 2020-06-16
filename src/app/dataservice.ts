import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";

@Injectable(
    {
        providedIn:'root'
    }
)
export class DataService
{
actions = [];
constructor(private http: HttpClient)
{

}
getData()
{
    this.http.get('http://localhost:4000/login').subscribe(res =>
        {
            // this.actions= res.json();
        }

    )
}
saveData(newLogindata)
{   this.http.get('http://localhost:4000/login',newLogindata).subscribe(
    res=>
    {

    });


}
}