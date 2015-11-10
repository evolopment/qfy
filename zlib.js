/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var qfy = require('./lib/qfy-common');

qfy.module(process, {
    functions: ['deflate', 'deflateRaw', 'gzip', 'gunzip', 'inflate', 'inflateRaw', 'unzip']
}, exports);