

console.log("Testeo");

const socket = io()

// socket.emit('message', 'esto es data en forma de string')

// socket.on('socket_individual', data => {
//     console.log(data);
// })

// socket.on('para_todos_menos_el_actual', data =>{
//     console.log(data);
// })
// socket.on('evento_para_todos', data => {
//     console.log(data);
// })33const i

const input = document.getElementById('message')
const messageList = document.getElementById('list-message')

input.addEventListener('keyup', evt =>{
    if(evt.key==='Enter'){
        socket.emit('mensaje_cliente', input.value)
        input.value= ''
    }
}
)
socket.on ('message_server', data =>{
    console.log(data);
})