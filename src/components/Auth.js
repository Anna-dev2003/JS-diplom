import { api, TOKEN_KEY } from "./API"
import { Form } from "./Form"
import { Input } from "./Input"
import { loginConfig, registerConfig } from "./formConfigs"
import { taskBoard } from "../index"

const getLoginForm = (onSuccess) => {
    return new Form({
        title: 'Login',
        toggleTitleText: 'Register',
        inputs: loginConfig.map(input => new Input(input)),
        submitBtnText: "Submit",
        onSubmit: async (data) => {
            await api.login(data)
            onSuccess()
        }
    })
}

const getRegisterForm = (onSuccess) => {
    return new Form({
        title: 'Register',
        toggleTitleText: 'Login',
        inputs: registerConfig.map(input => new Input(input)),
        submitBtnText: "Submit",
        onSubmit: async (data) => {
            await api.register(data)
            onSuccess()
        }

    })
}

export class Auth {
    constructor({appContainer, onLoginSuccess}){
        this.appContainer = appContainer

        this.formContainer = document.createElement('div')
        this.switchBtn = document.createElement('p')
        this.logoutBtn = document.createElement('p')
        this.avatar = document.createElement('span')

        this.form = null;
        this.user = null;
        this.isLogin = true;

        this.loginForm = getLoginForm(onLoginSuccess)
        this.registerForm = getRegisterForm(this.switchForms.bind(this))

        this.createFormContainer();
        this.createHeaderControls();
    }

    createFormContainer(){

        this.formContainer.classList.add('form__container');
        this.switchBtn.classList.add("form__title--toggle", "form__title", "btn", 'btn-text')
        this.switchBtn.innerText = "Register";

        this.switchBtn.addEventListener('click', () => {
            this.switchForms()
        })

        this.formContainer.prepend(this.switchBtn)
    
    }

    createHeaderControls(){
        this.logoutBtn.classList.add('button__logout', "btn", 'btn-text')
        this.logoutBtn.innerText = 'Logout'
        this.avatar.classList.add('avatar', "user-icon")

        this.logoutBtn.addEventListener('click', () => {
            this.logout();
            api.logout();
            taskBoard.logout();
        })
    }


    renderHeaderControls(){
        const controlsContainer = document.getElementById('header-controls')
        this.avatar.innerText = this.user.name[0]

        controlsContainer.append(this.logoutBtn, this.avatar)

    }

    renderAuthForm(){

        if(this.form){
            this.form.form.remove()
        }

        if(this.isLogin){
            this.form = this.loginForm
        }else{
            this.form = this.registerForm
        }

        this.form.render(this.formContainer)
        this.appContainer.append(this.formContainer)
    }

    switchForms(){
        this.isLogin = !this.isLogin

        if(this.isLogin){
            // this.form.toggleTitle.innerText = 'Register'
            this.switchBtn.innerText = 'Register'
        }else{
            // this.form.toggleTitle.innerText = 'Login'
            this.switchBtn.innerText = 'Login'
        }

        this.renderAuthForm()
    }

    logout(){
        this.avatar.remove();
        this.logoutBtn.remove();
        this.appContainer.innerHTML = '';
        this.idLogin = true;

        this.renderAuthForm();
    }
}