import React, { useState, useEffect } from "react";
import { Form, QuoteDisplay, Container } from "./components";
import { QuoteRequest, Quote, SetQuote, SetRequest } from "./types";
import { QuoteContainer } from "./components/Quote";

const validRequest = (request: QuoteRequest): boolean =>
	request.deliveryPostcode !== "" && request.pickupPostcode !== "";

const App: React.FC = () => {
	const [quote, setQuote]: [Quote, SetQuote] = useState({
		pickupPostcode: "",
		deliveryPostcode: "",
		vehicle: "bicycle",
		price: 0
	});
	const [request, setRequest]: [QuoteRequest, SetRequest] = useState({
		pickupPostcode: "",
		deliveryPostcode: "",
		vehicle: "bicycle"
	});

	useEffect(() => {
		if (validRequest(request)) {
			(async function fetchQuote() {
				const res = await fetch("quote", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(request)
				});
				const data = await res.json();
				console.log(data);
				if (data.status === 500) {
				} else {
					setQuote(data);
				}
			})();
		}
	}, [request]);
	return (
		<Container>
			<Form request={request} setRequest={setRequest} />
			<br />
			{validRequest(request) ? (
				<QuoteDisplay quote={quote} />
			) : (
				<QuoteContainer>Please fill in the form</QuoteContainer>
			)}
		</Container>
	);
};

export default App;
