import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //private converts the var router to a class var instead of a local function var
  constructor(private router: Router) {}
  queryTerm: String;
  ngOnInit(): void {}

  submitHandler(evt) {
    evt.preventDefault();
    this.router.navigate(['/movies'], { queryParams: { q: this.queryTerm } });
  }
}
