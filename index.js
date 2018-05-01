const aws = require('aws-sdk');

/**
 * make a request to the aws secrets repository. Uses aws credentials stored in
 * local environment for development. Uses aws roles in production.
 * 
 * @example
 *  let awsSecretsObject = secretsManager({endpoint:'https://secrets.com', region: 'us-east-1', 'prod'});
 *  // returns {SECRET_KEY=>'value', SECRET_KEY2=>'value'}
 * @param {Object} opts configuration object
 * @return {Promise} resolves to Object
 */
module.exports = function secretsService(opts = {}) {
  this.endpoint = opts.endpoint || "https://secretsmanager.us-east-1.amazonaws.com";
  this.region = opts.region || 'us-east-1';
  this.secretId = opts.secretId || 'prod';

  this.secretsManager = new aws.SecretsManager({
    endpoint: this.endpoint,
    region: this.region
  });

  return this.secretsManager
    .getSecretValue({
      SecretId: this.secretId
    })
    .promise()
    .catch(err => {
      if (err) {
        console.log('credentials could not be obtained', err.code, err.message, err.stack);
      }
    });
};