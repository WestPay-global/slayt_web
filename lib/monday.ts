export async function createLead(
  name: string,
  email: string,
  phone: string,
  countryShortName: string,
) {
  const phoneColumnId = process.env.MONDAY_PHONE_COLUMN_ID || "phone_mm7w8bc9";
  const columnValues = JSON.stringify({
    email_mm5aqhxx: {
      email,
      text: email,
    },
    [phoneColumnId]: {
      phone,
      countryShortName,
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

  if (!response.ok || result.errors?.length || !result.data?.create_item?.id) {
    console.error(result.errors);
    throw new Error("Failed to create lead");
  }

  return result.data;
}
