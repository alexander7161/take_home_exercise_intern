import React from "react";
import { QuoteRequest, SetRequest } from "../types";
import { VEHICLES } from ".";

export default ({
	request,
	setRequest
}: {
	request: QuoteRequest;
	setRequest: SetRequest;
}) => (
	<form>
		<input
			type="text"
			name="pickup_postcode"
			value={request.pickupPostcode}
			onChange={event => {
				setRequest({ ...request, pickupPostcode: event.target.value });
			}}
		/>
		<input
			type="text"
			name="delivery_postcode"
			value={request.deliveryPostcode}
			onChange={event => {
				setRequest({ ...request, deliveryPostcode: event.target.value });
			}}
		/>
		<select
			name="vehicle"
			value={request.vehicle}
			onChange={event => {
				setRequest({ ...request, vehicle: event.target.value });
			}}
		>
			{Object.keys(VEHICLES).map(V => (
				<option value={V}>{VEHICLES[V]}</option>
			))}
		</select>
	</form>
);
