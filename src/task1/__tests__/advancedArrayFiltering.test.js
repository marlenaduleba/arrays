const {customFilterUnique, uniqueByAge} = require('../advancedArrayFiltering');
const { people } = require("../../data/testData");

describe('customFilterUnique', () => {

  it('should return an array of unique elements based on the provided callback', () => {
    const expectedResult =[
        {
          first_name: 'Blinni',
          last_name: 'Bedo',
          age: 74,
          email: 'bbedo0@sitemeter.com'
        },
        {
          first_name: 'Craggy',
          last_name: 'Pullinger',
          age: 84,
          email: 'cpullinger2@t-online.de'
        },
        {
          first_name: 'Reagan',
          last_name: 'Pechold',
          age: 63,
          email: 'rpechold3@imgur.com'
        },
        {
          first_name: 'Ronnie',
          last_name: 'Chetwin',
          age: 70,
          email: 'rchetwin4@shop-pro.jp'
        },
        {
          first_name: 'Lindsay',
          last_name: 'Sturney',
          age: 85,
          email: 'lsturney6@google.co.jp'
        }
      ];

    expect(customFilterUnique(people, uniqueByAge)).toEqual(expectedResult);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(customFilterUnique([], uniqueByAge)).toEqual([]);
  });

});

