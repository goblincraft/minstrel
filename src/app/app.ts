import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('minstrel-app');
  public themeService = inject(ThemeService);

  async ngOnInit() {
    if (window.electronAPI) {
      const response = await window.electronAPI.ping();
      console.log('Electron IPC ping response:', response);
    } else {
      console.log('electronAPI is not available');
    }
  }
}
