import { Component, OnInit, Input, Output } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService : NotificationService) {  }

  ngOnInit() {  
    this.notificationService.displayNotification("Welcome to Notification Demo site. This site is only for demo purposes");
  }

}
