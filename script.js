document.addEventListener('DOMContentLoaded', function() {
    var generateButton = document.getElementById('generateButton');
    var container = document.getElementById('container');
  
    generateButton.addEventListener('click', function() {
      var block = document.createElement('span');
      block.className = 'block';
      block.style.backgroundColor = getRandomColor();
  
      container.appendChild(block);
    });
  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
  
      for (var x = 0; x < 6; x++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
  
      return color;
    }
  });
  
