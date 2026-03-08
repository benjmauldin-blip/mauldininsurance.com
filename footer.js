// Mauldin Insurance Group — mauldininsurance.com
// Central Footer — edit this file to update ALL pages at once

document.addEventListener('DOMContentLoaded', function () {
  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="https://irp.cdn-website.com/ed566c5d/dms3rep/multi/Screenshot+2024-07-02+at+11.29.07%C3%A2--AM.png" alt="Mauldin Insurance Group" style="height:40px;width:auto;max-width:120px;object-fit:contain;" />
            <div class="footer-logo-text">
              <span class="footer-logo-name">Mauldin Insurance Group</span>
              <span class="footer-logo-sub">Independent Insurance Agent — Lexington, SC</span>
            </div>
          </div>
          <p class="footer-tagline">Independent insurance agent serving all of South Carolina. Based in Lexington, SC. We shop multiple carriers to find your best coverage — at no cost to you.</p>
        </div>

        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p class="footer-agent-name">Ben Mauldin</p>
          <p><a href="tel:+18039208827">803-920-8827</a></p>
          <p><a href="mailto:ben@mauldininsurancegroup.com">ben@mauldininsurancegroup.com</a></p>
          <p style="margin-top:10px;"><a href="https://www.mauldininsurancegroup.com" target="_blank">MauldinInsuranceGroup.com</a></p>
          <p><a href="https://southcarolinamedicareagency.com" target="_blank">Medicare Insurance →</a></p>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/auto-insurance-south-carolina">Auto Insurance</a></li>
            <li><a href="/home-insurance-south-carolina">Home Insurance</a></li>
            <li><a href="/renters-insurance-south-carolina">Renters Insurance</a></li>
            <li><a href="/business-insurance-south-carolina">Business Insurance</a></li>
            <li><a href="/life-insurance-south-carolina">Life Insurance</a></li>
            <li><a href="/service-areas">🗺️ All Service Areas</a></li>
          </ul>
        </div>
      </div>

      <p class="footer-disclaimer">Mauldin Insurance Group is an independent insurance agency licensed in South Carolina. We represent multiple insurance carriers and work to find the best coverage options for our clients. Coverage availability and pricing vary by carrier, location, and individual circumstances. This site is for informational purposes only and does not constitute a binding quote or offer of insurance.</p>
      <p class="footer-copy">&copy; 2026 Mauldin Insurance Group. All rights reserved. | Lexington, SC | Serving All of South Carolina</p>
    </div>
  </footer>`;

  const footerCSS = `
  <style>
    .site-footer { background: #0d1e3f; color: rgba(255,255,255,0.75); padding: 48px 20px 24px; margin-top: 0; }
    .footer-inner { max-width: 1100px; margin: 0 auto; }
    .footer-top { display: flex; gap: 40px; flex-wrap: wrap; margin-bottom: 32px; }
    .footer-brand { flex: 2; min-width: 240px; }
    .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .footer-logo-text { display: flex; flex-direction: column; }
    .footer-logo-name { color: white; font-size: 14px; font-weight: bold; }
    .footer-logo-sub { color: #c9a227; font-size: 11px; }
    .footer-tagline { font-size: 13px; line-height: 1.6; margin: 0; }
    .footer-contact { flex: 1; min-width: 190px; }
    .footer-links { flex: 1; min-width: 190px; }
    .footer-contact h4, .footer-links h4 { color: white; font-size: 12px; font-weight: 700; margin-bottom: 10px; letter-spacing: 1px; text-transform: uppercase; }
    .footer-contact p { font-size: 13px; margin-bottom: 5px; }
    .footer-contact a, .footer-links a { color: #c9a227; text-decoration: none; }
    .footer-contact a:hover, .footer-links a:hover { color: white; }
    .footer-agent-name { color: white; font-weight: 700; font-size: 13px; margin-bottom: 2px !important; }
    .footer-links ul { list-style: none; padding: 0; margin: 0; }
    .footer-links li { margin-bottom: 7px; font-size: 13px; }
    .footer-disclaimer { font-size: 11px; line-height: 1.6; color: rgba(255,255,255,0.45); border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-bottom: 10px; }
    .footer-copy { font-size: 11px; color: rgba(255,255,255,0.35); margin: 0; }
    @media (max-width: 700px) { .footer-top { flex-direction: column; gap: 28px; } }
  </style>`;

  document.head.insertAdjacentHTML('beforeend', footerCSS);
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) { placeholder.outerHTML = footerHTML; }
  else { document.body.insertAdjacentHTML('beforeend', footerHTML); }
});
