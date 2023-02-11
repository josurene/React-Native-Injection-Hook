import ExampleServiceImplementation from "../Infrastructure/Service/ExampleServiceImplementation";
import {setInjectionMap} from "../../Infrastructure/InjectionConfiguration";

const initInjectionConfig = () => {
    setInjectionMap({
      'ExampleService': {
          className: ExampleServiceImplementation,
      }
    });
}
