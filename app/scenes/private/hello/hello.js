import './hello.css';

export function hello() {
    const saludo =`<a>Hola</a>`;
    const hello_logic = function(){
        const log =document.querySelector('a');
        log.addEventListener('click', () => {
            alert('Hola compañeros ');
            
        });

    }
    return{
        pageContent: saludo,
        logic:hello_logic
    }
}