import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  username = '';
  allowUsername = false;

  constructor() {}

  ngOnInit(): void {}

  handleUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  handleClick() {
    this.username = '';
  }
}
