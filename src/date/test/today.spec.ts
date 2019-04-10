import { today } from "../today";


describe("today operation", () => {
  let todayDate = new Date();
  todayDate.setHours( 0, 0, 0, 0);

   it(`today should be equal to "${todayDate}"`, () => {
      expect(today()).toEqual(todayDate);
    });
  }
 );

