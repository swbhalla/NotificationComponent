import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private notificationService : NotificationService) {  }

  ngOnInit() {
  }

}
