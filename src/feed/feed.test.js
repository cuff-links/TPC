import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FeedContainer from './feed_container';

configure({ adapter: new Adapter() });

describe('<FeedContainer />', () => {
  var feedFetchData, initialWrapper;
  beforeEach(() => {
    feedFetchData = [
      {
        key: '1',
        title: 'test1',
        subheader: 'test 1 sub',
        icon: 'icon',
        link: 'abc123'
      },
      {
        key: '2',
        title: 'test2',
        subheader: 'test 2 sub',
        icon: 'icon',
        link: 'abc123'
      }
    ];
    initialWrapper = shallow(<FeedContainer feedFetchData={feedFetchData} />);
  });

  it('should contain contain 2 children', () => {
    expect(initialWrapper.children().length).toBe(2);
  });

  it('should only update after setting props for new data', () => {
    //Add another listing to the feedfetch data.
    feedFetchData.push({
      key: 3,
      title: 'test3',
      subheader: 'test 3 sub',
      icon: 'icon',
      link: 'abc123'
    });

    //The returned wrapper should not be changed until we set props to the new value.
    expect(initialWrapper.children().length).toBe(2);

    //Now the element should be changed.
    initialWrapper.setProps({ feedFetchData: feedFetchData });
    expect(initialWrapper.children().length).toBe(3);

    //Creating a new wrapper should have the updated data.
    const secondWrapper = shallow(
      <FeedContainer feedFetchData={feedFetchData} />
    );
    expect(secondWrapper.children().length).toBe(3);
  });
});
