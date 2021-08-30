# pouchdb-sql

The *pouchdb-sql* project is a [PouchDB](https://pouchdb.com) plugin that allows SQL queries to be performed against PouchDB databases. This mirrors the functionality found in the [pouchdb-sql](https://www.npmjs.com/package/pouchdb-sql) library.

It requires the [pouchdb-find](https://www.npmjs.com/package/@ldavidsp/pouchdb-sql) plugin.

## Installation

```
npm install @ldavidsp/pouchdb-sql
```

And then attach it to the `PouchDB` object:

```js
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
PouchDB.plugin(require('@ldavidsp/pouchdb-sql'));
```

## Usage

Connect to your database as normal:

```
var db = new PouchDB('mydb');
```

and then query with SQL:

```
var q = "SELECT name, cost FROM animals WHERE collection = 'cats' ORDER BY name DESC LIMIT 50";
db.sql(q).then(console.log);
```

Other example queries:

```sql
-- fetch all fields
SELECT * FROM animalsdb

-- fetch selected fields
SELECT name, colour, price FROM animalsdb

-- fetch data with WHERE clause
SELECT name FROM animalsdb WHERE colour = 'tabby'

-- fetch data with a more complex WHERE clause
SELECT name FROM animalsdb WHERE type!='cat' OR (price > 500 AND price < 1000)

-- limit the number of items returned
SELECT name FROM animalsdb LIMIT 10

-- limit the number of items and skip rows
SELECT name FROM animalsdb LIMIT 20,10

-- ordering ascending
SELECT name FROM animalsdb ORDER BY price

-- ordering descending
SELECT name FROM animalsdb ORDER BY price DESC

-- multiple field ordering descending
SELECT name FROM animalsdb ORDER BY type,price

-- all together
SELECT name,colour,price FROM animalsdb WHERE type!='cat' OR (price > 500 AND price < 1000) ORDER BY type, price LIMIT 20,10
```
