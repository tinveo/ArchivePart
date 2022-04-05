
<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
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
            :class="{danger : insufficientQuantity}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0