// import echolib from "./echolib";
import * as echolib from "./echolib";

export let echoVar = (s) => {
  return s;
};

export function useEchoVar() {
  console.log(echoVar("echo var"));
}

export function setEchoVar(fn) {
  echoVar = fn;
}

export function echoFn(s) {
  return s;
}

export function useEchoFn() {
  console.log(echoFn("echo function"));
}

export function useEchoLib() {
  console.log(echolib.echoLibFn("echo library"));
}
