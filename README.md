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

<head>
<link href="greedynav.css" rel="stylesheet" type="text/css" >
<script src="greedynav.js"></script>
</head>
<body>
<nav class='greedy'>
  <h1>GreedyNav</h1>
  <ul class='links'>
    <li><a href='#'>navbar</a></li>
    <li><a href='#'>that</a></li>
    <li><a href='#'>handles</a></li>
    <li><a href='#'>overflowing</a></li>
    <li><a href='#'>menu</a></li>
    <li><a href='#'>elements</a></li>
    <li><a href='#'>effortlessly</a></li>
  </ul>
  <button>MENU</button>
  <ul class='hidden-links hidden'></ul>
</nav>
</body>

# TODO
- develop other pages
- fix navbar issues: trigram & icons failed test of shrinking & clicking
