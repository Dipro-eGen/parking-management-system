import {NgModule} from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrudCompComponent} from './crud-comp/crud-comp.component';
import {CrudService} from "./crud-comp/crud.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {AngularFireModule} from "@angular/fire/compat";
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    AppComponent,
    CrudCompComponent,
    DashboardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFirestoreModule,
        FormsModule,
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideDatabase(() => getDatabase()),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        BsDatepickerModule,
        NgbTimepickerModule,
        NgbModule,
        NgSelectModule

    ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
