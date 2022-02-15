import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {



  // declare variable
  type = "";
  id = "";
  url = "";
  movies : any;
  movie : any;


  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {

    this.type = this.route.snapshot.params[('type')]
    this.id = this.route.snapshot.params[('id')]
    

    if(this.type === 'trending'){
      this.url = 'http://localhost:4200/assets/data/trending-moview.json'
    }
    if(this.type === 'theature'){
      this.url = 'http://localhost:4200/assets/data/theature-movies.json'
    }
    if(this.type === 'popular'){
      this.url = 'http://localhost:4200/assets/data/popular-movies.json'
    }

    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movie) =>{

      this.movies = movie;

      let index = this.movies.findIndex(
        (movie : {id:string}) => movie.id == this.id
      );


      if(index > -1){
        console.log(this.movies[index])
        this.movie = this.movies[index];
      }
    })
  }

}
