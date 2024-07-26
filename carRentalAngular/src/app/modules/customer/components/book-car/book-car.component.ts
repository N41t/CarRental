import { Component } from '@angular/core';
<<<<<<< HEAD
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 96a93e9079a833ca63a758b078e41ee6815a9210

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.scss'
})
export class BookCarComponent {

<<<<<<< HEAD
  carId: number = this.activatedRoute.snapshot.params["id"];
  car: any;
  processedImage: any;

  constructor(private service: CustomerService,
              private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCarById();
  }

  getCarById() {
    this.service.getCarById(this.carId).subscribe((res) => {
      console.log(res);
      this.processedImage = 'data:image/jpeg;base64,' + res.returnedImage;
      this.car = res;
    })
  }

=======
>>>>>>> 96a93e9079a833ca63a758b078e41ee6815a9210
}
