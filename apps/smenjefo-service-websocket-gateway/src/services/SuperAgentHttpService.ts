import * as superagent from 'superagent';

import IHttpService from "./IHttpService";

export default class SuperAgentHttpService implements IHttpService {
  constructor(
    private readonly urlPrefix: string,
  ) {}

  private prepareURL = (url: string) => {
    return `${this.urlPrefix}${url}`;
  };

  public get = (url: string, query: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      superagent
        .get(this.prepareURL(url))
        .query(query)
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  public post = (url: string, data: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      superagent
        .post(this.prepareURL(url))
        .send(data)
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  public put = (url: string, data: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      superagent
        .put(this.prepareURL(url))
        .send(data)
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  public patch = (url: string, data: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      superagent
        .patch(this.prepareURL(url))
        .send(data)
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  public delete = (url: string) => {
    return new Promise((resolve, reject) => {
      superagent
        .delete(this.prepareURL(url))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}