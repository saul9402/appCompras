import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  userdata: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    });
  }

  onSubmit(){
    this.userdata = this.saveUserData();
  }

  saveUserData(){
    const saveUserData = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }
    return saveUserData;
  }

}
