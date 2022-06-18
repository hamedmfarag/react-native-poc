import 'dotenv/config';

export default ({ config }) => {
    return {
        ...config,
        extra: {
            ...config.extra,
            REACT_ENV: process.env.REACT_ENV
        }
    };
};
