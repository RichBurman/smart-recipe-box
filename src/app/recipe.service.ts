import { Injectable, signal } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
allRecipes = signal(MOCK_RECIPES);
}
