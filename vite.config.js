import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                note: resolve(__dirname, 'note.html'),
                board: resolve(__dirname, 'board.html'),
            }
        }
    }
})
