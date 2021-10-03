import {writable} from 'svelte/store'

export const open = writable(false)
export const loged = writable('loading')




export const scrollTop = () => {
  let main = document.querySelector('.main')
  main.scroll(0,0)
}