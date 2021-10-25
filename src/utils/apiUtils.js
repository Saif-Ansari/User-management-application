export function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export function apiGet(url, options = {}) {
  return fetch(url, {
    method: "GET",
    accept: "application/json",
    headers: { "Content-Type": "application/json" },
    ...options,
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function apiPost(url, body, options = {}) {
  return fetch(url, {
    method: "POST",
    accept: "application/json",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    ...options,
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
