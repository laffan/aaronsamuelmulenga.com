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
