import { Component, OnInit } from '@angular/core';
import {Benevole} from "../../models/Benevole";
import {BenevoleServiceService} from "../../services/benevole-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-benevole',
  templateUrl: './add-benevole.component.html',
  styleUrls: ['./add-benevole.component.css']
})
export class AddBenevoleComponent implements OnInit {
  benevole: Benevole = {
    name: '',
    tel: '',
    active: false
  };
  submitted = false;

  constructor(private service:BenevoleServiceService,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }
  saveBenevole(): void {
    const data = {
      name: this.benevole.name,
      tel: this.benevole.tel,
      active:true
    };
    this.service.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/benevoles']);
        },
        error: (e) => console.error(e)
      });
  }
  newBenevole(): void {
    this.submitted = false;
    this.benevole = {
      name: '',
      tel: '',
      active: false
    };
  }

}
