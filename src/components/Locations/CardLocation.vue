<template>
  <div class="location_">
    <div class="location_info">
      <h3 class="title title_hover">Location: {{ location.name }}</h3>
      <span>Type: {{ location.type }}</span>
      <div class="dimension">
        <span
          :class="location.dimension === 'unknown' ? 'default'
          : 'alive'
          "
        ></span>
        <span>Dimension: {{ location.dimension }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['location']

}
</script>

<style>
.location_ {
  background-color: #212224ff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: transform 200ms ease-in-out;
  height: 100%;
}
.location_:hover {
  transform: scale(1.05);
}
.title_hover:hover {
  color: #29b9f0ff;
}
.location_info {
  padding: 1.5rem;
}
.dimension {
  display: flex;
  align-items: center;
}
.dimension span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem
}
.default {
  background-color: white;
}

</style>
