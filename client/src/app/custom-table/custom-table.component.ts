import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {

  users!: User[];
  userProps!: string[];

  constructor(private userService: UserService, private router: Router, private location: Location) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data.sort((a,b) => a.id > b.id ? 1 : -1)
        this.userProps = Object.keys(this.users[0]);
      }
    );
    // this.router.navigate(['/home']);
  }

  refresh() {
    this.ngOnInit();
  }

  goBack(): void {
    this.location.back();
  }

  addUser(): void {
    this.router.navigate(['/add-user']);
  }

  @HostListener('window:beforeunload')
  goToPage(){
    this.router.navigate(['/home']);
  }
}

