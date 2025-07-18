---
title: Hextra Theme
layout: hextra-home
---

{{< hextra/hero-badge >}}
  <div class="hx:w-2 hx:h-2 hx:rounded-full hx:bg-primary-400"></div>
  <span>Beta Release v0.1.0</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx:mt-6 hx:mb-6">
{{< hextra/hero-headline >}}
Astro Club's Repository
{{< /hextra/hero-headline >}}
</div>

<div class="hx:mb-12">
{{< hextra/hero-subtitle >}}
We are creating a <b>fast, accessible, easy to use & maintain and versatile</b> Repository for the club that will contain all sorts of information and knowledge, all of it generated and designed <b>by the community, for the community</b>.
{{< /hextra/hero-subtitle >}}
</div>



<!-- Use "&nbsp;<br class="hx:sm:block hx:hidden"/>" to add a line break in headline/title or subtitle -->

<!--The primary(hero) buttons -->

<div class="hx:mb-8">
{{< hextra/hero-button text="Get Started" link="" >}}
{{< hextra/hero-button text="Contribute" link="" >}}
</div>

<div class="hx:mb-4">
{{< hextra/hero-button text="Explore" link="" >}}
</div>

<div class="hx:mt-6"></div>

<!-- Contact Info -->
<div class="hx:text-sm md:hx:text-base hx:leading-relaxed">
  <h4 class="hx:font-semibold hx:text-lg hx:mb-3"><b>Contact Us:</b></h4>
  <ul class="hx:space-y-2">
    <li>
      <span class="hx:text-blue-600 dark:hx:text-blue-400"><b>Email:</b></span>
      <a href="mailto:resources.astroclubfc@example.com" class="hx:text-blue-600 dark:hx:text-blue-400 hover:hx:underline">resources.astroclubfc@example.com</a>
    </li>
<!-- 
  <li>
      <a href="/contact/" class="hx:inline-block hx:mt-1 hx:text-blue-600 dark:hx:text-blue-400 hover:hx:underline">
        <>Contact Form<>
      </a>
   </li> --> 
  </ul>
</div>


<!-- Here is a standard feature and card template with all the features

{{< hextra/feature-grid >}}

  {{< hextra/feature-card
    title=""
    subtitle=""
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image=""
    imageClass="hx:top-[40%] hx:left-[24px] hx:w-[180%] hx:sm:w-[110%] hx:dark:opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}

{{< /hextra/feature-grid >}}

{{< cards >}}

  {{< card
        link=""
        title=""
        image=""
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}

{{< /cards >}}

-->

<!-- Pop up the image in a card to a large view - called Lightbox Modal

<style>
  /* Basic lightbox modal styles */
  .lightbox-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    padding-top: 5vh;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }

  .lightbox-modal img {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80vh;
  }

  .lightbox-modal:target {
    display: block;
  }

  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 40px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
  }
</style>

{{< cards >}}
  {{< card
        link="#img1"
        title="Card Template"
        image="https://user-images.githubusercontent.com/5097752/263551418-c403b9a9-a76c-47a6-8466-513d772ef0b7.jpg"
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}
{{< /cards >}}

Lightbox Modal 

<div id="img1" class="lightbox-modal">
  <a href="#" class="lightbox-close">&times;</a>
  <img src="https://user-images.githubusercontent.com/5097752/263551418-c403b9a9-a76c-47a6-8466-513d772ef0b7.jpg" alt="Full Image" />
</div>

-->

<!-- Giscus Comment Section-->
<script src="https://giscus.app/client.js"
        data-repo="resources-astroclubfc/the-big-bang"
        data-repo-id="R_kgDOPGZz-g"
        data-category="Giscus"
        data-category-id="DIC_kwDOPGZz-s4CsjGC"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>

<!--End of the Document-->