import {ErrorIsMessage} from "../types"

export const isError = (error: unknown): error is ErrorIsMessage => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'data' in error &&
        typeof (error as Record<string, unknown>).data === 'object'
    )
}