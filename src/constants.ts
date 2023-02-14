import {
    NumberToStringMap,
    StringToNumberMap,
    StringToStringMap,
} from "./types";

const ROUTES_BY_NAME: StringToStringMap = Object.freeze({
    HOME: "/",
    JOURNAL: "/journal",
    INSIGHT: "/insight",
});

const ROUTES_BY_INDEX: NumberToStringMap = Object.freeze({
    0: "/",
    1: "/journal",
    2: "/insight",
});

const IDK: StringToNumberMap = Object.freeze({
    "/": 0,
    "/journal": 1,
    "/insight": 2,
});

export { ROUTES_BY_NAME, ROUTES_BY_INDEX, IDK };
