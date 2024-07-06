import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';

@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.css']
})
export class ShoppingDashboardComponent implements OnInit {
  clothes: any[] = [];

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothes = this.clothesService.getClothes();
  }
}
