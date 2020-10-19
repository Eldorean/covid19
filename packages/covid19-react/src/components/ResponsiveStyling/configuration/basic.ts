import { DeviceSizes } from "../Responsive";
import { Device } from "./types";

export const DeviceProperties: { [key in keyof typeof Device]: DeviceSizes } = {
  MOBILE: {
    minWidth: 0,
    maxWidth: 479
  },
  TABLET: {
    minWidth: 480,
    maxWidth: 767
  },
  DESKTOP: {
    minWidth: 768,
    maxWidth: 991
  },
  HIGH_DESKTOP: {
    minWidth: 992,
    maxWidth: 9999
  }
}
