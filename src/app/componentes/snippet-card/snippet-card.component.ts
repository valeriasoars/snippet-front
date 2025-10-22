import { Component } from '@angular/core';
import { SnippetFormComponent } from "../snippet-form/snippet-form.component";
import { SnippetPreviewModalComponent } from "../snippet-preview-modal/snippet-preview-modal.component";

@Component({
  selector: 'app-snippet-card',
  standalone: true,
  imports: [SnippetFormComponent, SnippetPreviewModalComponent],
  templateUrl: './snippet-card.component.html',
  styleUrl: './snippet-card.component.css'
})
export class SnippetCardComponent {
  isModalOpen = false
  selectedSnippet: any = null

  isOpenModalPreviewSnippet = false

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

  openPreviewSnippetModal(){
    this.isOpenModalPreviewSnippet = true
  }

  closePreviewSnippet(){
    this.isOpenModalPreviewSnippet = false
  }
}
