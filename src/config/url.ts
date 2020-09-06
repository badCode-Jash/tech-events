class UrlConfig {
    public port: number = 3001;
    public baseUrl: URL = new URL(`http://localhost:${this.port}/`);
    //Check the environment first
    buildUrl(url: string) {
        return new URL(url, this.baseUrl);
    }
}

export default new UrlConfig();