import { Component } from '@angular/core';
import { SnippetFormComponent } from "../snippet-form/snippet-form.component";

@Component({
  selector: 'app-snippet-card',
  standalone: true,
  imports: [SnippetFormComponent],
  templateUrl: './snippet-card.component.html',
  styleUrl: './snippet-card.component.css'
})
export class SnippetCardComponent {
  isModalOpen = false
  selectedSnippet: any = null


  abrirModal() {
    this.isModalOpen = true
  }

  fecharModal() {
    this.isModalOpen = false
  }

  openEditModal() {
    this.selectedSnippet = {
      title: 'Exemplo antigo',
      description: 'Snippet de teste',
      language: 'TypeScript',
      code: 'console.log("Olá Mundo!")',
      tags: ['angular', 'frontend']
    };
    this.isModalOpen = true
  }

  onSaveSnippet(data: any) {
    console.log('Snippet salvo:', data)
  }
}
