import React, { useState, useCallback } from 'react';
import { useObservable } from 'rxjs-hooks';
import { tap, map, debounceTime, switchMap, filter } from 'rxjs/operators';
import { getUser } from './api';

const codeMsg = {
  '0': 'not yet',
  '1': 'loading',
  '2': 'done',
  '-1': 'error'
}

const useFetch = () => {
  const [code, setCode] = useState(0);
  const [payload, setPayload] = useState(undefined);
  const data = useObservable(input$ => 
    input$.pipe(
      map(arr => arr[0]),
      debounceTime(1000),
      filter(value => !!value),
      switchMap(async (value) => {
        setCode(1);
        const res = await getUser(value);
        let data = await res.json();
        if (res.ok) {
          setCode(2);
        } else {
          data = {
            status: res.status,
            response: data,
          };
          setCode(-1);
        }
        return data;
      }),
      // tap(console.info),
    ),
    undefined,
    [payload]
  );
  
  const action = useCallback((payload) => {
    setPayload(payload);
  }, []);


  return [{
    data,
    status: {
      code,
      loading: code === 1,
      msg: codeMsg[code],
      t: Date.now()
    }
  }, action];
}

export default useFetch;