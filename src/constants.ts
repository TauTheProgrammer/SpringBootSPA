import { NumberToStringMap, StringToStringMap } from "./types";

const ROUTES_BY_NAME: StringToStringMap = Object.freeze({
    HOME: "/home",
    JOURNAL: "/journal",
    INSIGHT: "/insight",
});

const ROUTES_BY_INDEX: NumberToStringMap = Object.freeze({
    0: "/home",
    1: "/journal",
    2: "/insight",
});

export { ROUTES_BY_NAME, ROUTES_BY_INDEX };
