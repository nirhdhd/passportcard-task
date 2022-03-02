import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { lessThen10Posts } from './lessThen10Posts.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteSnackbarComponent } from './components/delete-snackbar/delete-snackbar.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PostsModule } from './components/posts/posts.module';
import { DetailsModule } from './components/details/details.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [AppComponent, UserListItemComponent, lessThen10Posts],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    DetailsModule,
    PostsModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
