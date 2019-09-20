import React from 'react';
import { useObservable } from 'rxjs-hooks';
import { of, merge } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, pluck, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import UserCard from '../UserCard';
import Error from '../Error';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = ({ user }) => {
  const loading$ = of(<h3>Loading...</h3>);
  const Component = useObservable((input$) => 
    input$.pipe(
      debounceTime(1000),
      map(value => value[0]),
      // tap(console.warn),
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
    ),
    null,
    [user]
  );
  return (
    <>
      {Component}
    </>
  );
};

export default User;