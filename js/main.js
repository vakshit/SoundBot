// collapsible text script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// commands search script
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log(value)
    $("#myCmd button").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      console.log($(this).toggle($(this).text().toLowerCase().indexOf(value) > -1))
    });
  });
});


//   var contents = document.getElementsByClassName('collapsible')
//   console.log(contents)

$(document).ready(function(){
  a=[]
  var contents = document.getElementsByClassName('collapsible')
  for (var i=0; i<contents.length; i++) {
    a.push(contents[i].innerHTML.split("\<")[0])
  }
  console.log(a)
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    var regex = new RegExp(value);
    // console.log(value)
    // $("#myCmd button").filter(function() {
    //   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    // });
    for (var i=0; i<a.length; i++) {
      console.log(regex.test(a[i]))
      if (! regex.test(a[i])) {
        contents[i].style.display = 'none'
      }
    }
  });
});