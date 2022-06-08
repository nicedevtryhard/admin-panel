const stationsUrl = "https://test-api.piar.ee/stations";
export async function register(stationName, comment) {
  try {
    const response = await fetch(stationsUrl, {
      method: "POST",
      headers: {
        "user-jwt": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: stationName,
        comment: comment,
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

export const loadStations = async () => {
  try {
    const response = await fetch(stationsUrl, {
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

export const editStation = async (id, stationName, comment) => {
  try {
    const response = await fetch(`${stationsUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "user-jwt": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: stationName,
        comment: comment,
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

export const deleteStation = async (id) => {
  try {
    const response = await fetch(`${stationsUrl}/${id}`, {
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
