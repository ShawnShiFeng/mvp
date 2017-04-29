CREATE DATABASE vocab;


USE vocab;


CREATE TABLE words (
    id int NOT NULL,
    word VARCHAR(64) UNIQUE,
    initial VARCHAR(1),
    PRIMARY KEY (id)
)

