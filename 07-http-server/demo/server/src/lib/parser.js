'use strict';

// First Party Modules
const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

  return new Promise( (resolve,reject) => {

    if( !(req || req.url) ) { reject('Invalid Request Object. Cannot Parse'); }

    console.log('pre', req.url);
    req.url = url.parse(req.url);
    console.log('post', req.url);

    req.url.query = queryString.parse(req.url.query);

    console.log('url.query', req.url.query);
    
    if(! req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }

    let text = '';

    req.on('data', (buffer) => {
      text += buffer.toString();
    });

    req.on('end', () => {
      try{
        req.body = JSON.parse(text);
        resolve(req);
      }
      catch(err) { reject(err); }

    });

    req.on('err', reject);

  });

};
