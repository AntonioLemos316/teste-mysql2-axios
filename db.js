import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'api_mysql2_axios'
})

export default pool