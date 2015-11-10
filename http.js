/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var http = require('http');
var qfy = require('./lib/qfy-common');

qfy.module(http, {
    functions: ['request', 'get']
}, exports);