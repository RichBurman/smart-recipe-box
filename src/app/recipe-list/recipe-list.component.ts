import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail.component';
import { RecipeModel } from '../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeList {
 
  protected allRecipes = signal(MOCK_RECIPES);
  protected activeRecipe = signal(this.allRecipes()[0]);

  protected setActiveRecipe(recipe: RecipeModel): void {
    this.activeRecipe.set(recipe);
  }

    protected readonly searchTerm = signal('');

  protected readonly filteredRecipes = computed(() => {
    const term = this.searchTerm().toLowerCase();

    if(!term) {
      return this.allRecipes();
    }

    return this.allRecipes().filter(recipe => 
      recipe.name.toLowerCase().includes(term)
    )
  })
}
