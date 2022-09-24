import { Component, OnInit } from '@angular/core';

import { ILogin } from 'src/app/interfaces/ILogin';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {
  user!: ILogin;
  isLoading: boolean = false;
  editForm!: FormGroup;
  faSpinner = faSpinner;
  urlImageProfile: string = '';

  faUserCircle = faUserCircle;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.user = this.localStorageService.get('user');
      this.urlImageProfile = this.user.image as string;

      this.editForm = new FormGroup({
        username: new FormControl(this.user.username ? this.user.username : '', [Validators.required]),
        email: new FormControl(this.user.email ? this.user.email : '', [Validators.required, Validators.email]),
        description: new FormControl(this.user.description ? this.user.description : '', [Validators.required]),
      });

      this.isLoading = false;
    }, 1000);
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.urlImageProfile = event.target?.result as string;
      };
    };
  }

  get username() {
    return this.editForm.get('username')!;
  }

  get email() {
    return this.editForm.get('email')!;
  }

  get description() {
    return this.editForm.get('description')!;
  }

  submit(): void {
    if (this.editForm.invalid) return;
    this.localStorageService.set('user', {
      ...this.editForm.value,
      image: this.urlImageProfile
    });
    this.router.navigate(['/profile']);
  }

}
