export declare class VanillaSpline {
    static offset: {
        coordinate: string;
        points: ({
            location: number;
            value: number;
            derivative: number;
        } | {
            location: number;
            value: {
                coordinate: string;
                points: {
                    location: number;
                    value: {
                        coordinate: string;
                        points: ({
                            location: number;
                            value: number;
                            derivative: number;
                        } | {
                            location: number;
                            value: {
                                coordinate: string;
                                points: {
                                    location: number;
                                    value: number;
                                    derivative: number;
                                }[];
                            };
                            derivative: number;
                        })[];
                    };
                    derivative: number;
                }[];
            };
            derivative: number;
        })[];
    };
    static factor: {
        coordinate: string;
        points: ({
            location: number;
            value: number;
            derivative: number;
        } | {
            location: number;
            value: {
                coordinate: string;
                points: ({
                    location: number;
                    value: number;
                    derivative: number;
                } | {
                    location: number;
                    value: {
                        coordinate: string;
                        points: ({
                            location: number;
                            value: number;
                            derivative: number;
                        } | {
                            location: number;
                            value: {
                                coordinate: string;
                                points: {
                                    location: number;
                                    value: number;
                                    derivative: number;
                                }[];
                            };
                            derivative: number;
                        })[];
                    };
                    derivative: number;
                })[];
            };
            derivative: number;
        })[];
    };
    static jaggedness: {
        coordinate: string;
        points: ({
            location: number;
            value: number;
            derivative: number;
        } | {
            location: number;
            value: {
                coordinate: string;
                points: ({
                    location: number;
                    value: {
                        coordinate: string;
                        points: ({
                            location: number;
                            value: number;
                            derivative: number;
                        } | {
                            location: number;
                            value: {
                                coordinate: string;
                                points: {
                                    location: number;
                                    value: number;
                                    derivative: number;
                                }[];
                            };
                            derivative: number;
                        })[];
                    };
                    derivative: number;
                } | {
                    location: number;
                    value: number;
                    derivative: number;
                })[];
            };
            derivative: number;
        })[];
    };
}
//# sourceMappingURL=VanillaSplines.d.ts.map