package com.shutl.controller;

import com.shutl.model.Quote;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class QuoteController {

    @RequestMapping(value = "/quote", method = POST)
    public @ResponseBody Quote quote(@RequestBody Quote quote) {
        Long price = this.getPrice(quote);

        return new Quote(quote.getPickupPostcode(), quote.getDeliveryPostcode(), quote.getVehicle(), price);
    }

    private Long getPrice(Quote quote) {
        Long price = Math.abs((Long.valueOf(quote.getDeliveryPostcode(), 36) - Long.valueOf(quote.getPickupPostcode(), 36))/100000000);
        double markup = this.getVehicleMarkup(quote.getVehicle());
        return Math.round(price * markup);
    }

    private double getVehicleMarkup(String vehicle) {
        switch (vehicle) {
            case "bicycle":
                return 1.10;
            case "motorbike":
                return 1.15;
            case "parcel_car":
                return 1.20;
            case "small_van":
                return 1.30;
            case "large_van":
                return 1.40;
            default:
                return 1;
        }
    }
}
