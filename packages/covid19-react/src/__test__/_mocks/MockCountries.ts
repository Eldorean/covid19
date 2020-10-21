import { Country } from "@covid19/core";

export const countries: Country[] = [
  new Country('Nederland', 5),
  new Country('Belgie', 7),
  new Country('Duitsland', 12),
  new Country('Frankrijk', 1),
];

const MockNederland = new Country('Nederland', 5)
MockNederland.setReport({
  Tested: 30,
  Cases: 20,
  Deaths: 10,
})
export { MockNederland }