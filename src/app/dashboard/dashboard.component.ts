import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  // dialogRef: MatDialogRef;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        console.log(matches);
        
        return [
          // { title: 'Card 1', cols: 1, rows: 1 },
         
        ];
      }

      return [
        //{ title: 'Card 1', cols: 2, rows: 1 },
       
      ];
    })
  );
  animal: string;
  name: string;
  choice: any;
 
  constructor(private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog) {}
    openDialog(): void{
      const dialogRef = this.dialog.open(DialogPageComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.choice = result;
      });
}
}
