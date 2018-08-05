import * as mocktest from "./mocktest";
import * as echolib from "./echolib";
// See the notes on the last test below (this isn't required if we webpack in commonjs format)
// import echolib from "./echolib";

describe("mocking scenarios", () => {

  // This demonstrates the obvious manual / heavy handed function rewrite
  it("spy assigned via exported setter", () => {
    const spy = jasmine.createSpy().and.returnValue("echoVar mocked!");
    mocktest.setEchoVar(spy);
    mocktest.useEchoVar();
    expect(spy).toHaveBeenCalled();
  });

  // These next 2 don't work due to the module imports being frozen
  xit("spy assigned via spyOn with variable (readonly - not supported)", () => {
    const spy = spyOn(mocktest, "echoVar").and.returnValue("mocked var!");
    mocktest.useEchoVar();
    expect(spy).toHaveBeenCalled();
  });

  xit("spy assigned via spyOn with function (readonly - not supported)", () => {
    const spy = spyOn(mocktest, "echoFn").and.returnValue("mocked!");
    mocktest.useEchoFn();
    expect(spy).toHaveBeenCalled();
  });

  // This one works by using a default export of an object containing function pointers
  // Update: if the webpack config specifies the module format as "commonjs" then even the old style import works.
  // See: https://stackoverflow.com/a/46739544/26219
  // and: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/17218#note_64338241
  it("spy on echoLibFn", () => {
    const spy = spyOn(echolib, "echoLibFn").and.returnValue("echoLibFn mocked!");
    mocktest.useEchoLib();
    expect(spy).toHaveBeenCalled();
  });

});
