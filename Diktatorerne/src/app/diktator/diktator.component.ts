import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Diktator
} from '../diktator';

@Component({
  selector: 'app-diktator',
  templateUrl: './diktator.component.html',
  styleUrls: ['./diktator.component.scss']
})

export class DiktatorComponent implements OnInit {

  diktatorForm: FormGroup;
  diktators: Diktator[] = [];

  constructor(private fb: FormBuilder) {
    this.diktatorForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      dateOfDeath: new FormControl(),
      description: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onDiktatorSubmit() {
    console.log(this.diktatorForm);
    this.diktators.push(new Diktator(this.diktatorForm.value))
    console.log(this.diktators);
  }

}
