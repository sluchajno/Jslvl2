<template>
  <button :class="[$style.btn]" @click="onBtnClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onBtnClicked() {
      this.$emit("mySuperEvent");
    },
  },
};
</script>

<style module lang="scss">
.btn {
  padding: 4px 12px;
  outline: none;
  border-radius: 4px;
  color: #fff;
  background: rgb(27, 39, 123);
  cursor: pointer;
  &:hover {
    background: rgb(36, 46, 123);
  }
}
</style>