import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton, iconButtonState } from './IconButton';
import { iconD } from '../index';

let iconButton = null;
let icon = null;
let props = {};
props.state = 'idle';

beforeAll(() => {
  // const { getByTestId } = render(<IconButton state="idle" />);
  // iconButton = getByTestId('icon-button');
  // icon = getByTestId('svg');

  render(<IconButton state="idle" />);
  iconButton = screen.getByTestId('icon-button');
  // icon = screen.getByTestId('icon');
  icon = iconButton.querySelector('svg');
});

describe('IconButton 컴포넌트', () => {
  test(`IconButton의 state가 ${props.state}일 때 버튼의 텍스트는 ${
    iconButtonState[props.state].text
  } 이다.`, () => {
    expect(iconButton).toHaveTextContent(iconButtonState[props.state].text);
  });

  test(`IconButton의 상태가 "disabled"이면 disabled이다.`, () => {
    render(<IconButton state="disabled" />);
    expect(screen.getByTestId('icon-button')).toBeDisabled();
  });

  test(`IconButton의 상태가 ${props.state} 일 때, 아이콘의 주소는 ${
    iconD[iconButtonState[props.state].icon]
  }이다.`, () => {
    expect(icon.querySelector('path')).toHaveAttribute(
      'd',
      iconD[iconButtonState[props.state].icon]
    );
  });
});
