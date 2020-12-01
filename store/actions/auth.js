export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChDkMuZbPke47JtSRgfUnJgXJOjrIsB9w",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await response.json();
    if (!response.ok) {
      const errorId = resData.error.message;
      let message = "something went wrong!";
      switch (errorId) {
        case "EMAIL_EXISTS":
          message = "This email is already in use.";
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Too many attempts, this account is locked.";
          break;
      }
      throw new Error(message);
    }
    dispatch({ type: SIGN_UP });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChDkMuZbPke47JtSRgfUnJgXJOjrIsB9w",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await response.json();
    if (!response.ok) {
      const errorId = resData.error.message;
      let message = "something went wrong!";
      switch (errorId) {
        case "EMAIL_NOT_FOUND":
          message = "This email doesn't exist.";
          break;
        case "INVALID_PASSWORD":
          message = "Incorrect password.";
          break;
        case "USER_DISABLED":
          message = "The account was deactivated.";
          break;
      }
      throw new Error(message);
    }

    dispatch({ type: LOGIN });
  };
};
