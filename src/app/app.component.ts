import { Component } from '@angular/core';
import  { Colors } from "../enums/color";
import './training'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

    companyName = 'РУМТИБЕТ';

    constructor() {
        this.saveLoginData();
        this.updateLoginCount();
    }

    hasColor(value: Colors): boolean {
        return [Colors.RED, Colors.BLUE, Colors.GREEN].includes(value);
    }

    saveLoginData(): void {
        const date: string = new Date().toString();
        localStorage.setItem('last-visit', date);
    }

    updateLoginCount(): void {
        const visits = localStorage.getItem('visitCount');
        const newVisits: number = Number(visits) + 1;
        localStorage.setItem('visitCount', newVisits.toString());
    }
}
