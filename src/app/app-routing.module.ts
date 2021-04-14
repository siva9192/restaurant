import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact',component: ContactComponent },
  {path:'dishdetail/:id',component:DishdetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '', redirectTo: '/contact', pathMatch: 'full' }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
