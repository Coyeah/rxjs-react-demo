import React from 'react';
import { Input } from 'antd';
import '../../utils/observableConfig';
import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import User from './User';


const Index = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(e => e.target.value),
    startWith('')
  );

  return combineLatest(prop$, value$).pipe(
    // tap(console.info),
    map(([props, values]) => {
      return (
        <div>
          <Input
            onChange={handler}
            placeholder="github username"
            style={{marginBottom: 18}}
          />
          <User user={values} />
        </div>
      )
    })
  )


});

export default Index;