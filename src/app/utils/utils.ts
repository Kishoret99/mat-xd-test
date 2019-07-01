export class Utils {
    static getKeyValueOrReturnDefault(obj: object, key: string, defaultValue = null) {
        if(!obj) {
            throw new Error('obj should not be empty');
        }
        if(!key) {
            throw new Error('key should not be empty');
        }
        const keysArray: string[] = key.split('.');
        let value = obj;
        while(keysArray.length > 0) {
            const currKey = keysArray.shift();
            value = value[currKey];
            if(!value) {
                return defaultValue;
            }
        }
        return value;
    }
}