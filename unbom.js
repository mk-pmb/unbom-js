/* -*- tab-width: 2 -*- */
'use strict';

function unbom(x) {
  if (!x) { return x; }
  if (!x.slice) { return x; }
  if (x.slice(0, 1) === '\uFEFF') { return x.slice(1); }
  if (x.slice(0, 3).toString('utf8') === '\uFEFF') { return x.slice(3); }
  return x;
}

module.exports = unbom;
