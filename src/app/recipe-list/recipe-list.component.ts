import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

    protected recipe = signal(MOCK_RECIPES[1]);

  protected serving = signal(1);

  protected readonly adjustedIngredients = computed(() => {
    const ingredient = this.recipe().ingredients
    return ingredient.map(ing => {
      return {
        ...ing, 
        quantity: ing.quantity * this.serving()
      };
    });
  });

  protected button1() {
    console.log('First Button clicked!')
    this.recipe.set(MOCK_RECIPES[0])
  }

  protected button2() {
    console.log('Second Button clicked!')
    this.recipe.set(MOCK_RECIPES[1])
  }

   protected increment() {
  this.serving.update(currentServing => currentServing + 1);
 }

 protected decrement() {
  this.serving.update(currentServing => currentServing - 1);
 }

}
