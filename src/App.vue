<script setup>
import { ref, computed } from 'vue'
import { i18n } from './i18n'

const now = ref(new Date())
setInterval(() => now.value = new Date(), 1000)

/* даты */
const cmStart = new Date('2009-01-01')
const cmEnd = new Date('2016-12-31')
const lineageStart = new Date('2016-12-24')

/* таймлайн */
const timeline = [
  { rom: 'CM', android: '2.2 Froyo', year: 2010 },
  { rom: 'CM', android: '4.1 Jelly Bean', year: 2012 },
  { rom: 'CM', android: '6.0 Marshmallow', year: 2015 },
  { rom: 'Lineage', android: '7.1 Nougat', year: 2016 },
  { rom: 'Lineage', android: '10', year: 2019 },
  { rom: 'Lineage', android: '13', year: 2022 },
  { rom: 'Lineage', android: '14', year: 2023 }
]

function years(a, b) {
  return Math.floor((b - a) / (1000 * 3600 * 24 * 365))
}

const cmYears = computed(() => years(cmStart, cmEnd))
const lineageYears = computed(() => years(lineageStart, now.value))
</script>

<template>
  <div class="app">
    <header>
      <h1>{{ i18n.t('title') }}</h1>

      <select v-model="i18n.lang">
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </header>

    <section class="card">
      <h2>{{ i18n.t('cm') }}</h2>
      <div class="badge">{{ i18n.t('legendary') }}</div>
      <p>{{ cmYears }} years</p>
    </section>

    <section class="card">
      <h2>{{ i18n.t('lineage') }}</h2>
      <p>{{ lineageYears }} years</p>
    </section>

    <section class="card">
      <h2>{{ i18n.t('timeline') }}</h2>
      <ul>
        <li v-for="item in timeline" :key="item.year">
          <strong>{{ item.rom }}</strong> —
          Android {{ item.android }} ({{ item.year }})
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: 420px;
  margin: auto;
  padding: 16px;
  font-family: system-ui;
  color: #eaeaff;
  background: #0f1220;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  background: #1b1f3a;
  border-radius: 14px;
  padding: 14px;
  margin-top: 16px;
}

.badge {
  background: gold;
  color: black;
  padding: 4px 8px;
  border-radius: 10px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 6px;
}
</style>
