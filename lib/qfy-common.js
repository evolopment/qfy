/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var Q = require('q');

/*
Takes a module, a specification of items and the export point to create alternative (qfied) versions of those items.
*/

exports.module = function(module, spec, xp) {

    // Simple functions with callbacks can be "denodified"
    spec.functions.forEach(function(fnName) {
        xp[fnName] = Q.denodeify(module[fnName]);
    });

};