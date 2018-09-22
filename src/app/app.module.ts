import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule,
  MatCardModule } from '@angular/material';

import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './view/list/list.component';
import { EditComponent } from './view/edit/edit.component';
import { CreateComponent } from './view/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes : Routes = [
	{ path: 'create', component:CreateComponent },
	{ path: 'edit/:id', component: EditComponent },
	{ path : 'list', component:ListComponent},
	{ path:'', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
