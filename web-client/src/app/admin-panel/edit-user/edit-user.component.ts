import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Subscription} from "rxjs";
import {User} from "../../data/user/user";
import {ActivatedRoute, Router} from "@angular/router";
import {DataExchangeService} from "../../service/data-exchange.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userSub: Subscription
  EditUserSub: Subscription
  user: User
  errorCode: number
  user_id: number
  role_id: number

  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user_id = Number(this.route.snapshot.paramMap.get('id'))
    this.role_id = Number(this.route.snapshot.paramMap.get('role_id'))

    this.userSub = this.userService.getUser(this.user_id, this.role_id).subscribe(
      user => {
        this.user = user
      }
    )

  }


  checkEmptyFields(): boolean {

    if (this.user.firstName.length == 0 || this.user.firstName == "")
      return false;
    else if (this.user.lastName.length == 0 || this.user.lastName == "")
      return false;
    else if (this.user.licenseCode.length == 0 || this.user.licenseCode == "")
      return false;
    else if (this.user.streetAddress1.length == 0 || this.user.streetAddress1 == "")
      return false;
    else if (this.user.city.length == 0 || this.user.city == "")
      return false;
    else if (this.user.zipCode.length == 0 || this.user.zipCode == "")
      return false;
    else if (this.user.region.length == 0 || this.user.region == "")
      return false;
    else if (this.user.contactNumber.length == 0 || this.user.contactNumber == "")
      return false;
    else
      return true;
  }

  goBack(): void {
    this.router.navigate(['admin/user-list', this.user_id, this.role_id])
  }

  confirmData(): void {

    let roleNumber: number;

    if (this.user.role == "DOC")
      roleNumber = 1;
    else if (this.user.role == "REC")
      roleNumber = 2;
    else if (this.user.role == "LABS")
      roleNumber = 3;
    else if (this.user.role == "LABW")
      roleNumber = 4;
    else if (this.user.role == 'ADMIN')
      roleNumber = 5;

    this.userService.editUser(this.user, roleNumber).subscribe(
      next => {
        this.goBack()
      },
      error => {
      }
    )
  }

}
