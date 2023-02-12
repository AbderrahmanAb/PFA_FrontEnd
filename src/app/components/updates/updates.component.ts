import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BenevoleDto, Root1} from "../../models/BenevoleDto";
import {BenevoleServiceService} from "../../services/benevole-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  id!: number;
  form!: FormGroup;
  currentBenevole: BenevoleDto = {
    id: 0,
    name: '',
    tel: '',
    active: false

  };
  selectedValue: boolean = false;

  constructor( public service: BenevoleServiceService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.get(this.id).subscribe((data:Root1  )=>{
      this.currentBenevole.id = data.result.id;
      this.currentBenevole.name = data.result.name;
      this.currentBenevole.tel = data.result.tel;
      this.currentBenevole.active = data.result.active;
      console.log(this.currentBenevole)
    });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      tel: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
console.log(this.selectedValue)
    this.currentBenevole=this.form.value;
    this.currentBenevole.id=this.id;
    this.currentBenevole.active=this.selectedValue;

    console.log(this.currentBenevole);
    this.service.update(this.id, this.currentBenevole).subscribe((res:any) => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('benevoles');
    })
  }

}
