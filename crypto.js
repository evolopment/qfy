/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var crypto = require('crypto');
var qfy = require('./lib/qfy-common');

qfy.module(crypto, {
    functions: [
        'pbkdf2', 'randomBytes'
    ]
}, exports);
