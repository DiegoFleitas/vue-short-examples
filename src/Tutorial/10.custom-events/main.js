Vue.component('modal', {

    props: ['content'],

    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!--    Any other Bulma elements you want  -->
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <!--    showModal = false wont work because of the scope: we need a custom event, in this case we emit close    -->
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});