interface LabeledValue<T> {
    value: T;
    label: string;
}

declare enum BodySizeType {
    HEIGHT_AS_CENTI_METER = "HEIGHT_AS_CENTI_METER",
    WEIGHT_AS_KILO_GRAM = "WEIGHT_AS_KILO_GRAM",
    TOP_SIZE = "TOP_SIZE",
    BOTTOM_SIZE_AS_INCH = "BOTTOM_SIZE_AS_INCH",
    SHOE_SIZE_AS_MILLI_METER = "SHOE_SIZE_AS_MILLI_METER"
}
declare const bodySizeType: Readonly<{
    label: {
        HEIGHT_AS_CENTI_METER: string;
        WEIGHT_AS_KILO_GRAM: string;
        TOP_SIZE: string;
        BOTTOM_SIZE_AS_INCH: string;
        SHOE_SIZE_AS_MILLI_METER: string;
    };
}>;

interface BodySizePolicy {
    type: BodySizeType;
    min: number;
    max: number;
    step: number;
    unit: string;
}
declare const heightPolicy: BodySizePolicy;
declare const weightPolicy: BodySizePolicy;
declare const topSizePolicy: BodySizePolicy;
declare const bottomSizePolicy: BodySizePolicy;
declare const shoeSizePolicy: BodySizePolicy;
declare const birthYearPolicy: {
    min: number;
    max: number;
    step: number;
    unit: string;
};
interface GenerateOptionsProps {
    min: number;
    max: number;
    step: number;
    unit: string;
}
declare function generateBodySizeOptions(policy: GenerateOptionsProps, minSuffix?: string, maxSuffix?: string, useUnitInLabel?: boolean): LabeledValue<number>[];
declare function isValidValue(policy: BodySizePolicy, value?: number): boolean;

interface BodySizeInputProps {
    policy: BodySizePolicy;
    initialValue?: number;
    onSizeChange: (size: BodySizeType, value?: number) => void;
}

interface UserBodySizeData {
    valid?: boolean;
    heightAsCentiMeter?: number;
    weightAsKiloGram?: number;
    topSize?: number;
    bottomSizeAsInch?: number;
    shoeSizeAsMilliMeter?: number;
}
declare const UserBodySizeData: {
    hasFilledAllBodySize: (bodySize?: UserBodySizeData) => boolean;
    makeDraftBodySize: (bodySize?: UserBodySizeData) => UserBodySizeData;
    makeFinalBodySize: (bodySize: UserBodySizeData) => UserBodySizeData;
};

export { BodySizeInputProps, BodySizePolicy, BodySizeType, UserBodySizeData, birthYearPolicy, bodySizeType, bottomSizePolicy, generateBodySizeOptions, heightPolicy, isValidValue, shoeSizePolicy, topSizePolicy, weightPolicy };
