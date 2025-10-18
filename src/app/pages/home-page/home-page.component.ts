import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { SnippetCardComponent } from "../../componentes/snippet-card/snippet-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, SnippetCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
