// const puppeteer = require('puppeteer');
// const pageUrl = 'http://localhost:3000';
import {generateFakeProducts} from "../database/seeding/seed.js";
// const faker = require('faker');
// const { internet, random, commerce, date, company, image, lorem } = faker;



describe("generateFakeProduct function", () => {
  test("it should generate 100 fake products", () => {
    const input = 100;
    const output = 100;

    expect(generateFakeProducts(input).length).toEqual(output);
  })
})