import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Component/first/first.component';
import { SecondComponent } from './Component/second/second.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ChildAComponent } from './Component/child-a/child-a.component';
import { ChildBComponent } from './Component/child-b/child-b.component';
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
console.log(resolvedChildATitle, 'resolvedChildATitle');
const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        title: 'child-a',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        title: 'child-b',
        component: ChildBComponent,
      },
    ],
  },
  {
    path: 'second-component',
    component: SecondComponent,
  },
  {
    path: '',
    redirectTo: 'first-component',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
