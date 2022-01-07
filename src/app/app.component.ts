import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

 a:number = 0
 b:number = 0
 c:number = 0

add(){
  this.c=this.a+this.b;
}
sub(){
  this.c=this.a-this.b;
}
multiply(){
  this.c=this.a*this.b;
}
divide(){
  this.c=this.a/this.b;
}

}