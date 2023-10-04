import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTestes';
  otp: string = '';
  config = {
    allowNumbersOnly: false,
    length: 10,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  onOtpChange(otp: string) {
    // Validate input to allow only digits and limit to 6 characters
    console.log("Aqui: ", otp);
  }
}



