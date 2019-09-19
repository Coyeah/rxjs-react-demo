import React from 'react';
import { Input } from 'antd';
import { useFetch } from './useFetch';

const User = (props) => {
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
      {data && (
        <>
          <p><b>github name</b>: {data.name}</p>
          <p><b>github location</b>: {data.html_url}</p>
        </>
      )}
      <Input onChange={onChange} placeholder="github username" />
    </div>
  )
}

export default User;