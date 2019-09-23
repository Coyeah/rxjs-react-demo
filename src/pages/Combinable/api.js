import 'whatwg-fetch';

export const getUser = user => {
  return fetch(`https://api.github.com/users/${user}`).then(res => res);
}