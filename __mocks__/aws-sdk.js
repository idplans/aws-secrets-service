'use strict';

let awsSdk = exports;

// mimic aws currying
let getSecretValue = jest.fn(() => {
  return {
    promise() {
      return Promise.resolve({
        catch () {

        }
      });
    }
  };
});

awsSdk.SecretsManager = jest.fn(() => {
  return {
    getSecretValue
  };
});