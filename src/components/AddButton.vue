<script lang="ts">
export default {};
</script>
<template>
  <button class="button-wrapper" @click="$router.push('/form')">
    <img src="/add-icon.svg" alt="Иконка добавления" />
    <span>Добавить сотрудника</span>
  </button>
</template>

<style lang="scss" scoped>
.button-wrapper {
  height: 50px;
  display: flex;
  align-items: center;

  margin-top: 40px;

  font-size: 20px;
  line-height: 130%;
  color: $blue;

  border-radius: 50%;

  box-shadow: 0 0 8px 1px $teal;

  overflow: hidden;
  white-space: nowrap;

  transition:
    gap 0.2s,
    border-radius 0.4s;

  img {
    width: 50px;
    height: 50px;
  }

  span {
    max-width: 0;
    opacity: 0;

    transition:
      max-width 0.3s,
      opacity 0.2s;
  }
}

@media screen and (min-width: 800px) {
  .button-wrapper {
    &:hover {
      gap: 10px;
      padding-right: 10px;
      border-radius: 25px;

      span {
        max-width: 300px;
        opacity: 1;
      }
    }

    &:active {
      transform: translateY(4px);
    }
  }
}
</style>
