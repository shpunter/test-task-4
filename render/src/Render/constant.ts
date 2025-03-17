export const ALL = "all";
export const TEXT = "text";
export const VIDEO = "video";
export const IMAGE = "image";

const TYPES = [TEXT, VIDEO, IMAGE] as const;

export type TTypes = typeof TYPES[number]; 