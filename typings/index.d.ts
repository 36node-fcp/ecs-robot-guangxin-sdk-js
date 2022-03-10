declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  config: ConfigAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface ConfigAPI {
  /**
   * Get config
   */
  getConfig(req: GetConfigRequest): Promise<GetConfigResponse>;
  /**
   * Update config
   */
  updateConfig(req: UpdateConfigRequest): Promise<UpdateConfigResponse>;
}

export interface GetConfigResponse {
  /**
   * 违法事件
   */
  body: {
    /**
     * 广信平台地址
     */
    platformUrl?: string;
    /**
     * 编码转义
     */
    codeTransforms?: {
      /**
       * 广新平台的 code
       */
      from?: string;
      /**
       * 我们平台 code
       */
      to?: string;
    }[];
  };
}
export interface UpdateConfigRequest {
  /**
   * 违法事件
   */
  body: {
    /**
     * 广信平台地址
     */
    platformUrl?: string;
    /**
     * 编码转义
     */
    codeTransforms?: {
      /**
       * 广新平台的 code
       */
      from?: string;
      /**
       * 我们平台 code
       */
      to?: string;
    }[];
  };
}
export interface UpdateConfigResponse {
  /**
   * 违法事件
   */
  body: {
    /**
     * 广信平台地址
     */
    platformUrl?: string;
    /**
     * 编码转义
     */
    codeTransforms?: {
      /**
       * 广新平台的 code
       */
      from?: string;
      /**
       * 我们平台 code
       */
      to?: string;
    }[];
  };
}
/**
 * 违法事件
 */
export interface Config {
  /**
   * 广信平台地址
   */
  platformUrl?: string;
  /**
   * 编码转义
   */
  codeTransforms?: {
    /**
     * 广新平台的 code
     */
    from?: string;
    /**
     * 我们平台 code
     */
    to?: string;
  }[];
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
