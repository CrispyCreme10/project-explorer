import { GetProjects } from '@shared/types'

declare global {
  interface Window {
    context: {
      getProjects: GetProjects
    }
  }
}
