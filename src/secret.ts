/** HERE YOU CAN ADD ALL YOUR ENVIRONMENT VARIABLES */

const PORT = process.env.PORT || 3000;

// Make sure to add your env variables to this object so that they are exported to the rest of the application
const env = {
    port: PORT
};

export default env;
