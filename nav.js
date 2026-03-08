// Mauldin Insurance Group — mauldininsurance.com
// Central Navigation — edit this file to update ALL pages at once

document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
  <nav class="site-nav" id="site-nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img src="https://irp.cdn-website.com/ed566c5d/dms3rep/multi/Screenshot+2024-07-02+at+11.29.07%C3%A2--AM.png" alt="Mauldin Insurance Group" class="nav-logo-img" />
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
          <button class="nav-link nav-drop-btn">Personal <span class="nav-arrow">▾</span></button>
          <ul class="nav-submenu">
            <li><a href="/auto-insurance-south-carolina">🚗 Auto Insurance</a></li>
            <li><a href="/home-insurance-south-carolina">🏠 Home Insurance</a></li>
            <li><a href="/renters-insurance-south-carolina">🏘️ Renters Insurance</a></li>
            <li><a href="/life-insurance-south-carolina">💛 Life Insurance</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <button class="nav-link nav-drop-btn">Business <span class="nav-arrow">▾</span></button>
          <ul class="nav-submenu">
            <li><a href="/business-insurance-south-carolina">💼 Business Insurance</a></li>
          </ul>
        </li>
        <li><a href="/service-areas" class="nav-link">Service Areas</a></li>
        <li><a href="https://www.southcarolinamedicareagency.com" class="nav-link" target="_blank">Medicare Site</a></li>
        <li><a href="https://www.mauldininsurancegroup.com" class="nav-link" target="_blank">MIG Website</a></li>
      </ul>

      <div class="nav-ctas">
        <a href="tel:+18039208827" class="nav-phone">803-920-8827</a>
        <a href="https://www.mauldininsurancegroup.com/contact" class="nav-consult" target="_blank">Free Quote</a>
      </div>
    </div>
  </nav>`;

  const navCSS = `
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Source Sans 3', 'Helvetica Neue', sans-serif; }
    .site-nav { background: #1a2e5a; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 12px rgba(0,0,0,0.25); }
    .nav-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 8px; padding: 0 20px; height: 68px; }
    .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
    .nav-logo-img { height: 44px; width: auto; max-width: 130px; object-fit: contain; flex-shrink: 0; display: block; }
    .nav-logo-text { display: flex; flex-direction: column; }
    .nav-logo-top { color: white; font-size: 13px; font-weight: bold; letter-spacing: 0.5px; line-height: 1.2; }
    .nav-logo-sub { color: #c9a227; font-size: 10px; letter-spacing: 0.5px; line-height: 1.2; }
    .nav-links { display: flex; list-style: none; margin: 0 0 0 auto; padding: 0; gap: 2px; align-items: center; }
    .nav-link { color: rgba(255,255,255,0.9); text-decoration: none; font-size: 13px; padding: 8px 12px; border-radius: 4px; transition: background 0.2s, color 0.2s; background: none; border: none; cursor: pointer; font-family: 'Source Sans 3', sans-serif; white-space: nowrap; }
    .nav-link:hover, .nav-drop-btn:hover { background: rgba(255,255,255,0.12); color: #c9a227; }
    .nav-arrow { font-size: 10px; margin-left: 3px; }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-submenu, .nav-dropdown.open .nav-submenu { display: block; }
    .nav-submenu { display: none; position: absolute; top: 100%; left: 0; background: #1a2e5a; border: 1px solid rgba(201,162,39,0.3); border-radius: 6px; list-style: none; padding: 6px 0; margin: 0; min-width: 210px; box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 100; }
    .nav-submenu li a { display: block; padding: 9px 18px; color: rgba(255,255,255,0.88); text-decoration: none; font-size: 13px; transition: background 0.15s, color 0.15s; white-space: nowrap; }
    .nav-submenu li a:hover { background: rgba(201,162,39,0.15); color: #c9a227; }
    .nav-ctas { display: flex; align-items: center; gap: 8px; margin-left: 12px; flex-shrink: 0; }
    .nav-phone { color: #c9a227; text-decoration: none; font-size: 13px; font-weight: bold; white-space: nowrap; }
    .nav-phone:hover { color: white; }
    .nav-consult { background: #c9a227; color: #1a2e5a; text-decoration: none; font-size: 12px; font-weight: bold; padding: 8px 14px; border-radius: 4px; white-space: nowrap; transition: background 0.2s; }
    .nav-consult:hover { background: #e0b82d; }
    .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; margin-left: auto; }
    .nav-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; }
    @media (max-width: 900px) {
      .nav-hamburger { display: flex; }
      .nav-ctas { display: none; }
      .nav-links { display: none; flex-direction: column; position: absolute; top: 68px; left: 0; right: 0; background: #1a2e5a; padding: 12px 0 20px; border-top: 1px solid rgba(201,162,39,0.3); margin: 0; gap: 0; z-index: 999; }
      .nav-links.open { display: flex; }
      .nav-links > li { width: 100%; }
      .nav-link, .nav-drop-btn { width: 100%; text-align: left; padding: 12px 24px; font-size: 15px; }
      .nav-submenu { position: static; box-shadow: none; border: none; border-left: 3px solid #c9a227; margin-left: 20px; border-radius: 0; background: rgba(0,0,0,0.2); padding: 4px 0; }
      .nav-submenu li a { padding: 10px 20px; font-size: 14px; }
      .nav-dropdown:hover .nav-submenu { display: none; }
      .nav-dropdown.open .nav-submenu { display: block; }
    }
  </style>`;

  document.head.insertAdjacentHTML('beforeend', navCSS);
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) { placeholder.outerHTML = navHTML; }
  else { document.body.insertAdjacentHTML('afterbegin', navHTML); }

  setTimeout(() => {
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
    const current = window.location.pathname.replace(/\/$/, '');
    document.querySelectorAll('.nav-submenu a, .nav-links > li > a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === current || href === current + '/')) {
        link.style.color = '#c9a227';
        link.style.fontWeight = 'bold';
      }
    });
  }, 0);
});
