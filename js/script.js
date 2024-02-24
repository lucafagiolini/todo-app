const { createApp } = Vue;
createApp({
    data() {


        return {
            // tutti i nostri dati
            mainTitle: "to do list",

            taskToCompleteCounter: 0,

            taskDoneCounter: 0,

            newTask: "",


            taskList: [
                { title: "Write down your first task, 😎", done: true },
            ],
        }
    },

    methods: {
        deleteTask(TaskIndex) {
            this.taskList.splice(TaskIndex, 1);
            this.taskToCompleteCounter = this.taskList.filter((task) => !task.done).length;

        },

        addTask() {
            this.taskList.push({ title: this.newTask, done: false });
            console.log(this.newTask);
            console.log(this.taskList);
            this.newTask = "";
            this.taskToCompleteCounter = this.taskList.filter((task) => task.done).length;

        },

        toggleStatus(index) {
            this.taskList[index].done = !this.taskList[index].done;
            this.taskDoneCounter = this.taskList.filter((task) => task.done).length;
        }
    },





}).mount("#app");
// ******** VUE ********