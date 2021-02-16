var mode = 'normal';
document.getElementById('line').innerText = 'normal';

width = window.outerWidth;
height = window.outerWidth;
document.getElementById('editor').style.width = width;
document.getElementById('editor').style.height = height;

function isIllegal(e) {
  key = e.key;
  if (e.ctrlKey && (
    key == 'z' ||
    key == 'Backspace' ||
    key == 'a'
  )) {
    return true;
  }
  if (e.key === ' ' && e.target === document.body) {
    return true;
  }
  return false;
}

function getCaretPosition() {
  var x = 0;
  var y = 0;
  var sel = window.getSelection();
  if(sel.rangeCount) {
    var range = sel.getRangeAt(0).cloneRange();
    console.log(range);
    if(range.getClientRects()) {
    range.collapse(true);
    var rect = range.getClientRects()[0];
    if(rect) {
      y = rect.top;
      x = rect.left;
    }
    }
  }
  return {
    x: x,
    y: y
  };
}

editor = document.getElementById('editor');

document.onkeydown = function(e) {
  
  //console.log(editor.childNodes);
  console.log(getCaretPosition());
  let key = e.key;

  if (key === 'F5') {
    return;
  }

  if (mode === 'normal') {
    if (key === 'i') {
      mode = 'input';
      document.getElementById('line').innerText = 'input';
    }
    if (key === 'o') {
      document.execCommand('insertLineBreak');
    e.preventDefault();
    }
    e.preventDefault();
  }

  if (mode === 'input') {
    if (key === 'Escape') {
      mode = 'normal';
      document.getElementById('line').innerText = 'normal';
    }
  }

  if (isIllegal(e)) {
    e.preventDefault();
  }
  //console.log(e.key);

}

