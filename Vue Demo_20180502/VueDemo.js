var app = new Vue({
    el:'#app',
    data:{
        message: 'helloworld!',
        score: 60,
        loading: false,
        colors:['black','red','blue'],
        home:[{father:'tom'},{father:'bob'}]
    },
    methods:{
        myFa: function (father) {
            alert('我的爸爸是'+father)
        }
    }
});

var demo = new Vue({
    el:'#todolist',
    data:{
        todos:[],
        newTodo:'',
    },
    methods:{
        addTodo: function (todo) {
            this.todos.push({content:todo,completed: false})
        },
        removeTodo: function(todo){
            this.todos.splice(this.todos.indexOf(todo),1)
        }
    }
})