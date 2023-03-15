import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Chore } from '@demo/models';

@Component({
  selector: 'add-edit-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss'],
})
export class AddEditFormComponent implements OnInit {
  @Input() chore: Chore;
  @Output() saveClicked = new EventEmitter<Chore>();
  @ViewChild('form') form: NgForm;

  model: Chore;

  ngOnInit() {
    if (this.chore) {
      this.model = deepCopy(this.chore);
    } else {
      this.model = {
        id: -1,
        title: '',
        cleaningStyle: undefined,
        content: '',
        imgUrl: '',
        altText: '',
      } as unknown as Chore;
    }
  }

  onSave() {
    if (this.form.valid) {
      this.saveClicked.emit(this.model);
    }
  }
}

function deepCopy<T>(object: T): T {
  if (object == null) {
    return object;
  }

  return JSON.parse(JSON.stringify(object));
}
