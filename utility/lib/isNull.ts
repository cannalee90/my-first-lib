import { isNull as lodashIsNUll } from 'lodash-es'

const isNull = (value: any): boolean => {
    return lodashIsNUll(value)
}

export {
    isNull
}