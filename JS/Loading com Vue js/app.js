var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        api: [],
        showLoad: false
    },
    methods:{
        loadApi: async function() {
            this.showLoad = true;
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
              console.log(response.data);
              this.api = response.data;
            } catch (error) {
              console.error(error);
            }finally{
                this.showLoad = false;
            }
          }
    }
})