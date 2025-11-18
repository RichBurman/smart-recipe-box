import { Component, computed, inject, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail.component';
import { RecipeModel } from '../models';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeList {

  protected readonly recipeService = inject(RecipeService);

  // We initialize `activeRecipe` with the first recipe *from* the service.
  protected activeRecipe = signal<RecipeModel>(this.recipeService.allRecipes()[0]);

  // This method updates our local `activeRecipe` signal.
  protected setActiveRecipe(recipe: RecipeModel): void {
    this.activeRecipe.set(recipe);
  }

  protected readonly searchTerm = signal('');

  protected readonly filteredRecipes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    // 1. Get the array of recipes by CALLING the signal from the service.
    const recipes = this.recipeService.allRecipes();

    if(!term) {
      // 2. Return the full array if there's no search term.
      return recipes;
    }

    // 3. Return the filtered array.
    return recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(term)
    );
  })
}
