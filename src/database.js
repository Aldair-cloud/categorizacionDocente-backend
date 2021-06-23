import { Pool } from 'pg'

// const URI = "http://localhost:5050/"

export const pool = new Pool({
    connectionString: process.env.d9cgcpfsnv6gql,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-35-168-145-180.compute-1.amazonaws.com',
    user: 'frwhkolmedlggt',
    password: '8368e61912d72dedb6a8b0b9e64cdec77505d322ee0fa1399b92bb6918d85a4c',
    database: 'd9cgcpfsnv6gql',
    port: 5432,
    
});
// pool.connect(URI)
//     .then(db=>{
//         console.log("CONECTADO !");
//     }).catch(error=>{
//         console.log(error);
//     })