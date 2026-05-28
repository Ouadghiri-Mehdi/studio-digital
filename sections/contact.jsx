/* eslint-disable */
// Contact + footer

const { useState: useStateC } = React;

function Contact() {
  const [email, setEmail] = useStateC("");
  const [idea, setIdea] = useStateC("");
  const [sent, setSent] = useStateC(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && idea.trim().length > 4;

  return (
    <section id="contact" data-screen-label="07 Contact" className="contact">
      <div className="container">
        <div className="contact-head reveal">
          <span className="eyebrow">07 — contact</span>
          <h2 className="h-section contact-title">
            Have an idea? <em className="serif">Let's</em> build it together.
          </h2>
        </div>

        <div className="contact-grid">
          <form
            className="contact-form glass reveal"
            onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true); }}
          >
            {!sent ? (
              <>
                <label className="contact-field">
                  <span className="eyebrow">your email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@studio.com"
                    data-cursor="text"
                  />
                </label>
                <label className="contact-field">
                  <span className="eyebrow">the idea, in one paragraph</span>
                  <textarea
                    rows={5}
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="A booking platform for indie tour guides. Right now they juggle WhatsApp and a Google Sheet…"
                    data-cursor="text"
                  />
                </label>

                <div className="contact-meta">
                  <div className="contact-chips">
                    <span className="chip">budget · open</span>
                    <span className="chip">timeline · flexible</span>
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary ${valid ? "" : "is-disabled"}`}
                    disabled={!valid}
                    data-cursor="hover"
                  >
                    Send the brief
                    <span className="arrow"><Arrow /></span>
                  </button>
                </div>
              </>
            ) : (
              <div className="contact-sent">
                <div className="contact-sent-dot" />
                <h3 className="h-3">Thanks — got it.</h3>
                <p>
                  We read every message ourselves. Expect a reply from Mehdi
                  or Ahmed within one working day, usually with a quick call offer attached.
                </p>
                <button className="btn btn-ghost" onClick={() => { setSent(false); setEmail(""); setIdea(""); }} data-cursor="hover">
                  Send another <span className="arrow"><Arrow /></span>
                </button>
              </div>
            )}
          </form>

          <aside className="contact-side reveal delay-1">
            <div className="contact-direct">
              <span className="eyebrow">direct line</span>
              <a className="contact-mail" href="mailto:hello@nexora-studio.com" data-cursor="hover">
                hello@nexora-studio.com
              </a>
            </div>

            <div className="contact-block">
              <span className="eyebrow">elsewhere</span>
              <ul className="contact-links">
                {[
                  { l: "LinkedIn", h: "—", k: "/in/studio-digital" },
                  { l: "GitHub", h: "—", k: "/studio-digital" },
                  { l: "Instagram", h: "—", k: "@studio.digital" },
                  { l: "Read.cv", h: "—", k: "/studio-digital" },
                ].map((row) => (
                  <li key={row.l}>
                    <a href="#" data-cursor="hover">
                      <span>{row.l}</span>
                      <span className="contact-link-arrow"><Arrow /></span>
                      <span className="contact-link-handle">{row.k}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-block">
              <span className="eyebrow">booking</span>
              <p className="contact-note">
                We are currently open for new projects.
                <em className="serif"> Let's talk</em> — send us your idea and
                we'll get back to you within 24 hours.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="footer-mega">
            nexora<br />
            <span className="serif">studio</span><span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div className="footer-sig">
            <span className="eyebrow">made by two, for many</span>
            <p className="footer-sig-body">
              A small independent digital innovation studio, available worldwide.
              Open for new projects — let's build something great together.
            </p>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h5>studio</h5>
            <a href="#studio">Who we are</a>
            <a href="#process">Process</a>
            <a href="#vision">Vision</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h5>capabilities</h5>
            <a href="#services">Design</a>
            <a href="#services">Engineering</a>
            <a href="#services">Branding</a>
            <a href="#services">AI integration</a>
          </div>
          <div>
            <h5>elsewhere</h5>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
            <a href="#">Read.cv</a>
          </div>
          <div>
            <h5>colophon</h5>
            <p>Space Grotesk · Instrument Serif · JetBrains Mono. Built in the open.</p>
            <p style={{ marginTop: 12 }}>© 2025 Nexora Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;
