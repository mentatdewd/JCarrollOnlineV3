import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective implements OnInit {

  @Input() set email(value: string) {
    console.log("In gravatar directive, email is being set to " + value);
    this.updateGravatar(value);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.el) {
      console.log("In gravatarDirective el.id is " + this.el.nativeElement)
      this.renderer.setAttribute(this.el.nativeElement, 'src', `//www.gravatar.com/avatar/`);
    }
  }

  updateGravatar(email: string): void {
    console.log("In gravatar service email is set to " + email);
    if (!email || !this.el.nativeElement) {
      console.log("Either email or nativeElement was not found");
      return;
    }

    const emailHash = Md5.hashStr(email);
    this.renderer.setAttribute(this.el.nativeElement, 'src', `//www.gravatar.com/avatar/` + emailHash);
    console.log("I have set the src attribute to " + '//www.gravatar.com/avatar/' + emailHash);
  }
}
