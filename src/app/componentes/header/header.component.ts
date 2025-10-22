import { Component } from '@angular/core';
import { SnippetFormComponent } from "../snippet-form/snippet-form.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SnippetFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isModalOpen = false

  abrirModal() {
    this.isModalOpen = true
  }

  fecharModal() {
    this.isModalOpen = false
  }
}
