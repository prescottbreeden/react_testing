import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        name: 'mox 1 name',
        body: 'mox 1 body',
      },
      {
        name: 'mox 2 name',
        body: 'mox 2 body',
      },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it ('can fetch a list of comments and display them', (done) => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  wrapper.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
    wrapper.unmount();
  });
});
