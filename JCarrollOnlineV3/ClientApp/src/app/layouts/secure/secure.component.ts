import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../../../api-authorization/authorize.service';

@Component({
  providers: [AuthorizeService],
  selector: 'app-dashboard',
  templateUrl: './secure.component.html'
})
export class SecureComponent implements OnInit {

  constructor(private router: Router, private auth: AuthorizeService) { }

  ngOnInit(): void { }
}
