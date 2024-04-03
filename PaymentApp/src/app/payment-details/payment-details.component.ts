import { Component,OnInit } from '@angular/core';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { PaymentDetai } from '../shared/payment-detai.model';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailsFormComponent,CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{

 constructor(public service : PaymentDetailService){

 }
  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetai){
this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record')){
    this.service.deletePaymentDetail(id)
  
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetai[]
      
        // this.toaster.success('Inserted Succesfully','Payment Detail Register')
      },
      error: err => { console.log(err) }
    })
  }
  }

}
