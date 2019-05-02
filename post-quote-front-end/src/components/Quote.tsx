import React from "react";
import { Quote } from "../types";

export default ({
	quote: { pickupPostcode, deliveryPostcode, vehicle, price }
}: {
	quote: Quote;
}) => (
	<div>
		{pickupPostcode} to {deliveryPostcode} using a {vehicle} will cost you £
		{price}
	</div>
);
