const FeatureScope = require('../../features/support/scope/FeatureScope');

let featureScope;

afterAll(async () => {
    await featureScope.browserScope.close();
});

describe('FeatureScope', () => {

  it('starts out uninitialized', async () => {    
    featureScope = new FeatureScope();
    expect(featureScope.browserScope).toBe(null);
    expect(featureScope.feature).toBe(null);
  });

  it('can be initialized', async () => {
    featureScope = new FeatureScope();
    await featureScope.init('mmmuffins');

    expect(featureScope.feature).toBe('mmmuffins');
    expect(featureScope.browserScope).not.toBe(null);
    expect(featureScope.browserScope.worldParameters).toEqual({});
  });
  
  it('can close an existing browser scope object', async () => {
    await featureScope.init('mmmuffins');
    expect(featureScope.feature).toBe('mmmuffins');
    expect(featureScope.browserScope).not.toBe(null);
  });

  it('sets worldParameters on the BrowserScope if they are passed', async () => {
    await featureScope.init('mmmuffins', {hello: 'thar'});
    expect(featureScope.browserScope.worldParameters).toEqual({hello: 'thar'});
  });  

  it('can identify new features', async () => {    
    expect(featureScope.isNewFeature('mmmuffins')).toBe(false);
    expect(featureScope.isNewFeature('pants')).toBe(true);
  });

}); 