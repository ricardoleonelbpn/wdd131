const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('list');
const li = document.createElement('li');
const botaoExcluir = document.createElement('button');

li.textContent = input.ariaValueMax;
botaoExcluir.textContent = '❌';
li.append(botaoExcluir);
lista.append(li);