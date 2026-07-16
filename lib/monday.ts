export async function createLead(name: string, email: string) {
  const columnValues = JSON.stringify({
    email_mm5aqhxx: {
      email,
      text: email,
    },
  });

  const query = `
    mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId
        item_name: $itemName
        column_values: $columnValues
      ) {
        id
      }
    }
  `;

  const response = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      Authorization: process.env.MONDAY_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        boardId: Number(process.env.MONDAY_BOARD_ID),
        itemName: name,
        columnValues,
      },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Failed to create lead");
  }

  return result.data;
}
