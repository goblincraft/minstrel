import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('minstrel-app');

  async ngOnInit() {
    if (window.electronAPI) {
      const response = await window.electronAPI.ping();
      console.log('Electron IPC ping response:', response);
    } else {
      console.log('electronAPI is not available');
    }
  }
}
