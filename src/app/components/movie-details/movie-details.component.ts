import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private service: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['imdbID'];
      //getMovieDetails returns an observable, to which we must subscribe to get details
      this.service.getMovieDetails(id).subscribe((resp) => (this.movie = resp));
    });
  }

  goBack() {
    window.history.back();
  }
}
