export interface SetlistProps {
    song_id: number;
    title: string;
    artist: string;
    liked: boolean;
    open: boolean | null;
}

export interface ConcertListProps {
    [year: number]: {
        id: number;
        name: string;
    }[];
}