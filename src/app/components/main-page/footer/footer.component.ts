import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../../../services/http-client.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  response: any

  constructor(private httpService: HttpClientService) {
  }

  ngOnInit(): void {
    this.response = this.httpService.getGitUser().subscribe(res => this.response = res)
  }
}
