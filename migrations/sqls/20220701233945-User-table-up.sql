CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    current_balance VARCHAR(255)
);

CREATE TABLE Transfers (
    id SERIAL PRIMARY KEY,
    sender VARCHAR(255),
    receiver VARCHAR(255),
    balance VARCHAR(255)
);