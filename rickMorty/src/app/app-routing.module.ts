import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { ListCardComponent } from './list-card/list-card.component';

const routes: Routes = [ 
{ path: 'character/episode/:id', component:  EpisodesComponent},
{ path: "character", component: ListCardComponent },
{ path: "**", redirectTo: "character", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
