<template>
  <div class="dashboard">
    <main class="dashboard__main">
      <WorkerStatus />
      <StockExchange />
    </main>
    <aside class="dashboard__aside">
      <Block title="Daily Earnings" icon="dollar-sign">
        toto
      </Block>
      <Block title="Consumption" icon="bolt">
        toto
      </Block>
    </aside>
  </div>
</template>

<script>
import StockExchange from "../components/StockExchange";
import WorkerStatus from "../components/WorkerStatus";
export default {
  name: "Dashboard",
  components: {WorkerStatus, StockExchange}
}
</script>

<style>
.dashboard {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.dashboard__main {
  flex: 1;
}

.dashboard__aside {
  max-width: 360px;
  width: 100%;
}
</style>