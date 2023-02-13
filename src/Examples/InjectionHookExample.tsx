import React from 'react';
import {View} from 'react-native';
import useInjectionHookPOC from "@Hooks/InjectionHookPOC";
import ExampleServiceImplementation from "./Infrastructure/Service/ExampleServiceImplementation";

export interface Props {
}

const InjectionHookExample: React.FC<Props> = () => {

    const implementation = useInjectionHookPOC(ExampleServiceImplementation);

    return (
        <View></View>
    )
}

export default InjectionHookExample;
