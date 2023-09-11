export interface Character{
    id:       number;
    name:     string;
    image:    string;
    created?:  Date;
    isFavApi: boolean
}
export interface Results {
    characterResults : Character[];
    next: string | null;
    prev : string | null ;
}