---
title: Semantic Version Ranges
---

Semantic Version Range Selectors
================================

Summary
-------

A SemVer `Range` is a set of `Comparators` that specify a set of SemVer
Versions.

A Comparator is composed of an `Operator` and a `Version`.  The set
of primitive Operators is:

* `<` Less than
* `<=` Less than or equal to
* `>` Greater than
* `>=` Greater than or equal to
* `=` Equal.  If no operator is specified, then equality is assumed,
  so this operator is optional, but _may_ be included to differentiate it
  from a SemVer Version string.

A Comparator includes a given SemVer Version string if and only if the
SemVer Version string has a precedence value greater than, less than, or
equal to the Comparator, as appropriate to the Comparator's Operator.

Additional Range forms are available for greater ergonomics, built upon
these primitive Comparators.

Introduction
------------

In a software library ecosystem, it is useful to define a specific range of
versions which is known to satisfy a dependency.

In an ideal world, where all publishers of in the ecosystem are following
the SemVer guidelines, one could simply define a single "known-good"
version of a dependency, and trust that any change to the `PATCH` or
`MINOR` version would be acceptable without additional human attention.

However, in practice, this is not always satisfactory.

- A change to the internal workings of a library may not change the public
  API, but nevertheless cause problems for users who have inadvertently
  come to depend on subtle interactions.
- A bug or security vulnerability introduced in a PATCH or MINOR update
  might only end up getting fixed in a MAJOR update, and a downstream
  consumer is unable to perform the necessary changes to adopt it.
- Different consumers of a library may have different levels of risk
  tolerance, with some preferring to adopt all new improvements, and others
  opting to only upgrade after careful deliberation, even for PATCH and
  MINOR updates.
- Pre-release versions in particular are hazardous, and should only be used
  when the consumer has explicitly opted into a pre-release series.
- SemVer is used for more than merely dependency resolution.  For example,
  a library may wish to express the versions of a platform that it is
  compatible with, and these might span multiple (but not all) MAJOR
  version numbers.

This specification aims to capture and formalize the version range
semantics in popular usage within software ecosystems in the wild that have
adopted Semantic Versioning.

Semantic Version Range Specification (SemVer Ranges)
----------------------------------------------------

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. The terms SemVer and SemVer Version refer to version strings conforming
   with the [Semantic Versioning specification
   2.0.0](https://semver.org/spec/v2.0.0.html)

1. A SemVer Range is a set of 1 or more `Comparator Sets`, joined by `||`.
   A SemVer Version String is included by the SemVer Range if it is
   included by one or more of the Comparator Sets.

1. A Comparator Set is a set of 1 or more `Comparators`, joined by 1 or
   more space characters.  (That is, `' '`, ASCII value 32.)

    1. SemVer Version strings with a PRERELEASE version MUST be excluded from a
       SemVer Comparator Set unless:

        1. The implementation has provided the user with an option to
           explicitly include PRERELEASE versions, and the user has set this
           option.

        1. One or more of the Comparators in the Comparator Set have the same
           MAJOR, MINOR, and PATCH version as the SemVer Version string being
           considered, and has a PRERELEASE version, and would normally include
           the SemVer Version string by virtue of its precedence ordering.

    1. SemVer Version strings without a PRERELEASE version are included in a
       SemVer Comparator Set if they are included by all of the Comparators in
       the Comparator Set.

1. A Comparator is an `Operator` and a `Version`.  The Comparator Version
   is a SemVer string.  The Operator is one of: `>`, `>=`, `<`, `<=`, `=`.
   The Operator MAY be omitted, in which case `=` is assumed.  For example,
   `>1.2.3`, `<=2.1.3`, `5.6.2`.

    1. Comparators with the Operator of `=` will include a given SemVer
       Version if their Version has precedence equal to that of the SemVer
       Version being considered.

    1. Comparators with the Operator of `>` will include a given SemVer
       Version if their Version has precedence greater than that of the
       SemVer Version being considered.

    1. Comparators with the Operator of `>=` will include a given SemVer
       Version if their Version has precedence greater than or equal to
       that of the SemVer Version being considered.

    1. Comparators with the Operator of `<` will include a given SemVer
       Version if their Version has precedence less than that of the
       SemVer Version being considered.

    1. Comparators with the Operator of `<=` will include a given SemVer
       Version if their Version has precedence less than or equal to that
       of the SemVer Version being considered.

1. `Advanced Comparators` are defined in terms of their reduction to a set
   of primitive Comparators.

    1. The empty string, asterisk `*`, capital `X` and lowercase `x` are
       equivalent to `>=0.0.0`, or `>=0.0.0-0` if PRERELEASE versions are
       being included.

    1. A "tilde version" of the form `~I.J.K` will match any version with a
       MAJOR version equal to `I`, a MINOR version equal to `J`, and a
       PATCH version equal to or greater than `K`.  These are equivalent to
       `>=I.J.K <I.J.(K+1)` or `>=I.J.K <I.J.(K+1)-0` if PRERELEASE
       versions are being included.

    1. A "caret version" of the form `^I.J.K` allows changes that do not
       increment the first non-zero portion of the SemVer
       (MAJOR,MINOR,PATCH) tuple.

        1. `^0.0.K` will match any version `>=0.0.K <0.0.(K+1)-0`.  Note that
           this is equivalent to `=0.0.K` if PRERELEASE versions are not
           included.

        1. `^0.J.K` will match any version in the range `>=0.J.K
           <0.J.(K+1)-0`.

        1. `^I.J.K` will match any version in the range `>=I.J.K
           <I.(J+1).0-0`.

    1. A "hyphen range" expresses an inclusive range of versions.  `I.J.K -
       L.M.N` is equivalent to `>=I.J.K <=L.M.N`

    1. Partial versions are versions of the form, `I` or `I.J` rather than
       `I.J.K`, and behave the following impacts when used in SemVer
       Ranges.

        1. A partial version with the `=` operator, or no operator, will
           match any version whose parts of the SemVer (MAJOR,MINOR,PATCH)
           tuple are equivalent to the specified portions in the partial
           version.  Thus:

            1. `I.J` or `=I.J` are equivalent to `>=I.J.0 <I.(J+1).0-0`, or
               `>=I.J.0-0 <I.(J+1).0-0` if PRERELEASE versions are being
               included.

            1. `I` or `=I` are equivalent to `>=I.0.0 <(I+1).0.0-0`, or
               `>=I.0.0-0 <(I+1).0.0-0` if PRERELEASE versions are being
               included.

        1. A partial version used with the `>` operator allows any version
           whose parts of the SemVer (MAJOR,MINOR,PATCH) tuple are
           greater than the specified portions in the partial version.
           Thus:

            1. `>I.J` is eqivalent to `>=I.(J+1).0`

            1. `>I` is eqivalent to `>=(I+1).0.0`

        1. A partial version used with the `<` operator allows any version
           whose parts of the SemVer (MAJOR,MINOR,PATCH) tuple are
           less than the specified portions in the partial version.  Thus:

            1. `<I.J` is eqivalent to `<I.J.0-0`

            1. `<I` is eqivalent to `<I.0.0-0`

        1. A partial version used with the `>=` operator allows any version
           whose parts of the SemVer (MAJOR,MINOR,PATCH) tuple are
           greater than or equal to the specified portions in the partial
           version.  Thus:

            1. `>=I.J` is eqivalent to `>=I.J.0`, or `>=I.J.0-0` if
               PRERELEASE versions are being included.

            1. `>=I` is eqivalent to `>=I.0.0`, or `>=I.0.0-0` if
               PRERELEASE versions are being included.

        1. A partial version used with the `<=` operator allows any version
           whose parts of the SemVer (MAJOR,MINOR,PATCH) tuple are
           less than or equal to the specified portions in the partial
           version.  Thus:

            1. `<=I.J` is eqivalent to `<I.(J+1).0-0`.

            1. `<=I` is eqivalent to `<(I+1).0.0-0`.

        1. Hyphen ranges, caret ranges, and tilde ranges are expanded as
           normally with partial versions, then those partial versions are
           resolved with the relevant operator attached as described above
           in this section.

1. SemVer Build metadata (that is, identifiers prefixed by `+`) are not
   considered when evaluating version strings for inclusion in a SemVer
   Range, as they are not relevant to evaluating precedence.
   Implementations MAY reject Ranges with SemVer strings that include build
   metadata, but if they do not, then they MUST ignore any build metadata
   when evaluating versions for inclusion.  For example, the range
   `>=1.2.3+build.123` MAY be rejected as an invalid Range, but if it is
   not rejected, then it MUST be equivalent to `>=1.2.3`.

Backus-Naur Form Grammar for Valid SemVer Ranges
------------------------------------------------

```bnf
range-set  ::= range ( logical-or range ) *
logical-or ::= ( ' ' ) * '||' ( ' ' ) *
range      ::= hyphen | simple ( ' ' simple ) * | ''
hyphen     ::= partial ' - ' partial
simple     ::= primitive | partial | tilde | caret
primitive  ::= ( '<' | '>' | '>=' | '<=' | '=' ) partial
partial    ::= xr ( '.' xr ( '.' xr qualifier ? )? )?
xr         ::= 'x' | 'X' | '*' | nr
nr         ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *
tilde      ::= '~' partial
caret      ::= '^' partial
qualifier  ::= ( '-' pre )? ( '+' build )?
pre        ::= parts
build      ::= parts
parts      ::= part ( '.' part ) *
part       ::= nr | [-0-9A-Za-z]+
```

SemVer Implementations Supporting SemVer Range Evaluation
---------------------------------------------------------

- [node-semver (npm)](https://github.com/npm/node-semver)
- [semver crate (cargo)](https://github.com/steveklabnik/semver)

About
-----

The Semantic Versioning specification is authored by [Isaac Z.
Schlueter](https://izs.me), inventor of npm and author of the
[node-semver](https://github.com/npm/node-semver) package.

The features of this specification have grown out of the JavaScript
community's use of SemVer for dependency resolution from 2010 onwards.

If you'd like to leave feedback, please [open an issue on
GitHub](https://github.com/semver/semver/issues).

License
-------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
