import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  time;

  constructor(){
    setInterval(() => {
      this.time = new Date();
   }, 1000);

}ngOnInit(): void {
}
 }