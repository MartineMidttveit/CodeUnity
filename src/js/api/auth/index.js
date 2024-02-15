import config from "../config.js";

/**
 * Represents an API authentication class.
 * Create a new instance of the Auth class.¨
 * can be used for any request that requires authentication (such as register, login, create post, getting user profile etc.)
 */
export default class Auth {
  /**

    *
    * @param {string} method - The HTTP method for the request.
    * @param {Object} headers - The headers for the request.
    * @param {string} endpoint - The endpoint URL for the request.
    * @param {Object|null} body - The request body (optional).
    */
  constructor(method, headers, endpoint, body = null) {
    this.method = method;
    this.headers = headers;
    this.endpoint = endpoint;
    this.body = body;
  }

  /**
   * Fetches data from the specified URL using the provided method, headers, and body.
   * @param {string}  - The endpoint URL for the request (optional), will default to endpoint from the constructor if empty.
   * @returns {Promise} - returns the requested data from the fetch.
   */
  async fetch(endpoint = this.endpoint) {
    if (!endpoint) throw new Error("No endpoint provided.");

    const url = config.BASE_URL + endpoint;

    this.body && (this.body = JSON.stringify(this.body));

    try {
      const response = await fetch(url, {
        headers: this.headers,
        method: this.method,
        body: this.body,
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          throw new Error(data.errors[0].message);
        } else {
          throw new Error("Something went wrong: " + response);
        }
      }

      console.log(response);
      console.log(data);
      if (!data) throw new Error("Promise returns no data.  ");

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
