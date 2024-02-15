 
 function updateTime() {
   
    var now = new Date();
    
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12' in 12-hour format
    
    
    var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' ' + ampm;
    
    document.getElementById('time').textContent = timeString;
  } 
  updateTime();
  setInterval(updateTime, 1000);

  document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'home/index.html';
});
document.getElementById('project').addEventListener('click', function() {
  window.location.href = 'https://github.com/sabarees3578';
});
document.getElementById('aboutme').addEventListener('click', function() {
  window.location.href = 'social media/index.html';
});
document.getElementById('justupdate').addEventListener('click', function() {
  window.location.href = 'home/index.html';
});
document.getElementById('godgaming').addEventListener('click', function() {
  window.location.href = 'home/index.html';
});
document.getElementById('conqureor').addEventListener('click', function() {
window.location.href = 'https://github.com/sabarees3578';
});
document.getElementById('calcuator').addEventListener('click', function() {
window.location.href = 'calculator/index.html';
});
document.getElementById('gpt').addEventListener('click', function() {
window.location.href = 'https://chat.openai.com/c/d966de2f-ab45-41d8-a872-c53af37fc44b';
});
