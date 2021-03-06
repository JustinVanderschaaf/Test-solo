
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255)
);

CREATE TABLE "project" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "category_id" INT REFERENCES "category",
    "date" date,
    "budget" INTEGER,
    "title" VARCHAR (300),
    "user_notes" VARCHAR(20000)
);

CREATE TABLE "image" (
    "id" SERIAL PRIMARY KEY,
    "project_id" INT REFERENCES "project",
    "url" VARCHAR(500),
    "before_img" BOOLEAN,
    "subtitle" VARCHAR(300)
);

CREATE TABLE "materials" (
    "id" SERIAL PRIMARY KEY,
    "project_id" INT REFERENCES "project",
    "material" VARCHAR(300),
    "qty" INTEGER,
    "cost" DECIMAL,
    "on_hand" BOOLEAN,
    "location" VARCHAR(300)
);

