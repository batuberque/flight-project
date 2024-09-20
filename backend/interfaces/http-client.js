class HttpClient {
  async get(url, config) {
    throw new Error("get method not implemented");
  }

  async post(url, data, config) {
    throw new Error("post method not implemented");
  }

  async put(url, data, config) {
    throw new Error("put method not implemented");
  }

  async delete(url, config) {
    throw new Error("delete method not implemented");
  }
}

module.exports = HttpClient;
