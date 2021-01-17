import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {


  constructor(private http: HttpClient) { }

  getAllProperties(sellRent:number):Observable<Property[]>{
     return this.http.get('data/properties.json')
     .pipe(
       map(
         data =>
         {
            const properties: Array<Property> = []

            for (const id in data) {

              const property = data[id];

              if (data.hasOwnProperty(id) && data[id].SellRent === sellRent) {
                 properties.push(property);
              }
            }

            return properties;

         }));
  }
}
