import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Input() index: number

  ngOnInit(){
  }
  
}
