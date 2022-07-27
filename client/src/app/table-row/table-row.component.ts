import { Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User, Role } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'tr[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent {

  @Input()
  user!: any;
  @Input()
  userProps!: string[];
  @Input()
  reloadBtn: any;

  role = Role;
  currentUser!: User;
  editMode: boolean = false;

  constructor(private userService: UserService, private router: Router, private location: Location) { }

  reloadUsers(): void {
    this.reloadBtn.click();
  }

  edit() {
    this.editMode = true;
    this.currentUser = this.user;
  }

  async delete() {
    await this.userService.deleteUser(this.user.id).subscribe();
    this.reloadUsers();
  }

  async save() {
    this.editMode = false;
    await this.userService.updateUser(this.user).subscribe();
    this.reloadUsers();
  }

  cancel() {
    this.editMode = false;
    this.user = this.currentUser;
    this.reloadUsers();
  }

}
