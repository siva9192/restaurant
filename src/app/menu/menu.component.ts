import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes : Dish[] = DISHES;
  selectedDish: any;
  constructor(
    private dishServices:DishService
  ) {}
  ngOnInit(): void {
    this.dishes = this.dishServices.getDishes();
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
