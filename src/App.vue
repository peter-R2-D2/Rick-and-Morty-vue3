<template>
  <div id="nav">
    <router-link to="/">Characters</router-link> |
    <router-link to="/about">Location</router-link>
  </div>
  <router-view/>
</template>

<style>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #111213ff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
