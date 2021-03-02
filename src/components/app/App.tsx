import React from 'react';
import { Pagination } from '../pagination/pagination';
import classes from './app.module.scss';

export const App = () => {
  const handleChange = (page: number): void => {
    console.log(`Current page ${page}`);
  };
  return (
    <>
      <Pagination
        activePage={1}
        totalItems={20}
        perPage={5}
        classes={{ btn: classes.btn, activeBtn: classes.activeBtn }}
        withActions={true}
        onChange={handleChange}
      />
      <Pagination activePage={1} totalItems={30} perPage={7} withActions={false} onChange={handleChange} />
    </>
  );
};

export default App;
