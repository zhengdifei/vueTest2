<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">
            {{ title }}
            <span v-if="taskNum">({{taskNum}})</span>
          </div>
          <div class="panel-body">
            <Todo v-on:taskUpdate="updateNum"></Todo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo'
import Store from './util/Store'

export default{
  name: 'app',
  data () {
    return {
      title: 'My Todo',
      taskNum: Store.fetch().filter(function (task) {
        return !task.complated
      }).length
    }
  },
  methods: {
    updateNum (tasks) {
      this.taskNum = tasks.filter(function (task) {
        return !task.complated
      }).length
    }
  },
  components: { Todo }
}
</script>
