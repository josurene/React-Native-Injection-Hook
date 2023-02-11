import React from 'react';
import {View} from 'react-native';
import useInjectionHook from "@Hooks/InjectionHook";
import ExampleServiceImplementation from "./Infrastructure/Service/ExampleServiceImplementation";

export interface Props {
}

const InjectionHookExample: React.FC<Props> = () => {

    const implementation = useInjectionHook(ExampleServiceImplementation);

    return (
        <View></View>
    )
}

export default InjectionHookExample;
