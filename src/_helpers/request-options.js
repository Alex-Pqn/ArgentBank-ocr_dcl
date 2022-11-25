export const requestOptions = {
  get() {
    return {
      method: 'GET',
      ...getHeaders(),
    };
  },
  post(body) {
    return {
      method: 'POST',
      ...getHeaders(),
      body: JSON.stringify(body),
    };
  },
  postFormData(formData) {
    return {
      method: 'POST',
      body: formData,
    };
  },
  patch(body) {
    return {
      method: 'PATCH',
      ...getHeaders(),
      body: JSON.stringify(body),
    };
  },
  put(body) {
    return {
      method: 'PUT',
      ...getHeaders(),
      body: JSON.stringify(body),
    };
  },
  delete() {
    return {
      method: 'DELETE',
      ...getHeaders(),
    };
  },
};

function getHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
}
