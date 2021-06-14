import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mywebsite';
  clicked="Aboutme"
  onclickAboutMe(){
    this.clicked="Aboutme"
  }
  onclickContact(){
    this.clicked="Contact"
    console.log(true)
  }
  onclickAllProjects(){
    this.clicked="AllProjects"
  }
  onclickBlogs(){
    this.clicked="Blogs"
  }
  openedSubject = new Subject<boolean>();

@HostListener('click', ['$event']) clickedInside() {
    this.openedSubject.next(false);
}
}
