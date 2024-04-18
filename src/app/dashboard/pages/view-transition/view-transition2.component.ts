import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/seed/picsum/536/354"
        alt="Random Photo"
        width="350"
        style="view-transition-name: hero1"
      >

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-20 h-20 rounded-full"
        style="view-transition-name: hero2">

      </div>


    </section>
  `,
})
export default class ViewTransitionComponent {

}
