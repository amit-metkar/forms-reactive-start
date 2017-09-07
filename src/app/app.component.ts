import {
  Component,
  OnInit
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signedupForm: FormGroup;
  forbiddenUserNames: ['Vaibhav', 'Chetan'];

  ngOnInit(): void {
    this.signedupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signedupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    ( < FormArray > this.signedupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {
    [s: string]: boolean
  } {
    if (this.forbiddenUserNames.indexOf(control.value)) {
      return {
        'nameISForbidden': true
      };
    }
    return null;
  }
}
