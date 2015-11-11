username = $('#loggedinusername').html()
fbs = new Firebase("https://something-smiley.firebaseio.com/smilies")
fb = new Firebase("https://something-smiley.firebaseio.com/posts")

smileyform = $("<div id='smileyform'></div>")
smileyclick = (event) ->
  postid = $(event.target).parents('table.post')[0].id
  fb.child(postid).child(username).set(event.target.title)
  console.log("setting result to", event, event.target, event.target.title)
  smileyform.hide()
formbtn = $("<button>Smiley Reply</button>")
btnclick = (event) ->
  smileyform.appendTo($(event.target).parent().parent()).show()

fbs.on 'value', (ssnap) ->
  smilies = ssnap.val()
  for name, src of smilies
    $("<img>")
      .attr("src", src)
      .attr("title", name)
      .appendTo("<button></button>")
      .click(smileyclick)
      .appendTo(smileyform)

  $('table.post').each ->
    postfb = fb.child(@id)
    smileybox = $("<dd class='smilies'><h6>Smiley Replies</h6></dd>")
      .appendTo($(@).find('dl.userinfo'))
    formbtn
      .clone()
      .click(btnclick)
      .appendTo("<li></li>")
      .appendTo($(@).find(".postbuttons"))

    postfb.on "child_added", (snap) ->
      console.log(smilies, snap.val())
      el = $("<img></img>")
        .attr("src", smilies[snap.val()])
        .attr("title", snap.key())
      el.appendTo(smileybox)
