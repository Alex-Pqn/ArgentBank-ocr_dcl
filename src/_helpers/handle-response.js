export function handleResponse(response) {
  if (response.status === 401) {
    localStorage.clear();
    window.location.href = '/';
  }
  return response;
}
