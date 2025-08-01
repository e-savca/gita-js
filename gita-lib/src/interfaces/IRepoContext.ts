export interface Repo {
  path: string
  group?: string
  flags?: string[]
}

export interface Group {
  repos: string[]
  path: string
}

export interface IRepoContext {
  load(): Promise<void>
  save(): Promise<void>
  getRepos(): Record<string, Repo>
  getGroups(): Record<string, Group>
  addRepo(name: string, path: string, group?: string): void
  removeRepo(name: string): void
}
