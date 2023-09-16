export const logout = () => {
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('authToken');
};

export const login = (user) => {
  sessionStorage.setItem('userId', user?._id);
  sessionStorage.setItem('authToken', user?.token);
};

export const isLoggedIn = () => {
  const userId = sessionStorage.getItem('userId');
  if (userId) return true;
  else return false;
};

export const getBase64 = (file) => {
  return new Promise((resolve) => {
    let fileInfo;
    let baseURL = '';

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log('Called', reader);
      baseURL = reader.result;
      console.log(baseURL);
      resolve(baseURL);
    };
    console.log(fileInfo);
  });
};
