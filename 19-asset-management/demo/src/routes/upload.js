'use strict';

import express from 'express';
import multer from 'multer';
import auth from '../auth/middleware.js';

import s3 from '../lib/s3.js';

const upload = multer({dest: `${__dirname}/../tmp`});

const uploadRouter = express.Router();

uploadRouter.post('/upload', auth, upload.any(), (req, res, next) => {

  if(!req.body.title || req.files.length > 1 || req.files[0].fieldname !== 'img')
    return next('title or sample was not provided');

  let file = req.files[0];
  let key = `${file.filename}.${file.originalname}`;

  console.log('body', req.body);
  console.log('files', req.files);
  console.log(key);

  return s3.upload(file.path, key)
    .then(url => {
      let output = {
        url: url,
      };
      res.send(output);
    })
    .catch(next);

  res.sendStatus(418);
  
});

export default uploadRouter;