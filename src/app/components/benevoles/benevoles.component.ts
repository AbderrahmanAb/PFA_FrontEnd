import {Component, OnInit} from '@angular/core';
import {BenevoleServiceService} from "../../services/benevole-service.service";
import {BenevoleDto, Result, Root1} from "../../models/BenevoleDto";

@Component({
  selector: 'app-benevoles',
  templateUrl: './benevoles.component.html',
  styleUrls: ['./benevoles.component.css']
})
export class BenevolesComponent implements OnInit {
  benevoles?: Result[]=[];
  currentBenevole: Root1= {
    isSucess: false,
    result: {
      id: 0,
      name: '',
      tel: '',
      active: false
    },
    displayMessage: '',
    errorMessages: {
      id: '',
      name: '',
      tel: '',
      active: ''

    }
  }
  currentIndex = -1;
  title = '';
  constructor(private service:BenevoleServiceService) { }

  ngOnInit(): void {
    this.retrieveBenevoles();
  }
  retrieveBenevoles(): void {
    this.service.getAll()
      .subscribe({
        next: (data) => {

          this.benevoles = data.result;
          console.log(data);


        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveBenevoles();
    this.currentBenevole =  {
      isSucess: false,
      result: {
        id: 0,
        name: '',
        tel: '',
        active: false
      },
      displayMessage: '',
      errorMessages: {
        id: '',
        name: '',
        tel: '',
        active: ''
      }
    };
    this.currentIndex = -1;
  }
  setActiveTutorial(benevole: Root1, index: number): void {
    this.currentBenevole = benevole;
    this.currentIndex = index;
  }

}
