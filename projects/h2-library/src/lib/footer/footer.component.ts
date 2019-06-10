import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'h2-library-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
