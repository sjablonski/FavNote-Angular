import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserLayoutModule } from './layout/user-layout/user-layout.module';
import { PageContextService } from './shared/services/page-context.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './shared/services/items.service';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    UserLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [PageContextService, ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
