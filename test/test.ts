import { LocationDoc } from '../generalTest';
import { expect } from 'chai';
import 'mocha';

describe('get Time And Weather', () => {
    it('should return string', () => {
        const cityLocation = new LocationDoc();
        const result = cityLocation.getTimeAndWeather("", 0);
        expect(result).to.equal('Location: Noida, Code: 201302, Time: Wed Apr 24 2019 21:27:09 GMT+0530 (India Standard Time), Weather: 26 ℃');
    });
});

describe('Example unit test function', () => {
    it('should return New York', () => {
        const cityLocation = new LocationDoc();
        const result = cityLocation.exampleUnitTest();
        expect(result).to.equal("New York");
    });
});