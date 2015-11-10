/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var dgram = require('dgram');
var qfy = require('./lib/qfy-common');

qfy.module(dgram, {
    functions: ['createSocket']
}, exports);