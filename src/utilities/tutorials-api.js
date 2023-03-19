import { getToken } from "./users-service";

export function create(data) {
	const token = getToken();
	return fetch("/api/tutorials/new", {
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
	return fetch("/api/tutorials/index/all", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export function removeTutorial(id) {
	const token = getToken();
	return fetch(`/api/tutorials/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export function update(data, id) {
	const token = getToken();
	return fetch(`/api/tutorials/${id}`, {
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
	return fetch(`/api/myaccount/${userId}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}