import React, {useEffect, useState} from 'react';
import {getInjection} from "../Infrastructure/InjectionConfiguration";

const useInjectionHookAuto = <A,>(className: string): A | undefined => {
    const [instantiatedClass, setInstantiated] = useState<A>();

    useEffect(() => {
        const classInstance = getInjection(className);
        setInstantiated(new classInstance.className());
    }, []);

    return instantiatedClass;
}

export default useInjectionHookAuto;
