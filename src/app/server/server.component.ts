import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverStatus = 'Offline';
  serverId = 10;

  getServerStatus() {
    return this.serverStatus;
  }
}