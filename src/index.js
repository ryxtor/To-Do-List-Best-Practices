import ToDoList from './modules/todoclass.js';
import './style.css';
import enterIcon from './enter.png';

const runClass = new ToDoList();
const btnTask = document.getElementById('enterInput');
const enterTask = document.getElementById('input');
const delCompletedbtn = document.getElementById('clear-btn');

const createEnterIcon = () => {
  const formContainer = document.querySelector('.input-container');
  const enIcon = new Image();
  enIcon.src = enterIcon;
  enIcon.setAttribute('id', 'enterInput');
  enIcon.classList = 'enterInput';
  enIcon.setAttribute('alt', 'enter-icon');
  formContainer.appendChild(enIcon);
};

createEnterIcon();

runClass.displaytdlist();

btnTask.addEventListener('click', () => {
  runClass.addTask();
});

enterTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    runClass.addTask();
  }
});

delCompletedbtn.addEventListener('click', () => {
  runClass.delCompletedTasks();
});