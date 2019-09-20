import React from 'react';
import { Input } from 'antd';
import { useFetch } from './useFetch';
import UserCard from '../UserCard';

const Index = (props) => {
  const [value, onChange] = useFetch(
    (e) => {
      if (e && e.target && e.target.value) {
        return e.target.value;
      } else {
        return undefined;
      }
    }, {
      debounce: 500
    }
  );
  const data = value;
  return (
    <div>
      <Input onChange={onChange} placeholder="github username" style={{marginBottom: 18}} />
      {data && <UserCard {...data} />}
    </div>
  )
}

export default Index;