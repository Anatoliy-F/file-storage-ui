export interface FileData{
    id: string;
    name: string;
    note: string;
    size: number;
    uploadDateTime: string;
    isPublic: boolean;
    shortLink?: string;
}