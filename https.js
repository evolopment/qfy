/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var https = require('https');
var qfy = require('./lib/qfy-common');

qfy.module(https, {
    functions: ['request', 'get']
}, exports);