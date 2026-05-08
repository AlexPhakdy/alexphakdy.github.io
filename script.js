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

	// Auto-update "Now" month label
	const nowMonth = document.getElementById('now-month');
	if (nowMonth) {
		nowMonth.textContent = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
	}

	// Last.fm — current / most recent track
	const LASTFM_USER = 'AlexKuri';
	const LASTFM_KEY  = '992d656df7d7e673f34051c0680cc72e';
	const trackEl = document.getElementById('lastfm-track');

	if (trackEl && LASTFM_USER !== 'YOUR_LASTFM_USERNAME') {
		fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_KEY}&limit=1&format=json`)
			.then(r => r.json())
			.then(data => {
				const track = data?.recenttracks?.track?.[0];
				if (!track) return;
				const isNow = track['@attr']?.nowplaying === 'true';
				const title  = track.name;
				const artist = track.artist['#text'];
				const url    = track.url;
				trackEl.innerHTML = `${isNow ? '<span class="now-dot"></span>' : ''}<a href="${url}" target="_blank" rel="noopener">${title} — ${artist}</a>`;
			})
			.catch(() => {}); // silently fail — card stays as "—"
	}
});

