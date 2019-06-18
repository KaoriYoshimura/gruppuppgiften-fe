describe('unit test createOption', () => {
  test('should create an option element', () => {
    const createOption = require('./animalApp.js').createOption;
    const testOption = createOption('test', 'Test');
    const option = '<option value="test">Test</option>';
    expect(testOption.outerHTML).toEqual(option);
  });
});
