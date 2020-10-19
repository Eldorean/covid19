import { DeviceProperties } from "./configuration/basic";
import { Device } from "./configuration/types";
import { Responsive as ResponsiveClass } from "./Responsive";

const ResponsiveModule = new ResponsiveClass<typeof Device>(DeviceProperties)

export {
  ResponsiveModule as Responsive
}