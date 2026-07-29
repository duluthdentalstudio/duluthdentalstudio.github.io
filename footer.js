// Shared footer for Duluth Dental Studio — injected into <footer id="footer-include">
document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("footer-include");
  if (!el) return;

  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <h4>Duluth Dental Studio</h4>
          <p>3575 Koger Blvd, Suite 160<br>Duluth, GA 30096</p>
          <p>Monday &ndash; Thursday: 8am &ndash; 5pm<br>Friday: 8am &ndash; 2pm</p>
          <p><a href="tel:+17706964144">(770) 696-4144</a></p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="https://issuu.com/duluth-dental-studio" target="_blank" rel="noopener">Duluth Dental Studio on Issuu</a></li>
            <li><a href="https://www.prlog.org/13160342-duluth-dental-studio-recognized-as-trusted-dental-practice-in-duluth-ga.html" target="_blank" rel="noopener">Press Release</a></li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div class="social-row">
            <a href="https://www.facebook.com/people/Duluth-Dental-Studio/61566630080514/" target="_blank" rel="noopener" aria-label="Facebook"><span>FB</span></a>
            <a href="https://x.com/DuluthDS" target="_blank" rel="noopener" aria-label="X"><span>X</span></a>
            <a href="https://www.instagram.com/duluthdentstudio/" target="_blank" rel="noopener" aria-label="Instagram"><span>IG</span></a>
            <a href="https://duluth-dental-studio.tumblr.com/" target="_blank" rel="noopener" aria-label="Tumblr"><span>Tu</span></a>
            <a href="https://medium.com/@duluthdentalstudio724/about" target="_blank" rel="noopener" aria-label="Medium"><span>Me</span></a>
            <a href="http://github.com/duluthdentalstudio" target="_blank" rel="noopener" aria-label="GitHub"><span>Gh</span></a>
            <a href="https://duluthdentalstudio.hashnode.dev/" target="_blank" rel="noopener" aria-label="Hashnode"><span>Hn</span></a>
            <a href="https://linktr.ee/duluthdentalstudio" target="_blank" rel="noopener" aria-label="Linktree"><span>Lt</span></a>
            <a href="https://www.crunchbase.com/organization/duluth-dental-studio" target="_blank" rel="noopener" aria-label="Crunchbase"><span>Cb</span></a>
            <a href="https://soundcloud.com/duluthdentalstudio" target="_blank" rel="noopener" aria-label="SoundCloud"><span>Sc</span></a>
            <a href="https://genius.com/duluthdentalstudio" target="_blank" rel="noopener" aria-label="Genius"><span>Ge</span></a>
            <a href="https://duluthdentalstudio.quora.com/" target="_blank" rel="noopener" aria-label="Quora"><span>Qu</span></a>
            <a href="https://orcid.org/my-orcid?orcid=0009-0007-7471-3643" target="_blank" rel="noopener" aria-label="ORCID"><span>Or</span></a>
            <a href="https://substack.com/@duluthdentalstudio" target="_blank" rel="noopener" aria-label="Substack"><span>Su</span></a>
            <a href="https://bsky.app/profile/duluthdentalstudio.bsky.social" target="_blank" rel="noopener" aria-label="Bluesky"><span>Bs</span></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Duluth Dental Studio. All rights reserved.</span>
        <span>Site directory: <a href="https://duluthdentalstudio.simdif.com/" target="_blank" rel="noopener">simdif</a> &middot; <a href="http://duluthstudio.website3.me/" target="_blank" rel="noopener">website3</a></span>
      </div>
    </div>
  `;
});
