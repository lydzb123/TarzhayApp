-- DROP DATABASE sdc CASCADE;

CREATE DATABASE sdc;

\c sdc;

CREATE TABLE promos (
  id SERIAL PRIMARY KEY,
  main_text VARCHAR(160),
  sub_text VARCHAR(160),
  link_text VARCHAR(160)
);


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  brand VARCHAR(30) NOT NULL,
  breadcrumbs VARCHAR(30) ARRAY[3],
  price_reg NUMERIC(7,2),
  price_discount NUMERIC(7,2),
  sale_end DATE NOT NULL DEFAULT CURRENT_DATE,
  total_reviews smallint,
  total_questions smallint,
  promo_id INT,

  CONSTRAINT fk_promo
    FOREIGN KEY(promo_id)
      REFERENCES promos(id)
  );



CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  product_id INT,
  photo_urls text[],

  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES products(id)
);

CREATE INDEX image_index ON images (product_id);


CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  product_id INT,
  five_star_count INT,
  four_star_count INT,
  three_star_count INT,
  two_star_count INT,
  one_star_count INT,

  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES products(id)
);

CREATE INDEX rating_index ON ratings (product_id);


SELECT CURRENT_TIMESTAMP;
COPY promos
FROM '/tmp/promos.csv'
DELIMITER ',' CSV HEADER;

SELECT CURRENT_TIMESTAMP;
COPY products
FROM '/tmp/products.csv'
DELIMITER ',' CSV HEADER;

SELECT CURRENT_TIMESTAMP;
COPY images
FROM '/tmp/images.csv'
DELIMITER ',' CSV HEADER;

SELECT CURRENT_TIMESTAMP;
COPY ratings
FROM '/tmp/ratings.csv'
DELIMITER ',' CSV HEADER;

SELECT CURRENT_TIMESTAMP;



