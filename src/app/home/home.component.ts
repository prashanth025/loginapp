import { Component, OnInit } from '@angular/core';
import{AuthonticateService} from '../core/services/authonticate.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails:any;
  constructor(private authonticateService: AuthonticateService) { }

  ngOnInit() {
    this.userDetails =this.authonticateService.getLoggedinDetails();
  }

}
