/**
 * Created by Administrator on 2016/12/30 0030.
 */
const TODOS_KEY = 'my-todo-tasks'

export default{
  save (items) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(items))
  },
  fetch () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
