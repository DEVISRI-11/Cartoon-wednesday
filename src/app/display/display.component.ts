import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  Cartoonimages:any;

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getAllImages();
  }

  public getAllImages(){


    let res =this.http.get("http://localhost:6789/car/all");
    res.subscribe(
      data=>this.Cartoonimages=data
    );

  }
}
