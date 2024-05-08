angular.module('taskApp', [])
.controller('TaskController', function() {
  var vm = this;
  vm.tasks = [];
  
  vm.addTask = function() {
    if(vm.newTask !== '') {
      vm.tasks.push({name: vm.newTask, completed: false});
      vm.newTask = '';
    }
  };
  
  vm.removeTask = function(task) {
    var index = vm.tasks.indexOf(task);
    vm.tasks.splice(index, 1);
  };
  
  vm.toggleCompleted = function(task) {
    task.completed = !task.completed;
  };
});