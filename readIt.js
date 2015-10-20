(function (document) {
  var sendRead = function (outputLabel) {
    return function () {
      var data = {
        url: document.URL,
        key: '%KEY%'
      };

      var xhr = new XMLHttpRequest();

      var output = function (text, color) {
        outputLabel.textContent = text;
        outputLabel.style.color = color;
      };

      xhr.addEventListener('load', function () {
        output(':)', 'green');
      });

      xhr.addEventListener('error', function () {
        output(':(', 'red');
      });

      try {
        xhr.open('post', '%HOST%', true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        xhr.send(JSON.stringify(data));
      } catch (e) {
        output(':(', 'red');
        console.log(e);
      }
    };
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

    var exit = document.createElement('button');
    exit.textContent = 'X';

    exit.onclick = function () {
      document.body.removeChild(div);
    };

    var outputLabel = document.createElement('h3');
    outputLabel.textContent = '...';
    outputLabel.style.color = 'white';
    outputLabel.style.position = 'relative';
    outputLabel.style.left = '50%';

    button.onclick = sendRead(outputLabel);

    div.appendChild(button);
    div.appendChild(exit);
    div.appendChild(document.createElement('br'));
    div.appendChild(outputLabel);
    document.body.appendChild(div);
  };

  createPopover();

})(document);
