package com.project.CarRental.services.admin;

import com.project.CarRental.dto.CarDto;

import java.io.IOException;

public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;
}
