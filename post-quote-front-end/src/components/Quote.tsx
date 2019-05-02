import React from "react";
import { Quote } from "../types";
import { VEHICLES } from ".";
export default ({
	quote: { pickupPostcode, deliveryPostcode, vehicle, price }
}: {
	quote: Quote;
}) => (
	<div>
		{pickupPostcode} to {deliveryPostcode} using a{" "}
		{VEHICLES[vehicle].toLowerCase()} will cost you £{price}
	</div>
);
