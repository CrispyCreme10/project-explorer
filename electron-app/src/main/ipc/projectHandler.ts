import { createProject, getProjects } from '@/lib'
import { ipcMain } from 'electron'

export function setupProjectHandlers(): void {
  ipcMain.handle('getProjects', async () => {
    return await getProjects()
  })

  ipcMain.handle('createProject', async (_event, newProject) => {
    return await createProject(newProject)
  })
}
