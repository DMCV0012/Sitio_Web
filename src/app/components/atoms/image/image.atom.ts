import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.atom.html',
  styleUrls: ['./image.atom.scss']
})
export class ImageAtomComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width: string = 'auto';
  @Input() height: string = '40px';
}