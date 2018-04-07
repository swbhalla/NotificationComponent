import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
 
 notifications = [];
 visible = false;
  constructor() { }
  
  addNotification(message){
    this.notifications.push({message:message});
    setTimeout(() => this.closeNotification(this.notifications.findIndex(function(ele){
        return ele.message === message;
   })) ,8000);
  }
  
  closeNotification(index){
    this.notifications.splice(index,1);
  }
  
  showNotification(){
    this.visible = true;
  }
  hideNotification(){
    this.visible = false;
  }
  
 displayNotification(message){
    this.addNotification(message);
    this.showNotification();
  }
  
}
