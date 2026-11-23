(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var cv=$('snow');if(cv&&!rm){var cx=cv.getContext('2d'),fl=[];function rs(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;}rs();addEventListener('resize',rs);for(var i=0;i<140;i++)fl.push({x:Math.random(),y:Math.random(),r:Math.random()*2.6+.6,s:Math.random()*.6+.3,w:Math.random()*6});
 (function d(){cx.clearRect(0,0,cv.width,cv.height);cx.fillStyle='rgba(255,255,255,.85)';fl.forEach(function(f){f.y+=f.s/cv.height*2.2;f.w+=.01;if(f.y>1){f.y=-.02;f.x=Math.random();}cx.beginPath();cx.arc(f.x*cv.width+Math.sin(f.w)*14,f.y*cv.height,f.r,0,6.3);cx.fill();});requestAnimationFrame(d);})();}
function wc(t,v){return v<5?t:13.12+.6215*t-11.37*Math.pow(v,.16)+.3965*t*Math.pow(v,.16);}
var ht=$('hd-t');if(ht){var a=-12,dir=1;setInterval(function(){a+=dir;if(a>-6||a<-20)dir=-dir;var f=Math.round(wc(a,30));ht.innerHTML=a+'&deg;C';var ha=$('hu-a');if(ha){ha.innerHTML=a+'&deg;';$('hu-f').innerHTML=f+'&deg;';}},2200);}
var ct=$('ch-t');if(ct){var cvv=$('ch-v');function ch(){var t=+ct.value,v=+cvv.value,f=Math.round(wc(t,v));$('ch-to').innerHTML=t+'&deg;C';$('ch-vo').textContent=v+' km/h';$('ch-o').innerHTML=f+'&deg;C';$('ch-f').style.height=Math.max(3,Math.min(100,(10-f)/70*100))+'%';
 var r=f>-10?['Low risk','#2E8B57','Dress warmly and cover your head, hands and neck.']:f>-28?['Moderate risk','#C98A1A','Exposed skin gets cold fast. Cover up and check faces and fingers.']:f>-40?['High risk: frostbite possible in 10 to 30 minutes','#D7352B','Cover all exposed skin and limit time outside.']:f>-48?['Very high risk: frostbite possible in 5 to 10 minutes','#A3201A','Stay sheltered where you can and keep every bit of skin covered.']:['Extreme risk: frostbite possible in under 5 minutes','#6E0F0B','Outdoor time is dangerous. Stay indoors if you can.'];
 var rr=$('ch-r');rr.textContent=r[0];rr.style.setProperty('--rc',r[1]);$('ch-n').textContent=r[2]+' Uses the wind chill index used in North America; follow local weather warnings.';}
 [ct,cvv].forEach(function(e){e.addEventListener('input',ch);});ch();}
var es=$('ex-s');if(es){var ly=[].slice.call(es.querySelectorAll('.pk-ly')),sec=es.closest('.pk-ex');function ex(){var p=0;if(innerWidth>1080){var r=sec.getBoundingClientRect();p=Math.max(0,Math.min(1,-r.top/(sec.offsetHeight-innerHeight)));}else{var r2=es.getBoundingClientRect();p=Math.max(0,Math.min(1,(innerHeight-r2.top)/(innerHeight)));}
 ly.forEach(function(l,i){l.style.setProperty('--e',((3-i)*p*70-(i*0)).toFixed(1));l.style.transform='rotateX(58deg) rotateZ(-30deg) translateZ('+((1.5-i)*(28+p*80)).toFixed(1)+'px)';});}addEventListener('scroll',ex,{passive:true});ex();}
var po=$('pp-o');if(po){var s={c:1,a:0,w:0};function seg(id,k){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.addEventListener('click',function(){s[k]=+b.getAttribute('data-v');bs.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});pp();});});}
 function pp(){var need=s.c+(s.a===1?1:s.a===2?-1:0),len=s.a===2?0:Math.min(2,Math.max(0,need-1)),ins,fill;need=Math.max(0,Math.min(4,need));
  ins=s.w?'Synthetic insulation or water-resistant down under a waterproof shell':'Down';fill=['Light: about 100 g synthetic or 550 fill down','Medium: 150 g synthetic or 600 to 650 fill down','Warm: 200 g synthetic or 650 to 700 fill down','Very warm: 700+ fill down, heavily filled','Expedition: 800 fill down and a full, deep hood'][need];
  var L=['Hip length','Thigh length','Knee length'][len],H=need>=3?'Deep, adjustable hood with a fur or faux fur ruff':need>=1?'Adjustable insulated hood':'Simple hood, or none';
  var hem=[220,250,285][len];$('pp-b').setAttribute('d','M60 70h80l20 30-'+(len?6:10)+' '+(hem-100)+'H'+(len?44:50)+'L40 100z');$('pp-z').setAttribute('d','M100 70V'+hem);var ph=$('pp-h');ph.setAttribute('d',need>=3?'M62 76c-6-46 82-46 76 0':'M70 72c0-30 60-30 60 0');ph.classList.toggle('fur',need>=3);
  po.innerHTML='<h3>'+['City coat','Winter parka','Cold-climate parka','Arctic parka','Expedition parka'][need]+'</h3><dl><div><dt>Insulation</dt><dd>'+ins+'</dd></div><div><dt>Warmth</dt><dd>'+fill+'</dd></div><div><dt>Length</dt><dd>'+L+'</dd></div><div><dt>Hood</dt><dd>'+H+'</dd></div></dl>';}
 seg('pp-c','c');seg('pp-a','a');seg('pp-w','w');pp();}
var gi=$('ga-i');if(gi){var w=gi.parentNode.parentNode;function gl(){var r=w.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height));gi.style.height=(p*100)+'%';}addEventListener('scroll',gl,{passive:true});gl();}
})();
