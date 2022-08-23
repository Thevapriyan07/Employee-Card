import { Component } from '@angular/core';
import { customerCard } from './modules/cutomer-card';
import { CustomerCardService } from "./services/CustomerCardService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnFullStack';
Customers: customerCard[] =[];

constructor(private CustomerCardService: CustomerCardService){}
  ngOnInit() : void{
    this.CustomerCardService
    .getcustomers()
    .subscribe((result: customerCard[])=> (this.Customers = result)); 
  }
}


