export declare class SimpleSpline {
    points: {
        location: number;
        value: number;
        derivative: number;
    }[];
    constructor(points: {
        location: number;
        value: number;
        derivative: number;
    }[]);
    toJSON(): {
        coordinate: string;
        points: {
            location: number;
            value: number;
            derivative: number;
        }[];
    };
    static fromJSON(json: any): SimpleSpline;
    static peaksAndValleys(weirdness: number): number;
    private static inversPeaksAndValleys;
    order(): void;
    apply(c: number): number;
}
//# sourceMappingURL=SimpleSpline.d.ts.map