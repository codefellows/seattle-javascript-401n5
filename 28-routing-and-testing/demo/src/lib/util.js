import superagent from 'superagent';

export const fetchData = (url) => {
  return getCache(url)
    .then( data => data )
    .catch( err => {
      return superagent.get(url)
        .then(result => {
          setCache(url, result.body);
          return result.body;
        })
        .catch(console.error);
    })
    .then(data => data);
};

const getCache = (key) => {
  return new Promise( (resolve,reject) => {
    let data = localStorage.getItem(key);
    if(data) { resolve(JSON.parse(data)); }
    else { reject('Invalid Key'); }
  });
};

const setCache = (key,data) => {
  return new Promise( (resolve,reject) => {
    let safeValue = typeof data === 'string' ? data : JSON.stringify(data);
    localStorage.setItem(key,safeValue);
    resolve();
  });
};

