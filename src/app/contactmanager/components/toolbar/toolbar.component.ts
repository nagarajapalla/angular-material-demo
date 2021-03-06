import { NewContactDialogComponent } from './../new-contact-dialog/new-contact-dialog.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private matDialog: MatDialog, 
    private _snackBar: MatSnackBar,
    private router: Router) {}

  @Output() toggleSidenav = new EventEmitter<void>();

  ngOnInit(): void {}

  openAddContactDialog(): void {
    let dialogRef = this.matDialog.open(NewContactDialogComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(' dialog was closed!', result);
      if(result) {
      this.openSnackBar("Contact Added.","Navigate").onAction().subscribe(()=>{
        this.router.navigate(["/contactmanager",result.id])
      });
      }
    });

  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration:6000
    });
  }
}
