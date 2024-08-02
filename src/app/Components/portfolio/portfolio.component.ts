import { Component } from '@angular/core';
import { StarshapewhiteComponent } from '../starshapewhite/starshapewhite.component';
import { CommonModule } from '@angular/common';
import { StarshapedarkComponent } from "../starshapedark/starshapedark.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarshapewhiteComponent, CommonModule, StarshapedarkComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  enterImg: boolean = false;
  selectedPic: string = '';
  
  items = [
    { img: "assets/poert1.png" },
    { img: "assets/port2.png" },
    { img: "assets/port3.png" },
    { img: "assets/poert1.png" },
    { img: "assets/port2.png" },
    { img: "assets/port3.png" }
  ];

  imgClicked(item: any) {
    this.enterImg = true;
    this.selectedPic = item.img;
  }

  imgOut() {
    this.enterImg = false;
  }
}
