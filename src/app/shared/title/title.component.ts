import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="font-sans font-semibold text-3xl mb-5 text-gray-700"
        [class]="{ 'underline': withShadow }">
      {{ title }}
    </h1>
  `,
})
export class TitleComponent {

  @Input({ required: true })
  title!: string;

  @Input({ transform: booleanAttribute })
  withShadow: boolean = false;

}
