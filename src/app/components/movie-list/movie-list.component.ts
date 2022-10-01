import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[];

  constructor() {}

  ngOnInit(): void {
    this.movies = [
      { "Title": 'Iron Man', Year: '2008' },
      { "Title": 'Iron Man 2', Year: '2010' },
      { "Title": 'Iron Man 3', Year: '2013' },
    ];
  }
}
