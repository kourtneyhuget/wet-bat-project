DROP TABLE IF EXISTS quote_entries CASCADE;

CREATE TABLE quote_entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  departure TEXT NOT NULL,
  destination TEXT NOT NULL,
  depart DATE NOT NULL,
  return DATE NOT NULL,
  people NUMERIC NOT NULL,
  transportation TEXT NOT NULL,
  name TEXT NOT NULL,
  phone BIGINT NOT NULL,
  price INTEGER
);