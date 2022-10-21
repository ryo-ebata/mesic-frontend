import { FC, useState, useEffect } from 'react';
import { FetchSearchData } from '../../pages/api/fetchData';

export const Body = () => {
  useEffect(() => {
    FetchSearchData().then((res) => {
      console.log(res)
    })
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  )
}
