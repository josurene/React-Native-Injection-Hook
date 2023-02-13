# React-Native-Injection-Hook
An approach to a React native injection hook equivalent to spring framework.

In spring framework you can declare what instance should be injected into what interface.
Trying to emulate said pattern.
We use somewhere in our app (Starting works best);
We set the injection equivalents
```
setInjectionMap
```

Let's say we have an interface called 'ExampleService' with X number of implementations.
We create a map setting what implementation should be instantiated.
```
import ExampleServiceImplementation from "../Infrastructure/Service/ExampleServiceImplementation";

setInjectionMap({
  'ExampleService': {
      className: ExampleServiceImplementation,
  }
});
```
Anytime you can call 'setInjectionMap' to change what instance needs to be injected.


To get an implementation of an already declared service you can use these two hooks.
Think of the first one as an async hook that can return undefined until the instance is created.
```
const autoImplementation = useInjectionHook<ExampleService>('ExampleService');
//autoImplementation?.test();
```
This one returns a memoized value of the instance.
```
const autoImplementationMemo = useInjectionHookMemo<ExampleService>('ExampleService');
//autoImplementationMemo.test();
```
