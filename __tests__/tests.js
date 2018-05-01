let secretsService = require('../');
let aws = require('aws-sdk');

describe('secretsService', () => {
  it('sends a request through aws.SecretsManager with default values', async () => {
    await secretsService();
    let secretsManager = aws.SecretsManager();

    expect(aws.SecretsManager).toHaveBeenCalledWith({
      endpoint: 'https://secretsmanager.us-east-1.amazonaws.com',
      region: 'us-east-1'
    });
    expect(secretsManager.getSecretValue).toHaveBeenCalledWith({
      'SecretId': 'prod'
    });
  });

  it('sends a request through aws.SecretsManager with supplied values', async () => {
    await secretsService({
      endpoint: 'foo.gl',
      region: 'fl-south-1',
      secretId: 'px'
    });
    let secretsManager = aws.SecretsManager();

    expect(aws.SecretsManager).toHaveBeenCalledWith({
      endpoint: 'foo.gl',
      region: 'fl-south-1'
    });
    expect(secretsManager.getSecretValue).toHaveBeenCalledWith({
      'SecretId': 'px'
    });
  });
});