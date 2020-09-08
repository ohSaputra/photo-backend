export const capitalFirst = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
export const cleanUUID = (uuid: string): string => uuid.replace(/[-]/g, '')
