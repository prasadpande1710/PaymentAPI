import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PaymentDetailsComponent,
    HttpClientModule,FormsModule, 
    CommonModule,RouterOutlet,
     RouterModule, 

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaymentApp';
}
