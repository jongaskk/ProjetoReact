import { sql } from './sql.js'

await sql `
    CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY
        name TEXT NOT NULL
        email TEXTO NOT NULL UNIQUE
        password TEXT NOT NULL
    );
`