
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

  // umbrella
  if($("uA")){
    const boxes=[...document.querySelectorAll('input[data-w]')];
    function umb(){const a=num($("uA"));let sc=boxes.reduce((t,b)=>t+(b.checked?+b.dataset.w:0),0);
      if(a>=1000000)sc+=4;else if(a>=500000)sc+=3;else if(a>=250000)sc+=1;
      const pct=Math.min(100,sc/14*100);$("uMeter").style.width=pct+"%";
      let head,txt;
      if(sc>=6){head="Strong candidate";txt="You have more to protect and more ways to get sued than most households. An umbrella policy is one of the best values in insurance for a situation like yours.";}
      else if(sc>=3){head="Worth a look";txt="You have a few risk factors. Ask for an umbrella quote with your next auto or home review. The price may surprise you.";}
      else{head="Probably fine for now";txt="Your auto and home liability limits may be enough today. Check again if you add a teen driver, a pool, a boat or a rental property, or as your savings grow.";}
      $("uOut").textContent=head;
      $("uTxt").textContent=txt+(a>0?" Right now about "+fmt(a)+" of what you own could be exposed in a lawsuit bigger than your policy limits.":"");}
    boxes.forEach(b=>b.addEventListener("change",umb));$("uA").addEventListener("input",umb);money($("uA"));umb();}

  // flood
  if($("f1")){
    const ids=["f1","f2","f3","f4","f5"],w={f1:5,f2:2,f3:2,f4:4,f5:1};
    function fl(){let sc=0;ids.forEach(i=>sc+=segVal(i)*w[i]);const mort=segVal("f6")===1,zone=segVal("f1");
      $("fMeter").style.width=Math.min(100,sc/14*100)+"%";
      let head,txt;
      if(zone===1){head="High risk";txt="Homes in A or V zones have the highest flood risk."+(mort?" Your lender almost certainly requires flood insurance.":" Even without a mortgage, flood coverage is strongly worth it here.");}
      else if(sc>=4){head="Elevated risk";txt="You're not in a high-risk zone, but the signs point to real flood exposure. Coverage outside the high-risk zones is often affordable.";}
      else if(sc>=1.5){head="Moderate risk";txt="You have a risk factor or two. Flood coverage outside the high-risk zones is often lower in cost, and it's worth getting a quote.";}
      else{head="Lower risk";txt="Your answers point to lower flood risk. Heavy rain can still flood homes almost anywhere, so a low-cost policy is still worth considering.";}
      if(segVal("f1")===0.5)txt+=" Look up your flood zone first, since it changes the picture a lot.";
      $("fOut").textContent=head;$("fTxt").textContent=txt;}
    ["f1","f2","f3","f4","f5","f6"].forEach(i=>seg(i,fl));fl();}

  // deductible
  if($("dC")){
    function ded(){const c=num($("dC")),n=num($("dN")),sv=num($("dS")),e=num($("dE"));const x=n-c;
      $("dX").textContent=x>0?fmt(x):"—";$("d5").textContent=fmt(sv*5);
      if(x<=0){$("dOut").textContent="—";$("dTxt").textContent="Enter a higher deductible than the one you have now.";return;}
      if(sv<=0){$("dOut").textContent="—";$("dTxt").textContent="Enter how much the higher deductible would save you each year.";return;}
      const yrs=x/sv;$("dOut").textContent=(Math.round(yrs*10)/10)+" claim-free years";
      let t;
      if(yrs<=3)t='<span class="pill ok">Good trade</span> The savings make up the difference quickly. ';
      else if(yrs<=6)t='<span class="pill warn">Could go either way</span> It pays off if you rarely file claims. ';
      else t='<span class="pill bad">Probably not worth it</span> It takes a long time for the savings to cover the extra risk. ';
      if(e<n)t+="One caution: the higher deductible is more than the cash you could get to quickly, so a claim could be a real strain.";
      else t+="You have enough cash on hand to cover the higher deductible if you need to.";
      $("dTxt").innerHTML=t;}
    ["dC","dN","dS","dE"].forEach(i=>{$(i).addEventListener("input",ded);money($(i));});ded();}

  // business
  if($("bT")){
    function biz(){const t=$("bT").querySelector('[aria-pressed="true"]').dataset.v,emp=num($("bE")),veh=segVal("bV"),sp=segVal("bP"),dat=segVal("bD");
      const L=[];const add=(lvl,name,why)=>L.push([lvl,name,why]);
      if(t==="home"){add("need","Home business coverage","Your homeowners policy usually covers very little business property and no business liability. A rider or small business policy fixes that.");}
      else add("need","General liability","Covers injuries and property damage you cause to customers and others. Most leases and contracts require it.");
      if(sp&&t!=="home")add("need","Business owners policy (BOP)","Puts property and liability together, often for less than buying them separately. Covers your equipment, inventory and lost income after a covered loss.");
      if(emp>=4)add("need","Workers' compensation","South Carolina generally requires it with four or more employees. It covers medical bills and lost wages for injured workers.");
      else if(emp>=1)add("consider","Workers' compensation","You may be under South Carolina's four-employee requirement, but one injury can still cost a lot. It's often required on contracts.");
      if(veh)add("need","Commercial auto","Covers vehicles used for work. Personal auto policies often exclude business use.");
      if(veh&&emp>=1)add("consider","Hired and non-owned auto","Covers your business when employees drive their own cars on errands for you.");
      if(t==="trade"){add("need","Tools and equipment (inland marine)","Covers tools and equipment on job sites and in your truck.");add("consider","Contractor's umbrella","Many general contractors and commercial jobs require $1 million or more in extra liability.");}
      if(t==="office")add("need","Professional liability (E&O)","Covers claims that your advice or work caused someone a financial loss.");
      if(t==="food")add("need","Liquor liability","Required if you serve or sell alcohol. General liability usually excludes it.");
      if(t==="food"||t==="retail")add("consider","Equipment breakdown and spoilage","Covers coolers, ovens and inventory if equipment fails.");
      if(t==="np"){add("need","Directors and officers (D&O)","Protects your board members from claims about their decisions.");add("consider","Abuse and molestation coverage","Often required for groups that serve children.");}
      if(dat)add("consider","Cyber liability","Covers data breaches, hacked accounts and wire-transfer scams.");
      add("consider","Umbrella or excess liability","Adds extra limits on top of your liability and auto policies.");
      L.sort((a,b)=>(a[0]==="need"?0:1)-(b[0]==="need"?0:1));$("bOut").innerHTML=L.map(([l,n,w])=>'<div class="compare" style="margin-top:10px;grid-template-columns:1fr"><div><span class="pill '+(l==="need"?"bad":"warn")+'">'+(l==="need"?"Most need this":"Worth considering")+'</span><b style="font-size:20px;margin-top:4px">'+n+'</b><span>'+w+'</span></div></div>').join("");}
    seg("bT",biz);["bV","bP","bD"].forEach(i=>seg(i,biz));$("bE").addEventListener("input",biz);biz();}

  // storm checklist
  if($("sSteps")){
    const S=JSON.parse($("sSteps").dataset.steps);const KEY="mig-storm";let saved={};try{saved=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){}
    let html="",k=0,n=1;for(const st in S){html+='<details class="room card" open><summary>'+(n++)+'. '+st+'</summary>';S[st].forEach(t=>{const id="s"+(k++);html+='<label class="item" for="'+id+'"><input type="checkbox" id="'+id+'"'+(saved[id]?" checked":"")+'><span>'+t+'</span></label>'});html+='</details>';}
    $("sSteps").innerHTML=html;const bx=[...document.querySelectorAll("#sSteps input")];
    function st(){const c=bx.filter(b=>b.checked).length;$("sCount").textContent=c+" of "+bx.length+" done";$("sBar").style.width=(c/bx.length*100)+"%";const s={};bx.forEach(b=>{if(b.checked)s[b.id]=1});try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){}}
    bx.forEach(b=>b.addEventListener("change",st));$("sReset").addEventListener("click",()=>{bx.forEach(b=>b.checked=false);st();});$("sPrint").addEventListener("click",()=>window.print());st();}
})();
