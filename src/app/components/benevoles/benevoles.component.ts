import { Component, OnInit } from '@angular/core';
import {Benevole} from "../../models/Benevole";
import {BenevoleServiceService} from "../../services/benevole-service.service";

@Component({
  selector: 'app-benevoles',
  templateUrl: './benevoles.component.html',
  styleUrls: ['./benevoles.component.css']
})
export class BenevolesComponent implements OnInit {
  benevoles?: Benevole[];
  currentBenevole: Benevole = {};
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
          this.benevoles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveBenevoles();
    this.currentBenevole = {};
    this.currentIndex = -1;
  }
  setActiveTutorial(benevole: Benevole, index: number): void {
    this.currentBenevole = benevole;
    this.currentIndex = index;
  }

}
