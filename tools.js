
(function(){
  const $=id=>document.getElementById(id);
  const fmt=n=>"$"+Math.round(n).toLocaleString("en-US");
  const num=el=>{const v=parseFloat(String(el.value).replace(/[^0-9.]/g,""));return isNaN(v)?0:v};
  function money(el){el.addEventListener("blur",()=>{const v=num(el);el.value=v?v.toLocaleString("en-US"):""});}


  function seg(id,cb){$(id).addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;[...$(id).querySelectorAll("button")].forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"));cb();});}
  const segVal=id=>+$(id).querySelector('[aria-pressed="true"]').dataset.v;

  // hurricane
  function hur(){const dw=num($("dw")),p=segVal("pct"),ad=num($("ad"));const h=dw*p/100;
    $("hOut").textContent=fmt(h);
    $("hTxt").textContent="That's "+p+"% of "+fmt(dw)+". Your policy pays for wind damage above that amount, up to your limits.";
    $("hReg").textContent=fmt(ad);
    $("hX").textContent=ad>0?(Math.round(h/ad*10)/10)+"×":"—";}
  if($("dw")){["dw","ad"].forEach(i=>{$(i).addEventListener("input",hur);money($(i));});seg("pct",hur);hur();}

  // limits
  function lim(){const assets=num($("eq"))+num($("sv"));const l=segVal("lim")*1000;const per={25:25000,50:50000,100:100000,250:250000}[l/1000]||l;
    const crash=300000; // illustrative serious-injury claim
    const gap=Math.max(0,Math.min(assets,crash-per));
    $("lHead").innerHTML="With "+fmt(assets)+" to protect and "+fmt(per)+" per person in coverage, a serious injury claim could put up to";
    $("lOut").textContent=fmt(gap)+" of your money at risk";
    $("lMeter").style.width=(assets?Math.min(100,gap/assets*100):0)+"%";
    let note;
    if(gap===0) note='<span class="pill ok">Well covered for this example</span> Your limits cover what you own in this scenario. If your assets grow, an umbrella policy adds $1 million or more for a modest cost.';
    else if(per<100000) note='<span class="pill bad">Big gap</span> The state minimum protects other drivers far less than most people assume, and you could be sued for the rest. Many people who own a home choose at least 100/300/100, and add an umbrella policy once they have more to protect.';
    else note='<span class="pill warn">Some exposure</span> Your limits are better than the minimum, but they may not cover everything you own. An umbrella policy can add $1 million or more on top of your auto and home coverage.';
    $("lTxt").innerHTML=note+" <br><span style=\"font-size:15px;color:var(--muted)\">Example assumes one person is seriously hurt with a claim of "+fmt(crash)+". Real claims vary widely.</span>";}
  if($("eq")){["eq","sv"].forEach(i=>{$(i).addEventListener("input",lim);money($(i));});seg("lim",lim);lim();}

  if($("rooms")){
  // inventory
  const R={"Living room":["TV and sound system","Furniture: sofa, chairs, tables","Rugs, lamps and art","Game consoles and electronics"],"Kitchen":["Refrigerator, range, microwave, dishwasher","Small appliances","Dishes, cookware and cutlery (open the cabinets)"],"Bedrooms":["Beds, mattresses and dressers","Clothing and shoes (open the closets)","Jewelry and watches (close-ups)","Laptops, tablets and phones"],"Office":["Computers, monitors and printers","Desk, chair and shelving","Important papers: copies of IDs, policies, deeds"],"Garage and outside":["Tools, mowers and yard equipment","Bikes, kayaks and sports gear","Grill and patio furniture","Golf cart or other small vehicles"],"Whole house":["Each room from the doorway, all four corners","Serial numbers on big-ticket items","Receipts for recent large purchases","The outside of the house and roof"]};
  const KEY="mig-inventory";let saved={};try{saved=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){}
  let html="",k=0;for(const room in R){html+='<details class="room card" open><summary>'+room+'</summary>';R[room].forEach(t=>{const id="i"+(k++);html+='<label class="item" for="'+id+'"><input type="checkbox" id="'+id+'"'+(saved[id]?" checked":"")+'><span>'+t+'</span></label>'});html+='</details>';}
  $("rooms").innerHTML=html;
  const boxes=[...document.querySelectorAll("#rooms input")];
  function inv(){const n=boxes.filter(b=>b.checked).length;$("iCount").textContent=n+" of "+boxes.length+" done";$("iBar").style.width=(n/boxes.length*100)+"%";const s={};boxes.forEach(b=>{if(b.checked)s[b.id]=1});try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){}}
  boxes.forEach(b=>b.addEventListener("change",inv));
  $("iReset").addEventListener("click",()=>{boxes.forEach(b=>b.checked=false);inv();});

  inv();
  $("iPrint").addEventListener("click",()=>window.print());
  }
})();
