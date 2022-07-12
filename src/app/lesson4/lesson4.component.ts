import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {

  public field!: string;
  public type = 'asc';


  public addContactHidden = true;
  public hiddenSaveAdd = false;
  public hiddenEditAdd = true;
  public editIndex!:number;


  public firstAdd!: string;
  public lastAdd!: string;
  public numberAdd!: string;
  


  public contactArray: IContact[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0631111111',
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0968337894',
    },
    {
      firstName: 'Taras',
      lastName: 'Tarasov',
      number: '0986384702',
    },
    {
      firstName: 'Bohdan',
      lastName: 'Luhovyi',
      number: '0683488827',
    },
    {
      firstName: 'Alina',
      lastName: 'de Fiego',
      number: '0347484739',
    },
    {
      firstName: 'Vasya',
      lastName: 'Semenovich',
      number: '0637483949',
    },
    {
      firstName: 'Webster',
      lastName: 'Jason',
      number: '0938473988',
    },
    {
      firstName: 'Vasya',
      lastName: 'Kharisma',
      number: '0987656378',
    }
  ]

  


  addButton(): void{
    this.addContactHidden = false;
    this.hiddenSaveAdd = false;
    this.hiddenEditAdd = true;
  }
  saveAdd(): void{
    this.addContactHidden = true;
    let newContact = {
      firstName: this.firstAdd,
      lastName: this.lastAdd,
      number: this.numberAdd
    }
    this.contactArray.push(newContact);

    this.firstAdd = ''
    this.lastAdd = ''
    this.numberAdd = ''
  }
  saveEdit(): void{
    this.addContactHidden = true;
    this.hiddenSaveAdd = true;
    this.hiddenEditAdd = false;

    let newContact = {
      firstName: this.firstAdd,
      lastName: this.lastAdd,
      number: this.numberAdd
    }

    this.contactArray[this.editIndex] = newContact;

    this.firstAdd = ''
    this.lastAdd = ''
    this.numberAdd = ''
  }


  deleteBtn(index: number): void {
    this.contactArray.splice(index, 1)
  }

  editBtn(index: number): void {
    this.addContactHidden = false;
    this.hiddenSaveAdd = true;
    this.hiddenEditAdd = false;

    this.firstAdd = this.contactArray[index].firstName; 
    this.lastAdd = this.contactArray[index].lastName; 
    this.numberAdd = this.contactArray[index].number; 

    this.editIndex = index; 
  }

  constructor() { }

  ngOnInit(): void {
  }


  changeSort(type: string): void {
    this.type = type;
  }

}

export interface IContact {
  firstName: string;
  lastName: string;
  number: string;
}