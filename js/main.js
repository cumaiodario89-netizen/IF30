const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=t=>`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t||CONFIG.mensagem)}`;
$$("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa||"");a.target="_blank";a.rel="noopener"});
// contagem decrescente
const D=new Date(CONFIG.deadline),p=x=>String(x).padStart(2,"0");
function tick(){const s=Math.max(0,Math.floor((D-new Date())/1e3));
 const t=s?`${Math.floor(s/86400)}d ${p(Math.floor(s%86400/3600))}h ${p(Math.floor(s%3600/60))}m ${p(s%60)}s`:"encerradas";
 $$(".cd").forEach(e=>e.textContent=t)}
tick();setInterval(tick,1e3);
// efeito de escrita
const phr=[["Hello, I speak English!","Olá, eu falo inglês!"],["I can introduce myself.","Eu consigo apresentar-me."],["Nice to meet you!","Muito prazer!"],["I want this job.","Eu quero este emprego."],["Let's talk in English.","Vamos falar em inglês."]];
let pi=0,ci=0,del=false;const te=$("#tw"),tr=$("#tr");
(function ty(){const f=phr[pi][0];ci+=del?-1:1;te.textContent=f.slice(0,ci);
 if(!del&&ci===f.length){tr.textContent="= "+phr[pi][1];del=true;return setTimeout(ty,1700)}
 if(del&&ci===0){del=false;pi=(pi+1)%phr.length;tr.textContent=""}
 setTimeout(ty,del?28:65)})();
// marquee
const mq=phr.map(x=>x[0]).concat(["Learn with confidence","Speak with purpose","Método FI30","30 dias"]).map(x=>`<span>${x}</span>`).join("");
$(".mq div").innerHTML=mq+mq;
// 30 dias
const dg=$("#days");for(let i=1;i<=30;i++)dg.insertAdjacentHTML("beforeend",`<div class="d">${i}</div>`);
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();$$(".d").forEach((d,i)=>setTimeout(()=>d.classList.add("on"),i*70))}},{threshold:.4}).observe(dg);
// revelar ao scroll
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));
// barra de progresso
addEventListener("scroll",()=>$("#prog").style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+"%");
// oferta
$("#vagas").textContent=CONFIG.vagas;
$("#price").innerHTML=CONFIG.preco?`${CONFIG.precoAntigo?`<div class="old">${CONFIG.precoAntigo}</div>`:""}<div class="price g">${CONFIG.preco}</div>`:`<div class="price g">Preço de lançamento</div><p class="sub" style="margin:0 auto">Fala com a Caima no WhatsApp para saberes o valor.</p>`;
