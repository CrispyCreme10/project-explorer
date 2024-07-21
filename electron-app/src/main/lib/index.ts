import { CreateProject, GetProjects } from '@shared/types'
import { app } from 'electron'
import path from 'path'
import { PROJECTS_DATA_FILE } from './constants'
import { readFile, writeFile } from 'fs/promises'
import { ProjectInfo } from '@shared/models'

const readProjectsDataFile = async (): Promise<ProjectInfo[]> => {
  const filePath = path.join(app.getPath('userData'), PROJECTS_DATA_FILE)
  try {
    const data = await readFile(filePath, { encoding: 'utf8' })
    return JSON.parse(data)
  } catch (error) {
    console.log(error)
  }

  return []
}

const writeProjectsDataFile = async (projects: ProjectInfo[]): Promise<boolean> => {
  const filePath = path.join(app.getPath('userData'), PROJECTS_DATA_FILE)
  try {
    await writeFile(filePath, JSON.stringify(projects, null, 2), { encoding: 'utf8' })
    return true
  } catch (error) {
    console.log(error)
  }

  return false
}

export const getProjects: GetProjects = async () => {
  return await readProjectsDataFile()
}

export const createProject: CreateProject = async (newProject: ProjectInfo) => {
  if (!newProject.name || !newProject.path) {
    return false
  }

  try {
    const projects = await readProjectsDataFile()
    projects.push(newProject)
    await writeProjectsDataFile(projects)
    return true
  } catch (error) {
    console.log(error)
  }

  return false
}
