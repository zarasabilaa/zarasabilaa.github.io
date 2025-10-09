     // Mobile nav toggle
    document.getElementById('navBtn').addEventListener('click',()=>{
      const m = document.getElementById('mobileNav');
      m.classList.toggle('hidden');
    });

    // Back to top visibility
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 400){ toTop.classList.remove('hidden'); } else { toTop.classList.add('hidden'); }
    });
    toTop.addEventListener('click',()=> window.scrollTo({top:0, behavior:'smooth'}));

    // WhatsApp form (fix URL concat bug)
    document.getElementById('whatsappForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const phone = '6281463918825';
      const text = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;
      const url = `https://wa.me/${phone}?text=${text}`;
      window.open(url, '_blank');
    });
