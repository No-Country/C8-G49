"use strict";
const dotenv = require('dotenv').config();
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'g49Secret'
};
