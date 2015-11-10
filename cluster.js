/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var cluster = require('cluster');
var qfy = require('./lib/qfy-common');

qfy.module(cluster, {
    functions: [
        'disconnect'
    ]
}, exports);
