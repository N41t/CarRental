package com.project.CarRental.services.customer;

import com.project.CarRental.dto.BookACarDto;
import com.project.CarRental.dto.CarDto;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookACar(Long carId, BookACarDto bookACarDto);

    CarDto getCarById(Long carId);

    List<BookACarDto> getBookingsByUserId(Long userId);

}
