import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserLayoutComponent } from './user-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [UserLayoutComponent, SidebarComponent],
  imports: [FontAwesomeModule, RouterModule],
  exports: [UserLayoutComponent],
})
export class UserLayoutModule {}
