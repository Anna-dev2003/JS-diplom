
import { api } from "./API";


export class Task {
    constructor({
        name,
        description,
        timeTracked,
        isActive,
        isFinished,
        _id,
        createdAt,
    }){
        this.name = name;
        this.description = description;
        this.timeTracker = timeTracked;
        this.isActive = isActive;
        this.createdAt = new Date(createdAt);

        this.id = _id;
        this.taskCard = document.createElement('div');
        this.deleteBtn = document.createElement('div');
        this.timerBtn =  document.createElement('button');
        this.timeTrackerElement = document.createElement('span')
        this.markAsDoneBtn = document.createElement('p')
        this.timeTrackedIntervalId = null
        console.log(this.timeTracker)

    }

    renderCard(container){
        const taskContent = document.createElement('div')
        const titleElem = document.createElement('h3');
        const descriptionElem = document.createElement('p');
        const timeTracker = document.createElement('div');
        const dateElem = document.createElement('p');


        taskContent.classList.add('task-content')
        titleElem.classList.add('task-title');
        descriptionElem.classList.add('task-description');
        timeTracker.classList.add('time-tracker');
        dateElem.classList.add('task-date');

        this.taskCard.classList.add('task-card')
        this.deleteBtn.classList.add('task-delete-btn')
        this.timerBtn.classList.add('timer-btn')
        this.markAsDoneBtn.classList.add('btn', 'btn-form', 'btn-small')

        if(this.isFinished){
            this.timerBtn.setAttribute('disabled', '')
            // this.taskCard.taskFinished('task-finished')
            this.taskCard.classList.add('task-finished')
            this.markAsDoneBtn.innerText = 'Restart';
        } else {

            this.timerBtn.classList.add(
                this.isActive ? 'timer-btn-stop' : 'timer-btn-play'
            )
            this.markAsDoneBtn.innerText = 'Mark as done'
        }

        titleElem.innerText = this.name;
        descriptionElem.innerText = this.description

        dateElem.innerText = Task.getFormattedDate(this.createdAt)
        this.timeTrackerElement.innerText = Task.getFormattedTimeTracker(
            this.timeTracker
        )

        // this.deleteBtn.innerHTML = `<button>times</button>`

        if(this.isActive){
            this.startTracker()
            this.timerBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
        }else{
            this.timerBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
        }

        timeTracker.append(this.timerBtn, this.timeTrackerElement)
        taskContent.append( 
            titleElem,
            descriptionElem,
            timeTracker,
            dateElem,
            this.markAsDoneBtn
        )

        this.taskCard.append(
            taskContent,
            this.deleteBtn
        )

        container.append(this.taskCard)

        this.timerBtn.addEventListener('click', this.toggleTimeTracker)
        this.deleteBtn.addEventListener('click', this.removeTask)
        this.markAsDoneBtn.addEventListener('click', this.toggleTaskFinished)

    }

    removeTask = async () => {
        await api.deleteTask(this.id);
        this.taskCard.remove();
    }

    toggleTimeTracker = async () =>{
        this.isActive = !this.isActive;
        await api.editTask(this.id, {isActive: this.isActive})

        if(this.isActive){
            this.startTracker()
        }else{
            this.stopTracker()
        }
    }

    toggleTaskFinished = async () => {
        this.isFinished = !this.isFinished;
        console.log(this.isFinished)
        await api.editTask(this.id, {isFinished: this.isFinished})
        this.taskCard.classList.toggle('task-finished')

        if(this.isFinished){
            this.timerBtn.setAttribute('disabled', '');
            this.markAsDoneBtn.innerText = 'Restart';
            this.stopTracker();
        }else{
            this.timerBtn.removeAttribute('disabled');
            this.markAsDoneBtn.innerText = 'Mark as done'
        }
    }

    startTracker(){
        this.timerBtn.classList.remove('timer-btn-play');
        this.timerBtn.classList.add('timer-btn-stop');
        this.timerBtn.innerHTML =  `<i class="fa-solid fa-stop"></i>`

        this.timeTrackedIntervalId = setInterval(() => {
            this.timeTracker += 1000;
            this.updateTimerTracker()
        }, 1000)
    }

    stopTracker(){
        this.timerBtn.classList.add('timer-btn-play');
        this.timerBtn.classList.remove('timer-btn-stop');
        this.timerBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        clearInterval(this.timeTrackedIntervalId)
    }

    updateTimerTracker(){
        const formatted = Task.getFormattedTimeTracker(this.timeTracker)
        this.timeTrackerElement.innerText = formatted;
    }

    static getFormattedDate(d) {

        const date = d.toLocaleDateString();
        const time = d.toLocaleTimeString(); 

        return `${date} ${time}`
    }

    static addOptionalZero(value){
        return value > 9 ? value : `0${value}`
    }



    static getFormattedTimeTracker(timeTracked){
        console.log(timeTracked)
        const timeTrackerSeconds = Math.floor(timeTracked / 1000)
        const hours = Math.floor(timeTrackerSeconds / 3600);
        const minutes = Math.floor((timeTrackerSeconds - hours * 3600) / 60);
        const seconds = timeTrackerSeconds - hours * 3600 - minutes * 60;

        return `${this.addOptionalZero(hours)}:${this.addOptionalZero(minutes)}:${this.addOptionalZero(seconds)}`
    }



}