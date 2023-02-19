import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-success-msg',
  templateUrl: './success-msg.component.html',
  styleUrls: ['./success-msg.component.css']
})
export class SuccessMsgComponent {
  @Input() userInfo:any

}
