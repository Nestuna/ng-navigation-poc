import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsListComponent } from './pages';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material.module';
import { NavigationStepperComponent } from './components/navigation-stepper/navigation-stepper.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { ThumbItemComponent } from './components/thumb-item/thumb-item.component';
import { ItemComponent } from './components/item/item.component';
import { ToggleViewButtonComponent } from './components/toggle-view-button/toggle-view-button.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { VideoComponent } from './pages/video/video.component';
import { LiveComponent } from './pages/live/live.component';
import { PhotosComponent } from './pages/photos/photos.component';

@NgModule({
  declarations: [
    ChannelsListComponent,
    ListItemComponent,
    NavigationStepperComponent,
    NavHeaderComponent,
    ThumbItemComponent,
    ItemComponent,
    ToggleViewButtonComponent,
    TableViewComponent,
    VideoComponent,
    LiveComponent,
    PhotosComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ChannelsListComponent
  ]
})
export class ChannelsNavigationModule { }
