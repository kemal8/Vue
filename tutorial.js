new Vue({

    el:'#vue-dynamic-css',

    data: {
        available: true,
        nearby: false,
    },

    methods: {
        
    },

    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },

});