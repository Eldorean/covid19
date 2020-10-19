import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from "styled-components";

export interface DeviceSizes {
  minWidth: number
  maxWidth: number
}

export type DeviceType<T> = { [key in keyof T]: DeviceSizes }

class Responsive<T>  {
  public readonly Config: DeviceType<T>;
  constructor(deviceConfig: DeviceType<T>) {
    this.Config = deviceConfig;
  }

  public get CreateStyle() { return { WhenDevice: this.WhenDevice() } }

  private WhenDevice = () => ({
    Is: this.Is,
    BiggerThan: this.BiggerThan,
    SmallerThan: this.SmallerThan
  })

  private Is = (device: keyof T) => this.CreateMediaQuery(this.Config[device])
  private BiggerThan = (device: keyof T) => this.CreateMediaQuery({ ...this.Config[device], maxWidth: 9999 })
  private SmallerThan = (device: keyof T) => this.CreateMediaQuery({ ...this.Config[device], minWidth: 0 })

  private CreateMediaQuery = (deviceSizes: DeviceSizes) => (template: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => {
    let injectionString = css(template, interpolations);
    return css`
      @media  screen and (min-width: ${deviceSizes.minWidth}px) and (max-width: ${deviceSizes.maxWidth}px) {
        ${injectionString}
      }
    `
  };

}

export { Responsive }