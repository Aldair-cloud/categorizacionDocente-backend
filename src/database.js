import { Pool } from 'pg'


export const pool = new Pool({
    connectionString: process.env.d8lsh9t9v2vaej,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-54-163-97-228.compute-1.amazonaws.com',
    user: 'hizfkepgjzxked',
    password: '255c33e58f18464387569bc393ed086687898ad8abe09e6abfa9bf7c24daf38f',
    database: 'd8lsh9t9v2vaej',
    port: 5432,
    
});