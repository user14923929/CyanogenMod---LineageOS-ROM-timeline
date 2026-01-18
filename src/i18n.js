import { reactive } from 'vue'

export const i18n = reactive({
  lang: 'ru',

  messages: {
    ru: {
      title: 'ROM Age Tracker',
      cm: 'CyanogenMod',
      lineage: 'LineageOS',
      legendary: '🏆 Legendary ROM',
      timeline: 'Таймлайн Android-версий',
      meme: 'Мем-режим',
      language: 'Язык'
    },
    en: {
      title: 'ROM Age Tracker',
      cm: 'CyanogenMod',
      lineage: 'LineageOS',
      legendary: '🏆 Legendary ROM',
      timeline: 'Android version timeline',
      meme: 'Meme mode',
      language: 'Language'
    }
  },

  t(key) {
    return this.messages[this.lang][key]
  }
})
