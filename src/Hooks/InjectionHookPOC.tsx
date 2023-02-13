import React, {useEffect, useState} from 'react';

const useInjectionHookPOC = <A,>(c: new (...args: any) => A): A | undefined => {
    const [instantiatedClass, setInstantiated] = useState<A>();

    useEffect(() => {
        setInstantiated(new c());
    }, []);

    return instantiatedClass;
}

export default useInjectionHookPOC;
