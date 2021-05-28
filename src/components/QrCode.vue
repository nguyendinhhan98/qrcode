<template>
  <div>
    <label>Create QR code: </label>
    <input type="text" v-model="qrcode" />
    <qrcode-vue :value="qrcode"></qrcode-vue>
    <p>
      Last result: <b>{{ decodedContent }}</b>
    </p>

    <p class="error">
      {{ errorMessage }}
    </p>

    <qrcode-stream
      v-if="isOpen"
      @decode="onDecode"
      @init="onInit"
    ></qrcode-stream>
    <button @click="openQR">Scan QR</button>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import QrcodeVue from "qrcode.vue";
export default {
  components: { QrcodeStream, QrcodeVue },

  data() {
    return {
      decodedContent: "",
      errorMessage: "",
      qrcode: "",
      isOpen: false,
    };
  },

  methods: {
    onDecode(content) {
      this.decodedContent = content;
      // this.isOpen = false;
    },

    onInit(promise) {
      this.isOpen = true;
      promise
        .then(() => {
          console.log("Successfully initilized! Ready for scanning now!");
        })
        .catch((error) => {
          if (error.name === "NotAllowedError") {
            this.errorMessage = "Hey! I need access to your camera";
          } else if (error.name === "NotFoundError") {
            this.errorMessage = "Do you even have a camera on your device?";
          } else if (error.name === "NotSupportedError") {
            this.errorMessage =
              "Seems like this page is served in non-secure context (HTTPS, localhost or file://)";
          } else if (error.name === "NotReadableError") {
            this.errorMessage =
              "Couldn't access your camera. Is it already in use?";
          } else if (error.name === "OverconstrainedError") {
            this.errorMessage =
              "Constraints don't match any installed camera. Did you asked for the front camera although there is none?";
          } else {
            this.errorMessage = "UNKNOWN ERROR: " + error.message;
          }
        });
    },
    openQR() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
