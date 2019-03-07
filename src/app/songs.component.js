"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SongsComponent = (function () {
    function SongsComponent() {
        this.title = null;
        this.songs = [
            'Nobody knows',
            'Layla',
            'Drive'
        ];
    }
    SongsComponent.prototype.addSong = function () {
        if (this.title != null) {
            console.log("add song");
            this.songs = this.songs.concat([this.title]);
            this.title = null;
        }
    };
    return SongsComponent;
}());
SongsComponent = __decorate([
    core_1.Component({
        template: "<div>\n  <h2>This is the list of my favorites songs</h2>\n  <input type=\"text\" name=\"song\" [(ngModel)]=\"title\">\n  <button (click)=\"addSong()\">Agregar cancion</button>\n\n  <ul>\n    <li *ngFor =\"let song of songs\"> {{song}}</li>\n  </ul>\n   </div>",
        selector: 'songs'
    })
], SongsComponent);
exports.SongsComponent = SongsComponent;
//# sourceMappingURL=songs.component.js.map