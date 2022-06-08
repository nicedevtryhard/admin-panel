const usersUrl = "https://test-api.piar.ee/users";
export async function register(userName, comment, login, password) {
  try {
    const response = await fetch(usersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        comment: comment,
        login: login,
        password: password,
      }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (e) {
    console.log(e);
  }
}

export const signIn = async (login, password) => {
  try {
    const response = await fetch(`${usersUrl}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

export const loadUsers = async () => {
  try {
    const response = await fetch(usersUrl, {
      headers: {
        "user-jwt": localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (e) {
    console.log(e);
  }
};

export const editUser = async (id, userName, comment, login, password) => {
  try {
    const response = await fetch(`${usersUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "user-jwt": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: userName,
        comment: comment,
        login: login,
        password: password,
      }),
    });
    if (response.ok) {
      return true;
    } else {
      console.error(response);
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${usersUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "user-jwt": localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};
