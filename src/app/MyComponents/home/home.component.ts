import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // get url
  trending_url = 'http://localhost:4200/assets/data/trending-moview.json';
  theature_url = 'http://localhost:4200/assets/data/theature-movies.json';
  popular_url = 'http://localhost:4200/assets/data/popular-movies.json';

  // store data
  trendingMovies:any;
  theatureMovies:any;
  populorMovies:any;

  // declare variable
  isLoading = false;
  type = "";
  id = "";
  

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatureMovies();
    this.getPopularMovies();
  }


  // functions to get data
  getTrendingMovies(){
    this.isLoading = true;
    this.http.get(this.trending_url).subscribe(movie =>{
      this.trendingMovies = movie
      this.isLoading = false;
    })
  }

  getTheatureMovies(){
    this.isLoading = true;
    this.http.get(this.theature_url).subscribe(movie =>{
      this.theatureMovies = movie
      this.isLoading = false;
    })
  }

  getPopularMovies(){
    this.isLoading = true;
    this.http.get(this.popular_url).subscribe(movie =>{
      this.populorMovies = movie
      this.isLoading = false;
    })
  }

  getMovie(type:string, id:string){
    console.log("Type = "+type, "ID = "+id);
    this.route.navigate(['movie', type, id]);
  }

}
