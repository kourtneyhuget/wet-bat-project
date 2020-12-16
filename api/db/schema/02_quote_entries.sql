DROP TABLE IF EXISTS quote_entries CASCADE;

CREATE TABLE quote_entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  departure_location TEXT NOT NULL,
  destination_location TEXT NOT NULL,
  depart_date DATE NOT NULL,
  return_date DATE NOT NULL,
  people NUMERIC NOT NULL,
  transportation TEXT NOT NULL,
  name TEXT NOT NULL,
  phone_number BIGINT NOT NULL,
  price NUMERIC DEFAULT 1000
);