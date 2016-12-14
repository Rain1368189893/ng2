import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'rain' },
    { id: 15, name: 'piaoxiang' },
    { id: 16, name: 'Dr IQ' },
    { id: 17, name: 'Magma' },
    { id: 18, name: 'RubberMan' },
    { id: 19, name: 'Celeritas' },
    { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
    <h2>My Heroes</h2>
    <ul class = "heroes">
        <li *ngFor = "let hero of heroes" (click) = "onSelect(hero)">
            <span class = "badge">{{hero.id}}<span>{{hero.name}}
        </li>
    </ul>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'piaoxiang'
  };
}
