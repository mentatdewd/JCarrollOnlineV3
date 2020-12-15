import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [AuthorizeService]
})

export class UserInfoComponent implements OnInit {
  email: Observable<string>;
  userName: Observable<string>;

  constructor(private authorizeService: AuthorizeService) {
  }

  ngOnInit() {
    this.email = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
  }

}
