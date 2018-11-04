import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService} from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  userdata: any;

  /*
  Nueva forma de validar
  */
  erroresForm = {
    'email':'',
    'password': ''
  }

  mensajesValidacion = {
    'email':{
      'required': 'Email Obligatorio',
      'email':'Introduzca un email correcto'
    },
    'password':{
      'required': 'Contraseña Obligatoria',
      'pattern':'La cotraseña debe tener al menos un numero y una letra',
      'minlength':'y más de 6 caracteres'
    }
  }

  constructor(private formBuilder: FormBuilder,
              private autenticacionService: AutenticacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    });
    this.registroForm.valueChanges.subscribe(data => {
      this.onValueChanged(data); 
    })
    this.onValueChanged();
  }

  onSubmit(){
    this.userdata = this.saveUserData();
    this.autenticacionService.registroUsuario(this.userdata);
    this.router.navigate(['/inicio']);
  }

  saveUserData(){
    const saveUserData = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }
    return saveUserData;
  }


  onValueChanged(data?: any) {
    if (!this.registroForm) { return; }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
         }
       }
     }
   }


}
