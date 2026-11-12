---
layout: base.njk
title: About
section: about
permalink: /about/
portrait: /images/aaron-portrait.webp
---

<h1 class="page-title">About</h1>

<div class="about">
  <div class="prose">

Aaron Samuel Mulenga is a Zambian visual artist whose practice spans installation, sculpture, coffee painting, and drawings. His practice investigates cultural memory, speculative imaginations of the future, and how shared communities create environments of care that center love, equity and hope for the future.

Mulenga’s work is directly inspired by Zambia’s vibrant culture and rich history. His 2D work incorporates collage, painting and drawing by using coffee and African print fabric on burlap and canvas. Mulenga’s sculptures and installations are made in bronze, wood, and found material, reminiscent of the bricolage practices found in masquerade practices in the country.

Mulenga's work seeks to foreground little known Zambian narratives such as in the work of the Zambian WWI porters, and Zambian space explorers, which he explores in his Tenga-Tenga and Afronauts series respectively.

Mulenga has exhibited in Lusaka, Berlin, and across the United States, and continues to develop bodies of work that pair archival research with material experimentation.

  </div>
  <aside class="about__portrait">
    {% if portrait %}
      <img src="{{ portrait }}" alt="Portrait of Aaron Samuel Mulenga">
    {% else %}
      <div class="placeholder">Portrait</div>
    {% endif %}
  </aside>
</div>

<section class="contact" id="contact" aria-labelledby="contact-heading">
  <h2 class="contact__heading" id="contact-heading">Contact</h2>
  <p class="contact__intro">For inquiries about works, exhibitions or commissions, send a message below.</p>
  <form class="contact__form" data-contact-form action="https://formspree.io/f/xljbdwqr" method="POST">
    <div class="contact__row">
      <div class="contact__field">
        <label for="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" autocomplete="name" required>
      </div>
      <div class="contact__field">
        <label for="contact-email">Email</label>
        <input id="contact-email" type="email" name="email" autocomplete="email" required>
      </div>
    </div>
    <div class="contact__field">
      <label for="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows="6" required></textarea>
    </div>
    <input type="hidden" name="_subject" value="New message from aaronsamuelmulenga.com">
    <div class="contact__trap" aria-hidden="true">
      <label for="contact-gotcha">Leave this field empty</label>
      <input id="contact-gotcha" type="text" name="_gotcha" tabindex="-1" autocomplete="off">
    </div>
    <div class="contact__actions">
      <button type="submit" class="contact__submit">Send</button>
      <p class="contact__status" role="status" aria-live="polite"></p>
    </div>
  </form>
</section>

<script>
  (function () {
    var form = document.querySelector('[data-contact-form]');
    if (!form || !window.fetch || !window.FormData) return;
    form.noValidate = true;
    var status = form.querySelector('.contact__status');
    var button = form.querySelector('.contact__submit');

    function setStatus(text, kind) {
      status.textContent = text;
      status.className = 'contact__status' + (kind ? ' contact__status--' + kind : '');
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var invalid = Array.prototype.filter.call(form.elements, function (el) {
        var bad = el.willValidate && !el.checkValidity();
        if (el.willValidate) el.setAttribute('aria-invalid', bad ? 'true' : 'false');
        return bad;
      });
      if (invalid.length) {
        setStatus('Please fill in your name, a valid email and a message.', 'error');
        invalid[0].focus();
        return;
      }

      button.disabled = true;
      setStatus('Sending…');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          setStatus('Thank you. Your message has been sent.', 'success');
          return;
        }
        return response.json().then(function (data) {
          var msg = data && data.errors && data.errors.length
            ? data.errors.map(function (e) { return e.message; }).join(' ')
            : 'Something went wrong. Please try again.';
          setStatus(msg, 'error');
        });
      }).catch(function () {
        setStatus('The message could not be sent. Please check your connection and try again.', 'error');
      }).then(function () {
        button.disabled = false;
      });
    });
  })();
</script>
