<template>
  <div class="header-wrapper">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100vw;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
  padding: 20px 0;

  color: $dark;
  font-size: 36px;

  background: $azure;

  box-shadow: 0 0 18px 2px $teal;
}
</style>
