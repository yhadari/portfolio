<script setup>
import '../background/js/noise.min.js'
import '../background/js/swirl.js'

document.documentElement.className = 'js'
var supportsCssVars = function () {
  var e,
    t = document.createElement('style')
  return (
    (t.innerHTML = 'root: { --tmp-var: bold; }'),
    document.head.appendChild(t),
    (e = !!(
      window.CSS &&
      window.CSS.supports &&
      window.CSS.supports('font-weight', 'var(--tmp-var)')
    )),
    t.parentNode.removeChild(t),
    e
  )
}
supportsCssVars() || alert('Please view this demo in a modern browser that supports CSS Variables.')
</script>
<template>
  <html lang="en" class="no-js">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ambient Canvas Backgrounds | Swirl | Codrops</title>
      <meta
        name="description"
        content="A set of animated ambient canvas backgrounds with different effects"
      />
      <meta
        name="keywords"
        content="canvas, ambient, background, animation, javascript, demo, web development"
      />
      <meta name="author" content="Codrops" />
    </head>
    <body class="demo-2">
      <main>
        <div class="content content--canvas"></div>
      </main>
    </body>
  </html>
</template>
<style scoped></style>
