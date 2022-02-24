import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-snackbar',
  template: `<div class="sc"><p>Post deleted successfully! 😀</p></div>`,
  styleUrls: ['./delete-snackbar.component.scss'],
})
export class DeleteSnackbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
