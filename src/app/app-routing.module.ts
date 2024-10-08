import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { ProductsComponent } from "./components/products/products.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'product', component: ProductsComponent},
    { path: 'category', component: CategoriesComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }