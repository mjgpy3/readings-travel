(function (document) {
  var data = {
    url: document.URL,
    key: '%KEY%'
  };

  var xhr = new XMLHttpRequest();
  xhr.open('post', '%HOST%', true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(data));

})(document);
