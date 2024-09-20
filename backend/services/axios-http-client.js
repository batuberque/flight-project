const axios = require("axios");
const HttpClient = require("../interfaces/http-client");

class AxiosHttpClient extends HttpClient {
  constructor(baseUrl, defaultHeaders) {
    super();
    this.client = axios.create({
      baseURL: baseUrl,
      headers: defaultHeaders,
    });

    this.client.interceptors.request.use((request) => {
      console.log("Starting Request", {
        method: request.method,
        url: request.url,
        headers: request.headers,
        params: request.params,
        data: request.data,
      });
      return request;
    });

    this.client.interceptors.response.use(
      (response) => {
        console.log("Response:", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          data: response.data,
        });
        return response;
      },
      (error) => {
        if (error.response) {
          console.error("Response Error:", {
            status: error.response.status,
            statusText: error.response.statusText,
            headers: error.response.headers,
            data: error.response.data,
          });
        } else {
          console.error("Response Error:", error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async get(url, config) {
    return this.client.get(url, config);
  }

  async post(url, data, config) {
    return this.client.post(url, data, config);
  }

  async put(url, data, config) {
    return this.client.put(url, data, config);
  }

  async delete(url, config) {
    return this.client.delete(url, config);
  }
}

module.exports = AxiosHttpClient;
