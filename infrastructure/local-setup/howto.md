# Local Database Setup

## Prerequisites

- Make sure you have Docker Desktop or similiar installed

## How to use DB

- Open a terminal and run ```docker compose up``` at the location of the ``compose.yaml`` i.e. ``./infrastructure/local-setup``
- This will start both the postgres container as well as a pgAdmin instance
- Wait for the containers to start
- Open localhost:8080 to access pgAdmin
- Create a new [connection](https://www.pgadmin.org/docs/pgadmin4/development/server_dialog.html) to the local DB, c.f. 
- Host is ``local-db``, user and password both are set to ``postgres``
- To connect externally to the DB use ``localhost:54320`` instead of ``local-db``. This only works within the Docker Compose setup not from the outside.

## Import Schema

Once the DB is setup and you are connected through pgAdmin import the schema from the test-data folder. Open the [Query tool](https://www.pgadmin.org/docs/pgadmin4/latest/query_tool.html), copy the whole file content of ``schema.sql`` and execute it. You should now see the schema and tables for InnoButler.
