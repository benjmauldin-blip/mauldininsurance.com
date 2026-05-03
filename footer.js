// Mauldin Insurance Group — mauldininsurance.com
// Central Footer — edit this file to update ALL pages at once

document.addEventListener('DOMContentLoaded', function () {

  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="https://irp.cdn-website.com/ed566c5d/dms3rep/multi/favicon.png" alt="Mauldin Insurance Group" style="height:40px;width:auto;max-width:120px;object-fit:contain;" />
            <div class="footer-logo-text">
              <span class="footer-logo-name">Mauldin Insurance Group</span>
              <span class="footer-logo-sub">Independent Insurance Agent — Lexington, SC</span>
            </div>
          </div>
          <p class="footer-tagline">Independent insurance agent serving all of South Carolina, North Carolina, and Georgia. Based in Lexington, SC. We shop multiple carriers to find your best coverage — at no cost to you.</p>
          <p class="footer-address">📍 100 Old Cherokee Rd Ste F #167, Lexington, SC 29072</p>
          <div class="footer-rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span>5.0 rating · 131 Google reviews</span>
          </div>
        </div>
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p class="footer-agent-name">Ben Mauldin</p>
          <p><a href="tel:+18039208827">803-920-8827</a></p>
          <p><a href="sms:8039208827">💬 Text 803-920-8827</a></p>
          <p><a href="mailto:ben@mauldininsurancegroup.com">ben@mauldininsurancegroup.com</a></p>
          <p style="margin-top:12px;"><a href="https://www.mauldininsurancegroup.com" target="_blank">MauldinInsuranceGroup.com</a></p>
          <p><a href="https://www.southcarolinamedicareagency.com" target="_blank">Medicare Insurance →</a></p>
          <p><a href="https://www.midlandsmedicare.com" target="_blank" style="color:#e0b93a;">MidlandsMedicare.com →</a></p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/auto-insurance-south-carolina">Auto Insurance</a></li>
            <li><a href="/home-insurance-south-carolina">Home Insurance</a></li>
            <li><a href="/homeowners-insurance-lexington-sc">Homeowners — Lexington SC</a></li>
            <li><a href="/new-to-lexington-sc-insurance">New to Lexington SC</a></li>
            <li><a href="/home-insurance-rate-increase-sc">Rate Increase? Shop &amp; Save</a></li>
            <li><a href="/renters-insurance-south-carolina">Renters Insurance</a></li>
            <li><a href="/landlord-insurance-south-carolina">Landlord Insurance</a></li>
            <li><a href="/airbnb-vrbo-insurance-lexington-sc">Airbnb &amp; VRBO Insurance</a></li>
            <li><a href="/home-office-insurance-sc">Home Office Insurance</a></li>
            <li><a href="/boat-insurance-lake-murray-sc">Boat Insurance — Lake Murray</a></li>
            <li><a href="/waterfront-home-insurance-lake-murray-sc">Waterfront Home — Lake Murray</a></li>
            <li><a href="/business-insurance-south-carolina">Business Insurance</a></li>
            <li><a href="/life-insurance-south-carolina">Life Insurance</a></li>
            <li><a href="/service-areas">🗺️ All Service Areas</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-disclaimer">Mauldin Insurance Group is an independent insurance agency licensed in South Carolina, North Carolina, and Georgia. We represent multiple insurance carriers and work to find the best coverage options for our clients. Coverage availability and pricing vary by carrier, location, and individual circumstances. This site is for informational purposes only and does not constitute a binding quote or offer of insurance.</p>
      <p class="footer-copy">&copy; 2026 Mauldin Insurance Group. All rights reserved. | Lexington, SC | Serving All of South Carolina</p>
    </div>
  </footer>`;

  const footerCSS = `
  <style>
    .site-footer {
      background: #0d1e3f;
      color: rgba(255,255,255,0.75);
      padding: 56px 20px 0;
    }
    .footer-inner { max-width: 1100px; margin: 0 auto; }
    .footer-top {
      display: grid;
      grid-template-columns: 2fr 1.2fr 1.2fr;
      gap: 48px;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .footer-logo-text { display: flex; flex-direction: column; }
    .footer-logo-name { color: white; font-size: 14px; font-weight: bold; line-height: 1.2; }
    .footer-logo-sub { color: #c9a227; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
    .footer-tagline { font-size: 13px; line-height: 1.6; margin: 0 0 10px; color: rgba(255,255,255,0.65); }
    .footer-address { font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.5; margin: 0 0 14px; }
    .footer-rating { display: flex; align-items: center; gap: 8px; font-size: 13px; color: rgba(255,255,255,0.65); }
    .footer-contact h4, .footer-links h4 {
      color: white; font-size: 12px; font-weight: 700; margin-bottom: 14px;
      letter-spacing: 1px; text-transform: uppercase;
    }
    .footer-contact p { font-size: 13px; margin-bottom: 6px; color: rgba(255,255,255,0.75); }
    .footer-contact a, .footer-links a { color: #c9a227; text-decoration: none; transition: color 0.2s; }
    .footer-contact a:hover, .footer-links a:hover { color: white; }
    .footer-agent-name { color: white; font-weight: 700; font-size: 13px; margin-bottom: 2px !important; }
    .footer-links ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
    .footer-links li a { font-size: 13px; color: rgba(255,255,255,0.75); text-decoration: none; transition: color 0.2s; }
    .footer-links li a:hover { color: #c9a227; }
    .footer-disclaimer { font-size: 11px; line-height: 1.6; color: rgba(255,255,255,0.35); padding: 24px 0 0; border-top: 1px solid rgba(255,255,255,0.08); }
    .footer-copy { font-size: 11px; color: rgba(255,255,255,0.3); margin: 12px 0 0; padding-bottom: 24px; text-align: center; }
    @media (max-width: 768px) { .footer-top { grid-template-columns: 1fr; gap: 32px; } }
  </style>`;

  document.head.insertAdjacentHTML('beforeend', footerCSS);
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});
