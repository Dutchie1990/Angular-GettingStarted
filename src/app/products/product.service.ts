import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import { Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.productUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError))
    };

    getProduct(id: number): Observable<Iproduct | undefined> {
        return this.getProducts()
          .pipe(
             map((products: Iproduct[]) => products.find(p => p.productId === id))
          );
      }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';

        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}