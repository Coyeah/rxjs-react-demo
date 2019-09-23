import React from 'react';
import { componentFromStream } from 'recompose';
import { of, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  catchError,
  debounceTime,
  filter,
  map,
  pluck,
  switchMap
} from 'rxjs/operators';
import UserCard from '../../components/UserCard';
import Error from '../../components/Error';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream(prop$ => {
  const loading$ = of(<h3>Loading...</h3>);
  const getUser$ = prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(formatUrl),
    switchMap(url => 
      merge(
        loading$,
        ajax(url).pipe(
          pluck('response'),
          map(UserCard),
          catchError(error => of(<Error {...error} />))
        )
      )
    )
  );
  return getUser$;
});

export default User;