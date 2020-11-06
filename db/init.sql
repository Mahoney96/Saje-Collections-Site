
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
    id SERIAL_PRIMARY_KEY,
    name VARCHAR(300),
    description VARCHAR(MAX),
    price DECIMAL(6,2),
    inventory INTEGER,
    collection VARCHAR(250)
);

CREATE TABLE new_line (
    new_product_id SERIAL_PRIMARY_KEY,
    name VARCHAR(300),
    description VARCHAR(MAX),
    price DECIMAL(6,2),
    inventory INTEGER,
    collection VARCHAR(250)
);


INSERT INTO products
(id, name, description, 
DECIMAL, inventory, collection)
VALUES
(1, 'Saje Tote Bag', 'Saje Tote Bag, 100% Cotton Fiber Canvas.', 
    18.00, 25, 'first'),

(2, 'Woven Seed Bead Earrings', 'Hammered Brass Jewelry, Fringe Earrings. Rare Find, 
        Details: Handmade item.
        Materials: Brass
        Style: Boho & hippie
        Location: Earlobe
        Drop length: 1.7 Inches; Width: 1.25 Inches',  
    49.00, 1, 'first'),

(3, 'Bohemian Brass Turquoise Earrings, December Birthstone', 
    'Bohemian Brass Turquoise Earrings, with December Birthstone. 
        Details: Handmade item.
        Materials: Brass, Gold, Stone
        Gemstone: Turquoise
        Style: Boho & hippie
        Location: Earlobe
        Drop length: 2.65 Inches; Width: 1.25 Inches', 
    49.00, 1, 'first'),


(4, 'Mermaid Necklace with Freshwater Pear', 'Mermaid Necklace with Freshwater Pearl. Antiqued Gold Charm Necklace, 14k   Gold Filled Chain.
        Details: Handmade item.
        Materials: Gold, Pewter
        Adjustable length: No
        Gemstone: Pearl
        Style: Boho & hippie
        Chain style: Cable
        Closure: Spring ring
        Made to Order', 
    49.00, 3, 'first'),

(5, 'Aquamarine Necklace', '14k Gold Filled Necklace. Sterling Silver Necklace. Birthstone Jewelry.
        Handmade item.
        Materials: Stone
        Adjustable length: No
        Gemstone: Aquamarine
        Style: Minimalist
        Chain style: Cable
        Closure: Spring ring
        Made to Order', 
    36.00, 2, 'first'),

(6, 'Bird Earrings', ' Emerald Bird Earrings. Birthstone Jewelry. Brass Jewelry.
        Handmade item
        Materials: Stone
        Gemstone: Emerald
        Style: Boho & hippie
        Location: Earlobe
        Drop length: 2.2 Inches', 
    45.00, 1, 'first'),

(7, 'Honey Bee Coin Necklace', 'Honey Bee Coin Necklace, Gold Filled Jewelry. Rope Chain with Toggle Necklace. 
        Details: Handmade item.
        Materials: Pewter
        Closure: Toggle
        Chain style: Rope
        Style: Boho & hippie', 
    45.00, 3, 'first'),

(8, 'Turquoise Brass Earrings', 'Turquoise Brass Earrings. Boho Jewelry. Geometric Jewelry.
        Details: Handmade item.
        Materials: Stone
        Gemstone: Turquoise
        Style: Boho & hippie
        Location: Earlobe
        Drop length: 2.5 Inches', 
    40.00, 2, 'first'),

(9, 'Brass Sunstone Earrings', 'Brass Sunstone Earrings. Boho Jewelry. Statement Earrings.
        Details: Handmade item.
        Materials: Brass, Gold, Stone
        Style: Boho & hippie
        Location: Earlobe
        Drop length: 2.2 Inches', 
    42, 1, 'first'),

(10, 'name', 'Hand Earrings with Emerald. Antiqued Gold Charm. Unique Jewelry. Gold Boho Earrings.
        Details: Handmade item.
        Materials: Stone
        Gemstone: Emerald
        Style: Boho & hippie
        Location: Earlobe
        Drop length: 2.2 Inches
        Made to Order', 
    47.00, 3, 'first');



