Vue.component('task-list', {

    template: `
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
   </div>
   `,

    data() {
        return {
            tasks: [
                { task: 'Go to bank', complete: false },
                { task: 'Mown loan', complete: true },
                { task: 'Take a bath', complete: false },
                { task: 'Go shopping', complete: false }
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});