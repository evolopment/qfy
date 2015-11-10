/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var cp = require('child_process');
var qfy = require('./lib/qfy-common');

qfy.module(cp, {
    functions: [
        'exec', 'execFile'
    ]
}, exports);
