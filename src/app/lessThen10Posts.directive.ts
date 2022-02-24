import { AppService } from './app.service';
import { Directive, ElementRef, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';

@Directive({
  selector: '[lessThen10Posts]',
})
export class lessThen10Posts implements OnInit {
  @Input('lessThen10Posts') userId!: number;

  constructor(private elementRef: ElementRef, public service: AppService) {}

  ngOnInit() {
    this.service
      .getUserPosts(this.userId)
      .pipe(take(1))
      .subscribe((posts) => {
        if (posts.length < 10) {
          this.elementRef.nativeElement.style.backgroundColor =
            'rgb(191 198 236)';
        }
      });
  }
}
