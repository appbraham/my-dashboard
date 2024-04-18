import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `

    <app-title [title]="titleLabel()"/>

    @if ( user()) {
      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
        >
        <p>{{ user()!.first_name }} {{ user()!.last_name }}</p>
        <p>{{ user()?.email }}</p>
      </section>
    } @else {
      <p>Cargando información</p>
    }
  `,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersServices = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersServices.getUserById(id))
    )
  );

  titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'Información del usuario'
  });

  // constructor(){
  //   this.route.params.subscribe( params => {
  //     console.log(params);
  //   });
  // }

}
