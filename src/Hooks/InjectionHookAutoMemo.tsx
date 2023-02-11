import React, {useMemo} from 'react';
import {getInjection} from "../Infrastructure/InjectionConfiguration";

const useInjectionHookAutoMemo = <A,>(className: string): A => {
    return useMemo(() => {
        const classInstance = getInjection(className);
        return new classInstance.className();
    }, []);
}

export default useInjectionHookAutoMemo;
