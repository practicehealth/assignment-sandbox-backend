export const routes = {
  routes: [
    {
      name: "Login",
      method: "POST",
      path: "/auth/login",
      description:
        "This route is used to login the user and generate access token and refresh token",
      body: {
        email: "string",
      },
    },
    {
      name: "Token",
      method: "GET",
      path: "/auth/token",
      description:
        "This route is used to generate new access token using refresh token",
    },
    {
      name: "Logout",
      method: "POST",
      path: "/auth/logout",
      description:
        "This route is used to logout the user and clear the refresh token",
    },
    {
      name: "Visits",
      method: "GET",
      path: "/visits",
      description:
        "This route is used to get all the visits for creating the timeline component",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Complete task",
      method: "POST",
      path: "/visits/task/complete",
      description:
        "This route is used to complete the task in the timeline component",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
      body: {
        taskId: "string",
        visitID: "string",
        note: "string (optional)",
      },
    },
    {
      name: "Categories - Medication",
      method: "GET",
      path: "/categories/medication",
      description:
        "This route is used to get all the categories of type medication",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categories - Labs",
      method: "GET",
      path: "/categories/labs",
      description: "This route is used to get all the categories of type labs",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categories - Vitals",
      method: "GET",
      path: "/categories/vitals",
      description:
        "This route is used to get all the categories of type vitals",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categories - Immunization",
      method: "GET",
      path: "/categories/immunization",
      description:
        "This route is used to get all the categories of type immunization",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categories - Condition",
      method: "GET",
      path: "/categories/condition",
      description:
        "This route is used to get all the categories of type condition",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categories - Procedure",
      method: "GET",
      path: "/categories/procedure",
      description:
        "This route is used to get all the categories of type procedure",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categories - Allergy",
      method: "GET",
      path: "/categories/allergy",
      description:
        "This route is used to get all the categories of type allergy",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
    {
      name: "Categores Info",
      method: "GET",
      path: "/categories/info",
      description:
        "This route is used to get the information about the categories (please note this route is not a different category just a route to test how the response can come in the form of streams as well)",
      headers: {
        Authorization: "Bearer <accessToken>",
      },
    },
  ],
};

function generateTable(routes) {
  let table = "<table>";
  table +=
    "<tr><th style='text-align: left;'>Name</th><th style='text-align: left;'>Method</th><th style='text-align: left;'>Path</th><th style='text-align: left;'>Description</th></tr>";

  routes.forEach((route) => {
    table += `<tr><td>${route.name}</td><td>${route.method}</td><td>${route.path}</td><td>${route.description}</td></tr>`;
  });

  table += "</table>";
  return table;
}

export const table = generateTable(routes.routes);
