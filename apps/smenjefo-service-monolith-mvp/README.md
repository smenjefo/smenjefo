# Monolith MVP

This is http server responsible for the business logic of the entire application. Was created only for MVP phase.

## General description

Based on Nest.js framework and made in Rest style, a detailed description of endpoints can be found in "openapi" folder.

There are three main modules:

- profile
- fight
- fight-registration

The area of responsibility of these modules is explained by their names.

## Database

This server uses MySQL database using the TypeORM library of Nest.js

Connection credentials defined by env variables:

```env
MONOLITH_MVP_MYSQL_HOST
MONOLITH_MVP_MYSQL_PORT
MONOLITH_MVP_MYSQL_DB_USER
MONOLITH_MVP_MYSQL_DB_PASS
MONOLITH_MVP_MYSQL_DB_NAME
```