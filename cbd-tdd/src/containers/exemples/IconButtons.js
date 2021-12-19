import React from 'react';
import { IconButton } from '../../components';

export const IconButtons = () => {
  return (
    <>
      <IconButton />
      <IconButton state="pending" />
      <IconButton state="resolved" />
      <IconButton state="rejected" />
      <IconButton state="disabled" />
    </>
  );
};
