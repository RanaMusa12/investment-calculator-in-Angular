import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment =  '0';
  enteredAnnualInvestment = '0';
  enteredInvestmentDuration = '0';
  enteredExpectedReturn = '0';
  onSubmit() {
   this.calculate.emit({
      
    initialInvestment: +this.enteredInitialInvestment,
    investmentDuration: +this.enteredInvestmentDuration,
    expectedReturn: +this.enteredExpectedReturn,
    annualInvestment: +this.enteredAnnualInvestment
   
})
}
}