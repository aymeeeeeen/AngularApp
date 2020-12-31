import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

 
  public customers;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllusers();

  }
  getAllusers(){

  
    return this.customerService.getAll().subscribe(res =>{this.customers = res} );
    //console.log(user);
   // this.customers..customers
  }

}
