const FeatureScope = require('../../features/support/scope/FeatureScope');

const testTimeout = 10000;

let featureScope;

afterAll(async () => {
    await featureScope.browserScope.close();
});

describe('FeatureScope', () => {

  it('starts out uninitialized', async () => {    
    featureScope = new FeatureScope();
    expect(featureScope.browserScope).toBe(null);
    expect(featureScope.feature).toBe(null);
  }, testTimeout);

  it('can be initialized', async () => {
    featureScope = new FeatureScope();
    await featureScope.init('mmmuffins');

    expect(featureScope.feature).toBe('mmmuffins');
    expect(featureScope.browserScope).not.toBe(null);
  }, testTimeout);
  
  it('can close an existing browser scope object', async () => {
    await featureScope.init('mmmuffins');
    expect(featureScope.feature).toBe('mmmuffins');
    expect(featureScope.browserScope).not.toBe(null);
  }, testTimeout);

  it('can identify new features', async () => {    
    expect(featureScope.isNewFeature('mmmuffins')).toBe(false);
    expect(featureScope.isNewFeature('pants')).toBe(true);
  }, testTimeout);

}); 