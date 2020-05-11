export const isEmpty = (item: any): boolean => {
    if (typeof item === "string") {
        if (item.length === 0) return true;
        if (item.length !== 0) return false;
    }
    if (!item || typeof item !== "object") return true;
    if (Array.isArray(item)) {
        return item.length > 0 ? false : true;
    }
    return !Object.keys(item).length;
};

export const isNumber = (value: any) => /^\d*$/.test(value);

export const isInteger = (value: any, acceptZero = false) => {
    if (!isNumber(value)) return false;
    if (!Number.isInteger(Number(value)) || [".", ",", " "].includes(value)) return false;
    // eslint-disable-next-line
    if (Number(value[0]) == 0 && !acceptZero) return false;
    return true;
};

export const isDecimal = (value: number) => (value % 1 !== 0 ? true : false);
