export class Api {
    public async get<T>(path: string) {
        try {
            let response = await fetch(path);
            return await response.json() as T;
        } catch (error) {
            if (!(error instanceof Error)) {
                error = new Error(error as string);
            }
            return error;
        }
    }
    public async post<T>(path: string, body: any) {
        try {
            let response = await fetch(path, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return await response.json() as T;
        } catch (error) {
            if (!(error instanceof Error)) {
                error = new Error(error as string);
            }
            return error;
        }
    }
}