import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookCarComponent } from './components/book-car/book-car.component';

const routes: Routes = [
  { path: "dashboard", component: CustomerDashboardComponent },
<<<<<<< HEAD
  { path: "book/:id", component: BookCarComponent}
=======
  { path: "book/:id", component: BookCarComponent }
>>>>>>> 96a93e9079a833ca63a758b078e41ee6815a9210
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
