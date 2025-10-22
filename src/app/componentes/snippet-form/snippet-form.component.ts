import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-snippet-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snippet-form.component.html',
  styleUrl: './snippet-form.component.css'
})
export class SnippetFormComponent  implements OnChanges{
  @Input() isOpen = false
  @Output() close = new EventEmitter<void>()

  @Input() snippetData: any = null
  @Output() save = new EventEmitter<any>()

  formData = {
    title: '',
    description: '',
    language: '',
    code: '',
    tags: [] as string[]
  }

  newTag = ''

  ngOnChanges(changes: SimpleChanges){
    if(changes['snippetData'] && this.snippetData){
      this.formData = { ...this.snippetData}
    }else if (changes['isOpen'] && !this.snippetData){
      this.resetForm()
    }
  }

  closeModal() {
    this.close.emit()
  }

  addTag(){
    const tag = this.newTag.trim()
    if (tag && !this.formData.tags.includes(tag)){
      this.formData.tags.push(tag)
      this.newTag = ''
    }
  }

  removeTag(index: number){
    this.formData.tags.splice(index, 1)
  }

  saveSnippet(){
    this.save.emit(this.formData)
    this.closeModal()
  }

  resetForm(){
      this.formData = {
      title: '',
      description: '',
      language: '',
      code: '',
      tags: []
    };
    this.newTag = ''
  }
}
