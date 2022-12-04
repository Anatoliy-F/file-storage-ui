export interface FileData{
    id: string;
    name: string;
    note: string;
    size: number;
    uploadDateTime: string;
    isPublic: boolean;
    shortLink?: string;
    viewers: User[];
}

export interface User{
    id: string;
    concurrency: string;
    name: string;
    email: string;
}