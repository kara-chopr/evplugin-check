import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-submit-listingalert',
  templateUrl: './submit-listingalert.component.html',
  styleUrls: ['./submit-listingalert.component.css']
})
export class SubmitListingalertComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SubmitListingalertComponent>,) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
