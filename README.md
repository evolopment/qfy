Qfy
===

I like promises. They make asynchronous code *a lot* more readable. However node.js uses a different convention for
asynchronous calls, taking a callback function whose first parameter is an error parameter. That makes mixin node.js
calls and code with promises awkward.
 
[Q](https://github.com/kriskowal/q) (a promises library) contains functions that transform node.js convention functions. 
Qfy just has that functions applied to the standard node.js API in order to have them available.

Qfy only exports the asynchronous functions. It's divided in modules with the same name as their node.js equivalents.
E.g. in order to use que *qfied* readFile function, you could do:

```
var qfs = require('@evolopment/qfy/fs');

qfs.readFile('hi','utf8').then(
    function(data) {
        // whatever...
    },
    function(err) {
        // error treatmen
    }
).then( /* keep on processing... */);
```

The goals are:
- Do not interfere with existing calls (in order to allow qfy to be introduced slowly into an existing project).
- Cover the entire API
- All methods are tested
 

The roadmap of Qfy is:

- *0.1.x*: Adding support to the node.js API. It will be 0.1.x while it is uncompleted, although they will be some testing in progress.
- *0.2.x*: Adding testing to the node.js API. It will be 0.2.x while testing is uncompleted.
- *1.0.x*: Full API support (4.x LTS) for direct calls (i.e. all asynchronous functions covered).
- *1.1.x*: Full API support (4.x LTS) for indirect calls (i.e. call that return objects that may contain asynchronous functions, etc.)
- *1.2.x*: Add 5.x Stable support
 
Current status:
 
- *assert*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *buffer*:    
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *child_process*:
    - *4.x*:
        - Direct: exec, execFile
            - ☑ Implemented
            - ☐ Tested
        - Indirect: ChildProcess.send, spawn (->ChildProcess), fork (->ChildProcess)
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
- *cluster*:
    - *4.x*:
        - Direct: disconnect
            - ☑ Implemented
            - ☐ Tested
        - Indirect: Worker.send, fork (->Worker), worker (is a Worker)
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
- *console*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls) 
    - *5.x*: ☐ Not reviewed
- *crypto*:
    - *4.x*:
        - Direct: pbkdf2, randomBytes
            - ☑ Implemented
            - ☐ Tested
        - Indirect: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *dns*:
    - *4.x*:
        - Direct: lookup, lookupService, resolve, resolve4, resolve6, resolveMx. resolveTxt, resolveSrv, resolveSoa, resolveNs, resolveCname, reverse
            - ☑ Implemented
            - ☐ Tested        
        - Indirect: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *domain*: [Deprecated]
    - *4.x*:
        - Direct: ☑ N/A (doesn't contain asynchronous calls)
        - Indirect: Domain.bind, Domain.intercept, create (->Domain)
- *events*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls) 
    - *5.x*: ☐ Not reviewed
- *fs*:
    - *4.x*:
        - Direct: rename, ftruncate, truncate, chown, fchown, lchown, chmod, fchmod, lchmod, stat, lstat, fstat,
                     link, symlink, readlink, realpath, unlink, rmdir, mkdir, readdir, close, open, utimes, futimes,
                     fsync, write, write (2 versions), read, readFile, writeFile, appendFile, exists, access
            - ☑ *Implemented*
            - ☐ Testing
        - Indirect: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *globals*:
    - *4.x*:
        - Direct: ☑ N/A (doesn't contain asynchronous calls). The setTimeout and setInmediate functions where considered
          but setTimeout is quite equivalent to Q.delay() and setInmediate doesn't fit into Q, as is expected to run
          in the same event loop run.
        - Indirect: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *http*:
    - *4.x*:
        - Direct: request, get
            - ☑ Implemented
            - ☐ Tested
        - Indirect: Server.listen (3 versions), Server.close, Server.request event (2nd param is response), !Server,timeout (may be invoked several times), 
                     ServerResponse.write, ServerResponse.end, ClientRequest.write, ClientRequest.end, 
                     createServer (->Server), createClient (->ClientRequest), request (->ClientRequest)
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
- *https*:
    - *4.x*:
        - Direct: request, get
            - ☑ Implemented
            - ☐ Tested
        - Indirect: Server (inherits tls.Server & events from http.Server), createServer (->Server), request, ?? (module docs are somewhat confusing)
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed

- *net*:
    - *4.x*:
        - Direct: ☑ N/A (doesn't contain asynchronous calls)
        - Indirect: createServer (->Server), (connect,createConnection) (3 versions) (->Socket),
                     Server.listen (4 versions), Server.close, Server.getConnections, 
                     Socket new (->Socket), Socket.connect?, Socket.write, setTimeout? 
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
- *os*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *path*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *process*:
    - *4.x*: 
        - Direct: send. nextTick was considered, but as in timeout or setInmediate, their semantics are too related
          to the node.js event loop and wrapping it with Q could be confusing at least.
            - ☑ Implemented
            - ☐ Tested
        - Indirect: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *punycode*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *querystring*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *readline*:
    - *4.x*: 
        - Direct: ☑ N/A (doesn't contain asynchronous calls)
        - Indirect: createInterface (->Interface), Interface.question
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
- *repl*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *stream*:
    - *4.x*: 
        - Direct: ☑ N/A (doesn't contain asynchronous calls)
        - Indirect: Writeable.write, Duplex (inherits Writeable), Transform (inherits Duplex -> Writeable),
                     news?
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
- *string_decoder*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *tls*:
    - *4.x*:
        - Direct: connect (2 versions)
            - ☑ Implemented
            - ☐ Tested
        - Indirect: Server.listen, Server.close, TLSSocket.renegotiate
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
- *tty*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *dgram* (UDP/Datagram):
    - *4.x*:
        - Direct: createSocket (2 versions)
            - ☑ Implemented
            - ☐ Tested
        - Indirect: Socket.send, Socket.bind (2 versions), Socket.close
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
- *url*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *util*:
    - *4.x*:
        - Direct: pump
            - ☑ Implemented
            - ☐ Tested
        - Indirect: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *v8*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *vm*:
    - *4.x*: ☑ N/A (doesn't contain asynchronous calls)
    - *5.x*: ☐ Not reviewed
- *zlib*:
        - Direct: deflate, deflateRaw, gzip, gunzip, inflate, inflateRaw, unzip
            - ☑ Implemented
            - ☐ Tested
        - Indirect: Zlib.flush, Zlib.params 
            - ☑ Reviewed 
            - ☐ Implemented
            - ☐ Tested
    - *5.x*: ☐ Not reviewed
    
