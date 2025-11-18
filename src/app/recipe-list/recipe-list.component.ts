import { Component, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail.component';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeList {
 
  protected allRecipes = signal(MOCK_RECIPES);
  protected activeRecipe = signal(this.allRecipes()[0]);

  protected setActiveRecipe(recipe: RecipeModel): void {
    this.activeRecipe.set(recipe);
  }
}
