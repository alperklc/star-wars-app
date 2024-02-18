import React from "react";

const API_HOST = "https://swapi.dev";

export type ApiListResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const getEmptyResponse = <T>(): ApiListResponse<T> => ({ count: 0, next: null, previous: null, results: [] })

export type DataHookResponse<T> = [
    ApiListResponse<T>, boolean, string | Error | null, Function
];

export function useData<T>(path: string, q = "", page = 1): DataHookResponse<T> {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState<ApiListResponse<T>>(getEmptyResponse<T>());
    const [error, setError] = React.useState<string | Error | null>(null);

    const fetchAndUpdate = async (
        q: string,
        page: number,
    ) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `${API_HOST}/api/${path}?format=json&search=${q}&page=${page}`
            );

            if (response.status === 200) {
                const data = await response.json();
                setData(data);
            } else {
                console.error(response.text());
                setError("An error has occured");
            }

            setLoading(false);
        } catch (e) {
            console.error(e);

            setError(e as any);
            setLoading(false);
        }
    };

    React.useEffect(() => {
        const handler = setTimeout(
            () => fetchAndUpdate(q, page),
            100
        );

        return () => clearTimeout(handler);
    }, [page, q]);

    return [data, loading, error, fetchAndUpdate];
};
