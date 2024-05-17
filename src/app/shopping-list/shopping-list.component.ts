import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChange: Subscription

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients()
    this.igChange = this.shoppingList.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients
      }
    )
  }

  onEditItem(index:number){
    this.shoppingList.startedEditing.next(index)
  }

  ngOnDestroy(): void {
    this.igChange.unsubscribe
  }
}
