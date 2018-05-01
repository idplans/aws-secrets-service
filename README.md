# AWS Secrets Service

Wrapper for AWS.SecretsManager

## Installation

* `npm i git://github.com/idplans/path-to-repo#v1` this repository

## Usage

```javascript
const secretsService = require('aws-secrets-service');

const prodSecrets = secretsService({
  endpoint: '', // defaults to aws endpoint
  region: '', // defaults to us-east-1
  secretId: '' // defaults to prod
});
```