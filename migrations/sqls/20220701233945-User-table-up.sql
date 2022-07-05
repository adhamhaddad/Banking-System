CREATE TABLE Customers (
    id INTEGER,
    username VARCHAR(255),
    email VARCHAR(255),
    current_balance INTEGER
);

CREATE TABLE Transfers (
    id SERIAL PRIMARY KEY
);