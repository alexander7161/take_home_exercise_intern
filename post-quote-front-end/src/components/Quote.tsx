import React from "react";
import { Quote } from "../types";
import { VEHICLES } from ".";

import styled from "styled-components";

export const QuoteContainer = styled.div`
	text-align: center;
`;

export default ({
	quote: { pickupPostcode, deliveryPostcode, vehicle, price }
}: {
	quote: Quote;
}) => (
	<QuoteContainer>
		{pickupPostcode} to {deliveryPostcode} using a{" "}
		{VEHICLES[vehicle].toLowerCase()} will cost you £{price}
	</QuoteContainer>
);
