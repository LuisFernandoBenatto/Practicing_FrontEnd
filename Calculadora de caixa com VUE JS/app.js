var app = new Vue({
    el: '#app', //elemento
    data: {
    message: 'Hello Vue!',
    debug : 'Ok',

    cedula_100: 0,    
    resultado_cedula_100: 0,
    cedula_50: 0,    
    resultado_cedula_50: 0,
    cedula_20: 0,
    resultado_cedula_20: 0,
    cedula_10: 0,    
    resultado_cedula_10: 0,
    cedula_5: 0,    
    resultado_cedula_5: 0,
    cedula_2: 0,    
    resultado_cedula_2: 0,
    moeda_1: 0,    
    resultado_moeda_1: 0,
    moeda_50: 0.0,    
    resultado_moeda_50: 0.0,
    moeda_25: 0.0,    
    resultado_moeda_25: 0.0,
    moeda_10: 0.0,    
    resultado_moeda_10: 0.0,
    moeda_5: 0.0,   
    resultado_moeda_5: 0.0
    },
    watch:{
        cedula_100: function(){
            this.resultado_cedula_100 = this.cedula_100 * 100;
        },
        cedula_50: function(){
            this.resultado_cedula_50 = this.cedula_50 * 50;
        },
        cedula_20: function(){
            this.resultado_cedula_20 = this.cedula_20 * 20;
        },
        cedula_10: function(){
            this.resultado_cedula_10 = this.cedula_10 * 10;
        },
        cedula_5: function(){
            this.resultado_cedula_5 = this.cedula_5 * 5;
        },
        cedula_2: function(){
            this.resultado_cedula_2 = this.cedula_2 * 2;
        },
        moeda_1: function(){
            this.resultado_moeda_1 = this.moeda_1 * 1;
        },
        moeda_50: function(){
            this.resultado_moeda_50 = this.moeda_50 * 0.50;
        },
        moeda_25: function(){
            this.resultado_moeda_25 = this.moeda_25 * 0.25;
        },
        moeda_10: function(){
            this.resultado_moeda_10 = this.moeda_10 * 0.10;
        },
        moeda_5: function(){
            this.resultado_moeda_5 = this.moeda_5 * 0.05;
        }
    },
    computed:{
        soma: function(){
            var valor = 0.0;
            valor = this.resultado_cedula_100 + this.resultado_cedula_50 + this.resultado_cedula_20 + this.resultado_cedula_10 +  this.resultado_cedula_5 + this.resultado_cedula_2 + this.resultado_moeda_1 + this.resultado_moeda_50 + this.resultado_moeda_25 + this.resultado_moeda_10 + this.resultado_moeda_5;
            return valor;
        }
    }
})