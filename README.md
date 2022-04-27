# Myoshi
Mini Project Website- Myoshi

My 1st project on building a HTML website withh CSS styling and a bit of JS coding.
  - Sticky Navbar that stays on the page top when scrolling through the page
  - Hi-light animation when hovering the mouse cursor over navbar links
  - @medio query to change layout when browser size shrinks to 768 px or uder
  - @ width < 768px the navBar icons becomes hidden and is accessible by clicking the trigram icon
  - A side menu pops up and can be closed by clicking the cross icon
  - All logos and icons are Unicode

# Demo
https://codepen.io/ericjen01/pen/popMdjb

# Usage
```rb
<header>
  <legend>
    <h1 id="logo">&#1421</h1>
    <a class="title" class="restaurant_title" href="/">MYOSHI JAPANESE RESTAURANT</a>
  </legend>
  <lu class="navBar1">
    <div class="crossBtn">&#x2612</div>
    <li><a class="link" href="">Menu</a></li>
    <li><a class="link" href="">Our Story</a></li>
    <li><a class="link" href="">Photo Gallery</a></li>
    <li><a class="link" href="">&#x2709</a></li>
    <li id="contact"><a href="">Contact</a></li>
  </lu> 
  <div class="trigramBtn">&#x2630</div>
</header>
```

# TODO
- develop other pages
- fix navbar issues: trigram & icons failed test of shrinking & clicking

