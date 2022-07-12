import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './lesson4.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrContacts: IContact[], field: string): IContact[] {
    if(!arrContacts) return [];
    if(!field) return arrContacts;
    return arrContacts.filter(con => 
              con.firstName.toLowerCase().includes(field.toLowerCase())
           || con.lastName.toLowerCase().includes(field.toLowerCase())
           || con.number.toLowerCase().includes(field.toLowerCase())) 
  
  }
}


// arrContacts.filter(con => con.firstName.toLowerCase().includes(field.toLowerCase())),
// arrContacts.filter(con => con.lastName.toLowerCase().includes(field.toLowerCase())),
// arrContacts.filter(con => con.number.toLowerCase().includes(field.toLowerCase())) 