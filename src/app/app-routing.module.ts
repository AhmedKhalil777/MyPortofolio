import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BooksComponent } from './books/books.component';
import { AtriclesComponent } from './atricles/atricles.component';
import { ResearchesComponent } from './researches/researches.component';

const routes: Routes = [

    {path: 'home' , component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: "projects",  component:ProjectsComponent},
    {path: "books", component : BooksComponent},
    {path: "articles", component: AtriclesComponent},
    {path :"researches", component:ResearchesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}

