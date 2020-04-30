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

    el:'#vue-dynamic-css',

    data: {
        available: true,
        nearby: false,
    },

    methods: {
        
    },

});