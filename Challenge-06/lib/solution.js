'use strict';

const solution = module.exports = {};

solution.loop = (n,cb) => {
  if (typeof n !== 'number' || typeof cb !== 'function') return null;
  cb(n);
  if (!n) return;
  n--;
  solution.loop(n,cb);
};