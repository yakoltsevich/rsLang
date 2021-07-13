import {Component, OnInit} from '@angular/core';
import {featuresList} from "../../../storage";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featuresList = featuresList

  constructor() {
  }

  ngOnInit(): void {
  }

}
