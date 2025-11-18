import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from "./recipe-list/recipe-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = signal('My Recipe Box');

}
