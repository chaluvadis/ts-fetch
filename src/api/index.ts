export class Api {
    public async get<T>(path: string) {
        try {
            let response = await fetch(path);
            return await response.json() as T;
        } catch (error) {
            console.log(error);
            return new Error("Error in get");
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
            console.log(error);
            return new Error("Error in post");
        }
    }
}