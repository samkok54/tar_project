<template>
<div>
	<select class="ui dropdown" style="height: 42px; width: 330px;margin-right: 30px; margin-left:25px">
        <option v-for="item in usersList" :value="item['customer id']">{{item['name en']}}
        </option>
    </select>
    </div>
</template>

<script>
export default {
  props: ['usersList'],
  data () {
    return {
      name: 'nut'
    }
  }
}
</script>