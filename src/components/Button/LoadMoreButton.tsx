/* eslint-disable max-len */
import React from 'react';
import Icon from '../Icon/Icon';
import Button from './index';

function LoadMoreButton() {
  return (
    <div className="refresh flex justify-center my-10">
      <Button>
        <Icon name="refresh-cw" className="stroke-current" />
        Load More
      </Button>
    </div>
  );
}

export default LoadMoreButton;
