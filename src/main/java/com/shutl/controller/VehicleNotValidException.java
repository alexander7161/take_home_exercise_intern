package com.shutl.controller;

public class VehicleNotValidException extends RuntimeException {

    public VehicleNotValidException(String vehicle) {
        super("Vehicle type not valid : " + vehicle);
    }

}