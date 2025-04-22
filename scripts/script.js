document.addEventListener('mousemove', function(e) {
    const butterfly = document.createElement('span');
    butterfly.innerHTML = "🦋";
    butterfly.style.position = 'absolute';
    butterfly.style.left = e.pageX + 'px';
    butterfly.style.top = e.pageY + 'px';
    butterfly.style.pointerEvents = 'none';
    butterfly.style.animation = 'fadeOut 2s forwards';
    butterfly.style.fontSize = '1.5rem';
    butterfly.style.zIndex = 1000;
    document.body.appendChild(butterfly);
  
    setTimeout(() => {
      butterfly.remove();
    }, 2000);
  });
  