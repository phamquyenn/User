import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SliderComponent } from "../slider/slider.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, SliderComponent, FooterComponent]
})
export class HomeComponent {

}
