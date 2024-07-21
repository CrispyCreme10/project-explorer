import { GetProjects } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('This renderer does not have contextIsolation enabled.')
}

try {
  contextBridge.exposeInMainWorld('context', {
    getProjects: (...args: Parameters<GetProjects>) => ipcRenderer.invoke('getProjects', ...args)
  })
} catch (error) {
  console.error(error)
}
