var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
var global = getGlobal();
global.fetch.bind(global);
const Headers = global.Headers;
const Request = global.Request;
const Response = global.Response;
var fetchNpmBrowserify = self.fetch.bind(self);
export default fetchNpmBrowserify;
