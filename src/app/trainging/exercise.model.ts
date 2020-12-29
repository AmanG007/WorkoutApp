export interface Exercise {
    id: string;
    name: string;
    duratioin: number;
    calories: number;
    date?: Date;
    state?:'completed' | 'cancelled' | null;
}