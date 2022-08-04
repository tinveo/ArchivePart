<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            class="form-control"
            type="number"
            min="0"
            step="1"
            placeholder="quantity"
            v-model.number="quantity"
            :class="{'danger' : insufficientFunds}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;