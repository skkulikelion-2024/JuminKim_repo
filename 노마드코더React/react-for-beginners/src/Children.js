import React, { useContext } from 'react';
import { AppContext } from './App';

function Children() {
  const user = useContext(AppContext);

  return (
    <div>
      <h3>
        {user.name}, {user.job}
      </h3>
    </div>
  );
}

export default Children;
