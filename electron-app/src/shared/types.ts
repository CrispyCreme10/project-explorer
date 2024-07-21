import { ProjectInfo } from './models'

export type GetProjects = () => Promise<ProjectInfo[]>
export type CreateProject = (newProject: ProjectInfo) => Promise<boolean>
