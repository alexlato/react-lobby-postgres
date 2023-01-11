--\c into my_database

CREATE extension citext;
CREATE TABLE users(
    userid VARCHAR(30) NOT NULL UNIQUE,
    email citext NOT NULL UNIQUE,
    passworddigest VARCHAR(25) NOT NULL
    );

CREATE TABLE userscolors(
    userid VARCHAR(255) NOT NULL,
    id int,
    color VARCHAR(255) NOT NULL
    );

