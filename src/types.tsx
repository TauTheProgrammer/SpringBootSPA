type StringToStringMap = {
    [key: string]: string;
};

type StringToNumberMap = {
    [key: string]: number;
};

type NumberToStringMap = {
    [key: number]: string;
};

type EmotionalRecord = {
    energy: "HIGH" | "AVERAGE" | "LOW";
    season: "SPRING" | "SUMMER" | "FALL" | "WINTER";
    sleep: "PLENTY" | "SUFFICIENT" | "LOW";
    weather: "SUNNY" | "RAINY" | "CLOUDY" | "SNOWY";
};

export type {
    StringToStringMap,
    StringToNumberMap,
    NumberToStringMap,
    EmotionalRecord,
};
