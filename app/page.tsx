const DROPBOX_URL =
  "https://www.dropbox.com/scl/fo/qzcsu4cwixa4rf7pdpb4f/APnFDB4zZ88cRfSVpodHQGc/%F0%9F%93%B7%20Photos?dl=0&rlkey=bbtu1qa3p6hlcmt1ig41h7jeq&subfolder_nav_tracking=1";

const INSTAGRAM_MEMORIAL_CHAT = "https://ig.me/j/AbZk8mBjLfMaRfqt/";

const archiveImages = [
  { src: "/archive/night-out.jpg", alt: "Maahez celebrating with friends", className: "archive-wide" },
  { src: "/archive/desert.jpg", alt: "Maahez with friends in the desert", className: "archive-tall" },
  { src: "/archive/road.jpg", alt: "Maahez on the road with friends", className: "archive-small" },
  { src: "/archive/city-day.jpg", alt: "Maahez sharing a day in the city", className: "archive-tall" },
  { src: "/archive/bike.jpg", alt: "Maahez riding a bicycle at home", className: "archive-small" },
  { src: "/archive/home.jpg", alt: "A candid memory of Maahez at home", className: "archive-wide" },
];

const friendsInSound = [
  {
    src: "/archive/maahez-hugel.jpg",
    eyebrow: "Shared stages",
    name: "With HUGEL",
    alt: "Maahez smiling in the DJ booth beside HUGEL",
  },
  {
    src: "/archive/maahez-tiedye.jpg",
    eyebrow: "Friends & collaborators",
    name: "With TIEDYE",
    alt: "Maahez celebrating with TIEDYE and friends",
  },
  {
    src: "/archive/maahez-rick-silver.jpg",
    eyebrow: "Life beyond the booth",
    name: "With Rick Silver",
    alt: "Maahez with Rick Silver and friends",
  },
];

const merch = [
  {
    name: "No Shazam Zone",
    type: "T-Shirt",
    price: "$40",
    image: "/merch/no-shazam-zone-t-shirt.webp",
    url: "https://maahez.com/products/no-shazam-zone-t-shirt",
  },
  {
    name: "Aliens Are Real.",
    type: "T-Shirt",
    price: "$40",
    image: "/merch/aliens-are-real-t-shirt.webp",
    url: "https://maahez.com/products/aliens-are-real-t-shirt",
  },
  {
    name: "U.F.O.",
    type: "Hoodie",
    price: "$60",
    image: "/merch/u-f-o-hoodie.webp",
    url: "https://maahez.com/products/u-f-o-hoodie",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Maahez memorial home">
          MAAHEZ
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#music">Music</a>
          <a href="#events">Events</a>
          <a href="#memories">Photo archive</a>
          <a href="#merch">Merch</a>
        </nav>
        <a className="header-social" href="https://www.instagram.com/maahez/" target="_blank" rel="noreferrer">
          Instagram <Arrow />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src="/photos/portrait-red.webp" alt="Maahez behind the decks, illuminated in red" />
        <div className="hero-veil" />
        <div className="hero-copy">
          <p className="eyebrow">In memory of Mauro Menendez</p>
          <img className="hero-logo" src="/maahez-logo.webp" alt="Maahez" />
          <h1 id="hero-title" className="sr-only">MAAHEZ — In memory of Mauro Menendez</h1>
          <p className="hero-line">Artist. Producer. Friend.</p>
        </div>
        <div className="hero-footer">
          <span>Havana · Mexico City · Miami · Los Angeles</span>
          <a href="#story">Remember him <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="quote-section" aria-label="A quote from Maahez">
        <p className="section-index">01 / His words</p>
        <blockquote>
          “Stats are cool, but what matters is the way music makes you feel.”
        </blockquote>
        <p className="quote-credit">— MAAHEZ</p>
      </section>

      <section className="story-section" id="story">
        <div className="story-intro">
          <p className="section-index">02 / The artist</p>
          <h2>A sound that moved without borders.</h2>
        </div>
        <div className="story-copy">
          <p className="story-lead">
            Born in Havana, raised in Mexico City, and shaped by Miami and Los Angeles, Maahez made music that belonged everywhere at once.
          </p>
          <p>
            He brought Latin rhythm, house, and global bass into the same room—and made the room move. His work reached festival stages from EDC and Ultra to Burning Man, earned millions of streams, and contributed to a Latin Grammy–nominated album.
          </p>
          <p>
            But the numbers were never the point. The point was the feeling: the exchange between the booth and the dance floor, the friends who became family, and the belief that music could make strangers understand one another.
          </p>
        </div>
      </section>

      <section className="performance-photo" aria-label="Maahez performing to a crowd">
        <img src="/photos/crowd.webp" alt="Maahez facing a packed dance floor from the DJ booth" />
        <p>One room. One frequency.</p>
      </section>

      <section className="music-section" id="music">
        <div className="music-copy">
          <p className="section-index">03 / Keep listening</p>
          <h2>The music stays.</h2>
          <p>
            Play it loud. Share the records. Let the work keep finding new rooms and new people.
          </p>
          <div className="music-links">
            <a href="https://open.spotify.com/artist/3i6JYFidKoDsJTtRLMkPXZ" target="_blank" rel="noreferrer">Spotify <Arrow /></a>
            <a href="https://soundcloud.com/maahez" target="_blank" rel="noreferrer">SoundCloud <Arrow /></a>
            <a href="https://music.apple.com/us/artist/maahez/1050670648" target="_blank" rel="noreferrer">Apple Music <Arrow /></a>
            <a href="https://www.youtube.com/channel/UCVmexWl_9MT98xe2tfV6Pfw" target="_blank" rel="noreferrer">YouTube <Arrow /></a>
          </div>
        </div>
        <div className="spotify-frame">
          <iframe
            title="Listen to Maahez on Spotify"
            src="https://open.spotify.com/embed/artist/3i6JYFidKoDsJTtRLMkPXZ?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <section className="photo-pair" aria-label="Maahez performing">
        <figure>
          <img src="/photos/decks-red.webp" alt="Maahez focused on the decks during a red-lit set" />
        </figure>
        <figure className="photo-pair-secondary">
          <img src="/photos/winter-set.webp" alt="Maahez performing an outdoor set in winter" />
          <figcaption>Always in motion. Always building the next sound.</figcaption>
        </figure>
      </section>

      <section className="events-section" id="events">
        <div className="events-heading">
          <div>
            <p className="section-index">04 / Memorial events</p>
            <h2>Come together for Maahez.</h2>
          </div>
          <p>
            Friends, family, and the community will gather in Los Angeles and Miami this August. Full dates, venues, and details will be shared as soon as they are confirmed.
          </p>
        </div>

        <div className="event-grid">
          <article className="event-card">
            <div className="event-date">
              <span>August</span>
              <strong>TBD</strong>
            </div>
            <div className="event-city">
              <p>Memorial gathering</p>
              <h3>Los Angeles</h3>
              <span>California · Details to come</span>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span>August</span>
              <strong>TBD</strong>
            </div>
            <div className="event-city">
              <p>Memorial gathering</p>
              <h3>Miami</h3>
              <span>Florida · Details to come</span>
            </div>
          </article>
        </div>

        <div className="memorial-chat">
          <div className="chat-mark" aria-hidden="true">IG</div>
          <div className="chat-copy">
            <p>Event announcements and community updates</p>
            <h3>MAAHEZ Burn Memorial Group Chat</h3>
          </div>
          <a href={INSTAGRAM_MEMORIAL_CHAT} target="_blank" rel="noreferrer">
            Join on Instagram <Arrow />
          </a>
        </div>
      </section>

      <section className="memories-section" id="memories">
        <div className="memories-heading">
          <div>
            <p className="section-index">05 / Shared Dropbox archive</p>
            <h2>The moments between the stages.</h2>
          </div>
          <div className="memories-aside">
            <p>
              The archive holds the parts of a life that never fit inside a set list:
              friendships, studio hours, road trips, sunrise conversations, and
              the laughter that carried on after the room went quiet.
            </p>
            <p>
              It belongs to everyone who knew him. Add the photographs you keep
              close, revisit the ones already here, and help preserve the full
              story of Mauro beyond the stage.
            </p>
            <a className="archive-inline-link" href={DROPBOX_URL} target="_blank" rel="noreferrer">
              Add your photos to Dropbox <Arrow />
            </a>
          </div>
        </div>

        <div className="friends-feature">
          <div className="friends-intro">
            <p className="section-index">Friends in sound</p>
            <p>
              Music kept widening his circle—friends, collaborators, and fellow
              artists who shared booths, long nights, and the road with him.
            </p>
          </div>
          <div className="friends-grid">
            {friendsInSound.map((friend) => (
              <figure className="friend-card" key={friend.src}>
                <img src={friend.src} alt={friend.alt} loading="lazy" />
                <figcaption>
                  <span>{friend.eyebrow}</span>
                  <strong>{friend.name}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="archive-grid">
          {archiveImages.map((image) => (
            <figure className={image.className} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <a className="archive-cta" href={DROPBOX_URL} target="_blank" rel="noreferrer">
          <span className="archive-cta-copy">
            <small>Shared MAAHEZ photo archive</small>
            <strong>View, download &amp; add photos</strong>
            <em>Open the community Dropbox folder</em>
          </span>
          <span className="archive-cta-arrow"><Arrow /></span>
        </a>
      </section>

      <section className="merch-section" id="merch">
        <div className="merch-heading">
          <p className="section-index">06 / Support his family</p>
          <h2>Wear the memories forward.</h2>
          <div className="family-note">
            <span className="signal-dot" aria-hidden="true" />
            <p>All proceeds from official MAAHEZ merchandise go directly to his family.</p>
          </div>
        </div>

        <div className="merch-grid">
          {merch.map((item) => (
            <a className="merch-card" href={item.url} target="_blank" rel="noreferrer" key={item.name}>
              <div className="merch-image-wrap">
                <img src={item.image} alt={`${item.name} ${item.type}`} loading="lazy" />
              </div>
              <div className="merch-meta">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </div>
                <p>{item.price} <Arrow /></p>
              </div>
            </a>
          ))}
        </div>

        <a className="text-link" href="https://maahez.com/merch" target="_blank" rel="noreferrer">
          View all official merchandise <Arrow />
        </a>
      </section>

      <section className="closing-section">
        <img src="/photos/dancefloor.webp" alt="Maahez performing beneath a mirror ball" loading="lazy" />
        <div className="closing-overlay" />
        <div className="closing-copy">
          <p className="section-index">A life in music</p>
          <h2>Thank you for the feeling.</h2>
          <p>MAAHEZ / Mauro Menendez</p>
        </div>
      </section>

      <footer>
        <img src="/maahez-logo.webp" alt="Maahez" />
        <p>A memorial created with love by the people who knew him.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/maahez/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://maahez.com/gallery" target="_blank" rel="noreferrer">Original gallery</a>
          <a href="#events">Memorial events</a>
          <a href={INSTAGRAM_MEMORIAL_CHAT} target="_blank" rel="noreferrer">Memorial group chat</a>
          <a href={DROPBOX_URL} target="_blank" rel="noreferrer">Photo archive</a>
          <a href="https://maahez.com/merch" target="_blank" rel="noreferrer">Merch</a>
        </div>
      </footer>
    </main>
  );
}
