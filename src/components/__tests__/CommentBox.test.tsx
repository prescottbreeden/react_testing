import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('CommentBox Component', () => {
  let component: any;

  beforeEach(() => {
    component = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('contains a form with a textarea and a button', () => {
    expect(component.find('form').length).toEqual(1);
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(2);
  });

  describe('textarea', () => {
    const testString = 'new comment';

    beforeEach(() => {
      component.find('textarea').simulate('change', { 
        target: { value: testString}
      }).update();
    });

    it('has a text area that users can type in', () => {
      expect(component.find('textarea').prop('value')).toEqual(testString);
    });

    it('empties the form when it is submitted', () => {
      expect(component.find('textarea').prop('value')).toEqual(testString);
      component.find('form').simulate('submit').update();
      expect(component.find('textarea').prop('value')).toEqual('');
    });

  });

});
