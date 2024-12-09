import React from 'react';
import PageTitle from 'components/PageTitle';
import ActivityList from './ActivityList';

export default function Activity() {
  return (
    <div className="container mt-12 p-[16px] xl:p-0">
      <PageTitle className="mb-6">Activity</PageTitle>
      <ActivityList />
    </div>
  );
}
