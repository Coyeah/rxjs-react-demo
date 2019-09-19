import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, delay, tap } from 'rxjs/operators';

// export const request = async (url) => {
//   const data$ = fromFetch(url).pipe(
//     switchMap(response => {
//       if (response.ok) {
//         // OK return data
//         return response.json();
//       } else {
//         // Server is returning a status requiring the client to try something else.
//         return of({ error: true, message: `Error ${response.status}` });
//       }
//     }),
//     catchError(err => {
//       // Network or other error, handle appropriately
//       console.error(err);
//       return of({ error: true, message: err.message })
//     })
//   );
  
//   await data$.subscribe({
//     next: result => console.log(result),
//   });
// };
