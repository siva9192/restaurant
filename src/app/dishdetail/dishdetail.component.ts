import { DishService } from './../services/dish.service';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../shared/dish';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish!: Dish;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dishService: DishService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }
  goBack(): void{
    this.location.back();
  }
}
