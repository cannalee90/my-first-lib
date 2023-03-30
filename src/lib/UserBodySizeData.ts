import {
    heightPolicy,
    isValidValue,
    weightPolicy,
    topSizePolicy,
    bottomSizePolicy,
    shoeSizePolicy,
} from './BodySizePolicy'

import {
    isNull
} from '@damoa-frontend/utility/types'

export interface UserBodySizeData {
    valid?: boolean
    heightAsCentiMeter?: number
    weightAsKiloGram?: number
    topSize?: number
    bottomSizeAsInch?: number
    shoeSizeAsMilliMeter?: number
}

export const UserBodySizeData = (() => {
    function hasFilledAllBodySize(bodySize?: UserBodySizeData): boolean {
        if (bodySize === undefined) {
            return false
        }

        return isValidValue(heightPolicy, bodySize.heightAsCentiMeter)
            && isValidValue(weightPolicy, bodySize.weightAsKiloGram)
            && isValidValue(topSizePolicy, bodySize.topSize)
            && isValidValue(bottomSizePolicy, bodySize.bottomSizeAsInch)
            && isValidValue(shoeSizePolicy, bodySize.shoeSizeAsMilliMeter)
    }

    function makeDraftBodySize(bodySize?: UserBodySizeData): UserBodySizeData {
        return {
            heightAsCentiMeter: bodySize?.heightAsCentiMeter,
            weightAsKiloGram: bodySize?.weightAsKiloGram,
            topSize: bodySize?.topSize,
            bottomSizeAsInch: bodySize?.bottomSizeAsInch,
            shoeSizeAsMilliMeter: bodySize?.shoeSizeAsMilliMeter,
        }
    }

    function makeFinalBodySize(bodySize: UserBodySizeData): UserBodySizeData {
        const getFinalValue = (v?: number) => v === 0 ? undefined : v

        return {
            heightAsCentiMeter: getFinalValue(bodySize.heightAsCentiMeter),
            weightAsKiloGram: getFinalValue(bodySize.weightAsKiloGram),
            topSize: getFinalValue(bodySize.topSize),
            bottomSizeAsInch: getFinalValue(bodySize.bottomSizeAsInch),
            shoeSizeAsMilliMeter: getFinalValue(bodySize.shoeSizeAsMilliMeter),
        }
    }

    return {
        hasFilledAllBodySize,
        makeDraftBodySize,
        makeFinalBodySize,
    }
})()

