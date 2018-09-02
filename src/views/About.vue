<template>
  <div class="about">
      <img class="icon g" src="@/assets/icons/gh.png">
      <img class="icon t" src="@/assets/icons/tw.png">
  </div>
</template>







<style lang="scss">
img.icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 75%;
    animation: bout 1000ms linear both;

    &.g {
        left: 48%;
        margin-left: -10px;
    }
    &.i {
        left: 100%
    }
    &.t {
        left: 52%;
        margin-left: -10px;
    }
    &:hover {
        animation: bin 1000ms linear both;
        cursor: pointer;
    }
}
</style>
