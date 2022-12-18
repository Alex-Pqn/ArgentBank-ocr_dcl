export const requestOptions = {
  post(payload, customHeaders) {
    return {
      method: 'POST',
      headers: {
        ...customHeaders,
      },
      body: JSON.stringify(payload),
    };
  },
  put(payload, customHeaders) {
    return {
      method: 'PUT',
      headers: {
        ...getDefaultHeaders(),
        ...customHeaders,
      },
      body: JSON.stringify(payload),
    };
  },
};

function getDefaultHeaders() {
  return {
    'Content-Type': 'application/json;charset=utf-8',
  };
}
