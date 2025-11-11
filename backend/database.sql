CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price NUMERIC,
  description TEXT
);

INSERT INTO products (name, price, description) VALUES
('Laptop', 3000, 'High performance laptop'),
('Phone', 1500, 'Smartphone with great camera'),
('Headphones', 250, 'Wireless headphones');
