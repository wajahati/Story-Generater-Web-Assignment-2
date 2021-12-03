
$(document).ready(function(){
  $("#submit").click(function(){gets()});
  $("#reset").click(function(){rst()});
});

var name;
var char;
var adv;
var adj;

function rst()
{
  $("#story").html(" ");
  $(".topic").html("Story Creation");
}

function gets()
{
  name = $("#person").val();
  char = $("#character").val();
  adv = $("#adverb").val();
  adj = $("#adjective").val();
  story(name,char,adv,adj); 
}

function story(name,char,adv,adj)
{

  var story = "Once there was a <span class=\"highlight\">"+char+
  "</span> named <span class=\"highlight\">"+name+
  "</span> who wishes to be colorful and <span class=\"highlight\">"+adj+
  "</span> like other birds."+
  " He then went to the parrot and shared his thoughts. who is happy story But parrot said peacock is most <span class=\"highlight\">"+adj+
  "</span> bird so talk to him."+
  " Then the <span class=\"highlight\">"+char+
  "</span> went to the peacock and told him about his looks. Then the peacock replied,”"+
  " You are the luckiest bird that has been never caged in life and we because of our beauty stay caged, and you are always free.”"+
  " <span class=\"highlight\">"+char+
  "</span> and peacock story pictures Crow and Peacock story pictures After listening to this,"+
  " <span class=\"highlight\">"+char+
  "</span> realized his mistake and thanked God for making him like this and he flew away <span class=\"highlight\">"+adv+
  "</span>. "
  var topic = char+"'s Story";

  $("#story").html(story);
  $(".topic").html(topic);
}
