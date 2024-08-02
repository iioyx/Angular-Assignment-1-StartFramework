import { Component } from '@angular/core';
import { StarshapewhiteComponent } from "../starshapewhite/starshapewhite.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarshapewhiteComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
