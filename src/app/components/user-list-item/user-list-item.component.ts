import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input()
  data: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.data);
  }
}
