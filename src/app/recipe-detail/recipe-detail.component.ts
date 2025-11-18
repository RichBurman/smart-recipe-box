import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetail {

    readonly recipe = input.required<RecipeModel>();

  protected serving = signal(1);
  protected readonly adjustedIngredients  = computed(() => {
    const ingredient = this.recipe().ingredients
    return ingredient.map(ing => {
      return {
      ...ing,
      quantity: ing.quantity * this.serving()
      };
    })
  });

  protected increment() {
    this.serving.update(currentServing => currentServing + 1);
   }
  
   protected decrement() {
    this.serving.update(currentServing => currentServing - 1);
   }

}
