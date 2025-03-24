import mysql from 'mysql2';

 const conn = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'buyAndSell'
});

export const db = {
    connect: () => conn.connect(),
    query: (queryString, escapeValues) =>
        new Promise((resolve, reject) => {
            conn.query(queryString, escapeValues, (error, result, fields) => {
                if (error) reject(error);
                resolve({ result, fields });
            })
        }),
    end: () => conn.end(),
}