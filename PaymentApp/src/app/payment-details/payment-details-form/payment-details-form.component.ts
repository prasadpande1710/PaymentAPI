import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetai } from '../../shared/payment-detai.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css'
})
export class PaymentDetailsFormComponent {
  constructor(public service: PaymentDetailService) {

  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if(this.service.formData.paymentDetailId==0)
        this.insertRecord(form)
      else
      this.UpdateRecord(form)

    }

  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail()
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetai[]
        this.service.resetForm(form)
        // this.toaster.success('Inserted Succesfully','Payment Detail Register')
      },
      error: err => { console.log(err) }
    })
  }
  UpdateRecord(form: NgForm) {
    this.service.putPaymentDetail()
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetai[]
        this.service.resetForm(form)
        // this.toaster.success('Inserted Succesfully','Payment Detail Register')
      },
      error: err => { console.log(err) }
    })
  }

}
