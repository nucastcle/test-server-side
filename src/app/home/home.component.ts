import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data:any
  constructor(private service: Service) { }

 async ngOnInit() {
   this.data = await this.service.callApi();
   this.data = JSON.stringify(this.data, null, 2)
   await this.service.callApiIP();

  }

}
