import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  private clothes = [
    {
      amount: 209.99,
      name: 'Burberry Flowy Dress with pink and gold',
      size: 4,
      price: 12.00,
      imageUrl: 'assets/Image-Master.png'
    },
    {
      amount: '129.99',
      name: 'Prada Beach Dress',
      size: 8,
      price: 12.00,
      imageUrl: 'assets/Image-Master-1.png'
    },
    {
      amount: '109.99',
      name: 'BHandage Red dress for evening wear',
      size: 14,
      price: 12.00,
      imageUrl: 'assets/Image-Master-2.png'
    },

    {
      amount: '15.99',
      name: 'Prada Wedding guest',
      size: 4,
      price: 59.99,
      imageUrl: 'assets/Image-Master-3.png'
    },
    {
      amount: '1209.99',
      name: 'Ansell Nightwear',
      size: 4,
      price: 59.99,
      imageUrl: 'assets/Image-Master-4.png'
    },
    {
      amount: '129.99',
      name: 'Desacade Summer dress',
      size: 4,
      price: 39.99,
      imageUrl: 'assets/Image-Master-5.png'
    },

  ];

  getClothes() {
    return this.clothes;
  }
}
