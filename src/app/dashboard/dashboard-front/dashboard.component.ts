import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CounterPartyAnalyticsService } from '../../services/counter-party-analytics.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [];
  dataSource;
  ELEMENT_DATA;

  constructor(private counterPartyAnalyticsService:CounterPartyAnalyticsService) { 
    
  }

  ngOnInit(): void {
    this.counterPartyAnalyticsService.getCounterPartyData().subscribe(data=>{
      
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log('dataSource:'+JSON.stringify(data));
      this.dataSource.paginator = this.paginator;
            
      
    })
    this.displayedColumns = ['Counterparty', 'UltimateParentCounterParty', 'BanLegalEntity', 'MTMNet','CVA','NewsAnalyticsScore','PredictedProbablity','CreditRating','LastRefreshTime'];
  
  }

  navigateToDetail(element){
    return '/detail/' + element.id;
  }
  

}


