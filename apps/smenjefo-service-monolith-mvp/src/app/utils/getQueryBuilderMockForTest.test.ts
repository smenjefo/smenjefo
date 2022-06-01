import { SelectQueryBuilder } from "typeorm/query-builder/SelectQueryBuilder";

export const getQueryBuilderMockForTest = () => {
  const queryBuilderMock = {};

  Object.keys(SelectQueryBuilder.prototype).forEach((key) => {
    queryBuilderMock[key] = jest.fn().mockReturnThis();
  });

  return queryBuilderMock;
};

export const getQueryRunnerMockForTest = () => {
  // same as "getQueryBuilderMockForTest"
  return getQueryBuilderMockForTest();
};


// TODO: disable utilities testing
describe('getQueryBuilderMockForTest.test', () => {
  it('empty', () => {
    expect(true).toBeTruthy();
  });
});