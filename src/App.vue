<template>
  <div id="app">
    <qr-code></qr-code>
  </div>
</template>

<script>
import QrCode from "../src/components/QrCode";
export default {
  name: "App",
  components: {
    QrCode,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
