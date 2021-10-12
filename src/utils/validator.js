const regex = new RegExp(/[\W]/g);

const nameValidator = (e) => {
  if (e.target.value.length < 3 || regex.test(e.target.value)) {
    return 'Name should be at least 3 characters long and should not contain special characters';
  } else if (regex.test(e.target.value)) {
    return 'Name should not contain special characters';
  }
};

const descriptionValidator = (e) => {
  if (e.target.value.length < 5) {
    return 'Comment should be at least 5 characters long';
  }
};

module.exports = { nameValidator, descriptionValidator };
