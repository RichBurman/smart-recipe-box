import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = signal('My Recipe Box');
  protected recipe = signal(MOCK_RECIPES[1]);

  protected serving = signal(1);

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
