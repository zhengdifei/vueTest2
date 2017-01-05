<template>
  <div>
    <button class="btn btn-default btn-info btn-sm" @click="showAll">All</button>
    <button class="btn btn-info btn-sm" @click="showComplated">Complated</button>
    <ul class="list-group">
      <li v-show="isShow || !task.complated" class="list-group-item" v-for="(task,index) in tasks">
        <span :class="[task.complated?'complated':'','pointer']" @click="toggle(task)">{{task.name}}</span>
        <button v-if="task.complated" class="btn btn-warning btn-xs pull-right" @click="delTask(index)">delete</button>
      </li>
    </ul>
    <form class="form-panel" @submit.prevent="addTask">
      <div class="form-group">
        <input class="form-control" type="text" v-model="onetask"/>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Add Task</button>
      </div>
    </form>
  </div>
</template>

<style>
  .complated {
    text-decoration : line-through;
  }
  a:hover {
    text-decoration : none
  }
  .pointer {
    cursor : pointer;
  }
</style>

<script>
import Store from '../util/Store'

export default{
  data () {
    return {
      isShow: true,
      onetask: '',
      tasks: Store.fetch()
    }
  },
  methods: {
    addTask () {
      this.tasks.push({
        name: this.onetask,
        complated: false
      })
      this.onetask = ''
    },
    toggle (task) {
      task.complated = !task.complated
    },
    delTask (index) {
      this.tasks.splice(index, 1)
    },
    showAll () {
      this.isShow = true
    },
    showComplated () {
      this.isShow = false
    }
  },
  watch: {
    tasks: {
      handler (val, oldVal) {
        Store.save(val)
        this.$emit('taskUpdate', val)
      },
      deep: true
    }
  }
}
</script>
