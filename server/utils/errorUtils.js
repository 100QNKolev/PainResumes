exports.getError = async (err) => {
    
    if (err.name == 'Error') {
        return err.message;
    }
    else if (err.name == 'ValidationError') {
        return Object.keys(err.errors).map(key => err.errors[key].message)[0];
    }
};