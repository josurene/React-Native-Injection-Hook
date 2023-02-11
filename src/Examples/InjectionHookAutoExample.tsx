import React from 'react';
import {View} from 'react-native';
import useInjectionHookAuto from "@Hooks/InjectionHookAuto";
import ExampleService from "./Domain/Service/ExampleService";
import useInjectionHookAutoMemo from "@Hooks/InjectionHookAutoMemo";

export interface Props {
}

const InjectionHookExample: React.FC<Props> = () => {

    const autoImplementation = useInjectionHookAuto<ExampleService>('ExampleService');
    //autoImplementation?.test();
    const autoImplementationMemo = useInjectionHookAutoMemo<ExampleService>('ExampleService');
    //autoImplementationMemo.test();
    return (
        <View></View>
    )
}

export default InjectionHookExample;
