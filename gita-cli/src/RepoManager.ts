import { IRepoContext, Repo, Group } from 'gita-lib'

export class RepoManager {
  constructor(private readonly ctx: IRepoContext) {}

  async load(): Promise<void> {
    await this.ctx.load()
  }

  async save(): Promise<void> {
    await this.ctx.save()
  }

  addRepo(name: string, path: string, group?: string): void {
    this.ctx.addRepo(name, path, group)
  }

  removeRepo(name: string): void {
    this.ctx.removeRepo(name)
  }

  listRepos(group?: string): Record<string, Repo> {
    const all = this.ctx.getRepos()
    if (!group) return all
    return Object.fromEntries(
      Object.entries(all).filter(([_, r]) => r.group === group)
    )
  }

  listGroups(): Record<string, Group> {
    return this.ctx.getGroups()
  }
}
