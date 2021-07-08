<template>
  <Block title="Worker Status"
         :no-body="true"
         :right-data="`Updated in ${nextUpdate}s`"
  >
    <div class="worker-status">
      <div class="worker-status__progress block__content">
        <ve-progress
            :progress="70"
            :loading="false"
            :color="gradient"
            animation="bounce 1000"
        >
          <span class="worker-status__number">0/2</span>
          <span class="worker-status__title">active workers</span>
        </ve-progress>
      </div>
      <div class="worker-status__highchart block__content">
        <highcharts class="worker-status__highcharts" :options="chartOptions"></highcharts>
      </div>
    </div>
  </Block>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: "WorkerStatus",
  data() {
    return {
      interval: null,
      nextUpdate: 60,
      chartOptions:
          Highcharts.setOptions({
            title: {
              text: "Total Hashrate",
            },
            chart: {
              height: 200,
            },
            xAxis: {
              categories: [
                '8:00', '8:10', '8:20', '8:30', '8:40', '8:50', '9:00', '9:10', '9:20',
                '8:00', '8:10', '8:20', '8:30', '8:40', '8:50', '9:00', '9:10', '9:20'
              ]
            },
            yAxis: {
              title: {
                text: 'Hashrate'
              },
            },
            plotOptions: {
              series: {
                color: 'var(--neutral-color)'
              }
            },
            series: [{
              name: "Total Hashrate",
              data: [
                140, 230, 180, 140, 230, 180, 140, 230, 180,
                140, 230, 180, 140, 230, 180, 140, 230, 180
              ] // sample data
            }],
            credits: {
              enabled: false
            },
          }),
      gradient: {
        radial: false,
        colors: [
          {
            color: 'var(--neutral-color)',
            offset: "0",
            opacity: '1',
          },
          {
            color: 'var(--neutral-color-dark-1)',
            offset: "50",
            opacity: '1',
          },
          {
            color: 'var(--neutral-color-dark-2)',
            offset: "100",
            opacity: '1',
          },
        ]
      }
    }
  },
  beforeMount() {
    this.interval = setInterval(() => {
      if(this.nextUpdate === 0) {
        this.nextUpdate = 60
        // this.fetchData()
      }
      this.nextUpdate = Math.max(0, this.nextUpdate - 1)
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>

<style>
.worker-status {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.worker-status__number {
  font-weight: bold;
  font-size: 6rem;
}

.worker-status__title {
  display: block;
}

.worker-status__highchart {
  flex: 1;
  margin-left: var(--spacing-medium);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>