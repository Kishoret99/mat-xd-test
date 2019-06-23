import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private appTabBar: HTMLElement;
  private tabBar: HTMLElement;
  private content: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private doc,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if(isPlatformServer(this.platformId)) return;
    this.appTabBar = this.doc.querySelector('.mdc-top-app-bar');
    this.tabBar = this.doc.querySelector('.mdc-tab-bar');
    this.content = this.doc.querySelector('.content');
  }
  ngAfterViewInit() {
    if(isPlatformServer(this.platformId)) return;
    const self = this;
    let scrollPosition = window.pageYOffset;
    const offset = this.tabBar.offsetTop
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > offset) {
        // self.appTabBar.classList.remove('mdc-top-app-bar--scroll');
        // self.appTabBar.classList.add('mdc-top-app-bar--hide');

        self.tabBar.classList.remove('mdc-tab-bar--scroll');
        self.tabBar.classList.add('mdc-tab-bar--fixed');

        self.content.classList.add('content--fixed');
      } else {
        // self.appTabBar.classList.add('mdc-top-app-bar--scroll');
        // self.appTabBar.classList.remove('mdc-top-app-bar--hide');

        self.tabBar.classList.add('mdc-tab-bar--scroll');
        self.tabBar.classList.remove('mdc-tab-bar--fixed');

        self.content.classList.remove('content--fixed');
      }
    })
  }
}
