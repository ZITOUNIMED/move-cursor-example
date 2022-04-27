import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  focusedInputIndex = 0;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      hobby: new FormControl(),
    });
  }

  onSubmit() {
    const value = this.userForm.value;
    console.log(value);
  }

  onMouseEnter($event){
    if($event.key === 'Enter'){
      this.focusedInputIndex++;
      if(this.focusedInputIndex === 3){
        this.focusedInputIndex = 0;
      }
      console.log(this.focusedInputIndex);
    }
  }
}
