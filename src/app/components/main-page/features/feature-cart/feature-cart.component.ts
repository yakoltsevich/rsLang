import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature-cart',
  templateUrl: './feature-cart.component.html',
  styleUrls: ['./feature-cart.component.scss']
})
export class FeatureCartComponent implements OnInit {
  @Input() feature: any;
  constructor() { }

  ngOnInit(): void {
  }

}
