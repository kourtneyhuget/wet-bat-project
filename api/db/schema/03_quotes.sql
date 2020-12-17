DROP TABLE IF EXISTS quotes CASCADE;

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  departure_location VARCHAR(3) NOT NULL,
  destination_location VARCHAR(3) NOT NULL,
  depart_date DATE NOT NULL,
  return_date DATE NOT NULL,
  people NUMERIC NOT NULL,
  transportation TEXT NOT NULL,
  price NUMERIC,
  is_converted BOOLEAN DEFAULT FALSE
);