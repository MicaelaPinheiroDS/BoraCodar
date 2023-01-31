const textChat = document.querySelector('.chatBoxInput');
const main = document.querySelector('main');
const textarea = document.querySelector('textarea');
const arrow = document.querySelector('.chat-box > img');
const date = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', hour12: false});

textarea.addEventListener('keypress', (event) =>{
    if(event.key == 'Enter'){
        chatBoxMsg();
        if(event.preventDefault) {
            event.preventDefault(); 
        }
    }

});
arrow.addEventListener('click', ()=>{
    chatBoxMsg();
});

function chatBoxMsg (){
    if(textChat.value !== ''){
        main.innerHTML += `
        <div class="chat-bubble my-chat-bubble">
            <h2>Você - ${date}</h2>
            <p>${textChat.value}</p>
        </div>`
        textChat.value = ''; 
        
    }
}
