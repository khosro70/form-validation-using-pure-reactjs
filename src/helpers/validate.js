const validate = (data) => {
  const errors = {};

  if (Object.keys(data).length > 2) {
    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "confirm the Password";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }
 
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (
    !data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 character or more";
  } else {
    delete errors.password;
  }

  return errors;
};

export { validate };
