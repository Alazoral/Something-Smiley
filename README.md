Something Smiley
================

It's a userscript that lets you post a smiley response (that will live-update!)
to any post on the [Something Awful forums](http://forums.somethingawful.com),
without actually cluttering the database or the screen up with empty posts.

It's probably breathtakingly insecure. Sorry. It's just a proof of concept.
Expect your smilies to be deleted, often.

**USE AT YOUR PERIL**: If it *doesn't* destroy all your valuable computer stuff
and sell your identity to many criminal gangs then that's *pure luck*. WHO KNOWS WHAT EVIL

If Internet confuses you, **stay away**.

Installation
------------

You need to get an extension for your web browser that does userscripts.
I use [Tampermonkey](http://tampermonkey.net) on [Safari](http://apple.com/safari), but other setups *may* work!

Then, just [click here to Install](https://github.com/Alazoral/Something-Smiley/raw/master/something-smiley.user.js). Your extension should keep it up to date for you.

Again, if you can't work out how to do this please stay away, it's just a
proof of concept and I am **not** going to help you out of your new nightmare world.

Contributing
------------

Cool, do it, I don't really do this stuff often. You need the following:
- something that will execute a *really* simple shell script
- [Coffeescript](http://coffeescript.org), install it from your [favourite package manager](http://brew.sh)
- `cat(1)`

Then just run `build.sh` and it should output `something-smiley.user.js`.

Original Proposal
-----------------

One of the problems about the forum software is that in swift-moving and popular (aka, good) threads you have to either wade through 1000 pages of emptyquotes, 'same's, and complements, content-free flames and so on, to get the good shit. We can vote up or down entire threads, but that can't target a post, and a single user doesn't really have an impact on it. Obviously responding to things on a forum is important, and the chronologically ordered linear post format is central to the forums, but I feel that there might be a design/technical solution out there that could make the forums better.

My idea: what if you could reply to anyone's post with a smiley? Rather than listing these smiley replies as individual posts, each post would have a tally, beside it, in that huge gap under the user's avatar. There would be a button next to the reply button that would disclose a smiley picker, first listing the ones other people have already picked.

By compressing low-content replies to zero post space the signal to noise ratio would thus increase tremendously. It would also reduce the threshold for interaction for lurkers and new posters, allowing a shallow end, so to speak, allowing more people to join our little internet gang. It would reduce database overhead. And it would further incentivise new smiley purchases, further allowing Lowtax to eat food on a regular basis.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
