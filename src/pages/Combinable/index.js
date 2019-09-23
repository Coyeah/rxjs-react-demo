import React from 'react';
import { Input } from 'antd';
import useFetch from './useFetch';
import UserCard from '../../components/UserCard';
import Error from '../../components/Error';

const Combinable = (props) => {
  const [{ data, status: { loading, code } }, action] = useFetch();
  const component = () => {
    if (code === 0 || !data) return null;
    if (loading) return (<h3>Loading...</h3>);
    if (code === -1) return (<Error {...data} />);
    return (<UserCard {...data} />);
  }
  return (
    <div>
      <Input
        onChange={e => action(e.target.value)}
        placeholder="github username"
        style={{marginBottom: 18}}
      />
      {component()}
    </div>
  );
};

export default Combinable;