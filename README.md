Test project for Jasmine spyOn
==============================

Attempting to determine what sort of spyOn calls will work with Jasmine
tests using WebPack.

Initial Conclusions

- It's never possible to replace an exported function 
  that is referenced by the module it comes from
  
- Exporting an object using "default" works in all cases

- Exported functions can be mocked is using Webpack "commonjs" modules
