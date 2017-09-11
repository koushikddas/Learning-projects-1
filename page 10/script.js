var usr = window.prompt('Hi,Whats Your Name');
var welcome = 'Welcome, ' + usr + ' To My Site';

var app =new Vue({
    el: '#app',
    data: {
        message: welcome
    }
})
var app3 =new Vue({
    el: '#app3',
    data: {
        seen: false
    }
})
var app4 =new Vue({
    el:'#app4',
    data:{
        todos:[
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
            ]
    }
})
var app5 = new Vue({
    el:'#app5',
    data: {
        message: 'koushik das'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})