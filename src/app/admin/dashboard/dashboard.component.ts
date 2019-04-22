import { Component, OnInit } from '@angular/core';
import { ApiResponse, Flow, Graph, GraphData, DonutData } from '../../model/apiResponse';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  full = {
    a: false,
    b: false,
    c: false,
    d: false
  }
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.get(1543650978000,1543737378000).subscribe(res => {
      let result: ApiResponse;
      result = res as ApiResponse;
      // get data
    })
  }

  toggle(element){
    console.log(this.full[element],element)
    this.full[element] = !this.full[element];
  }

}
