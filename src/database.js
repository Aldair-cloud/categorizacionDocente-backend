import { Pool } from 'pg'


export const pool = new Pool({
    connectionString: process.env.d59unspri9rdam    ,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-44-194-112-166.compute-1.amazonaws.com',
    user: 'cizpnvnvoxjpyi',
    password: 'b4d45199dabe8ce1c9b249108d4297b51db4bbb5e873fc591f72016ba1652a8a',
    database: 'd59unspri9rdam',
    port: 5432,
    
});
