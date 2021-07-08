<template>
  <Block
      title="Stock Exchange"
      :right-data="`Updated in ${nextUpdate}s`"
      :no-padding="true"
      :loading="isPending"
  >
    <table class="stock-exchange__table">
      <thead class="stock-exchange__header">
      <tr>
        <th>#</th>
        <th>Symbol</th>
        <th>Name</th>
        <th>Price (USD)</th>
        <th>Change 24h</th>
        <th>Price Graph 7d</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(crypto, i) in data" :key="i">
        <td>
          <img
              class="stock-exchange__icon"
              :src="crypto.image"
              :alt="crypto.name"
          />
        </td>
        <td>{{ crypto.symbol.toUpperCase() }}</td>
        <td>{{ crypto.name }}</td>
        <td>{{ crypto.current_price.toFixed(2) }}</td>
        <td
            :class="crypto.price_change_percentage_24h_in_currency < 0 ? 'stock-exchange--red' : 'stock-exchange--green'"
        >
          {{ crypto.price_change_percentage_24h_in_currency.toFixed(2) }}%
        </td>
        <td>
          <img
              class="stock-exchange__sparkline"
              :src="fetchSparkline(crypto.name)"
              :alt="`${crypto.name}'s sparkline`"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </Block>
</template>

<script>
import axios from "axios"

export default {
  name: "StockExchange",
  data() {
    return {
      data: [],
      interval: null,
      nextUpdate: 60,
      isPending: true,
    }
  },
  beforeMount() {
    this.fetchData().finally(() => this.isPending = false)

    this.interval = setInterval(() => {
      if(this.nextUpdate === 0) {
        this.nextUpdate = 60
        this.fetchData()
      }
      this.nextUpdate = Math.max(0, this.nextUpdate - 1)
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    fetchSparkline(name) {
      switch (name) {
        case "XRP":
          name = "ripple"
          break
        case "Polkadot":
          name = "polkadot-iou"
          break
        case "Polygon":
          name = "matic-network"
          break
        case "Theta Network":
          name = "wrapped-bitcoin"
          break
      }

     return `https://coin360-weekly-chart-static-image-storage.s3.eu-central-1.amazonaws.com/` +
            `${name.toLowerCase().replaceAll(' ', '-')}.png`
    },
    fetchData() {
      return axios
          .get(
              "https://api.coingecko.com/api/v3/coins/markets?" +
              "vs_currency=usd" +
              "&price_change_percentage=24h" +
              "&sparkline=true" +
              "&order=market_cap_desc" +
              "&per_page=10"
          )
          .then(result => this.data = result.data)
    },

  }
}
</script>

<style>
.stock-exchange__icon {
  width: 30px;
}

.stock-exchange__sparkline {
  width: 100px;
}

.stock-exchange--red {
  color: var(--warning-color);
}

.stock-exchange--green {
  color: var(--success-color-dark-2);
}

.stock-exchange__table {
  margin-top:0;
  width:100%;
  height:100%;
  box-sizing: border-box;
  font-size: 1.3rem;
  overflow: hidden;
  position:relative;
  flex:1;
}

.stock-exchange__table:hover {
  overflow: auto!important;
}

.stock-exchange__header{
  height:50px;
  text-transform: uppercase;
  position:relative;
}

.stock-exchange__header th {
  padding:var(--spacing-little);
  vertical-align: middle;
  text-align: center;
  font-size:1.4rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: var(--neutral-color);
  color: #fff;
  z-index: 10;
}

.stock-exchange__table tr:nth-child(even) {
  background-color: var(--main-color-dark-1);
}

.stock-exchange__table tr:hover {
  background-color: var(--main-color-dark-2);
}

.stock-exchange__table tr td {
  padding:var(--spacing-little);
  vertical-align: middle;
  text-align: center;
}
</style>