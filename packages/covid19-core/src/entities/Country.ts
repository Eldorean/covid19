import { CovidReport } from './CovidReport'

class Country {
  public Report?: CovidReport
  public setReport = (report: CovidReport) => { this.Report = report }

  constructor (
    readonly Name: string,
    readonly Population?: number
  ) { }
}

export { Country }
