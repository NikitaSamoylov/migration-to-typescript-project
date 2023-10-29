import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3478d4f5109442be9e50072524adebb8', 
        });
    }
}

export default AppLoader;
