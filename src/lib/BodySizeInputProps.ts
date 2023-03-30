import { BodySizePolicy } from './BodySizePolicy'
import { BodySizeType } from './BodySizeType'

export interface BodySizeInputProps {
    policy: BodySizePolicy
    initialValue?: number
    onSizeChange: (size: BodySizeType, value?: number) => void
}
