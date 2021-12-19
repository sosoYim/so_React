import React from 'react';
import './IconButton.css';
import { Icon } from '../Icon/Icon';

export const iconButtonState = {
  idle: {
    text: '업로드',
    icon: 'upArrow',
  },
  pending: {
    text: '업로드 중',
    icon: 'spinner',
  },
  resolved: {
    text: '완료',
    icon: 'checkMark',
  },
  rejected: {
    text: '실패',
    icon: 'cross',
  },
  disabled: {
    text: '업로드',
    icon: 'notAllowed',
  },
};

export function IconButton({ state, type }) {
  return (
    <button
      className="icon-button"
      type={type}
      disabled={state === 'disabled'}
      data-testid="icon-button"
    >
      {iconButtonState[state].text}{' '}
      <Icon state={iconButtonState[state].icon} data-testid="icon" />
    </button>
  );
}

IconButton.defaultProps = {
  state: 'idle',
  type: 'button',
};
