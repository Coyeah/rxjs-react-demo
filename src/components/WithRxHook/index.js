import React, { useState } from 'react';
import { Input } from 'antd';
import { useEventCallback } from 'rxjs-hooks';
import { startWith, map } from 'rxjs/operators';
import User from './User';


const WithRxHook = () => {
  const [handler, value] = useEventCallback((event$) => 
    event$.pipe(
      map(e => e.target.value),
      startWith(''),
    )
  )
  return (
    <div>
      <Input
        value={value}
        onChange={handler}
        placeholder="github username"
        style={{marginBottom: 18}}
      />
      <User user={value} />
    </div>
  )
}

export default WithRxHook;