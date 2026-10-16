/* clone-shim : remplace le JS du site pour les interactions de base (accordeons, menus) */
document.addEventListener('click',function(e){
  var t=e.target.closest('[aria-controls],[aria-expanded]');if(!t)return;
  var h=t.getAttribute('href');if(t.tagName==='A'&&h&&h.charAt(0)!=='#')return;
  var id=t.getAttribute('aria-controls'),g=id&&document.getElementById(id);if(!g)g=t.nextElementSibling;if(!g)return;
  e.preventDefault();var open=t.getAttribute('aria-expanded')!=='true';t.setAttribute('aria-expanded',open?'true':'false');
  if(open){g.removeAttribute('hidden');g.style.display='';if(getComputedStyle(g).display==='none')g.style.display='block';
    g.style.maxHeight='none';g.style.height='auto';g.style.visibility='visible';g.style.opacity='1';}
  else{g.style.display='none';}
});
