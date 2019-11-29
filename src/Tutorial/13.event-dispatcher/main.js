// Any view instance has the hability to listen for and emit events
window.Event = new Vue();

Vue.component('coupon', {

    // The @blur event uses the local version of onCouponApplied
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,

    methods: {
        onCouponApplied() {
            Event.$emit('applied');
        }
    }

});


new Vue({

    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.$on('applied', () => alert('Handling it!'));
    }

});