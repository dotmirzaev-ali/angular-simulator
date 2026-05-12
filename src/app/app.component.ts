import { Component } from '@angular/core';
import  { Color } from "../enums/Color";
import './training'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

    companyName: string = 'РУМТИБЕТ';

    constructor() {
        this.saveLoginData();
        this.updateLoginCount();
    }

    isPrimaryColor(value: Color): boolean {
        return [Color.RED, Color.BLUE, Color.GREEN].includes(value);
    }

    saveLoginData(): void {
        const date: string = new Date().toString();
        localStorage.setItem('last-visit', date);
    }

    updateLoginCount(): void {
        const visits: string | null= localStorage.getItem('visitCount');
        const newVisits: number = Number(visits) + 1;
        localStorage.setItem('visitCount', newVisits.toString());
    }
}
