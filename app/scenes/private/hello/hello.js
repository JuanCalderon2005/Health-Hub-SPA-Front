import './hello.css';

export function hello() {
    const saludo =`<h1>Hola</h1>`;
    const hello_logic = function(){
        const log =document.querySelector('h1');
        log.addEventListener('click', () => {
            alert('Hola compañeros ');
        });

        return{
            saludo,
            hello_logic
        }
    }
}