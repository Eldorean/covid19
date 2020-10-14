export class CoreService {
  private static _Instance?: any;

  public SET_INSTANCE_ON_ROOT = (instance: any) => { CoreService._Instance = instance }
  public GetInstance = () => CoreService._Instance
}
