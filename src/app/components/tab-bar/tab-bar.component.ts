import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer, Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MDCTabBar } from '@material/tab-bar';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  matTabBar: MDCTabBar;
  constructor(
    public elementRef: ElementRef,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(isPlatformServer(this.platformId)) return
    const tab: Element = this.elementRef.nativeElement.querySelector('.mdc-tab-bar');
    this.matTabBar = new MDCTabBar(tab);
    const path = this.location.path();
    if(path === '/home') {
      this.matTabBar.activateTab(0) 
    } else if(path === '/movies') {
      this.matTabBar.activateTab(1);
    }
  }

  ngOnDestroy() {
    if(isPlatformServer(this.platformId)) return
    this.matTabBar.destroy();
  }
}
