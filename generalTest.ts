/* Here is code which execute detail of Time and Weather */
import * as _ from 'lodash';

export class LocationDoc {
  //------------list of input array to city with pin code------
  public locations = [
    { name: "Noida", code: 201302 },
    { name: "GeaterNoida", code: 201308 },
    { name: "New York", code: 10001 },
    { name: "Tokyo", code: 667868 }
  ];

  //------------list of output result array of given city------
  private result: Array<object> = [
    { name: "Noida", code: 201302, time: new Date(), weather: 26 },
    { name: "GeaterNoida", code: 201308, time: new Date(), weather: 28 },
    { name: "New York", code: 10001, time: new Date(), weather: 10 }
  ];

  //------------to store result 
  private info: string = '';

  //-------------method of matching with given city and code-----
  private shuffle(name: string, code: Number): object {
    for (let i = 0; i < this.result.length; i++) {
      if (name === this.result[i]['name'] && code === this.result[i]['code']) { //----------match condition of city and code value
        return this.result[i];
      }
    }
  };

  //-------first step of iterating over given an array of inputs here----
  public getTimeAndWeather(name: string, code: Number): string {
    if (!name || !code) {
      throw new Error(`Can't ensure name and code is found`); //----------we can handle error here (if name or code is not available)
    }
    else {
      let locationTime = this.shuffle(name, code); //------------calling here function to get final result(private function)
      if (!_.isEmpty(locationTime)) {
        return this.info = `Location: ${name}, Code: ${code}, Time: ${locationTime['time']}, Weather: ${locationTime['weather']} ℃`; //-------code for matched given response;
      }
      else {
        return `Location: Not found time and Weather for city ${name} and postal code ${code}`; //-----write here code for error handle(when city not)
      }
    }
  };

  public exampleUnitTest(): String {
    return "New York";
  };
};

//-------------initializing to class-----------------------
const cityLocation = new LocationDoc();
cityLocation.locations.forEach(function (loc) {
  console.log(cityLocation.getTimeAndWeather(loc.name, loc.code));
});