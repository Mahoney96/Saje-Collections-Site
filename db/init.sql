
 --To display all data in database--
SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE' 

-- 1st Two Tables created for Database --

-- USER DB -- 

CREATE TABLE users (
    user_id Serial_PRIMARY_KEY,
    user_name VARCHAR(250),
    email VARCHAR(200),
    password VARCHAR(250)
);

CREATE TABLE products (
    product_id SERIAL_PRIMARY_KEY,
    product_name VARCHAR(300),
    product_description VARCHAR(MAX),
    product_price INTEGER,
    product_inventory BOOLEAN,
    product_collection VARCHAR(250)
);

CREATE TABLE new_line (
    new_product_id SERIAL_PRIMARY_KEY,
    product_name VARCHAR(300),
    product_description VARCHAR(MAX),
    product_price INTEGER,
    product_inventory BOOLEAN,
    product_collection VARCHAR(250)
);
