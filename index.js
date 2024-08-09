const app = Vue.createApp({
    
    data() {
        return{
            displayButton: false,
            displayOption: 'about-me',
            displayMenu: false,
            education: [
                {
                    title: 'Programming Web',
                    institute: 'Universidad Técnica Nacional (UTN)',
                    logo: '/imagenes/utn.png',
                    description: 'Database Fundamentals: Proficiency in SQL and MySQL. PHP Domain: Variables, Operators, Control Structures, OOP. Vue.js: Syntax, Events, Vue.CLI, Components, Computed and Watch',
                    certificate: 'https://asset.cloudinary.com/dvjmjujc0/f49e67d4ee083454a4ee5bce936946bb'
                },
                {
                    title: 'Developer Full Stack',
                    institute: 'NUCBA',
                    logo: '/imagenes/nucba.png',
                    description: 'Web Design: HTML, CSS, Media Query, Flex, Animations. Web Programming: Fundamentals of JavaScript, Scope, Let / Const in depth, Callbacks II, DOM, OOP in JS, Deployment, Launching apps and pitch. React JS: Set up a React project, prettier, parcel, Webpack, JSX, Props and State, Hooks.',
                    certificate: 'https://app.eduflow.com/certificate/b19a015f-03ed-476c-9a8f-fce864c57338'
                },
                { 
                    title: 'Software Tester QA',
                    institute: 'Education IT',
                    logo: '/imagenes/eduit.jpg',
                    description: 'SQL queries, database creation, information analysis, database structure analysis, data migration to SQL. Analysis of requirements and definition of test cases for each functionality, management of progress reports, metric specifications and their monitoring. Integration test and regression by functionality. severity metrics. Automation in Selenium',
                    certificate: 'https://api.educacionit.com/pdf/certificados/Mariangel-Diaz-583068/51104'
                },
            ],
            currentPage: 1,
            perPage: 2,
            currentPageProject: 1,
            perPageProject: 2,
            projects: [
                {
                    title: 'Tres en Linea',
                    logo: '/imagenes/3enlinea.png',
                    description: 'The classic game is played on a board with nine points connected vertically and horizontally, plus two large diagonals. Game modes: \n Player 1 vs Player 2  \n CPU vs Player \n It uses Vue.js.',
                    deploy: 'https://tres-en-linea-topaz.vercel.app/',
                    repository: 'https://github.com/MariD1803/TresEnLinea',
                    icons: [
                        { title: 'HTML', class: "fa-brands fa-html5"},
                        { title: 'Javascript', class: "fa-brands fa-js"},
                        { title: 'CSS', class: "fa-brands fa-css3-alt"},
                        { title: 'Vue', class: "fa-brands fa-vuejs"}
                    ]
                },
                {
                    title: 'Dulce Cerecita',
                    logo: '/imagenes/dc.png',
                    description: 'An electronic clothing and footwear store. It uses React Hooks for its dynamic functions, such as product rendering, adding a product to a cart, among others. The platform is designed to be cute and modern with the latest fashion products.',
                    deploy: 'https://integradorjavascript-six.vercel.app/index.html',
                    repository: 'https://github.com/MariD1803/IntegradorJS',
                    icons: [
                        { title: 'HTML', class: "fa-brands fa-html5"},
                        { title: 'Javascript', class: "fa-brands fa-js"},
                         { title: 'CSS', class: "fa-brands fa-css3-alt"},
                        ]
                },
                {
                    title: '¡HEY! Store',
                    logo: '/imagenes/hs.png',
                    description: 'An e-commerce, bake sale themed. It uses JavaScript for its dynamic functions, such as product rendering, adding a product to a cart, among others. The platform is designed to be easy to use and navigate, with a clean and modern aesthetic.',
                    deploy: 'https://github.com/MariD1803/ReactIntegrador',
                    repository: 'https://react-integrador.vercel.app/',
                    icons: [
                        { title: 'HTML', class: "fa-brands fa-html5"},
                        { title: 'Javascript', class: "fa-brands fa-js"},
                        { title: 'CSS', class: "fa-brands fa-css3-alt"},
                        { title: 'React', class: "fa-brands fa-react"}
                    ]
                }
            ],
            skillsContent: [
                {
                    title: 'Lenguajes de Programación',
                    content: [
                        { title: 'Javascript', class: "fa-brands fa-js"},
                        {title: 'Python', class: "fa-brands fa-python"},
                        {title: 'PHP', class: "fa-brands fa-php"}
                    ]
                },
                {
                    title: 'Front-End',
                    content: [
                        { title: 'HTML', class: "fa-brands fa-html5"}, 
                        { title: 'CSS', class: "fa-brands fa-css3-alt"}, 
                        { title: 'Vue', class: "fa-brands fa-vuejs"}, 
                        { title: 'React', class: "fa-brands fa-react"}, 
                        { title: 'Materialize', class: "fa-solid fa-m"}, 
                        { title: 'Material UI', class: "fa-brands fa-wirsindhandwerk"},
                        { title: 'Chakra UI', class: "fa-solid fa-bolt"}, 
                        { title: 'StyledComponents', class: "fa-solid fa-hand-sparkles"}, 
                        { title: 'Bootstrap', class: "fa-brands fa-bootstrap"}
                    ]
                },
                {
                    title: 'Diseño',
                    content: [
                        { title: 'Canva', class: "fa-solid fa-camera"}, 
                        { title: 'Figma', class: "fa-brands fa-figma"}, 
                    ]
                },
                {
                    title: 'Control de Calidad',
                    content: [
                        { title: 'Selenium', class: "fa-solid fa-check"}, 
                        { title: 'JMeter', class: "fa-solid fa-feather"}, 
                        { title: 'SQL', class: "fa-solid fa-database"},
                        { title: 'MySQL', class: "fa-solid fa-database"},
                    ]
                },
                {
                    title: 'Otras herramientas',
                    content: [
                        { title: 'GitHub', class: "fa-brands fa-github"}, 
                        { title: 'Node', class: "fa-brands fa-node"}, 
                        { title: 'Git', class: "fa-solid fa-code-branch"},
                        { title: 'Npm', class: "fa-brands fa-npm"},
                    ]
                }
            ]
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
        },
        setCurrentPage(pageNumber, page) {
            if(page == 'project'){
                this.currentPageProject = pageNumber
            }else{
            this.currentPage = pageNumber;
            }
        }
    },
    computed: {
        pageCount() {
          return Math.ceil(this.education.length / this.perPage);
        },
        paginatedItems() {
          const startIndex = (this.currentPage - 1) * this.perPage;
          return this.education.slice(startIndex, startIndex + this.perPage);
        },
        pageCountProjects() {
            return Math.ceil(this.projects.length / this.perPageProject);
        },
        paginatedProjects() {
            const startIndex = (this.currentPageProject - 1) * this.perPageProject;
            return this.projects.slice(startIndex, startIndex + this.perPageProject);
        },
    },
        
});

app.mount('#app')