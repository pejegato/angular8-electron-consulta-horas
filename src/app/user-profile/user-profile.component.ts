import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  selectRegiones: string[] = ['I Región', 'II Región', 'III Región'];
  region: string;
  constructor() { }

  ngOnInit() {
  }

}
