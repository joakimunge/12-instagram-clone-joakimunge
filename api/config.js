require('dotenv').config();

module.exports = {

    'secret': `${process.env.SECRET}`,
    'database': `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`

};