/* eslint-disable react/no-array-index-key */
import classNames from 'classnames';
import React from 'react';

type Props = {
  headers?: string[]
  className?: string
}

function TableHeader({ headers, className = '' }: Props) {
  return (
    <tr>

      {headers && headers.map(((item, index) => (
        <th
          className={classNames('', className)}
          key={index}
        >
          <div className="header-container">{item}</div>
        </th>
      )))}
    </tr>
  );
}

export default TableHeader;
