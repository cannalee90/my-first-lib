export enum BodySizeType {
    HEIGHT_AS_CENTI_METER = 'HEIGHT_AS_CENTI_METER',
    WEIGHT_AS_KILO_GRAM = 'WEIGHT_AS_KILO_GRAM',
    TOP_SIZE = 'TOP_SIZE',
    BOTTOM_SIZE_AS_INCH = 'BOTTOM_SIZE_AS_INCH',
    SHOE_SIZE_AS_MILLI_METER = 'SHOE_SIZE_AS_MILLI_METER',
}

export const bodySizeType = (() => {
    const label: { [key in BodySizeType]: string } = {
        [BodySizeType.BOTTOM_SIZE_AS_INCH]: '하의',
        [BodySizeType.TOP_SIZE]: '상의',
        [BodySizeType.SHOE_SIZE_AS_MILLI_METER]: '신발',
        [BodySizeType.HEIGHT_AS_CENTI_METER]: '키',
        [BodySizeType.WEIGHT_AS_KILO_GRAM]: '몸무게',
    }

    return Object.freeze({
        label,
    })
})()
