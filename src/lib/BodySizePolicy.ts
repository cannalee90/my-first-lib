
import { range } from 'lodash-es'

import { LabeledValue } from '@damoa-frontend/utility/types'

import { BodySizeType } from './BodySizeType'

export interface BodySizePolicy {
    type: BodySizeType
    min: number
    max: number
    step: number
    unit: string
}

export const heightPolicy: BodySizePolicy = {
    type: BodySizeType.HEIGHT_AS_CENTI_METER,
    min: 130,
    max: 190,
    step: 1,
    unit: 'cm',
}

export const weightPolicy: BodySizePolicy = {
    type: BodySizeType.WEIGHT_AS_KILO_GRAM,
    min: 30,
    max: 130,
    step: 1,
    unit: 'kg',
}

export const topSizePolicy: BodySizePolicy = {
    type: BodySizeType.TOP_SIZE,
    min: 44,
    max: 99,
    step: 11,
    unit: '',
}

export const bottomSizePolicy: BodySizePolicy = {
    type: BodySizeType.BOTTOM_SIZE_AS_INCH,
    min: 22,
    max: 40,
    step: 1,
    unit: '인치',
}

export const shoeSizePolicy: BodySizePolicy = {
    type: BodySizeType.SHOE_SIZE_AS_MILLI_METER,
    min: 210,
    max: 280,
    step: 5,
    unit: 'mm',
}

export const birthYearPolicy = {
    min: new Date().getFullYear() - 80,
    max: new Date().getFullYear() - 20,
    step: 1,
    unit: '년',
}

interface GenerateOptionsProps {
    min: number
    max: number
    step: number
    unit: string
}

export function generateBodySizeOptions(
    policy: GenerateOptionsProps,
    minSuffix?: string,
    maxSuffix?: string,
    useUnitInLabel = false,
) {
    const { min, max, step, unit } = policy
    return range(min, max + step, step)
        .map((value): LabeledValue<number> => {
            const label = (() => {
                const valueWithUnit = useUnitInLabel ? `${value}${unit}` : `${value}`
                if (value === min) {
                    return `${valueWithUnit} ${minSuffix ?? ''}`
                }
                if (value === max) {
                    return `${valueWithUnit} ${maxSuffix ?? ''}`
                }
                return `${valueWithUnit}`
            })()
            return {
                label: label.trim(),
                value,
            }
        })
}

export function isValidValue(policy: BodySizePolicy, value?: number) {
    if (value === undefined) {
        return false
    }
    return (policy.min <= value && value <= policy.max)
}
