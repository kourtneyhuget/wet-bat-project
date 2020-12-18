DROP TABLE IF EXISTS clients CASCADE;

CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone_number BIGINT NOT NULL
);