import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatListComponent } from './components/stat-list/stat-list.component';
import { StatFormComponent } from './components/stat-form/stat-form.component';

const routes: Routes = [
  {
    path: '',
    component: StatListComponent
  },
  {
    path: 'stat',
    component: StatListComponent
  },
  {
    path: 'stat/create',
    component: StatFormComponent
  },
  {
    path:'stat/edit/:id',
    component: StatFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
