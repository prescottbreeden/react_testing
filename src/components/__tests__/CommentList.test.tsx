import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

describe('CommentBox Component', () => {
  let component: any;

  beforeEach(() => {
    component = mount(
      <Root>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders a Comment Component for each comment', () => {

  });

});
