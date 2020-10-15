import { CountryDataProvider, HomePageProps } from '@covid19/core'

export interface CoreInstance {
  CountryProvider: CountryDataProvider
  HomePageProps: HomePageProps
}

export class CoreServiceInstance {
  public static _Instance?: CoreInstance;

  public SET_INSTANCE_ON_ROOT = (instance: CoreInstance) => { CoreServiceInstance._Instance = instance }
  public GetInstance = () => {
    if (!CoreServiceInstance._Instance) throw new ReferenceError('Core Instance is not initializes.')
    return CoreServiceInstance._Instance
  }
}
