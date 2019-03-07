import { Component } from '@angular/core';

@Component({
  
  template: `<div>
  <h2>This is the list of my favorites songs</h2>
  <input type="text" name="song" [(ngModel)]="title">
  <button (click)="addSong()">Agregar cancion</button>

  <ul>
    <li *ngFor ="let song of songs"> {{song}}</li>
  </ul>
   </div>`,



   selector: 'songs'

})
export class SongsComponent  { 

  public title:string =null;
  songs=[
    'Nobody knows',
    'Layla',
    'Drive'
  ];


  addSong(){
    if(this.title!=null){
      console.log("add song");
      this.songs=[...this.songs, this.title];
      this.title=null;
    }
    
  }
}
