import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { DeleteSnackbarComponent } from '../delete-snackbar/delete-snackbar.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    DeleteSnackbarComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    PostsRoutingModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
