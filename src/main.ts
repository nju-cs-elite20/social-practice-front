import App from './App.svelte'
import '@picocss/pico/css/pico.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const app = new App({
  target: document.getElementById('app'),
})

export default app
