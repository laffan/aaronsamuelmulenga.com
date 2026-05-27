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

Aaron Samuel Mulenga is a Zambian visual artist whose practice spans painting, sculpture, photography, and installation. His work investigates memory, colonial legacy, and the quiet rituals through which communities carry their histories forward.

Working primarily with coffee, bronze, burlap, and found material, Mulenga draws on the textures of everyday Zambian life — and on the long shadows cast by empire — to compose images that are at once intimate and historical.

He has exhibited in Lusaka, Berlin, and across the United States, and continues to develop bodies of work that pair archival research with material experimentation.

  </div>
  <aside class="about__portrait">
    {% if portrait %}
      <img src="{{ portrait }}" alt="Portrait of Aaron Samuel Mulenga">
    {% else %}
      <div class="placeholder">Portrait</div>
    {% endif %}
  </aside>
</div>
