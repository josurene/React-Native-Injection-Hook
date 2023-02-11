import InjectionMap from "../Domain/Config/InjectionConfiguration";

let config: InjectionMap = {
};

const setInjectionMap = (newConfig: InjectionMap) => {
    config = newConfig;
}

const getInjection = (baseName: string) => {
    if (config[baseName]) {
        return config[baseName];
    } else {
        throw new Error('Class not in config');
    }
}

export {
    setInjectionMap,
    getInjection
}
