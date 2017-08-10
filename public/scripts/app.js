/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// FUNCTIONS

  function emptyAlert() {
    const el = document.createElement("div");
    el.setAttribute("style","font-size:1.1em;position:fixed;top:35%;left:25%;right:25%;text-align:center;background-color:#FFDA6E;padding:25px;font-weight:bold");
    el.innerHTML = "Your message is empty. You need to write a Tweet before you can submit it.";
    setTimeout(function(){
      el.parentNode.removeChild(el);
      },1500);
    document.body.appendChild(el);
  };

  function longAlert() {
    const el = document.createElement("div");
    el.setAttribute("style","font-size:1.1em;position:fixed;top:35%;left:25%;right:25%;text-align:center;background-color:#FFDA6E;padding:25px;font-weight:bold");
    el.innerHTML = "Your Tweet is too long. You can only use a maximum of 140 characters.";
    setTimeout(function(){
      el.parentNode.removeChild(el);
      },1500);
    document.body.appendChild(el);
  };

  function createTweetElement(tweet) {
    const dateCreated = new Date(tweet.created_at);
    const dateDiff = (Date.now() - dateCreated);;
    const daysAgo = String(Math.floor(dateDiff/1000/60/60/24)) + " days ago";
    let $tweet = $("<article>");
    $tweet.append($("<header>").append("<img class='profile-pic'>").append("<span class='author-name'>").append("<span class='author-account'>"));
    $tweet.append($("<span>").addClass("tweet-words"));
    $tweet.append($("<footer>").append("<span class='tweet-date'>").append("<img src='/images/like-img.png'>").append("<img src='/images/retweet-img.png'>").append("<img src='/images/report-img.png'>"));
    $tweet.find(".profile-pic").attr("src", tweet.user.avatars.regular);
    $tweet.find(".author-name").text(tweet.user.name);
    $tweet.find(".author-account").text(tweet.user.handle);
    $tweet.find(".tweet-words").text(tweet.content.text);
    $tweet.find(".tweet-date").text(daysAgo);
    return $tweet;
  }

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      let $tweetVal = createTweetElement(tweet);
      $('#tweet-container').prepend($tweetVal);
    });
  }

  function loadTweets() {
    $.ajax({
      url: '/tweets/',
      method: 'GET',
      success: function(tweet) {
        $('#tweet-container').empty();
        renderTweets(tweet);
      }
    });
  };

  loadTweets();

// EVENT HANDLERS

  $(".composer").on("click", function(event) {
    $(".new-tweet").slideToggle();
    $("textarea").focus();
  });

  $("form").on("submit", function(event) {
    event.preventDefault();
    const form = this;
    if (($(form).serialize().length - 5) < 1) {
      emptyAlert();
    }
    else if (($(form).serialize().length - 5) > 140) {
      longAlert();
    }
    else {
      $.ajax({
        url: '/tweets/',
        method: 'POST',
        data: $(form).serialize(),
        success: function(tweet) {
          form.reset();
          loadTweets();
        }
      });
    }
  });

});