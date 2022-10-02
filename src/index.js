import { loginConfig } from './components/formConfigs.js';
import { Form } from './components/Form.js'
import { Input } from './components/Input.js'
import { api } from './components/API.js'
import './styles/style.css';

import { Auth } from './components/Auth.js';
import { TaskBoard } from './components/TaskBoard.js';


const appContainer = document.getElementById('app')
const projectBody = document.getElementById('body')

const onLoginSuccess = async () => {
    appContainer.innerHTML = ''
    const user = await api.getSelf();
    renderAppLayout(user)
}

const auth = new Auth({
    appContainer,
    onLoginSuccess
})

export const taskBoard = new TaskBoard({
    appContainer,
})

const renderAppLayout = async (user) => {
    auth.user = user;
    auth.renderHeaderControls();
    taskBoard.renderLayout();

    const taskList = await api.getAllTask()

    taskList.forEach((task) => taskBoard.addTask(task))
    
}

const init = async () => {
    const isLoggedIn = api.isLoggedIn()
    // console.log(isLoggedIn)

    if(isLoggedIn){
        const user = await api.autoLogin()
        // projectBody.classList.add('board__background')
        renderAppLayout(user)
    }else{
        // projectBody.classList.remove('board__background')
        auth.renderAuthForm()
    }
}

init()







