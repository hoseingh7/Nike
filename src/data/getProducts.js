export const getProducts = async () => {
  try {
    const res = await fetch("https://650d9b81a8b42265ec2c7983.mockapi.io/nike");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const tasks = await res.json();
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

// import axios from "axios";

// export const getProducts = async (taskData) => {
//   try {
//     const response = await axios.get(
//       "https://650d9b81a8b42265ec2c7983.mockapi.io/nike",
//       {
//         headers: { "content-type": "application/json" },
//         data: taskData,
//       }
//     );

//     const task = response.data;
//   } catch (error) {
//     console.error("Error fetching the task:", error);
//   }
// };
