import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.css']
})
export class LoadDataComponent implements OnInit {

  title = 'Assignment-X';
  showTable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData = () => {
    document.getElementById("load-btn")!.style.display = "none";
    this.showTable = !this.showTable;
  }

}
