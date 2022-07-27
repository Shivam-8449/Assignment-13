import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = {
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    phone: '',
    role_id: 2,
    address: '',
    customer_id: 1
  } as User;

  role = Role;


  constructor(private userService: UserService, private router: Router) { }
  

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe();
    this.router.navigate(['/users']);
  }
}

