import {Component} from '@angular/core';
import {NavItem} from '../interfaces/navItemInterface';
import {JumbotronComponent} from './app.jumbotron';
import {HomeComponent} from './app.home';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

@Component({
    selector: 'app-component',
    templateUrl: '../../templates/app.component.html',
    entryComponents: [HomeComponent, AboutComponent, ContactComponent]
})
export class AppComponent {
    public navItems: NavItem[] = [
        {label: 'Home', path: '/'},
        {label: 'About', path: '/about'},
        {label: 'Contact', path: '/contact'}
    ];

    public jumboTitle: string  = "Hello World!";
    public jumboSubTitle: string = "an amazing subtitle";
    public jumboBody: string = "Welcome to the angular2-bootstrap-boilerplate.";
    public jumboBotMargin: boolean = true;
}