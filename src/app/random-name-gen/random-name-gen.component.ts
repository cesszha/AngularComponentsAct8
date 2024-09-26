import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
standalone: true,
selector:'app-random-name-generator-simple',
imports: [CommonModule],
templateUrl:'./random-name-gen.component.html'
})
export class RandomNameGeneratorSimpleComponent {

names:string[]=['Alice Guo','Senri','Quiboloy','Cassandra Ong','Inday Lustay'];
randomName:string='';

generateRandomName() {

const randomIndex=Math.floor(Math.random()*this.names.length);
this.randomName=this.names[randomIndex];

}

}