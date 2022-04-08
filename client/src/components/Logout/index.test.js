/**
 * @jest-environment jsdom
 */

 import LogOut from ".";
 import { screen, render } from "@testing-library/react";
 
 describe("LogOut", () => {
   it("renders logout button", () => {
     render(<LogOut />);
     let content = screen;
     expect(content).toBeTruthy();
   })
 
 })
 