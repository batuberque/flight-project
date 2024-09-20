class BaseApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get(endpoint, params = {}, headers = null) {
    const requestConfig = { params };
    if (headers) {
      requestConfig.headers = headers;
    }

    try {
      const response = await this.httpClient.get(endpoint, requestConfig);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      console.error(
        "API ERROR",
        error.response.status,
        error.response.statusText
      );
      console.error("Error response data:", error.response.data);
    } else {
      console.error("API ERROR", error.message);
    }
    throw error;
  }
}

module.exports = BaseApiService;
