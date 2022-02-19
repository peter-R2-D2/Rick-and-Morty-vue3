<template>
<div class="character">
  <img :src="character.image" :alt="character.name">
  <div class="character__info">
    <h3 class="title_name">{{character.name}}</h3>
    <div class="status">
      <span
      :class="character.status === 'Alive' ? 'alive' :
              character.status === 'Dead' ? 'dead' :
              'default'
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: transform 200ms ease-in-out;
  height: 100%;
}
.character:hover {
  transform: scale(1.05);
}
.character span {
  color: gray;
}
.character__info {
  padding: 1.5rem;
}
.title_name {
  color: #29b9f0ff;
  text-align: center;
  margin-bottom: 0.5rem;
}
.status {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.status span {
  color: gray;
}
.status span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.alive {
  background-color: green;
}
.dead {
  background-color: red;
}
.default {
  background-color: white;
}
.origin span{
  margin-bottom: 0.5rem;
  color: #a1a1a1ff;
}

</style>
