DROP DATABASE sdc CASCADE;
CREATE DATABASE sdc;

\c sdc;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  brand VARCHAR(30) NOT NULL,
  breadcrumbs VARCHAR(30) ARRAY[3],
  price_reg NUMERIC(7,2),
  price_discount NUMERIC(7,2),
  sale_end DATE NOT NULL DEFAULT CURRENT_DATE,
  total_reviews smallint,
  total_questions smallint
  );


CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  product_id INT,
  photo_url VARCHAR,

  CONSTRAINT fk_product
  FOREIGN KEY(product_id)
  REFERENCES products(id)
);


-- TOEDIT: instead of generating many promorecords, products should have a promoforeignkey
CREATE TABLE promos (
  id SERIAL PRIMARY KEY,
  product_id INT,
  main_text VARCHAR(160),
  sub_text VARCHAR(160),
  link_text VARCHAR(160),

  CONSTRAINT fk_product
  FOREIGN KEY(product_id)
  REFERENCES products(id)
);


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


COPY products FROM '/Users/lydia/HR/hrsjo2-FEC-product-overview/products.csv' DELIMITER ',' CSV HEADER;
COPY promos FROM '/Users/lydia/HR/hrsjo2-FEC-product-overview/promos.csv' DELIMITER ',' CSV HEADER;
COPY images FROM '/Users/lydia/HR/hrsjo2-FEC-product-overview/images.csv' DELIMITER ',' CSV HEADER;
COPY ratings FROM '/Users/lydia/HR/hrsjo2-FEC-product-overview/ratings.csv' DELIMITER ',' CSV HEADER;



