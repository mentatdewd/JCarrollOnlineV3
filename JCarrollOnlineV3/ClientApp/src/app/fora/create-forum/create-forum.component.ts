import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForaService } from '../../services/fora.service';

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.component.html',
  styleUrls: ['./create-forum.component.scss']
})
export class CreateForumComponent {
  title = 'Create Forum';
  createForumForm: FormGroup;
  forumId: string;

  constructor(private fb: FormBuilder,
    private location: Location,
    private foraService: ForaService) {

    this.createForumForm = new FormGroup({
      title: new FormControl('', Validators.compose([Validators.required])),
      description: new FormControl(),
    });
  }

  submit(formData) {
    this.foraService.createForum(formData['title'], formData['description']).subscribe(result => {
      this.forumId = result;

      this.location.back();
    }, error => console.error(error));
  }
}
