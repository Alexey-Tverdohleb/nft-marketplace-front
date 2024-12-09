import React from 'react';
import Proposition from 'pages/MyWallet/Propositions/Proposition';
import NoDataFound from 'components/NoDataFound/NoDataFound';
import PageTitle from 'components/PageTitle';
import DUMMY_PROPOSITIONS from './dummyData';

function Preposition() {
  return (
    <div className="preposition mt-12 mb-20 px-4 xl:px-0">
      <div className="container">
        <PageTitle>
          My Propositions
          <span className="ml-4 text-red-400 text-5xl font-semibold">{DUMMY_PROPOSITIONS.length}</span>
        </PageTitle>
        {DUMMY_PROPOSITIONS.length === 0 && <NoDataFound />}
        {DUMMY_PROPOSITIONS.map((item) => (
          <Proposition
            key={item.display_name}
            display_name={item.display_name}
            collection_name={item.collection_name}
            last_activity={item.last_activity}
            activity_history={item.activity_history}
          />
        ))}
      </div>
    </div>
  );
}

export default Preposition;
