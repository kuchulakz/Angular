import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo1';
  reactiveForm: FormGroup;
  formSubmitted: boolean | null

  onSubmit()
  {
    this.formSubmitted=true
  }

  ngOnInit(): void {
    this.reactiveForm= new FormGroup(
      {
        fname: new FormControl(null,[Validators.required]),
        lname: new FormControl(null,[Validators.required])
      }
    )
  }
}
