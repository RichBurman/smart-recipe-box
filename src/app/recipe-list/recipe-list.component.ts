import { Component, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeList {
  protected activeRecipe = signal(MOCK_RECIPES[1]);

  protected setRecipe(recipeIndex: number): void {
    this.activeRecipe.set(MOCK_RECIPES[recipeIndex]);
  }
}
