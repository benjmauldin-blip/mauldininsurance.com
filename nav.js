// Mauldin Insurance Group — mauldininsurance.com
// Central Navigation — edit this file to update ALL pages at once
document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
    <nav class="site-nav" id="site-nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <img src="https://irp.cdn-website.com/ed566c5d/dms3rep/multi/favicon.png" alt="Mauldin Insurance Group" class="nav-logo-img" />
          <div class="nav-logo-text">
            <span class="nav-logo-top">Mauldin Insurance Group</span>
            <span class="nav-logo-sub">Lexington, SC Independent Agent</span>
          </div>
        </a>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links">
          <li class="nav-dropdown">
            <button class="nav-link nav-drop-btn">Personal <span class="nav-arrow">&#9662;</span></button>
            <ul class="nav-submenu">
              <li><a href="/auto-insurance-south-carolina">🚗 Auto Insurance</a></li>
              <li><a href="/home-insurance-south-carolina">🏠 Home Insurance</a></li>
              <li><a href="/homeowners-insurance-lexington-sc">📍 Homeowners — Lexington SC</a></li>
              <li><a href="/new-to-lexington-sc-insurance">🏡 New to Lexington SC</a></li>
              <li><a href="/new-homeowners-lexington-sc">🔑 New Homeowners — Lexington</a></li>
              <li><a href="/bundle-home-auto-insurance-sc">💰 Bundle Home + Auto</a></li>
              <li><a href="/home-insurance-rate-increase-sc">📈 Rate Increase? Shop & Save</a></li>
              <li><a href="/renters-insurance-south-carolina">🏘️ Renters Insurance</a></li>
              <li><a href="/renters-insurance-lexington-sc">📍 Renters — Lexington SC</a></li>
              <li><a href="/life-insurance-south-carolina">💛 Life Insurance</a></li>
              <li><a href="/boat-insurance-lake-murray-sc">⛵ Boat — Lake Murray</a></li>
              <li><a href="/waterfront-home-insurance-lake-murray-sc">🌊 Waterfront Home — Lake Murray</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <button class="nav-link nav-drop-btn">Business <span class="nav-arrow">&#9662;</span></button>
            <ul class="nav-submenu">
              <li><a href="/business-insurance-south-carolina">💼 Business Insurance</a></li>
              <li><a href="/landlord-insurance-south-carolina">🏘️ Landlord Insurance</a></li>
              <li><a href="/airbnb-vrbo-insurance-lexington-sc">🏠 Airbnb &amp; VRBO Insurance</a></li>
              <li><a href="/home-office-insurance-sc">💻 Home Office Insurance</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <button class="nav-link nav-drop-btn">Service Areas <span class="nav-arrow">&#9662;</span></button>
            <ul class="nav-submenu">
              <li><a href="/homeowners-insurance-lexington-sc">📍 Lexington, SC</a></li>
              <li><a href="/insurance-columbia-sc">📍 Columbia, SC</a></li>
              <li><a href="/insurance-chapin-lake-murray-sc">📍 Chapin &amp; Lake Murray</a></li>
              <li><a href="/insurance-cayce-west-columbia-sc">📍 Cayce &amp; West Columbia</a></li>
              <li><a href="/service-areas">🗺️ All Service Areas</a></li>
            </ul>
          </li>
          <li><a href="https://www.southcarolinamedicareagency.com" class="nav-link" target="_blank">Medicare Site</a></li>
          <li><a href="https://www.mauldininsurancegroup.com" class="nav-link" target="_blank">MIG Website</a></li>
          <li><a href="https://www.midlandsmedicare.com" class="nav-link" target="_blank" style="color:#e0b93a;">Midlands Medicare →</a></li>
          <li><a href="tel:8039208827" class="nav-link nav-phone">803-920-8827</a></li>
          <li><a href="https://www.mauldininsurancegroup.com/contact" class="nav-link nav-cta">Free Quote</a></li>
        </ul>
      </div>
    </nav>
  `;

  const style = `
    <style>
      .site-nav { background: linear-gradient(135deg, #111f3e 0%, #1a2e5a 60%, #2a4a7a 100%); padding: 0 40px; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 12px rgba(0,0,0,0.25); }
      .nav-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; height: 68px; gap: 8px; }
      .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
      .nav-logo-img { height: 44px; width: auto; object-fit: contain; }
      .nav-logo-top { color: #fff; font-size: 14px; font-weight: 700; display: block; }
      .nav-logo-sub { color: #c9a227; font-size: 10px; font-weight: 300; letter-spacing: 0.08em; text-transform: uppercase; display: block; }
      .nav-links { display: flex; list-style: none; margin-left: auto; gap: 2px; align-items: center; }
      .nav-links li { position: relative; }
      .nav-link { color: rgba(255,255,255,0.9); text-decoration: none; font-size: 13px; padding: 8px 12px; border-radius: 4px; transition: background 0.2s, color 0.2s; white-space: nowrap; background: none; border: none; cursor: pointer; font-family: inherit; display: inline-block; }
      .nav-link:hover { background: rgba(255,255,255,0.1); color: #e0b93a; }
      .nav-phone { color: #e0b93a !important; font-weight: 700 !important; }
      .nav-cta { background: #c9a227 !important; color: #111f3e !important; font-weight: 700 !important; padding: 8px 18px !important; border-radius: 4px !important; margin-left: 8px; border: none !important; display: inline-block; }
      .nav-cta:hover { background: #e0b93a !important; color: #000 !important; }
      .nav-submenu { display: none; position: absolute; top: 100%; left: 0; background: #111f3e; border: 1px solid rgba(201,162,39,0.3); border-radius: 6px; list-style: none; padding: 6px 0; min-width: 240px; box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 100; }
      .nav-dropdown:hover .nav-submenu { display: block; }
      .nav-submenu li a { display: block; padding: 9px 18px; color: rgba(255,255,255,0.88); font-size: 13px; text-decoration: none; white-space: nowrap; }
      .nav-submenu li a:hover { background: rgba(201,162,39,0.15); color: #e0b93a; }
      .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; margin-left: auto; }
      .nav-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; }
      @media (max-width: 900px) {
        .site-nav { padding: 0 20px; }
        .nav-hamburger { display: flex; }
        .nav-links { display: none; flex-direction: column; position: absolute; top: 68px; left: 0; right: 0; background: #111f3e; padding: 12px 0 20px; border-top: 1px solid rgba(201,162,39,0.3); margin: 0; gap: 0; z-index: 999; }
        .nav-links.open { display: flex; }
        .nav-links li { width: 100%; }
        .nav-link { width: 100%; text-align: left; padding: 12px 24px; font-size: 15px; }
        .nav-submenu { position: static; box-shadow: none; border: none; border-left: 3px solid #c9a227; margin-left: 20px; border-radius: 0; background: rgba(0,0,0,0.2); }
        .nav-dropdown:hover .nav-submenu { display: none; }
        .nav-dropdown.open .nav-submenu { display: block; }
        .nav-cta { margin-left: 0 !important; }
      }
    </style>
  `;

  document.head.insertAdjacentHTML('beforeend', style);
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = navHTML;

  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  document.querySelectorAll('.nav-drop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const li = btn.closest('li');
      const isOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
      if (!isOpen) li.classList.add('open');
    });
  });
});
