import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageContextService } from 'src/app/shared/services/page-context.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
  currentRoute;

  constructor(
    private router: Router,
    private pageContextService: PageContextService
  ) {
    this.currentRoute = this.getCurrentRoute(this.router.url);
    this.pageContextService.setContext(this.currentRoute);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        this.currentRoute = this.getCurrentRoute(ev.url);
        this.pageContextService.setContext(this.currentRoute);
      });
  }

  getCurrentRoute(route) {
    return route.match(/^(\/(?<route>notes|twitters|articles))/i).groups.route;
  }
}
