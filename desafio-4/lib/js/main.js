import '../../style.css'
import {user} from './userData.js'
import arrowChatBox from '../img/arrow-chat-box.svg';
document.querySelector("#app").innerHTML = `
  <header>
    <div id="header">
      <div class="main-header">
        <div class="user">
          <div class="user-avatar">
            <img src="${user.avatar}" alt="">
          </div>
          <div class="user-info">
            <h1>${user.name}</h1>
            <div id="status"><span></span>Online</div>
          </div>
        </div>
        <div class="button-closed">
          <span></span>
          <span></span>
        </div>
      </div>
      <p class="data-status">Hoje 11:30</p>
    </div>
  </header>
  <main>
    <div class="chat-bubble">
    <h2>Cecilia - 11:30</h2>
    <p>Tive uma ideia incrível para um projeto! 😍</p>
    </div>
    <div class="chat-bubble my-chat-bubble">
    <h2>Você - 11:32</h2>
    <p>Sério? Me conta mais.</p>
    </div>
    <div class="chat-bubble">
    <h2>Cecilia - 11:34</h2>
    <p>E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</p>
    </div>
    <div class="chat-bubble my-chat-bubble">
    <h2>Você - 11:36</h2>
    <p>#boraCodar! 🚀</p>
    </div>  
  </main>
  <div class="chat-box-container">
  <div class="chat-box">
    <textarea class="chatBoxInput" rows="1" placeholder="Digite sua mensagem"></textarea><img src="${arrowChatBox}" alt="">
  </div>
</div>

`;