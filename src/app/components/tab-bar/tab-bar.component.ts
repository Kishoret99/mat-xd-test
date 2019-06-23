import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MDCTabBar } from '@material/tab-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  matTabBar: MDCTabBar;
  routeSubcription: Subscription
  constructor(
    public elementRef: ElementRef,
    private activateRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(isPlatformServer(this.platformId)) return
    const tab: Element = this.elementRef.nativeElement.querySelector('.mdc-tab-bar');
    this.matTabBar = new MDCTabBar(tab);
    this.routeSubcription = this.activateRoute.url.subscribe(url => {
      let tabIndex = 0;
      if(url[0].path == 'movies') tabIndex = 1;
      this.matTabBar.activateTab(tabIndex);
    })
  }

  onTabClick(tabIndex) {
    console.log('clicked', tabIndex);
  }



  ngOnDestroy() {
    if(isPlatformServer(this.platformId)) return
    this.matTabBar.destroy();
    this.routeSubcription.unsubscribe();
  }

}
