new Vue({

    el: '#vue-app',

    data: {
        name: 'Kemal',
        job: 'Manager',
        databindtitle: 'Data Binding',
        website: 'www.data_binding.com',
        websiteTag: '<a href="https://kemal8.github.io/nxtotravel/">This is my web site</a>',
    },

    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.job + ' ' + this.name;
        }
    }

});

new Vue({

    el:'#vue-events',

    data: {
        age: 25,
    },

    methods: {
        add:function(inc) {
            this.age += inc;
        },
        subcract:function(dec) {
            this.age -= dec;  
        },
        updateXY:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click:function(){
            alert('Click me now !');
        },
    },

});

new Vue({

    el:'#vue-keyboard-event',

    data: {
        
    },

    methods: {
        logName:function(){
            console.log('Enter your name');
        },
        logAge:function(){
            console.log('Enter your age');
        },
    },

});

new Vue({

    el:'#vue-2-way-data-binding',

    data: {
        name: '',
        age: '',
    },

    methods: {
        
    },

});

new Vue({

    el:'#vue-computed-properties',

    data: {
        age: 20,
        a: 0,
        b: 0,
    },

    methods: {
        /*addToA:function(){
            console.log('addToA');
            return this.age + this.a;
        },
        addToB:function(){
            console.log('addToB');
            return this.age + this.b;
        },*/
    },

    computed: {
        addToA:function(){
            console.log('addToA');
            return this.age + this.a;
        },
        addToB:function(){
            console.log('addToB');
            return this.age + this.b;
        },
    },

});

new Vue({

    el:'#vue-conditions',

    data: {
        error: false,
        success: false
    },

    methods: {
        
    },

    computed: {
        
    },

});

new Vue({

    el:'#vue-looping-with-v-for',

    data: {
        name: 'jack',
        characters:['kemal','hashi','bashi','yoshi'],
        ninjas: [
            {name: 'ruy', age:25},
            {name: 'yoshi', age:35},
            {name: 'ken', age:55},
        ]
    },

    methods: {
        
    },

    computed: {
        
    },

});

var one = new Vue({

    el:'#multiple-vue-instance-one',

    data: {
        title: 'Vue app one'
    },

    methods: {
        
    },

    computed: {
        greet: function(){
            return 'Hello im from vue app one ;)';
        }
    },

});

var two = new Vue({

    el:'#multiple-vue-instance-two',

    data: {
        title: 'Vue app two'
    },

    methods: {
        changeTitle: function (){
            one.title = "Title changed";
        },
        resetTitle: function (){
            one.title = "Vue app one";
        }
    },

    computed: {
        greet: function(){
            return 'Hello im from vue app two ;)';
        }
    },

});

Vue.component('greeting',{
    template:'<p>Hy! i am {{name}}. <button v-on:click="changeName">Change name</button> <button v-on:click="resetName">Reset name</button></p>',
    data: function(){
        return {
            name: 'Yohani'
        }
    },
    methods: {
        changeName: function (){
            this.name = 'Hashi';
        },
        resetName: function (){
            this.name = 'Yohani';
        }
    }
});

new Vue({

    el:'#vue-components-one',

    data: {
        title: 'Vue app one'
    },

    methods: {
        
    },

    computed: {
        
    },

});

new Vue({

    el:'#vue-components-two',

    data: {
        title: 'Vue app two'
    },

    methods: {
        
    },

    computed: {
        
    },

});

new Vue({

    el:'#vue-refs',

    data: {
        output: 'your fav food'
    },

    methods: {
       readRefs: function (){
           console.log(this.$refs.input.value);
           this.output = this.$refs.input.value;
       } 
    },

    computed: {
        
    },

});