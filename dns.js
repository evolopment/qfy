/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var dns = require('dns');
var qfy = require('./lib/qfy-common');

qfy.module(dns, {
    functions: [
        'lookup', 'lookupService',
        'resolve', 'resolve4', 'resolve6',
        'resolveMx', 'resolveTxt', 'resolveSrv', 'resolveSoa', 'resolveNs', 'resolveCname',
        'reverse'
    ]
}, exports);

