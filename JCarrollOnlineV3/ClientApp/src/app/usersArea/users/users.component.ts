import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { AuthorizeService } from '../../../api-authorization/authorize.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private isAuthenticated = false;
  private usersViewModel: UsersViewModel[];

  constructor(private authorizeService: AuthorizeService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    console.log('Calling get on ' + baseUrl + 'fora');
   
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });

    http.get<UsersViewModel[]>(baseUrl + 'api/applicationusers').subscribe(result => {
      this.usersViewModel = result;

      console.log('Returned result: ' + result);
    }, error => console.error(error));
  }
}

interface UsersViewModel {
  id: string;
}
