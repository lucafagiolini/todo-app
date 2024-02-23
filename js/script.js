const { createApp } = Vue;
createApp({
    data() {


        return {
            // tutti i nostri dati
            mainTitle: "to do list",

            newTask: "",


            taskList: [
                { title: "write down your first task, 😎", done: true },
            ],
        }
    },

    methods: {
        deleteTask(TaskIndex) {
            this.taskList.splice(TaskIndex, 1);
        },

        addTask() {
            this.taskList.push({ title: this.newTask, done: false });
            console.log(this.newTask);
            console.log(this.taskList);
            this.newTask = "";

        },

        toggleStatus(index) {
            this.taskList[index].done = !this.taskList[index].done;
        }
    },





}).mount("#app");
// ******** VUE ********