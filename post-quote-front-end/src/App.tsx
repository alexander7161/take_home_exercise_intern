import React, { useState, useEffect } from "react";
import { Form, QuoteContainer } from "./components";
import { QuoteRequest, Quote, SetQuote, SetRequest } from "./types";
const App: React.FC = () => {
	const [quote, setQuote]: [Quote, SetQuote] = useState({
		pickupPostcode: "SW1A1AA",
		deliveryPostcode: "EC2A3LT",
		vehicle: "bicycle",
		price: 0
	});
	const [request, setRequest]: [QuoteRequest, SetRequest] = useState({
		pickupPostcode: "SW1A1AA",
		deliveryPostcode: "EC2A3LT",
		vehicle: "bicycle"
	});

	useEffect(() => {
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
			setQuote(data);
		})();
	}, [request]);
	return (
		<div className="App">
			<Form request={request} setRequest={setRequest} />
			<QuoteContainer quote={quote} />
		</div>
	);
};

export default App;
