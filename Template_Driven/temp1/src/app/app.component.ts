import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temp1';
  formSubmitted:boolean | undefined

  onSubmit(form: NgForm)
  {
    console.log("Form Submitted.")
    this.formSubmitted=true
  }
}
