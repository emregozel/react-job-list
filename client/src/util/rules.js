export default function validate(values) {
    let errors = {};
    if (!values.name) {
        errors.name = 'Job is required';
    } else if (values.name.length > 70) {
        errors.name = 'Job can be maximum 70 characters';
    }
    if (!values.priorty) {
        errors.email = 'Priority is required';
    }
    return errors;
};