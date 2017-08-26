var clicks = document.querySelectorAll('.click');
for (var i = 0; i< clicks.length; i++) {
  clicks[i].addEventListener('click', function() {
    var el = this;
    var url = "http://localhost:3000/api/interest";

    var data = {};
    data.state = this.childNodes[1].getAttribute('alt');
    data.interestId  = this.parentNode.childNodes[1].innerHTML;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        el.childNodes[0].textContent = el.parentNode.getAttribute('class').toLowerCase();
        el.childNodes[1].setAttribute('alt', el.parentNode.getAttribute('class'));
        el.childNodes[1].setAttribute('src', 'images/'+el.parentNode.getAttribute('class').toLowerCase()+'.png');
        el.parentNode.setAttribute('class', users.state);


      } else {
        console.log(users);
      }
    }
    xhr.send(json);
  })
}
