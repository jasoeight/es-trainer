export default ({ req }) => {
    let token;
    if (req) {
        token = req.get('Authorization');
    }

    return { token };
};
