import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-projeto-btn',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './edit-projeto-btn.html',
  styleUrl: './edit-projeto-btn.scss',
})
export class EditProjetoBtn {

  projetoId = input<string | number>()

}
