// ==UserScript==
// @name         Something Smiley
// @namespace    http://leonspencer.net
// @version      0.1
// @description  lets you reply to something awful posts with smilies
// @author       Leon Spencer
// @require      http://coffeescript.org/extras/coffee-script.js
// @require      https://cdn.firebase.com/js/client/2.3.1/firebase.js
// @match        http://forums.somethingawful.com/showthread.php*
// ==/UserScript==
(function() {
  var btnclick, fb, fbs, formbtn, smileyclick, smileyform, username;

  username = $('#loggedinusername').html();

  fbs = new Firebase("https://something-smiley.firebaseio.com/smilies");

  fb = new Firebase("https://something-smiley.firebaseio.com/posts");

  smileyform = $("<div id='smileyform'></div>");

  smileyclick = function(event) {
    var postid;
    postid = $(event.target).parents('table.post')[0].id;
    fb.child(postid).child(username).set(event.target.title);
    return smileyform.hide();
  };

  formbtn = $("<button>Smiley Reply</button>");

  btnclick = function(event) {
    return smileyform.appendTo($(event.target).parent().parent()).show();
  };

  fbs.on('value', function(ssnap) {
    var name, smilies, src;
    smilies = ssnap.val();
    for (name in smilies) {
      src = smilies[name];
      $("<img>").attr("src", src).appendTo("<button></button>").click(smileyclick).appendTo(smileyform);
    }
    return $('table.post').each(function() {
      var postfb, smileybox;
      postfb = fb.child(this.id);
      smileybox = $("<dd class='smilies'><h6>Smiley Replies</h6></dd>").appendTo($(this).find('dl.userinfo'));
      formbtn.clone().click(btnclick).appendTo("<li></li>").appendTo($(this).find(".postbuttons"));
      return postfb.on("child_added", function(snap, uname) {
        var el;
        el = $("<img></img>").attr("src", smilies[snap.val()]).attr("title", snap.key());
        return el.appendTo(smileybox);
      });
    });
  });

}).call(this);
