import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showSnackBar(message, duration) {
    this.snackBar.open(message, null, {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: 'snack-bar'
    });
  }
}
