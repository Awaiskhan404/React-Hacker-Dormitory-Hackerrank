export function Search(db, query, errors) {

    if (query.name && query.joiningDate) {
        const result = db.filter(
            (student) =>
                student.name.toLowerCase() === (query.name.toLowerCase())
        )[0]
        if (result !== undefined) {
            if (checkValidity(query.joiningDate, result.validityDate)) {
                errors(null);
                return result;
            }
            else {
                errors(`Sorry, ${query.name}'s validity has Expired!`);
            }
        }
        else if (result === null || result === undefined) {
            errors(`Sorry, ${query.name} is not a verified student!`);
        }

    }
    else if (query.name && !query.joiningDate) {
        errors("Please enter a joining date");
    }
}

export function checkValidity(joiningDate, validityDate) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [year, month, day] = joiningDate.split('-');
    const [yyyy, mm, dd] = validityDate.split('-');
    const maxValid = new Date(yyyy, mm - 1, dd);
    const selected = new Date(year, month - 1, day);
    return (maxValid >= selected) && (maxValid >= today);
}
