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

  background: $azure;

  box-shadow: 0 0 18px 2px $teal;

  text-align: center;

  h1 {
    line-height: 40px;
  }
}

@media screen and (min-width: 375px) {
  .header-wrapper {
    font-size: 20px;

    padding: 0 60px;
  }
}

@media screen and (min-width: 800px) {
  .header-wrapper {
    font-size: 26px;
  }
}

@media screen and (min-width: 1200px) {
  .header-wrapper {
    font-size: 36px;
  }
}
</style>
