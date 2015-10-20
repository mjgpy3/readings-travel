(function (document) {
  var sendRead = function () {
    var data = {
      url: document.URL,
      key: '%KEY%'
    };

    var xhr = new XMLHttpRequest();
    xhr.open('post', '%HOST%', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.send(JSON.stringify(data));
  };

  var createPopover = function () {
    var div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.top = '10px';
    div.style.left = '50%';
    div.style.backgroundColor = 'black';
    div.style.zIndex = 99999999;

    var button = document.createElement('button');
    button.textContent = 'Read it!';
    button.onclick = sendRead;

    var exit = document.createElement('button');
    exit.textContent = 'X';

    exit.onclick = function () {
      document.body.removeChild(div);
    };

    var outputLabel = document.createElement('h3');
    outputLabel.textContent = '...';
    outputLabel.style.color = 'white';
    outputLabel.style.position = 'relative';

    div.appendChild(button);
    div.appendChild(exit);
    div.appendChild(document.createElement('br'));
    div.appendChild(outputLabel);
    document.body.appendChild(div);
  };

  createPopover();

})(document);
