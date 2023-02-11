import React from 'react';
import {View} from 'react-native';
import useInjectionHookAuto from "@Hooks/InjectionHookAuto";
import ExampleService from "./Domain/Service/ExampleService";

export interface Props {
}

const InjectionHookExample: React.FC<Props> = () => {

    const autoImplementation = useInjectionHookAuto<ExampleService>('ExampleService');

    return (
        <View></View>
    )
}

export default InjectionHookExample;
