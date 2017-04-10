import { Component } from '@angular/core';

@Component({
    selector: 'secret',
    template: `<h3>Secret Component</h3>
    <button class="btn btn-default" (click)="save()">Сохранить</button>
    <a routerLink="">На главную</a>`
})
export class SecretComponent {
  saved: boolean = false;
  save(){
      this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{

      if(!this.saved){
          return confirm("Вы хотите покинуть страницу?");
      }
      else{
          return true;
      }
  }
}
