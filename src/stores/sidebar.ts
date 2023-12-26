import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar',{
    state: () => ({
        isVisible: true
    })
})