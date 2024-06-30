const app = Vue.createApp({
    
    data() {
        return{
            displayButton: true,
            displayOption: 'about-me',
            displayMenu: false
        }
    },
    methods: {
        displayBurgerMenu(){           
            
            document.querySelector('.label').classList.add('closed')
            document.querySelector('.label').classList.remove('active-linea') 
            setTimeout(() => {
               this.displayMenu = !this.displayMenu    
               document.querySelector('.label').classList.remove('closed') 
               document.querySelector('.label').classList.add('active-linea')            
            }, '900')
        },
        closedBurgerMenu(){
            this.displayMenu = false 
        }
    },
        
});

app.mount('#app')