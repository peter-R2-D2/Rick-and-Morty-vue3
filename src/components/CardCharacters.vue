<template>
<div class="character">
  <img :src="character.image" :alt="character.name">
  <div class="character__info">
    <h3 class="title_name">{{character.name}}</h3>
    <div class="status">
      <span
      :class="character.status === 'Alive' ? 'alive' :
              character.status === 'Dead' ? 'dead' :
              'defaul'
      "
      >
      </span>
      <span>
        {{ character.status}} - {{ character.species }}
      </span>
    </div>
    <div class="origin">
      <span>
        Origin: {{ character.origin.name}}
      </span>
    </div>
    <div class="location">
      Location: {{ character.location.name}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['character']
}
</script>

<style>
.character {
  background-color: #212224ff;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.character__info {
  padding: 10px 10px 40px 20px;
}
.title_name {
  color: #29b9f0ff;
  text-align: center;
}
.status {
  margin: 20px 0;
}
.origin span{
  color: #a1a1a1ff;
}

</style>
