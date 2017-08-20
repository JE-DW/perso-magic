import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})

export class PagesComponent {
    // Current route
    private currentRouter: string = '';

    public constructor(
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .subscribe((event) => {
                this.currentRouter = event.url;
            });
    }
}
