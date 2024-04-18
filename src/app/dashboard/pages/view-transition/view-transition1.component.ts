import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/seed/picsum/536/354"
        alt="Random Photo"
        width="250"
        style="view-transition-name: hero1"
      >

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      >

      </div>


    </section>
  `,
})
export default class ViewTransitionComponent {

}
