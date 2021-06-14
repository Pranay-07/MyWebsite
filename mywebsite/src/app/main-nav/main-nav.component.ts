import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    title = 'mywebsite';
    clicked="Aboutme"
    onclickAboutMe(){
      this.clicked="Aboutme"
    }
    onclickContact(){
      this.clicked="Contact"
    }
    onclickAllProjects(){
      this.clicked="AllProjects"
    }
    onclickBlogs(){
      this.clicked="Blogs"
    }
    

  constructor(private breakpointObserver: BreakpointObserver,private elementRef: ElementRef) {}
  
}
