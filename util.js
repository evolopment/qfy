/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var util = require('util');
var qfy = require('./lib/qfy-common');

qfy.module(util, {
    functions: ['pump']
}, exports);