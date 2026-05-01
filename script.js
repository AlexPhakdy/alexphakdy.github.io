document.addEventListener('DOMContentLoaded', function(){
	const avatar = document.querySelector('.hero-profile');
	const contact = document.getElementById('contact');
	if(avatar && contact){
		function goContact(){ contact.scrollIntoView({behavior:'smooth'}); }
		avatar.addEventListener('click', goContact);
		avatar.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') goContact(); });
	}

	// Mobile nav toggle
	const navToggle = document.getElementById('nav-toggle');
	const mainNav = document.getElementById('main-nav');
	if(navToggle && mainNav){
		navToggle.addEventListener('click', ()=>{
			navToggle.classList.toggle('is-open');
			mainNav.classList.toggle('is-open');
		});
	}
});

