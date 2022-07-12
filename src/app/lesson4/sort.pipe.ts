import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './lesson4.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrContacts: IContact[], sort: string): IContact[] {
    if(!arrContacts) return [];
    if(!sort) return arrContacts;

    if(sort === 'asc') {
      return arrContacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0)),
             arrContacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0)),
             arrContacts.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0));
    }
    return arrContacts.sort((a, b) => (a.firstName < b.firstName) ?  1 : ((a.firstName > b.firstName) ? -1 : 0)),
           arrContacts.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0)),
           arrContacts.sort((a, b) => (a.number < b.number) ?  1 : ((a.number > b.number) ? -1 : 0));
  }

}
