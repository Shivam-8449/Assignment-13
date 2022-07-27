import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { FormsModule } from '@angular/forms';
import { TableRowComponent } from './table-row/table-row.component';
import { HumanizePipe } from './humanize.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { LoadDataComponent } from './load-data/load-data.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomTableComponent,
    TableRowComponent,
    HumanizePipe,
    AddUserComponent,
    LoadDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
