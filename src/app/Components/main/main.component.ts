import { Component } from '@angular/core';
import { StarshapewhiteComponent } from '../starshapewhite/starshapewhite.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StarshapewhiteComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
