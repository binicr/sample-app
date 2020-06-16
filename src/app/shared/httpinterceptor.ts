import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class httpInterceptors implements HttpInterceptor{
intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const httpreq = req.clone({
        url:req.url.replace("http://",'https://')
    });
    return next.handle(httpreq);
}


}