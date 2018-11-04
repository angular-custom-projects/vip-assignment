import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regestration-form',
  templateUrl: './regestration-form.component.html',
  styleUrls: ['./regestration-form.component.scss']
})
export class RegestrationFormComponent implements OnInit {
    countries = ['Cyprus', 'Malaysia', 'USA'];

  constructor() { }

  ngOnInit() {
  }

}
