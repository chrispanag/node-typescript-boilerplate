import dotenv from 'dotenv';

dotenv.config();

import env from './secret';
import app from './app';

(async () => {
    app.listen(env.port);
    console.log(`[Info] Server is listening on port ${env.port}`);
})();
