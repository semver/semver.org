---
title: Σημασιολογική Έκδοση 2.0.0
language: el
---

Σημασιολογική Έκδοση 2.0.0
==========================

Περίληψη
--------

Δοσμένης μίας έκδοσης ΚΥΡΙΑ.ΔΕΥΤΕΡΕΥΟΥΣΑ.ΔΙΟΡΘΩΤΙΚΗ (MAJOR.MINOR.PATCH), αυξάνεται η:

1. ΚΥΡΙΑ (MAJOR) έκδοση, όταν γίνονται ασύμβατες αλλαγές προς τα κάτω στη Διασύνδεση Προγραμματισμού Εφαρμογών (Application Programming Interface ή API)
2. ΔΕΥΤΕΡΕΥΟΥΣΑ (MINOR) έκδοση, όταν προστίθονται λειτουργίες συμβατές προς τα κάτω
3. ΔΙΟΡΘΩΤΙΚΗ (PATCH) έκδοση, όταν γίνονται επιδιορθώσεις συμβατές προς τα κάτω

Υπάρχουν επιπρόσθετες ετικέτες προ-δημοσίευσης και μεταδεδομένων εκτελέσιμου προγράμματος (build metadata) ως επεκτάσεις της μορφής MAJOR.MINOR.PATCH.


Εισαγωγή
--------

Στον κόσμο της ανάπτυξης λογισμικού, υπάρχει μία φρικτή κατάσταση που ονομάζεται «κόλαση εξαρτήσεων» («dependency hell»). Όσο μεγαλύτερο γίνεται ένα σύστημα και όσο περισσότερα πακέτα ενσωματώνονται στο λογισμικό, τόσο πιο πιθανό είναι ότι το σύστημα θα βρεθεί σε αυτή την κατάσταση.

Σε συστήματα με πολλές εξαρτήσεις, η δημοσίευση εκδόσεων μπορεί γρήγορα να γίνει εφιάλτης. Εάν οι προδιαγραφές εξαρτήσεων του πακέτου είναι πολύ αυστηρές, υπάρχει ο κίνδυνος «κλειδώματος έκδοσης» («version lock»), δηλαδή αδυναμίας ενημέρωσης ενός πακέτου χωρίς να χρειάζεται η ενημέρωση όλων των εξαρτώμενων πακέτων του. Ωστόσο, εάν οι εξαρτήσεις του πακέτου είναι πολύ χαλαρές, τότε είναι πιθανή η «ασυδοσία έκδοσης» («version promiscuity»), όπου το πακέτο προσποιείται ότι είναι συμβατό με περισσότερες μελλοντικές εκδόσεις των εξαρτημένων πακέτων του, από ότι είναι. Η «κόλαση εξαρτήσεων» αναφέρεται στην περίπτωση όπου είτε το «κλείδωμα έκδοσης» είτε η «ασυδοσία έκδοσης», ή και τα δύο, επηρεάζουν τη διαδικασία ανάπτυξης του έργου.

Ως λύση στο πρόβλημα, προτείνω ένα απλό σύνολο κανόνων που καθορίζει τον τρόπο επιλογής και αύξησης των αριθμών έκδοσης. Οι κανόνες αυτοί βασίζονται στις υπάρχουσες και ευρέως χρησιμοποιούμενες μεθόδους, οι οποίες χρησιμοποιούνται για την ανάπτυξη λογισμικού κλειστού και ανοιχτού κώδικα, χωρίς να περιορίζονται όμως σε αυτό. Για να χρησιμοποιήσετε αυτό το σύστημα, πρέπει πρώτα να ορίσετε ένα δημόσιο API. Αυτό μπορεί είτε να υπάρχει με τη μορφή τεκμηρίωσης, είτε να επιβάλλεται από τον ίδιο τον κώδικα. Ανεξάρτητα από το πώς εφαρμόζεται το API, είναι σημαντικό να είναι σαφές και συνοπτικό. Μόλις δημιουργηθεί το δημόσιο API, οι αλλαγές σε αυτό ανακοινώνονται μέσω συγκεκριμένων αλλαγών στον αριθμό έκδοσης. Θεωρούμε μία μορφή του αριθμού έκδοσης τύπου X.Y.Z - ΚΥΡΙΑ.ΔΕΥΤΕΡΕΥΟΥΣΑ.ΔΙΟΡΘΩΤΙΚΗ (MAJOR.MINOR.PATCH). Διορθώσεις σφαλμάτων που δεν επηρεάζουν το API αυξάνουν τη διορθωτική (patch) έκδοση, συμβατές προς τα πίσω προσθήκες ή αλλαγές αυξάνουν τη δευτερεύουσα έκδοση και ασύμβατες προς τα πίσω αλλαγές αυξάνουν την κύρια έκδοση.

Ονομάζω αυτό το σύστημα «Σημασιολογική Έκδοση». Οι αριθμοί έκδοσης που έχουν αυξηθεί σύμφωνα με αυτό το σχήμα παρέχουν άμεση πληροφορία σχετικά με τον αντίστοιχο κώδικα και τί έχει αλλάξει από τη μία έκδοση στην άλλη.


Ορισμός Σημασιολογικής Έκδοσης (SemVer)
---------------------------------------

Οι λέξεις κλειδιά «ΠΡΕΠΕΙ» («MUST»), «ΔΕΝ ΠΡΕΠΕΙ» («MUST ΝΟΤ»), «ΑΠΑΙΤΕΙΤΑΙ» («REQUIRED»), «ΘΑ ΜΠΟΡΟΥΣΕ» («SHALL»), «ΔΕ ΘΑ ΜΠΟΡΟΥΣΕ» («SHALL NOT»), «ΘΑ ΗΤΑΝ ΚΑΛΟ» («SHOULD»), «ΔΕ ΘΑ ΗΤΑΝ ΚΑΛΟ» («SHOULD NOT»), «ΠΡΟΤΕΙΝΕΤΑΙ» («RECOMMENDED»), «ΜΠΟΡΕΙ» («MAY»), και «ΠΡΟΑΙΡΕΤΙΚΟ» («OPTIONAL») σε αυτό το κείμενο θα πρέπει να ερμηνεύονται όπως περιγράφονται στη δημοσίευση [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Το λογισμικό που χρησιμοποιεί σημασιολογική έκδοση ΠΡΕΠΕΙ να ορίσει ένα δημόσιο API. Το API μπορεί είτε να δηλωθεί στον ίδιο τον κώδικα, είτε να συμπεριληφθεί σε μία τεκμηρίωση. Ωστόσο, όπως και να εφαρμοστεί, είναι σημαντικό να είναι ακριβές και λεπτομερές.

2. Μία κανονική έκδοση ΠΡΕΠΕΙ να έχει τη μορφή X.Y.Z, όπου τα Χ, Υ και Ζ είναι θετικοί ακέραιοι αριθμοί και ΔΕΝ ΠΡΕΠΕΙ να έχουν μηδενικά στην αρχή. Το X είναι η κύρια έκδοση, το Y η δευτερεύουσα και το Ζ η διορθωτική. Το κάθε στοιχείο ΠΡΕΠΕΙ να αυξάνεται αριθμητικά. Για παράδειγμα, από την έκδοση 1.9.0 στην 1.10.0 στην 1.11.0.

3. Από τη στιγμή που μία έκδοση δημοσιευτεί, τα περιεχόμενα του πακέτου ΔΕΝ ΠΡΕΠΕΙ να τροποποιηθούν. Η οποιαδήποτε τροποποίηση ΠΡΕΠΕΙ να δημοσιευτεί ως νέα έκδοση.

4. Η κύρια έκδοση μηδέν (0.y.z) είναι για την αρχική ανάπτυξη. Το ο,τιδήποτε μπορεί να αλλάξει ανά πάσα στιγμή. Το δημόσιο API ΔΕ ΘΑ ΗΤΑΝ ΚΑΛΟ να θεωρείται αξιόπιστο σε αυτή την περίπτωση.

5. Η έκδοση 1.0.0 περιγράφει το δημόσιο API. Ο τρόπος με τον οποίο αυξάνεται η έκδοση μετά από αυτήν τη δημοσίευση εξαρτάται από το API και το πώς αλλάζει.

6. Η διορθωτική έκδοση Z (x.y.Z | x > 0) ΠΡΕΠΕΙ να αυξάνεται μόνο όταν γίνονται συμβατές προς τα πίσω διορθώσεις σφαλμάτων. Η διόρθωση σφάλματος ορίζεται ως μία εσωτερική αλλαγή που διορθώνει μία λανθασμένη συμπεριφορά.

7. Η δευτερεύουσα έκδοση Y (x.Y.z | x > 0) ΠΡΕΠΕΙ να αυξάνεται εάν νέα, συμβατή προς τα κάτω, λειτουργικότητα εισάγεται στο API. ΠΡΕΠΕΙ να αυξηθεί εάν οποιαδήποτε λειτουργικότητα του API έχει επισημανθεί ως απορριπτέα. Η δευτερεύουσα έκδοση ΜΠΟΡΕΙ να αυξηθεί, εάν εισάγονται εκτεταμένες αλλαγές στον εσωτερικό κώδικα. Αν αυξηθεί ο αριθμός της δευτερεύουσας έκδοσης, η διορθωτική έκδοση ΠΡΕΠΕΙ να επαναφερθεί στο μηδέν.

8. Η κύρια έκδοση X (X.y.z | X > 0) ΠΡΕΠΕΙ να αυξηθεί εάν λάβουν χώρα αλλαγές ασύμβατες προς τα κάτω στο API. ΜΠΟΡΕΙ να συμπεριλαμβάνει δευτερεύουσες και διορθωτικές αλλαγές. Η δευτερεύουσα και η διορθωτική έκδοση ΠΡΕΠΕΙ να επαναφέρονται στο μηδέν όταν αυξάνεται η κύρια έκδοση.

9. Μία προ-δημοσιευμένη έκδοση ΜΠΟΡΕΙ να αναγνωριστεί προσθέτοντας στη διορθωτική έκδοση μία παύλα και μία σειρά διακριτικών αναγνωριστικών που χωρίζονται με τελείες. Τα αναγνωριστικά ΠΡΕΠΕΙ να αποτελούνται μόνο από ASCII αλφαριθμητικά και παύλες [0-9A-Za-z-]. Τα αναγνωριστικά ΔΕΝ ΠΡΕΠΕΙ να είναι κενά. Τα αριθμητικά αναγνωριστικά ΔΕΝ ΠΡΕΠΕΙ να έχουν μηδενικά στην αρχή. Η προ-δημοσιευμένες εκδόσεις έχουν χαμηλότερη προτεραιότητα από τη σχετική κανονική έκδοση. Μία προ-δημοσιευμένη έκδοση δείχνει ότι η έκδοση είναι αναξιόπιστη και μπορεί να μην ικανοποιεί τις προβλεπόμενες απαιτήσεις συμβατότητας, όπως αυτές υποδεικνύονται από τις σχετικές απαιτήσεις της κανονικής έκδοσης. Παραδείγματα: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Τα μεταδεδομένα εκτελέσιμου προγράμματος ΜΠΟΡΟΥΝ να αναγνωριστούν προσθέτοντας στη διορθωτική έκδοση το σύμβολο του συν και μία σειρά διακριτικών αναγνωριστικών που χωρίζονται με τελείες. Τα αναγνωριστικά ΠΡΕΠΕΙ να αποτελούνται μόνο από ASCII αλφαριθμητικά και παύλες [0-9A-Za-z-]. Τα αναγνωριστικά ΔΕΝ ΠΡΕΠΕΙ να είναι κενά. Τα μεταδεδομένα ΘΑ ΗΤΑΝ ΚΑΛΟ να αγνοούνται, όταν καθορίζεται η προτεραιότητα εκδόσεων. Οπότε, δυο εκδόσεις που διαφέρουν μόνο στα μεταδεδομένα έχουν την ίδια προτεραιότητα. Παραδείγματα: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

11. Η προτεραιότητα αναφέρεται στο πώς οι εκδόσεις συγκρίνονται μεταξύ τους κατά την ταξινόμηση. Η προτεραιότητα ΠΡΕΠΕΙ να υπολογίζεται χωρίζοντας την έκδοση σύμφωνα με τα αναγνωριστικά της κύριας, δευτερεύουσας, διορθωτικής και προ-δημοσιευμένης έκδοσης κατά αυτήν τη σειρά. Τα μεταδεδομένα δεν συμπεριλαμβάνονται στην προτεραιότητα. Η προτεραιότητα καθορίζεται συγκρίνοντας την πρώτη διαφορά κατά τη σύγκριση από αριστερά προς τα δεξία ως εξής: η κύρια, δευτερεύουσα και διορθωτική έκδοση συγκρίνονται αριθμητικά. Παράδειγμα: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Όταν η κύρια, δευτερεύουσα και διορθωτική έκδοση είναι ίδιες, τότε η προ-δημοσιευμένη έκδοση έχει χαμηλότερη προτεραιότητα από μία κανονική έκδοση. Παράδειγμα: 1.0.0-alpha < 1.0.0. Η προτεραιότητα μεταξύ δυο προ-δημοσιευμένων εκδόσεων με ίδια κύρια, δευτερεύουσα και διορθωτική έκδοση ΠΡΕΠΕΙ να προσδιορίζεται συγκρίνοντας κάθε αναγνωριστικό χωρισμένο με τελεία από αριστερά προς τα δεξιά, μέχρι να βρεθεί μία διαφορά ως εξής: τα αναγνωριστικά που αποτελούνται μόνο από ψηφία συγκρίνονται αριθμητικά και τα αναγνωριστικά που αποτελούνται από γράμματα και παύλες συγκρίνονται αλφαβητικά σε σειρά ταξινόμησης ASCII. Τα αριθμητικά αναγνωριστικά πάντα έχουν χαμηλότερη προτεραιότητα από τα μη-αριθμητικά. Μία μεγάλη σειρά αναγνωριστικών προ-δημοσιευμένης έκδοσης έχει υψηλότερη προτεραιότητα από μία μικρότερη σειρά, αν όλα τα προγούμενα αναγνωριστικά είναι ίδια. Παράδειγμα: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.


Γιατί να χρησιμοποιήσει κάποιος τη Σημασιολογική Έκδοση;
----------------------------

This is not a new or revolutionary idea. In fact, you probably do something
close to this already. The problem is that "close" isn't good enough. Without
compliance to some sort of formal specification, version numbers are
essentially useless for dependency management. By giving a name and clear
definition to the above ideas, it becomes easy to communicate your intentions
to the users of your software. Once these intentions are clear, flexible (but
not too flexible) dependency specifications can finally be made.

A simple example will demonstrate how Semantic Versioning can make dependency
hell a thing of the past. Consider a library called "Firetruck." It requires a
Semantically Versioned package named "Ladder." At the time that Firetruck is
created, Ladder is at version 3.1.0. Since Firetruck uses some functionality
that was first introduced in 3.1.0, you can safely specify the Ladder
dependency as greater than or equal to 3.1.0 but less than 4.0.0. Now, when
Ladder version 3.1.1 and 3.2.0 become available, you can release them to your
package management system and know that they will be compatible with existing
dependent software.

As a responsible developer you will, of course, want to verify that any
package upgrades function as advertised. The real world is a messy place;
there's nothing we can do about that but be vigilant. What you can do is let
Semantic Versioning provide you with a sane way to release and upgrade
packages without having to roll new versions of dependent packages, saving you
time and hassle.

If all of this sounds desirable, all you need to do to start using Semantic
Versioning is to declare that you are doing so and then follow the rules. Link
to this website from your README so others know the rules and can benefit from
them.


Συχνές Ερωτήσεις
---

### How should I deal with revisions in the 0.y.z initial development phase?

The simplest thing to do is start your initial development release at 0.1.0
and then increment the minor version for each subsequent release.

### How do I know when to release 1.0.0?

If your software is being used in production, it should probably already be
1.0.0. If you have a stable API on which users have come to depend, you should
be 1.0.0. If you're worrying a lot about backwards compatibility, you should
probably already be 1.0.0.

### Doesn't this discourage rapid development and fast iteration?

Major version zero is all about rapid development. If you're changing the API
every day you should either still be in version 0.y.z or on a separate
development branch working on the next major version.

### If even the tiniest backwards incompatible changes to the public API require a major version bump, won't I end up at version 42.0.0 very rapidly?

This is a question of responsible development and foresight. Incompatible
changes should not be introduced lightly to software that has a lot of
dependent code. The cost that must be incurred to upgrade can be significant.
Having to bump major versions to release incompatible changes means you'll
think through the impact of your changes, and evaluate the cost/benefit ratio
involved.

### Documenting the entire public API is too much work!

It is your responsibility as a professional developer to properly document
software that is intended for use by others. Managing software complexity is a
hugely important part of keeping a project efficient, and that's hard to do if
nobody knows how to use your software, or what methods are safe to call. In
the long run, Semantic Versioning, and the insistence on a well defined public
API can keep everyone and everything running smoothly.

### What do I do if I accidentally release a backwards incompatible change as a minor version?

As soon as you realize that you've broken the Semantic Versioning spec, fix
the problem and release a new minor version that corrects the problem and
restores backwards compatibility. Even under this circumstance, it is
unacceptable to modify versioned releases. If it's appropriate,
document the offending version and inform your users of the problem so that
they are aware of the offending version.

### What should I do if I update my own dependencies without changing the public API?

That would be considered compatible since it does not affect the public API.
Software that explicitly depends on the same dependencies as your package
should have their own dependency specifications and the author will notice any
conflicts. Determining whether the change is a patch level or minor level
modification depends on whether you updated your dependencies in order to fix
a bug or introduce new functionality. I would usually expect additional code
for the latter instance, in which case it's obviously a minor level increment.

### What if I inadvertently alter the public API in a way that is not compliant with the version number change (i.e. the code incorrectly introduces a major breaking change in a patch release)

Use your best judgment. If you have a huge audience that will be drastically
impacted by changing the behavior back to what the public API intended, then
it may be best to perform a major version release, even though the fix could
strictly be considered a patch release. Remember, Semantic Versioning is all
about conveying meaning by how the version number changes. If these changes
are important to your users, use the version number to inform them.

### How should I handle deprecating functionality?

Deprecating existing functionality is a normal part of software development and
is often required to make forward progress. When you deprecate part of your
public API, you should do two things: (1) update your documentation to let
users know about the change, (2) issue a new minor release with the deprecation
in place. Before you completely remove the functionality in a new major release
there should be at least one minor release that contains the deprecation so
that users can smoothly transition to the new API.

### Does semver have a size limit on the version string?

No, but use good judgment. A 255 character version string is probably overkill,
for example. Also, specific systems may impose their own limits on the size of
the string.


Σχετικά
-------

Οι προδιαγραφές της Σημασιολογικής Έκδοσης συντάσσονται από τον [Τομ Πρέστον-Βέρνερ](http://tom.preston-werner.com), ο οποίος είναι δημιουργός των Gravatars και συνιδρυτής του GitHub.

Αν θέλετε να αφήσετε κάποιο σχόλιο, παρακαλούμε να ξεκινήσετε ένα [καινούριο θέμα (Issue) στο GitHub](https://github.com/mojombo/semver/issues).


Άδεια
-----

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
