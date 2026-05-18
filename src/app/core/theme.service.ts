import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = signal<boolean>(false);

  constructor() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setDarkTheme(prefersDark);
  }

  toggleTheme() {
    this.setDarkTheme(!this.isDarkTheme());
  }

  setDarkTheme(isDark: boolean) {
    this.isDarkTheme.set(isDark);
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
