export interface ResponseType<T> {
	href:     string;
	items:    Array<T>;
	limit:    number;
	next:     number;
	offset:   number;
	previous: number;
	total:    number;
}