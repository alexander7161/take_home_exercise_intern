import React from "react";
import { QuoteRequest, SetRequest } from "../../types";
import { VEHICLES } from "..";
import Input from "./Input";
import Select from "./Select";
import styled from "styled-components";

const Form = styled.form`
	display: table;
	width: 100%;
`;

const Row = styled.p`
	display: table-row;
`;

const Label = styled.label`
	display: table-cell;
`;

export default ({
	request,
	setRequest
}: {
	request: QuoteRequest;
	setRequest: SetRequest;
}) => (
	<Form>
		<Row>
			<Label>
				Pickup Postcode:
				<Input
					type="text"
					name="pickup_postcode"
					value={request.pickupPostcode}
					onChange={event => {
						setRequest({ ...request, pickupPostcode: event.target.value });
					}}
				/>
			</Label>
		</Row>
		<Row>
			<Label>
				Delivery Postcode:
				<Input
					type="text"
					name="delivery_postcode"
					value={request.deliveryPostcode}
					onChange={event => {
						setRequest({ ...request, deliveryPostcode: event.target.value });
					}}
				/>
			</Label>
		</Row>
		<Row>
			<Label>
				Vehicle:
				<Select
					name="vehicle"
					value={request.vehicle}
					onChange={event => {
						setRequest({ ...request, vehicle: event.target.value });
					}}
				>
					{Object.keys(VEHICLES).map(V => (
						<option key={V} value={V}>
							{VEHICLES[V]}
						</option>
					))}
				</Select>
			</Label>
		</Row>
	</Form>
);
