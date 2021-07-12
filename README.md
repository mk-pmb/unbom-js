
<!--#echo json="package.json" key="name" underline="=" -->
unbom
=====
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Strip a BOM (UTF-8 Byte Order Mark) from a string or Buffer.
<!--/#echo -->



API
---

This module exports one function:

### unbom(x)

`x` is the string or Buffer that might start with a BOM.
If it does, returns the remainder of `x`.
Otherwise, returns the original `x`.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
