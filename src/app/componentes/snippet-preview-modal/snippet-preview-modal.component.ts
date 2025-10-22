import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnippetFormComponent } from "../snippet-form/snippet-form.component";

@Component({
  selector: 'app-snippet-preview-modal',
  standalone: true,
  imports: [CommonModule, SnippetFormComponent],
  templateUrl: './snippet-preview-modal.component.html',
  styleUrl: './snippet-preview-modal.component.css'
})
export class SnippetPreviewModalComponent {
  @Input() isOpen = false
  @Output() close = new EventEmitter<void>()

  selectedSnippet: any = null

  isModalEditOpen = false
  
  closeModalPreview() {
    this.close.emit()
  }

  openEditModal(){
      this.selectedSnippet = {
      title: 'Exemplo antigo',
      description: 'Snippet de teste',
      language: 'TypeScript',
      code: 'console.log("Olá Mundo!")',
      tags: ['angular', 'frontend']
    }
    this.isModalEditOpen = true
  }

  fecharModalEdit(){
    this.isModalEditOpen = false
  }

  onSaveSnippet(data: any) {
    console.log('Snippet salvo:', data)
  }

}
