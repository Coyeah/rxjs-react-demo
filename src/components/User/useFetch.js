import React, { useState, useEffect, useCallback } from 'react';

import { BehaviorSubject, of } from 'rxjs';
import { debounceTime, throttleTime, switchMap } from 'rxjs/operators';
import 'whatwg-fetch';

export const useFetch = (translation, options = {}) => {
  const [value, setValue] = useState(undefined);
  const [stream] = useState(new BehaviorSubject);
  const { debounce = 0, throttle = 0 } = options;
  useEffect(() => {
    stream.pipe(
      switchMap(e => {
        if (translation) {
          return of(translation(e));
        } else {
          return of(e);
        }
      }),
      debounceTime(debounce),
      throttleTime(throttle),
    ).subscribe(async (value) => {
      if (!!value) {
        const data = await fetch(`https://api.github.com/users/${value}`)
          .then(res => res.json());
        setValue(data);
      }
    });
  }, []);

  const handle = useCallback((value) => {
    stream.next(value)
  }, [stream]);
  return [value, handle];
}
