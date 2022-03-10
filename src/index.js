//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * config's methods
   */
  config = {
    /**
     * Get config
     *
     * @param {GetConfigRequest} req getConfig request
     * @returns {Promise<GetConfigResponse>} Expected response to a valid request
     */
    getConfig: req => {
      const {} = req || {};

      return fetch(`${this.base}/config`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update config
     *
     * @param {UpdateConfigRequest} req updateConfig request
     * @returns {Promise<UpdateConfigResponse>} The config updated
     */
    updateConfig: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for updateConfig");

      return fetch(`${this.base}/config`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
}
