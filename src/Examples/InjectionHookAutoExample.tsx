import React from 'react';
import {View} from 'react-native';
import useInjectionHook from "@Hooks/InjectionHookAuto";
import ExampleService from "./Domain/Service/ExampleService";
import useInjectionHookMemo from "@Hooks/InjectionHookAutoMemo";

export interface Props {
}

const InjectionHookExample: React.FC<Props> = () => {

    const autoImplementation = useInjectionHook<ExampleService>('ExampleService');
    //autoImplementation?.test();
    const autoImplementationMemo = useInjectionHookMemo<ExampleService>('ExampleService');
    //autoImplementationMemo.test();
    return (
        <View></View>
    )
}

export default InjectionHookExample;
