import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginView: boolean = true;
  @ViewChild('modal', { static: true }) myElement!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  openLogin() {
    const modal = this.myElement.nativeElement;
    console.log(modal)
    if (modal != null) {
      this.renderer.setStyle(modal, 'display', 'block')
    }
  }

  closeModal() {
    const modal = this.myElement.nativeElement;
    console.log(modal)
    if (modal != null) {
      this.renderer.setStyle(modal, 'display', 'none')
    }
  }

}
