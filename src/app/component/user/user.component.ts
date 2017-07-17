import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
        users: any[];
        constructor(private _usersService:UserService) {
        
            
        }
        ngOnInit() {
            this._usersService.getUsers()
                .subscribe(users => this.users = users);
        }

}
