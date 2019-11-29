Vue.component('coupon', {

    // The @blur event uses the local version of onCouponApplied
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,

    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }

});


new Vue({

    el: '#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});