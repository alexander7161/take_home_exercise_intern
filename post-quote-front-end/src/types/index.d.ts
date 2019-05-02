export interface QuoteRequest {
	pickupPostcode: string;
	deliveryPostcode: string;
	vehicle: string;
}

export interface Quote {
	pickupPostcode: string;
	deliveryPostcode: string;
	vehicle: string;
	price: number;
}

export type SetQuote = Dispatch<
	SetStateAction<{
		pickupPostcode: string;
		deliveryPostcode: string;
		vehicle: string;
		price: number;
	}>
>;

export type SetRequest = Dispatch<
	SetStateAction<{
		pickupPostcode: string;
		deliveryPostcode: string;
		vehicle: string;
	}>
>;

interface Vehicles {
	[key: string]: string;
}
