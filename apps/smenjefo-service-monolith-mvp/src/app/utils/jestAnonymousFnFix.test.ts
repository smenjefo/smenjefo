// jest can not compare anonymous functions
const getJestAnonymousFnFix = (dictionary?: any[]) => {
  const hasDictionary = dictionary?.length;
  const dictionaryObject: Record<string, any> = {};

  if (hasDictionary) {
    dictionary.forEach((dictionaryItem) => {
      dictionaryObject[dictionaryItem.name] = dictionaryItem;
    });
  }

  return (obj: any) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'function') {
        obj[key] = expect.any(Function);
      }
  
      if (hasDictionary) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          const objectForComprasion = dictionaryObject[obj[key].constructor.name];
          
          if (objectForComprasion) {
            obj[key] = expect.any(objectForComprasion);
          }
        }
      }
    });
    
    return obj;
  };
};

// TODO: disable utilities testing
describe('getJestAnonymousFnFix.test', () => {
  it('empty', () => {
    expect(true).toBeTruthy();
  });
});

export default getJestAnonymousFnFix;