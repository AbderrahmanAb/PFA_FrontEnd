import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BenevoleServiceService} from "../../services/benevole-service.service";
import {Root1} from "../../models/BenevoleDto";

@Component({
  selector: 'app-benevoles-detail',
  templateUrl: './benevoles-detail.component.html',
  styleUrls: ['./benevoles-detail.component.css']
})
export class BenevolesDetailComponent implements OnInit {
  @Input() viewMode = false;
  currentBenevole: Root1 = {
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
  message = '';

  constructor(private route: ActivatedRoute,
              private router: Router,private service:BenevoleServiceService) { }

  ngOnInit(): void {

    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);

    }

  }

  //
  deleteTutorial(): void {
    this.service.delete(this.currentBenevole.result.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/benevoles']);
        },
        error: (e) => console.error(e)
      });
  }
  getTutorial(id: string): void {
    this.service.get(id)
      .subscribe({
        next: (data) => {
          this.currentBenevole = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

