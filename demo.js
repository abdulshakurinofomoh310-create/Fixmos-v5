const demos = [
  {id:'phone1', title:'iPhone 13 — Screen Replacement', device:'iPhone 13', difficulty:'Medium', img:'assets/images/iphone13.png', desc:'Replace display assembly step-by-step.', video:'https://www.youtube.com/embed/0Y8k1bHqXv0'},
  {id:'gpu1', title:'Laptop GPU — Reflow Overview', device:'Laptop GPU', difficulty:'Expert', img:'assets/images/gpu_reflow.png', desc:'Educational reflow overview.', video:'https://www.youtube.com/embed/6fG3yQ5oN0Y'},
  {id:'cpu1', title:'CPU Pin Align — Gentle Straighten', device:'Desktop CPU', difficulty:'Advanced', img:'assets/images/cpu_pins.png', desc:'Inspect and straighten pins.'}
];

function buildDemos(){
  const grid = document.getElementById('demoGrid');
  demos.forEach(d=>{
    const el = document.createElement('div'); el.className='titem';
    el.innerHTML = `<img src="${d.img}" alt="${d.title}"><strong>${d.title}</strong><div class="muted">${d.device} • ${d.difficulty}</div><p class="muted">${d.desc}</p><div style="margin-top:auto"><button class="btn btn-primary" onclick="openDemo('${d.id}')">Open Demo</button></div>`;
    grid.appendChild(el);
  });
}

function openDemo(id){
  const d = demos.find(x=>x.id===id);
  if(!d) return;
  // open a simple modal-like window using new tab (printable)
  const html = `<html><head><title>${d.title}</title><style>body{font-family:Arial;padding:20px}h1{color:${'#007bff'}}</style></head><body><h1>${d.title}</h1><p>${d.desc}</p>${d.video ? '<iframe width="100%" height="360" src="'+d.video+'" frameborder="0" allowfullscreen></iframe>' : ''}<p style="margin-top:12px">Contact: Inofomoh Abdulshakur • +2347044618291 • inofomohabdulshakur310@gmail.com</p></body></html>`;
  const w = window.open('','_blank'); w.document.write(html); w.document.close();
}

document.getElementById('demoBtn').addEventListener('click', ()=>{
  openDemo('phone1');
});
document.getElementById('requestBtn').addEventListener('click', ()=>{
  // keep behavior default (wa link)
});
document.getElementById('contactBtn').addEventListener('click', ()=>{
  // mailto link exists
});

// populate hero image placeholders
function seedImages(){
  const assets = ['iphone13.png','gpu_reflow.png','cpu_pins.png','hero-placeholder.png'];
  assets.forEach(name=>{
    // create simple placeholder images (SVG data URLs) and save in assets/images via base64 data - since we cannot write binary here, we point to placeholder.com
  });
}

buildDemos();
seedImages();