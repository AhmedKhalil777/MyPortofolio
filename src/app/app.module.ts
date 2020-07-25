import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ResearchesComponent } from './researches/researches.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { AtriclesComponent } from './atricles/atricles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectsComponent,
    HomeComponent,
    ResearchesComponent,
    FooterComponent,
    BooksComponent,
    AtriclesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
