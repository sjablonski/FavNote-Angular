import { Component, OnInit, OnDestroy } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { PageContextService } from 'src/app/shared/services/page-context.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  faLightbulb = faLightbulb;
  faTwitter = faTwitter;
  faPen = faPen;
  faSignOutAlt = faSignOutAlt;
  pageContext;
  pageContextSubscribe;

  constructor(private pageContextService: PageContextService) {}

  ngOnInit(): void {
    this.pageContextSubscribe = this.pageContextService
      .getContext()
      .subscribe((context) => (this.pageContext = context));
  }

  ngOnDestroy() {
    this.pageContextSubscribe.unsubscribe();
  }
}
