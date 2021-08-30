'use strict';
const utils = require('pouchdb-utils');
const sqltomango = require('sqltomango');

exports.sql = utils.toPromise(function (query, callback) {
	if (typeof query !== 'string') {
		throw('query must be a string');
	}

  const cq = sqltomango.parse(query);
  if (Object.keys(cq).length === 0 || !cq.selector) {
		cq.selector = {};
	}

	return this.find(cq, callback);
});

if (typeof window !== 'undefined' && window.PouchDB) {
	window.PouchDB.plugin(exports);
}