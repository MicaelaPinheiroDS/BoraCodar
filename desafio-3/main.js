import './style.css';
import reorderTree from './public/reorderTree.svg';
document.querySelector('#app').innerHTML = `
<header>
  <h1>Teste os botões</h1>
  <p>
    Interaja como os botões e observe a  mudançã de aparência e 
    de cursores
  </p>
</header>
<div class="container-button">
  <button class="button-primary button">Interaja comigo</butoon>
  <button class="button-secondary button">Interaja comigo</butoon>
  <button class="button-tertiary button"><img src="${reorderTree}" alt="">Interaja comigo</butoon>
</div>
`;


