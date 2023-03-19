import { getToken } from "./users-service";

const BASE_URL = "https://tutorialands-server.onrender.com/api/tutorials";

export function create(data) {
	const token = getToken();
	return fetch( BASE_URL + "/new", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
}

export function index() {
	const token = getToken();
	return fetch( BASE_URL + "/all", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export function removeTutorial(id) {
	const token = getToken();
	return fetch( BASE_URL + `/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export function update(data, id) {
	const token = getToken();
	return fetch( BASE_URL + `/${id}`, {
		method: "PATCH",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
}

export function indexMyAccount(userId) {
	const token = getToken();
	return fetch( BASE_URL + `/myaccount/${userId}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}